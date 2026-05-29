"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import { faqs } from "@/lib/faqs";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="section-shell theme-section-light relative overflow-hidden transition-colors duration-500 py-24 sm:py-32"
      aria-labelledby="faq-title"
    >
      <div className="container relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-semibold text-brand-teal shadow-xs"
          >
            <HelpCircle size={13} className="text-brand-teal" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            id="faq-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Your India GTM{" "}
            <span className="bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal-light bg-clip-text text-transparent">
              Questions, Answered
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
          >
            What global SaaS and product leaders ask before entering the Indian
            enterprise market with Valueages.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-colors duration-300 hover:border-brand-teal/30"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:text-brand-teal sm:px-6"
                  >
                    <span className="text-base font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-brand-teal transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-brand-teal/10" : "bg-white"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer prompt */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-semibold text-brand-teal underline-offset-4 transition-colors hover:underline"
          >
            Talk to our advisor
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
