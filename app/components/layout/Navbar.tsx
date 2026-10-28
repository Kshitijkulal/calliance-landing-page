"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { PILL_NORMAL_MAP } from "./glassNormalMap";

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

          {/* 2. Physical refraction through curved glass */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="lensMap"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />

          {/* 3. Chromatic dispersion — separate RGB channel displacement */}
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 1 0"
            result="redOnly"
          />
          <feDisplacementMap
            in="redOnly"
            in2="lensMap"
            scale="33"
            xChannelSelector="R"
            yChannelSelector="G"
            result="redShifted"
          />

          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0   0 0 0 0 0   0 0 1 0 0   0 0 0 1 0"
            result="blueOnly"
          />
          <feDisplacementMap
            in="blueOnly"
            in2="lensMap"
            scale="23"
            xChannelSelector="R"
            yChannelSelector="G"
            result="blueShifted"
          />

          {/* Recombine channels */}
          <feBlend in="refracted" in2="redShifted" mode="screen" result="withRed" />
          <feBlend in="withRed" in2="blueShifted" mode="screen" result="withDispersion" />

          {/* 4. Light building — specular light accumulation on curved 3D surface */}
          <feSpecularLighting
            in="lensMap"
            surfaceScale="3"
            specularConstant="1.5"
            specularExponent="26"
            lightingColor="#ffffff"
            result="specularCatch"
          >
            <fePointLight x="290" y="-80" z="200" />
          </feSpecularLighting>

          <feComposite
            in="specularCatch"
            in2="SourceAlpha"
            operator="in"
            result="specularClipped"
          />

          <feBlend in="withDispersion" in2="specularClipped" mode="screen" result="litGlass" />

          {/* 5. Vibrancy & clarity boost */}
          <feColorMatrix
            in="litGlass"
            type="saturate"
            values="1.25"
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
        {/* Glass plate — both states: 64px tall */}
        <div aria-hidden className="nav-glass absolute inset-0 rounded-full">
          <span className="nav-glass-sheen pointer-events-none absolute inset-0 rounded-full" />
        </div>

        {/* Collapsed pill — mark + Request Demo → */}
        <a
          href="#contact"
          className={`z-10 flex items-center no-underline text-primary-black ${motionClass} ${
            collapsed
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
          className={`z-10 flex items-center justify-between ${motionClass} ${
            collapsed
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

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 xl:gap-9">
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
    </header>
  );
}
