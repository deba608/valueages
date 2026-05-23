"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    bgGradient:
      "from-white to-brand-teal/3 dark:from-slate-900/90 dark:to-brand-teal/5",
    shadow: "shadow-brand-teal/5 dark:shadow-brand-teal/10",
    text: "text-brand-teal",
    tagActive:
      "border-brand-teal/25 bg-brand-teal/4 text-brand-teal dark:bg-brand-teal/10",
    routePill:
      "bg-brand-teal/10 text-brand-teal border border-brand-teal/20 shadow-[0_0_12px_rgba(16,155,130,0.12)]",
    cardBg:
      "border-brand-teal bg-gradient-to-br from-white/95 to-brand-teal/[0.08] dark:from-[#071916]/95 dark:to-[#041513]/95 dark:shadow-brand-teal/20",
    cardPulse: "border-brand-teal/30",
    pulseBorder: "border-brand-teal/15",
    cardZapBg:
      "bg-brand-teal/10 dark:bg-brand-teal/20 text-brand-teal shadow-inner shadow-brand-teal/25",
    glowColor: "rgba(16, 155, 130, 0.25)",
    laser: "url(#laser-teal)",
    rightButton:
      "border-brand-teal bg-linear-to-r from-brand-teal/15 to-brand-teal/5 text-brand-teal shadow-md shadow-brand-teal/15 dark:from-brand-teal/25",
    rightButtonIcon:
      "bg-brand-teal text-white shadow-sm shadow-brand-teal/20",
  },

  green: {
    border: "border-brand-green",
    bgLight: "bg-brand-green/10",
    bgGradient:
      "from-white to-brand-green/3 dark:from-slate-900/90 dark:to-brand-green/5",
    shadow: "shadow-brand-green/5 dark:shadow-brand-green/10",
    text: "text-brand-green",
    tagActive:
      "border-brand-green/25 bg-brand-green/4 text-brand-green dark:bg-brand-green/10",
    routePill:
      "bg-brand-green/10 text-brand-green border border-brand-green/20 shadow-[0_0_12px_rgba(79,143,123,0.12)]",
    cardBg:
      "border-brand-green bg-gradient-to-br from-white/95 to-brand-green/[0.08] dark:from-[#051815]/95 dark:to-[#021310]/95 dark:shadow-brand-green/20",
    cardPulse: "border-brand-green/30",
    pulseBorder: "border-brand-green/15",
    cardZapBg:
      "bg-brand-green/10 dark:bg-brand-green/20 text-brand-green shadow-inner shadow-brand-green/25",
    glowColor: "rgba(79, 143, 123, 0.25)",
    laser: "url(#laser-green)",
    rightButton:
      "border-brand-green bg-linear-to-r from-brand-green/15 to-brand-green/5 text-brand-green shadow-md shadow-brand-green/15 dark:from-brand-green/25",
    rightButtonIcon:
      "bg-brand-green text-white shadow-sm shadow-brand-green/20",
  },

  warm: {
    border: "border-brand-rust",
    bgLight: "bg-brand-tan/10",
    bgGradient:
      "from-white to-brand-rust/3 dark:from-slate-900/90 dark:to-brand-rust/5",
    shadow: "shadow-brand-rust/5 dark:shadow-brand-rust/10",
    text: "text-brand-rust",
    tagActive:
      "border-brand-rust/25 bg-brand-rust/4 text-brand-rust dark:bg-brand-rust/10",
    routePill:
      "bg-brand-rust/10 text-brand-rust border border-brand-rust/20 shadow-[0_0_12px_rgba(184,90,58,0.12)]",
    cardBg:
      "border-brand-rust bg-gradient-to-br from-white/95 to-brand-rust/[0.08] dark:from-[#1b0f0b]/95 dark:to-[#170a06]/95 dark:shadow-brand-rust/20",
    cardPulse: "border-brand-rust/30",
    pulseBorder: "border-brand-rust/15",
    cardZapBg:
      "bg-brand-rust/10 dark:bg-brand-rust/20 text-brand-rust shadow-inner shadow-brand-rust/25",
    glowColor: "rgba(184, 90, 58, 0.25)",
    laser: "url(#laser-warm)",
    rightButton:
      "border-brand-rust bg-linear-to-r from-brand-rust/15 to-brand-rust/5 text-brand-rust shadow-md shadow-brand-rust/15 dark:from-brand-rust/25",
    rightButtonIcon:
      "bg-brand-rust text-white shadow-sm shadow-brand-rust/20",
  },
};

export default function CXOConnect() {
  const [activeSegment, setActiveSegment] = useState(0);

  const active = networks[activeSegment];
  const ActiveIcon = active.icon;

  const activeTheme =
    themeClasses[active.accent as keyof typeof themeClasses];

  return (
    <section
      id="cxo"
      className="section-shell theme-section-muted relative overflow-hidden"
      aria-labelledby="cxo-title"
    >
      <div
        className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-brand-teal/8 blur-3xl dark:bg-brand-teal/12"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="section-eyebrow mx-auto mb-3">
            CXO Connect
          </span>

          <h2
            id="cxo-title"
            className="mb-4 font-serif text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
          >
            A clear bridge from global product teams to Indian enterprise buyers.
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            The network is presented as a disciplined access model: client
            thesis, VALUEAGES qualification, and direct routes to decision makers
            who can sponsor enterprise adoption.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT NETWORK CARDS */}
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-5">
            {networks.map((net, idx) => {
              const Icon = net.icon;

              const isActive = activeSegment === idx;

              const netTheme =
                themeClasses[net.accent as keyof typeof themeClasses];

              return (
                <button
                  key={net.title}
                  type="button"
                  onMouseEnter={() => setActiveSegment(idx)}
                  onFocus={() => setActiveSegment(idx)}
                  onClick={() => setActiveSegment(idx)}
                  className={`surface-card interactive-card group rounded-2xl p-4 sm:p-5 text-left transition-all duration-300 ${
                    isActive
                      ? `${netTheme.border} bg-linear-to-br ${netTheme.bgGradient} shadow-xl ${netTheme.shadow}`
                      : "hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        accentClasses[
                          net.accent as keyof typeof accentClasses
                        ]
                      }`}
                    >
                      <Icon size={18} />
                    </span>

                    <span
                      className={`rounded-full px-2 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${
                        isActive
                          ? netTheme.routePill
                          : "bg-slate-50 text-slate-400 dark:bg-slate-800/80"
                      }`}
                    >
                      {isActive ? "Selected" : "Route"}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white">
                    {net.title}
                  </h3>

                  <p
                    className={`mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide ${netTheme.text}`}
                  >
                    {net.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {net.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {net.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${
                          isActive
                            ? netTheme.tagActive
                            : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT DIAGRAM */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="premium-card relative overflow-hidden rounded-2xl p-3 sm:p-5 lg:p-7">
              <div
                className="absolute inset-0 diagram-grid opacity-70"
                aria-hidden="true"
              />

              <div
                className={`absolute left-1/2 top-1/2 hidden lg:block h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border ${activeTheme.pulseBorder} animate-pulse-slow`}
              />

              <div
                className="absolute left-1/2 top-1/2 hidden lg:block h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80 dark:border-slate-700"
              />

              {/* RESPONSIVE DIAGRAM */}
              <div className="relative w-full min-h-[520px] sm:min-h-[560px] lg:h-[540px]">
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
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#109B82"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#0FA88A"
                        stopOpacity="1"
                      />
                    </linearGradient>

                    <linearGradient
                      id="laser-green"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#4F8F7B"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#10B981"
                        stopOpacity="1"
                      />
                    </linearGradient>

                    <linearGradient
                      id="laser-warm"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#B85A3A"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#C99A5A"
                        stopOpacity="1"
                      />
                    </linearGradient>
                  </defs>

                  {/* LEFT TO CENTER */}
                  <path
                    d="M 13 50 L 50 50"
                    fill="none"
                    stroke={activeTheme.glowColor}
                    strokeWidth="6"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#laser-glow)"
                    className="transition-all duration-300"
                  />

                  <path
                    d="M 13 50 L 50 50"
                    fill="none"
                    stroke={activeTheme.laser}
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="6 6"
                    className="animate-flow-dash transition-all duration-300"
                  />

                  {/* TOP */}
                  <path
                    d="M 50 50 C 58 50, 64 16.7, 72 16.7"
                    fill="none"
                    stroke={
                      activeSegment === 0
                        ? themeClasses.teal.glowColor
                        : "rgba(148,163,184,0.08)"
                    }
                    strokeWidth={activeSegment === 0 ? "6" : "2"}
                    vectorEffect="non-scaling-stroke"
                    filter={
                      activeSegment === 0
                        ? "url(#laser-glow)"
                        : undefined
                    }
                    className="transition-all duration-300"
                  />

                  <path
                    d="M 50 50 C 58 50, 64 16.7, 72 16.7"
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
                      activeSegment === 0
                        ? "animate-flow-dash-fast"
                        : ""
                    } transition-all duration-300`}
                  />

                  {/* MIDDLE */}
                  <path
                    d="M 50 50 L 72 50"
                    fill="none"
                    stroke={
                      activeSegment === 1
                        ? themeClasses.green.glowColor
                        : "rgba(148,163,184,0.08)"
                    }
                    strokeWidth={activeSegment === 1 ? "6" : "2"}
                    vectorEffect="non-scaling-stroke"
                    filter={
                      activeSegment === 1
                        ? "url(#laser-glow)"
                        : undefined
                    }
                    className="transition-all duration-300"
                  />

                  <path
                    d="M 50 50 L 72 50"
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
                      activeSegment === 1
                        ? "animate-flow-dash-fast"
                        : ""
                    } transition-all duration-300`}
                  />

                  {/* BOTTOM */}
                  <path
                    d="M 50 50 C 58 50, 64 83.3, 72 83.3"
                    fill="none"
                    stroke={
                      activeSegment === 2
                        ? themeClasses.warm.glowColor
                        : "rgba(148,163,184,0.08)"
                    }
                    strokeWidth={activeSegment === 2 ? "6" : "2"}
                    vectorEffect="non-scaling-stroke"
                    filter={
                      activeSegment === 2
                        ? "url(#laser-glow)"
                        : undefined
                    }
                    className="transition-all duration-300"
                  />

                  <path
                    d="M 50 50 C 58 50, 64 83.3, 72 83.3"
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
                      activeSegment === 2
                        ? "animate-flow-dash-fast"
                        : ""
                    } transition-all duration-300`}
                  />
                </svg>

                {/* MOBILE/TABLET STACK */}
                <div className="flex flex-col gap-5 lg:hidden relative z-10">
                  {/* PRODUCT COMPANY */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="glass-effect rounded-2xl border border-slate-200/80 p-5 text-center dark:border-slate-800"
                  >
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-slate-800">
                      <Cpu size={22} />
                    </span>

                    <p className="text-base font-black text-slate-950 dark:text-white">
                      Global Product Company
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      SaaS, AI, automation, and enterprise software teams
                      seeking India growth.
                    </p>
                  </motion.div>

                  {/* CONNECTOR */}
                  <div className="flex justify-center">
                    <div
                      className={`h-14 w-[2px] rounded-full ${activeTheme.bgLight}`}
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
                      <Zap size={22} />
                    </span>

                    <p className="break-words text-lg sm:text-xl font-black uppercase tracking-tight text-slate-950 dark:text-white">
                      VALUEAGES
                    </p>

                    <p
                      className={`mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${activeTheme.text}`}
                    >
                      GTM Advisory
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Qualifies the account thesis, maps stakeholders, and
                      coordinates executive motion.
                    </p>
                  </motion.div>

                  {/* RIGHT BUTTONS */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {networks.map((net, idx) => {
                      const Icon = net.icon;

                      const isActive = activeSegment === idx;

                      return (
                        <button
                          key={net.title}
                          type="button"
                          onClick={() => setActiveSegment(idx)}
                          onMouseEnter={() => setActiveSegment(idx)}
                          className={`interactive-card rounded-2xl border p-4 text-left shadow-sm transition-all duration-300 relative overflow-hidden ${
                            isActive
                              ? themeClasses[
                                  net.accent as keyof typeof themeClasses
                                ].rightButton
                              : "border-slate-200/80 bg-white/95 text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300 hover:border-slate-300 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            <span
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                                isActive
                                  ? themeClasses[
                                      net.accent as keyof typeof themeClasses
                                    ].rightButtonIcon
                                  : "bg-slate-100 text-slate-500 dark:bg-slate-800/80 dark:text-slate-400"
                              }`}
                            >
                              <Icon size={16} />
                            </span>

                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-xs font-extrabold uppercase tracking-wide leading-tight transition-colors duration-300 ${
                                  isActive
                                    ? "text-slate-950 dark:text-white"
                                    : "text-slate-700 dark:text-slate-300"
                                }`}
                              >
                                {net.title}
                              </p>

                              <p className="mt-1 text-[10px] leading-relaxed opacity-75">
                                {net.subtitle}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* DESKTOP ORIGINAL CONNECTOR LAYOUT */}
                <div className="relative z-10 hidden lg:flex h-full items-center justify-between gap-4">
                  {/* LEFT */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-effect w-[27%] rounded-2xl p-5 text-center border-slate-200/80 dark:border-slate-800"
                  >
                    <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-slate-800">
                      <Cpu size={22} />
                    </span>

                    <p className="text-sm xl:text-base font-extrabold text-slate-950 dark:text-white">
                      Global Product Company
                    </p>

                    <p className="mt-3 text-xs xl:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      SaaS, AI, automation, and enterprise software teams
                      seeking India growth.
                    </p>
                  </motion.div>

                  {/* CENTER */}
                  <motion.div
                    key={activeSegment}
                    initial={{ scale: 0.96, opacity: 0.82 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`relative w-[27%] rounded-2xl border-2 p-5 text-center shadow-xl backdrop-blur-md transition-all duration-300 ${activeTheme.cardBg}`}
                  >
                    <span
                      className={`absolute -inset-2 rounded-2xl border animate-pulse-slow transition-all duration-300 ${activeTheme.cardPulse}`}
                    />

                    <span
                      className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-all duration-300 ${activeTheme.cardZapBg}`}
                    >
                      <Zap size={22} className="animate-pulse" />
                    </span>

                    <p className="break-words text-base xl:text-lg font-black uppercase tracking-tight text-slate-950 dark:text-white">
                      VALUEAGES
                    </p>

                    <p
                      className={`mt-1 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${activeTheme.text}`}
                    >
                      GTM Advisory
                    </p>

                    <p className="mt-3 text-xs xl:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      Qualifies the account thesis, maps stakeholders, and
                      coordinates executive motion.
                    </p>
                  </motion.div>

                  {/* RIGHT */}
                  <div className="grid w-[30%] h-full grid-rows-3 gap-4 py-2 self-stretch">
                    {networks.map((net, idx) => {
                      const Icon = net.icon;

                      const isActive = activeSegment === idx;

                      return (
                        <div
                          key={net.title}
                          className="flex items-center min-w-0"
                        >
                          <button
                            type="button"
                            onClick={() => setActiveSegment(idx)}
                            onMouseEnter={() => setActiveSegment(idx)}
                            className={`w-full interactive-card rounded-xl border p-3 text-left shadow-sm transition-all duration-300 relative overflow-hidden ${
                              isActive
                                ? themeClasses[
                                    net.accent as keyof typeof themeClasses
                                  ].rightButton
                                : "border-slate-200/80 bg-white/95 text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300 hover:border-slate-300 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                                  isActive
                                    ? themeClasses[
                                        net.accent as keyof typeof themeClasses
                                      ].rightButtonIcon
                                    : "bg-slate-100 text-slate-500 dark:bg-slate-800/80 dark:text-slate-400"
                                }`}
                              >
                                <Icon size={14} />
                              </span>

                              <div className="min-w-0 flex-1">
                                <p
                                  className={`text-[10px] xl:text-xs font-extrabold uppercase tracking-wide leading-tight transition-colors duration-300 ${
                                    isActive
                                      ? "text-slate-950 dark:text-white"
                                      : "text-slate-700 dark:text-slate-300"
                                  }`}
                                >
                                  {net.title}
                                </p>

                                <p className="mt-1 text-[9px] xl:text-[10px] leading-relaxed opacity-75">
                                  {net.subtitle}
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="glass-effect relative z-20 mt-6 rounded-2xl p-4 border-slate-200/80 dark:border-slate-800 shadow-lg">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        accentClasses[
                          active.accent as keyof typeof accentClasses
                        ]
                      }`}
                    >
                      <ActiveIcon size={18} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                        Active path: {active.title}
                      </p>

                      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        Client thesis → VALUEAGES qualification → executive
                        introduction.
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    Connected <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TAG */}
        <p className="mx-auto mt-12 flex w-fit max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-center text-xs font-semibold text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800/65 dark:text-slate-400">
          <Sparkles
            size={14}
            className="shrink-0 text-brand-teal"
          />

          Bengaluru, Mumbai, Pune, Chennai, Gurgaon, and Hyderabad enterprise
          hubs.
        </p>
      </div>
    </section>
  );
}