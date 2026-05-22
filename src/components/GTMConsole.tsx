"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const channelData = {
  BFSI: {
    title: "BFSI Sector",
    desc: "Targeting India's premier private banks, public financial institutions, and insurance leaders.",
    stages: [
      { label: "Market thesis", value: "India ICP", width: "78%" },
      { label: "Executive access", value: "CXO routes", width: "86%" },
      { label: "Revenue motion", value: "GTM plays", width: "72%" },
    ],
    badge: "Enterprise Ready",
  },
  GCCs: {
    title: "Global Capability Centers",
    desc: "Plugging global products directly into the innovation and technology centers of Fortune 500 GCCs.",
    stages: [
      { label: "Market thesis", value: "Fortune 500 GCCs", width: "85%" },
      { label: "Executive access", value: "Site Leaders", width: "80%" },
      { label: "Revenue motion", value: "Co-innovation", width: "78%" },
    ],
    badge: "Scale Qualified",
  },
  GSIs: {
    title: "Global System Integrators",
    desc: "Building joint co-sell programs with top system integrators to scale integration pipelines rapidly.",
    stages: [
      { label: "Market thesis", value: "SI Alliances", width: "70%" },
      { label: "Executive access", value: "Alliance VPs", width: "88%" },
      { label: "Revenue motion", value: "Co-sell plays", width: "65%" },
    ],
    badge: "Alliance Driven",
  },
};

export default function GTMConsole() {
  const [activeChannel, setActiveChannel] = useState<"BFSI" | "GCCs" | "GSIs">("BFSI");

  const nodes = [
    { id: "BFSI", label: "BFSI", detail: "Banks & insurers", icon: Building2 },
    { id: "GCCs", label: "GCCs", detail: "Capability centers", icon: Network },
    { id: "GSIs", label: "GSIs", detail: "Co-sell partners", icon: Users },
  ] as const;

  const currentData = channelData[activeChannel];

  return (
    <section
      id="gtm-console"
      className="section-shell theme-section-light"
      aria-labelledby="console-title"
    >
      {/* Background ambient light */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Context and Value Proposition */}
          <div className="flex flex-col items-start text-left lg:col-span-6">
            <span className="section-eyebrow mb-4">
              <Sparkles size={13} />
              Disciplined Sales Execution
            </span>
            
            <h2
              id="console-title"
              className="mb-6 font-serif text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
            >
              The Investor-Ready GTM Framework.
            </h2>
            
            <p className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              We translate market entries into a predictable, visible revenue motion. 
              By mapping the exact channels and qualifying pipeline routes, we guarantee clear 
              commercial trajectory with zero administrative or delivery drag.
            </p>

            <div className="space-y-4 w-full mb-8">
              <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070b14]/50">
                <span className="p-2.5 rounded-lg bg-brand-teal/10 text-brand-teal shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Zero Delivery Overhead</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Unlike standard consultancies, we focus strictly on high-trust relationships, account strategy, and pipeline acceleration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070b14]/50">
                <span className="p-2.5 rounded-lg bg-brand-rust/10 text-brand-rust shrink-0 mt-0.5">
                  <BarChart3 size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Active Channel Metrics</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Select a channel on the interactive console to view real-time ICP alignment, executive access quality, and active pipeline plays.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#contact" className="primary-button group btn-premium px-7 py-3.5 text-base">
                Deploy GTM Advisory
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Relocated and Upgraded Interactive Console */}
          <div className="lg:col-span-6 w-full">
            <div className="surface-panel relative z-10 rounded-2xl p-5 backdrop-blur-md sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
              {/* Subtle top decoration grid lines */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#109B82 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true" />
              
              <div className="relative z-10 mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-700">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Investor-ready GTM console</p>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">India revenue entry map</h3>
                </div>
                <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/10 p-3 text-brand-teal shadow-inner">
                  <BarChart3 size={22} className="animate-pulse" />
                </div>
              </div>

              {/* Interactive Node Selector */}
              <div className="relative z-10 grid grid-cols-3 gap-3 mb-6">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeChannel === node.id;
                  return (
                    <button
                      key={node.label}
                      type="button"
                      onClick={() => setActiveChannel(node.id)}
                      className={`rounded-xl border p-4 text-center cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "border-brand-teal bg-brand-teal/10 text-brand-teal shadow-lg shadow-brand-teal/10"
                          : "border-slate-200/80 bg-white/80 text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white"
                      }`}
                    >
                      <Icon size={20} className="mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-xs font-extrabold uppercase tracking-wide">{node.label}</p>
                      <p className="mt-1 text-[10px] font-medium leading-tight opacity-75">{node.detail}</p>
                    </button>
                  );
                })}
              </div>

              {/* Content Panel showing pipeline signal */}
              <div className="surface-card relative z-10 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-[#070b14]/90 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChannel}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-brand-teal shadow-md">
                          <CircleDollarSign size={18} />
                        </span>
                        <div>
                          <p className="text-sm font-extrabold text-slate-950 dark:text-white">Pipeline signal: {currentData.title}</p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">{currentData.desc}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                        {currentData.badge}
                      </span>
                    </div>

                    <div className="space-y-4 mt-6">
                      {currentData.stages.map((stage) => (
                        <div key={stage.label}>
                          <div className="mb-1.5 flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-700 dark:text-slate-300">{stage.label}</span>
                            <span className="font-semibold text-brand-teal">{stage.value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: stage.width }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full rounded-full bg-brand-teal"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Extra value cards inside console */}
              <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 mt-6">
                <div className="surface-card rounded-xl p-4 border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40">
                  <ShieldCheck size={18} className="mb-2 text-brand-teal" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white">No delivery drag</p>
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    Pure advisory and sales speed, bypassing implementation bottlenecks.
                  </p>
                </div>
                <div className="surface-card rounded-xl p-4 border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40">
                  <CheckCircle2 size={18} className="mb-2 text-brand-teal" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Boardroom clarity</p>
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    Clear client thesis, mapped accounts, and explicit executive motion.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
