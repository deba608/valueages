"use client";

import { Bolt, Users, PieChart, Globe, ShieldCheck, ClipboardList, Target, Calendar } from "lucide-react";
import BorderGlow from "./BorderGlow";

export default function Services() {
  const services = [
    {
      title: "India Market Entry",
      icon: Globe,
      description: "Establish localized ICP, pricing, legal, and operational structures to de-risk and accelerate your regional product launch."
    },
    {
      title: "Enterprise Sales Ops",
      icon: Bolt,
      description: "Design end-to-end sales pipelines, regional account planning matrices, and high-velocity B2B buying cycles."
    },
    {
      title: "CXO Access & GTM",
      icon: Users,
      description: "Leverage direct, high-trust boardroom channels to map and bridge products with qualified decision-makers."
    },
    {
      title: "BFSI & GCC Programs",
      icon: ShieldCheck,
      description: "Target specialized banking, financial networks, and Fortune 500 Global Capability Centers to scale adoption."
    },
    {
      title: "Partner Alliances",
      icon: Target,
      description: "Architect strategic co-selling engines and partnerships with major Global System Integrators (Infosys, TCS, Wipro)."
    },
    {
      title: "Fractional Leadership",
      icon: ClipboardList,
      description: "Deploy experienced country-level executive sales leadership to build pipeline before hiring a full-time team."
    },
    {
      title: "Revenue Forecasting",
      icon: PieChart,
      description: "Establish rigorous quarterly forecasts, deal qualification frameworks (MEDDPICC), and strategic board reporting."
    },
    {
      title: "Program Delivery Readiness",
      icon: Calendar,
      description: "Evaluate delivery capability, presales readiness, and support frameworks to ensure seamless customer onboarding."
    },
  ];

  const glowColorBase = "16 155 130";
  const glowColorsArray = ["#0f766e", "#109B82", "#5D9F9B"];

  return (
    <section id="services" className="section-shell theme-section-light transition-colors duration-500" aria-labelledby="services-title">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="services-title" className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            GTM Services
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Practical, board-ready go-to-market services tailored for global product companies entering India.
          </p>
        </div>

        {/* 4-Column Responsive Grid Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group relative h-full w-full">
                <BorderGlow
                  className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
                  edgeSensitivity={45}
                  glowColor={glowColorBase}
                  backgroundColor="transparent"
                  borderRadius={16}
                  glowRadius={70}
                  glowIntensity={1.4} // Bumped intensity slightly to make it look exceptionally sharp against white backdrops
                  coneSpread={30}
                  animated={true}
                  colors={glowColorsArray}
                >
                  {/* Container wrapper configured to shed its borders dynamically on hover so the glow is unobstructed */}
                  <div className="flex flex-col h-full rounded-xl p-5 sm:p-6 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/90 group-hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                        <Icon size={16} className="stroke-[1.8]" />
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900 transition-colors duration-300">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                  </div>
                </BorderGlow>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
