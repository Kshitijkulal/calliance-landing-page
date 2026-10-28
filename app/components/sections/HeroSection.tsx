"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const pillShellStyle: React.CSSProperties = {
  backgroundColor: "var(--color-primary-beige)",
  boxShadow:
    "inset 6px 6px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1)",
};

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
      <div className="relative w-full mx-auto flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 z-0">
        {/* Animated Concentric Rings Background */}
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.8 }}
          animate={{ opacity: 0.8, x: "-50%", y: "-50%", scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[48%] sm:top-[46%] md:top-[44%] lg:top-[42%] left-1/2 w-full max-w-[32rem] sm:max-w-[46rem] md:max-w-[62rem] lg:max-w-[76rem] xl:max-w-[84rem] aspect-square z-0 pointer-events-none"
        >
          {/* Ring 1 (Inner) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square opacity-40">
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
            <div
              className="w-full h-full rounded-full relative"
              style={{ animation: "ring-spin 10s linear infinite" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </div>
          </div>

          {/* Ring 2 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square opacity-60">
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
            <div
              className="w-full h-full rounded-full relative"
              style={{ animation: "ring-spin-rev 15s linear infinite", ["--ring-start" as string]: "45deg" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </div>
          </div>

          {/* Ring 3 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square opacity-80">
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
            <div
              className="w-full h-full rounded-full relative"
              style={{ animation: "ring-spin 20s linear infinite", ["--ring-start" as string]: "90deg" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </div>
          </div>

          {/* Ring 4 (Outer) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square opacity-100">
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
            <div
              className="w-full h-full rounded-full relative"
              style={{ animation: "ring-spin-rev 25s linear infinite", ["--ring-start" as string]: "135deg" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-4 md:size-5 lg:size-6 rounded-full shadow-lg shadow-primary-black/50 bg-primary-beige" />
            </div>
          </div>
        </motion.div>

        {/* Gradient Blur Overlay extending down from the button's line */}
        <div className="absolute top-1/3 md:top-3/4 inset-x-0 bottom-0 z-10 pointer-events-none bg-gradient-to-b from-primary-beige/10 to-primary-beige/40 mask-hero" />

        {/* Content - Normal Flow */}
        <div className="relative z-20 flex flex-col items-center w-full px-5 sm:px-6 mt-0">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-normal tracking-tight sm:tracking-normal uppercase m-0 text-[clamp(44px,9.5vw,144px)] leading-[0.88] text-primary-black font-bebas w-full max-w-[22rem] sm:max-w-none"
          >
            {"CALLING INTELLIGENCE"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-[0.16em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-5 sm:mt-6 md:mt-7 text-center font-normal leading-relaxed m-0 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] text-primary-black font-manrope w-full max-w-[21.5rem] sm:max-w-[34rem] md:max-w-[44rem] lg:max-w-[52rem] xl:max-w-[56rem]"
          >
            AI calling powered by expert{" "}
            <span className="font-bold">
              AI specialists and Marketing consultants
            </span>{" "}
            who design{" "}
            <span className="font-bold">ROI-focused campaigns</span>, backed by{" "}
            <span className="font-bold">custom , native language</span> voice AI
            agents that turn outreach into revenue at{" "}
            <span className="font-bold">scale</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-7 sm:mt-8 md:mt-9"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center h-12 md:h-14 px-7 md:px-8 rounded-xl no-underline gap-3 bg-primary-black text-secondary-beige transition-all duration-300 hover:opacity-90"
            >
              <span className="text-sm md:text-base font-extrabold font-manrope tracking-wide">
                Request Demo
              </span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 stroke-secondary-beige"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Pills — evenly spaced across width matching Figma */}
          <div className="relative z-20 w-full max-w-5xl xl:max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4">
            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 md:gap-7 lg:gap-10 xl:gap-14">
              {(
                [
                  "Strategic",
                  "High ROI",
                  "Natural",
                  "Customized",
                ] as const
              ).map((text, index) => (
                <div
                  key={text}
                  style={{ animationDelay: `${0.9 + index * 0.08}s` }}
                  className="hero-pill relative inline-flex px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-full border border-solid border-white/80 justify-center items-center overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
                >
                  <span className="absolute inset-0 rounded-full" style={pillShellStyle} />
                  <span className="relative z-10 text-primary-black text-xs sm:text-sm md:text-base lg:text-[18px] font-extrabold font-manrope leading-tight whitespace-nowrap">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Unified Platform Section merged into Hero */}
      <div
        id="platform"
        className="w-full flex justify-center relative z-10 mt-3 sm:mt-4 lg:-mt-12 xl:-mt-16"
      >
        {/* Desktop/Large Screen Pixel-Perfect Layout */}
        <div className="hidden lg:block relative w-full min-h-screen mx-auto z-10">
          {/* Laptop Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 top-[4%] h-[92%] w-[52%] xl:w-[54%] pointer-events-none"
          >
            <Image
              src="/Mockup%201.png"
              alt="AICaller Unified Platform"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </motion.div>

          {/* Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute flex flex-col items-start gap-5 z-10 right-4 lg:right-12 xl:right-24 top-1/4 w-[35%] xl:w-1/3"
          >
            <h2 className="text-5xl xl:text-6xl leading-none font-normal uppercase m-0 font-bebas text-primary-black">
              SOFTWARE ALONE DOESN'T DELIVER ROI , STRATEGY DOES
            </h2>
            <p className="text-lg xl:text-xl font-normal leading-relaxed m-0 font-manrope text-primary-black">
              Our <span className="font-bold">AI specialists and Marketing consultants</span> help you target the right audience, optimize campaigns, and drive better ROI without the guesswork.
            </p>

            {/* CTA */}
            <motion.a
              href="#platform"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-xl gap-3 mt-2 no-underline bg-primary-black text-secondary-beige transition-all duration-300"
            >
              <span className="text-sm md:text-base font-bold font-manrope">
                Explore Our Approach
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-secondary-beige"
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
        </div>

        {/* Mobile/Tablet Fallback (Stacking) */}
        <div className="flex lg:hidden w-full pt-0 pb-20 flex-col items-center gap-2 relative z-10">

          {/* Heading and Paragraph above Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col gap-2 px-4 sm:px-6 mt-0"
          >
            <h2 className="text-3xl sm:text-4xl leading-none m-0 uppercase font-bebas text-primary-black">
              SOFTWARE ALONE DOESN'T DELIVER ROI , STRATEGY DOES
            </h2>
            <p className="text-sm sm:text-base m-0 font-manrope text-primary-black">
              Our <span className="font-bold">AI specialists and Marketing consultants</span> help you target the right audience, optimize campaigns, and drive better ROI without the guesswork.
            </p>
          </motion.div>

          {/* Laptop Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[791/703]"
          >
            <Image
              src="/Mockup%201.png"
              alt="AICaller"
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>

          {/* Button below Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-start px-4 sm:px-6 mt-0"
          >
            <motion.a
              href="#platform"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 rounded-xl gap-3 no-underline bg-primary-black text-secondary-beige transition-all duration-300"
            >
              <span className="text-sm md:text-base font-bold font-manrope">
                Explore the Platform
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-secondary-beige w-5 h-5 sm:w-6 sm:h-6"
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
        </div>
      </div>
    </section>
  );
}
