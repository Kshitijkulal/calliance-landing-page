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

function paddingFor(width: number) {
  if (width >= 1280) return { x: 80, y: 20 };
  if (width >= 1024) return { x: 48, y: 20 };
  if (width >= 768) return { x: 32, y: 20 };
  if (width >= 640) return { x: 24, y: 20 };
  return { x: 16, y: 12 };
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
  const [metrics, setMetrics] = useState({
    full: 0,
    collapsed: 0,
    expanded: 0,
    padX: 80,
    padY: 20,
  });

  useLayoutEffect(() => {
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const full = document.documentElement.clientWidth;
        const pad = paddingFor(full);
        const logo = logoRef.current?.offsetWidth ?? 0;
        const links = linksRef.current?.scrollWidth ?? 0;
        const cta = ctaRef.current?.offsetWidth ?? 0;
        const burger = burgerRef.current?.offsetWidth ?? 0;
        const desktop = window.matchMedia("(min-width: 1024px)").matches;
        const pillX = 16;
        const gap = 12;
        const gaps = desktop ? 2 : 1;
        const border = 2;
        const collapsed = Math.min(
          full,
          logo + cta + burger + pillX * 2 + gap * gaps + border,
        );
        const expandedWidth = Math.min(
          full - 16,
          collapsed + (desktop && links > 0 ? links + gap : 0),
        );
        setMetrics({
          full,
          collapsed,
          expanded: expandedWidth,
          padX: pad.x,
          padY: pad.y,
        });
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 24 : y > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
    setMobileOpen(false);
  }, [scrolled]);

  const ready = metrics.full > 0;
  const open = !scrolled || expanded;
  const transition =
    !ready || reduceMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: EASE };

  const width = !ready
    ? "100%"
    : scrolled
      ? expanded
        ? metrics.expanded
        : metrics.collapsed
      : metrics.full;

  return (
    <>
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header className="fixed top-0 inset-x-0 z-50 flex flex-col items-center pointer-events-none">
        <motion.nav
          initial={false}
          animate={{
            width,
            marginTop: scrolled ? 16 : 0,
            paddingLeft: scrolled ? 16 : metrics.padX,
            paddingRight: scrolled ? 16 : metrics.padX,
            paddingTop: scrolled ? 10 : metrics.padY,
            paddingBottom: scrolled ? 10 : metrics.padY,
            borderRadius: scrolled ? 999 : 0,
            gap: 12,
            backgroundColor: scrolled
              ? "rgba(250, 249, 245, 0.82)"
              : "rgba(255, 253, 241, 0.4)",
            borderTopColor: scrolled
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(255, 255, 255, 0)",
            borderLeftColor: scrolled
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(255, 255, 255, 0)",
            borderRightColor: scrolled
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(255, 255, 255, 0)",
            borderBottomColor: scrolled
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(255, 255, 255, 0.3)",
            boxShadow: scrolled
              ? "0 16px 40px rgba(30, 30, 30, 0.1), inset 0 1px 0 rgba(255,255,255,0.95)"
              : "0px 7px 44px rgba(219, 220, 220, 0.18)",
            backdropFilter: scrolled ? "blur(18px) saturate(1.4)" : "blur(4px)",
          }}
          transition={transition}
          onMouseEnter={() => scrolled && setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => scrolled && setExpanded(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setExpanded(false);
            }
          }}
          className="pointer-events-auto flex items-center overflow-hidden border border-solid max-w-full"
        >
          <a
            ref={logoRef}
            href="#"
            className="flex items-center shrink-0 no-underline"
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

          <div className="hidden lg:flex flex-1 min-w-0 justify-center overflow-hidden">
            <motion.div
              ref={linksRef}
              initial={false}
              animate={{
                opacity: open ? 1 : 0,
                backgroundColor: scrolled
                  ? "rgba(83, 83, 83, 0)"
                  : "rgba(83, 83, 83, 0.2)",
                borderColor: scrolled
                  ? "rgba(255, 255, 255, 0)"
                  : "rgba(255, 255, 255, 0.4)",
                boxShadow: scrolled
                  ? "0 0 0 rgba(0,0,0,0)"
                  : "0 8px 32px rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.1)",
              }}
              transition={transition}
              className="flex items-center h-12 xl:h-14 px-4 lg:px-8 xl:px-10 rounded-full gap-2 lg:gap-5 xl:gap-7 border border-solid w-max"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="no-underline text-sm lg:text-base xl:text-lg font-bold leading-none inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-primary-black font-sans whitespace-nowrap hover:bg-white/50"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.a
            ref={ctaRef}
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={false}
            animate={{ borderRadius: scrolled ? 999 : 12 }}
            transition={transition}
            className="hidden lg:flex items-center justify-center h-12 md:h-14 px-6 md:px-8 no-underline gap-3 bg-primary-black text-secondary-beige shrink-0 shadow-glass-bubble"
          >
            <span className="text-sm md:text-base font-bold leading-none tracking-wide font-sans whitespace-nowrap">
              Request Demo
            </span>
            <ArrowIcon className="w-5 h-5 xl:w-6 xl:h-6" />
          </motion.a>

          <button
            ref={burgerRef}
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-glass-bubble cursor-pointer shrink-0"
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
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className={`pointer-events-auto lg:hidden overflow-hidden bg-primary-beige/80 backdrop-blur-2xl border border-white/75 shadow-glass-bubble ${
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
