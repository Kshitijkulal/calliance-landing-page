"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.3 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full mx-auto flex flex-col items-center pt-20 md:pt-28 pb-16 md:pb-24 z-0">
        {/* Animated Concentric Rings Background */}
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, x: "-50%", y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-32 md:top-52 lg:top-56 left-1/2 w-full max-w-4xl aspect-square z-0 pointer-events-none"
        >
          {/* Ring 1 (Inner) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square opacity-40">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-dark-grey)" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="50"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="w-full h-full rounded-full relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>

          {/* Ring 2 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square opacity-60">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <motion.div
              initial={{ rotate: 45 }}
              animate={{ rotate: -315 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="w-full h-full rounded-full relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>

          {/* Ring 3 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square opacity-80">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <motion.div
              initial={{ rotate: 90 }}
              animate={{ rotate: 450 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-full h-full rounded-full relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>

          {/* Ring 4 (Outer) */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] aspect-square opacity-100">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <motion.div
              initial={{ rotate: 135 }}
              animate={{ rotate: -225 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="w-full h-full rounded-full relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Blur Overlay extending down from the button's line */}
        <div className="absolute top-1/3 md:top-3/4 inset-x-0 bottom-0 z-10 pointer-events-none backdrop-blur-[1px] bg-gradient-to-b from-primary-beige/10 to-primary-beige/40 mask-hero" />

        {/* Content - Normal Flow */}
        <div className="relative z-20 flex flex-col items-center w-full px-4 mt-16 md:mt-24 lg:mt-32 max-w-[1350px]">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-normal tracking-wide uppercase m-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-none text-primary-black font-bebas w-full"
          >
            {"AI Voice Agents that Automate Outbound Calling and Scale Your Revenue"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-2 sm:mr-3 lg:mr-4"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 md:mt-10 lg:mt-16 text-center font-normal leading-relaxed m-0 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-black font-manrope max-w-3xl"
          >
            Deploy custom, multilingual AI voice agents that handle thousands of
            customers conversations simultaneously. Manage every outcome from
            one unified platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 md:mt-12 lg:mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-lg no-underline gap-2 sm:gap-3 bg-primary-black text-secondary-beige hover:bg-dark-grey transition-colors duration-300"
            >
              <span className="text-base sm:text-lg md:text-xl font-semibold font-manrope">
                Request Demo
              </span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 stroke-secondary-beige"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Glass Bubbles */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 1.2 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-6 md:gap-10 lg:gap-16 mt-6 md:mt-8 lg:mt-10 w-full max-w-5xl mx-auto pb-4 px-2 sm:px-4"
          >
            {["Intelligence", "Convenience", "Experience", "Science"].map(
              (text, index) => {
                let mobileAlignment = "lg:justify-self-center";
                if (index === 0)
                  mobileAlignment = "justify-self-start lg:justify-self-center";
                else if (index === 1)
                  mobileAlignment = "justify-self-end lg:justify-self-center";
                else if (index === 2)
                  mobileAlignment = "justify-self-end lg:justify-self-center";
                else if (index === 3)
                  mobileAlignment = "justify-self-start lg:justify-self-center";

                return (
                  <motion.div
                    key={text}
                    variants={{
                      hidden: { opacity: 0, y: "20%" },
                      visible: {
                        opacity: 1,
                        y: "0%",
                        transition: { duration: 0.6, ease: "easeOut" },
                      },
                    }}
                    className={`inline-flex px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-full backdrop-blur-[44.34px] bg-off-white/[0.18] border border-white/50 shadow-[0_8px_16px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.05)] justify-center items-center overflow-hidden ${mobileAlignment}`}
                  >
                    <span className="text-primary-black text-xs sm:text-sm md:text-base lg:text-xl font-semibold font-manrope leading-tight md:leading-6 whitespace-nowrap">
                      {text}
                    </span>
                  </motion.div>
                );
              },
            )}
          </motion.div>
        </div>
      </div>

      {/* Unified Platform Section merged into Hero */}
      <div
        id="platform"
        className="w-full flex justify-center relative z-10 -mt-12 md:-mt-16"
      >
        {/* Continuous Blur Overlay for Rings */}
        <div className="absolute inset-0 z-0 pointer-events-none backdrop-blur-[2px]" />

        {/* Desktop/Large Screen Pixel-Perfect Layout */}
        <div className="hidden lg:block relative w-full h-[800px] mx-auto z-10">
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
              width: "80%", // scaled up
              height: "800px", // scaled up
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
              left: "60%", // shifted slightly right for scaled image
              top: "140px", // shifted down to center with scaled image
              width: "35%",
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
              captured, analyzed and instantly converted into actionable CRM
              data.
            </p>

            {/* CTA */}
            <motion.a
              href="#platform"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg gap-3 mt-2 no-underline"
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
              width: "120%",
              left: "-10%",
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
            className="w-full flex flex-col gap-6 px-4 sm:px-6"
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
              captured, analyzed and instantly converted into actionable CRM
              data.
            </p>
            <a
              href="#platform"
              className="inline-flex items-center justify-center h-14 px-6 rounded-lg gap-3 self-start no-underline"
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
      </div>
    </section>
  );
}
