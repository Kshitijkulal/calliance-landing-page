"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UnifiedPlatformSection() {
  return (
    <section
      id="platform"
      className="w-full flex justify-center relative z-10 overflow-hidden -mt-12 md:-mt-16"
    >
      {/* Continuous Blur Overlay for Rings */}
      <div className="absolute inset-0 z-0 pointer-events-none backdrop-blur-[3px]" />
      {/* Desktop/Large Screen Pixel-Perfect Layout */}
      <div className="hidden lg:block relative w-full h-[672px] mx-auto z-10">
        {/* Laptop Image (matches left: 80px, w: 968px) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: "5.5%", // ~80px on 1440px
            top: "0px",
            width: "67%", // ~968px on 1440px
            height: "672px",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/Mockup 1.png"
            alt="AICaller Unified Platform"
            fill
            style={{ objectFit: "contain", objectPosition: "left top" }}
            unoptimized
          />
        </motion.div>

        {/* Text Panel (matches left: 822px, top: 240px, w: 538px) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute flex flex-col items-start gap-6 z-10"
          style={{
            left: "57%", // ~822px on 1440px
            top: "94px",
            width: "37%", // ~538px on 1440px
          }}
        >
          <h2
            className="text-[64px] leading-[0.95] font-normal uppercase m-0"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            One Unified Platform , Total Campaign Control
          </h2>
          <p
            className="text-xl font-normal leading-relaxed m-0"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            From customer outreach to call intelligence, every conversation is
            captured, analyzed and instantly converted into actionable CRM data.
          </p>

          {/* CTA */}
          <motion.a
            href="#platform"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center h-14 p-0 rounded-lg gap-3 mt-2 no-underline"
            style={{
              backgroundColor: "var(--color-primary-black)",
              color: "var(--color-secondary-beige)",
            }}
          >
            <span
              className="text-base font-semibold"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Explore the Platform
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="var(--color-secondary-beige)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile/Tablet Fallback (Stacking) */}
      <div className="flex lg:hidden w-full pt-0 pb-20 flex-col items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            width: "100%",
            position: "relative",
            aspectRatio: "968/672",
          }}
        >
          <Image
            src="/Mockup 1.png"
            alt="AICaller"
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-6"
        >
          <h2
            className="text-5xl leading-none m-0 uppercase"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            One Unified Platform , Total Campaign Control
          </h2>
          <p
            className="text-lg m-0"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            From customer outreach to call intelligence, every conversation is
            captured, analyzed and instantly converted into actionable CRM data.
          </p>
          <a
            href="#platform"
            className="inline-flex items-center justify-center h-14 p-0 rounded-lg gap-3 self-start no-underline"
            style={{
              backgroundColor: "var(--color-primary-black)",
              color: "var(--color-secondary-beige)",
            }}
          >
            <span
              className="text-base font-semibold"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Explore the Platform
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="var(--color-secondary-beige)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
