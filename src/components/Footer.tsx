"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

// Social channel removed: intentionally omitted

const quickLinks = [
  { label: "About Advisor",        href: "#about"       },
  { label: "GTM Services",         href: "#services"    },
  { label: "UnifyApps Partnership",href: "#partnership" },
  { label: "Enterprise Wins",      href: "#clients"     },
  { label: "Why Valueages",        href: "#why-us"      },
];

const focusAreas = [
  { label: "India Market Entry",    href: "#services" },
  { label: "Enterprise Sales Ops",  href: "#services" },
  { label: "BFSI & GCC Accounts",   href: "#services" },
  { label: "GSI Partner Alliances", href: "#services" },
  { label: "Fractional Leadership", href: "#services" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:manas.das@valueages.com",
    external: false,
    icon: <Mail className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Call",
    href: "tel:+919654017778",
    external: false,
    icon: <Phone className="h-4 w-4" aria-hidden="true" />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-section-light footer-surface border-t border-slate-200" role="contentinfo">

      {/* ── Footer body ── */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 sm:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <a
              href="#hero"
              className="group inline-flex shrink-0 items-center gap-1.5"
              aria-label="Valueages — back to top"
            >
              <Image
                src="/Nav_logo1.svg"
                alt=""
                width={34} height={44}
                className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{ filter: "none", width: "auto" }}
                aria-hidden="true"
              />
              <Image
                src="/Nav_logo2.svg"
                alt="VALUEAGES"
                width={224} height={44}
                className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 dark-invert"
                style={{ width: "auto" }}
              />
            </a>

            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              A premier enterprise GTM advisory helping global B2B product and SaaS tech companies
              successfully enter, navigate, and accelerate revenue in the Indian market.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, external, icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:border-brand-teal/30 hover:bg-brand-teal/5 hover:text-brand-teal hover:shadow-md active:scale-95"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Partner badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-brand-teal/15 bg-brand-teal/5 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal">
                Strategic partner to UnifyApps in India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-brand-teal"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors duration-200 group-hover:bg-brand-teal"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="md:col-span-2 md:col-start-9">
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
              Focus Areas
            </p>
            <ul className="flex flex-col gap-2.5">
              {focusAreas.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-brand-teal"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors duration-200 group-hover:bg-brand-teal"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-2 md:col-start-11">
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:manas.das@valueages.com"
                  className="group inline-flex items-start gap-2 text-slate-600 transition-colors duration-200 hover:text-brand-teal"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="break-all font-medium">manas.das@valueages.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919654017778"
                  className="group inline-flex items-center gap-2 text-slate-600 transition-colors duration-200 hover:text-brand-teal"
                >
                  <Phone size={14} className="shrink-0" aria-hidden="true" />
                  <span className="font-medium">+91 9654017778</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-500">
                <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>DLF Cyber City, Patia, Bhubaneswar</span>
              </li>
              {/* Social channel removed — intentionally omitted */}
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div
          className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          role="separator"
          aria-hidden="true"
        />

        {/* ── Bottom strip ── */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {year} Valueages. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400">
            <span>Strategic sales partner to</span>
            <a
              href="https://unifyapps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-teal transition-colors duration-200 hover:text-slate-900"
            >
              UnifyApps
            </a>
            <span>in India.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
