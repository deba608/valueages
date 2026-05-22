"use client";

import { motion, Variants } from "framer-motion";
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2024 - Present",
      role: "Fractional Country Sales Leader / RVP",
      company: "UnifyApps",
      description: "Driving enterprise AI orchestration and workflow automation adoption across India's largest conglomerates, BFSI institutions, and GCC networks.",
      icon: ShieldCheck,
      color: "border-brand-teal text-brand-teal bg-[#ebf7f5] dark:bg-[#08221e] dark:border-brand-teal/40"
    },
    {
      year: "2019 - 2024",
      role: "Enterprise Sales Leadership",
      company: "ServiceNow | OutSystems | Salesforce",
      description: "Led high-value enterprise sales pipelines, established critical market entries, and closed B2B enterprise deals in India.",
      icon: Briefcase,
      color: "border-brand-rust text-brand-rust bg-[#f9ebe6] dark:bg-[#2c130b] dark:border-brand-rust/40"
    },
    {
      year: "2002 - 2019",
      role: "Presales Architecture & Product Technology",
      company: "Enterprise Software Tech",
      description: "Spent 17 years as a core technologist and solution architect. Developed a rare product depth that enables executive-level, solution-first value selling.",
      icon: GraduationCap,
      color: "border-brand-tan text-brand-tan bg-[#f8f1e6] dark:bg-[#281b0a] dark:border-brand-tan/40"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section-shell theme-section-light" aria-labelledby="about-title">
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-brand-tan/5 dark:bg-brand-tan/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Bio & Credibility */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="section-eyebrow mb-3">
              Executive Bio
            </span>
            <h2 id="about-title" className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-slate-900 dark:text-white mb-6">
              Built on Enterprise Sales Leadership.
              <br />
              <span className="text-slate-500 dark:text-slate-400 font-sans text-2xl sm:text-3xl block mt-2 font-normal">
                Bridging deep technical depth and commercial execution.
              </span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              VALUEAGES was founded on a simple premise: global product and SaaS companies
              expanding in India need more than high-level slide decks. They need a strategic GTM advisor with
              <strong className="text-slate-800 dark:text-slate-200"> boots on the ground </strong> and a <strong className="text-slate-800 dark:text-slate-200">proven track record of closing Fortune 500 deals</strong>.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              Founded by <strong className="text-slate-800 dark:text-slate-200">Manas</strong>, our advisory brings <strong className="text-slate-800 dark:text-slate-200">twenty-two years</strong> of enterprise technology 
              experience. This includes <strong className="text-slate-800 dark:text-slate-200">seventeen years</strong> as a presales architect and product expert, 
              giving us rare technical credibility, followed by <strong className="text-slate-800 dark:text-slate-200">five-plus years</strong> of high-performance sales leadership 
              leading enterprise pipelines at <strong className="text-slate-800 dark:text-slate-200">ServiceNow, OutSystems, and Salesforce</strong>.
            </p>

            {/* Founder Card */}
            <div className="surface-card interactive-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 dark:from-brand-teal/20 dark:to-brand-teal/5 text-white dark:text-brand-teal font-bold flex items-center justify-center text-xl shadow-lg shadow-slate-900/10 dark:shadow-brand-teal/10 shrink-0 border-2 border-transparent dark:border-brand-teal/20">
                M
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Manas</h4>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Founder &amp; Managing Director</p>
                <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-brand-teal bg-brand-teal/5 dark:bg-brand-teal/10 px-2.5 py-1 rounded-full border border-brand-teal/15 dark:border-brand-teal/25 w-fit">
                  <Award size={12} />
                  <span>Fractional Country Sales Leader / RVP @ UnifyApps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Professional Timeline track */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6 text-left">
              Our Leadership Journey &amp; Milestones
            </span>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-brand-teal/30 before:via-brand-rust/20 before:to-brand-tan/30 dark:before:from-brand-teal/40 dark:before:via-brand-rust/30 dark:before:to-brand-tan/40"
            >
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-6 relative group"
                  >
                    {/* Circle Node with Icon */}
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                      <IconComponent size={20} />
                    </div>

                    {/* Content Card */}
                    <div className="surface-card interactive-card flex-1 rounded-2xl p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="text-xs font-bold text-brand-teal tracking-wide uppercase">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 px-2 py-0.5 rounded-full uppercase tracking-wider w-fit">
                          {item.company}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
