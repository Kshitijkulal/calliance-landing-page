"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    title: "Customized AI Agents",
    content: {
      heading: "Create agents built strictly around your business workflows",
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
      heading: "Scale your outreach without scaling your costs. Get enterprise-level performance at a fraction of the price",
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
      heading: "Connect with customers in their preferred language, automatically",
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
      heading: "Run thousands of simultaneous calls without compromising quality",
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
      heading: "Go from sign-up to live campaigns in record time with guided onboarding",
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
      heading: "Turn every call into actionable business intelligence",
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
      heading: "Enterprise-grade security and uptime for mission-critical communications",
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
  const sectionRef = React.useRef<HTMLElement>(null);
  const isVisibleRef = React.useRef(false);

  // Track whether the section is visible in the viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 2500); 
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-scroll on mobile when active index changes, only if section is visible
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024 && isVisibleRef.current) {
      const element = document.getElementById(`feature-${activeIndex}`);
      if (element) {
        // Small delay to allow the accordion collapse/expand animation to begin
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
      }
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full max-w-screen-2xl mx-auto py-[7%] flex flex-col items-center gap-12 lg:gap-16 overflow-hidden px-4 lg:px-20" 
    >
      {/* Header — responsive wrap layout */}
      <div
        className="w-full flex flex-wrap justify-between items-start gap-8"
      >
        <h2
          className="flex-[1_1_400px] font-normal uppercase m-0 text-5xl sm:text-6xl md:text-7xl leading-tight"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          Built to Make Every Conversation Count
        </h2>
        <div className="flex-[1_1_500px] pt-2 md:pt-4">
          <p
            className="font-normal leading-relaxed m-0 text-base sm:text-lg lg:text-xl"
            style={{
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
        <div className="flex-[1_1_100%] lg:flex-[1_1_50%] flex flex-col gap-2 lg:gap-4 w-full">
          {FEATURES.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <motion.div
                id={`feature-${index}`}
                onClick={() => setActiveIndex(index)}
                className="w-full py-4 sm:py-5 px-6 sm:px-8 rounded-3xl flex justify-between items-center cursor-pointer text-left outline-none relative overflow-hidden border-none"
              style={{
                backgroundColor: index === activeIndex ? "white" : "transparent",
                boxShadow: index === activeIndex ? "0px 6px 20px 0px rgba(0, 0, 0, 0.15)" : "none",
              }}
            >
              {/* Static left border to prevent anti-aliasing gaps */}
              {index === activeIndex && (
                <div
                  className="absolute left-0 top-0 w-2 h-full z-10"
                  style={{ backgroundColor: "var(--color-primary-black)" }}
                />
              )}
              {/* Base Content (Always visible, behind the fill) */}
              <span
                className="relative z-0 font-semibold transition-colors duration-300 ease-in-out text-base sm:text-lg lg:text-xl"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  color: index === activeIndex ? "var(--color-primary-black)" : "#71717A",
                }}
              >
                {feature.title}
              </span>
              {index === activeIndex && (
                <svg viewBox="0 0 20 16" fill="none" className="w-4 sm:w-5 h-auto shrink-0 ml-3 relative z-0">
                  <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}

              {/* Pure CSS Fill Animation — runs on GPU, zero JS overhead */}
              {index === activeIndex && (
                <div className="absolute left-0 top-0 w-full h-full z-1 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 w-full h-full overflow-hidden"
                    style={{
                      backgroundColor: "var(--color-primary-black)",
                      animation: "pillFillOuter 2.5s linear forwards",
                      willChange: "transform",
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 w-full h-full flex justify-between items-center py-4 sm:py-5 px-6 sm:px-8 box-border"
                      style={{
                        animation: "pillFillInner 2.5s linear forwards",
                        willChange: "transform",
                      }}
                    >
                      <span
                        className="relative z-2 font-semibold text-white text-base sm:text-lg lg:text-xl"
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                        }}
                      >
                        {feature.title}
                      </span>
                      <svg viewBox="0 0 20 16" fill="none" className="w-4 sm:w-5 h-auto shrink-0 ml-3 relative z-2">
                        <path d="M2 8H18M18 8L12 2M18 8L12 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              </motion.div>

              {/* Mobile Inline Content Panel */}
              <AnimatePresence>
                {index === activeIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="w-full lg:hidden overflow-hidden"
                  >
                    <div
                      className="w-full mt-2 p-6 sm:p-8 rounded-3xl flex flex-col gap-6"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.02)",
                        boxShadow: "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 20px rgba(255, 255, 255, 1)",
                      }}
                    >
                      <h3
                        className="font-normal leading-none m-0 uppercase text-3xl sm:text-4xl"
                        style={{
                          fontFamily: "var(--font-bebas-neue), sans-serif",
                          color: "var(--color-primary-black)",
                        }}
                      >
                        {feature.content.heading}
                      </h3>

                      <div className="flex flex-col gap-5 m-0 pl-1">
                        {feature.content.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-stretch gap-4">
                            {/* The Dot & Line Container */}
                            <div className="relative flex flex-col items-center shrink-0">
                              <div
                                className="w-4 h-4 rounded-full mt-1.5 relative z-10"
                                style={{
                                  backgroundColor: "var(--color-primary-black)",
                                }}
                              />
                              {/* Connecting Line Segment */}
                              {i !== feature.content.bullets.length - 1 && (
                                <div
                                  className="absolute w-0.5 z-0 top-[22px] -bottom-[26px]"
                                  style={{
                                    backgroundColor: "var(--color-primary-black)",
                                  }}
                                />
                              )}
                            </div>
                            {/* The Text */}
                            <p
                              className="text-base sm:text-lg font-normal leading-relaxed m-0"
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
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>

        {/* Right Column — Content Panel (Desktop Only) */}
        <div className="hidden lg:flex flex-[1_1_40%] flex-col items-start w-full">
          <div
            className="w-full p-6 sm:p-8 lg:p-12 rounded-3xl flex flex-col gap-6"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              boxShadow: "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 20px rgba(255, 255, 255, 1)",
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col gap-6"
              >
                <h3
                  className="font-normal leading-none m-0 uppercase text-3xl sm:text-4xl"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    color: "var(--color-primary-black)",
                  }}
                >
                  {FEATURES[activeIndex].content.heading}
                </h3>

                <div className="flex flex-col gap-5 m-0 pl-1">
                  {FEATURES[activeIndex].content.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-stretch gap-4">
                      {/* The Dot & Line Container */}
                      <div className="relative flex flex-col items-center shrink-0">
                        <div
                          className="w-4 h-4 rounded-full mt-1.5 relative z-10"
                          style={{
                            backgroundColor: "var(--color-primary-black)",
                          }}
                        />
                        {/* Connecting Line Segment */}
                        {i !== FEATURES[activeIndex].content.bullets.length - 1 && (
                          <div
                            className="absolute w-0.5 z-0 top-[22px] -bottom-[26px]"
                            style={{
                              backgroundColor: "var(--color-primary-black)",
                            }}
                          />
                        )}
                      </div>
                      {/* The Text */}
                      <p
                        className="text-base sm:text-lg font-normal leading-relaxed m-0"
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
