"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PILL_NORMAL_MAP } from "./glassNormalMap";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Blogs", href: "/blogs" },
];

const LOGOMARK = "/Callience%20Logomark.svg";
const WORDMARK = "/Callience%20Wordmark.svg";

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Physical curved glass optics simulation via SVG filter:
 *
 * 1. Curved Glass Lens (Normal Map):
 *    Uses PILL_NORMAL_MAP (exact 3D cylinder + hemispherical caps profile)
 *    via feImage to map pixel angles across the curved surface.
 *
 * 2. Snell's Law Refraction:
 *    feDisplacementMap bends light rays passing through the curved boundary,
 *    magnifying the center and bending edge rays inward.
 *
 * 3. Chromatic Dispersion:
 *    Red, green, and blue wavelengths bend at slightly different angles
 *    (dispersion n_red < n_blue), producing subtle optical color fringing.
 *
 * 4. Light Building / Caustic Specular Lighting:
 *    feSpecularLighting calculates the 3D highlight of overhead light
 *    accumulating along the curved glass crest and rounded caps.
 */
function NavGlassFilter() {
  return (
    <svg width="0" height="0" aria-hidden style={{ position: "absolute" }}>
      <defs>
        <filter
          id="nav-glass-refract"
          x="-15%"
          y="-30%"
          width="130%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          {/* 1. Curved pill normal map (cylindrical body + hemispherical caps) */}
          <feImage
            href={PILL_NORMAL_MAP}
            xlinkHref={PILL_NORMAL_MAP}
            result="lensMap"
            preserveAspectRatio="none"
          />

          {/* 2. Physical refraction through curved glass — clean, true-color light bending */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="lensMap"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />

          {/* 3. Pure clarity and vibrancy boost — true colors with zero pink or chromatic tint */}
          <feColorMatrix
            in="refracted"
            type="saturate"
            values="1.2"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent;
      const isWebKitSafari =
        /^((?!chrome|android).)*safari/i.test(ua) ||
        (/iPad|iPhone|iPod/.test(ua) && !(window as unknown as { MSStream?: unknown }).MSStream);
      if (isWebKitSafari) {
        setIsSafari(true);
      }
    }
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
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const collapsed = scrolled && !expanded;
  const motionClass = reduceMotion ? "" : "nav-morph";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-5 md:px-6">
      <NavGlassFilter />

      {/* =========================================================================
          DESKTOP VIEW (lg:flex) — 100% UNTOUCHED
          ========================================================================= */}
      <div className="hidden lg:flex w-full justify-center">
        <nav
          onMouseEnter={() => scrolled && setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => scrolled && setExpanded(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
          }}
          className={`pointer-events-auto relative mt-3 w-full ${motionClass} ${collapsed ? "max-w-[18.125rem]" : "max-w-[72rem]"
            }`}
          aria-label="Primary Desktop"
        >
          {/* Glass plate — both states: 64px tall */}
          <div
            aria-hidden
            className={`nav-glass ${isSafari ? "nav-glass-safari" : ""} absolute inset-0 rounded-full`}
          >
            <span className="nav-glass-sheen pointer-events-none absolute inset-0 rounded-full" />
          </div>

          {/* Collapsed pill — mark + Request Demo → */}
          <a
            href="#contact"
            className={`z-10 flex items-center no-underline text-primary-black ${motionClass} ${collapsed
                ? "relative h-16 pl-6 pr-8 gap-5 opacity-100"
                : "pointer-events-none absolute inset-0 h-16 opacity-0"
              }`}
            aria-hidden={!collapsed}
            tabIndex={collapsed ? 0 : -1}
          >
            <Image
              src={LOGOMARK}
              alt=""
              width={104}
              height={69}
              className="h-7 w-auto object-contain shrink-0"
              priority
            />
            <span className="flex flex-1 items-center justify-end gap-2.5 sm:gap-3 -translate-x-2 sm:-translate-x-2.5">
              <span className="text-[16px] font-extrabold font-sans whitespace-nowrap leading-none">
                Request Demo
              </span>
              <ArrowIcon className="w-5 h-5" />
            </span>
          </a>

          {/* Full bar — 64px height */}
          <div
            className={`z-10 flex items-center justify-between ${motionClass} ${collapsed
                ? "pointer-events-none absolute inset-0 h-16 px-6 opacity-0"
                : "relative h-16 px-6 opacity-100"
              }`}
            aria-hidden={collapsed}
          >
            <a
              href="#"
              className="flex items-center gap-2 shrink-0 no-underline"
              tabIndex={collapsed ? -1 : 0}
            >
              <Image
                src={LOGOMARK}
                alt=""
                width={104}
                height={69}
                className="h-7 w-auto object-contain"
                priority
              />
              <Image
                src={WORDMARK}
                alt="Callience"
                width={342}
                height={45}
                className="h-[15px] w-auto object-contain"
                priority
              />
            </a>

            <div className="flex absolute left-1/2 -translate-x-1/2 items-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  tabIndex={collapsed ? -1 : 0}
                  className="no-underline text-[15px] xl:text-[16px] font-bold leading-none inline-flex items-center justify-center px-2 py-1 rounded-lg text-primary-black font-sans whitespace-nowrap hover:text-dark-grey transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              tabIndex={collapsed ? -1 : 0}
              className="flex items-center justify-center h-[41px] sm:h-[42px] px-5 sm:px-5.5 no-underline gap-2.5 bg-primary-black text-secondary-beige shrink-0 rounded-[9px] hover:opacity-90 transition-opacity"
            >
              <span className="text-[15px] sm:text-[15.5px] font-extrabold leading-none font-sans whitespace-nowrap">
                Request Demo
              </span>
              <ArrowIcon className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>

      {/* =========================================================================
          MOBILE VIEW (flex lg:hidden) — DEDICATED POLISHED BAR + HAMBURGER MENU
          ========================================================================= */}
      <div className="flex lg:hidden w-full flex-col items-center pointer-events-none">
        {/* Top Glass Floating Capsule */}
        <div className="pointer-events-auto relative mt-3 w-full max-w-[calc(100vw-2rem)] h-14 rounded-full flex items-center justify-between px-5 z-50">
          {/* Glass background plate */}
          <div
            aria-hidden
            className={`nav-glass ${isSafari ? "nav-glass-safari" : ""} absolute inset-0 rounded-full`}
          >
            <span className="nav-glass-sheen pointer-events-none absolute inset-0 rounded-full" />
          </div>

          {/* Logo (Mark + Wordmark) */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-10 flex items-center gap-2 no-underline"
          >
            <Image
              src={LOGOMARK}
              alt=""
              width={104}
              height={69}
              className="h-6 w-auto object-contain"
              priority
            />
            <Image
              src={WORDMARK}
              alt="Callience"
              width={342}
              height={45}
              className="h-[13px] w-auto object-contain"
              priority
            />
          </a>

          {/* Animated Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/[0.04] hover:bg-black/[0.08] active:scale-90 transition-all focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              stroke="#1E1E1E"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                x1="4"
                y1={mobileMenuOpen ? "6" : "7"}
                x2="20"
                y2={mobileMenuOpen ? "18" : "7"}
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                style={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: mobileMenuOpen ? "scaleX(0)" : "scaleX(1)",
                  transformOrigin: "center",
                  transition: "all 0.2s ease-in-out",
                }}
              />
              <line
                x1="4"
                y1={mobileMenuOpen ? "18" : "17"}
                x2="20"
                y2={mobileMenuOpen ? "6" : "17"}
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
              />
            </svg>
          </button>
        </div>

        {/* Full Dropdown Glass Card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop Dimmer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="pointer-events-auto fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px]"
                aria-hidden="true"
              />

              {/* Floating Menu Drawer — with exact navbar optical glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto relative mt-2.5 w-full max-w-[calc(100vw-2rem)] rounded-[24px] z-50 p-4 sm:p-5 flex flex-col gap-1.5"
              >
                {/* Glass background plate matching navbar 1:1 */}
                <div
                  aria-hidden
                  className={`nav-dropdown-glass ${isSafari ? "nav-dropdown-glass-safari" : ""} absolute inset-0 rounded-[24px]`}
                >
                  <span className="nav-glass-sheen pointer-events-none absolute inset-0 rounded-[24px]" />
                </div>

                {/* Links */}
                <div className="relative z-10 flex flex-col gap-1">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 + 0.04, duration: 0.18 }}
                      className="flex items-center justify-between py-3 px-3.5 rounded-xl text-[16px] font-bold text-primary-black font-sans no-underline transition-colors hover:bg-white/40 active:bg-white/60"
                    >
                      <span>{link.label}</span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="w-4 h-4 text-primary-black/35"
                      >
                        <path
                          d="M7.5 5L12.5 10L7.5 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>

                {/* Subtle Hairline Divider */}
                <div className="relative z-10 w-full h-px bg-black/[0.07] my-1.5" />

                {/* Request Demo Button CTA */}
                <motion.a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.18 }}
                  className="relative z-10 flex items-center justify-center h-12 px-6 rounded-xl bg-primary-black text-secondary-beige no-underline gap-2.5 font-sans font-extrabold text-[15.5px] shadow-lg active:scale-[0.98] transition-transform"
                >
                  <span>Request Demo</span>
                  <ArrowIcon className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
