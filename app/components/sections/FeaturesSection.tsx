"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    title: "Rapid AI Voice Agent Implementation With Experts",
    content: {
      heading:
        "Expert guidance for AI calling campaign management, from planning to continuous optimization",
      bullets: [
        "Get guided onboarding and expert-led setup",
        "Work with AI specialists and marketing consultants to plan audiences, campaign strategies, and scripts",
        "Get help configuring AI agents, inbound and outbound call flows, conversations, and follow-ups",
        "Receive ongoing consultation to refine inbound and outbound campaigns as results come in",
      ],
    },
  },
  {
    title: "Human-Like AI Calling Agents Built Around Your Business",
    content: {
      heading:
        "Personalized, human-like AI conversations tailored to your business goals",
      bullets: [
        "Create a customizable AI voice agent around your specific business goals and workflows",
        "Define how agents speak, respond, and handle inbound and outbound conversations",
        "Equip every agent with the knowledge and context it needs to answer customer enquiries",
        "Create tailored conversation scripts and flows for your campaigns",
      ],
    },
  },
  {
    title: "24/7 Inbound Calling With an AI Receptionist",
    content: {
      heading: "Answer every customer call, day or night",
      bullets: [
        "Answer inbound calls instantly, including after hours, so no customer waits and no call is missed",
        "Handle multiple inbound calls at the same time, without hold queues",
        "Answer customer questions with customer support automation built around your business knowledge",
        "Capture and qualify inbound enquiries as leads",
      ],
    },
  },
  {
    title: "Outbound Sales Automation at Scale",
    content: {
      heading: "Reach more customers with automated calling campaigns",
      bullets: [
        "Run large-scale outbound campaigns in minutes, not days",
        "Make thousands of simultaneous calls with auto dialer software",
        "Replace slow, error-prone manual dialing queues with automated follow-ups",
        "Automate repetitive outreach so your team can focus on qualified prospects",
      ],
    },
  },
  {
    title: "Multilingual AI Calling in 65+ Native Languages",
    content: {
      heading: "Reach customers in the language they know best",
      bullets: [
        "Support multilingual customer conversations",
        "Adapt interactions to customers’ language preferences on both inbound and outbound calls",
        "Deliver more natural, personalized conversations across diverse audiences",
        "Expand your reach across markets with a multilingual voice bot",
      ],
    },
  },
  {
    title: "Scale AI Calls Without Scaling Costs",
    content: {
      heading: "Reach more customers while making every rupee count",
      bullets: [
        "Handle more inbound and outbound conversations with fewer resources",
        "Scale AI sales outreach without proportionately increasing headcount",
        "Support call center cost reduction by cutting manual calling effort and operational overhead",
        "Plan calling budgets around your business needs and campaign goals",
        "Reduce wasted spend through smarter targeting and efficient campaign planning",
      ],
    },
  },
  {
    title: "Track Every Call, Improve Lead Quality",
    content: {
      heading:
        "Turn conversation intelligence into better leads and stronger ROI",
      bullets: [
        "Capture customer intent, objections, and interest levels on every inbound and outbound call",
        "Review transcripts and call outcomes to understand customer responses",
        "Monitor callbacks, next steps, and follow-ups with call tracking software",
        "Use AI lead scoring to identify better-quality leads through customer intent and qualification signals",
        "Use campaign insights to improve follow-ups, optimize performance, and increase lead conversion and ROI",
      ],
    },
  },
  {
    title: "Your 24/7 AI Sales Agent, Closing Deals Even While You Sleep",
    content: {
      heading:
        "Keep inbound and outbound customer conversations moving around the clock",
      bullets: [
        "Answer every inbound call 24/7 with an AI receptionist, so clients can always reach you",
        "Run large-scale outbound call automation campaigns in minutes, not days",
        "Make simultaneous calls at scale",
        "Replace slow, error-prone manual dialing queues with auto dialer software",
        "Automate repetitive outreach so your team can focus on qualified prospects",
      ],
    },
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
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

  // Only auto-cycle when the section is visible and the active pill is not hovered
  useEffect(() => {
    if (!isVisible || hoveredIndex === activeIndex || isPaused) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeIndex, isVisible, hoveredIndex, isPaused]);

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
      className="w-full px-4 lg:px-20 pt-4 sm:pt-6 lg:pt-[2%] pb-6 sm:pb-8 lg:pb-[4%] flex flex-col items-center gap-6 sm:gap-8 lg:gap-14 overflow-hidden"
    >
      {/* Header — responsive 2-column grid layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-10 xl:gap-12 items-start">
        <h2
          className="font-normal uppercase m-0 text-5xl sm:text-6xl lg:text-[58px] xl:text-[66px] 2xl:text-[72px] leading-[0.95]"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            lineHeight: "0.95",
            color: "var(--color-primary-black)",
          }}
        >
          A Voice AI Platform Built to Give Your Operations an Edge
        </h2>
        <div className="pt-0 sm:pt-1 md:pt-3 lg:pt-4">
          <p
            className="font-normal leading-relaxed m-0 text-base sm:text-lg lg:text-[22px] max-w-xl"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            Voice AI for inbound and outbound calls, backed by specialists, so
            you launch faster, reach more customers, and stay ahead of
            competitors.
          </p>
        </div>
      </div>

      {/* Feature List + Content Panel */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start">
        {/* Left Column — Feature List */}
        <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 w-full">
          {FEATURES.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <motion.div
                id={`feature-${index}`}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    const isMobile = window.innerWidth < 1024;
                    if (isMobile) {
                      if (activeIndex === index) {
                        setIsPaused(!isPaused);
                      } else {
                        setActiveIndex(index);
                        setIsPaused(true);
                      }
                    } else {
                      setActiveIndex(index);
                      setIsPaused(false);
                    }
                  }
                }}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setHoveredIndex(index);
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === "mouse") setHoveredIndex(null);
                }}
                className="group w-full py-3.5 sm:py-4 lg:py-5 px-6 sm:px-7 lg:px-8 rounded-2xl lg:rounded-[22px] flex justify-between items-center cursor-pointer text-left outline-none relative overflow-hidden border-none"
                style={{
                  backgroundColor:
                    index === activeIndex ? "white" : "transparent",
                  boxShadow:
                    index === activeIndex
                      ? "0px 6px 20px 0px rgba(0, 0, 0, 0.08)"
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
                  className="relative z-0 font-semibold transition-colors duration-300 ease-in-out text-[15px] sm:text-[16px] lg:text-[19px] xl:text-[20px]"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    color:
                      index === activeIndex
                        ? "var(--color-primary-black)"
                        : "#808285",
                  }}
                >
                  {feature.title}
                </span>
                {index === activeIndex && (
                  <svg
                    viewBox="0 0 20 16"
                    fill="none"
                    className="w-4 sm:w-4.5 lg:w-5 h-auto shrink-0 ml-3 relative z-0"
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
                  <div
                    key={isPaused ? "paused" : "playing"}
                    className="absolute left-0 top-0 w-full h-full z-1 overflow-hidden"
                  >
                    <div
                      className={`absolute left-0 top-0 w-full h-full overflow-hidden ${hoveredIndex === activeIndex || isPaused ? "![transform:translateX(0%)] ![animation:none]" : ""}`}
                      style={{
                        backgroundColor: "var(--color-primary-black)",
                        animation: "pillFillOuter 2.5s linear forwards",
                        willChange: "transform",
                      }}
                    >
                      <div
                        className={`absolute left-0 top-0 w-full h-full flex justify-between items-center py-3.5 sm:py-4 lg:py-5 px-6 sm:px-7 lg:px-8 box-border ${hoveredIndex === activeIndex || isPaused ? "![transform:translateX(0%)] ![animation:none]" : ""}`}
                        style={{
                          animation: "pillFillInner 2.5s linear forwards",
                          willChange: "transform",
                        }}
                      >
                        <span
                          className="relative z-2 font-semibold text-white text-[15px] sm:text-[16px] lg:text-[19px] xl:text-[20px]"
                          style={{
                            fontFamily: "var(--font-manrope), sans-serif",
                          }}
                        >
                          {feature.title}
                        </span>
                        <svg
                          viewBox="0 0 20 16"
                          fill="none"
                          className="w-4 sm:w-4.5 lg:w-5 h-auto shrink-0 ml-3 relative z-2"
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
        <div className="hidden lg:flex flex-col items-start w-full">
          <div
            className="w-full p-6 sm:p-8 lg:p-10 xl:p-12 rounded-3xl flex flex-col gap-7"
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
                  className="font-normal leading-none m-0 uppercase text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px]"
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
                        className="text-base sm:text-[17px] lg:text-[18px] xl:text-[19px] font-normal leading-relaxed m-0"
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
