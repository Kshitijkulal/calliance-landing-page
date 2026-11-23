"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-human-collaboration", label: "What Is AI Human Collaboration in Call Centers?" },
  { id: "how-ai-voice-agents-work-with-human-teams", label: "How AI Voice Agents Work With Human Calling Teams" },
  { id: "ai-voice-agents-vs-human-agents", label: "AI Voice Agents vs Human Agents: Who Handles What?" },
  { id: "when-to-transfer-calls-to-humans", label: "When Should AI Voice Agents Transfer Calls to Humans?" },
  { id: "how-human-handoff-works", label: "How Does AI Voice Agent Human Handoff Work?" },
  { id: "what-is-human-in-the-loop-voice-ai", label: "What Is Human-in-the-Loop Voice AI?" },
  { id: "how-agent-assist-supports-teams", label: "How AI Agent Assist Supports Human Teams" },
  { id: "benefits-of-combining-ai-and-humans", label: "Benefits of Combining AI Voice Agents and Human Agents" },
  { id: "challenges-to-consider", label: "Challenges Businesses Should Consider" },
  { id: "how-to-implement-hybrid-team", label: "How to Implement a Hybrid Calling Team" },
  { id: "how-to-measure-performance", label: "How to Measure Hybrid Call Center Performance" },
  { id: "callience-support", label: "How Callience Supports AI-Powered Workflows" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. Can AI voice agents work with human agents?",
    a: "Yes. AI voice agents can work alongside human agents by managing routine calls, answering common questions and qualifying leads. They can transfer complex or sensitive conversations to human employees when required.",
  },
  {
    q: "2. How do AI voice agents work with human calling teams?",
    a: "AI voice agents handle predefined calling tasks, collect customer information and identify the purpose of each conversation. When human support is needed, they transfer the call along with relevant details and a conversation summary.",
  },
  {
    q: "3. When should AI voice agents transfer calls to humans?",
    a: "AI should transfer calls when customers request a person, raise complex complaints, need a policy exception, discuss sensitive matters or ask questions the AI cannot answer reliably.",
  },
  {
    q: "4. How do human agents manage AI-escalated calls?",
    a: "Human agents review the AI-generated summary, understand the reason for escalation and continue the conversation. They should have access to the information already collected so customers do not need to repeat themselves.",
  },
  {
    q: "5. What are the benefits of combining AI voice agents and human agents?",
    a: "The main benefits include improved call handling capacity, reduced repetitive work, faster routine assistance, better lead qualification and more time for human agents to focus on important customer interactions.",
  },
  {
    q: "6. How can businesses start using a hybrid call center model?",
    a: "Businesses can begin by automating one repetitive calling task, defining human handoff rules, connecting relevant customer records, training employees and measuring the results before expanding the workflow.",
  },
];

export default function AIHumanCollaborationPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-human-collaboration");
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
                AI HUMAN COLLABORATION IN CALL CENTERS: CAN AI VOICE AGENTS WORK ALONGSIDE HUMAN TEAMS?
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Learn how AI voice agents and human teams share calls, manage escalations and improve customer support in hybrid call centers.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-primary-black pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-primary-black"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    20th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    5 min read
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
        <div className="w-full bg-[#FFFDFB] mb-8 sm:mb-12 md:mb-16 overflow-hidden min-h-[160px]">
          <div className="relative w-full aspect-[1440/515]">
            <Image
              src="/ai-human-collaboration-in-call-centers.png"
              alt="AI Human Collaboration in Call Centers: Can AI Voice Agents Work Alongside Human Teams?"
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

            {/* Right Column: Article Body */}
            <article
              ref={articleRef}
              className="lg:col-span-9 w-full max-w-[743px] text-primary-black"
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-5 mb-14">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI voice agents can work alongside human agents in call centers by handling routine customer interactions and transferring complex conversations to human employees when needed. Businesses can use AI calling agents to answer frequently asked questions, qualify sales leads, schedule appointments, send reminders and collect customer information. Human agents can then focus on customer complaints, sales negotiations, technical support and conversations that require empathy or personal judgement.
                </p>

                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  This approach is called <strong>AI human collaboration in call centers</strong>, also known as a hybrid call center model. It combines AI-powered call automation with human expertise, allowing businesses to manage customer enquiries more efficiently while maintaining access to personal assistance. With features such as AI voice agent human handoff and human-in-the-loop voice AI, both AI agents and human teams can work together throughout the customer communication process.
                </p>

                {/* Callout Summary Card */}
                <div className="bg-white rounded-2xl border border-card-border p-6 sm:p-8 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-black text-white flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-[18px] sm:text-[20px] text-primary-black mb-2"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Core Principle of Hybrid Call Centers
                      </h4>
                      <p
                        className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.5]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        The goal of AI calling is not to eliminate human involvement. It is to ensure each call is routed to and handled by the right resource — automating repetitive queries instantly while reserving human empathy and judgement for high-impact interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 1: WHAT IS AI HUMAN COLLABORATION */}
              <section id="what-is-ai-human-collaboration" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI HUMAN COLLABORATION IN CALL CENTERS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI human collaboration in call centers is a working model where AI voice agents and human calling teams share customer interactions. AI handles predefined, repetitive tasks, while human agents take over conversations that need deeper understanding, flexibility or personal attention.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    In a hybrid AI human call center, both work as part of the same customer service process. AI can collect information, identify customer intent and provide basic assistance. When a conversation becomes complicated, an AI voice agent can transfer the call to an appropriate human agent along with a summary of the interaction.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The goal is not to remove human involvement. It is to make sure each call is handled by the right resource.
                  </p>
                </div>
              </section>

              {/* SECTION 2: HOW DO AI VOICE AGENTS WORK WITH HUMAN CALLING TEAMS */}
              <section id="how-ai-voice-agents-work-with-human-teams" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DO AI VOICE AGENTS WORK WITH HUMAN CALLING TEAMS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-4"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A hybrid call center follows a connected workflow in which AI and human agents handle different stages of a customer conversation:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <h3 className="font-bold text-[17px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            Call Initiation
                          </h3>
                          <p className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            An AI voice agent answers an incoming call instantly or makes an outbound call based on an approved campaign.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <h3 className="font-bold text-[17px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            Customer Identification
                          </h3>
                          <p className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            It understands the caller&apos;s intent and collects relevant information through natural conversation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <h3 className="font-bold text-[17px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            Routine Assistance
                          </h3>
                          <p className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            It answers common questions, shares approved information, qualifies leads or schedules appointments without delay.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          4
                        </span>
                        <div>
                          <h3 className="font-bold text-[17px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            Escalation Decision
                          </h3>
                          <p className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            If the customer requests a person or the issue exceeds the AI&apos;s configured capabilities, the agent initiates an automated handoff.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          5
                        </span>
                        <div>
                          <h3 className="font-bold text-[17px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            Human Intervention
                          </h3>
                          <p className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            The call is routed to the relevant human agent alongside available customer details and conversation summary.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          6
                        </span>
                        <div>
                          <h3 className="font-bold text-[17px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            Follow-Up and Records
                          </h3>
                          <p className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                            The human agent resolves the issue, records the outcome and updates the customer record in the CRM.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This explains how AI and human agents work together in call centers without forcing every customer interaction through the same rigid process.
                  </p>
                </div>
              </section>

              {/* SECTION 3: AI VOICE AGENTS VS HUMAN AGENTS: WHO HANDLES WHAT */}
              <section id="ai-voice-agents-vs-human-agents" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENTS VS HUMAN AGENTS: WHO HANDLES WHAT?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-4"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Both AI and human agents have different strengths. A successful hybrid call center assigns tasks according to the complexity and sensitivity of each conversation:
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Task</th>
                          <th className="py-3.5 px-4 w-3/8 align-top">AI Voice Agent</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">Human Agent</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Frequently asked questions</td>
                          <td className="py-3.5 px-4 align-top">Handles routine questions instantly</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Handles unusual or detailed queries</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead qualification</td>
                          <td className="py-3.5 px-4 align-top">Collects requirements and filters leads</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Conducts detailed sales discussions</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment reminders</td>
                          <td className="py-3.5 px-4 align-top">Makes calls and confirms schedules</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Handles special requests and changes</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer complaints</td>
                          <td className="py-3.5 px-4 align-top">Identifies and records the issue</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Investigates and resolves complaints</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Payment reminders</td>
                          <td className="py-3.5 px-4 align-top">Shares approved reminders</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Handles disputes and sensitive discussions</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Sales negotiations</td>
                          <td className="py-3.5 px-4 align-top">Collects interest and schedules callbacks</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Negotiates and closes complex deals</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Complex support</td>
                          <td className="py-3.5 px-4 align-top">Collects initial diagnostic information</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Provides personalised, deep assistance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 4: WHEN SHOULD AI VOICE AGENTS TRANSFER CALLS TO HUMANS */}
              <section id="when-to-transfer-calls-to-humans" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHEN SHOULD AI VOICE AGENTS TRANSFER CALLS TO HUMANS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An effective AI voice agent human handoff process needs clear escalation rules. AI should never keep a customer in an automated conversation when the situation requires human assistance.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Common situations where AI to human handoff is appropriate include:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2.5 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Customer requests a person:</strong> The caller directly asks to speak with a human agent.
                    </li>
                    <li>
                      <strong>Complex complaints:</strong> The customer is frustrated, dissatisfied or needs a personalised resolution.
                    </li>
                    <li>
                      <strong>Payment or billing disputes:</strong> The issue requires manual investigation or an authorised financial decision.
                    </li>
                    <li>
                      <strong>Sensitive conversations:</strong> The call involves medical, legal, financial or other high-impact confidential matters.
                    </li>
                    <li>
                      <strong>Unclear customer intent:</strong> The AI cannot understand the customer&apos;s request after a limited number of attempts.
                    </li>
                    <li>
                      <strong>Policy exceptions:</strong> The customer asks for something outside the AI&apos;s approved business rules.
                    </li>
                    <li>
                      <strong>Failed transactions or bookings:</strong> The AI cannot complete the requested action or verify the external system result.
                    </li>
                  </ul>


                </div>
              </section>

              {/* SECTION 5: HOW DOES AI VOICE AGENT HUMAN HANDOFF WORK */}
              <section id="how-human-handoff-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DOES AI VOICE AGENT HUMAN HANDOFF WORK?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice agent handoff is the process of transferring a customer conversation from an AI agent to a human agent. The quality of this transfer matters because customers should not have to explain the same issue repeatedly.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A well-designed handoff generally includes:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Customer Information
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Name, phone number and relevant account or booking details.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Reason for the Call
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        A short, concise explanation of what the caller specifically needs.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Conversation Summary
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Important preferences and context shared during the AI conversation.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Actions Already Taken
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Answers provided, information collected or verification steps attempted.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Reason for Escalation
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Why human intervention is required (e.g., custom pricing, complaint).
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Pending Action
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        What the human agent needs to resolve or follow up on.
                      </p>
                    </div>
                  </div>

                  {/* Real-World Handoff Scenario Box */}
                  <div className="bg-white rounded-2xl border border-card-border p-6 mt-6">
                    <h3
                      className="font-bold text-[18px] text-primary-black mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Practical Example: Real Estate Buyer Handoff
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A customer calling a real estate developer tells the AI voice agent that they are interested in a two-bedroom apartment, have a specific budget and want a site visit on Saturday. If the customer asks for a detailed discussion about pricing and payment schedules, the AI transfers the call to a sales executive with this full context pre-populated.
                    </p>
                    <p
                      className="font-semibold text-primary-black text-[15px] sm:text-[16px] leading-[1.4] mt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      The human agent greets the caller by name, acknowledges their Saturday site visit interest, and immediately discusses the pricing structure — without starting from scratch.
                    </p>
                  </div>

                  {/* Warm vs Cold Transfer Section */}
                  <div className="pt-6">
                    <h3
                      className="font-bold text-[22px] sm:text-[24px] text-primary-black mb-4"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Warm Transfer vs Cold Transfer
                    </h3>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left text-sm sm:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                            <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Transfer Type</th>
                            <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">How It Works</th>
                          </tr>
                        </thead>
                        <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                          <tr>
                            <td className="py-3.5 pr-4 pl-0 font-bold align-top whitespace-nowrap">Warm transfer</td>
                            <td className="py-3.5 pl-4 pr-0 align-top">
                              The human agent receives relevant context or a summary before taking over the conversation.
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3.5 pr-4 pl-0 font-bold align-top whitespace-nowrap">Cold transfer</td>
                            <td className="py-3.5 pl-4 pr-0 align-top">
                              The call is transferred without a detailed briefing, so the customer may need to explain the issue again.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p
                      className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4] mt-3"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For complex support, complaints and sales discussions, a <strong>warm transfer</strong> is generally far more effective because it preserves conversation continuity and customer goodwill.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 6: WHAT IS HUMAN-IN-THE-LOOP VOICE AI */}
              <section id="what-is-human-in-the-loop-voice-ai" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS HUMAN-IN-THE-LOOP VOICE AI?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Human in the loop voice AI means human employees remain actively involved in supervising, guiding or taking control of AI-powered calling workflows.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Instead of allowing AI to make every decision independently, businesses define where human approval or intervention is strictly necessary. Human teams review call outcomes, manage escalations, correct inaccurate information and handle conversations that require discretion.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This governance approach helps businesses maintain strict brand quality control over customer communication while continuing to benefit from high-speed AI automation.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW AI CALL CENTER AGENT ASSIST SUPPORTS HUMAN TEAMS */}
              <section id="how-agent-assist-supports-teams" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI CALL CENTER AGENT ASSIST SUPPORTS HUMAN TEAMS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI collaboration is not limited to transferring calls. AI call center agent assist tools can also support human agents while they are actively speaking with customers.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Depending on the platform and configuration, these agent assist tools can:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>Generate real-time live call transcripts during the conversation.</li>
                    <li>Display relevant information from approved knowledge sources instantly.</li>
                    <li>Suggest accurate responses to common or technical customer questions.</li>
                    <li>Summarise long conversations immediately after calls complete.</li>
                    <li>Highlight important customer details, sentiment, and buying intent.</li>
                    <li>Help agents complete follow-up notes, ticketing and CRM updates in seconds.</li>
                  </ul>

                  <div className="bg-white rounded-xl border border-card-border p-5 mt-4">
                    <p
                      className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      <strong>Key Distinction:</strong> An <em>AI voice agent</em> speaks directly with callers on the line, while an <em>AI agent assist tool</em> listens and aids a human employee who is already managing the conversation. Together, these capabilities make a hybrid call center significantly faster without compromising control.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: BENEFITS OF COMBINING AI VOICE AGENTS AND HUMAN AGENTS */}
              <section id="benefits-of-combining-ai-and-humans" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF COMBINING AI VOICE AGENTS AND HUMAN AGENTS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-4"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A hybrid calling model offers several practical, proven benefits for growing businesses:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-primary-black text-white flex items-center justify-center font-bold text-sm">
                          1
                        </span>
                        <h3 className="font-bold text-[17px] text-primary-black" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                          Better Call Handling Capacity
                        </h3>
                      </div>
                      <p className="font-medium text-primary-black text-[14px] sm:text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        AI can manage multiple routine interactions simultaneously, subject to platform and telephony capacity, while human agents focus on conversations that need attention.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-primary-black text-white flex items-center justify-center font-bold text-sm">
                          2
                        </span>
                        <h3 className="font-bold text-[17px] text-primary-black" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                          Reduced Repetitive Workload
                        </h3>
                      </div>
                      <p className="font-medium text-primary-black text-[14px] sm:text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Human teams spend far less time answering the same basic questions or making repetitive appointment reminder calls every single day.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-primary-black text-white flex items-center justify-center font-bold text-sm">
                          3
                        </span>
                        <h3 className="font-bold text-[17px] text-primary-black" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                          Faster Customer Assistance
                        </h3>
                      </div>
                      <p className="font-medium text-primary-black text-[14px] sm:text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Customers receive immediate answers to common enquiries on the very first ring without suffering through long call center hold queues.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-primary-black text-white flex items-center justify-center font-bold text-sm">
                          4
                        </span>
                        <h3 className="font-bold text-[17px] text-primary-black" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                          Improved Lead Management
                        </h3>
                      </div>
                      <p className="font-medium text-primary-black text-[14px] sm:text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        AI pre-qualifies inbound and outbound leads, instantly passing warm, high-intent prospects to sales executives alongside complete interest profiles.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-primary-black text-white flex items-center justify-center font-bold text-sm">
                          5
                        </span>
                        <h3 className="font-bold text-[17px] text-primary-black" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                          Consistent Customer Communication
                        </h3>
                      </div>
                      <p className="font-medium text-primary-black text-[14px] sm:text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        AI consistently adheres to approved knowledge bases, compliance scripts, and business guidelines across hundreds of calls without fatigue.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-primary-black text-white flex items-center justify-center font-bold text-sm">
                          6
                        </span>
                        <h3 className="font-bold text-[17px] text-primary-black" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                          Better Use of Human Expertise
                        </h3>
                      </div>
                      <p className="font-medium text-primary-black text-[14px] sm:text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Human telecallers and support specialists can dedicate their time and emotional energy to intricate problem-solving, empathetic care, and deal closing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 9: CHALLENGES BUSINESSES SHOULD CONSIDER */}
              <section id="challenges-to-consider" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CHALLENGES BUSINESSES SHOULD CONSIDER
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI and human collaboration also needs proper planning. Poorly configured workflows can create frustrating customer experiences.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should carefully address these critical areas:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2.5 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Incorrect responses:</strong> AI should rely strictly on verified, approved information and immediately escalate questions it cannot answer reliably.
                    </li>
                    <li>
                      <strong>Poor handoffs:</strong> Human agents must receive useful, structured context before taking over so the customer is not forced to start over.
                    </li>
                    <li>
                      <strong>Customer frustration:</strong> Customers should be able to request human assistance easily without feeling trapped in an automated conversational loop.
                    </li>
                    <li>
                      <strong>Data privacy:</strong> Call recordings, real-time transcripts and customer records must be stored securely and handled according to privacy standards.
                    </li>
                    <li>
                      <strong>Human training:</strong> Employees need thorough training to quickly interpret AI-generated summaries and seamlessly resume live conversations.
                    </li>
                    <li>
                      <strong>Clear accountability:</strong> Businesses must define explicit ownership for escalations, final approvals, and complex customer resolutions.
                    </li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Furthermore, AI should always be clearly identified as an automated digital assistant rather than deceptively pretending to be a human representative.
                  </p>
                </div>
              </section>

              {/* SECTION 10: HOW TO IMPLEMENT A HYBRID AI AND HUMAN CALLING TEAM */}
              <section id="how-to-implement-hybrid-team" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO IMPLEMENT A HYBRID AI AND HUMAN CALLING TEAM
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can introduce a hybrid calling workflow pragmatically without attempting to overhaul their entire contact center overnight:
                  </p>

                  <ol
                    className="list-decimal pl-5 space-y-3 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Identify repetitive calls:</strong> Start with high-volume, low-risk interactions such as FAQs, appointment confirmations, lead qualification or basic follow-ups.
                    </li>
                    <li>
                      <strong>Define escalation rules:</strong> Clearly identify which specific customer situations, keywords, or sentiment triggers require immediate human intervention.
                    </li>
                    <li>
                      <strong>Connect business systems:</strong> Integrate the AI calling platform with your CRM, ticketing systems, and customer database so data flows bi-directionally.
                    </li>
                    <li>
                      <strong>Prepare the human team:</strong> Train agents on reviewing AI call summaries, navigating handoffs smoothly, and leveraging agent-assist prompts.
                    </li>
                    <li>
                      <strong>Test the workflow:</strong> Conduct controlled pilot runs with actual calls to assess speech recognition accuracy, transfer reliability, and caller feedback.
                    </li>
                    <li>
                      <strong>Measure and iterate:</strong> Track first-call resolution, handoff success rates, and customer sentiment, making refinements before expanding automation scope.
                    </li>
                  </ol>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Starting with a well-scoped use case makes it easy to discover edge cases and optimize the collaboration process before rolling out to more departments.
                  </p>
                </div>
              </section>

              {/* SECTION 11: HOW TO MEASURE HYBRID CALL CENTER PERFORMANCE */}
              <section id="how-to-measure-performance" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO MEASURE HYBRID CALL CENTER PERFORMANCE
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should evaluate the overall customer outcome rather than focusing solely on how many calls AI handles independently.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Useful metrics to track include:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        First Call Resolution (FCR)
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Percentage of customer issues resolved without requiring another call.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        AI Resolution Rate
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Percentage of eligible calls successfully completed end-to-end by AI.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Handoff Rate & Categorisation
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Percentage of calls transferred to human agents, categorised by specific trigger reasons.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Time to Human Agent
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Elapsed time between an escalation trigger and the human agent picking up.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Repeat Call Rate
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Number of customers calling again about the exact same unresolved problem.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Customer Satisfaction (CSAT)
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Post-interaction caller ratings and feedback scores.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-card-border p-4 sm:col-span-2">
                      <h4 className="font-bold text-[16px] text-primary-black mb-1" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Agent After-Call Work (ACW)
                      </h4>
                      <p className="text-dark-grey text-[14px]" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
                        Time spent by human agents logging notes, categorizing outcomes, and updating CRM records manually.
                      </p>
                    </div>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[15px] sm:text-[16px] leading-[1.4] pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A low handoff rate does not automatically indicate superior performance. The genuine objective is to resolve customer inquiries accurately and pleasantly, whether the final touchpoint is handled by AI or human expertise.
                  </p>
                </div>
              </section>

              {/* SECTION 12: WHERE CALLIENCE FITS */}
              <section id="callience-support" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE CAN SUPPORT AI-POWERED CALLING WORKFLOWS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience by Career Plan B is focused on AI-powered calling workflows that help businesses manage customer communication. As organisations explore AI agents for call centers, they should consider how automated calling fits into their existing sales, support and customer management processes.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A well-planned AI calling strategy can help businesses automate repetitive conversations while keeping human teams involved in important customer interactions.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Explore{" "}
                    <Link
                      href="/#features"
                      className="font-semibold underline hover:text-black transition-colors"
                    >
                      Callience voice AI platform
                    </Link>{" "}
                    to learn more about{" "}
                    <Link
                      href="/#how-it-works"
                      className="font-semibold underline hover:text-black transition-colors"
                    >
                      AI-powered calling workflows
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/blogs/ai-calling-vs-traditional-telecalling"
                      className="font-semibold underline hover:text-black transition-colors"
                    >
                      hybrid call center automation
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* SECTION 13: CONCLUSION */}
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
                    AI voice agents can work effectively alongside human agents when businesses define clear responsibilities and escalation rules. AI can manage repetitive calls and routine enquiries, while human teams focus on complex problems, sensitive conversations and personalised support.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The future of the hybrid call center is not simply AI versus humans. It is about combining automation with human judgement to create a more responsive and reliable customer experience.
                  </p>
                </div>
              </section>

              {/* SECTION 14: FAQS */}
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
        <BlogNavigation currentSlug="ai-human-collaboration-in-call-centers" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
