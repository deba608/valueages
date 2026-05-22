import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import CXOConnect from "@/components/CXOConnect";
import Services from "@/components/Services";
import UnifyAppsPartnership from "@/components/UnifyAppsPartnership";
import ClientWins from "@/components/ClientWins";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Main Assembly */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Hero Banner */}
        <Hero />

        {/* Dynamic Key metrics stats */}
        <TrustBar />

        {/* Detailed Founder advisory Bio */}
        <About />

        {/* Access networks segment */}
        <CXOConnect />

        {/* 8 B2B GTM Services list catalog */}
        <Services />

        {/* Showcase UnifyApps Joint partnership */}
        <UnifyAppsPartnership />

        {/* Gray scale client success logos */}
        <ClientWins />

        {/* 6 Value indicators card grid */}
        <WhyChooseUs />

        {/* Validated lead capture contact form */}
        <Contact />
      </main>

      {/* Styled Multi-column Footer */}
      <Footer />
    </>
  );
}
