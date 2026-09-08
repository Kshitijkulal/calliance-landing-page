"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    title: "Customized AI Agents",
    content: {
      heading: "Create agents built strictly around your business workflows.",
      bullets: [
        "Customize your agent for specific business goals",
        "Define how it speaks, responds, and handles conversations",
        "Give every agent the knowledge and context it needs",
        "Create your own conversation scripts and flows",
      ],
    },
  },
  {
    title: "Affordable at Scale",
    content: {
      heading: "Scale your outreach without scaling your costs. Get enterprise-level performance at a fraction of the price.",
      bullets: [
        "30–40% more affordable than comparable solutions",
        "Pay only for what you use with flexible pricing",
        "No hidden costs or long-term contracts",
        "Volume discounts that grow with your business",
      ],
    },
  },
  {
    title: "Multilingual Conversations",
    content: {
      heading: "Connect with customers in their preferred language, automatically.",
      bullets: [
        "Support for multiple regional and global languages",
        "Natural-sounding pronunciation and intonation",
        "Automatic language detection and switching",
        "Culturally aware conversation handling",
      ],
    },
  },
  {
    title: "Simultaneous Calling at Scale",
    content: {
      heading: "Run thousands of simultaneous calls without compromising quality.",
      bullets: [
        "Handle massive call volumes effortlessly",
        "Zero queue times for your customers",
        "Consistent quality across every conversation",
        "Scale up or down based on demand",
      ],
    },
  },
  {
    title: "Effortless Setup & Guided Launch",
    content: {
      heading: "Go from sign-up to live campaigns in record time with guided onboarding.",
      bullets: [
        "Step-by-step setup wizard",
        "Dedicated onboarding specialist",
        "Pre-built templates for common workflows",
        "Test mode before going live",
      ],
    },
  },
  {
    title: "Call Intelligence & Tracking",
    content: {
      heading: "Turn every call into actionable business intelligence.",
      bullets: [
        "Real-time call transcription and analysis",
        "Sentiment detection and outcome tracking",
        "Automated CRM updates after every call",
        "Detailed reporting and performance dashboards",
      ],
    },
  },
  {
    title: "Secure & Reliable Calling",
    content: {
      heading: "Enterprise-grade security and uptime for mission-critical communications.",
      bullets: [
        "End-to-end encrypted call infrastructure",
        "99.9% uptime guarantee",
        "Compliant with industry regulations",
        "Regular security audits and monitoring",
      ],
    },
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section
      id="features"
      className="flex flex-col items-center py-20 gap-16 overflow-hidden" 
    >
      {/* Header — responsive wrap layout */}
      <div
        className="w-full flex flex-wrap justify-between items-start gap-8"
      >
        <h2
          className="flex-[1_1_400px] font-normal uppercase m-0"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "1.1",
            color: "var(--color-primary-black)",
          }}
        >
          Built to Make Every Conversation Count
        </h2>
        <p
          className="flex-[1_1_500px] font-normal leading-relaxed m-0"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontFamily: "var(--font-manrope), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          Powerful voice capabilities engineered to make automated conversations feel natural, personalized, and highly effective.
        </p>
      </div>

      {/* Feature List + Content Panel */}
      <div
        className="w-full flex flex-wrap justify-center items-start gap-12"
      >
        {/* Left Column — Feature List */}
        <div className="flex-[1_1_400px] flex flex-col gap-4 w-full">
          {FEATURES.map((feature, index) => (
            <motion.button
              key={feature.title}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.01 }}
              className="w-full py-5 px-6 rounded-2xl flex justify-between items-center cursor-pointer text-left outline-none relative overflow-hidden border-l-4 border-t-0 border-r-0 border-b-0"
              style={{
                boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                backgroundColor: "var(--color-secondary-beige)",
                borderColor: index === activeIndex ? "var(--color-primary-black)" : "transparent",
              }}
            >
              {/* Base Content (Always visible, behind the fill) */}
              <span
                className="relative z-0 font-semibold transition-colors duration-300 ease-in-out"
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontFamily: "var(--font-manrope), sans-serif",
                  color: index === activeIndex ? "var(--color-primary-black)" : "#71717A",
                }}
              >
                {feature.title}
              </span>
              {index === activeIndex && (
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="shrink-0 ml-3 relative z-0">
                  <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}

              {/* Innovative Cyber-Fill Animation (Overlays the base content) */}
              {index === activeIndex && (
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 2.5, ease: "linear" }}
                  className="absolute left-0 top-0 w-full h-full z-1 flex justify-between items-center py-5 px-6 box-border"
                  style={{
                    backgroundColor: "var(--color-primary-black)",
                    backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
                  }}
                >
                  {/* Glowing Laser Edge */}
                  <motion.div
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-[150px] -translate-x-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0.2) 95%, rgba(255,255,255,0.6) 100%)",
                      boxShadow: "4px 0 15px rgba(255,255,255,0.15)",
                    }}
                  />
                  
                  {/* Filled State Text (White) */}
                  <span
                    className="relative z-2 font-semibold text-white"
                    style={{
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontFamily: "var(--font-manrope), sans-serif",
                    }}
                  >
                    {feature.title}
                  </span>
                  
                  {/* Filled State Arrow (White) */}
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="shrink-0 ml-3 relative z-2">
                    <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="var(--color-secondary-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Right Column — Content Panel */}
        <div className="flex-[1_1_500px] flex flex-col items-start w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full" 
            >
              <div
                className="w-full p-8 rounded-3xl flex flex-col gap-6"
                style={{
                  backgroundColor: "rgba(212,212,216,0.2)",
                }}
              >
                <h3
                  className="font-normal leading-[1.2] m-0"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    color: "var(--color-primary-black)",
                  }}
                >
                  {FEATURES[activeIndex].content.heading}
                </h3>

                <div className="relative flex flex-col gap-5 m-0 pl-1">
                  {/* Continuous Vertical Line */}
                  <div
                    className="absolute w-0.5 z-0"
                    style={{
                      left: "11px",
                      top: "7px",
                      bottom: "7px",
                      backgroundColor: "var(--color-primary-black)",
                    }}
                  />

                  {FEATURES[activeIndex].content.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-4 relative z-1">
                      {/* The Dot */}
                      <div
                        className="w-4 h-4 rounded-full shrink-0"
                        style={{
                          backgroundColor: "var(--color-primary-black)",
                        }}
                      />
                      {/* The Text */}
                      <p
                        className="text-lg font-medium leading-relaxed m-0"
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          color: "var(--color-primary-black)",
                        }}
                      >
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
