"use client";

import { motion, Variants } from "framer-motion";
import { 
  Bolt, 
  Users, 
  PieChart, 
  Globe, 
  ShieldCheck, 
  ClipboardList, 
  Target, 
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";
import BorderGlow from "./BorderGlow";
import SectionAmbient from "./shared/SectionAmbient";
import { cardThemes } from "@/lib/cardThemes";
import type { CardThemeKey } from "@/lib/cardThemes";

export default function Services() {
  const services = [
    {
      title: "India Market Entry",
      icon: Globe,
      description: "Establish localized ICP, pricing, legal, and operational structures to de-risk and accelerate your regional product launch.",
      category: "Market Entry",
      theme: "teal"
    },
    {
      title: "Enterprise Sales Ops",
      icon: Bolt,
      description: "Design end-to-end sales pipelines, regional account planning matrices, and high-velocity B2B buying cycles.",
      category: "Sales Ops",
      theme: "green"
    },
    {
      title: "CXO Access & GTM",
      icon: Users,
      description: "Leverage direct, high-trust boardroom channels to map and bridge products with qualified decision-makers.",
      category: "Access",
      theme: "teal"
    },
    {
      title: "BFSI & GCC Programs",
      icon: ShieldCheck,
      description: "Target specialized banking, financial networks, and Fortune 500 Global Capability Centers to scale adoption.",
      category: "Sectors",
      theme: "rust"
    },
    {
      title: "Partner Alliances",
      icon: Target,
      description: "Architect strategic co-selling engines and partnerships with major Global System Integrators (Infosys, TCS, Wipro).",
      category: "Alliances",
      theme: "tan"
    },
    {
      title: "Fractional Leadership",
      icon: ClipboardList,
      description: "Deploy experienced country-level executive sales leadership to build pipeline before hiring a full-time team.",
      category: "Leadership",
      theme: "rust"
    },
    {
      title: "Revenue Forecasting",
      icon: PieChart,
      description: "Establish rigorous quarterly forecasts, deal qualification frameworks (MEDDPICC), and strategic board reporting.",
      category: "Metrics",
      theme: "green"
    },
    {
      title: "Program Delivery Readiness",
      icon: Calendar,
      description: "Evaluate delivery capability, presales readiness, and support frameworks to ensure seamless customer onboarding.",
      category: "Readiness",
      theme: "tan"
    },
  ];


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
      id="services" 
      className="section-shell theme-section-light relative overflow-hidden transition-colors duration-500 py-24 sm:py-32" 
      aria-labelledby="services-title"
    >
      <SectionAmbient />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-semibold text-brand-teal shadow-xs mb-4"
          >
            <Sparkles size={13} className="text-brand-teal animate-pulse" />
            Core Capabilities
          </motion.div>

          <motion.h2 
            id="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-950"
          >
            Disciplined <span className="bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal-light bg-clip-text text-transparent">GTM Services</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Practical, board-ready go-to-market services tailored for global product companies entering India.
          </motion.p>
        </div>

        {/* 4-Column Responsive Grid Deck */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {services.map((s) => {
            const Icon = s.icon;
            const themeStyles = cardThemes[s.theme as CardThemeKey];

            return (
              <motion.div 
                key={s.title} 
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative h-full w-full"
              >
                <BorderGlow
                  className="w-full h-full text-left transition-all duration-300 opacity-95 group-hover:opacity-100"
                  edgeSensitivity={45}
                  glowColor={themeStyles.glowBase}
                  backgroundColor="transparent"
                  borderRadius={16}
                  glowRadius={70}
                  glowIntensity={1.4}
                  coneSpread={30}
                  animated={true}
                  colors={themeStyles.glowColors}
                >
                  {/* Container wrapper */}
                  <div className="flex flex-col h-full min-h-[220px] rounded-xl p-6 bg-white border border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/95 group-hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
                    
                    {/* Header Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-5 w-full">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${themeStyles.iconBg}`}>
                        <Icon size={18} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                      </span>
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider transition-all duration-300 ${themeStyles.badge}`}>
                        {s.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors duration-300 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                      {s.description}
                    </p>

                    {/* Dynamic Action Indicator */}
                    <div className={`mt-auto pt-5 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 ${themeStyles.arrow}`}>
                      Explore Route <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>

                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
