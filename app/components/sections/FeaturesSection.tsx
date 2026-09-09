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
      className="w-full max-w-[1440px] mx-auto py-[7%] flex flex-col items-center gap-12 lg:gap-16 overflow-hidden px-4 lg:px-[6%]" 
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
        <div className="flex-[1_1_500px] pt-2 md:pt-4">
          <p
            className="font-normal leading-relaxed m-0"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            Powerful voice capabilities engineered to make automated conversations feel natural, personalized, and highly effective.
          </p>
        </div>
      </div>

      {/* Feature List + Content Panel */}
      <div
        className="w-full flex flex-wrap justify-center items-start gap-12"
      >
        {/* Left Column — Feature List */}
        <div className="flex-[1_1_616px] flex flex-col gap-2 lg:gap-4 w-full lg:max-w-[616px]">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              onClick={() => setActiveIndex(index)}
              className="w-full h-[67px] pt-[20px] pb-[20px] pr-[32px] pl-[24px] rounded-[24px] flex justify-between items-center cursor-pointer text-left outline-none relative overflow-hidden border-solid border-t-0 border-r-0 border-b-0 border-l-[9px]"
              style={{
                backgroundColor: index === activeIndex ? "white" : "transparent",
                boxShadow: index === activeIndex ? "0px 6px 20px 0px rgba(0, 0, 0, 0.15)" : "none",
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
                  <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}

              {/* Fast Dark-Gray Fill Animation (Leads the way) */}
              {index === activeIndex && (
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute left-0 top-0 w-full h-full z-1 flex justify-between items-center pt-[20px] pb-[20px] pr-[32px] pl-[24px] box-border"
                  style={{
                    backgroundColor: "#3F3F46", // Dark greyish color
                  }}
                >
                  <span
                    className="relative z-2 font-semibold text-white"
                    style={{
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontFamily: "var(--font-manrope), sans-serif",
                    }}
                  >
                    {feature.title}
                  </span>
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="shrink-0 ml-3 relative z-2">
                    <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}

              {/* Slow Black Fill Animation (Follows behind) */}
              {index === activeIndex && (
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 3.5, ease: "linear" }}
                  className="absolute left-0 top-0 w-full h-full z-2 flex justify-between items-center pt-[20px] pb-[20px] pr-[32px] pl-[24px] box-border"
                  style={{
                    backgroundColor: "var(--color-primary-black)",
                  }}
                >
                  <span
                    className="relative z-3 font-semibold text-white"
                    style={{
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontFamily: "var(--font-manrope), sans-serif",
                    }}
                  >
                    {feature.title}
                  </span>
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="shrink-0 ml-3 relative z-3">
                    <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}
            </motion.div>
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
                className="w-full p-8 lg:p-12 rounded-3xl flex flex-col gap-6"
                style={{
                  backgroundColor: "var(--color-section-alt)",
                }}
              >
                <h3
                  className="font-normal leading-[1.1] m-0 uppercase"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    fontSize: "clamp(28px, 4vw, 40px)",
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
