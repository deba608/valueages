"use client";

import Image from "next/image";
import { Bot, DatabaseZap, GitMerge, ShieldCheck } from "lucide-react";

const platformTiles = [
  { icon: Bot, title: "AI orchestration", copy: "Position enterprise AI around real workflows." },
  { icon: GitMerge, title: "Integration layer", copy: "Connect fragmented apps, data, and processes." },
  { icon: DatabaseZap, title: "Automation engine", copy: "Move from manual effort to governed execution." },
  { icon: ShieldCheck, title: "Enterprise control", copy: "Support security, compliance, and scale conversations." },
];

export default function UnifyAppsPartnership() {
  return (
    <section id="partnership" className="section-shell theme-section-muted" aria-labelledby="partnership-title">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="section-eyebrow mb-4">Strategic Partnership</span>
            <h2 id="partnership-title" className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              ValueEdge makes UnifyApps boardroom-relevant for India.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We help product, GSI, and GCC leaders understand where UnifyApps can create visible business
              impact, then shape the stakeholder path needed to turn that value into pipeline.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {platformTiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <div key={tile.title} className="surface-card rounded-2xl p-5">
                    <Icon size={19} className="text-brand-teal" />
                    <h3 className="mt-4 text-sm font-black text-slate-950">{tile.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{tile.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_30px_90px_-60px_rgba(15,23,42,0.8)]">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85"
                alt="Enterprise AI and automation team planning a UnifyApps transformation roadmap"
                width={1400}
                height={980}
                className="h-[32rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-brand-teal">UnifyApps value path</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Use case", "Sponsor", "Pipeline"].map((label, index) => (
                    <div key={label} className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xl font-black text-slate-950">{index + 1}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}