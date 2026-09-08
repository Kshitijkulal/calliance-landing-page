"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.3 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full bg-secondary-beige overflow-hidden">
      <div className="relative w-full mx-auto min-h-screen flex flex-col items-center pt-24 md:pt-32 z-10">
        {/* Animated Concentric Rings Background */}
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.8 }}
          animate={{ opacity: 0.8, x: "-50%", y: "-50%", scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-70 md:top-120 left-1/2 w-11/12 max-w-3xl aspect-square z-0 pointer-events-none"
        >
          {/* Ring 1 (Inner) - 25% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 aspect-square">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="w-full h-full rounded-full border border-dark-grey/30 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>

          {/* Ring 2 - 50% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/4 aspect-square">
            <motion.div
              initial={{ rotate: 45 }}
              animate={{ rotate: -315 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="w-full h-full rounded-full border border-dark-grey/30 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>

          {/* Ring 3 - 75% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square">
            <motion.div
              initial={{ rotate: 90 }}
              animate={{ rotate: 450 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-full h-full rounded-full border border-dark-grey/30 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>

          {/* Ring 4 (Outer) - 100% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square">
            <motion.div
              initial={{ rotate: 135 }}
              animate={{ rotate: -225 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="w-full h-full rounded-full border border-dark-grey/30 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Blur Overlay extending down from the button's line */}
        <div
          className="absolute top-72 md:top-140 inset-x-0 bottom-0 z-10 pointer-events-none backdrop-blur-2xl bg-secondary-beige/40"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 25%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 25%)",
          }}
        />

        {/* Content - Normal Flow */}
        <div className="relative z-20 flex flex-col items-center gap-6 w-full p-4 mt-8 md:mt-12 max-w-7xl">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-normal tracking-wide uppercase m-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none text-primary-black font-bebas max-w-6xl"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center font-normal leading-relaxed m-0 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-black font-manrope max-w-3xl"
          >
            Deploy custom, multilingual AI voice agents that handle thousands of
            customers conversations simultaneously. Manage every outcome from
            one unified platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-6 md:mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-lg no-underline gap-2 sm:gap-3 bg-primary-black text-secondary-beige"
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
            className="flex flex-nowrap justify-start lg:justify-center gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-4 lg:mt-2 w-full max-w-full overflow-x-auto pb-4 px-4"
          >
            {["Intelligence", "Convenience", "Experience", "Science"].map(
              (text) => (
                <motion.div
                  key={text}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="inline-flex px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-3xl bg-transparent backdrop-blur-2xl border border-primary-black/5 shadow-glass-bubble justify-center items-center overflow-hidden"
                >
                  <span className="text-primary-black text-xs sm:text-sm md:text-base lg:text-xl font-semibold font-manrope leading-tight md:leading-6 whitespace-nowrap">
                    {text}
                  </span>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
