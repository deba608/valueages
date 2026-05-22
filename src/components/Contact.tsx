"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, MapPin, Send, 
  CheckCircle2, AlertCircle, Loader2, Check
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});
  const nameInputRef = useRef<HTMLInputElement>(null);
  const firstErrorRef = useRef<HTMLSpanElement>(null);

  const validateField = (fieldName: string, value: string): string => {
    if (!value.trim()) return `${fieldName === "name" ? "Full Name" : fieldName === "email" ? "Work Email" : fieldName === "company" ? "Company Name" : "Message"} is required.`;
    if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) return "Please provide a valid work email address.";
    return "";
  };

  const checkFieldValidity = (fieldName: string, value: string): boolean => {
    return value.trim().length > 0 && !(fieldName === "email" && !/\S+@\S+\.\S+/.test(value));
  };

  useEffect(() => {
    if (isSuccess && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isSuccess]);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Work Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please provide a valid work email address.";
    }
    
    if (!formData.company.trim()) tempErrors.company = "Company Name is required.";
    if (!formData.message.trim()) tempErrors.message = "Message details are required.";
    
    setErrors(tempErrors);
    return tempErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    
    if (touched[name]) {
      const isValid = checkFieldValidity(name, value);
      setValidFields((prev) => ({ ...prev, [name]: isValid }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const value = formData[fieldName as keyof typeof formData];
    const error = validateField(fieldName, value);
    const isValid = checkFieldValidity(fieldName, value);
    
    setValidFields((prev) => ({ ...prev, [fieldName]: isValid }));
    
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = Object.keys(nextErrors)[0];
      setTouched((prev) => ({
        ...prev,
        ...Object.keys(nextErrors).reduce<Record<string, boolean>>((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
      }));
      const input = document.getElementById(firstErrorField);
      if (input) {
        (input as HTMLElement).focus();
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTouched({});
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => {
    const hasError = errors[fieldName] && touched[fieldName];
    const isValid = validFields[fieldName] && touched[fieldName];
    
    return `w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 min-h-[44px] bg-white text-slate-900 placeholder:text-slate-400 shadow-none dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 ${
      hasError
        ? "border-brand-rust focus:ring-brand-rust/20 focus:border-brand-rust"
        : isValid
        ? "border-emerald-500 focus:ring-emerald-500/20 focus:border-emerald-500"
        : "border-slate-200 dark:border-slate-800 focus:ring-brand-teal/20 focus:border-brand-teal"
    }`;
  };

  return (
    <section id="contact" className="section-shell theme-section-muted" aria-labelledby="contact-title">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="section-eyebrow mb-3 bg-brand-teal/15">
                Get In Touch
              </span>
              <h2 id="contact-title" className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-slate-950 dark:text-white mb-4">
                Expand Into India with Confidence
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                Partner with VALUEAGES to accelerate your enterprise sales cycles, coordinate strategic account GTM plays,
                and win flagship BFSI, GSI, and GCC accounts.
              </p>
            </div>

            {/* Direct Information Grid */}
            <div className="space-y-4 mb-12 lg:mb-0">
              <a
                href="mailto:manas.das@valueages.com"
                className="surface-card flex items-center gap-4 p-4 rounded-xl shadow-none hover:border-brand-teal/30 hover:shadow-md active:scale-[0.98] transition-all duration-300 group min-h-[44px]"
                aria-label="Email manas.das@valueages.com"
              >
                <div className="p-3 rounded-lg bg-brand-teal/10 text-brand-teal shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Direct Email</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-200 mt-0.5">manas.das@valueages.com</p>
                </div>
              </a>

              <div
                className="surface-card flex items-center gap-4 p-4 rounded-xl shadow-none hover:shadow-md transition-all duration-300 min-h-[44px]"
                role="text"
                aria-label="Located in Bhubaneswar, Odisha"
              >
                <div className="p-3 rounded-lg bg-brand-rust/10 text-brand-rust shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Corporate Hub</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-200 mt-0.5">DLF Cyber City, Patia, Bhubaneswar</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">+91 9654017778 • +91 6362025780 • www.valueages.com</p>
                </div>
              </div>

              <a
                href="https://linkedin.com/company/valueages"
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card flex items-center gap-4 p-4 rounded-xl shadow-none hover:border-brand-teal/30 hover:shadow-md active:scale-[0.98] transition-all duration-300 group min-h-[44px]"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                <div className="p-3 rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Professional Channel</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-200 mt-0.5">Connect on LinkedIn</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Block: High-fidelity B2B validated form */}
          <div className="lg:col-span-7">
            <div className="surface-panel rounded-2xl p-5 shadow-none sm:p-8">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    aria-label="Contact inquiry form"
                  >
                    <div className="text-left mb-6">
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">Send an Inquiry</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Fields marked with <span className="text-brand-rust font-bold">*</span> are required.</p>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col items-start gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        Full Name <span className="text-brand-rust">*</span>
                      </label>
                      <div className="relative w-full">
                        <input
                          ref={nameInputRef}
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("name")}
                          placeholder="Your name"
                          autoComplete="name"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`${inputClasses("name")} ${validFields.name && touched.name ? "pr-10" : ""}`}
                          disabled={isSubmitting}
                        />
                        {validFields.name && touched.name && !errors.name && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
                            <Check size={16} />
                          </span>
                        )}
                      </div>
                      {errors.name && touched.name && (
                        <span id="name-error" ref={firstErrorRef} className="flex items-center gap-1 text-xs font-semibold text-brand-rust mt-1" role="alert">
                          <AlertCircle size={12} />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email & Company double column */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col items-start gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                          Work Email <span className="text-brand-rust">*</span>
                        </label>
                        <div className="relative w-full">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("email")}
                            placeholder="you@company.com"
                            autoComplete="email"
                            inputMode="email"
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputClasses("email")} ${validFields.email && touched.email ? "pr-10" : ""}`}
                            disabled={isSubmitting}
                          />
                          {validFields.email && touched.email && !errors.email && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
                              <Check size={16} />
                            </span>
                          )}
                        </div>
                        {errors.email && touched.email && (
                          <span id="email-error" className="flex items-center gap-1 text-xs font-semibold text-brand-rust mt-1" role="alert">
                            <AlertCircle size={12} />
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Company */}
                      <div className="flex flex-col items-start gap-1.5">
                        <label htmlFor="company" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                          Company Name <span className="text-brand-rust">*</span>
                        </label>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("company")}
                            placeholder="Your company"
                            autoComplete="organization"
                            aria-required="true"
                            aria-invalid={!!errors.company}
                            aria-describedby={errors.company ? "company-error" : undefined}
                            className={`${inputClasses("company")} ${validFields.company && touched.company ? "pr-10" : ""}`}
                            disabled={isSubmitting}
                          />
                          {validFields.company && touched.company && !errors.company && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
                              <Check size={16} />
                            </span>
                          )}
                        </div>
                        {errors.company && touched.company && (
                          <span id="company-error" className="flex items-center gap-1 text-xs font-semibold text-brand-rust mt-1" role="alert">
                            <AlertCircle size={12} />
                            {errors.company}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col items-start gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        How can we help? <span className="text-brand-rust">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("message")}
                        rows={4}
                        placeholder="Tell us about your go-to-market needs in India..."
                        autoComplete="off"
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : "message-help"}
                        className={`${inputClasses("message")} resize-none`}
                        disabled={isSubmitting}
                      />
                      <div className="flex items-center justify-between w-full mt-1">
                        <p id="message-help" className="text-xs text-slate-500">Describe your GTM requirements briefly.</p>
                        <span className={`text-xs font-medium ${formData.message.length > 500 ? "text-brand-rust" : "text-slate-500"}`}>
                          {formData.message.length}/500
                        </span>
                      </div>
                      {errors.message && touched.message && (
                        <span id="message-error" className="flex items-center gap-1 text-xs font-semibold text-brand-rust mt-1" role="alert">
                          <AlertCircle size={12} />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="primary-button w-full rounded-xl py-4 text-white disabled:cursor-not-allowed disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 size={32} className="stroke-2" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">Inquiry Submitted Successfully</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
                      Thank you for connecting with VALUEAGES. We have received your inquiry and Manas will be in touch with you shortly.
                    </p>
                    
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setTouched({});
                        if (nameInputRef.current) {
                          nameInputRef.current.focus();
                        }
                      }}
                      className="secondary-button px-6 py-3 text-xs"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
