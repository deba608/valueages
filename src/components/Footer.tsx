"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="theme-section-light py-16 border-t border-slate-200 dark:border-slate-800/60" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <a href="#hero" className="group flex items-center gap-3" aria-label="VALUEAGES Home">
              <Image
                src="/Nav_logo1.svg"
                alt=""
                width={56}
                height={56}
                className="shrink-0 group-hover:scale-105 transition-transform duration-300"
                style={{ filter: 'none' }}
                aria-hidden="true"
              />

              <Image
                src="/Nav_logo2.svg"
                alt="VALUEAGES"
                width={180}
                height={44}
                className="shrink-0 hidden sm:block transition-all duration-300 group-hover:scale-105 dark-invert"
              />
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-sm leading-relaxed text-left">
              VALUEAGES is a premier enterprise-grade sales advisory helping global B2B product and SaaS tech companies
              successfully enter, navigate, and accelerate revenue operations across the Indian market.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://linkedin.com/company/valueages"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-teal hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label="Connect on LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:manas.das@valueages.com"
                className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-teal hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label="Send email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-brand-teal transition-colors duration-200">About Advisor</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-teal transition-colors duration-200">GTM Services</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-brand-teal transition-colors duration-200">UnifyApps Partnership</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-brand-teal transition-colors duration-200">Success Client Wins</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-teal transition-colors duration-200">Why VALUEAGES</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services categories */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-5">Focus Areas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-brand-teal transition-colors duration-200">India Market Entry</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-teal transition-colors duration-200">Enterprise Sales</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-teal transition-colors duration-200">BFSI & GCC Accounts</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-teal transition-colors duration-200">Fractional Leadership</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-5">Channels</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="text-slate-500 dark:text-slate-500">Email:</span>
                <a href="mailto:manas.das@valueages.com" className="break-all hover:text-brand-teal transition-colors duration-200 font-medium text-slate-700 dark:text-slate-300">
                  manas.das@valueages.com
                </a>
              </li>
              <li className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="text-slate-500 dark:text-slate-500">Phone:</span>
                <a href="tel:+919654017778" className="hover:text-brand-teal transition-colors duration-200 font-medium text-slate-700 dark:text-slate-300">+91 9654017778</a>
              </li>
              <li className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="text-slate-500 dark:text-slate-500">Website:</span>
                <a href="https://www.valueages.com" target="_blank" rel="noopener noreferrer" className="break-all hover:text-brand-teal transition-colors duration-200 font-medium text-slate-700 dark:text-slate-300">www.valueages.com</a>
              </li>
              <li className="flex min-w-0 flex-wrap items-start gap-2">
                <span className="text-slate-500 dark:text-slate-500">Location:</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">DLF Cyber City, Patia, Bhubaneswar</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://linkedin.com/company/valueages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-teal hover:text-slate-950 dark:hover:text-white font-semibold transition-colors duration-200"
                >
                  Connect on LinkedIn 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500 dark:text-slate-500">
            &copy; {currentYear} VALUEAGES. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-500">
            <span>Strategic sales partner to</span>
            <a
              href="https://unifyapps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline font-semibold transition-colors duration-200"
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
