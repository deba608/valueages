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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Valueages",
  url: "https://valueages.com",
  logo: "https://valueages.com/Nav_logo1.svg",
  description:
    "Specialized go-to-market advisory helping global SaaS and product companies expand in India. Direct CXO, BFSI, GCC, and GSI access from day one.",
  founder: {
    "@type": "Person",
    name: "Manas Das",
    jobTitle: "Managing Director & GTM Lead",
    email: "manas.das@valueages.com",
    telephone: "+919654017778",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
    streetAddress: "DLF Cyber City, Patia",
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: [
    "India Market Entry",
    "Enterprise Sales Strategy",
    "GTM Advisory",
    "Fractional Sales Leadership",
    "BFSI CXO Access",
    "GCC Programme Management",
    "GSI Partner Alliances",
  ],
  sameAs: ["https://unifyapps.com"],
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

        {/* 14. Contact & lead capture */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
