"use client";

import { motion, Variants } from "framer-motion";
import { 
  Award, BarChart3, Fingerprint, 
  Layers, ShieldAlert, Sparkles 
} from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "22+ Years B2B Experience",
      description: "Rare combination of 17 years in presales architecture and solution design, coupled with 5+ years in commercial enterprise sales leadership.",
      icon: Layers,
      color: "bg-brand-teal/5 dark:bg-brand-teal/10 text-brand-teal border-brand-teal/10 dark:border-brand-teal/20"
    },
    {
      title: "Proven Sales Leadership",
      description: "Leadership track record driving regional sales expansion and deal execution inside hyper-growth platforms like ServiceNow, OutSystems, and Salesforce.",
      icon: Award,
      color: "bg-brand-rust/5 dark:bg-brand-rust/10 text-brand-rust border-brand-rust/10 dark:border-brand-rust/20"
    },
    {
      title: "Deep India Market Access",
      description: "Immediate direct access route into India's largest conglomerates, multi-site GCCs, and high-value system integrations co-selling frameworks.",
      icon: Fingerprint,
      color: "bg-brand-tan/5 dark:bg-brand-tan/10 text-brand-tan border-brand-tan/10 dark:border-brand-tan/20"
    },
    {
      title: "Strong Enterprise Network",
      description: "Hard-to-reach, high-trust relationship capital built across two decades of advisory work with C-Suite leaders, CIOs, and technology decision makers.",
      icon: Sparkles,
      color: "bg-brand-green/5 dark:bg-brand-green/10 text-brand-green border-brand-green/10 dark:border-brand-green/20"
    },
    {
      title: "Platform Positioning Depth",
      description: "Advanced skill in translating highly complex software technology architecture into compelling, high-value commercial and executive business assets.",
      icon: BarChart3,
      color: "bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 border-slate-100 dark:border-slate-700"
    },
    {
      title: "Pure GTM Execution Focus",
      description: "100% focused on sales planning, account mapping, pipeline velocity, and closing. Zero implementation liability, zero delivery distractions.",
      icon: ShieldAlert,
      color: "bg-brand-teal/5 dark:bg-brand-teal/10 text-brand-teal border-brand-teal/10 dark:border-brand-teal/20"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="why-us" className="section-shell theme-section-light" aria-labelledby="why-title">
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-brand-tan/8 dark:bg-brand-tan/12 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-eyebrow mx-auto mb-3">
            VALUEAGES Advantage
          </span>
          <h2 id="why-title" className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-slate-900 dark:text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            We are not generic advisors. We provide highly specialized sales leadership with technical authority 
            and deep-seated local enterprise relationships.
          </p>
        </div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="glass-effect interactive-card flex flex-col rounded-2xl p-8 group"
              >
                {/* Icon box */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${diff.color}`}>
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-brand-teal transition-colors">
                  {diff.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
