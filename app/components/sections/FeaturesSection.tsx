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
      heading: "Enterprise-grade calling without enterprise-grade costs",
      bullets: [
        "Handle more conversations with fewer resources",
        "Scale outreach without scaling headcount",
        "Reduce manual calling effort and operational overhead",
      ],
    },
  },
  {
    title: "Secure & Reliable Calling",
    content: {
      heading: "Engineered for business-critical communications.",
      bullets: [
        <React.Fragment key="sec-1">
          <strong>Secure customer interactions:</strong> Keep proprietary
          business data and customer conversations strictly protected.
        </React.Fragment>,
        <React.Fragment key="sec-2">
          <strong>Encrypted data, controlled by you:</strong> Your data remains
          encrypted and can only be decrypted by you and authorized users you
          control.
        </React.Fragment>,
        <React.Fragment key="sec-3">
          <strong>Reliable calling infrastructure:</strong> Rely on robust
          infrastructure built to handle high call volumes without compromising
          reliability.
        </React.Fragment>,
        <React.Fragment key="sec-4">
          <strong>Built for business use:</strong> Architected to meet the data
          privacy, security and reliability standards required for modern B2B
          operations.
        </React.Fragment>,
      ],
    },
  },
  {
    title: "Multilingual Conversations",
    content: {
      heading: "Reach global customers in their preferred native language.",
      bullets: [
        "Support multilingual customer conversations",
        "Adapt interactions to customer language preferences",
        "Reach diverse audiences at scale",
      ],
    },
  },
  {
    title: "Simultaneous Calling at Scale",
    content: {
      heading:
        "Expand your outreach exponentially without expanding your team.",
      bullets: [
        "Run massive outbound campaigns in minutes, not days.",
        "Make simultaneous calls at scale",
        "Remove the dependency on slow, error-prone manual dialing queues.",
      ],
    },
  },
  {
    title: "Effortless Setup & Guided Launch",
    content: {
      heading: "Get started without figuring it all out yourself",
      bullets: [
        "Guided onboarding and setup",
        "Help configuring agents and campaigns",
        "Support throughout deployment",
      ],
    },
  },
  {
    title: "Call Intelligence & Tracking",
    content: {
      heading: "Know what happened after every conversation.",
      bullets: [
        "Capture intent, objections and interest level",
        "Review transcripts and call outcomes",
        "Track callbacks, next steps and follow-ups",
      ],
    },
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const userScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Detect when the user is actively scrolling the page
  useEffect(() => {
    const handleUserScroll = () => {
      userScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        userScrollingRef.current = false;
      }, 1000);
    };
    window.addEventListener("scroll", handleUserScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleUserScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Track whether the section is visible in the viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Only auto-cycle when the section is visible and not hovered
  useEffect(() => {
    if (!isVisible || isHovered) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeIndex, isVisible, isHovered]);

  // Auto-scroll on mobile when active index changes, only if section is visible and user is not navigating
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth < 1024 &&
      isVisible &&
      !userScrollingRef.current
    ) {
      const element = document.getElementById(`feature-${activeIndex}`);
      if (element) {
        setTimeout(() => {
          if (!userScrollingRef.current) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
      }
    }
  }, [activeIndex, isVisible]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full max-w-screen-2xl mx-auto pt-[2%] pb-[4%] flex flex-col items-center gap-12 lg:gap-16 overflow-hidden px-4 lg:px-20"
    >
      {/* Header — responsive wrap layout */}
      <div className="w-full flex flex-wrap justify-between items-start gap-8">
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
            Powerful voice capabilities engineered to make automated
            conversations feel natural, personalized, and highly effective.
          </p>
        </div>
      </div>

      {/* Feature List + Content Panel */}
      <div className="w-full flex flex-wrap justify-center items-start gap-12">
        {/* Left Column — Feature List */}
        <div className="flex-[1_1_100%] lg:flex-[1_1_50%] flex flex-col gap-2 lg:gap-4 w-full">
          {FEATURES.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <motion.div
                id={`feature-${index}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl md:rounded-3xl flex justify-between items-center cursor-pointer text-left outline-none relative overflow-hidden border-none"
                style={{
                  backgroundColor:
                    index === activeIndex ? "white" : "transparent",
                  boxShadow:
                    index === activeIndex
                      ? "0px 6px 20px 0px rgba(0, 0, 0, 0.15)"
                      : "none",
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
                    color:
                      index === activeIndex
                        ? "var(--color-primary-black)"
                        : "#71717A",
                  }}
                >
                  {feature.title}
                </span>
                {index === activeIndex && (
                  <svg
                    viewBox="0 0 20 16"
                    fill="none"
                    className="w-4 sm:w-5 h-auto shrink-0 ml-3 relative z-0"
                  >
                    <path
                      d="M2 8H18M18 8L12 2M18 8L12 14"
                      stroke="#A1A1AA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {/* Pure CSS Fill Animation — runs on GPU, zero JS overhead */}
                {index === activeIndex && (
                  <div className="absolute left-0 top-0 w-full h-full z-1 overflow-hidden">
                    <div
                      className="absolute left-0 top-0 w-full h-full overflow-hidden group-hover:![transform:translateX(0%)] group-hover:![animation:none]"
                      style={{
                        backgroundColor: "var(--color-primary-black)",
                        animation: "pillFillOuter 2.5s linear forwards",
                        willChange: "transform",
                      }}
                    >
                      <div
                        className="absolute left-0 top-0 w-full h-full flex justify-between items-center py-4 sm:py-5 px-6 sm:px-8 box-border group-hover:![transform:translateX(0%)] group-hover:![animation:none]"
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
                        <svg
                          viewBox="0 0 20 16"
                          fill="none"
                          className="w-4 sm:w-5 h-auto shrink-0 ml-3 relative z-2"
                        >
                          <path
                            d="M2 8H18M18 8L12 2M18 8L12 14"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
                        boxShadow:
                          "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 20px rgba(255, 255, 255, 1)",
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
                                    backgroundColor:
                                      "var(--color-primary-black)",
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
              boxShadow:
                "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 20px rgba(255, 255, 255, 1)",
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
                        {i !==
                          FEATURES[activeIndex].content.bullets.length - 1 && (
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
