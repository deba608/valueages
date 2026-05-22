"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "cxo", "services", "partnership", "clients", "why-us", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const handleTabTrap = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleTabTrap);
    return () => document.removeEventListener("keydown", handleTabTrap);
  }, [handleTabTrap]);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "CXO Connect", href: "#cxo", id: "cxo" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Partnership", href: "#partnership", id: "partnership" },
    { name: "Proof", href: "#clients", id: "clients" },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "navbar-glass navbar-top-border scrolled py-2.5"
          : "navbar-glass py-3.5"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Ambient glow */}
      <div
        className={`navbar-glow transition-opacity duration-300 ${
          isScrolled ? "visible" : ""
        }`}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex shrink-0 items-center gap-1.5"
          aria-label="VALUEAGES Home"
        >
          {/*
           * Nav_logo1 — Icon / brand mark
           * Always renders in its exact original brand colours.
           * `style={{ filter: 'none' }}` is explicit so no parent or global
           * CSS ever accidentally mutates these colours.
           */}
          <Image
            src="/Nav_logo1.svg"
            alt=""
            width={34}
            height={44}
            className="h-10 w-auto sm:h-11 shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{ filter: 'none' }}
            aria-hidden="true"
          />

          {/*
           * Nav_logo2 — Company name / text part
           * Light mode : original dark colours – no filter applied.
           * Dark  mode : brightness(0) turns all pixels black, then
           *              invert(1) flips them to white so the text reads
           *              clearly on the dark navbar background.
           * The `transition-[filter]` gives a smooth 300 ms cross-fade
           * when the user toggles the theme.
           */}
          <Image
            src="/Nav_logo2.svg"
            alt="VALUEAGES"
            width={224}
            height={44}
            className={
              `h-10 w-auto sm:h-11 shrink-0 transition-all duration-300 group-hover:scale-105
               [transition-property:filter,transform]
               ${
                 theme === 'dark'
                   ? '[filter:brightness(0)_invert(1)]'
                   : '[filter:none]'
               }`
            }
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link-pill relative text-sm font-semibold transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? "nav-link-active text-brand-teal font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-brand-teal"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="w-px h-6 bg-slate-200/60 dark:bg-slate-700/60 mx-2" aria-hidden="true" />

          <a
            href="#contact"
            className="cta-glow inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-teal text-white text-sm font-semibold shadow-md shadow-brand-teal/15 hover:bg-accent-teal hover:shadow-lg hover:shadow-brand-teal/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 min-h-[44px]"
          >
            Investor Inquiry
          </a>

          <div className="w-px h-6 bg-slate-200/60 dark:bg-slate-700/60 mx-2" aria-hidden="true" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-teal hover:bg-slate-100/60 dark:hover:bg-slate-800/60 active:scale-90 transition-all duration-200"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            id="theme-toggle-desktop"
            suppressHydrationWarning
          >
            <span className="theme-icon-enter" key={theme}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="lg:hidden flex items-center gap-1">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-teal active:scale-90 transition-all duration-200"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            id="theme-toggle-mobile"
            suppressHydrationWarning
          >
            <span className="theme-icon-enter" key={theme}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-teal active:scale-90 transition-all duration-200 rounded-xl hover:bg-slate-100/60 dark:hover:bg-slate-800/60 active:bg-slate-100 dark:active:bg-slate-700"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="transition-transform duration-300">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-0 mobile-overlay lg:hidden z-40 transition-opacity duration-500 ease-out"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] mobile-glass border-l border-slate-200/40 dark:border-slate-700/40 z-50 shadow-2xl flex flex-col transition-all duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100/60 dark:border-slate-800/60">
          <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-800/60 active:scale-90 text-slate-500 dark:text-slate-400 transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile links */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    ref={idx === 0 ? firstFocusableRef : undefined}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl min-h-[44px] flex items-center transition-all duration-200 text-base font-medium active:scale-[0.98] ${
                      isActive
                        ? "bg-brand-teal/10 text-brand-teal font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-brand-teal"
                    }`}
                  >
                    {isActive && (
                      <span
                        className="w-1 h-4 rounded-full bg-brand-teal mr-3"
                        aria-hidden="true"
                      />
                    )}
                    {!isActive && <span className="w-1 mr-3" aria-hidden="true" />}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile CTA */}
        <div className="px-4 pb-6 pt-2 border-t border-slate-100/60 dark:border-slate-800/60">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="cta-glow w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-brand-teal text-white font-semibold shadow-md shadow-brand-teal/15 hover:bg-accent-teal hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-center min-h-[44px]"
          >
            Investor Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
}
