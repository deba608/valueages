"use client";
import { Cpu, Database, GitMerge, LayoutGrid, Network, ShieldCheck } from "lucide-react";

export default function UnifyAppsPartnership() {
  return (
    <section id="partnership" className="section-shell theme-section-muted" aria-labelledby="partnership-title">
      {/* Background vector accents */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-brand-rust/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Block: Description of Partnership */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="section-eyebrow mb-3 bg-brand-teal/15">
              Strategic Partnership
            </span>
            <h2 id="partnership-title" className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-slate-950 dark:text-white mb-6">
              Accelerating Adoption with UnifyApps
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              VALUEAGES is a dedicated <strong className="text-slate-900 dark:text-slate-200">Strategic GTM Partner to UnifyApps</strong> in India. We represent and
              drive enterprise adoption of their cutting-edge AI orchestration and integration platform across
              leading conglomerates and industries.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              By connecting corporate buyers with next-generation automation capabilities, we help major organizations 
              unify fragmented data lakes, coordinate enterprise integrations, and execute enterprise-grade, secure 
              AI workflows.
            </p>

            {/* Structured Value Tracks */}
            <div className="space-y-4 w-full">
              <div className="surface-card flex gap-4 p-4 rounded-xl shadow-none hover:border-brand-teal/35 hover:shadow-md transition-all duration-300">
                <div className="p-2 rounded-lg bg-brand-teal/10 text-brand-teal shrink-0 mt-0.5">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">AI Orchestration Positioning</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Selling advanced LLM orchestration tools to optimize key administrative, commercial, and presales pipelines.</p>
                </div>
              </div>
              <div className="surface-card flex gap-4 p-4 rounded-xl shadow-none hover:border-brand-rust/35 hover:shadow-md transition-all duration-300">
                <div className="p-2 rounded-lg bg-brand-rust/10 text-brand-rust shrink-0 mt-0.5">
                  <GitMerge size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Unified Data Integrations</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Enabling enterprises to orchestrate 1,000+ software APIs, connecting siloed applications instantly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic AI Orchestration Visual Diagram */}
          <div className="lg:col-span-6">
            <div className="surface-panel relative overflow-hidden rounded-2xl p-5 shadow-none backdrop-blur-md sm:p-8">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#109B82 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Enterprise AI Architecture Mockup</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">Active Link</span>
                </div>

                {/* The flow layout */}
                <div className="flex flex-col gap-6 relative">
                  
                  {/* Layer 1: Sources */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/50 flex flex-col items-center gap-1.5 shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                      <Database size={16} className="text-slate-500 dark:text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">CRMs / SAP</span>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/50 flex flex-col items-center gap-1.5 shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                      <LayoutGrid size={16} className="text-slate-500 dark:text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">HRMS Databases</span>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/50 flex flex-col items-center gap-1.5 shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                      <Network size={16} className="text-slate-500 dark:text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">Legacy Systems</span>
                    </div>
                  </div>

                  {/* Flow Vector Lines to Center */}
                  <div className="flex items-center justify-center my-2 relative h-10">
                    <svg className="w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                      <defs>
                        <linearGradient id="laser-active-unify" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#109B82" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#109B82" stopOpacity="1" />
                        </linearGradient>
                      </defs>

                      {/* Inactive background curves */}
                      <path d="M 16.67 0 C 16.67 50, 50 50, 50 100" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                      <path d="M 50 0 L 50 100" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                      <path d="M 83.33 0 C 83.33 50, 50 50, 50 100" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />

                      {/* Active glow curves */}
                      <path d="M 16.67 0 C 16.67 50, 50 50, 50 100" stroke="rgba(16,155,130,0.18)" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                      <path d="M 16.67 0 C 16.67 50, 50 50, 50 100" stroke="url(#laser-active-unify)" strokeWidth="1.8" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-flow-dash-fast" />

                      <path d="M 50 0 L 50 100" stroke="rgba(16,155,130,0.18)" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                      <path d="M 50 0 L 50 100" stroke="url(#laser-active-unify)" strokeWidth="1.8" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-flow-dash-fast" />

                      <path d="M 83.33 0 C 83.33 50, 50 50, 50 100" stroke="rgba(16,155,130,0.18)" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                      <path d="M 83.33 0 C 83.33 50, 50 50, 50 100" stroke="url(#laser-active-unify)" strokeWidth="1.8" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-flow-dash-fast" />
                    </svg>
                  </div>

                  {/* Layer 2: Central AI Orchestration Core (UnifyApps) */}
                  <div className="p-5 rounded-2xl border-2 border-brand-teal/40 bg-linear-to-r from-brand-teal/15 to-brand-teal/5 text-center relative shadow-lg">
                    {/* Pulsing ring */}
                    <span className="absolute -inset-1 rounded-2xl border border-brand-teal opacity-25" />
                    
                    <span className="text-[9px] font-bold uppercase tracking-wider text-brand-teal">Orchestration Layer</span>
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mt-1">UnifyApps AI Core</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 max-w-[280px] mx-auto">Real-time automation engine translating legacy actions to advanced models.</p>
                  </div>

                  {/* Flow Vector Lines to Output */}
                  <div className="flex items-center justify-center my-2 relative h-10">
                    <svg className="w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                      {/* Inactive background paths */}
                      <path d="M 50 0 C 50 50, 25 50, 25 100" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                      <path d="M 50 0 C 50 50, 75 50, 75 100" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />

                      {/* Active glow curves */}
                      <path d="M 50 0 C 50 50, 25 50, 25 100" stroke="rgba(16,155,130,0.18)" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                      <path d="M 50 0 C 50 50, 25 50, 25 100" stroke="url(#laser-active-unify)" strokeWidth="1.8" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-flow-dash-fast" />

                      <path d="M 50 0 C 50 50, 75 50, 75 100" stroke="rgba(16,155,130,0.18)" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                      <path d="M 50 0 C 50 50, 75 50, 75 100" stroke="url(#laser-active-unify)" strokeWidth="1.8" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-flow-dash-fast" />
                    </svg>
                  </div>

                  {/* Layer 3: Output Targets */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-white/80 text-center shadow-none hover:border-brand-teal/30 dark:border-slate-800 dark:bg-slate-900/50 transition-colors">
                      <p className="text-[11px] font-extrabold text-brand-teal">Enterprise LLMs</p>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">Secure AI Reasoning</p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-white/80 text-center shadow-none hover:border-brand-rust/30 dark:border-slate-800 dark:bg-slate-900/50 transition-colors">
                      <p className="text-[11px] font-extrabold text-brand-rust">Unified Workflows</p>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">Automated Business Actions</p>
                    </div>
                  </div>

                </div>

                {/* Flow Note */}
                <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-[10px] text-center text-slate-500 dark:bg-slate-900/40 dark:border-slate-800 dark:text-slate-400 flex items-center justify-center gap-2">
                  <ShieldCheck size={12} className="text-brand-teal shrink-0" />
                  <span>Complete end-to-end security compliance, SOC2, and customized local deployment models.</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
