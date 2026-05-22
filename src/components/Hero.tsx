"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
      aria-label="Introduction"
    >
      {/* Decorative clean background mesh - subtle and elegant with no messy mud layers */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(#109B82 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
      
      {/* Sleek ambient spot glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 dark:bg-brand-teal/[0.07] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-eyebrow mb-8 px-4 py-1.5 border border-brand-teal/20 bg-brand-teal/[0.04] dark:bg-brand-teal/10 shadow-[0_2px_12px_rgba(16,155,130,0.06)]"
        >
          <Sparkles size={13} className="text-brand-teal shrink-0" />
          Enterprise GTM advisory for India
        </motion.span>

        {/* Main Heading with premium BlurText animation */}
        <div className="mb-6 max-w-4xl flex justify-center">
          <BlurText
            text="Turn India enterprise access into a disciplined revenue motion."
            delay={80}
            animateBy="words"
            direction="bottom"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] tracking-tight text-slate-950 dark:text-white justify-center text-center font-bold"
            stepDuration={0.4}
          />
        </div>

        {/* Sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-3xl text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed font-normal"
        >
          VALUEAGES helps global product and SaaS companies build investor-grade GTM strategy, 
          executive access, and enterprise sales execution across BFSI, GCC, and GSI ecosystems.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mb-14 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="#contact"
            className="primary-button group btn-premium px-8 py-4 text-base shadow-lg shadow-brand-teal/20"
          >
            Discuss market entry
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#cxo"
            className="secondary-button px-8 py-4 text-base"
          >
            View CXO network
          </a>
        </motion.div>

      </div>
    </section>
  );
}
