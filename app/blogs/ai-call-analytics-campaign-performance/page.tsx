"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-call-analytics", label: "What Is AI Call Analytics?" },
  { id: "how-analytics-improves-performance", label: "How AI Call Analytics Improves Campaign Performance" },
  { id: "important-metrics-to-track", label: "Important Metrics to Track in AI Calling Campaigns" },
  { id: "using-call-transcripts", label: "How to Use Call Transcripts to Improve Calling Campaigns" },
  { id: "software-and-tools", label: "AI Call Analytics Software and Other Analytics Tools" },
  { id: "industry-use-cases", label: "How Different Businesses Can Use Conversation Insights" },
  { id: "how-callience-supports", label: "How Callience Supports AI Calling Campaigns" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is AI call analytics?",
    a: "AI call analytics is the process of analysing voice conversations using AI technologies to understand customer behaviour, identify objections, evaluate call outcomes, and improve campaign performance.",
  },
  {
    q: "2. How does AI call analytics improve campaign performance?",
    a: "It helps businesses identify customer objections, understand sentiment, improve lead qualification, analyse conversation patterns, and refine calling strategies using insights from customer interactions.",
  },
  {
    q: "3. What is the difference between call analytics and conversation analytics?",
    a: "Call analytics generally examines call data such as duration, connection rates, and outcomes. Conversation analytics focuses more on the content of conversations, including customer questions, objections, and sentiment.",
  },
  {
    q: "4. How does conversation intelligence help sales teams?",
    a: "Conversation intelligence helps sales teams understand customer requirements, identify common objections, review conversation patterns, and improve their communication strategies.",
  },
  {
    q: "5. Can AI call analytics identify customer sentiment?",
    a: "Yes. AI-powered sentiment analysis can help identify positive, neutral, or negative customer responses during conversations, depending on the analytics tool's capabilities.",
  },
  {
    q: "6. What is call transcript analysis?",
    a: "Call transcript analysis involves reviewing text versions of voice conversations to identify customer questions, objections, recurring topics, and opportunities to improve communication.",
  },
  {
    q: "7. What should businesses look for in call analytics software?",
    a: "Businesses should evaluate conversation analysis, transcript availability, call outcome reporting, sentiment analysis, integration options, data security, and reporting capabilities according to their requirements.",
  },
];

export default function AICallAnalyticsCampaignPerformancePage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-call-analytics");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(true);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const asideRef = useRef<HTMLElement | null>(null);
  const articleRef = useRef<HTMLElement | null>(null);
  const tocBoxRef = useRef<HTMLDivElement | null>(null);

  const [fixedState, setFixedState] = useState<{
    mode: "normal" | "fixed" | "bottom";
    left: number;
    width: number;
  }>({ mode: "normal", left: 0, width: 0 });

  useEffect(() => {
    const handleScrollAndResize = () => {
      if (window.innerWidth < 1024) {
        setFixedState((prev) =>
          prev.mode === "normal" ? prev : { mode: "normal", left: 0, width: 0 }
        );
        return;
      }

      if (!asideRef.current || !articleRef.current || !tocBoxRef.current) return;

      const asideRect = asideRef.current.getBoundingClientRect();
      const articleRect = articleRef.current.getBoundingClientRect();
      const tocHeight = tocBoxRef.current.offsetHeight;
      const topOffset = 28;

      let newMode: "normal" | "fixed" | "bottom" = "normal";
      if (articleRect.bottom <= topOffset + tocHeight) {
        newMode = "bottom";
      } else if (asideRect.top <= topOffset) {
        newMode = "fixed";
      } else {
        newMode = "normal";
      }

      setFixedState((prev) => {
        const newLeft = asideRect.left;
        const newWidth = asideRect.width;
        if (
          prev.mode === newMode &&
          Math.abs(prev.left - newLeft) < 1 &&
          Math.abs(prev.width - newWidth) < 1
        ) {
          return prev;
        }
        return {
          mode: newMode,
          left: newLeft,
          width: newWidth,
        };
      });

      let current = TOC_ITEMS[0].id;
      for (const item of TOC_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollAndResize, { passive: true });
    window.addEventListener("resize", handleScrollAndResize);
    handleScrollAndResize();

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-primary-beige flex flex-col font-sans text-primary-black">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-36">
        {/* Article Header Container (1270px x Hug) */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-12">
          {/* Back link above the header row with exact ~15px gap to title */}
          <div className="mb-3 sm:mb-3.5 sm:mb-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-primary-black hover:text-black transition-colors group"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path
                  d="M11.5 1.5H1.5V11.5M1.5 1.5L12.5 12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>See all Blogs</span>
            </Link>
          </div>

          {/* Header Row: Title on Left, Metadata Sidebar on Right */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 xl:gap-14 2xl:gap-[120px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[940px]">
              <h1
                className="font-normal uppercase text-primary-black text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span className="block sm:whitespace-nowrap">HOW AI CALL ANALYTICS AND CONVERSATION</span>
                <span className="block sm:whitespace-nowrap">INSIGHTS IMPROVE CAMPAIGN PERFORMANCE</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[660px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Discover how AI call analytics uses conversation insights, call transcripts, and sentiment analysis to improve calling campaign performance.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-primary-black pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                {/* Text lines */}
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-primary-black"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    21st November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    6 min read
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    Karanvir Singh
                  </p>
                </div>

                {/* Contact Us button */}
                <div className="lg:mt-[27px]">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-primary-black text-white hover:bg-black px-4 py-2 rounded-[8px] text-sm font-semibold transition-all shadow-xs group cursor-pointer whitespace-nowrap"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <span>Contact Us</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-0.5 transition-transform shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section — 1440x515 Full-Width Display */}
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515] min-h-[160px]">
            <Image
              src="/How AI Call Analytics and Conversation Insights Improve Campaign Performance.png"
              alt="How AI Call Analytics and Conversation Insights Improve Campaign Performance"
              fill
              sizes="100vw"
              className="object-cover object-center w-full h-full"
              loading="eager"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Content Section with Sticky Sidebar */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14">
            {/* Left Column: Table of Contents */}
            <aside
              ref={asideRef}
              className="lg:col-span-3 relative lg:min-h-[500px]"
            >
              {/* Mobile TOC Accordion Header */}
              <div className="lg:hidden mb-6">
                <button
                  type="button"
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  aria-expanded={mobileTocOpen}
                  aria-label="Toggle table of contents"
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-primary-black cursor-pointer"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <span>Contents</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 shrink-0 ${mobileTocOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {mobileTocOpen && (
                  <nav
                    className="mt-4 space-y-2.5 text-sm"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {TOC_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          scrollTo(item.id);
                          setMobileTocOpen(false);
                        }}
                        className={`block w-full text-left py-1 text-[15px] transition-colors ${activeSection === item.id
                            ? "font-bold text-primary-black"
                            : "text-dark-grey hover:text-primary-black"
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                )}
              </div>

              {/* Desktop Fixed Floating TOC */}
              <div
                ref={tocBoxRef}
                style={
                  fixedState.mode === "fixed"
                    ? {
                      position: "fixed",
                      top: "28px",
                      left: `${fixedState.left}px`,
                      width: `${fixedState.width}px`,
                    }
                    : fixedState.mode === "bottom"
                      ? {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        width: "100%",
                      }
                      : undefined
                }
                className="hidden lg:block z-20"
              >
                <button
                  type="button"
                  onClick={() => setTocOpen(!tocOpen)}
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-primary-black hover:opacity-80 transition-opacity cursor-pointer mb-5"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <span>Contents</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 shrink-0 ${tocOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {tocOpen && (
                  <nav
                    className="space-y-1.5 text-sm"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {TOC_ITEMS.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`toc-item-${item.id}`}
                          type="button"
                          onClick={() => scrollTo(item.id)}
                          className={`group flex items-start gap-2 w-full text-left transition-all py-0.5 cursor-pointer ${isActive
                              ? "font-bold text-primary-black"
                              : "text-dark-grey hover:text-primary-black"
                            }`}
                        >
                          <span
                            className={`w-1 h-3 rounded-full mt-1 transition-all shrink-0 ${isActive
                                ? "bg-primary-black"
                                : "bg-transparent group-hover:bg-card-border"
                              }`}
                          />
                          <span className="leading-snug text-[13.5px] xl:text-[14px]">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                )}
              </div>
            </aside>

            {/* Right Column: Main Content */}
            <article ref={articleRef} className="lg:col-span-9 w-full max-w-[743px]">
              {/* Introduction Text */}
              <div className="space-y-4 mb-14">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI call analytics helps businesses understand customer conversations, identify common objections, improve lead quality, and optimise calling campaigns. By analysing call transcripts, customer responses, sentiment, and call outcomes, businesses can identify what works and what needs improvement.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI call analytics uses technologies such as conversation analytics, speech analytics, and conversation intelligence to turn voice interactions into actionable business insights. Instead of relying only on call volume or call duration, businesses can understand why customers show interest, why they hesitate, and what influences their decisions.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AI CALL ANALYTICS? */}
              <section id="what-is-ai-call-analytics" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI CALL ANALYTICS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI call analytics is the process of analysing voice conversations to understand customer behaviour, conversation quality, and campaign performance. It uses call transcript analysis, voice analytics, and AI-powered tools to identify useful patterns in customer interactions.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI call insights to understand:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>Frequently asked customer questions.</li>
                    <li>Common objections and reasons for rejection.</li>
                    <li>Customer interest and sentiment.</li>
                    <li>Lead qualification and conversion patterns.</li>
                    <li>Follow-up requirements and call outcomes.</li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Unlike basic call reporting, AI conversation intelligence focuses on what happens during conversations, not just how many calls are completed.
                  </p>
                </div>
              </section>

              {/* SECTION 2: HOW AI CALL ANALYTICS IMPROVES CAMPAIGN PERFORMANCE */}
              <section id="how-analytics-improves-performance" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI CALL ANALYTICS IMPROVES CAMPAIGN PERFORMANCE
                </h2>
                <div className="space-y-6">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI call analytics to understand customer behaviour and improve their calling strategies. Here are six important ways it supports campaign optimisation.
                  </p>

                  {/* 1. Identifies Common Customer Objections */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      1. IDENTIFIES COMMON CUSTOMER OBJECTIONS
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      One of the biggest challenges in calling campaigns is understanding why potential customers do not convert. Some customers may be concerned about pricing, while others may need additional information before making a decision.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      AI call analytics identifies recurring objections by analysing customer conversations and call transcripts.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, an education business may discover that students frequently ask about course fees, eligibility criteria, and admission deadlines.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Understanding how AI call analytics identifies customer objections helps businesses:
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                      <li>Identify frequently reported concerns.</li>
                      <li>Improve calling scripts.</li>
                      <li>Prepare better responses to common questions.</li>
                      <li>Address customer hesitation more effectively.</li>
                    </ul>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      These AI-generated call insights help businesses make conversations more relevant and useful.
                    </p>
                  </div>

                  {/* 2. Improves Lead Quality and Qualification */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      2. IMPROVES LEAD QUALITY AND QUALIFICATION
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Not every person contacted through a campaign is a qualified lead. Some prospects may have genuine purchase intent, while others may only be exploring available options.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Conversation analytics helps businesses understand customer interest by analysing responses, questions, and call outcomes.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, a real estate business may identify customers who are actively searching for properties, comparing prices, or planning to purchase within a specific period.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Understanding how conversation analytics helps improve lead quality allows businesses to:
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                      <li>Identify interested prospects.</li>
                      <li>Separate qualified leads from low-interest enquiries.</li>
                      <li>Prioritise follow-ups.</li>
                      <li>Improve lead allocation.</li>
                    </ul>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      This makes conversation insights valuable for businesses that want to focus on prospects with stronger conversion potential.
                    </p>
                  </div>

                  {/* 3. Understands Customer Sentiment */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      3. UNDERSTANDS CUSTOMER SENTIMENT
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Customer sentiment provides useful information about how people respond during conversations. Call sentiment analysis can help identify whether a customer response is positive, neutral, or negative.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example:
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                      <li>Positive responses may indicate interest in a product or service.</li>
                      <li>Negative responses may highlight dissatisfaction or objections.</li>
                      <li>Neutral responses may indicate that more information is required.</li>
                    </ul>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Voice analytics can help businesses understand customer reactions and identify areas where communication needs improvement.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-1"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      These insights also contribute to better customer experience analytics by showing how customers respond to different campaign messages.
                    </p>
                  </div>

                  {/* 4. Improves Calling Scripts and Conversation Strategies */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      4. IMPROVES CALLING SCRIPTS AND CONVERSATION STRATEGIES
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A calling script that works for one audience may not work for another. Businesses need to understand which messages generate interest and which parts of a conversation cause customers to lose interest.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      AI conversation intelligence helps identify successful conversation patterns by analysing repeated customer interactions.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Businesses can use these insights to:
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                      <li>Improve opening statements.</li>
                      <li>Simplify complicated explanations.</li>
                      <li>Address common customer concerns.</li>
                      <li>Adjust follow-up messages.</li>
                      <li>Make conversations more relevant.</li>
                    </ul>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Sales call analytics can also help businesses understand which conversation approaches are associated with better sales outcomes.
                    </p>
                  </div>

                  {/* 5. Helps Optimise Campaign Performance */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      5. HELPS OPTIMISE CAMPAIGN PERFORMANCE
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Call analytics campaign optimization involves using conversation data and call outcomes to identify opportunities for improvement.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, a business may discover that calls made to one customer segment generate more positive responses than calls made to another segment.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Understanding how AI call analytics improves campaign performance helps businesses make data-driven decisions instead of relying on assumptions.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Businesses can review:
                    </p>
                    <ul className="space-y-1.5 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                      <li>Successful and unsuccessful call outcomes.</li>
                      <li>Customer response patterns.</li>
                      <li>Frequently reported objections.</li>
                      <li>Lead qualification results.</li>
                      <li>Follow-up requirements.</li>
                    </ul>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Learning how to use call outcomes to optimise AI calling campaigns helps businesses refine their targeting, messaging, and follow-up strategies.
                    </p>
                  </div>

                  {/* 6. Makes Call Review More Efficient */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      6. MAKES CALL REVIEW MORE EFFICIENT
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Manually reviewing every recorded conversation can take considerable time, particularly when businesses manage large calling campaigns.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Call analytics software can help organise and analyse conversation information. Depending on its capabilities, it may support automated transcript generation, keyword identification, and conversation summaries.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Businesses can use call monitoring software and call recording software alongside analytics tools to review conversations and identify areas for improvement.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-1"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      This can make it easier to review large volumes of interactions without depending entirely on manual listening.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: IMPORTANT METRICS TO TRACK */}
              <section id="important-metrics-to-track" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  IMPORTANT METRICS TO TRACK IN AI CALLING CAMPAIGNS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should measure more than the total number of calls made. Combining campaign performance metrics with conversation insights provides a clearer understanding of results.
                  </p>

                  {/* Metrics Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-2/5 align-top">Metric</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/5 align-top">What It Measures</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call connection rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of calls successfully connected</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call outcome</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Whether a call resulted in an enquiry, appointment, follow-up, or unsuccessful interaction</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead qualification rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of contacted prospects who meet campaign requirements</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer sentiment</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customer reactions during conversations</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Common objections</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Frequently reported reasons for hesitation or rejection</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Conversion rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of prospects completing the desired action</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Follow-up requirements</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Number of customers who need another interaction</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call duration</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Average length of customer conversations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use call center analytics and call center reporting to monitor these metrics and understand campaign performance.
                  </p>
                </div>
              </section>

              {/* SECTION 4: HOW TO USE CALL TRANSCRIPTS */}
              <section id="using-call-transcripts" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO USE CALL TRANSCRIPTS TO IMPROVE CALLING CAMPAIGNS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Call transcripts convert voice conversations into text, making it easier to review customer questions, objections, and responses.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Understanding how to use call transcripts to improve calling campaigns can help businesses identify patterns that may otherwise be missed.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Here are some practical applications:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Identify repeated questions:</strong> Find the questions customers frequently ask and improve the information provided during calls.
                    </li>
                    <li>
                      <strong>Discover customer objections:</strong> Identify concerns about pricing, eligibility, product features, or service requirements.
                    </li>
                    <li>
                      <strong>Improve conversation quality:</strong> Find parts of conversations where customers appear confused or lose interest.
                    </li>
                    <li>
                      <strong>Refine campaign messaging:</strong> Use customer responses to make calling scripts clearer and more relevant.
                    </li>
                    <li>
                      <strong>Improve follow-up decisions:</strong> Identify customers who requested additional information or showed interest in future interactions.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These findings can support sales call analysis and help businesses improve their overall communication approach.
                  </p>
                </div>
              </section>

              {/* SECTION 5: AI CALL ANALYTICS SOFTWARE AND OTHER ANALYTICS TOOLS */}
              <section id="software-and-tools" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALL ANALYTICS SOFTWARE AND OTHER ANALYTICS TOOLS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses may use different tools to manage, review, and analyse customer conversations. The right solution depends on campaign size, business requirements, and the level of analysis needed.
                  </p>

                  {/* Software Comparison Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-2/5 align-top">Tool Type</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/5 align-top">Main Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call analytics software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Analyses call data and conversation patterns</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call tracking software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Tracks calls generated through different campaigns or channels</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call monitoring software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Helps review and monitor customer interactions</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call recording software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Records conversations for later review</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Sales analytics software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Helps analyse sales activities and outcomes</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Marketing analytics</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Measures campaign performance across marketing channels</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Speech analytics</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Analyses spoken conversations to identify patterns and keywords</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer experience analytics</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Helps understand customer interactions and experiences</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can combine these tools to build a clearer picture of customer communication and campaign effectiveness. However, individual tools may offer different features, so businesses should evaluate their capabilities before choosing a solution.
                  </p>
                </div>
              </section>

              {/* SECTION 6: HOW DIFFERENT BUSINESSES CAN USE CONVERSATION INSIGHTS */}
              <section id="industry-use-cases" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DIFFERENT BUSINESSES CAN USE CONVERSATION INSIGHTS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Conversation intelligence can support several types of calling campaigns:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Education:</strong> Understand student questions about admissions, eligibility, fees, and deadlines.
                    </li>
                    <li>
                      <strong>Real estate:</strong> Identify property preferences, budget concerns, and purchase timelines.
                    </li>
                    <li>
                      <strong>E-commerce:</strong> Understand customer concerns about products, orders, delivery, and returns.
                    </li>
                    <li>
                      <strong>Financial services:</strong> Identify common questions about payments, loans, and repayment schedules.
                    </li>
                    <li>
                      <strong>Healthcare:</strong> Understand appointment-related enquiries and frequently asked questions while handling sensitive information appropriately.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These applications show how conversation insights can help businesses improve customer communication across different industries.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW CALLIENCE SUPPORTS AI CALLING CAMPAIGNS */}
              <section id="how-callience-supports" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE SUPPORTS AI CALLING CAMPAIGNS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience helps businesses manage customer communication through AI-powered voice agents for inbound and outbound calling workflows.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI calling to support lead qualification, admissions outreach, payment reminders, appointment reminders, outbound follow-ups, and customer re-engagement.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When call outcomes and conversation insights are reviewed alongside these workflows, businesses can identify customer response patterns and opportunities to improve their communication strategies.
                  </p>
                </div>
              </section>

              {/* SECTION 8: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONCLUSION
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI call analytics helps businesses understand customer conversations, identify objections, improve lead quality, and optimise calling campaigns. By combining conversation analytics, call transcript analysis, sentiment insights, and campaign reporting, businesses can make better decisions based on actual customer interactions.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Instead of measuring campaign success only through call volume, businesses should also focus on what happens during conversations. These insights can help improve calling strategies, customer engagement, and overall campaign performance.
                  </p>
                </div>
              </section>

              {/* SECTION 9: FAQS */}
              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={faq.q}
                      className="bg-white rounded-xl border border-card-border overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(openFaq === idx ? null : idx)
                        }
                        aria-expanded={openFaq === idx}
                        aria-controls={`faq-answer-${idx}`}
                        className="w-full py-4 px-5 text-left font-bold text-sm sm:text-base text-primary-black flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <span className="text-sm font-mono text-light-grey">
                          {openFaq === idx ? "—" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="px-5 pb-5 pt-1 text-sm sm:text-base text-dark-grey leading-relaxed border-t border-primary-beige"
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>

        {/* Dynamic Prev / Next Post Navigation */}
        <BlogNavigation currentSlug="ai-call-analytics-campaign-performance" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: How AI Call Analytics Improves Campaign Performance" />
      </div>

      <Footer />
    </div>
  );
}
