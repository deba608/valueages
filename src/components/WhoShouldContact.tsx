"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeX,
  Briefcase,
  Globe2,
  Layers,
  TrendingUp,
  Users2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   ICP profile data
───────────────────────────────────────────── */
const profiles = [
  {
    id: "01",
    icon: Globe2,
    title: "Product Companies Entering India",
    role: "Founders · India Heads · VP Sales",
    pains: [
      "No CXO-level entry points or enterprise relationships in India",
      "GTM narrative doesn't resonate with local buyer context",
      "No qualified partner pipeline to accelerate deals",
    ],
    outcome: "Market entry strategy, executive intros, and boardroom-ready positioning — from day one.",
    accentBorder: "border-sky-200/60",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    idColor: "text-sky-100",
    outcomeBg: "bg-sky-50",
    outcomeBorder: "border-sky-200",
    outcomeText: "text-sky-800",
  },
  {
    id: "02",
    icon: Users2,
    title: "GSI Partner Leaders",
    role: "Alliance Heads · Country Partners · BD Directors",
    pains: [
      "UnifyApps value not landing inside GSI transformation programs",
      "No structured co-sell motion or joint account plan",
      "Deals stall without CXO sponsorship inside accounts",
    ],
    outcome: "Co-sell playbook, account mapping, and executive narrative built for GSI-led enterprise motion.",
    accentBorder: "border-violet-200/60",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    idColor: "text-violet-100",
    outcomeBg: "bg-violet-50",
    outcomeBorder: "border-violet-200",
    outcomeText: "text-violet-800",
  },
  {
    id: "03",
    icon: Layers,
    title: "GCC Heads & Digital Leaders",
    role: "GCC Heads · Digital VPs · COOs",
    pains: [
      "Legacy complexity slowing operational transformation programmes",
      "AI/automation roadmap lacks a credible orchestration layer",
      "Hard to build internal buy-in for transformation spend",
    ],
    outcome: "Targeted transformation narrative, AI-automation framing, and a clear UnifyApps value path.",
    accentBorder: "border-amber-200/60",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    idColor: "text-amber-100",
    outcomeBg: "bg-amber-50",
    outcomeBorder: "border-amber-200",
    outcomeText: "text-amber-800",
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Country Heads & Sales Directors",
    role: "Regional Directors · VP Sales · Sales Leaders",
    pains: [
      "Pipeline thin — few qualified enterprise opportunities in India",
      "Long sales cycles with no clear CXO champion in accounts",
      "No value-selling assets tuned for Indian enterprise context",
    ],
    outcome: "Qualified pipeline, boardroom access, and deal-acceleration assets tailored for India.",
    accentBorder: "border-emerald-200/60",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    idColor: "text-emerald-100",
    outcomeBg: "bg-emerald-50",
    outcomeBorder: "border-emerald-200",
    outcomeText: "text-emerald-800",
  },
  {
    id: "05",
    icon: Briefcase,
    title: "Transformation-Focused CXOs",
    role: "CIOs · CDOs · CTOs · CEOs",
    pains: [
      "Automation landscape is fragmented and hard to evaluate quickly",
      "Need a positioned AI orchestration narrative for the board",
      "Vendor conversations lack strategic context and enterprise depth",
    ],
    outcome: "Executive briefing, peer-benchmarked insight, and a positioned transformation story for your board.",
    accentBorder: "border-teal-200/60",
    iconBg: "bg-teal-50",
    iconColor: "text-brand-teal",
    idColor: "text-teal-100",
    outcomeBg: "bg-teal-50",
    outcomeBorder: "border-teal-200",
    outcomeText: "text-teal-800",
  },
];

/* ─────────────────────────────────────────────
   Framer Motion variants
───────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function WhoShouldContact() {
  return (
    <section
      id="who-should-contact"
      className="section-shell theme-section-light"
      aria-labelledby="wsc-title"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* ── Section Header ── */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow mx-auto mb-4">Ideal Fit</span>
          <h2
            id="wsc-title"
            className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl"
          >
            Is This Built For You?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
            ValueEdge works with a focused set of enterprise roles where our GTM depth creates the
            most measurable impact. If you recognise your challenge below, we should talk.
          </p>
        </div>

        {/* ── Profile Cards ── */}
        {/* Row 1 — first 3 profiles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {profiles.slice(0, 3).map((profile) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.013 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${profile.accentBorder}`}
              >
                <div className="flex flex-1 flex-col p-6">

                  {/* Icon + number */}
                  <div className="mb-5 flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${profile.iconBg} ${profile.iconColor}`}>
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span
                      className={`select-none font-mono text-4xl font-black leading-none ${profile.idColor}`}
                      aria-hidden="true"
                    >
                      {profile.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-black leading-snug text-slate-950">
                    {profile.title}
                  </h3>

                  {/* Role subtitle */}
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {profile.role}
                  </p>

                  {/* Pain points */}
                  <ul className="mt-5 flex flex-col gap-2.5" aria-label="Common challenges">
                    {profile.pains.map((pain) => (
                      <li key={pain} className="flex items-start gap-2.5">
                        <span
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300"
                          aria-hidden="true"
                        />
                        <span className="text-[12px] leading-relaxed text-slate-500">{pain}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcome block */}
                  <div className={`mt-5 rounded-xl border p-4 ${profile.outcomeBg} ${profile.outcomeBorder}`}>
                    <p className="mb-1.5 text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                      What you get
                    </p>
                    <p className={`text-[12px] font-semibold leading-relaxed ${profile.outcomeText}`}>
                      {profile.outcome}
                    </p>
                  </div>

                </div>

                {/* Card footer CTA */}
                <div className="border-t border-slate-100 px-6 py-4">
                  <a
                    href="#contact"
                    className="group/link flex items-center gap-1.5 text-[12px] font-bold text-brand-teal"
                    aria-label={`Contact us — ${profile.title}`}
                  >
                    Let's talk
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Row 2 — last 2 profiles, centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.67%+0.83rem)]"
        >
          {profiles.slice(3).map((profile) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.013 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${profile.accentBorder}`}
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${profile.iconBg} ${profile.iconColor}`}>
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className={`select-none font-mono text-4xl font-black leading-none ${profile.idColor}`} aria-hidden="true">
                      {profile.id}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-black leading-snug text-slate-950">{profile.title}</h3>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">{profile.role}</p>
                  <ul className="mt-5 flex flex-col gap-2.5" aria-label="Common challenges">
                    {profile.pains.map((pain) => (
                      <li key={pain} className="flex items-start gap-2.5">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                        <span className="text-[12px] leading-relaxed text-slate-500">{pain}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-5 rounded-xl border p-4 ${profile.outcomeBg} ${profile.outcomeBorder}`}>
                    <p className="mb-1.5 text-[9px] font-extrabold uppercase tracking-widest text-slate-400">What you get</p>
                    <p className={`text-[12px] font-semibold leading-relaxed ${profile.outcomeText}`}>{profile.outcome}</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 px-6 py-4">
                  <a href="#contact" className="group/link flex items-center gap-1.5 text-[12px] font-bold text-brand-teal" aria-label={`Contact us — ${profile.title}`}>
                    Let's talk
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Not a fit ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-500">
            <BadgeX size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-black text-slate-700">Not the right fit</p>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
              We don't work with early-stage startups without enterprise traction, delivery-only
              engagements, or teams without active India go-to-market intent. Our focus stays narrow
              so our impact stays sharp.
            </p>
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-brand-teal/15 bg-brand-teal/5 px-6 py-8 text-center"
        >
          <p className="text-base font-bold text-slate-900">
            Recognise your challenge above?
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-slate-500">
            One conversation is enough to know if there's a fit. No decks, no pitches — just a
            focused discussion about your India GTM situation.
          </p>
          <a
            href="#contact"
            className="primary-button group btn-premium mt-2 inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            Start the conversation
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
