"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Bot, Brain, Gauge, Layers3, ShieldCheck, Workflow } from "lucide-react";

const useCases = [
  { icon: Workflow, title: "Automate operating workflows" },
  { icon: Bot, title: "Deploy AI assistants" },
  { icon: Layers3, title: "Connect fragmented systems" },
  { icon: Gauge, title: "Create digital visibility" },
  { icon: Brain, title: "Build AI capability" },
  { icon: ShieldCheck, title: "Govern adoption safely" },
];

const journey = ["Use-case discovery", "Roadmap design", "CXO sponsorship", "UnifyApps activation", "Scale across functions"];

export default function GCCStrategy() {
  return (
    <section id="gcc-strategy" className="section-shell theme-section-muted" aria-labelledby="gcc-title">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.75)]">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                alt="Modern GCC office with digital transformation teams collaborating"
                width={1400}
                height={1000}
                className="h-[33rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-brand-teal">GCC transformation map</p>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {journey.map((item, index) => (
                    <div key={item} className="rounded-xl bg-slate-50 p-3">
                      <p className="text-sm font-black text-slate-950">{index + 1}</p>
                      <p className="mt-2 text-[10px] font-semibold leading-tight text-slate-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <span className="section-eyebrow mb-4">GCC AI &amp; Digital Transformation</span>
            <h2 id="gcc-title" className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Help captive centers become AI-powered enterprise engines.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              GCCs in India are now transformation nerve centers. Valueages helps leaders identify high-value
              use cases, secure executive buy-in, and activate UnifyApps across global operating functions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {useCases.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="surface-card rounded-2xl p-4">
                    <Icon size={18} className="text-brand-teal" />
                    <p className="mt-3 text-sm font-bold text-slate-900">{item.title}</p>
                  </div>
                );
              })}
            </motion.div>

            <a href="#contact" className="primary-button mt-8 px-7 py-3.5 text-sm">
              Start GCC Discussion <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
