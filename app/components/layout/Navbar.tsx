"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Blogs", href: "#blogs" },
];

const LOGOMARK = "/Callience%20Logomark.svg";
const WORDMARK = "/Callience%20Wordmark.svg";

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

/** Soft displacement map — bends the backdrop (Chromium). Kept mild under heavy frost. */
function NavGlassFilter() {
  return (
    <svg width="0" height="0" aria-hidden style={{ position: "absolute" }}>
      <defs>
        <filter
          id="nav-glass-refract"
          x="-25%"
          y="-50%"
          width="150%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.01"
            numOctaves="2"
            seed="9"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
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

  const collapsed = scrolled && !expanded;
  const motionClass = reduceMotion ? "" : "nav-morph";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-5 md:px-6">
      <NavGlassFilter />
      <nav
        onMouseEnter={() => scrolled && setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => scrolled && setExpanded(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
        }}
        className={`pointer-events-auto relative mt-3 w-full ${motionClass} ${
          collapsed ? "max-w-[18.125rem]" : "max-w-[72rem]"
        }`}
        aria-label="Primary"
      >
        {/* Glass plate — both states: 56px tall */}
        <div aria-hidden className="nav-glass absolute inset-0 rounded-full">
          <span className="nav-glass-sheen pointer-events-none absolute inset-0 rounded-full" />
        </div>

        {/* Collapsed pill — mark + Request Demo → */}
        <a
          href="#contact"
          className={`z-10 flex items-center no-underline text-primary-black ${motionClass} ${
            collapsed
              ? "relative h-14 pl-6 pr-8 gap-5 opacity-100"
              : "pointer-events-none absolute inset-0 h-14 opacity-0"
          }`}
          aria-hidden={!collapsed}
          tabIndex={collapsed ? 0 : -1}
        >
          <Image
            src={LOGOMARK}
            alt=""
            width={104}
            height={69}
            className="h-6 w-auto object-contain shrink-0"
            priority
          />
          <span className="flex flex-1 items-center justify-end gap-1.5">
            <span className="text-[15px] font-medium font-sans whitespace-nowrap leading-none tracking-[-0.01em]">
              Request Demo
            </span>
            <ArrowIcon className="w-[15px] h-[15px]" />
          </span>
        </a>

        {/* Full bar — same 56px height */}
        <div
          className={`z-10 flex items-center justify-between ${motionClass} ${
            collapsed
              ? "pointer-events-none absolute inset-0 h-14 px-[22px] opacity-0"
              : "relative h-14 px-[22px] opacity-100"
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
              className="h-6 w-auto object-contain"
              priority
            />
            <Image
              src={WORDMARK}
              alt="Callience"
              width={342}
              height={45}
              className="h-[14px] w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                tabIndex={collapsed ? -1 : 0}
                className="no-underline text-[14px] font-medium leading-none inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-full text-primary-black font-sans whitespace-nowrap tracking-[-0.01em] hover:bg-white/45 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            tabIndex={collapsed ? -1 : 0}
            className="flex items-center justify-center h-10 px-5 no-underline gap-1.5 bg-primary-black text-secondary-beige shrink-0 rounded-full"
          >
            <span className="text-[13px] font-medium leading-none tracking-[-0.01em] font-sans whitespace-nowrap">
              Request Demo
            </span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
