"use client";

import { motion } from "framer-motion";
import type { StatItem } from "@/types";

function StatCard({ value, suffix, label, subLabel }: StatItem) {
  return (
    <div className="min-w-55 sm:min-w-60 rounded-2xl bg-white/40 backdrop-blur-md px-4 py-4">
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl sm:text-4xl font-extrabold text-brand-teal tracking-tight">
          {value}
        </span>
        <span className="text-2xl sm:text-3xl font-extrabold text-brand-teal">
          {suffix}
        </span>
      </div>
      <p className="text-sm font-bold text-slate-900 mt-2 leading-snug">{label}</p>
      {subLabel && (
        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{subLabel}</p>
      )}
    </div>
  );
}

const stats: StatItem[] = [
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

/** Duplicate once — "-50%" translate creates a seamless loop with 2× items. */
const scrollItems = [...stats, ...stats];

export default function TrustBar() {
  return (
    <section
      className="relative z-20 py-8 overflow-hidden bg-transparent"
      aria-label="Key metrics"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        aria-hidden="true"
      >
        {scrollItems.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </motion.div>

      {/* Accessible fallback — screen readers get static list, not the animated marquee */}
      <ul className="sr-only">
        {stats.map((stat) => (
          <li key={stat.label}>
            {stat.value}{stat.suffix} — {stat.label}
            {stat.subLabel ? `: ${stat.subLabel}` : ""}
          </li>
        ))}
      </ul>
    </section>
  );
}
