import { NextRequest } from "next/server";

// Prevent Next.js from statically evaluating this route during build.
export const dynamic = "force-dynamic";
export const runtime = "edge";

const SYSTEM_PROMPT = `You are the Valueages AI assistant — a knowledgeable, professional, and concise advisor representing Valueages, a premier enterprise GTM (Go-To-Market) advisory firm.

About Valueages:
- Helps global B2B product and SaaS tech companies enter, navigate, and accelerate revenue in the Indian market
- Led by Manas Das, a seasoned enterprise sales and GTM leader with 20+ years of experience
- Strategic sales partner to UnifyApps in India
- Based in DLF Cyber City, Patia, Bhubaneswar

Core Services:
1. India Market Entry Strategy — market sizing, GTM playbooks, segment targeting
2. Enterprise Sales Operations — pipeline building, deal structuring, account penetration
3. BFSI & GCC Account Targeting — specialized focus on Banking, Financial Services, Insurance, and Global Capability Centers
4. GSI Partner Alliances — building and leveraging Global System Integrator partnerships
5. Fractional CRO/VP Sales Leadership — embedded senior sales leadership without full-time cost

Key Differentiators:
- Deep India enterprise network across BFSI, GCC, IT/ITeS, and manufacturing sectors
- Proven track record with Fortune 500 and mid-market technology companies
- UnifyApps strategic partnership — exclusive India sales representation
- Outcome-based engagement models (retainer + success fee)

Contact:
- Email: manas.das@valueages.com
- Phone: +91 9654017778
- Location: DLF Cyber City, Patia, Bhubaneswar

Instructions:
- Be concise, professional, and helpful
- Answer questions about Valueages services, India market entry, GTM strategy, and enterprise sales
- For pricing and custom engagements, direct users to contact Manas Das directly
- Keep responses under 150 words unless a detailed explanation is genuinely needed
- Never make up specific client names, revenue figures, or guarantees
- If asked something outside your scope, politely redirect to scheduling a consultation`;

// In-memory rate limiter: 10 req/min per IP.
// Note: Cloudflare Workers are ephemeral — this map is per-isolate, not global.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

type ChatMessage = { role: "user" | "assistant"; content: string };

type GroqStreamChunk = {
  choices?: Array<{
    delta?: {
      content?: string;
    };
  }>;
};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  if (entry.count >= 10) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please wait a moment." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  let messages: ChatMessage[];

  try {
    const body = await req.json();
    messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Invalid messages");
    }

    // Validate each message
    for (const msg of messages) {
      if (!["user", "assistant"].includes(msg.role) || typeof msg.content !== "string") {
        throw new Error("Invalid message format");
      }
      if (msg.content.length > 2000) {
        throw new Error("Message too long");
      }
    }

    // Cap conversation history at last 10 messages to control token usage
    const recentMessages = messages.slice(-10);

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY is not configured.");
    }

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...recentMessages,
        ],
        stream: true,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!groqResponse.ok || !groqResponse.body) {
      throw new Error("Groq request failed.");
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const readable = new ReadableStream({
      async start(controller) {
        const reader = groqResponse.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";

            for (const rawLine of lines) {
              const line = rawLine.trim();
              if (!line.startsWith("data: ")) continue;

              const data = line.slice(6);
              if (data === "[DONE]") continue;

              const parsed = JSON.parse(data) as GroqStreamChunk;
              const text = parsed.choices?.[0]?.delta?.content ?? "";
              if (text) {
                controller.enqueue(encoder.encode(text));
              }
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          reader.releaseLock();
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    const isValidation = ["Invalid messages", "Invalid message format", "Message too long"].includes(message);

    return new Response(
      JSON.stringify({ error: isValidation ? message : "Something went wrong. Please try again." }),
      {
        status: isValidation ? 400 : 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
