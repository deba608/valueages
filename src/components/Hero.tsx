"use client";

import { motion } from "framer-motion";
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

const pipelineStages = [
  { label: "Market thesis", value: "India ICP", width: "78%" },
  { label: "Executive access", value: "CXO routes", width: "86%" },
  { label: "Revenue motion", value: "GTM plays", width: "72%" },
];

const opportunityNodes = [
  { label: "BFSI", detail: "Banks & insurers", icon: Building2, active: true },
  { label: "GCCs", detail: "Capability centers", icon: Network, active: false },
  { label: "GSIs", detail: "Co-sell partners", icon: Users, active: false },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden hero-gradient bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] pt-28 pb-16 dark:bg-[linear-gradient(180deg,#050911_0%,#0b1221_100%)] md:pt-40 md:pb-24"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 diagram-grid opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/90 to-transparent dark:from-[#060a13]/95" aria-hidden="true" />

      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start text-left lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow mb-6"
          >
            <Sparkles size={13} />
            Enterprise GTM advisory for India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.05 }}
            className="mb-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Turn India enterprise access into a disciplined revenue motion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.12 }}
            className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            VALUEAGES helps global product and SaaS companies build investor-grade GTM strategy, executive access,
            and enterprise sales execution across BFSI, GCC, and GSI ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.18 }}
            className="mb-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href="#contact"
              className="primary-button group btn-premium px-7 py-3.5 text-base"
            >
              Discuss market entry
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#cxo"
              className="secondary-button px-7 py-3.5 text-base"
            >
              View CXO network
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="grid w-full grid-cols-1 gap-3 border-t border-slate-200/80 pt-7 dark:border-slate-800/80 sm:grid-cols-3"
          >
            {[
              ["22+", "Years enterprise software depth"],
              ["100%", "Sales and GTM focus"],
              ["3", "Priority enterprise channels"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{value}</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Pipeline Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <div className="surface-panel relative z-10 rounded-2xl p-5 backdrop-blur-sm sm:p-7" aria-hidden="true">
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-teal/10 dark:bg-brand-teal/5 rounded-full blur-3xl" />

            <div className="relative z-10 mb-5 flex items-start justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-700">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Investor-ready GTM console</p>
                <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">India revenue entry map</h2>
              </div>
              <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/10 p-3 text-brand-teal">
                <BarChart3 size={22} />
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3">
              {opportunityNodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.label}
                    className={`rounded-xl border p-3 text-center transition-all ${
                      node.active
                        ? "border-brand-teal/30 bg-brand-teal/10 text-brand-teal shadow-sm shadow-brand-teal/10"
                        : "border-slate-200 bg-white/70 text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                    }`}
                  >
                    <Icon size={18} className="mx-auto mb-2" />
                    <p className="text-xs font-extrabold uppercase tracking-wide">{node.label}</p>
                    <p className="mt-1 text-[10px] font-medium leading-tight opacity-80">{node.detail}</p>
                  </div>
                );
              })}
            </div>

            <div className="surface-card relative z-10 my-6 rounded-2xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-brand-teal">
                    <CircleDollarSign size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-slate-950 dark:text-white">Pipeline signal</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Executive route quality</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  Qualified
                </span>
              </div>

              <div className="space-y-4">
                {pipelineStages.map((stage) => (
                  <div key={stage.label}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-600 dark:text-slate-300">{stage.label}</span>
                      <span className="font-semibold text-slate-400">{stage.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stage.width }}
                        transition={{ duration: 0.9, delay: 0.25 }}
                        className="h-full rounded-full bg-brand-teal"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="surface-card rounded-xl p-4 transition-colors duration-300">
                <ShieldCheck size={18} className="mb-2 text-brand-teal" />
                <p className="text-sm font-bold text-slate-900 dark:text-white">No delivery drag</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Focused on sales strategy, access, and commercial execution.</p>
              </div>
              <div className="surface-card rounded-xl p-4 transition-colors duration-300">
                <CheckCircle2 size={18} className="mb-2 text-brand-teal" />
                <p className="text-sm font-bold text-slate-900 dark:text-white">Boardroom clarity</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Clear market thesis, account map, and executive motion.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
