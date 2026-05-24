"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Check,
  ShieldCheck,
  Clock,
  ArrowRight,
  Phone,
} from "lucide-react";

// Social channel removed: intentionally omitted

/* ─────────────────────────────────────────────
   Form field helpers
───────────────────────────────────────────── */
type FieldName = "name" | "email" | "company" | "message";

function validateField(name: FieldName, value: string): string {
  const labels: Record<FieldName, string> = {
    name:    "Full Name",
    email:   "Work Email",
    company: "Company Name",
    message: "Message",
  };
  if (!value.trim()) return `${labels[name]} is required.`;
  if (name === "email" && !/\S+@\S+\.\S+/.test(value))
    return "Please provide a valid work email address.";
  return "";
}

function isFieldValid(name: FieldName, value: string): boolean {
  return value.trim().length > 0 && !(name === "email" && !/\S+@\S+\.\S+/.test(value));
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function Contact() {
  const [formData, setFormData]     = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors]         = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]   = useState(false);
  const [touched, setTouched]       = useState<Record<string, boolean>>({});
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSuccess && nameInputRef.current) nameInputRef.current.focus();
  }, [isSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
    if (touched[name]) setValidFields(prev => ({ ...prev, [name]: isFieldValid(name as FieldName, value) }));
  };

  const handleBlur = (name: FieldName) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const value = formData[name];
    const err   = validateField(name, value);
    setValidFields(prev => ({ ...prev, [name]: isFieldValid(name, value) }));
    if (err) setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    (["name", "email", "company", "message"] as FieldName[]).forEach(f => {
      const err = validateField(f, formData[f]);
      if (err) newErrors[f] = err;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(prev => ({ ...prev, ...Object.keys(newErrors).reduce<Record<string,boolean>>((a, k) => { a[k] = true; return a; }, {}) }));
      const first = document.getElementById(Object.keys(newErrors)[0]);
      (first as HTMLElement | null)?.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTouched({});
      setValidFields({});
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = (f: FieldName) => {
    const hasErr = errors[f] && touched[f];
    return `w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 min-h-11 bg-white text-slate-900 placeholder:text-slate-400 ${
      hasErr ? "border-brand-rust focus:ring-brand-rust/20 focus:border-brand-rust"
             : "border-slate-200 focus:ring-brand-teal/20 focus:border-brand-teal"
    }`;
  };

  return (
    <section
      id="contact"
      className="section-shell theme-section-muted relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* ── Ambient depth and subtle dot grid instead of heavy green blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #109B82 1px, transparent 1px), linear-gradient(to bottom, #109B82 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />
        {/* Extremely low-opacity ambient glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-brand-teal/[0.018] blur-[110px]" />
        <div className="absolute bottom-0 left-[10%] h-80 w-80 rounded-full bg-brand-tan/[0.015] blur-3xl" />
        <div className="absolute top-1/3 right-[5%] h-64 w-64 rounded-full bg-brand-teal/[0.012] blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Section header ── */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-eyebrow mx-auto mb-4">Get In Touch</span>
          <h2
            id="contact-title"
            className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-slate-950"
          >
            Expand Into India with Confidence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            One conversation to see if there&apos;s a fit. No decks, no pitches — just a direct
            discussion about your India GTM situation.
          </p>

          {/* Minimalist flat trust anchors instead of box-on-box grid cards */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-650">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-brand-teal stroke-[2.5]" />
              No pitch, no deck
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
            <span className="flex items-center gap-2">
              <Check size={14} className="text-brand-teal stroke-[2.5]" />
              24h Advisor Response
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
            <span className="flex items-center gap-2">
              <Check size={14} className="text-brand-teal stroke-[2.5]" />
              Private & Confidential
            </span>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start mt-12">

          {/* Left — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Intro card */}
            <div className="rounded-2xl border border-brand-teal/15 bg-gradient-to-br from-white via-white to-brand-teal/[0.04] p-6 shadow-xs relative overflow-hidden">
              <span className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/3 rounded-full blur-2xl pointer-events-none" />
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-teal mb-3">
                Why partner with valueages?
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Open direct CXO-level relationships, build structured partner motions, and accelerate flagship BFSI, GSI, and GCC customer validation across India.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["India Market Entry", "CXO Access", "GSI Co-sell", "GCC Programmes"].map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-slate-600 hover:border-brand-teal/20 hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Consolidated Bento Contact Directory Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Direct Advisor Access</p>
                <h4 className="text-base font-extrabold text-slate-950 mt-1">Manas Das</h4>
                <p className="text-xs text-slate-500">Managing Director & GTM Lead</p>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="flex flex-col gap-4">
                {/* Email Address */}
                <a
                  href="mailto:manas.das@valueages.com"
                  className="group flex items-center gap-3.5 rounded-xl border border-transparent p-1 transition-all duration-200 hover:border-brand-teal/10 hover:bg-brand-teal/[0.02]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/8 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-200">
                    <Mail size={16} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-extrabold uppercase tracking-wider text-slate-400">Direct Email</p>
                    <p className="mt-0.5 truncate text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-teal transition-colors">manas.das@valueages.com</p>
                  </div>
                  <ArrowRight size={13} className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Phone Connections */}
                <a
                  href="tel:+919654017778"
                  className="group flex items-center gap-3.5 rounded-xl border border-transparent p-1 transition-all duration-200 hover:border-brand-teal/10 hover:bg-brand-teal/[0.02]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/8 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-200">
                    <Phone size={16} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-extrabold uppercase tracking-wider text-slate-400">Direct Phone</p>
                    <p className="mt-0.5 text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-teal transition-colors">+91 9654017778</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 group-hover:text-slate-500 transition-colors">+91 6362025780</p>
                  </div>
                  <ArrowRight size={13} className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Corporate Address */}
                <div className="flex items-start gap-3.5 p-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/8 text-brand-teal">
                    <MapPin size={16} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[8px] font-extrabold uppercase tracking-wider text-slate-400">Corporate Hub</p>
                    <p className="mt-0.5 text-xs sm:text-sm font-semibold text-slate-900 leading-snug">DLF Cyber City, Patia, Bhubaneswar</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Odisha, India · www.valueages.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_2px_32px_-8px_rgba(15,23,42,0.1),0_1px_0_rgba(255,255,255,0.8)_inset]">

              {/* Form header accent */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-teal via-brand-teal-light to-brand-tan" />

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                      aria-label="Contact inquiry form"
                    >
                      {/* Form heading */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-950">Send an Inquiry</h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Fields marked <span className="font-bold text-brand-rust">*</span> are required.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          Full Name <span className="text-brand-rust">*</span>
                        </label>
                        <div className="relative">
                          <input
                            ref={nameInputRef}
                            type="text" id="name" name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur("name")}
                            placeholder="Your full name"
                            autoComplete="name"
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            disabled={isSubmitting}
                            className={`${inputCls("name")} ${validFields.name && touched.name ? "pr-10" : ""}`}
                          />
                          {validFields.name && touched.name && !errors.name && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" aria-hidden="true">
                              <Check size={15} />
                            </span>
                          )}
                        </div>
                        {errors.name && touched.name && (
                          <span id="name-error" role="alert" className="flex items-center gap-1.5 text-xs font-semibold text-brand-rust">
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email + Company */}
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Work Email <span className="text-brand-rust">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email" id="email" name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={() => handleBlur("email")}
                              placeholder="you@company.com"
                              autoComplete="email"
                              inputMode="email"
                              aria-required="true"
                              aria-invalid={!!errors.email}
                              aria-describedby={errors.email ? "email-error" : undefined}
                              disabled={isSubmitting}
                              className={`${inputCls("email")} ${validFields.email && touched.email ? "pr-10" : ""}`}
                            />
                            {validFields.email && touched.email && !errors.email && (
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" aria-hidden="true">
                                <Check size={15} />
                              </span>
                            )}
                          </div>
                          {errors.email && touched.email && (
                            <span id="email-error" role="alert" className="flex items-center gap-1.5 text-xs font-semibold text-brand-rust">
                              <AlertCircle size={12} aria-hidden="true" />
                              {errors.email}
                            </span>
                          )}
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Company Name <span className="text-brand-rust">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text" id="company" name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onBlur={() => handleBlur("company")}
                              placeholder="Your company"
                              autoComplete="organization"
                              aria-required="true"
                              aria-invalid={!!errors.company}
                              aria-describedby={errors.company ? "company-error" : undefined}
                              disabled={isSubmitting}
                              className={`${inputCls("company")} ${validFields.company && touched.company ? "pr-10" : ""}`}
                            />
                            {validFields.company && touched.company && !errors.company && (
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" aria-hidden="true">
                                <Check size={15} />
                              </span>
                            )}
                          </div>
                          {errors.company && touched.company && (
                            <span id="company-error" role="alert" className="flex items-center gap-1.5 text-xs font-semibold text-brand-rust">
                              <AlertCircle size={12} aria-hidden="true" />
                              {errors.company}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          How can we help? <span className="text-brand-rust">*</span>
                        </label>
                        <textarea
                          id="message" name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={() => handleBlur("message")}
                          rows={4}
                          placeholder="Tell us about your go-to-market needs in India..."
                          autoComplete="off"
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : "message-help"}
                          disabled={isSubmitting}
                          className={`${inputCls("message")} resize-none`}
                        />
                        <div className="flex items-center justify-between">
                          <p id="message-help" className="text-[11px] text-slate-400">Briefly describe your GTM needs.</p>
                          <span className={`text-[11px] font-medium tabular-nums ${formData.message.length > 500 ? "text-brand-rust" : "text-slate-400"}`}>
                            {formData.message.length}/500
                          </span>
                        </div>
                        {errors.message && touched.message && (
                          <span id="message-error" role="alert" className="flex items-center gap-1.5 text-xs font-semibold text-brand-rust">
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.message}
                          </span>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="space-y-3 pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          aria-busy={isSubmitting}
                          className="primary-button btn-premium group w-full rounded-xl py-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                              Sending Inquiry…
                            </>
                          ) : (
                            <>
                              Submit Inquiry
                              <Send
                                size={15}
                                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </button>

                        {/* Privacy micro-copy */}
                        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                          <ShieldCheck size={12} className="shrink-0 text-brand-teal" aria-hidden="true" />
                          Your information is kept strictly confidential and never shared.
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-center justify-center py-14 px-4 text-center"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-500 shadow-sm">
                        <CheckCircle2 size={30} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-950">Inquiry Submitted</h3>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                        Thank you for reaching out. Manas will respond within 24 hours.
                      </p>
                      <button
                        onClick={() => { setIsSuccess(false); setTimeout(() => nameInputRef.current?.focus(), 50); }}
                        className="secondary-button mt-8 px-6 py-2.5 text-sm"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
