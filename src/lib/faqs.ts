/**
 * Single source of truth for the FAQ section.
 *
 * Used by both the visible <FAQ /> component and the FAQPage JSON-LD in
 * src/app/page.tsx — keeping the rendered Q&A and the structured data in sync,
 * which is a requirement for Google rich-result eligibility.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What does Valueages do?",
    answer:
      "Valueages is an enterprise go-to-market (GTM) advisory that helps global B2B SaaS and product companies enter, navigate, and accelerate revenue in the Indian market. We provide market-entry strategy, enterprise sales execution, direct CXO access, and partner alliances.",
  },
  {
    question: "Which companies should work with Valueages?",
    answer:
      "We work best with global SaaS and product technology companies that want to establish or scale enterprise revenue in India — typically those targeting BFSI accounts, Global Capability Centers (GCCs), or Global System Integrator (GSI) partnerships, and those who need a fractional country sales leader rather than a full local team on day one.",
  },
  {
    question: "What is the UnifyApps partnership?",
    answer:
      "Valueages is the strategic sales partner to UnifyApps in India. We drive UnifyApps' enterprise go-to-market motion, opening CXO relationships and structuring partner-led pipeline across BFSI, GCC, and GSI ecosystems.",
  },
  {
    question: "Which sectors and accounts do you focus on?",
    answer:
      "Our deepest relationships are in BFSI (banking, financial services, and insurance), Global Capability Centers of Fortune 500 enterprises, and Global System Integrators. We bridge global products directly with the decision-makers in these accounts.",
  },
  {
    question: "Do you offer fractional sales leadership?",
    answer:
      "Yes. Many clients engage Valueages as a fractional country sales leader for India — providing senior enterprise sales leadership, account strategy, and CXO-level execution without the cost and ramp time of building a full in-country team upfront.",
  },
  {
    question: "How quickly can you help us enter the Indian market?",
    answer:
      "Because we bring existing CXO relationships, a defined account map, and a proven enterprise sales motion, we compress the typical market-entry timeline. The exact pace depends on your product fit and target segment — we map this in the first conversation.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with a single, no-pitch conversation about your India GTM situation. Reach out via the contact form or email manas.das@valueages.com, and Manas Das, our Managing Director & GTM Lead, will respond within 24 hours.",
  },
];
