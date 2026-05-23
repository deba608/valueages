"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const channelData = {
  BFSI: {
    title: "BFSI Sector",
    desc: "Targeting India's premier private banks, public financial institutions, and insurance leaders.",
    stages: [
      { label: "Market Thesis", value: "India ICP", width: "78%" },
      { label: "Executive Access", value: "CXO Routes", width: "86%" },
      { label: "Revenue Motion", value: "GTM Plays", width: "72%" },
    ],
    badge: "Enterprise Ready",
  },

  GCCs: {
    title: "Global Capability Centers",
    desc: "Connecting enterprise software products directly into Fortune 500 innovation and engineering hubs.",
    stages: [
      { label: "Market Thesis", value: "Fortune 500 GCCs", width: "85%" },
      { label: "Executive Access", value: "Site Leaders", width: "80%" },
      { label: "Revenue Motion", value: "Co-Innovation", width: "78%" },
    ],
    badge: "Scale Qualified",
  },

  GSIs: {
    title: "Global System Integrators",
    desc: "Building strategic co-sell alliances with leading global integration and consulting ecosystems.",
    stages: [
      { label: "Market Thesis", value: "SI Alliances", width: "70%" },
      { label: "Executive Access", value: "Alliance VPs", width: "88%" },
      { label: "Revenue Motion", value: "Co-Sell Plays", width: "65%" },
    ],
    badge: "Alliance Driven",
  },
};

export default function GTMConsole() {
  const [activeChannel, setActiveChannel] =
    useState<"BFSI" | "GCCs" | "GSIs">("BFSI");

  const nodes = [
    {
      id: "BFSI",
      label: "BFSI",
      detail: "Banks & Insurers",
      icon: Building2,
    },

    {
      id: "GCCs",
      label: "GCCs",
      detail: "Capability Centers",
      icon: Network,
    },

    {
      id: "GSIs",
      label: "GSIs",
      detail: "Co-Sell Partners",
      icon: Users,
    },
  ] as const;

  const currentData = channelData[activeChannel];

  return (
    <section
      id="gtm-console"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-labelledby="console-title"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-20 h-[380px] w-[380px] rounded-full bg-brand-teal/10 blur-[120px]" />

        <div className="absolute right-[5%] bottom-0 h-[320px] w-[320px] rounded-full bg-brand-rust/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Floating blur */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] top-[20%] h-32 w-32 rounded-full bg-brand-teal/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-xl">
              <Sparkles size={13} className="text-brand-teal" />
              Disciplined Sales Execution
            </div>

            {/* Heading */}
            <h2
              id="console-title"
              className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl"
            >
              The Investor-Ready{" "}
              <span className="bg-gradient-to-r from-brand-teal to-emerald-400 bg-clip-text text-transparent">
                GTM Framework
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We translate enterprise market entry into a measurable commercial
              engine through mapped accounts, executive access, and structured
              revenue orchestration.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 space-y-4">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal shadow-[0_0_30px_rgba(16,155,130,0.18)]">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Zero Delivery Overhead
                    </h4>

                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      Pure GTM acceleration focused on relationships, account
                      strategy, and executive revenue motion.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-rust/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-rust/10 text-brand-rust shadow-[0_0_30px_rgba(219,97,106,0.18)]">
                    <BarChart3 size={20} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Live Channel Metrics
                    </h4>

                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      Dynamic visibility into ICP alignment, executive access,
                      and active enterprise pipeline health.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy GTM Advisory
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/75 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-7">
              {/* Decorative Layer */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(#109B82 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/10" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-200/60 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                    Investor-ready GTM console
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                    India Revenue Entry Map
                  </h3>
                </div>

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-teal/20 bg-brand-teal/10 text-brand-teal"
                >
                  <BarChart3 size={22} />
                </motion.div>
              </div>

              {/* CHANNEL SELECTOR */}
              <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeChannel === node.id;

                  return (
                    <motion.button
                      key={node.id}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveChannel(node.id)}
                      className={`group relative overflow-hidden rounded-2xl border p-3 sm:p-4 transition-all duration-300 ${
                        isActive
                          ? "border-brand-teal/40 bg-brand-teal/10 shadow-lg shadow-brand-teal/10"
                          : "border-slate-200/70 bg-white/60"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-tab"
                          className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent"
                        />
                      )}

                      <div className="relative z-10">
                        <Icon
                          size={20}
                          className={`mx-auto mb-2 transition-transform duration-300 group-hover:scale-110 ${
                            isActive
                              ? "text-brand-teal"
                              : "text-slate-500"
                          }`}
                        />

                        <p
                          className={`text-[11px] font-extrabold uppercase tracking-wide ${
                            isActive
                              ? "text-brand-teal"
                              : "text-slate-800"
                          }`}
                        >
                          {node.label}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          {node.detail}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* PIPELINE PANEL */}
              <div className="relative z-10 mt-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-inner sm:p-6">
                {/* top blur */}
                <div className="absolute right-0 top-0 h-32 w-32 bg-brand-teal/10 blur-3xl" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChannel}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                          <CircleDollarSign size={18} />
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-950 sm:text-base">
                            Pipeline Signal: {currentData.title}
                          </h4>

                          <p className="mt-1 max-w-md text-[11px] leading-relaxed text-slate-500">
                            {currentData.desc}
                          </p>
                        </div>
                      </div>

                      <div className="self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.15em] text-emerald-600">
                        {currentData.badge}
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-5">
                      {currentData.stages.map((stage, index) => (
                        <div key={stage.label}>
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-700">
                              {stage.label}
                            </span>

                            <span className="text-xs font-bold text-brand-teal">
                              {stage.value}
                            </span>
                          </div>

                          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: stage.width }}
                              transition={{
                                duration: 0.8,
                                delay: index * 0.08,
                                ease: "easeOut",
                              }}
                              className="relative h-full rounded-full bg-gradient-to-r from-brand-teal to-emerald-400"
                            >
                              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_2s_infinite]" />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Cards */}
              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-xl"
                >
                  <ShieldCheck
                    size={18}
                    className="mb-3 text-brand-teal"
                  />

                  <p className="text-xs font-bold text-slate-900">
                    No Delivery Drag
                  </p>

                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    Advisory-first execution without implementation complexity.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-xl"
                >
                  <CheckCircle2
                    size={18}
                    className="mb-3 text-brand-teal"
                  />

                  <p className="text-xs font-bold text-slate-900">
                    Boardroom Clarity
                  </p>

                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    Mapped accounts, executive pathways, and visible GTM
                    trajectory.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}