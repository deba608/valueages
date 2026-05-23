"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, LineChart, Users2 } from "lucide-react";
import BlurText from "./BlurText";

const proofPoints = [
  { icon: Globe2, label: "India GTM", value: "Market entry" },
  { icon: Users2, label: "CXO Access", value: "Enterprise buyers" },
  { icon: Building2, label: "GCC + GSI", value: "Partner motions" },
  { icon: LineChart, label: "Pipeline", value: "Value selling" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 flex items-center"
      aria-label="Introduction"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.98)_0%,rgba(240,249,246,0.55)_60%,rgba(255,255,255,0.92)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/4 top-16 h-[38rem] w-[38rem] rounded-full bg-brand-teal/8 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/4 bottom-16 h-[28rem] w-[28rem] rounded-full bg-brand-tan/10 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute left-[8%] top-1/3 h-[16rem] w-[16rem] rounded-full bg-brand-teal/4 blur-3xl animate-float-delayed"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
      
        {/* Headline — BlurText word-by-word animation */}
        <div className="mb-8 mx-auto max-w-5xl">
          <BlurText
            text="Turn India enterprise access into a disciplined revenue motion."
            delay={65}
            animateBy="words"
            direction="bottom"
            className="font-serif text-4xl font-bold leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl"
            stepDuration={0.35}
          />
        </div>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          ValueEdge helps product companies turn UnifyApps capability into executive conversations,
          partner-led pipeline, and enterprise-ready GTM narratives across India.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a href="#contact" className="primary-button group btn-premium px-8 py-4 text-base">
            Discuss Market Entry
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a href="#cxo" className="secondary-button px-8 py-4 text-base">
            View CXO Network
          </a>
        </motion.div>

        {/* Proof-point chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.66 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl mx-auto"
        >
          {proofPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur text-center"
              >
                <Icon size={18} className="mx-auto mb-3 text-brand-teal" aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-wide text-slate-900">{item.label}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-500">{item.value}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
