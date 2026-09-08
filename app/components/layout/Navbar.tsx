"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
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
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled
          ? "rgba(255,253,241,0.4)"
          : "rgba(255,253,241,0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        transition: "var(--transition-base)",
      }}
    >
      <div
        className="mx-auto px-20 py-4 flex items-center justify-between"
      >
        {/* Logo — CALLIENCE */}
        <a
          href="#"
          className="flex items-center gap-2 no-underline font-bold text-xl tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M7 1C3.5 1 1 4.5 1 8C1 11.5 3.5 15 7 15C10.5 15 12 12 14 8C16 4 17.5 1 21 1C24.5 1 27 4.5 27 8C27 11.5 24.5 15 21 15C17.5 15 16 12 14 8"
              stroke="var(--color-primary-black)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          CALLIENCE
        </a>

        {/* Desktop Nav — Pill shaped container */}
        <div
          className="hidden md:flex items-center px-6 py-3 rounded-full gap-12"
          style={{
            backgroundColor: "rgba(82,82,82,0.2)",
            boxShadow: "0px 4px 20px 0px rgba(46,46,46,0.10)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="no-underline text-base font-bold leading-none inline-block p-2 rounded-full"
              style={{
                color: "var(--color-primary-black)",
                fontFamily: "var(--font-manrope), sans-serif",
                transition: "var(--transition-fast)",
              }}
              whileHover={{
                backgroundColor: "rgba(0,0,0,0.05)",
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA — Request Demo */}
        <div className="hidden md:flex pl-1.5">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center h-12 px-3 py-4 rounded-lg outline-2 outline-[color:var(--color-primary-black)] -outline-offset-2 no-underline gap-2.5"
            style={{
              backgroundColor: "var(--color-primary-black)",
              color: "var(--color-secondary-beige)",
            }}
          >
            <span
              className="px-4 text-base font-bold leading-none tracking-[0.025em]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
              }}
            >
              Request Demo
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ overflow: "hidden" }}>
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="var(--color-secondary-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            className="block w-6 h-0.5 bg-[var(--color-primary-black)]" 
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-[var(--color-primary-black)]" 
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            className="block w-6 h-0.5 bg-[var(--color-primary-black)]" 
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
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-primary-beige)",
              borderBottom: "1px solid var(--color-border)",
            }}
            className="md:hidden"
          >
            <div className="flex flex-col gap-6 px-20 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="no-underline text-lg font-semibold"
                  style={{
                    color: "var(--color-primary-black)",
                    fontFamily: "var(--font-manrope), sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
