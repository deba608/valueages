"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calculator, MessageSquare, Presentation, Search, TrendingUp, Users } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", copy: "Expose business pain and urgency." },
  { icon: Users, title: "Map", copy: "Find buyers, blockers, and sponsors." },
  { icon: MessageSquare, title: "Frame", copy: "Translate capability into business value." },
  { icon: Calculator, title: "Quantify", copy: "Shape ROI and risk-reduction narrative." },
  { icon: Presentation, title: "Pitch", copy: "Equip executive conversations." },
  { icon: TrendingUp, title: "Convert", copy: "Move qualified interest into pipeline." },
];

export default function ValueSelling() {
  return (
    <section id="value-selling" className="section-shell theme-section-light" aria-labelledby="value-selling-title">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="section-eyebrow mb-4">Value Selling Methodology</span>
            <h2 id="value-selling-title" className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Make enterprise buyers see the business case before the demo.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              ValueEdge keeps the copy sharp and the conversation commercial. We turn UnifyApps capability
              into boardroom value, then align stakeholders around outcomes that move deals forward.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Outcome lens</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Revenue", "Efficiency", "Risk"].map((item) => (
                  <div key={item} className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-sm font-black text-slate-950">{item}</p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-500">CXO value</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.7)]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Enterprise sales workshop with CXO value selling discussion"
                width={1400}
                height={900}
                className="h-[26rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 top-5 max-w-sm rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-brand-teal">Boardroom value narrative</p>
                <p className="mt-3 text-lg font-black leading-tight text-slate-950">
                  From product feature to executive priority.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="premium-card rounded-2xl p-5">
                <div className="mb-5 flex items-center justify-between">
                  <Icon size={18} className="text-brand-teal" />
                  <span className="text-xs font-black text-slate-300">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-sm font-black text-slate-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.copy}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
