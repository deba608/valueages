"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Cpu, Landmark, Network, Sparkles, Zap } from "lucide-react";

const networks = [
  {
    title: "BFSI Leaders",
    subtitle: "Banking, financial services, and insurance",
    description:
      "Executive access routes into digital transformation, technology, and risk stakeholders across banks, insurers, and fintech platforms.",
    tags: ["CIO access", "Risk", "Digital banking"],
    icon: Landmark,
    accent: "teal",
  },
  {
    title: "Global Capability Centers",
    subtitle: "Fortune 500 GCC and shared services hubs",
    description:
      "Relationship pathways into site leaders, transformation offices, and innovation teams running enterprise platforms from India.",
    tags: ["GCCs", "Innovation hubs", "Shared services"],
    icon: Building2,
    accent: "slate",
  },
  {
    title: "GSI Alliances",
    subtitle: "Global and boutique system integrators",
    description:
      "Co-selling strategy with partners that influence enterprise adoption, integrations, and large transformation programs.",
    tags: ["TCS", "Infosys", "Wipro", "Co-sell"],
    icon: Network,
    accent: "warm",
  },
];

const accentClasses = {
  teal: "border-brand-teal/35 bg-brand-teal/10 text-brand-teal",
  slate: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
  warm: "border-brand-tan/35 bg-brand-tan/10 text-brand-rust",
};

export default function CXOConnect() {
  const [activeSegment, setActiveSegment] = useState(0);
  const active = networks[activeSegment];
  const ActiveIcon = active.icon;

  return (
    <section
      id="cxo"
      className="section-shell theme-section-muted"
      aria-labelledby="cxo-title"
    >
      <div className="absolute inset-0 diagram-grid opacity-60" aria-hidden="true" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-brand-teal/8 blur-3xl dark:bg-brand-teal/12" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="section-eyebrow mx-auto mb-3">
            CXO Connect
          </span>
          <h2 id="cxo-title" className="mb-4 font-serif text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            A clear bridge from global product teams to Indian enterprise buyers.
          </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            The network is presented as a disciplined access model: client thesis, VALUEAGES qualification, and direct
            routes to decision makers who can sponsor enterprise adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-5">
            {networks.map((net, idx) => {
              const Icon = net.icon;
              const isActive = activeSegment === idx;

              return (
                <button
                  key={net.title}
                  type="button"
                  onMouseEnter={() => setActiveSegment(idx)}
                  onFocus={() => setActiveSegment(idx)}
                  onClick={() => setActiveSegment(idx)}
                  className={`surface-card interactive-card group rounded-2xl p-5 text-left ${
                    isActive
                      ? "border-brand-teal/35 shadow-xl shadow-brand-teal/10"
                      : ""
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accentClasses[net.accent as keyof typeof accentClasses]}`}>
                      <Icon size={19} />
                    </span>
                    <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:bg-slate-800/80">
                      {isActive ? "Selected route" : "Access route"}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{net.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-teal">{net.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{net.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {net.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="premium-card relative min-h-[520px] overflow-hidden rounded-2xl p-4 sm:p-7">
                <div className="absolute inset-0 diagram-grid opacity-70" aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-teal/15" aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80 dark:border-slate-700" aria-hidden="true" />

              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 680 520" fill="none" aria-hidden="true">
                <path d="M135 260 C230 260 245 260 340 260" stroke="rgba(16,155,130,0.34)" strokeWidth="2" strokeDasharray="8 8" className="animate-flow-dash" />
                <path d="M340 260 C430 150 500 120 570 95" stroke={activeSegment === 0 ? "#109B82" : "rgba(100,116,139,0.25)"} strokeWidth={activeSegment === 0 ? "3" : "2"} strokeDasharray="8 8" className={activeSegment === 0 ? "animate-flow-dash-fast" : ""} />
                <path d="M340 260 C440 260 490 260 575 260" stroke={activeSegment === 1 ? "#109B82" : "rgba(100,116,139,0.25)"} strokeWidth={activeSegment === 1 ? "3" : "2"} strokeDasharray="8 8" className={activeSegment === 1 ? "animate-flow-dash-fast" : ""} />
                <path d="M340 260 C430 370 500 400 570 425" stroke={activeSegment === 2 ? "#109B82" : "rgba(100,116,139,0.25)"} strokeWidth={activeSegment === 2 ? "3" : "2"} strokeDasharray="8 8" className={activeSegment === 2 ? "animate-flow-dash-fast" : ""} />
              </svg>

              <div className="relative z-10 flex min-h-[466px] items-center justify-between gap-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="surface-card w-[31%] rounded-2xl p-4 text-center"
                >
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-slate-800">
                    <Cpu size={22} />
                  </span>
                  <p className="text-sm font-extrabold text-slate-950 dark:text-white">Global Product Company</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">SaaS, AI, automation, and enterprise software teams seeking India growth.</p>
                </motion.div>

                <motion.div
                  key={activeSegment}
                  initial={{ scale: 0.96, opacity: 0.82 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-[30%] rounded-2xl border-2 border-brand-teal bg-slate-950 p-5 text-center text-white shadow-2xl shadow-brand-teal/20 dark:bg-brand-teal/15"
                >
                  <span className="absolute -inset-2 rounded-2xl border border-brand-teal/25" aria-hidden="true" />
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/20 text-brand-teal">
                    <Zap size={22} />
                  </span>
                  <p className="text-base font-black uppercase tracking-wide">VALUEAGES</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal">GTM Advisory</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">Qualifies the account thesis, maps stakeholders, and coordinates executive motion.</p>
                </motion.div>

                <div className="flex w-[31%] flex-col gap-4">
                  {networks.map((net, idx) => {
                    const Icon = net.icon;
                    const isActive = activeSegment === idx;

                    return (
                      <button
                        key={net.title}
                        type="button"
                        onClick={() => setActiveSegment(idx)}
                        onMouseEnter={() => setActiveSegment(idx)}
                        className={`interactive-card rounded-2xl border p-3 text-left shadow-sm ${
                          isActive
                            ? "border-brand-teal/45 bg-brand-teal/10 text-brand-teal shadow-brand-teal/10"
                            : "border-slate-200 bg-white/90 text-slate-500 dark:border-slate-700 dark:bg-slate-800/75 dark:text-slate-400"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-current/10">
                            <Icon size={16} />
                          </span>
                          <div>
                            <p className="text-xs font-extrabold uppercase tracking-wide">{net.title}</p>
                            <p className="mt-0.5 text-[10px] font-medium opacity-75">{net.subtitle}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="surface-card relative z-20 mt-2 rounded-2xl p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accentClasses[active.accent as keyof typeof accentClasses]}`}>
                      <ActiveIcon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-slate-950 dark:text-white">Active path: {active.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Client thesis &rarr; VALUEAGES qualification &rarr; executive introduction.</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-teal px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Connected <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 flex w-fit max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-center text-xs font-semibold text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800/65 dark:text-slate-400">
          <Sparkles size={14} className="shrink-0 text-brand-teal" />
          Bengaluru, Mumbai, Pune, Chennai, Gurgaon, and Hyderabad enterprise hubs.
        </p>
      </div>
    </section>
  );
}
