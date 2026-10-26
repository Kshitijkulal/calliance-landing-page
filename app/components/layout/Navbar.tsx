"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Blogs", href: "#blogs" },
];

const SPRING = {
  type: "spring" as const,
  stiffness: 230,
  damping: 28,
  mass: 0.85,
};

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [frameWidth, setFrameWidth] = useState(0);

  useEffect(() => {
    const measure = () => setFrameWidth(document.documentElement.clientWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 8 : y > 40));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
    setMobileOpen(false);
  }, [scrolled]);

  const showLinks = !scrolled || expanded;
  const transition = reduceMotion ? { duration: 0 } : SPRING;

  return (
    <>
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
        className="fixed top-0 inset-x-0 z-50 flex flex-col items-center"
      >
        <motion.nav
          initial={false}
          animate={{
            width: frameWidth === 0 ? "100%" : scrolled ? "fit-content" : frameWidth,
            marginTop: scrolled ? 14 : 0,
            borderRadius: scrolled ? 999 : 0,
            backgroundColor: scrolled
              ? "rgba(250, 249, 245, 0.78)"
              : "rgba(255, 253, 241, 0.4)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.82)"
              : "rgba(255, 255, 255, 0.28)",
            boxShadow: scrolled
              ? "0 14px 36px rgba(30, 30, 30, 0.1), inset 0 1px 0 rgba(255,255,255,0.92)"
              : "0px 7px 44px rgba(219, 220, 220, 0.18), inset 0 -1px 0 rgba(255,255,255,0.45)",
            backdropFilter: scrolled
              ? "blur(20px) saturate(1.5)"
              : "blur(6px) saturate(1.15)",
          }}
          transition={transition}
          onMouseEnter={() => scrolled && setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => scrolled && setExpanded(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
          }}
          className={`flex items-center overflow-hidden border border-solid backdrop-blur-xl ${
            scrolled
              ? "max-w-[calc(100%-1.25rem)] gap-3 px-3 py-2"
              : "justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-3"
          }`}
        >
          <a href="#" className="flex items-center shrink-0 no-underline">
            <Image
              src="/ai%20CALLING%20f.svg"
              alt="Callience"
              width={216}
              height={100}
              className="h-11 w-auto object-contain object-center"
              priority
            />
          </a>

          <motion.div
            initial={false}
            animate={{
              width: showLinks ? "auto" : 0,
              opacity: showLinks ? 1 : 0,
              backgroundColor: scrolled
                ? "rgba(255, 255, 255, 0)"
                : "rgba(83, 83, 83, 0.16)",
              borderColor: scrolled
                ? "rgba(255, 255, 255, 0)"
                : "rgba(255, 255, 255, 0.5)",
              paddingLeft: showLinks ? (scrolled ? 4 : 18) : 0,
              paddingRight: showLinks ? (scrolled ? 4 : 18) : 0,
            }}
            transition={transition}
            className="hidden lg:flex h-12 items-center overflow-hidden rounded-full border border-solid"
          >
            <div className="flex items-center gap-1 whitespace-nowrap">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="no-underline text-base font-bold leading-none inline-flex items-center justify-center px-3.5 py-2 rounded-full text-primary-black font-sans hover:bg-white/55"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={false}
            animate={{ borderRadius: scrolled ? 999 : 14 }}
            transition={transition}
            className="hidden lg:flex items-center justify-center h-12 px-6 no-underline gap-2.5 bg-primary-black text-secondary-beige shrink-0"
          >
            <span className="text-base font-bold leading-none font-sans whitespace-nowrap">
              Request Demo
            </span>
            <ArrowIcon className="w-5 h-5" />
          </motion.a>

          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 size-11 bg-white/45 backdrop-blur-md rounded-full border border-white/60 cursor-pointer shrink-0"
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
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`lg:hidden overflow-hidden bg-primary-beige/80 backdrop-blur-2xl border border-white/75 shadow-glass-bubble ${
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
                  className="mt-3 flex items-center justify-center h-12 rounded-full no-underline gap-2 bg-primary-black text-secondary-beige"
                >
                  <span className="text-base font-bold font-sans">Request Demo</span>
                  <ArrowIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
