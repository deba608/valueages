"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Handshake, LineChart, Presentation, Target, Users2 } from "lucide-react";

const motionSteps = [
  { icon: Target, title: "Account thesis", copy: "Prioritize GSI accounts where UnifyApps can unlock visible transformation value." },
  { icon: Users2, title: "Executive path", copy: "Map sponsors, champions, and technical buyers before the first boardroom meeting." },
  { icon: Presentation, title: "Solution narrative", copy: "Package automation, AI, and integration capability into CXO-level use cases." },
  { icon: LineChart, title: "Pipeline acceleration", copy: "Convert partner interest into qualified opportunities and active deal motion." },
];

const stats = [
  ["GSI", "Co-sell plays"],
  ["BFSI", "Enterprise access"],
  ["GCC", "Transformation buyers"],
];

export default function GSIStrategy() {
  return (
    <section id="gsi-strategy" className="section-shell theme-section-light" aria-labelledby="gsi-title">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="section-eyebrow mb-4">GSI Go-To-Market Strategy</span>
            <h2 id="gsi-title" className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Turn GSI relationships into India enterprise pipeline.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              ValueEdge helps GSIs position UnifyApps as the automation and AI orchestration layer inside
              transformation programs, then carries that story into enterprise buying rooms.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-lg font-black text-brand-teal">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_28px_80px_-55px_rgba(15,23,42,0.7)]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                alt="Enterprise partner workshop for GSI go-to-market planning"
                width={1400}
                height={820}
                className="h-[24rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/12 to-transparent" />
              <div className="absolute left-5 top-5 max-w-xs rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <Handshake size={22} className="text-brand-teal" />
                <p className="mt-3 text-sm font-black text-slate-950">Partner-led transformation motion</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Account mapping, use-case framing, executive engagement, and commercial progression.
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
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4"
        >
          {motionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="premium-card interactive-card rounded-2xl p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                    <Icon size={19} />
                  </span>
                  <span className="text-3xl font-black text-slate-100">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-sm font-black text-slate-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.copy}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-8 rounded-2xl border border-brand-teal/15 bg-brand-teal/6 p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-900">Build a GSI co-sell motion with UnifyApps.</p>
            <p className="mt-1 text-xs text-slate-500">Designed for partner leaders, country heads, and transformation sellers.</p>
          </div>
          <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-teal sm:mt-0">
            Start the motion <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
