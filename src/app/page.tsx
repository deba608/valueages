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
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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

        {/* 13. ValueEdge advantage indicators */}
        <WhyChooseUs />

        {/* 14. Contact & lead capture */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
