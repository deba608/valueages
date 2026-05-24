import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Valueages — India Enterprise GTM Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #f8faf9 0%, #edf7f4 50%, #f8faf9 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle teal glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,155,130,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(16,155,130,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Partner badge */}
        <div
          style={{
            position: "absolute",
            top: "56px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "100px",
            border: "1px solid rgba(16,155,130,0.25)",
            background: "rgba(16,155,130,0.08)",
            padding: "8px 18px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#109B82" }} />
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#109B82", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Strategic Partner · UnifyApps India
          </span>
        </div>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{ width: "32px", height: "3px", background: "#109B82", borderRadius: "2px" }} />
          <span style={{ fontSize: "14px", fontWeight: 800, color: "#109B82", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            India Enterprise GTM Advisory
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#0f172a",
            margin: "0 0 24px",
            maxWidth: "800px",
          }}
        >
          Expand Into India with Confidence
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "20px",
            color: "#475569",
            margin: "0 0 48px",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Direct CXO access · BFSI, GCC &amp; GSI networks · Fractional sales leadership
        </p>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.01em" }}>
            VALUEAGES
          </span>
          <div style={{ width: "1px", height: "24px", background: "#cbd5e1" }} />
          <span style={{ fontSize: "16px", color: "#64748b", fontWeight: 500 }}>valueages.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
