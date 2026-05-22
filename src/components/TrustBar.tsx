"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  subLabel?: string;
}

function CounterStat({ value, suffix, label, subLabel }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      start = Math.floor(eased * value);
      setCount(start);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6 sm:p-4 card-interactive">
      <div className="flex items-baseline justify-center">
        <span className="text-4xl sm:text-5xl font-extrabold text-brand-teal tracking-tight">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-extrabold text-brand-teal ml-0.5">
          {suffix}
        </span>
      </div>
      <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-2 tracking-wide uppercase">{label}</p>
      {subLabel && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] leading-relaxed">{subLabel}</p>
      )}
    </div>
  );
}

export default function TrustBar() {
  const stats = [
    { value: 22, suffix: "+", label: "Enterprise Software", subLabel: "Technical & commercial track record" },
    { value: 5, suffix: "+", label: "Top-Tier Sales Leadership", subLabel: "At ServiceNow, OutSystems, Salesforce" },
    { value: 5, suffix: "+", label: "Enterprise Wins Closed", subLabel: "Through strategic partner deals" },
    { value: 100, suffix: "%", label: "Pure Sales & GTM Focus", subLabel: "Zero delivery or implementation overhead" },
  ];

  return (
    <section className="relative z-20 py-10 bg-white dark:bg-[#0b1221] border-y border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none trust-bar-glass" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
          {stats.map((stat, index) => (
            <CounterStat
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              subLabel={stat.subLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
