"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-inbound-call-handling", label: "What AI Inbound Call Handling Is and How It Differs from IVR" },
  { id: "why-high-volume-overwhelms", label: "Why High-Volume Enquiries Overwhelm Support Teams" },
  { id: "how-it-works-step-by-step", label: "How AI Inbound Call Handling Works Step by Step" },
  { id: "which-enquiries-to-automate", label: "Which Enquiries to Automate First" },
  { id: "what-businesses-have-reported", label: "What Businesses Have Reported: Three Examples" },
  { id: "benefits-and-limitations", label: "Benefits and Limitations of AI Inbound Calling" },
  { id: "how-to-implement", label: "How to Implement AI Inbound Call Handling" },
  { id: "metrics-to-track", label: "Key Metrics to Track" },
  { id: "where-callience-fits", label: "Where Callience Fits" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is AI inbound call handling?",
    a: "AI inbound call handling uses an AI voice agent to answer incoming calls, understand the caller's request and resolve it or route it to the right person. It can book appointments, answer common questions and log issues without a human on the line.",
  },
  {
    q: "2. How does AI help manage high call volumes during peak hours?",
    a: "An AI voice agent can answer many calls at the same time, so callers are not queued. It handles routine enquiries and sends only complex cases to human agents, which keeps wait times low during surges.",
  },
  {
    q: "3. Can AI handle after-hours customer enquiries?",
    a: "Yes. It can answer questions, take bookings or messages and create tickets at any hour. Urgent or complex issues can be flagged for human follow-up when the team is back.",
  },
  {
    q: "4. Does AI inbound call handling replace support agents?",
    a: "No. It takes over repetitive, predictable calls so agents can focus on complex, sensitive or high-value conversations. Most deployments keep a human escalation path.",
  },
  {
    q: "5. How is an AI voice agent different from an IVR?",
    a: "An IVR makes callers press keys through fixed menus. An AI voice agent understands natural speech, can answer varied questions and can complete tasks during the call.",
  },
  {
    q: "6. Which enquiries should be automated first?",
    a: "Start with frequent, low-risk, well-defined calls such as opening hours, order or application status, appointment booking and basic policy or pricing questions.",
  },
];

export default function AIInboundCallHandlingPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-inbound-call-handling");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(true);

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
        {/* Article Header Container */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-12">
          {/* Back link */}
          <div className="mb-3.5 sm:mb-4">
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[802px]">
              <h1
                className="font-normal uppercase text-primary-black text-[32px] sm:text-[46px] lg:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                AI INBOUND CALL HANDLING FOR HIGH-VOLUME CUSTOMER ENQUIRIES
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI inbound call handling answers customer enquiries around the clock, absorbs peak-hour surges, and resolves routine questions without overburdening support teams.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-primary-black pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start">
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-primary-black"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    19th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    7 min read
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    Divyanshu Singh
                  </p>
                </div>

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
        <div className="w-full bg-[#FFFDFB] mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515]">
            <Image
              src="/ai-inbound-call-handling-high-volume-enquiries.png"
              alt="AI Inbound Call Handling for High-Volume Customer Enquiries"
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
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Left Column: Table of Contents */}
            <aside
              ref={asideRef}
              className="lg:col-span-3 relative"
              style={{ minHeight: "500px" }}
            >
              {/* Mobile TOC Accordion Header */}
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setTocOpen(!tocOpen)}
                  aria-expanded={tocOpen}
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
                    className="mt-4 space-y-2.5 text-sm"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {TOC_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          scrollTo(item.id);
                          setTocOpen(false);
                        }}
                        className={`block w-full text-left py-1 text-[15px] transition-colors ${
                          activeSection === item.id
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
                          className={`group flex items-start gap-2 w-full text-left transition-all py-0.5 cursor-pointer ${
                            isActive
                              ? "font-bold text-primary-black"
                              : "text-dark-grey hover:text-primary-black"
                          }`}
                        >
                          <span
                            className={`w-1 h-3 rounded-full mt-1 transition-all shrink-0 ${
                              isActive
                                ? "bg-primary-black"
                                : "bg-transparent group-hover:bg-[#E5E5E5]"
                            }`}
                          />
                          <span className="leading-snug text-[13.5px] xl:text-[14px]">
                            {item.label}
                          </span>
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
                  AI inbound call handling is the use of an AI voice agent to answer incoming customer calls, understand what each caller needs, and either resolve the enquiry or pass it to the right person. It is built for businesses whose phone lines fill with the same questions, spike at predictable hours and go unanswered when staff are busy or offline. Typical examples include telecom, healthcare, education, travel, real estate and retail.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI inbound call handling works in three steps: the AI voice agent answers instantly, identifies the caller&apos;s intent from natural speech, and then either completes the task, such as checking an order status, booking an appointment or logging a complaint, or transfers the call to a human agent with a summary of the conversation. This makes it a practical form of inbound call automation for businesses facing peak-hour surges, missed calls and repetitive questions.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  This guide explains how it works, which enquiries to automate first, what results businesses have reported, and how to deploy it while keeping people in charge of complex cases.
                </p>
              </div>

              {/* SECTION 1: WHAT AI INBOUND CALL HANDLING IS AND HOW IT DIFFERS FROM IVR */}
              <section id="what-is-ai-inbound-call-handling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT AI INBOUND CALL HANDLING IS AND HOW IT DIFFERS FROM IVR
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice agent for customer service combines speech recognition, language understanding and a natural-sounding voice, and connects to business systems such as a CRM, booking tool or billing platform. It listens to the caller, identifies the intent, finds or updates the right information and replies in speech.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Traditional interactive voice response (IVR) works differently. It asks callers to press numbers through a fixed menu, and each branch must be built in advance.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Feature</th>
                          <th className="py-3.5 px-4 w-3/8 align-top">Traditional IVR</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">AI Inbound Call Handling</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">How callers interact</td>
                          <td className="py-3.5 px-4 align-top">Press keys through menu options</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Speak naturally in their own words</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Understanding intent</td>
                          <td className="py-3.5 px-4 align-top">Limited to pre-set menu paths</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Interprets what the caller wants from speech</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Completing tasks</td>
                          <td className="py-3.5 px-4 align-top">Mostly routes calls</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Can answer, book, look up and log during the call</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Handling unexpected questions</td>
                          <td className="py-3.5 px-4 align-top">Often dead-ends or loops</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Can answer from a knowledge base or escalate</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Handoff to humans</td>
                          <td className="py-3.5 px-4 align-top">Basic transfer without context</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Transfer with full call context and transcript</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 2: WHY HIGH-VOLUME ENQUIRIES OVERWHELM SUPPORT TEAMS */}
              <section id="why-high-volume-overwhelms" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY HIGH-VOLUME ENQUIRIES OVERWHELM SUPPORT TEAMS
                </h2>
                <div className="space-y-6">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Call volume is rarely smooth. Four patterns cause most of the pressure:
                  </p>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Peak-hour and event-driven surges
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Calls cluster around opening hours, lunch breaks, billing dates, exam results, sales and service outages. A team sized for the average day cannot cover these spikes, so callers wait or hang up.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Missed and abandoned calls
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Every missed call is an unanswered enquiry, and many callers will not try again. Call-handling gaps are hardest to see because the lost enquiries do not appear in any report unless missed calls are tracked.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Repetitive questions
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A large share of enquiries in most businesses are routine: opening hours, order or application status, pricing, appointment timings, directions and document requirements. They are simple to answer, but they use agent time that complex cases need.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      After-hours enquiries
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Customers call when it suits them, including evenings, weekends and holidays. Staffing round-the-clock human coverage is expensive, so most businesses either miss these calls or rely on voicemail, which many callers do not use.
                    </p>
                  </div>

                  <div className="pt-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3] mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      The result: pressure on reception and support teams
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      When staff constantly switch between ringing phones and in-person work, response quality falls and burnout rises. Reducing the routine call load lets teams focus on cases where judgement and empathy matter.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: HOW AI INBOUND CALL HANDLING WORKS STEP BY STEP */}
              <section id="how-it-works-step-by-step" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI INBOUND CALL HANDLING WORKS STEP BY STEP
                </h2>
                <div className="space-y-4">
                  <ol
                    className="list-decimal pl-5 space-y-3 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>The call is answered immediately:</strong> The AI voice agent picks up on the first ring, so callers do not wait in queues.
                    </li>
                    <li>
                      <strong>The caller states their need in natural speech:</strong> The system converts speech to text and identifies the intent, such as &ldquo;check order status&rdquo; or &ldquo;reschedule appointment&rdquo;.
                    </li>
                    <li>
                      <strong>The agent retrieves or updates information:</strong> It checks the knowledge base or connected systems, for example a booking calendar or CRM record.
                    </li>
                    <li>
                      <strong>The agent resolves the enquiry:</strong> It gives the answer, completes the booking or logs the request directly into backend systems.
                    </li>
                    <li>
                      <strong>Complex or sensitive cases are escalated:</strong> The call transfers to a human agent along with a summary or transcript, so the caller does not repeat themselves.
                    </li>
                    <li>
                      <strong>The outcome is recorded:</strong> The call is transcribed and tagged, which creates data on volumes, topics and outcomes.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When no human is available, for example after hours, the agent can take a message, create a support ticket or schedule an automated callback.
                  </p>
                </div>
              </section>

              {/* SECTION 4: WHICH ENQUIRIES TO AUTOMATE FIRST */}
              <section id="which-enquiries-to-automate" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHICH ENQUIRIES TO AUTOMATE FIRST
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Start with calls that are frequent, predictable and low-risk:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Enquiry Type</th>
                          <th className="py-3.5 px-4 w-1/4 align-top">Automate Fully?</th>
                          <th className="py-3.5 pl-4 pr-0 w-5/12 align-top">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Opening hours, location, directions</td>
                          <td className="py-3.5 px-4 align-top">Yes</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Simple, high volume</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Order, delivery or application status</td>
                          <td className="py-3.5 px-4 align-top">Yes</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Needs CRM or ERP system integration</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment booking and rescheduling</td>
                          <td className="py-3.5 px-4 align-top">Yes</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Needs real-time calendar integration</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Pricing, plans and policy questions</td>
                          <td className="py-3.5 px-4 align-top">Mostly</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Keep the knowledge base current</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Basic troubleshooting</td>
                          <td className="py-3.5 px-4 align-top">Partly</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Escalate when standard steps fail</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Billing disputes and complaints</td>
                          <td className="py-3.5 px-4 align-top">No</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Route to a human agent, with context</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Emotionally sensitive or high-value cases</td>
                          <td className="py-3.5 px-4 align-top">No</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Strictly human-led</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 5: WHAT BUSINESSES HAVE REPORTED: THREE EXAMPLES */}
              <section id="what-businesses-have-reported" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT BUSINESSES HAVE REPORTED: THREE EXAMPLES
                </h2>
                <div className="space-y-5">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The following results come from vendor case studies published by Apifonica, illustrating what is achievable under high call volumes:
                  </p>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      1. Telecom (Sarkor Telecom, Uzbekistan)
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      During outages, daily calls rose from about 1,100 to 17,000, and half of customers went unanswered. After deploying an AI voice agent connected to billing, CRM and network systems, the company reported that 95% of cases were handled end to end by AI and that customer satisfaction rose from 78% to 91%.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      2. Tourism (Haus des Meeres, Vienna)
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Repeated questions about opening hours, tickets and restaurant reservations interrupted staff. The AI voice agent handled 8,539 calls in three months, and 67% of reservations were completed without staff.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      3. Healthcare (ALAB Laboratoria)
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      The company reported that about 80% of inbound calls involve AI processing, with 28% of inbound calls fully automated end to end.
                    </p>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The pattern across all three is consistent: AI absorbs routine call volume, while human teams handle complex exceptions.
                  </p>
                </div>
              </section>

              {/* SECTION 6: BENEFITS AND LIMITATIONS */}
              <section id="benefits-and-limitations" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS AND LIMITATIONS OF AI INBOUND CALLING
                </h2>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Key Benefits
                    </h3>
                    <ul
                      className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      <li>Fewer missed calls and shorter hold times.</li>
                      <li>Consistent, accurate answers to routine questions.</li>
                      <li>Coverage at all hours without round-the-clock shift staffing.</li>
                      <li>Capacity that scales instantly during surges without emergency hiring.</li>
                      <li>Substantially less repetitive workload for support employees.</li>
                      <li>Rich call transcripts and analytics highlighting top customer enquiries.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Operational Limitations to Plan For
                    </h3>
                    <ul
                      className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      <li>
                        <strong>It will not resolve every call:</strong> No AI voice agent handles every enquiry independently; always plan clear human escalation paths.
                      </li>
                      <li>
                        <strong>Answers depend on your information:</strong> Out-of-date policies or pricing will produce inaccurate customer answers.
                      </li>
                      <li>
                        <strong>Integrations determine usefulness:</strong> An agent without CRM, calendar or order access can only answer general questions.
                      </li>
                      <li>
                        <strong>Compliance needs attention:</strong> Disclose that callers are speaking with an automated agent, record calls with appropriate consent, and protect data under applicable privacy laws.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECTION 7: HOW TO IMPLEMENT AI INBOUND CALL HANDLING */}
              <section id="how-to-implement" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO IMPLEMENT AI INBOUND CALL HANDLING
                </h2>
                <div className="space-y-4">
                  <ol
                    className="list-decimal pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Audit your call data:</strong> Review call logs by hour, reasons for calling, missed calls and repeat questions.
                    </li>
                    <li>
                      <strong>Pick two or three high-volume call types:</strong> Choose those with clear answers and low operational risk.
                    </li>
                    <li>
                      <strong>Prepare accurate knowledge:</strong> Write and verify the content the agent will use, including edge cases.
                    </li>
                    <li>
                      <strong>Connect your systems:</strong> Integrate telephony, CRM, booking and ticketing tools so calls conclude with tangible actions.
                    </li>
                    <li>
                      <strong>Design escalation rules:</strong> Define when and how calls transfer to a person, and what context is passed on.
                    </li>
                    <li>
                      <strong>Pilot with real calls:</strong> Listen to audio samples, correct gaps and fine-tune response phrasing.
                    </li>
                    <li>
                      <strong>Expand gradually:</strong> Add additional call types, coverage hours or regional languages once performance stabilizes.
                    </li>
                  </ol>
                </div>
              </section>

              {/* SECTION 8: KEY METRICS TO TRACK */}
              <section id="metrics-to-track" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  KEY METRICS TO TRACK
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Monitor these essential indicators to measure operational performance:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>Answer rate and missed-call rate across all hours.</li>
                    <li>Average wait time before a caller speaks with the agent.</li>
                    <li>Containment rate: percentage of calls resolved without human intervention.</li>
                    <li>Escalation rate and primary reasons for transfers.</li>
                    <li>Peak-hour call abandonment rate.</li>
                    <li>Customer satisfaction (CSAT) scores following AI-handled calls.</li>
                    <li>Agent workload and reduction in time spent on repetitive calls.</li>
                    <li>Total operational cost per handled enquiry.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 9: WHERE CALLIENCE FITS */}
              <section id="where-callience-fits" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHERE CALLIENCE FITS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience provides enterprise-grade AI calling for both inbound customer support and outbound communication. For high-volume customer enquiries, the inbound voice platform answers calls on the first ring, resolves routine questions via deep CRM and ERP integrations, and seamlessly escalates complex conversations to human agents with full context.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    With support for 65+ regional languages and dialects, native interruptions, and sub-second voice latency, Callience ensures your business delivers professional customer service around the clock.
                  </p>
                </div>
              </section>

              {/* SECTION 10: CONCLUSION */}
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
                    AI inbound call handling gives businesses a practical way to manage high call volumes without leaving callers waiting. It answers instantly, resolves repetitive enquiries, covers after-hours calls and hands complex cases to people with full context.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The strongest results come from starting with a few high-volume call types, keeping the knowledge base accurate, connecting the right systems and measuring outcomes. Used this way, it protects customer experience while easing the load on support and reception teams.
                  </p>
                </div>
              </section>

              {/* SECTION 11: FAQS */}
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
        <BlogNavigation currentSlug="ai-inbound-call-handling-high-volume-enquiries" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
