import React from "react";
import { Bolt, Users, PieChart, Globe, ShieldCheck, ClipboardList, Target, Calendar } from "lucide-react";

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

  return (
    <section id="services" className="section-shell theme-section-light" aria-labelledby="services-title">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10">
          <h2 id="services-title" className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
            GTM Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">Practical, board-ready go-to-market services tailored for global product companies entering India.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass-effect interactive-card rounded-2xl p-6 text-left">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
