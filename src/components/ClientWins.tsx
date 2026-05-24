"use client";

import { motion, Variants } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Building2,
  Cpu,
  ShoppingBag,
  Tv2,
  Zap,
} from "lucide-react";

const clients = [
  {
    name: "Persistent",
    logoText: "PERSISTENT",
    type: "Technology Solutions",
    description: "Global digital engineering & IT consultancy powering next-gen enterprise transformation.",
    icon: Cpu,
    accentFrom: "from-sky-500/20",
    accentTo: "to-brand-teal/10",
    borderColor: "border-sky-200/70",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-200",
    hoverText: "group-hover:text-sky-600",
  },
  {
    name: "Jubilant Group",
    logoText: "JUBILANT",
    type: "Conglomerate",
    description: "Diversified leader across pharmaceuticals, food services, and specialty chemicals.",
    icon: Building2,
    accentFrom: "from-amber-400/20",
    accentTo: "to-orange-300/10",
    borderColor: "border-amber-200/70",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    badgeBorder: "border-amber-200",
    hoverText: "group-hover:text-amber-600",
  },
  {
    name: "MPHASIS",
    logoText: "MPHASIS",
    type: "IT Infrastructure",
    description: "Leading cloud & cognitive services enterprise transforming global financial institutions.",
    icon: Zap,
    accentFrom: "from-violet-500/20",
    accentTo: "to-purple-400/10",
    borderColor: "border-violet-200/70",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    badgeBorder: "border-violet-200",
    hoverText: "group-hover:text-violet-600",
  },
  {
    name: "Fossil",
    logoText: "FOSSIL",
    type: "Consumer & Lifestyle",
    description: "Global luxury design & smart accessories brand redefining connected consumer experiences.",
    icon: ShoppingBag,
    accentFrom: "from-rose-500/20",
    accentTo: "to-pink-400/10",
    borderColor: "border-rose-200/70",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
    badgeBorder: "border-rose-200",
    hoverText: "group-hover:text-rose-600",
  },
  {
    name: "Sony TV",
    logoText: "SONY",
    type: "Entertainment & Media",
    description: "World-class consumer electronics & media network shaping digital entertainment at scale.",
    icon: Tv2,
    accentFrom: "from-brand-teal/20",
    accentTo: "to-emerald-400/10",
    borderColor: "border-teal-200/70",
    iconBg: "bg-teal-50",
    iconColor: "text-brand-teal",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700",
    badgeBorder: "border-teal-200",
    hoverText: "group-hover:text-brand-teal",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ClientWins() {
  return (
    <section
      id="clients"
      className="section-shell theme-section-muted"
      aria-labelledby="clients-title"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* ── Section Header ── */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow mx-auto mb-4">Market Success</span>
          <h2
            id="clients-title"
            className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl"
          >
            Enterprise Engagements &amp; Market Success
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
            Representative enterprise engagements closed through strategic co-selling and
            boardroom GTM frameworks across India&apos;s top industries.
          </p>
        </div>

        {/* ── Client Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {clients.map((client) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${client.borderColor}`}
              >
                {/* Colour-coded top accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${client.accentFrom} ${client.accentTo}`} />

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon + industry badge */}
                  <div className="mb-5 flex items-start justify-between gap-2">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${client.iconBg} ${client.iconColor}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className={`rounded-full border px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide ${client.badgeBg} ${client.badgeText} ${client.badgeBorder}`}>
                      {client.type}
                    </span>
                  </div>

                  {/* Company name */}
                  <p className={`mb-3 font-sans text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 ${client.hoverText}`}>
                    {client.logoText}
                  </p>

                  {/* Description */}
                  <p className="flex-1 text-[12px] leading-relaxed text-slate-500">
                    {client.description}
                  </p>

                  {/* Footer engagement tag */}
                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                    <BadgeCheck size={14} className="shrink-0 text-brand-teal" aria-hidden="true" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                      Enterprise Engagement
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Credibility note ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-brand-teal/15 bg-white px-6 py-5 shadow-sm sm:flex-row sm:justify-center"
        >
          <Award size={20} className="shrink-0 text-brand-teal" aria-hidden="true" />
          <p className="text-center text-sm font-semibold text-slate-700 sm:text-left">
            Strategic advisory focus covers B2B Go-To-Market execution only.{" "}
            <span className="font-normal text-slate-500">
              Zero delivery or implementation liability.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
