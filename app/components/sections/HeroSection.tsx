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
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "var(--color-primary-beige)",
        // Note: No overflow: hidden here so the rings can extend into the next section!
      }}
    >
      <div
        className="relative w-full mx-auto min-h-[750px] flex flex-col items-center pt-40 z-[1]"
      >
        {/* Concentric Circles & Orbit Dots Background */}
        <div
          style={{
            position: "absolute",
            width: "1000px",
            height: "1000px",
            left: "50%",
            transform: "translateX(-50%)",
            top: "9px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          {/* Ring 4 (innermost) - 256px */}
          <div style={{ position: "absolute", width: "256px", height: "256px", left: "372px", top: "372px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.55, ease: "easeOut" }}
              style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid #525252", filter: "blur(1.5px)", opacity: 0.4 }}
            />
            <div style={{ position: "absolute", width: "28px", height: "14px", left: "197px", top: "50px", transform: "rotate(-90deg)", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }} />
            <div style={{ position: "absolute", width: "28px", height: "14px", left: "52px", top: "213px", transform: "rotate(90deg)", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }} />
          </div>

          {/* Ring 3 - 541px */}
          <div style={{ position: "absolute", width: "541px", height: "541px", left: "229px", top: "229px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid #525252", filter: "blur(2px)", opacity: 0.4 }}
            />
            <div style={{ position: "absolute", width: "14px", height: "14px", left: "55px", top: "125px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }} />
            <div style={{ position: "absolute", width: "14px", height: "14px", left: "485px", top: "415px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }} />
          </div>

          {/* Ring 2 - 750px */}
          <div style={{ position: "absolute", width: "750px", height: "750px", left: "125px", top: "125px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
              style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid #525252", filter: "blur(3px)", opacity: 0.4 }}
            />
            <div style={{ position: "absolute", width: "20px", height: "20px", left: "119px", top: "540px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }} />
            <div style={{ position: "absolute", width: "20px", height: "20px", left: "680px", top: "150px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }} />
          </div>

          {/* Label Pills - Absolute positioned inside the 1000x1000 box to match Figma exactly */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="hidden md:flex"
            style={{
              position: "absolute",
              left: "40px",
              top: "403px",
              padding: "10px 20px",
              borderRadius: "24px",
              boxShadow: "0px 6px 40px 0px rgba(219,220,220,0.5)",
              backgroundColor: "rgba(255,255,255,0.95)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-manrope), sans-serif", color: "var(--color-primary-black)" }}>Experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="hidden md:flex"
            style={{
              position: "absolute",
              left: "238px",
              top: "643px",
              padding: "10px 20px",
              borderRadius: "24px",
              boxShadow: "0px 6px 40px 0px rgba(219,220,220,0.5)",
              backgroundColor: "rgba(255,255,255,0.95)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-manrope), sans-serif", color: "var(--color-primary-black)" }}>Intelligence</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="hidden md:flex"
            style={{
              position: "absolute",
              left: "583px",
              top: "601px",
              padding: "10px 20px",
              borderRadius: "24px",
              boxShadow: "0px 6px 40px 0px rgba(219,220,220,0.5)",
              backgroundColor: "rgba(255,255,255,0.95)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-manrope), sans-serif", color: "var(--color-primary-black)" }}>Convenience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden md:flex"
            style={{
              position: "absolute",
              left: "-16px",
              top: "577px",
              padding: "10px 20px",
              borderRadius: "24px",
              boxShadow: "0px 6px 40px 0px rgba(219,220,220,0.5)",
              backgroundColor: "rgba(255,255,255,0.95)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-manrope), sans-serif", color: "var(--color-primary-black)" }}>Science</span>
          </motion.div>
        </div>

        {/* Content Content - Normal Flow (above rings) */}
        <div className="relative z-[2] flex flex-col items-center gap-6 w-full p-0">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-normal tracking-[0.025em] uppercase m-0"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: "0.95",
              color: "var(--color-primary-black)",
            }}
          >
            AI Voice Agents that Automate Outbound<br/>Calling and Scale Your Revenue
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center font-normal leading-[1.4] m-0"
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            Deploy custom, multilingual AI voice agents that handle thousands of customers conversations simultaneously. Manage every outcome from one unified platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ marginTop: "24px" }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center h-14 p-0 rounded-lg no-underline gap-3"
              style={{
                backgroundColor: "var(--color-primary-black)",
                color: "var(--color-secondary-beige)",
              }}
            >
              <span
                className="text-xl font-semibold"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                Request Demo
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="var(--color-secondary-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
