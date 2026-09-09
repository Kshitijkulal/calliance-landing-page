"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Use Cases", href: "#use-cases" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-sm bg-primary-beige/50 border-b border-white/30 shadow-glass-bubble ${
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
      }`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center justify-between">
        {/* Logo — CALLIENCE */}
        <a
          href="#"
          className="flex items-center justify-center no-underline shrink-0"
        >
          <Image
            src="/ai%20CALLING%20f.svg"
            alt="Callience Logo"
            width={216}
            height={100}
            className="h-10 sm:h-12 md:h-12 lg:h-14 w-auto object-contain object-center transition-all duration-300 -translate-y-1"
            priority
          />
        </a>

        {/* Desktop Nav — Pill shaped container */}
        <div className="hidden lg:flex items-center justify-center h-10 sm:h-12 lg:h-14 xl:h-16 px-4 lg:px-8 xl:px-10 rounded-full gap-2 sm:gap-4 lg:gap-6 xl:gap-8 bg-dark-grey/10 backdrop-blur-xl shadow-lg shadow-dark-grey/10 transition-all duration-300">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="no-underline text-xs sm:text-sm lg:text-base xl:text-lg font-bold leading-none inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-primary-black font-sans transition-all duration-200 hover:bg-dark-grey/20 hover:shadow-sm"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA — Request Demo Button */}
        <div className="hidden lg:flex shrink-0">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center h-10 sm:h-12 lg:h-12 xl:h-12 px-4 lg:px-5 xl:px-6 rounded-xl border-2 border-primary-black no-underline gap-2 bg-primary-black text-secondary-beige hover:bg-primary-black/90 transition-all shadow-glass-bubble"
          >
            <span className="text-sm lg:text-base xl:text-base font-bold leading-none tracking-wide font-sans">
              Request Demo
            </span>
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 overflow-hidden"
              viewBox="0 0 24 24"
              fill="none"
            >
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

        {/* Mobile Hamburger (Bubble) */}
        <button
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-glass-bubble cursor-pointer group hover:bg-white/60 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            className="block w-5 h-0.5 rounded-full bg-primary-black transition-colors group-hover:bg-dark-grey"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-5 h-0.5 rounded-full bg-primary-black transition-colors group-hover:bg-dark-grey"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="block w-5 h-0.5 rounded-full bg-primary-black transition-colors group-hover:bg-dark-grey"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-primary-beige/50 backdrop-blur-2xl border-t border-white/30 shadow-glass-bubble mt-2 sm:mt-3 rounded-b-3xl mx-2 sm:mx-4"
          >
            <div className="flex flex-col gap-4 px-4 sm:px-6 py-6 sm:py-8">
              <div className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="no-underline flex items-center justify-center text-base sm:text-lg md:text-xl font-bold text-primary-black font-sans py-3 sm:py-4 border-b border-dark-grey/10 last:border-none hover:bg-dark-grey/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-12 sm:h-14 px-6 py-3 mt-4 rounded-2xl border-2 border-primary-black no-underline gap-3 bg-primary-black text-secondary-beige hover:bg-primary-black/90 transition-all shadow-glass-bubble"
              >
                <span className="text-base sm:text-lg md:text-xl font-bold leading-none tracking-wide font-sans">
                  Request Demo
                </span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 overflow-hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
