"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu, X, ArrowRight,
  User2, Users, Briefcase, Handshake, Trophy,
  Phone, Mail, ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isScrolledDeep, setIsScrolledDeep] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]  = useState("");
  const mobileMenuRef    = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const navbarRef        = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const scrollScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  /* ── Scroll tracking ── */
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

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (mobileMenuOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  /* ── Keyboard: escape ── */
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  /* ── Keyboard: tab trap ── */
  const handleTabTrap = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !mobileMenuRef.current) return;
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleTabTrap);
    return () => document.removeEventListener("keydown", handleTabTrap);
  }, [handleTabTrap]);

  /* ── Nav data ── */
  const navLinks = [
    { name: "About",       href: "#about",       id: "about",       icon: User2,    desc: "Our advisor & credentials" },
    { name: "CXO Connect", href: "#cxo",          id: "cxo",         icon: Users,    desc: "Executive access network" },
    { name: "Services",    href: "#services",     id: "services",    icon: Briefcase, desc: "GTM & sales solutions" },
    { name: "Partnership", href: "#partnership",  id: "partnership", icon: Handshake, desc: "UnifyApps alliance" },
    { name: "Proof",       href: "#clients",      id: "clients",     icon: Trophy,   desc: "Enterprise wins" },
  ];

  /* ── Drawer animation variants ── */
  const drawerVariants = {
    closed: { x: "100%", opacity: 0 },
    open:   { x: 0,       opacity: 1 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open:   { opacity: 1 },
  };

  const itemVariants = {
    closed: { x: 28, opacity: 0 },
    open:   (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.06 + i * 0.055, duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  };

  const footerVariants = {
    closed: { y: 16, opacity: 0 },
    open:   { y: 0,  opacity: 1, transition: { delay: 0.42, duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* ── Scroll progress bar — sits INSIDE the navbar flow, above everything ── */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
        style={{
          scaleX: scrollScaleX,
          background: "linear-gradient(90deg, #109B82, #5D9F9B, #C99A5A)",
          boxShadow: "0 0 14px rgba(16,155,130,0.50)",
        }}
        aria-hidden="true"
      />

      {/* ── Main Navbar ── */}
      <nav
        ref={navbarRef}
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolledDeep
            ? "top-3 left-4 right-4 mx-auto w-[calc(100%-2rem)] max-w-4xl rounded-full py-1.5 px-6 navbar-glass shadow-lg scale-[0.98] safe-area-x"
            : isScrolled
            ? "top-4 left-4 right-4 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-2xl py-2 px-8 navbar-glass shadow-md safe-area-x"
            : "top-0 left-0 right-0 w-full py-3.5 px-8 bg-white/98 border-b border-slate-100/80 shadow-sm safe-area-x"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Ambient glow */}
        <div
          className={`navbar-glow transition-opacity duration-500 ${isScrolled ? "visible" : ""}`}
          aria-hidden="true"
        />

        <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolledDeep ? "max-w-4xl px-2" : isScrolled ? "max-w-6xl px-4" : "max-w-7xl px-8"
        }`}>

          {/* ── Logo ── */}
          <a href="#hero" className="group flex shrink-0 items-center gap-1.5" aria-label="VALUEAGES Home">
            <Image
              src="/Nav_logo1.svg"
              alt=""
              width={34}
              height={44}
              className={`w-auto shrink-0 transition-all duration-500 ease-in-out group-hover:scale-105 ${
                isScrolledDeep ? "h-7" : "h-10 sm:h-11"
              }`}
              style={{ filter: "none", width: "auto" }}
              aria-hidden="true"
            />
            <Image
              src="/Nav_logo2.svg"
              alt="VALUEAGES"
              width={224}
              height={44}
              className={`h-10 w-auto sm:h-11 shrink-0 transition-all duration-500 ease-in-out group-hover:scale-105 dark-invert ${
                isScrolledDeep
                  ? "max-w-0 opacity-0 pointer-events-none scale-0 select-none origin-left -ml-1.5"
                  : "max-w-[14rem] opacity-100"
              }`}
              loading="eager"
              style={{ width: "auto" }}
            />
          </a>

          {/* ── Desktop nav links ── */}
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

            <div
              className={`w-px bg-slate-200/60 transition-all duration-500 ${
                isScrolledDeep ? "h-4 mx-1" : "h-6 mx-2"
              }`}
              aria-hidden="true"
            />

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

          {/* ── Mobile hamburger ── */}
          <div className="lg:hidden flex items-center gap-1">
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative flex items-center justify-center text-slate-600 hover:text-brand-teal transition-colors duration-200 rounded-xl hover:bg-brand-teal/8 active:bg-brand-teal/12 ${
                isScrolledDeep ? "p-1.5 min-w-8 min-h-8" : "p-2.5 min-w-11 min-h-11"
              }`}
              whileTap={{ scale: 0.92 }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex items-center justify-center"
                  >
                    <X size={isScrolledDeep ? 16 : 22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0,  opacity: 1 }}
                    exit={{   rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex items-center justify-center"
                  >
                    <Menu size={isScrolledDeep ? 16 : 22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile overlay ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-overlay"
              className="fixed inset-0 top-0 mobile-overlay lg:hidden z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-drawer"
              id="mobile-nav-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[88vw] mobile-glass border-l border-slate-200/50 z-50 shadow-2xl flex flex-col lg:hidden"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", stiffness: 340, damping: 38, mass: 0.8 }}
            >
              {/* Subtle teal strip top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-tr-none"
                style={{
                  background: "linear-gradient(90deg, #109B82, #5D9F9B, #C99A5A)",
                }}
                aria-hidden="true"
              />

              {/* ── Drawer header ── */}
              <div className="flex items-center justify-between px-5 pt-6 pb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/Nav_logo1.svg"
                    alt=""
                    width={28}
                    height={36}
                    className="h-8 w-auto"
                    style={{ filter: "none", width: "auto" }}
                    aria-hidden="true"
                  />
                  <Image
                    src="/Nav_logo2.svg"
                    alt="VALUEAGES"
                    width={160}
                    height={36}
                    className="h-7 w-auto"
                    style={{ width: "auto" }}
                  />
                </div>
                <motion.button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 min-w-10 min-h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 active:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors duration-150"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={19} />
                </motion.button>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-gradient-to-r from-brand-teal/20 via-slate-200/80 to-transparent" aria-hidden="true" />

              {/* ── Nav links ── */}
              <div className="drawer-scroll flex-1 overflow-y-auto px-4 py-5">
                <p className="px-1 mb-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  Navigation
                </p>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    const LinkIcon = link.icon;
                    return (
                      <motion.li
                        key={link.name}
                        custom={idx}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <a
                          ref={idx === 0 ? firstFocusableRef : undefined}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`group relative flex items-center gap-3.5 py-3 px-3.5 rounded-xl min-h-[52px] transition-all duration-200 ${
                            isActive
                              ? "bg-brand-teal/10 text-brand-teal"
                              : "text-slate-700 hover:bg-slate-100/80 hover:text-brand-teal active:scale-[0.98]"
                          }`}
                        >
                          {/* Icon bubble */}
                          <span
                            className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                              isActive
                                ? "bg-brand-teal/15 text-brand-teal"
                                : "bg-slate-100 text-slate-500 group-hover:bg-brand-teal/10 group-hover:text-brand-teal"
                            }`}
                          >
                            <LinkIcon size={17} />
                          </span>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-[15px] font-semibold leading-tight ${isActive ? "text-brand-teal" : ""}`}>
                              {link.name}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-tight truncate">
                              {link.desc}
                            </p>
                          </div>

                          {/* Active indicator / chevron */}
                          {isActive ? (
                            <span
                              className="w-1.5 h-6 rounded-full bg-brand-teal flex-shrink-0"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronRight
                              size={15}
                              className="flex-shrink-0 text-slate-300 group-hover:text-brand-teal/60 group-hover:translate-x-0.5 transition-all duration-200"
                              aria-hidden="true"
                            />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* ── Drawer footer ── */}
              <motion.div
                variants={footerVariants}
                initial="closed"
                animate="open"
                className="px-4 pb-5 pt-3 safe-bottom"
              >
                {/* CTA button */}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="nav-inquiry-button w-full rounded-xl py-3.5 text-center flex items-center justify-center gap-2 group"
                >
                  <span>Investor Inquiry</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                {/* Contact pills */}
                <div className="mt-3 flex flex-col gap-1.5">
                  <a
                    href="tel:+91"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-100/80 transition-colors duration-150 group"
                  >
                    <Phone size={13} className="text-brand-teal flex-shrink-0" />
                    <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors duration-150">
                      Schedule a call
                    </span>
                  </a>
                  <a
                    href="mailto:info@valueages.com"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-100/80 transition-colors duration-150 group"
                  >
                    <Mail size={13} className="text-brand-teal flex-shrink-0" />
                    <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors duration-150">
                      info@valueages.com
                    </span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
