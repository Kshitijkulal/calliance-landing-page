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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/50 border-b border-white/40 shadow-glass-bubble"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo — CALLIENCE */}
        <a href="#" className="flex items-center no-underline shrink-0">
          <Image
            src="/ai%20CALLING%20f.svg"
            alt="Callience Logo"
            width={216}
            height={100}
            className="h-14 sm:h-16 lg:h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav — Pill shaped container */}
        <div className="hidden lg:flex items-center h-10 lg:h-12 px-4 lg:px-6 rounded-full gap-2 lg:gap-6 xl:gap-8 bg-white/40 backdrop-blur-md shadow-sm border border-white/50">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="no-underline text-sm xl:text-base font-bold leading-none inline-block px-3 py-2 rounded-full text-primary-black font-sans transition-colors duration-150 hover:bg-white/50"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA — Request Demo */}
        <div className="hidden lg:flex shrink-0">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center h-10 lg:h-12 px-3 py-2 lg:py-4 rounded-lg ring-2 ring-inset ring-primary-black no-underline gap-2 bg-primary-black text-secondary-beige hover:bg-primary-black/90 transition-colors"
          >
            <span className="px-2 lg:px-4 text-sm lg:text-base font-bold leading-none tracking-wide font-sans">
              Request Demo
            </span>
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 overflow-hidden"
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

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block w-6 h-0.5 bg-primary-black transition-colors group-hover:bg-dark-grey"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-primary-black transition-colors group-hover:bg-dark-grey"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block w-6 h-0.5 bg-primary-black transition-colors group-hover:bg-dark-grey"
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
            className="lg:hidden overflow-hidden bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-glass-bubble"
          >
            <div className="flex flex-col gap-4 px-6 sm:px-12 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="no-underline text-base sm:text-lg font-bold text-primary-black font-sans py-2 border-b border-primary-black/5 hover:text-dark-grey transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-12 px-3 py-4 mt-4 rounded-lg ring-2 ring-inset ring-primary-black no-underline gap-2.5 bg-primary-black text-secondary-beige hover:bg-primary-black/90 transition-colors"
              >
                <span className="px-4 text-sm sm:text-base font-bold leading-none tracking-wide font-sans">
                  Request Demo
                </span>
                <svg
                  className="w-5 h-5 overflow-hidden"
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
