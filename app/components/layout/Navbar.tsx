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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-secondary-beige/40 border-black/5"
          : "bg-secondary-beige/40 border-black/5"
      }`}
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20 py-4 flex items-center justify-between">
        {/* Logo — CALLIENCE */}
        <a href="#" className="flex items-center no-underline">
          <Image
            src="/logo.png"
            alt="Callience Logo"
            width={192}
            height={28}
            className="h-5 w-auto sm:h-7 sm:w-48 object-contain"
            priority
          />
        </a>

        {/* Desktop Nav — Pill shaped container */}
        <div className="hidden lg:flex items-center h-12 px-6 rounded-full gap-6 xl:gap-12 bg-dark-grey/20 shadow-md">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="no-underline text-base font-bold leading-none inline-block p-2 rounded-full text-primary-black font-sans transition-colors duration-150 hover:bg-black/5"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA — Request Demo */}
        <div className="hidden lg:flex pl-1.5">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center h-12 px-3 py-4 rounded-lg ring-2 ring-inset ring-primary-black no-underline gap-2.5 bg-primary-black text-secondary-beige"
          >
            <span className="px-4 text-base font-bold leading-none tracking-wide font-sans">
              Request Demo
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="overflow-hidden"
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
          className="lg:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            className="block w-6 h-0.5 bg-primary-black"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-primary-black"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="block w-6 h-0.5 bg-primary-black"
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
            className="lg:hidden overflow-hidden bg-secondary-beige border-b border-off-white"
          >
            <div className="flex flex-col gap-6 px-6 md:px-20 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="no-underline text-lg font-semibold text-primary-black font-sans"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-12 px-3 py-4 mt-2 rounded-lg ring-2 ring-inset ring-primary-black no-underline gap-2.5 bg-primary-black text-secondary-beige"
              >
                <span className="px-4 text-base font-bold leading-none tracking-wide font-sans">
                  Request Demo
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="overflow-hidden"
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
