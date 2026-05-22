"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, BarChart3, Fingerprint, Layers, ShieldAlert, Sparkles, 
  MapPin, ArrowRight, Zap, Code, ShieldCheck, CheckCircle2, ChevronRight
} from "lucide-react";

export default function WhyChooseUs() {
  // State for the active translation item in Card 4 (Positioning Depth)
  const [translatorIndex, setTranslatorIndex] = useState(0);
  const translations = [
    {
      tech: "Siloed legacy data lakes & complex custom API orchestrations",
      value: "Unified real-time automation driving high productivity."
    },
    {
      tech: "Multi-model LLM routing in private VPC infrastructure",
      value: "100% compliant, secure enterprise-grade boardroom AI."
    },
    {
      tech: "Fragmented CRM databases & scattered HRMS software lakes",
      value: "Clean executive pipelines with zero integration bottlenecks."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTranslatorIndex((prev) => (prev + 1) % translations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [translations.length]);

  return (
    <section id="why-us" className="section-shell theme-section-light" aria-labelledby="why-title">
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-brand-tan/8 dark:bg-brand-tan/12 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <span className="section-eyebrow mx-auto mb-3">
            VALUEAGES Advantage
          </span>
          <h2 id="why-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-950 dark:text-white mb-4">
            Built for High-Trust Entry.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            We deliver highly specialized sales leadership with technical authority, 
            eliminating implementation drag and coordinating high-velocity market entry.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(320px,_auto)]">
          
          {/* Card 1: 22+ Years B2B Experience (md:col-span-2) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-effect md:col-span-2 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-md group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/10 dark:border-brand-teal/20">
                  <Layers size={20} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/5 px-2.5 py-1 rounded-full border border-brand-teal/15">
                  Deep Industry Foundation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors duration-300">
                22+ Years of Software Depth
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
                A rare, dual-sided pedigree: 17 years as a core solution architect building complex platforms, 
                followed by 5+ years driving high-performance commercial sales pipelines at regional levels.
              </p>
            </div>

            {/* Micro-Illustration: Premium Horizontal Timeline */}
            <div className="mt-8 border-t border-slate-200/80 dark:border-slate-800/80 pt-6">
              <div className="grid grid-cols-3 gap-4 relative">
                {/* Horizontal connector line */}
                <div className="absolute top-4 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-teal/40 via-brand-rust/20 to-brand-tan/40 pointer-events-none" />
                
                {[
                  { year: "2002 - 2019", title: "Enterprise Tech", detail: "Presales Architecture Depth", accent: "border-brand-teal bg-[#ebf7f5] dark:bg-[#071916] text-brand-teal" },
                  { year: "2019 - 2024", title: "Sales Leader", detail: "ServiceNow, OutSystems, SFDC", accent: "border-brand-rust bg-[#f9ebe6] dark:bg-[#20100a] text-brand-rust" },
                  { year: "2024 - Pres.", title: "GTM Advisory", detail: "Accelerating Market Entry", accent: "border-brand-tan bg-[#fbf5eb] dark:bg-[#1a140b] text-brand-rust" }
                ].map((step, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center text-center relative z-10">
                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black shadow-sm ${step.accent}`}>
                      {sIdx + 1}
                    </span>
                    <span className="mt-3 text-[10px] font-extrabold uppercase tracking-wide text-slate-900 dark:text-white">{step.year}</span>
                    <span className="mt-0.5 text-[9px] font-bold text-brand-teal dark:text-brand-teal/80">{step.title}</span>
                    <span className="mt-1 text-[8px] leading-tight text-slate-400 dark:text-slate-500 hidden sm:block max-w-[110px]">{step.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Proven Sales Leadership */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-effect rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-md group relative overflow-hidden bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900/90 dark:to-[#0a0f18]"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-rust/10 text-brand-rust border border-brand-rust/10 dark:border-brand-rust/20 mb-6">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand-rust transition-colors duration-300">
                Ecosystem Influence
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Orchestrated high-value deals with ServiceNow, Salesforce, and OutSystems, ensuring rapid market expansion.
              </p>
            </div>
            
            {/* Visual: Logo stack or badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['ServiceNow', 'Salesforce', 'OutSystems'].map(brand => (
                <span key={brand} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-brand-rust" />
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Deep India Market Access (Tall Card) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-effect md:row-span-2 rounded-3xl p-6 sm:p-8 flex flex-col border-slate-200/80 dark:border-slate-800 shadow-md group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-tan/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tan/10 text-brand-tan border border-brand-tan/10 dark:border-brand-tan/20 mb-6">
              <MapPin size={20} />
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand-tan transition-colors duration-300">
              CXO Network
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Deeply entrenched in India’s tech hubs, bridging global SaaS products directly with Fortune 500 GCCs.
            </p>

            {/* Interactive Visual Map Concept */}
            <div className="mt-auto pt-8 flex-1 flex flex-col justify-end">
              <div className="relative h-48 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070b14] overflow-hidden flex items-center justify-center">
                {/* Node map simulation */}
                <div className="absolute inset-0 opacity-20 dark:opacity-40" 
                     style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-brand-tan) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border-2 border-brand-tan flex items-center justify-center z-20">
                    <Fingerprint className="text-brand-tan" size={24} />
                  </div>
                  
                  {/* Radiating lines (SVG) */}
                  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-tan/30 animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-tan/20" />
                    <line x1="50" y1="50" x2="10" y2="20" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                    <line x1="50" y1="50" x2="85" y2="15" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                    <line x1="50" y1="50" x2="90" y2="80" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                    <line x1="50" y1="50" x2="15" y2="85" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                  </svg>
                  
                  <div className="absolute -top-6 -left-12 w-6 h-6 bg-white dark:bg-slate-800 rounded-full shadow border border-slate-200 dark:border-slate-700 flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow border border-slate-200 dark:border-slate-700 flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-rust" />
                  </div>
                  <div className="absolute -top-2 right-14 w-5 h-5 bg-white dark:bg-slate-800 rounded-full shadow border border-slate-200 dark:border-slate-700 flex items-center justify-center z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Platform Positioning Depth (md:col-span-2) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-effect md:col-span-2 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 border-slate-200/80 dark:border-slate-800 shadow-md group relative overflow-hidden bg-gradient-to-r from-white to-slate-50 dark:from-[#0a0f18] dark:to-[#0f1724]"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  <BarChart3 size={20} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  Technical Edge
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors duration-300">
                Technology-to-Value Translator
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Converting raw engineering and database specs into clear, compelling executive value statements.
                We bridge the critical gap between product teams and enterprise buyers.
              </p>
            </div>

            {/* Interactive Translation Visual */}
            <div className="flex-1 flex flex-col justify-center bg-white dark:bg-[#070b12] rounded-2xl border border-slate-100 dark:border-slate-800/80 p-5 shadow-inner">
              <div className="flex flex-col h-full relative">
                
                {/* Source Tech */}
                <div className="flex-1 flex items-start gap-3">
                  <div className="mt-1 min-w-[24px]"><Code size={16} className="text-slate-400" /></div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`tech-${translatorIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs font-mono text-slate-500 dark:text-slate-500 leading-relaxed"
                    >
                      {translations[translatorIndex].tech}
                    </motion.p>
                  </AnimatePresence>
                </div>
                
                {/* Conversion divider */}
                <div className="py-3 flex items-center justify-center relative">
                  <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800" />
                  <div className="absolute bg-white dark:bg-[#070b12] px-2 text-brand-teal">
                    <Zap size={14} className="animate-pulse" />
                  </div>
                </div>
                
                {/* Business Value */}
                <div className="flex-1 flex items-end gap-3">
                  <div className="mb-1 min-w-[24px]"><ShieldCheck size={16} className="text-brand-teal" /></div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`val-${translatorIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug"
                    >
                      {translations[translatorIndex].value}
                    </motion.p>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Card 5: Strong Enterprise Network */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-effect rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-md group relative overflow-hidden bg-brand-teal/5 dark:bg-[#071916]"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/10 dark:border-brand-green/20 mb-6">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand-green transition-colors duration-300">
                The Boardroom Advisory
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Clear market thesis, account map, and executive motion to ensure transparent, high-trust pipeline execution.
              </p>
            </div>
            
            <div className="mt-8 flex items-center justify-between border-t border-brand-teal/10 dark:border-brand-teal/20 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Exec Trust</span>
              <ChevronRight size={16} className="text-brand-teal group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 6: Pure GTM Execution */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-effect rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-slate-200/80 dark:border-slate-800 shadow-md group relative overflow-hidden bg-slate-900 dark:bg-black"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
            
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/10 mb-6">
                <ShieldAlert size={20} />
              </div>
              <h3 className="text-xl font-black tracking-tight text-white transition-colors duration-300">
                100% GTM Velocity
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Focused exclusively on enterprise entry, sales strategy, and achieving revenue targets with zero delivery drag.
              </p>
            </div>
            
            <div className="mt-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-brand-teal to-[#22c55e]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-white tracking-tight">100%</span>
                  <span className="text-[8px] font-extrabold text-brand-teal uppercase tracking-widest mt-0.5">VELOCITY</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
