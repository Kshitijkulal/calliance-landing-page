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
  stiffness: 380,
  damping: 36,
  mass: 0.7,
};

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
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

function MenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-glass-bubble cursor-pointer"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
        className="block w-5 h-0.5 rounded-full bg-primary-black"
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1 }}
        className="block w-5 h-0.5 rounded-full bg-primary-black"
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
        className="block w-5 h-0.5 rounded-full bg-primary-black"
      />
    </button>
  );
}

export default function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    setMobileOpen(false);
    setExpanded(false);
  }, [scrolled]);

  const transition = reduceMotion ? { duration: 0 } : SPRING;

  return (
    <>
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={
          scrolled
            ? { y: "-110%", opacity: 0 }
            : { y: 0, opacity: 1 }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : scrolled
              ? SPRING
              : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
        className="fixed top-0 inset-x-0 z-50 w-full backdrop-blur-[4px] lg:backdrop-blur-[1px] bg-secondary-beige/40 border-b border-white/30 shadow-glass-bubble py-3 sm:py-5"
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
        aria-hidden={scrolled}
        inert={scrolled}
      >
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex items-center justify-between">
          <a href="#" className="flex items-center justify-center no-underline shrink-0">
            <Image
              src="/ai%20CALLING%20f.svg"
              alt="Callience Logo"
              width={216}
              height={100}
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain object-center -translate-y-1"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center justify-center h-12 xl:h-14 px-4 lg:px-8 xl:px-10 rounded-full gap-2 lg:gap-5 xl:gap-7 bg-dark-grey/20 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(0,0,0,0.1)]">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="no-underline text-sm lg:text-base xl:text-lg font-bold leading-none inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-primary-black font-sans"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-xl no-underline gap-3 bg-primary-black text-secondary-beige shadow-glass-bubble"
            >
              <span className="text-sm md:text-base font-bold leading-none tracking-wide font-sans">
                Request Demo
              </span>
              <ArrowIcon className="w-5 h-5 xl:w-6 xl:h-6" />
            </motion.a>
          </div>

          <MenuButton open={mobileOpen} onClick={() => setMobileOpen((open) => !open)} />
        </div>

        <AnimatePresence>
          {mobileOpen && !scrolled && (
            <MobileMenu key="full-menu" onClose={() => setMobileOpen(false)} />
          )}
        </AnimatePresence>
      </motion.header>

      <motion.div
        className="fixed top-4 z-[60]"
        initial={false}
        animate={{
          left: "50%",
          x: "-50%",
          y: scrolled ? 0 : -24,
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0.94,
        }}
        transition={transition}
        style={{ pointerEvents: scrolled ? "auto" : "none" }}
        aria-hidden={!scrolled}
        inert={!scrolled}
      >
        <motion.nav
          className="flex items-center rounded-full border border-white/80 bg-primary-beige/70 shadow-[0_16px_40px_rgba(30,30,30,0.1),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl pl-3 pr-1.5 py-1.5"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => setExpanded(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
          }}
        >
          <a href="#" className="flex items-center shrink-0 no-underline pr-2">
            <Image
              src="/ai%20CALLING%20f.svg"
              alt="Callience"
              width={216}
              height={100}
              className="h-8 w-auto object-contain"
            />
          </a>

          <motion.div
            initial={false}
            animate={{
              width: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={transition}
            className="hidden lg:block overflow-hidden"
          >
            <div className="flex items-center gap-0.5 whitespace-nowrap pr-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="no-underline text-sm font-bold text-primary-black font-sans px-3 py-2 rounded-full hover:bg-white/70"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex items-center h-10 px-4 rounded-full no-underline gap-2 bg-primary-black text-secondary-beige shrink-0"
          >
            <span className="text-sm font-bold font-sans whitespace-nowrap">Request Demo</span>
            <ArrowIcon className="w-4 h-4" />
          </motion.a>

          <MenuButton open={mobileOpen} onClick={() => setMobileOpen((open) => !open)} />
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && scrolled && (
            <MobileMenu key="pill-menu" onClose={() => setMobileOpen(false)} floating />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function MobileMenu({
  onClose,
  floating = false,
}: {
  onClose: () => void;
  floating?: boolean;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="lg:hidden fixed inset-0 z-[-1]"
        onClick={onClose}
      />
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:hidden overflow-hidden bg-primary-beige/75 backdrop-blur-2xl border border-white/70 shadow-glass-bubble ${
          floating
            ? "mt-2 w-[min(20rem,calc(100vw-2rem))] mx-auto rounded-3xl"
            : "mt-2 sm:mt-3 mx-2 sm:mx-4 rounded-b-3xl"
        }`}
      >
        <div className="flex flex-col gap-2 px-4 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="no-underline text-center text-base font-bold text-primary-black font-sans py-3 border-b border-dark-grey/10 last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={onClose}
            className="mt-3 flex items-center justify-center h-12 rounded-full no-underline gap-2 bg-primary-black text-secondary-beige"
          >
            <span className="text-sm font-bold font-sans">Request Demo</span>
            <ArrowIcon className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
