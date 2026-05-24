"use client";

import Image from "next/image";
import { ArrowRight, Building2, Globe, MapPinned, Network, Rocket, Users2 } from "lucide-react";

const lanes = [
  { icon: MapPinned, title: "Market entry", copy: "India ICP, buyer map, category story, and launch sequence." },
  { icon: Users2, title: "CXO access", copy: "Warm enterprise paths into decision makers and transformation sponsors." },
  { icon: Network, title: "Partner pipeline", copy: "GSI, GCC, and ecosystem routes that compound direct selling." },
  { icon: Rocket, title: "Deal acceleration", copy: "Executive business cases, value decks, and qualification discipline." },
];

export default function ProductExpansion() {
  return (
    <section id="product-expansion" className="section-shell theme-section-muted" aria-labelledby="expansion-title">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_-60px_rgba(15,23,42,0.75)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[26rem]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
                alt="Product company expanding into India enterprise market"
                width={1400}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/92 p-5 shadow-xl backdrop-blur-md">
                <Globe size={20} className="text-brand-teal" />
                <p className="mt-3 text-sm font-black text-slate-950">Product company exploring India?</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Valueages helps convert market ambition into boardroom access and enterprise pipeline.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <span className="section-eyebrow mb-4">Product Companies Expanding Into India</span>
              <h2 id="expansion-title" className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Your UnifyApps partner for India go-to-market.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                If you are exploring India, Valueages helps localize your value proposition, reach enterprise
                buyers, and build a partner-led sales pipeline with UnifyApps at the center.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {lanes.map((lane) => {
                  const Icon = lane.icon;
                  return (
                    <div key={lane.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                      <Icon size={18} className="text-brand-teal" />
                      <h3 className="mt-3 text-sm font-black text-slate-950">{lane.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{lane.copy}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="primary-button px-7 py-3.5 text-sm">
                  Explore India GTM <ArrowRight size={14} />
                </a>
                <a href="#clients" className="secondary-button px-7 py-3.5 text-sm">
                  View enterprise stories
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-slate-200 bg-slate-50/60 md:grid-cols-3">
            {[
              ["Enterprise buyers", "CIO, CTO, CRO, CISO, transformation heads"],
              ["Partner channels", "GSI alliances, GCC centers, co-sell programs"],
              ["Sales assets", "Value decks, account thesis, ROI narratives"],
            ].map(([title, copy]) => (
              <div key={title} className="border-slate-200 p-6 md:border-r last:md:border-r-0">
                <Building2 size={17} className="text-brand-teal" />
                <p className="mt-3 text-sm font-black text-slate-950">{title}</p>
                <p className="mt-1 text-xs text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
