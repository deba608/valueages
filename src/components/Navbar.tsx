"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledDeep, setIsScrolledDeep] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scrollScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setIsScrolledDeep(scrollY > 180);

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
    <>
    <motion.div
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-brand-teal via-brand-teal-light to-brand-tan shadow-[0_0_18px_rgba(16,155,130,0.45)]"
      style={{ scaleX: scrollScaleX }}
      aria-hidden="true"
    />

    <nav
      ref={navbarRef}
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolledDeep
          ? "top-3 left-4 right-4 mx-auto w-[calc(100%-2rem)] max-w-4xl rounded-full py-1.5 px-6 navbar-glass shadow-lg scale-[0.98] safe-area-x"
          : isScrolled
          ? "top-4 left-4 right-4 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-2xl py-2 px-8 navbar-glass shadow-md safe-area-x"
          : "top-0 left-0 right-0 w-full py-4 px-8 bg-white/98 border-b border-slate-100 shadow-sm safe-top safe-area-x"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Ambient glow */}
      <div
        className={`navbar-glow transition-opacity duration-500 ${
          isScrolled ? "visible" : ""
        }`}
        aria-hidden="true"
      />

      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
        isScrolledDeep ? "max-w-4xl px-2" : isScrolled ? "max-w-6xl px-4" : "max-w-7xl px-8"
      }`}>
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
            className={`w-auto shrink-0 transition-all duration-500 ease-in-out group-hover:scale-105 ${
              isScrolledDeep ? "h-7" : "h-10 sm:h-11"
            }`}
            style={{ filter: 'none', width: 'auto' }}
            aria-hidden="true"
          />

          {/*
           * Nav_logo2 — Company name / text part
           * Collapses dynamically on deep scroll for floating dock aesthetics.
           */}
          <Image
            src="/Nav_logo2.svg"
            alt="VALUEAGES"
            width={224}
            height={44}
            className={`h-10 w-auto sm:h-11 shrink-0 transition-all duration-500 ease-in-out group-hover:scale-105 dark-invert ${
              isScrolledDeep ? "max-w-0 opacity-0 pointer-events-none scale-0 select-none origin-left -ml-1.5" : "max-w-[14rem] opacity-100"
            }`}
            loading="eager"
            style={{ width: 'auto' }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className={`flex items-center transition-all duration-500 ${isScrolledDeep ? "gap-0.5" : "gap-1"}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link-pill relative text-sm font-semibold transition-colors flex items-center ${
                      isActive
                        ? "nav-link-active text-brand-teal font-semibold"
                        : "text-slate-600 hover:text-brand-teal"
                    } ${isScrolledDeep ? "py-1 px-2.5 text-xs min-h-8" : "py-2 px-3.5 min-h-11"}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={`w-px bg-slate-200/60 transition-all duration-500 ${isScrolledDeep ? "h-4 mx-1" : "h-6 mx-2"}`} aria-hidden="true" />

          <a
            href="#contact"
            className={`nav-inquiry-button text-sm transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden flex items-center justify-center gap-2 group ${
              isScrolledDeep ? "px-3.5 py-1.5 text-xs rounded-full min-h-8" : "px-5 py-2.5 min-h-11"
            }`}
          >
            <span>{isScrolledDeep ? "Inquiry" : "Investor Inquiry"}</span>
            <ArrowRight
              size={isScrolledDeep ? 13 : 15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

        </div>

        {/* Mobile Right Controls */}
        <div className="lg:hidden flex items-center gap-1">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative flex items-center justify-center text-slate-600 hover:text-brand-teal active:scale-95 transition-all duration-500 rounded-xl hover:bg-slate-100/60 ${
              isScrolledDeep ? "p-1.5 min-w-8 min-h-8" : "p-2.5 min-w-11 min-h-11"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="transition-transform duration-300 flex items-center justify-center">
              {mobileMenuOpen ? <X size={isScrolledDeep ? 16 : 22} /> : <Menu size={isScrolledDeep ? 16 : 22} />}
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
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] mobile-glass border-l border-slate-200/40 z-50 shadow-2xl flex flex-col transition-all duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100/60">
          <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 min-w-11 min-h-11 flex items-center justify-center rounded-lg hover:bg-slate-100/60 active:scale-95 text-slate-500 transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile links */}
        <div className="drawer-scroll flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    ref={idx === 0 ? firstFocusableRef : undefined}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-xl min-h-11 flex items-center transition-all duration-200 text-base font-medium active:scale-[0.98] ${
                      isActive
                        ? "bg-brand-teal/10 text-brand-teal font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-teal"
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
        <div className="px-4 pb-6 pt-2 border-t border-slate-100/60 safe-bottom">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-inquiry-button w-full rounded-xl py-3.5 text-center flex items-center justify-center gap-2 group"
          >
            <span>Investor Inquiry</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}
