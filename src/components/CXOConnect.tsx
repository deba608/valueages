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
                  className={`surface-card interactive-card group rounded-2xl p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-brand-teal bg-gradient-to-br from-white to-brand-teal/[0.03] dark:from-slate-900/90 dark:to-brand-teal/[0.05] shadow-xl shadow-brand-teal/5 dark:shadow-brand-teal/10"
                      : "hover:border-slate-300 hover:bg-slate-50/50 dark:hover:border-slate-700 dark:hover:bg-slate-900/30"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300 ${accentClasses[net.accent as keyof typeof accentClasses]}`}>
                      <Icon size={19} />
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${
                      isActive 
                        ? "bg-brand-teal/10 text-brand-teal border border-brand-teal/20 shadow-[0_0_12px_rgba(16,155,130,0.12)]" 
                        : "bg-slate-50 text-slate-400 dark:bg-slate-800/80"
                    }`}>
                      {isActive ? "Selected route" : "Access route"}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white transition-colors duration-300">{net.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-teal">{net.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{net.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {net.tags.map((tag) => (
                      <span key={tag} className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${
                        isActive
                          ? "border-brand-teal/25 bg-brand-teal/[0.04] text-brand-teal dark:bg-brand-teal/10"
                          : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400"
                      }`}>
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
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-teal/15 animate-pulse-slow" aria-hidden="true" />
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80 dark:border-slate-700" aria-hidden="true" />

              {/* Dedicated relative diagram area to mathematically guarantee pixel-perfect connector lines */}
              <div className="relative h-[466px] w-full">
                {/* Mathematically-locked percentage-based connector overlay */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none" 
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="laser-active" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#109B82" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0FA88A" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Left connection to Center Card (Always active) */}
                  <path d="M 13 50 L 50 50" fill="none" stroke="rgba(16,155,130,0.18)" strokeWidth="6" vectorEffect="non-scaling-stroke" filter="url(#laser-glow)" />
                  <path d="M 13 50 L 50 50" fill="none" stroke="url(#laser-active)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="6 6" className="animate-flow-dash" />

                  {/* Center to Top Button (Path 1) */}
                  <path d="M 50 50 C 58 50, 64 16.7, 72 16.7" fill="none" stroke={activeSegment === 0 ? "rgba(16,155,130,0.18)" : "rgba(148,163,184,0.08)"} strokeWidth={activeSegment === 0 ? "6" : "2"} vectorEffect="non-scaling-stroke" filter={activeSegment === 0 ? "url(#laser-glow)" : undefined} />
                  <path d="M 50 50 C 58 50, 64 16.7, 72 16.7" fill="none" stroke={activeSegment === 0 ? "url(#laser-active)" : "rgba(148,163,184,0.25)"} strokeWidth={activeSegment === 0 ? "2" : "1.2"} vectorEffect="non-scaling-stroke" strokeDasharray={activeSegment === 0 ? "8 8" : "4 4"} className={activeSegment === 0 ? "animate-flow-dash-fast" : ""} />

                  {/* Center to Middle Button (Path 2) */}
                  <path d="M 50 50 L 72 50" fill="none" stroke={activeSegment === 1 ? "rgba(16,155,130,0.18)" : "rgba(148,163,184,0.08)"} strokeWidth={activeSegment === 1 ? "6" : "2"} vectorEffect="non-scaling-stroke" filter={activeSegment === 1 ? "url(#laser-glow)" : undefined} />
                  <path d="M 50 50 L 72 50" fill="none" stroke={activeSegment === 1 ? "url(#laser-active)" : "rgba(148,163,184,0.25)"} strokeWidth={activeSegment === 1 ? "2" : "1.2"} vectorEffect="non-scaling-stroke" strokeDasharray={activeSegment === 1 ? "8 8" : "4 4"} className={activeSegment === 1 ? "animate-flow-dash-fast" : ""} />

                  {/* Center to Bottom Button (Path 3) */}
                  <path d="M 50 50 C 58 50, 64 83.3, 72 83.3" fill="none" stroke={activeSegment === 2 ? "rgba(16,155,130,0.18)" : "rgba(148,163,184,0.08)"} strokeWidth={activeSegment === 2 ? "6" : "2"} vectorEffect="non-scaling-stroke" filter={activeSegment === 2 ? "url(#laser-glow)" : undefined} />
                  <path d="M 50 50 C 58 50, 64 83.3, 72 83.3" fill="none" stroke={activeSegment === 2 ? "url(#laser-active)" : "rgba(148,163,184,0.25)"} strokeWidth={activeSegment === 2 ? "2" : "1.2"} vectorEffect="non-scaling-stroke" strokeDasharray={activeSegment === 2 ? "8 8" : "4 4"} className={activeSegment === 2 ? "animate-flow-dash-fast" : ""} />
                </svg>

                {/* Exact height bounding box to guarantee pixel perfect alignment */}
                <div className="relative z-10 flex h-full items-center justify-between gap-4">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-effect w-[26%] min-w-0 rounded-2xl p-4 text-center border-slate-200/80 dark:border-slate-800"
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
                    className="relative w-[26%] min-w-0 rounded-2xl border-2 border-brand-teal bg-gradient-to-br from-white/95 to-brand-teal/[0.08] p-5 text-center shadow-xl shadow-brand-teal/10 backdrop-blur-md dark:from-[#071916]/95 dark:to-[#041513]/95 dark:shadow-brand-teal/20"
                  >
                    <span className="absolute -inset-2 rounded-2xl border border-brand-teal/30 animate-pulse-slow" aria-hidden="true" />
                    <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10 dark:bg-brand-teal/20 text-brand-teal shadow-inner shadow-brand-teal/25">
                      <Zap size={22} className="animate-pulse" />
                    </span>
                    <p className="text-base font-black uppercase tracking-wide text-slate-950 dark:text-white">VALUEAGES</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal">GTM Advisory</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">Qualifies the account thesis, maps stakeholders, and coordinates executive motion.</p>
                  </motion.div>

                  {/* Highly responsive CSS Grid matching top, middle, and bottom paths */}
                  <div className="grid w-[28%] min-w-0 h-full grid-rows-3 gap-4 py-2 self-stretch">
                    {networks.map((net, idx) => {
                      const Icon = net.icon;
                      const isActive = activeSegment === idx;

                      return (
                        <div key={net.title} className="flex items-center min-w-0">
                          <button
                            type="button"
                            onClick={() => setActiveSegment(idx)}
                            onMouseEnter={() => setActiveSegment(idx)}
                            className={`w-full interactive-card rounded-xl border p-3 text-left shadow-sm transition-all duration-300 relative overflow-hidden ${
                              isActive
                                ? "border-brand-teal bg-gradient-to-r from-brand-teal/15 to-brand-teal/5 text-brand-teal shadow-md shadow-brand-teal/15 dark:from-brand-teal/25"
                                : "border-slate-200/80 bg-white/95 text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300 hover:border-slate-300 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                                isActive
                                  ? "bg-brand-teal text-white shadow-sm shadow-brand-teal/20"
                                  : "bg-slate-100 text-slate-500 dark:bg-slate-800/80 dark:text-slate-400"
                              }`}>
                                <Icon size={14} />
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className={`text-[10px] font-extrabold uppercase tracking-wide truncate transition-colors duration-300 ${
                                  isActive ? "text-slate-950 dark:text-white" : "text-slate-700 dark:text-slate-300"
                                }`}>{net.title}</p>
                                <p className="mt-0.5 text-[8px] font-semibold opacity-75 truncate">{net.subtitle}</p>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="glass-effect relative z-20 mt-2 rounded-2xl p-4 border-slate-200/80 dark:border-slate-800 shadow-lg">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 ${accentClasses[active.accent as keyof typeof accentClasses]}`}>
                      <ActiveIcon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-slate-950 dark:text-white">Active path: {active.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Client thesis &rarr; VALUEAGES qualification &rarr; executive introduction.</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
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
