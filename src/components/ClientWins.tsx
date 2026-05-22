"use client";

import { motion, Variants } from "framer-motion";
import { Award } from "lucide-react";

export default function ClientWins() {
  const clients = [
    {
      name: "Persistent",
      type: "Technology Solutions",
      description: "Global digital engineering & IT consultancy powerhouse.",
      logoText: "PERSISTENT"
    },
    {
      name: "Jubilant Group",
      type: "Conglomerate",
      description: "Diversified leader in pharmaceuticals, food services, & chemicals.",
      logoText: "JUBILANT"
    },
    {
      name: "MPHASIS",
      type: "IT Infrastructure",
      description: "Leading cloud & cognitive technology enterprise provider.",
      logoText: "M P H A S I S"
    },
    {
      name: "Fossil",
      type: "Consumer Goods",
      description: "Global luxury design, accessories, & smart fashion brand.",
      logoText: "FOSSIL"
    },
    {
      name: "Sony TV",
      type: "Entertainment",
      description: "World-class consumer electronics, media, & television network.",
      logoText: "SONY"
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="clients" className="section-shell theme-section-muted" aria-labelledby="clients-title">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-eyebrow mx-auto mb-3">
            Market Success
          </span>
          <h2 id="clients-title" className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-slate-900 dark:text-white mb-4">
            Enterprise Engagements &amp; Market Success
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto">
            Representative enterprise sales engagements closed through strategic co-selling frameworks.
          </p>
        </div>

        {/* Grayscale Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-stretch mb-12"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-effect interactive-card flex flex-col justify-between p-6 rounded-2xl group"
            >
              {/* Grayscale Styled Text Logo */}
              <div className="h-16 flex items-center justify-center mb-4">
                <span className="font-sans text-lg font-black tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-brand-teal transition-colors duration-300">
                  {client.logoText}
                </span>
              </div>
              
              {/* Client Info snippet */}
              <div className="text-center pt-3 border-t border-slate-50 dark:border-slate-800">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal mb-1">
                  {client.type}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom credibility note */}
        <div className="glass-effect p-4 rounded-xl flex items-center justify-center gap-3 max-w-3xl mx-auto">
          <Award size={18} className="text-brand-teal shrink-0" />
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center sm:text-left">
            Our strategic advisory focus strictly covers B2B Go-To-Market execution. No delivery liabilities exist.
          </p>
        </div>

      </div>
    </section>
  );
}
