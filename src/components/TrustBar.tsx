"use client";

import { motion } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  subLabel?: string;
}

function StatCard({
  value,
  suffix,
  label,
  subLabel,
}: StatItemProps) {
  return (
    <div className="min-w-55 sm:min-w-60 rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl px-4 py-4 shadow-sm">
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl sm:text-4xl font-extrabold text-brand-teal tracking-tight">
          {value}
        </span>

        <span className="text-2xl sm:text-3xl font-extrabold text-brand-teal">
          {suffix}
        </span>
      </div>

      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-2 leading-snug">
        {label}
      </p>

      {subLabel && (
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
          {subLabel}
        </p>
      )}
    </div>
  );
}

export default function TrustBar() {
  const stats = [
    {
      value: 22,
      suffix: "+",
      label: "Enterprise Software",
      subLabel: "Technical & commercial track record",
    },
    {
      value: 5,
      suffix: "+",
      label: "Top-Tier Sales Leadership",
      subLabel: "At ServiceNow, OutSystems, Salesforce",
    },
    {
      value: 5,
      suffix: "+",
      label: "Enterprise Wins Closed",
      subLabel: "Through strategic partner deals",
    },
    {
      value: 100,
      suffix: "%",
      label: "Pure Sales & GTM Focus",
      subLabel: "Zero delivery or implementation overhead",
    },
  ];

  return (
    <section
      className="relative z-20 py-8 overflow-hidden border-y border-slate-200/80 dark:border-slate-800 trust-bar-glass"
      aria-label="Key metrics"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-white dark:from-[#020617] to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-white dark:from-[#020617] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 24,
            ease: "linear",
          }}
        >
          {[...stats, ...stats].map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              subLabel={stat.subLabel}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}