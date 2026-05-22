import React from "react";
import { Bolt, Users, PieChart, Globe, ShieldCheck, ClipboardList, Target, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    { title: "India Market Entry", icon: Globe },
    { title: "Enterprise Sales Ops", icon: Bolt },
    { title: "CXO Access & GTM", icon: Users },
    { title: "BFSI & GCC Programs", icon: ShieldCheck },
    { title: "Partner Alliances", icon: Target },
    { title: "Fractional Leadership", icon: ClipboardList },
    { title: "Revenue Forecasting", icon: PieChart },
    { title: "Program Delivery Readiness", icon: Calendar },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcf8_100%)] dark:bg-[#050911]" aria-labelledby="services-title">
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
              <div key={s.title} className="rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white/90 dark:bg-slate-800/60 p-6 text-left shadow-sm shadow-slate-200/60 dark:shadow-none hover:-translate-y-1 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Practical advisory to align sales, partners, and executive access for sustained revenue.</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
