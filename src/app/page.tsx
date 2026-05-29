import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import UnifyAppsPartnership from "@/components/UnifyAppsPartnership";
import GSIStrategy from "@/components/GSIStrategy";
import GCCStrategy from "@/components/GCCStrategy";
import ValueSelling from "@/components/ValueSelling";
import ProductExpansion from "@/components/ProductExpansion";
import CXOConnect from "@/components/CXOConnect";
import GTMConsole from "@/components/GTMConsole";
import Services from "@/components/Services";
import ClientWins from "@/components/ClientWins";
import WhoShouldContact from "@/components/WhoShouldContact";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { faqs } from "@/lib/faqs";

const SITE_URL = "https://valueages.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Valueages",
      url: SITE_URL,
      logo: `${SITE_URL}/Nav_logo1.svg`,
      founder: {
        "@type": "Person",
        name: "Manas Das",
        jobTitle: "Managing Director & GTM Lead",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "business inquiries",
        email: "manas.das@valueages.com",
        telephone: "+919654017778",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
      sameAs: ["https://unifyapps.com"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professional-service`,
      name: "Valueages",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/Nav_logo1.svg`,
      description:
        "India enterprise GTM advisory for global SaaS and product companies, including CXO access, BFSI relationships, GCC programs, and GSI alliances.",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "DLF Cyber City, Patia",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: [
        "India market entry advisory",
        "Enterprise sales strategy",
        "SaaS go-to-market consulting",
        "Fractional sales leadership",
        "BFSI CXO access",
        "GCC program advisory",
        "GSI partner alliances",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Valueages",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "ContactAction",
        target: `${SITE_URL}/#contact`,
        name: "Contact Valueages",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        {/* 1. CXO Hero — India GTM & UnifyApps partnership */}
        <Hero />

        {/* 2. Strategic proof points */}
        <TrustBar />

        {/* 3. Founder advisory & leadership credentials */}
        <About />

        {/* 4. UnifyApps strategic partnership */}
        <UnifyAppsPartnership />

        {/* 5. GSI Go-To-Market Strategy */}
        <GSIStrategy />

        {/* 6. GCC AI & Digital Transformation */}
        <GCCStrategy />

        {/* 7. Value Selling Methodology */}
        <ValueSelling />

        {/* 8. Product Companies Expanding Into India */}
        <ProductExpansion />

        {/* 9. CXO Access network */}
        <CXOConnect />

        {/* 10. GTM Services catalog */}
        <Services />

        {/* 11. India revenue entry map */}
        <GTMConsole />

        {/* 12. Case study narratives */}
        <ClientWins />

        {/* 13. Ideal fit — who should contact us */}
        <WhoShouldContact />

        {/* 14. Valueages advantage indicators */}
        <WhyChooseUs />

        {/* 15. Frequently asked questions (FAQPage rich result) */}
        <FAQ />

        {/* 16. Contact & lead capture */}
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}
