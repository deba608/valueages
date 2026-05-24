"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Award, BarChart3, Fingerprint, Layers, ShieldAlert, Sparkles, 
  MapPin, Zap, Code, ShieldCheck, CheckCircle2, ChevronRight
} from "lucide-react";
import BorderGlow from "./BorderGlow";
import SectionAmbient from "./shared/SectionAmbient";
import { cardThemes } from "@/lib/cardThemes";

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


  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="why-us" 
      className="section-shell theme-section-light relative overflow-hidden transition-colors duration-500 py-24 sm:py-32" 
      aria-labelledby="why-title"
    >
      <SectionAmbient />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-semibold text-brand-teal shadow-xs mb-4"
          >
            <Sparkles size={13} className="text-brand-teal animate-pulse" />
            VALUEAGES Advantage
          </motion.div>

          <motion.h2 
            id="why-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-950"
          >
            Built for <span className="bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal-light bg-clip-text text-transparent">High-Trust Entry</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            We deliver highly specialized sales leadership with technical authority, 
            eliminating implementation drag and coordinating high-velocity market entry.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(320px,_auto)] relative z-10"
        >
          
          {/* Card 1: 22+ Years B2B Experience (md:col-span-2) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 group relative h-full w-full"
          >
            <BorderGlow
              className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
              edgeSensitivity={45}
              glowColor={cardThemes.teal.glowBase}
              backgroundColor="transparent"
              borderRadius={24}
              glowRadius={70}
              glowIntensity={1.4}
              coneSpread={30}
              animated={true}
              colors={cardThemes.teal.glowColors}
            >
              <div className="flex flex-col h-full justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${cardThemes.teal.iconBg}`}>
                      <Layers size={20} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${cardThemes.teal.badge}`}>
                      Deep Industry Foundation
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-teal transition-colors duration-300">
                    22+ Years of Software Depth
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-2xl">
                    A rare, dual-sided pedigree: 17 years as a core solution architect building complex platforms, 
                    followed by 5+ years driving high-performance commercial sales pipelines at regional levels.
                  </p>
                </div>

                {/* Micro-Illustration: Premium Horizontal Timeline */}
                <div className="mt-8 border-t border-slate-200/80 pt-6">
                  <div className="grid grid-cols-3 gap-4 relative">
                    {/* Horizontal connector line */}
                    <div className="absolute top-4 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-teal/40 via-brand-rust/20 to-brand-tan/40 pointer-events-none" />
                    
                    {[
                      { year: "2002 - 2019", title: "Enterprise Tech", detail: "Presales Architecture Depth", accent: "border-brand-teal bg-brand-teal/5 text-brand-teal" },
                      { year: "2019 - 2024", title: "Sales Leader", detail: "ServiceNow, OutSystems, SFDC", accent: "border-brand-rust bg-brand-rust/5 text-brand-rust" },
                      { year: "2024 - Pres.", title: "GTM Advisory", detail: "Accelerating Market Entry", accent: "border-brand-tan bg-brand-tan/5 text-brand-rust" }
                    ].map((step, sIdx) => (
                      <div key={sIdx} className="flex flex-col items-center text-center relative z-10">
                        <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black shadow-sm transition-transform duration-300 group-hover:scale-110 ${step.accent}`}>
                          {sIdx + 1}
                        </span>
                        <span className="mt-3 text-[10px] font-extrabold uppercase tracking-wide text-slate-900">{step.year}</span>
                        <span className="mt-0.5 text-[9px] font-bold text-brand-teal">{step.title}</span>
                        <span className="mt-1 text-[8px] leading-tight text-slate-600 hidden sm:block max-w-[110px]">{step.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 2: Ecosystem Influence */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-1 group relative h-full w-full"
          >
            <BorderGlow
              className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
              edgeSensitivity={45}
              glowColor={cardThemes.rust.glowBase}
              backgroundColor="transparent"
              borderRadius={24}
              glowRadius={70}
              glowIntensity={1.4}
              coneSpread={30}
              animated={true}
              colors={cardThemes.rust.glowColors}
            >
              <div className="flex flex-col h-full justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                <div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 mb-6 border border-brand-rust/10 bg-brand-rust/5 text-brand-rust group-hover:bg-brand-rust group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(184,90,58,0.4)]">
                    <Award size={20} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-rust transition-colors duration-300">
                    Ecosystem Influence
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Orchestrated high-value deals with ServiceNow, Salesforce, and OutSystems, ensuring rapid market expansion.
                  </p>
                </div>
                
                {/* Visual: Logo stack or badges */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {['ServiceNow', 'Salesforce', 'OutSystems'].map(brand => (
                    <span key={brand} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center gap-1.5 transition-colors duration-300 group-hover:border-brand-rust/30">
                      <CheckCircle2 size={12} className="text-brand-rust" />
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 3: CXO Network */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:row-span-2 group relative h-full w-full"
          >
            <BorderGlow
              className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
              edgeSensitivity={45}
              glowColor={cardThemes.tan.glowBase}
              backgroundColor="transparent"
              borderRadius={24}
              glowRadius={70}
              glowIntensity={1.4}
              coneSpread={30}
              animated={true}
              colors={cardThemes.tan.glowColors}
            >
              <div className="flex flex-col h-full justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                <div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 mb-6 border border-brand-tan/10 bg-brand-tan/5 text-brand-tan group-hover:bg-brand-tan group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(201,154,90,0.4)]">
                    <MapPin size={20} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-tan transition-colors duration-300">
                    CXO Network
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Deeply entrenched in India’s tech hubs, bridging global SaaS products directly with Fortune 500 GCCs.
                  </p>
                </div>

                {/* Interactive Visual Map Concept */}
                <div className="mt-auto pt-8 flex-1 flex flex-col justify-end">
                  <div className="relative h-48 w-full rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:border-brand-tan/30">
                    {/* Node map simulation */}
                    <div className="absolute inset-0 opacity-20" 
                         style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-brand-tan) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-brand-tan flex items-center justify-center z-20">
                        <Fingerprint className="text-brand-tan" size={24} />
                      </div>
                      
                      {/* Radiating lines (SVG) */}
                      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-tan/30 animate-pulse" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-tan/20" />
                        <line x1="50" y1="50" x2="10" y2="20" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                        <line x1="50" y1="50" x2="85" y2="15" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                        <line x1="50" y1="50" x2="90" y2="80" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                        <line x1="50" y1="50" x2="15" y2="85" stroke="currentColor" strokeWidth="1" className="text-brand-tan/40" />
                      </svg>
                      
                      <div className="absolute -top-6 -left-12 w-6 h-6 bg-white rounded-full shadow border border-slate-200 flex items-center justify-center z-10">
                        <span className="w-2 h-2 rounded-full bg-brand-teal" />
                      </div>
                      <div className="absolute -bottom-8 -right-8 w-8 h-8 bg-white rounded-full shadow border border-slate-200 flex items-center justify-center z-10">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-rust" />
                      </div>
                      <div className="absolute -top-2 right-14 w-5 h-5 bg-white rounded-full shadow border border-slate-200 flex items-center justify-center z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 4: Platform Positioning Depth (md:col-span-2) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-2 group relative h-full w-full"
          >
            <BorderGlow
              className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
              edgeSensitivity={45}
              glowColor={cardThemes.green.glowBase}
              backgroundColor="transparent"
              borderRadius={24}
              glowRadius={70}
              glowIntensity={1.4}
              coneSpread={30}
              animated={true}
              colors={cardThemes.green.glowColors}
            >
              <div className="flex flex-col md:flex-row gap-8 h-full justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-green/10 bg-brand-green/5 text-brand-green transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(79,143,123,0.4)]">
                      <BarChart3 size={20} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider border border-brand-green/10 bg-brand-green/5 text-brand-green px-2.5 py-1 rounded-full">
                      Technical Edge
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-green transition-colors duration-300">
                    Technology-to-Value Translator
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Converting raw engineering and database specs into clear, compelling executive value statements.
                    We bridge the critical gap between product teams and enterprise buyers.
                  </p>
                </div>

                {/* Interactive Translation Visual */}
                <div className="flex-1 flex flex-col justify-center bg-slate-50/50 rounded-2xl border border-slate-200/60 p-5 shadow-inner transition-colors duration-300 group-hover:border-brand-green/30">
                  <div className="flex flex-col h-full relative">
                    
                    {/* Source Tech */}
                    <div className="flex-1 flex items-start gap-3">
                      <div className="mt-1 min-w-[24px]"><Code size={16} className="text-slate-500" /></div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`tech-${translatorIndex}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs font-mono text-slate-600 leading-relaxed"
                        >
                          {translations[translatorIndex].tech}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                    
                    {/* Conversion divider */}
                    <div className="py-3 flex items-center justify-center relative">
                      <div className="h-[1px] w-full bg-slate-200" />
                      <div className="absolute bg-slate-50 px-2 text-brand-green">
                        <Zap size={14} className="animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Business Value */}
                    <div className="flex-1 flex items-end gap-3">
                      <div className="mb-1 min-w-[24px]"><ShieldCheck size={16} className="text-brand-green" /></div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`val-${translatorIndex}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-sm font-semibold text-slate-800 leading-snug"
                        >
                          {translations[translatorIndex].value}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 5: Strong Enterprise Network */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-1 group relative h-full w-full"
          >
            <BorderGlow
              className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
              edgeSensitivity={45}
              glowColor={cardThemes.teal.glowBase}
              backgroundColor="transparent"
              borderRadius={24}
              glowRadius={70}
              glowIntensity={1.4}
              coneSpread={30}
              animated={true}
              colors={cardThemes.teal.glowColors}
            >
              <div className="flex flex-col h-full justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                <div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 mb-6 border border-brand-teal/10 bg-brand-teal/5 text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(16,155,130,0.4)]">
                    <Sparkles size={20} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-teal transition-colors duration-300">
                    The Boardroom Advisory
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Clear market thesis, account map, and executive motion to ensure transparent, high-trust pipeline execution.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Exec Trust</span>
                  <ChevronRight size={16} className="text-brand-teal group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 6: Pure GTM Execution */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="md:col-span-1 group relative h-full w-full"
          >
            <BorderGlow
              className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
              edgeSensitivity={45}
              glowColor={cardThemes.rust.glowBase}
              backgroundColor="transparent"
              borderRadius={24}
              glowRadius={70}
              glowIntensity={1.4}
              coneSpread={30}
              animated={true}
              colors={cardThemes.rust.glowColors}
            >
              <div className="flex flex-col h-full justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                <div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 mb-6 border border-brand-rust/10 bg-brand-rust/5 text-brand-rust group-hover:bg-brand-rust group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(184,90,58,0.4)]">
                    <ShieldAlert size={20} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-rust transition-colors duration-300">
                    100% GTM Velocity
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Focused exclusively on enterprise entry, sales strategy, and achieving revenue targets with zero delivery drag.
                  </p>
                </div>
                
                <div className="mt-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-brand-teal to-[#22c55e]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-slate-900 tracking-tight">100%</span>
                      <span className="text-[8px] font-extrabold text-brand-teal uppercase tracking-widest mt-0.5">VELOCITY</span>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
