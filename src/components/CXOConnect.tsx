"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Cpu,
  Landmark,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";

const networks = [
  {
    title: "BFSI Leaders",
    subtitle: "Banking, financial services, and insurance",
    description:
      "Executive access routes into digital transformation, technology, and risk stakeholders across banks, insurers, and fintech platforms.",
    tags: ["CIO access", "Risk", "Digital banking"],
    icon: Landmark,
    accent: "teal",
  },
  {
    title: "Global Capability Centers",
    subtitle: "Fortune 500 GCC and shared services hubs",
    description:
      "Relationship pathways into site leaders, transformation offices, and innovation teams running enterprise platforms from India.",
    tags: ["GCCs", "Innovation hubs", "Shared services"],
    icon: Building2,
    accent: "green",
  },
  {
    title: "GSI Alliances",
    subtitle: "Global and boutique system integrators",
    description:
      "Co-selling strategy with partners that influence enterprise adoption, integrations, and large transformation programs.",
    tags: ["TCS", "Infosys", "Wipro", "Co-sell"],
    icon: Network,
    accent: "warm",
  },
];

const accentClasses = {
  teal: "border-brand-teal/35 bg-brand-teal/10 text-brand-teal",
  green: "border-brand-green/35 bg-brand-green/10 text-brand-green",
  warm: "border-brand-tan/35 bg-brand-tan/10 text-brand-rust",
};

const themeClasses = {
  teal: {
    border: "border-brand-teal",
    bgLight: "bg-brand-teal/10",
    bgGradient: "from-white to-brand-teal/5",
    shadow: "shadow-brand-teal/5",
    text: "text-brand-teal",
    tagActive: "border-brand-teal/25 bg-brand-teal/5 text-brand-teal",
    routePill: "bg-brand-teal/10 text-brand-teal border border-brand-teal/20 shadow-[0_0_12px_rgba(16,155,130,0.12)]",
    cardBg: "border-brand-teal bg-gradient-to-br from-white to-brand-teal/[0.08]",
    cardPulse: "border-brand-teal/30",
    pulseBorder: "border-brand-teal/15",
    cardZapBg: "bg-brand-teal/10 text-brand-teal shadow-inner shadow-brand-teal/25",
    glowColor: "rgba(16, 155, 130, 0.25)",
    laser: "url(#laser-teal)",
    rightButton: "border-brand-teal bg-linear-to-r from-brand-teal/15 to-brand-teal/5 text-brand-teal shadow-md shadow-brand-teal/15",
    rightButtonIcon: "bg-brand-teal text-white shadow-sm shadow-brand-teal/20",
    glowBase: "169 81 34",
    glowColors: ["#0f766e", "#109B82", "#5D9F9B"],
  },

  green: {
    border: "border-brand-green",
    bgLight: "bg-brand-green/10",
    bgGradient: "from-white to-brand-green/5",
    shadow: "shadow-brand-green/5",
    text: "text-brand-green",
    tagActive: "border-brand-green/25 bg-brand-green/5 text-brand-green",
    routePill: "bg-brand-green/10 text-brand-green border border-brand-green/20 shadow-[0_0_12px_rgba(79,143,123,0.12)]",
    cardBg: "border-brand-green bg-gradient-to-br from-white to-brand-green/[0.08]",
    cardPulse: "border-brand-green/30",
    pulseBorder: "border-brand-green/15",
    cardZapBg: "bg-brand-green/10 text-brand-green shadow-inner shadow-brand-green/25",
    glowColor: "rgba(79, 143, 123, 0.25)",
    laser: "url(#laser-green)",
    rightButton: "border-brand-green bg-linear-to-r from-brand-green/15 to-brand-green/5 text-brand-green shadow-md shadow-brand-green/15",
    rightButtonIcon: "bg-brand-green text-white shadow-sm shadow-brand-green/20",
    glowBase: "162 29 43",
    glowColors: ["#4F8F7B", "#5D9F9B", "#109B82"],
  },

  warm: {
    border: "border-brand-rust",
    bgLight: "bg-brand-tan/10",
    bgGradient: "from-white to-brand-rust/5",
    shadow: "shadow-brand-rust/5",
    text: "text-brand-rust",
    tagActive: "border-brand-rust/25 bg-brand-rust/5 text-brand-rust",
    routePill: "bg-brand-rust/10 text-brand-rust border border-brand-rust/20 shadow-[0_0_12px_rgba(184,90,58,0.12)]",
    cardBg: "border-brand-rust bg-gradient-to-br from-white to-brand-rust/[0.08]",
    cardPulse: "border-brand-rust/30",
    pulseBorder: "border-brand-rust/15",
    cardZapBg: "bg-brand-rust/10 text-brand-rust shadow-inner shadow-brand-rust/25",
    glowColor: "rgba(184, 90, 58, 0.25)",
    laser: "url(#laser-warm)",
    rightButton: "border-brand-rust bg-linear-to-r from-brand-rust/15 to-brand-rust/5 text-brand-rust shadow-md shadow-brand-rust/15",
    rightButtonIcon: "bg-brand-rust text-white shadow-sm shadow-brand-rust/20",
    glowBase: "16 52 47",
    glowColors: ["#B85A3A", "#C99A5A", "#B85A3A"],
  },
};

export default function CXOConnect() {
  const [activeSegment, setActiveSegment] = useState(0);

  const active = networks[activeSegment];
  const ActiveIcon = active.icon;

  const activeTheme =
    themeClasses[active.accent as keyof typeof themeClasses];

  // Scrolling entrance staggered reveals matching other capabilities
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="cxo"
      className="section-shell theme-section-muted relative overflow-hidden transition-colors duration-500 py-24 sm:py-32"
      aria-labelledby="cxo-title"
    >
      <div
        className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-brand-teal/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-semibold text-brand-teal shadow-xs mb-4"
          >
            <Sparkles size={13} className="text-brand-teal animate-pulse" />
            CXO Connect
          </motion.div>

          <motion.h2
            id="cxo-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            A clear bridge from global product teams to Indian enterprise buyers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
          >
            The network is presented as a disciplined access model: client
            thesis, VALUEAGES qualification, and direct routes to decision makers
            who can sponsor enterprise adoption.
          </motion.p>
        </div>

        {/* MAIN BENTO DASHBOARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="premium-card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-white border border-slate-200/80 shadow-2xl"
        >
          {/* Immersive Background Grids & Ambient Glows */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #109B82 1px, transparent 1px), linear-gradient(to bottom, #109B82 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(circle at center, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 60%, transparent 100%)",
            }}
          ></div>

          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-rust/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-green/3 rounded-full blur-[120px] pointer-events-none" />

          {/* Full-width visual flow dashboard container */}
          <div className="relative z-10 w-full min-h-[560px]">
            {/* SVG CONNECTORS */}
            <svg
              className="absolute inset-0 hidden lg:block h-full w-full pointer-events-none z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="laser-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite
                    in="SourceGraphic"
                    in2="blur"
                    operator="over"
                  />
                </filter>

                <linearGradient
                  id="laser-teal"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#109B82" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0FA88A" stopOpacity="1" />
                </linearGradient>

                <linearGradient
                  id="laser-green"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#4F8F7B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                </linearGradient>

                <linearGradient
                  id="laser-warm"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#B85A3A" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C99A5A" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* LEFT TO CENTER CONNECTOR (1ST CONNECTOR - Perfectly visible gap 11% to 50%) */}
              <path
                d="M 11 50 L 50 50"
                fill="none"
                stroke={activeTheme.glowColor}
                strokeWidth="6"
                vectorEffect="non-scaling-stroke"
                filter="url(#laser-glow)"
                className="transition-all duration-300"
              />

              <path
                d="M 11 50 L 50 50"
                fill="none"
                stroke={activeTheme.laser}
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="6 6"
                className="animate-flow-dash transition-all duration-300"
              />

              {/* TOP ACCORDION CONNECTOR */}
              <path
                d="M 50 50 C 56 50, 60 16.7, 68 16.7"
                fill="none"
                stroke={
                  activeSegment === 0
                    ? themeClasses.teal.glowColor
                    : "rgba(148,163,184,0.08)"
                }
                strokeWidth={activeSegment === 0 ? "6" : "2"}
                vectorEffect="non-scaling-stroke"
                filter={activeSegment === 0 ? "url(#laser-glow)" : undefined}
                className="transition-all duration-300"
              />

              <path
                d="M 50 50 C 56 50, 60 16.7, 68 16.7"
                fill="none"
                stroke={
                  activeSegment === 0
                    ? themeClasses.teal.laser
                    : "rgba(148,163,184,0.25)"
                }
                strokeWidth={activeSegment === 0 ? "2" : "1.2"}
                vectorEffect="non-scaling-stroke"
                strokeDasharray={activeSegment === 0 ? "8 8" : "4 4"}
                className={`${
                  activeSegment === 0 ? "animate-flow-dash-fast" : ""
                } transition-all duration-300`}
              />

              {/* MIDDLE ACCORDION CONNECTOR */}
              <path
                d="M 50 50 C 54 50, 58 42, 68 50"
                fill="none"
                stroke={
                  activeSegment === 1
                    ? themeClasses.green.glowColor
                    : "rgba(148,163,184,0.08)"
                }
                strokeWidth={activeSegment === 1 ? "6" : "2"}
                vectorEffect="non-scaling-stroke"
                filter={activeSegment === 1 ? "url(#laser-glow)" : undefined}
                className="transition-all duration-300"
              />

              <path
                d="M 50 50 C 54 50, 58 42, 68 50"
                fill="none"
                stroke={
                  activeSegment === 1
                    ? themeClasses.green.laser
                    : "rgba(148,163,184,0.25)"
                }
                strokeWidth={activeSegment === 1 ? "2" : "1.2"}
                vectorEffect="non-scaling-stroke"
                strokeDasharray={activeSegment === 1 ? "8 8" : "4 4"}
                className={`${
                  activeSegment === 1 ? "animate-flow-dash-fast" : ""
                } transition-all duration-300`}
              />

              {/* BOTTOM ACCORDION CONNECTOR */}
              <path
                d="M 50 50 C 56 50, 60 83.3, 68 83.3"
                fill="none"
                stroke={
                  activeSegment === 2
                    ? themeClasses.warm.glowColor
                    : "rgba(148,163,184,0.08)"
                }
                strokeWidth={activeSegment === 2 ? "6" : "2"}
                vectorEffect="non-scaling-stroke"
                filter={activeSegment === 2 ? "url(#laser-glow)" : undefined}
                className="transition-all duration-300"
              />

              <path
                d="M 50 50 C 56 50, 60 83.3, 68 83.3"
                fill="none"
                stroke={
                  activeSegment === 2
                    ? themeClasses.warm.laser
                    : "rgba(148,163,184,0.25)"
                }
                strokeWidth={activeSegment === 2 ? "2" : "1.2"}
                vectorEffect="non-scaling-stroke"
                strokeDasharray={activeSegment === 2 ? "8 8" : "4 4"}
                className={`${
                  activeSegment === 2 ? "animate-flow-dash-fast" : ""
                } transition-all duration-300`}
              />
            </svg>

            {/* MOBILE/TABLET STACK (FLUID ACCORDION FLOW) */}
            <div className="flex flex-col gap-6 lg:hidden relative z-10">
              {/* PRODUCT COMPANY */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-effect rounded-2xl border border-slate-200/80 p-5 text-center shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Cpu size={22} className="stroke-[1.8]" />
                </span>

                <p className="text-base font-black text-slate-950">
                  Global Product Company
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  SaaS, AI, automation, and enterprise software teams seeking India growth.
                </p>
              </motion.div>

              {/* CONNECTOR LINE */}
              <div className="flex justify-center -my-3">
                <div
                  className={`h-12 w-[2px] rounded-full transition-colors duration-300 ${activeTheme.bgLight}`}
                />
              </div>

              {/* VALUEAGES */}
              <motion.div
                key={activeSegment}
                initial={{ scale: 0.96, opacity: 0.82 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-2xl border-2 p-5 text-center shadow-xl backdrop-blur-md transition-all duration-300 ${activeTheme.cardBg}`}
              >
                <span
                  className={`absolute -inset-2 rounded-2xl border animate-pulse-slow transition-all duration-300 ${activeTheme.cardPulse}`}
                />

                <span
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-all duration-300 ${activeTheme.cardZapBg}`}
                >
                  <Zap size={22} className="animate-pulse" />
                </span>

                <p className="break-words text-lg sm:text-xl font-black uppercase tracking-tight text-slate-950">
                  VALUEAGES
                </p>

                <p className={`mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${activeTheme.text}`}>
                  GTM Advisory
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Qualifies the account thesis, maps stakeholders, and coordinates executive motion.
                </p>
              </motion.div>

              {/* CONNECTOR LINE */}
              <div className="flex justify-center -my-3">
                <div
                  className={`h-12 w-[2px] rounded-full transition-colors duration-300 ${activeTheme.bgLight}`}
                />
              </div>

              {/* 3 EXPANDING ACCORDION CARDS FOR MOBILE */}
              <div className="flex flex-col gap-4">
                {networks.map((net, idx) => {
                  const Icon = net.icon;
                  const isSelected = activeSegment === idx;
                  const netTheme = themeClasses[net.accent as keyof typeof themeClasses];

                  return (
                    <div
                      key={net.title}
                      className="w-full text-left"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveSegment(idx)}
                        className="w-full text-left focus:outline-hidden"
                      >
                        <div
                          className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                            isSelected
                              ? `${netTheme.cardBg} shadow-[0_8px_30px_rgba(0,0,0,0.04)]`
                              : "border-slate-200 bg-white text-slate-650 hover:border-slate-300 hover:shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                                  isSelected
                                    ? netTheme.rightButtonIcon
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                <Icon size={18} />
                              </span>
                              <div className="min-w-0">
                                <p
                                  className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider leading-tight transition-colors duration-300 ${
                                    isSelected ? "text-slate-950" : "text-slate-750"
                                  }`}
                                >
                                  {net.title}
                                </p>
                                <p className="mt-1 text-[10px] leading-relaxed opacity-75 text-slate-500">
                                  {net.subtitle}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <span className={`rounded-full px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest ${netTheme.routePill}`}>
                                Active
                              </span>
                            )}
                          </div>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isSelected ? "auto" : 0,
                              opacity: isSelected ? 1 : 0,
                              marginTop: isSelected ? 14 : 0,
                            }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-200/60 pt-4 mb-4">
                              {net.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {net.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`rounded-full border px-2.5 py-0.75 text-[9px] font-extrabold uppercase tracking-wider transition-all duration-300 ${netTheme.tagActive}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DESKTOP ORIGINAL CONNECTOR LAYOUT (Consolidated and Centered) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 hidden lg:block h-[580px] w-full"
            >
              {/* LEFT CARD: Global Product Company (w-[22%] left-0) */}
              <motion.div
                variants={childVariants}
                whileHover={{ y: -6 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[22%] h-fit cursor-pointer"
              >
                <div className="glass-effect w-full rounded-2xl p-6 text-center border border-slate-200/80 shadow-lg hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] transition-all duration-300">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-md">
                    <Cpu size={22} className="stroke-[1.8]" />
                  </span>

                  <p className="text-sm xl:text-base font-extrabold text-slate-950">
                    Global Product Company
                  </p>

                  <p className="mt-3 text-xs xl:text-sm leading-relaxed text-slate-500">
                    SaaS, AI, automation, and enterprise software teams seeking India growth.
                  </p>
                </div>
              </motion.div>

              {/* CENTER CARD: VALUEAGES GTM Advisory (w-[22%] absolute-center) */}
              <motion.div
                variants={childVariants}
                whileHover={{ y: -6 }}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[22%] h-fit cursor-pointer z-10"
              >
                <motion.div
                  key={activeSegment}
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`relative w-full rounded-2xl border-2 p-6 text-center shadow-2xl backdrop-blur-md transition-all duration-300 ${activeTheme.cardBg}`}
                >
                  <span
                    className={`absolute -inset-2 rounded-2xl border animate-pulse-slow transition-all duration-300 ${activeTheme.cardPulse}`}
                  />

                  <span
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-all duration-300 ${activeTheme.cardZapBg}`}
                  >
                    <Zap size={22} className="animate-pulse" />
                  </span>

                  <p className="break-words text-base xl:text-lg font-black uppercase tracking-tight text-slate-950">
                    VALUEAGES
                  </p>

                  <p className={`mt-1 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${activeTheme.text}`}>
                    GTM Advisory
                  </p>

                  <p className="mt-3 text-xs xl:text-sm leading-relaxed text-slate-600">
                    Qualifies the account thesis, maps stakeholders, and coordinates executive motion.
                  </p>
                </motion.div>
              </motion.div>

              {/* RIGHT STACK: 3 Interactive Detailed Accordion Cards (w-[32%] right-0) */}
              <motion.div
                variants={childVariants}
                className="absolute right-0 top-0 bottom-0 w-[32%] grid grid-rows-3 gap-4 py-2"
              >
                {networks.map((net, idx) => {
                  const Icon = net.icon;
                  const isSelected = activeSegment === idx;
                  const netTheme = themeClasses[net.accent as keyof typeof themeClasses];

                  return (
                    <div
                      key={net.title}
                      className="flex items-center h-full"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveSegment(idx)}
                        className="w-full text-left focus:outline-hidden"
                      >
                        <div
                          className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                            isSelected
                              ? `${netTheme.cardBg} shadow-[0_8px_30px_rgba(0,0,0,0.04)]`
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300/80 hover:bg-slate-50/10 hover:shadow-xs"
                          }`}
                        >
                          {/* Card Header */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                                  isSelected
                                    ? netTheme.rightButtonIcon
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                <Icon size={18} />
                              </span>
                              <div className="min-w-0">
                                <p
                                  className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider leading-tight transition-colors duration-300 ${
                                    isSelected ? "text-slate-950" : "text-slate-750"
                                  }`}
                                >
                                  {net.title}
                                </p>
                                <p className="mt-1 text-[10px] leading-relaxed opacity-75 text-slate-500">
                                  {net.subtitle}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <span className={`rounded-full px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest ${netTheme.routePill}`}>
                                Active
                              </span>
                            )}
                          </div>

                          {/* Expanded Content with Smooth Height Reveal */}
                          <motion.div
                            initial={false}
                            animate={{
                              height: isSelected ? "auto" : 0,
                              opacity: isSelected ? 1 : 0,
                              marginTop: isSelected ? 14 : 0,
                            }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs xl:text-sm leading-relaxed text-slate-600 border-t border-slate-200/60 pt-4 mb-4">
                              {net.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {net.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`rounded-full border px-2.5 py-0.75 text-[9px] font-extrabold uppercase tracking-wider transition-all duration-300 ${netTheme.tagActive}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* ACTIVE FOOTER BAR */}
          <div className="glass-effect relative z-20 mt-8 rounded-2xl p-4 border border-slate-200/80 shadow-lg bg-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                    accentClasses[active.accent as keyof typeof accentClasses]
                  }`}
                >
                  <ActiveIcon size={18} />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-slate-950">
                    Active path: {active.title}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-500">
                    Client thesis → VALUEAGES qualification → executive introduction.
                  </p>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                Connected <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}