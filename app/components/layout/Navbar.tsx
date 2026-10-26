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
  stiffness: 260,
  damping: 30,
  mass: 0.8,
};

export default function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [viewport, setViewport] = useState(0);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const measure = () => setViewport(document.documentElement.clientWidth);
    measure();
    const frame = requestAnimationFrame(() => setIntro(false));
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 12 : y > 48));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transition = reduceMotion || intro || viewport === 0 ? { duration: 0 } : SPRING;
  const islandWidth =
    viewport === 0 ? "100%" : scrolled ? Math.min(1120, viewport - 24) : viewport;

  return (
    <motion.header
      initial={{ y: "-110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
      }
      className="fixed top-0 inset-x-0 z-50 flex justify-center"
    >
      <motion.div
        className="flex w-full flex-col"
        initial={false}
        animate={{ width: islandWidth, marginTop: scrolled ? 12 : 0 }}
        transition={transition}
      >
        <motion.div
          initial={false}
          animate={{
            borderRadius: scrolled ? 999 : 0,
            paddingTop: scrolled ? 8 : 12,
            paddingBottom: scrolled ? 8 : 20,
            paddingLeft: scrolled ? 14 : 0,
            paddingRight: scrolled ? 14 : 0,
            backgroundColor: scrolled
              ? "rgba(250, 249, 245, 0.72)"
              : "rgba(255, 253, 241, 0.4)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.78)"
              : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled
              ? "0 16px 40px rgba(30, 30, 30, 0.08), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -10px 18px rgba(255,255,255,0.35)"
              : "0px 7px 44px rgba(219, 220, 220, 0.18)",
            backdropFilter: scrolled
              ? "blur(22px) saturate(1.6)"
              : "blur(4px) saturate(1.1)",
          }}
          transition={transition}
          className="border border-solid"
        >
          <div
            className={`flex items-center justify-between ${
              scrolled ? "px-1 sm:px-2" : "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
            }`}
          >
            <a
              href="#"
              className="flex items-center justify-center no-underline shrink-0"
            >
              <motion.span
                initial={false}
                animate={{ scale: scrolled ? 0.88 : 1 }}
                transition={transition}
                className="block origin-left"
              >
                <Image
                  src="/ai%20CALLING%20f.svg"
                  alt="Callience Logo"
                  width={216}
                  height={100}
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain object-center -translate-y-1"
                  priority
                />
              </motion.span>
            </a>

            <motion.div
              initial={false}
              animate={{
                backgroundColor: scrolled
                  ? "rgba(255, 255, 255, 0.38)"
                  : "rgba(83, 83, 83, 0.2)",
                borderColor: scrolled
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(255, 255, 255, 0.4)",
                boxShadow: scrolled
                  ? "inset 0 1px 0 rgba(255,255,255,0.8)"
                  : "0 8px 32px 0 rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.1)",
              }}
              transition={transition}
              className="hidden lg:flex items-center justify-center h-12 xl:h-14 px-3 lg:px-6 xl:px-8 rounded-full gap-1 lg:gap-2 xl:gap-4 border border-solid backdrop-blur-2xl"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="no-underline text-sm lg:text-base xl:text-lg font-bold leading-none inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-primary-black font-sans hover:bg-white/40"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <div className="hidden lg:flex shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={false}
                animate={{
                  height: scrolled ? 44 : 56,
                  borderRadius: scrolled ? 999 : 12,
                  paddingLeft: scrolled ? 20 : 32,
                  paddingRight: scrolled ? 18 : 32,
                }}
                transition={transition}
                className="flex items-center justify-center no-underline gap-3 bg-primary-black text-secondary-beige shadow-glass-bubble"
              >
                <span className="text-sm md:text-base font-bold leading-none tracking-wide font-sans">
                  Request Demo
                </span>
                <svg className="w-5 h-5 xl:w-6 xl:h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </div>

            <button
              className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-glass-bubble cursor-pointer group hover:bg-white/60"
              onClick={() => setMobileOpen(!mobileOpen)}
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
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <div key="mobile-menu-wrapper">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 w-full h-[100dvh] z-[-1]"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden bg-primary-beige/70 backdrop-blur-2xl border border-white/70 shadow-glass-bubble mt-2 rounded-3xl"
              >
                <div className="flex flex-col gap-4 px-4 sm:px-6 py-6 sm:py-8">
                  <div className="flex flex-col">
                    {NAV_LINKS.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="no-underline flex items-center justify-center text-base sm:text-lg md:text-xl font-bold text-primary-black font-sans py-3 sm:py-4 border-b border-dark-grey/10 last:border-none"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center justify-center h-12 md:h-14 px-6 md:px-8 mt-2 rounded-full no-underline gap-3 bg-primary-black text-secondary-beige shadow-glass-bubble"
                  >
                    <span className="text-sm md:text-base font-bold leading-none tracking-wide font-sans">
                      Request Demo
                    </span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
