"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Blogs", href: "#blogs" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function sidePad(width: number) {
  if (width >= 1280) return 80;
  if (width >= 1024) return 48;
  if (width >= 768) return 32;
  if (width >= 640) return 24;
  return 16;
}

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const reduceMotion = useReducedMotion();
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const [metrics, setMetrics] = useState({ full: 0, collapsed: 0, expanded: 0, pad: 16 });

  useLayoutEffect(() => {
    const measure = () => {
      const full = document.documentElement.clientWidth;
      const logo = logoRef.current?.offsetWidth ?? 0;
      const links = linksRef.current?.scrollWidth ?? 0;
      const cta = ctaRef.current?.offsetWidth ?? 0;
      const burger = burgerRef.current?.offsetWidth ?? 0;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const gaps = desktop ? 2 : 1;
      const collapsed = Math.min(full, logo + cta + burger + 16 * 2 + 12 * gaps + 2);
      const expandedWidth = Math.min(
        full - 16,
        collapsed + (desktop && links > 0 ? links + 12 : 0),
      );
      const pad = sidePad(full);
      setMetrics((prev) =>
        prev.full === full &&
        prev.collapsed === collapsed &&
        prev.expanded === expandedWidth &&
        prev.pad === pad
          ? prev
          : { full, collapsed, expanded: expandedWidth, pad },
      );
      setReady(true);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        const next = prev ? y > 16 : y > 48;
        return next === prev ? prev : next;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
    setMobileOpen(false);
  }, [scrolled]);

  const open = !scrolled || expanded;
  const plate = !ready
    ? undefined
    : scrolled
      ? expanded
        ? metrics.expanded
        : metrics.collapsed
      : metrics.full;
  const shift =
    scrolled && metrics.full > 0
      ? (metrics.full - (expanded ? metrics.expanded : metrics.collapsed)) / 2 + 16 - metrics.pad
      : 0;
  const move = ready && !reduceMotion ? "nav-move" : "";

  return (
    <>
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header className="fixed top-0 inset-x-0 z-50 flex flex-col items-center pointer-events-none">
        <nav
          onMouseEnter={() => scrolled && setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => scrolled && setExpanded(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
          }}
          className={`pointer-events-none relative w-full ${move} ${
            scrolled ? "translate-y-3" : "translate-y-0"
          }`}
        >
          <div
            aria-hidden
            style={plate === undefined ? undefined : { width: plate }}
            className={`nav-shell pointer-events-auto absolute top-0 bottom-0 border border-solid ${
              ready ? "left-1/2 -translate-x-1/2" : "inset-x-0"
            } ${
              ready && !reduceMotion ? "nav-plate" : ""
            } ${
              scrolled
                ? "is-scrolled rounded-full border-white/80"
                : "rounded-none border-transparent border-b-white/30"
            }`}
          >
            <span
              className={`nav-glass-sheen absolute inset-0 rounded-[inherit] transition-opacity duration-200 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-3 sm:py-5">
          <a
            ref={logoRef}
            href="#"
            style={{ transform: `translate3d(${shift}px, 0, 0)` }}
            className={`pointer-events-auto flex items-center shrink-0 no-underline ${move}`}
          >
            <Image
              src="/ai%20CALLING%20f.svg"
              alt="Callience"
              width={216}
              height={100}
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain object-center -translate-y-1"
              priority
            />
          </a>

          <div className={`hidden lg:flex flex-1 min-w-0 justify-center transition-opacity duration-200 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
            <div
              ref={linksRef}
              className={`relative flex items-center h-12 xl:h-14 px-4 lg:px-8 xl:px-10 rounded-full gap-2 lg:gap-5 xl:gap-7 border border-solid w-max ${
                scrolled ? "bg-transparent border-transparent shadow-none" : "nav-pill"
              }`}
            >
              <span
                aria-hidden
                className={`nav-glass-sheen pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative z-10 no-underline text-sm lg:text-base xl:text-lg font-bold leading-none inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-primary-black font-sans whitespace-nowrap hover:bg-white/40"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <a
            ref={ctaRef}
            href="#contact"
            style={{ transform: `translate3d(${-shift}px, 0, 0)` }}
            className={`pointer-events-auto hidden lg:flex items-center justify-center h-12 md:h-14 px-6 md:px-8 no-underline gap-3 bg-primary-black text-secondary-beige shrink-0 shadow-glass-bubble ${move} ${
              scrolled ? "rounded-full" : "rounded-xl"
            }`}
          >
            <span className="text-sm md:text-base font-bold leading-none tracking-wide font-sans whitespace-nowrap">
              Request Demo
            </span>
            <ArrowIcon className="w-5 h-5 xl:w-6 xl:h-6" />
          </a>

          <button
            ref={burgerRef}
            style={{ transform: `translate3d(${-shift}px, 0, 0)` }}
            className={`pointer-events-auto lg:hidden flex flex-col items-center justify-center gap-1.5 p-3 bg-white/40 rounded-full border border-white/50 shadow-glass-bubble cursor-pointer shrink-0 ${move}`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
              className="block w-5 h-0.5 rounded-full bg-primary-black"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="block w-5 h-0.5 rounded-full bg-primary-black"
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
              className="block w-5 h-0.5 rounded-full bg-primary-black"
            />
          </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className={`pointer-events-auto lg:hidden overflow-hidden bg-primary-beige/90 border border-white/75 shadow-glass-bubble ${
                scrolled
                  ? "mt-2 w-[min(22rem,calc(100vw-1.5rem))] rounded-3xl"
                  : "mt-2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] rounded-3xl"
              }`}
            >
              <div className="flex flex-col px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="no-underline text-center text-base font-bold text-primary-black font-sans py-3.5 border-b border-dark-grey/10 last:border-none"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex items-center justify-center h-12 rounded-xl no-underline gap-2 bg-primary-black text-secondary-beige"
                >
                  <span className="text-sm font-bold font-sans">Request Demo</span>
                  <ArrowIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
