"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-voice-agent", label: "What Is an AI Voice Agent?" },
  { id: "how-do-they-work", label: "How Do AI Voice Agents Work?" },
  { id: "technologies-used", label: "What Technologies Are Used in AI Voice Agents?" },
  { id: "what-can-it-do", label: "What Can an AI Voice Agent Do for Businesses?" },
  { id: "examples-different-businesses", label: "AI Voice Agent Examples for Different Businesses" },
  { id: "comparison-ivr-telecalling", label: "AI Voice Agent vs Traditional IVR vs Manual Telecalling" },
  { id: "key-benefits", label: "What Are the Key Benefits of AI Voice Agents?" },
  { id: "limitations", label: "What Are the Limitations of AI Voice Agents?" },
  { id: "how-to-get-started", label: "How Can Businesses Get Started with AI Voice Automation?" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Voice Agents" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is an AI voice agent in simple words?",
    a: "An AI voice agent is software that communicates with people through phone calls using artificial intelligence. It understands spoken questions and generates relevant voice responses.",
  },
  {
    q: "2. How do AI voice agents work?",
    a: "They use speech recognition to convert spoken words into text, AI models to understand customer intent and generate responses, and text-to-speech technology to communicate through audio.",
  },
  {
    q: "3. What is the difference between an AI voice agent and an AI voice bot?",
    a: "The terms are sometimes used interchangeably. An AI voice bot generally refers to an automated voice-based conversational system, while an AI voice agent often describes a system with broader conversational and task-handling capabilities.",
  },
  {
    q: "4. Can AI voice agents make outbound calls?",
    a: "Yes. Depending on the platform, they can make outbound calls for lead qualification, customer follow-ups, appointment reminders and payment reminders.",
  },
  {
    q: "5. Can AI voice agents communicate in multiple languages?",
    a: "Yes. Many platforms support multiple languages, although language availability and communication quality depend on their speech recognition and voice-generation capabilities.",
  },
  {
    q: "6. Are AI voice agents better than traditional IVR systems?",
    a: "AI voice agents are more flexible for natural conversations, while traditional IVR systems are useful for structured menus and basic call routing. The right option depends on business requirements.",
  },
  {
    q: "7. Can small businesses and startups use AI voice agents?",
    a: "Yes. Small businesses and startups can use AI voice agents for repetitive calling activities such as lead follow-ups, appointment reminders and customer enquiries.",
  },
  {
    q: "8. Do AI voice agents replace human telecallers?",
    a: "No. They automate suitable repetitive conversations, while human telecallers remain important for complex enquiries, negotiations and situations requiring personal judgment.",
  },
];

export default function WhatIsAnAIVoiceAgentPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-voice-agent");
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
                WHAT IS AN AI VOICE AGENT?
                <br className="hidden sm:inline" /> HOW IT WORKS FOR BUSINESS
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[580px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                An AI voice agent communicates with customers through phone calls using natural conversations, helping businesses automate customer communication, manage enquiries and improve efficiency.
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
                    18th November
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
              src="/what-is-an-ai-voice-agent-how-it-works-for-business.png"
              alt="What Is an AI Voice Agent? How It Works for Business"
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
              <div className="lg:hidden mb-8">
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
                  An <strong>AI voice agent</strong> is an artificial intelligence-powered system that communicates with customers through phone calls using natural, human-like conversations. It listens to spoken questions, understands customer intent and generates relevant voice responses using technologies such as speech recognition, language models and text-to-speech. Unlike traditional automated calling systems, an AI voice agent can respond to different customer queries and manage conversations based on their requirements.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Businesses use <strong>AI voice technology</strong> to automate lead qualification, customer follow-ups, appointment reminders, payment reminders and customer re-engagement. These systems work as an AI voice assistant or AI voice bot, helping MSMEs, startups and growing businesses manage repetitive calling tasks, handle customer enquiries and improve communication efficiency. This guide explains how AI voice agents work, their business applications, benefits, limitations and practical uses.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AN AI VOICE AGENT? */}
              <section id="what-is-ai-voice-agent" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AN AI VOICE AGENT?
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    An AI voice agent is a software application that uses artificial intelligence to communicate with people through spoken conversations. It can handle inbound and outbound calls, understand customer requirements, answer questions and perform configured tasks.
                  </p>
                  <p>An AI voice agent generally combines three technologies:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Speech Recognition (STT):</strong> Converts spoken words into text.
                    </li>
                    <li>
                      <strong>Artificial Intelligence (LLM/NLU):</strong> Understands customer intent and generates relevant responses.
                    </li>
                    <li>
                      <strong>Text-to-Speech (TTS):</strong> Converts written responses into spoken audio.
                    </li>
                  </ul>
                  <p>
                    For example, an education institute can use an AI voice assistant to contact prospective students, ask about their preferred courses, answer basic admission questions and identify leads requiring follow-ups.
                  </p>
                  <p>
                    Unlike basic automated calling systems, AI voice agents can manage conversations based on customer responses rather than following only fixed instructions.
                  </p>
                </div>
              </section>

              {/* SECTION 2: HOW DO AI VOICE AGENTS WORK? */}
              <section id="how-do-they-work" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DO AI VOICE AGENTS WORK?
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    AI voice agents combine speech recognition, language understanding, response generation and voice synthesis to manage conversations.
                  </p>
                  <p>A typical STT-LLM-TTS system follows this process:</p>
                </div>

                {/* Workflow Card */}
                <div className="bg-white border border-card-border rounded-xl p-4 sm:p-5 mb-6 text-center">
                  <p
                    className="font-bold text-[14px] sm:text-[16px] text-primary-black leading-relaxed"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Call Connection → Speech Recognition → Intent Understanding → Response Generation → Voice Communication → Call Completion
                  </p>
                </div>

                <p
                  className="font-semibold text-[17px] sm:text-[18px] text-primary-black mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Let&apos;s understand the major stages.
                </p>

                {/* Step 1 */}
                <div className="mb-6">
                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-3"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    1. Call Initiation
                  </h3>
                  <div
                    className="space-y-3 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <p>The process starts when the AI voice agent connects with a customer.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Inbound Calls:</strong> Customers contact a business, and the AI answers their questions.
                      </li>
                      <li>
                        <strong>Outbound Calls:</strong> The AI contacts customers for enquiries, reminders and follow-ups.
                      </li>
                    </ul>
                    <p>
                      For example, a real estate company can use outbound AI calls to contact people who have submitted property enquiries.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-6">
                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-3"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    2. Speech Recognition
                  </h3>
                  <div
                    className="space-y-3 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <p>
                      Once the call connects, the system listens to the customer and converts their spoken words into text using Automatic Speech Recognition (ASR).
                    </p>
                    <div className="bg-white border border-card-border rounded-xl p-4 my-3 text-[15px] sm:text-[16px] space-y-1">
                      <p><strong>Customer:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                      <p><strong>Recognised Text:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                    </div>
                    <p>
                      This speech-to-text process allows the AI to understand spoken information. Accuracy depends on audio quality, background noise, pronunciation and language support.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-6">
                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-3"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    3. Understanding Customer Intent
                  </h3>
                  <div
                    className="space-y-3 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <p>
                      After recognising the words, the AI identifies what the customer wants using Natural Language Understanding (NLU) and language models.
                    </p>
                    <p>For example:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>&ldquo;What is the course fee?&rdquo;</strong> indicates a pricing enquiry.
                      </li>
                      <li>
                        <strong>&ldquo;When is my appointment?&rdquo;</strong> indicates an appointment-related request.
                      </li>
                      <li>
                        <strong>&ldquo;Please call me tomorrow&rdquo;</strong> indicates a follow-up request.
                      </li>
                    </ul>
                    <p>
                      The AI considers the conversation context and configured business instructions before preparing a response.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="mb-6">
                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-3"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    4. Generating and Speaking Responses
                  </h3>
                  <div
                    className="space-y-3 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <p>
                      The AI prepares an answer using business information, FAQs, configured instructions and connected systems where supported.
                    </p>
                    <div className="bg-white border border-card-border rounded-xl p-4 my-3 text-[15px] sm:text-[16px] space-y-1">
                      <p><strong>Customer:</strong> &ldquo;Do you offer online courses?&rdquo;</p>
                      <p><strong>AI Voice Agent:</strong> &ldquo;Yes, we offer online learning programmes. Would you like to know more about the available courses?&rdquo;</p>
                    </div>
                    <p>
                      The response is converted into spoken audio using Text-to-Speech (TTS). The customer can then respond, allowing the conversation to continue naturally.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: TECHNOLOGIES USED */}
              <section id="technologies-used" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT TECHNOLOGIES ARE USED IN AI VOICE AGENTS?
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Different technologies work together to make AI voice communication possible.
                  </p>
                </div>

                {/* Table of Technologies */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-2/5 align-top">Technology</th>
                        <th className="py-3.5 pl-4 pr-0 w-3/5 align-top">Function</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Automatic Speech Recognition (ASR)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Recognises spoken words</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Speech-to-Text (STT)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Converts speech into text</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Natural Language Understanding (NLU)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Identifies customer intent</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Large Language Model (LLM)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Generates relevant responses</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Text-to-Speech (TTS)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Converts text into audio</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Telephony Integration</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Connects the system with phone calls</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">CRM Integration</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Retrieves and updates customer information</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Some platforms use an STT-LLM-TTS pipeline, while others use direct speech-to-speech technology. The architecture depends on the platform and its capabilities.
                  </p>
                </div>
              </section>

              {/* SECTION 4: WHAT CAN IT DO FOR BUSINESSES */}
              <section id="what-can-it-do" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT CAN AN AI VOICE AGENT DO FOR BUSINESSES?
                </h2>
                <div
                  className="space-y-6 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Businesses can use AI voice automation to manage repetitive conversations and improve customer communication. Some common AI voice agent use cases include:
                  </p>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      1. Lead Qualification
                    </h3>
                    <p className="mb-2">
                      AI voice agents can contact potential customers, ask about their requirements and identify interested leads.
                    </p>
                    <p>
                      For example, an education institute can ask prospective students about their preferred courses, educational background and admission requirements. The responses can help counsellors prioritise follow-ups.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      2. Customer Follow-Ups
                    </h3>
                    <p className="mb-2">
                      Businesses can use AI calling to contact customers who have shown interest in a product or service but have not completed their purchase.
                    </p>
                    <p>
                      For example, a customer who enquired about a home loan can receive a follow-up call to understand whether they need additional information.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      3. Appointment Reminders
                    </h3>
                    <p className="mb-2">
                      Clinics, hospitals, salons and coaching centres can use AI voice agents to remind customers about upcoming appointments and confirm their availability.
                    </p>
                    <p className="italic text-dark-grey">
                      Example: &ldquo;Hello! This is a reminder about your appointment scheduled for tomorrow at 11 AM. Would you like to confirm?&rdquo;
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      4. Payment Reminders
                    </h3>
                    <p className="mb-2">
                      Businesses can automate calls about upcoming or pending payments.
                    </p>
                    <p>
                      For example, an educational institution can use AI calling to remind students or parents about outstanding fees and payment due dates.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      5. Customer Re-Engagement
                    </h3>
                    <p className="mb-2">
                      AI voice agents can contact previous customers or inactive leads to share relevant updates and understand their current requirements.
                    </p>
                    <p>
                      For example, a fitness centre can contact former members about new membership plans.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      6. Frequently Asked Questions
                    </h3>
                    <p className="mb-2">
                      Businesses can configure AI voice agents to answer common questions about pricing, services, working hours and availability using approved business information.
                    </p>
                    <p>
                      Complex enquiries can be transferred to human representatives when required.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 5: EXAMPLES FOR DIFFERENT BUSINESSES */}
              <section id="examples-different-businesses" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT EXAMPLES FOR DIFFERENT BUSINESSES
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    AI voice agent examples are not limited to large enterprises. MSMEs, startups and growing businesses can also use them for everyday communication.
                  </p>
                </div>

                {/* Practical Examples Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-[28%] align-top">Business Type</th>
                        <th className="py-3.5 px-4 w-[28%] align-top">Application</th>
                        <th className="py-3.5 pl-4 pr-0 w-[44%] align-top">Practical Example</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Education Institutes</td>
                        <td className="py-3.5 px-4 align-top">Admission enquiries</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact students and collect course preferences</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Real Estate</td>
                        <td className="py-3.5 px-4 align-top">Lead qualification</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Understand property requirements and budgets</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Healthcare</td>
                        <td className="py-3.5 px-4 align-top">Appointment reminders</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Confirm upcoming appointments</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">E-commerce</td>
                        <td className="py-3.5 px-4 align-top">Customer follow-ups</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Provide relevant order updates</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Financial Services</td>
                        <td className="py-3.5 px-4 align-top">Payment reminders</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Communicate payment due dates</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Fitness Centres</td>
                        <td className="py-3.5 px-4 align-top">Customer re-engagement</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact previous members</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Startups</td>
                        <td className="py-3.5 px-4 align-top">Lead follow-ups</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact potential customers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p
                  className="text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  These applications help businesses manage repetitive calling activities while allowing employees to focus on more important customer interactions.
                </p>
              </section>

              {/* SECTION 6: AI VOICE AGENT VS IVR VS TELECALLING */}
              <section id="comparison-ivr-telecalling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT VS TRADITIONAL IVR VS MANUAL TELECALLING
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Businesses commonly use IVR systems and human telecallers to manage phone communication. AI voice agents offer another approach by combining automated calling with conversational artificial intelligence.
                  </p>
                  <p>
                    A traditional Interactive Voice Response (IVR) system guides callers through predefined options, such as &ldquo;Press 1 for Sales or Press 2 for Support.&rdquo;
                  </p>
                  <p>
                    Manual telecalling involves employees making calls, understanding customer requirements and responding personally.
                  </p>
                  <p>
                    An AI voice agent can understand spoken questions and generate relevant responses based on the conversation.
                  </p>
                </div>

                {/* 4-Column Comparison Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-[22%] align-top">Comparison Factor</th>
                        <th className="py-3.5 px-4 w-[26%] align-top">AI Voice Agent</th>
                        <th className="py-3.5 px-4 w-[26%] align-top">Traditional IVR</th>
                        <th className="py-3.5 pl-4 pr-0 w-[26%] align-top">Manual Telecalling</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Communication</td>
                        <td className="py-3.5 px-4 align-top">AI-powered conversations</td>
                        <td className="py-3.5 px-4 align-top">Predefined menus</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Human conversations</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer Input</td>
                        <td className="py-3.5 px-4 align-top">Natural speech</td>
                        <td className="py-3.5 px-4 align-top">Keypad or supported voice options</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Natural speech</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Responses</td>
                        <td className="py-3.5 px-4 align-top">AI-generated</td>
                        <td className="py-3.5 px-4 align-top">Recorded prompts</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Human-generated</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Availability</td>
                        <td className="py-3.5 px-4 align-top">Depends on deployment and capacity</td>
                        <td className="py-3.5 px-4 align-top">Depends on infrastructure</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Depends on employee shifts</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Scalability</td>
                        <td className="py-3.5 px-4 align-top">Supports configured concurrent calls</td>
                        <td className="py-3.5 px-4 align-top">Depends on system capacity</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Requires additional employees</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Personalisation</td>
                        <td className="py-3.5 px-4 align-top">Can use customer context</td>
                        <td className="py-3.5 px-4 align-top">Usually limited</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Adapts to individual customers</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Best For</td>
                        <td className="py-3.5 px-4 align-top">Repetitive conversational tasks</td>
                        <td className="py-3.5 px-4 align-top">Basic call routing</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Complex customer interactions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-3"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    When Should Businesses Choose Each Option?
                  </h3>

                  <div className="space-y-2">
                    <p className="font-bold text-primary-black">AI Voice Agents:</p>
                    <ul className="list-disc pl-5 space-y-1 text-dark-grey">
                      <li>Repetitive customer follow-ups.</li>
                      <li>Lead qualification and reminders.</li>
                      <li>High-volume calling activities.</li>
                      <li>Routine customer enquiries.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-primary-black">Traditional IVR:</p>
                    <ul className="list-disc pl-5 space-y-1 text-dark-grey">
                      <li>Basic department selection.</li>
                      <li>Structured call routing.</li>
                      <li>Simple and predictable phone menus.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-primary-black">Manual Telecalling:</p>
                    <ul className="list-disc pl-5 space-y-1 text-dark-grey">
                      <li>Complex customer enquiries.</li>
                      <li>Negotiations and relationship-building.</li>
                      <li>Sensitive situations requiring human judgment.</li>
                    </ul>
                  </div>

                  <p className="pt-2">
                    Businesses can also combine AI voice agents with human telecallers to automate routine conversations while retaining personal support when needed.
                  </p>
                </div>
              </section>

              {/* SECTION 7: KEY BENEFITS */}
              <section id="key-benefits" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT ARE THE KEY BENEFITS OF AI VOICE AGENTS?
                </h2>
                <div
                  className="space-y-6 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    AI voice agent benefits depend on the business requirements and how effectively the system is implemented.
                  </p>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      1. Reduced Repetitive Work
                    </h3>
                    <p>
                      AI voice agents can handle suitable reminder calls, follow-ups and common enquiries, allowing employees to focus on other responsibilities.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      2. Improved Calling Capacity
                    </h3>
                    <p>
                      AI systems can handle multiple calls simultaneously within their configured capacity. This helps businesses manage higher calling volumes without increasing their calling team at the same rate.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      3. Consistent Communication
                    </h3>
                    <p>
                      Configured instructions and business information help maintain consistency when communicating with customers.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      4. Faster Follow-Ups
                    </h3>
                    <p>
                      Automated calling campaigns can help businesses contact leads and customers more systematically, reducing delays in routine follow-ups.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      5. Multilingual Communication
                    </h3>
                    <p>
                      Platforms supporting multiple languages can help businesses communicate with customers across different regions and language preferences.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      6. Campaign Insights
                    </h3>
                    <p className="mb-2">
                      Some platforms provide reports and analytics covering:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-dark-grey">
                      <li>Total calls initiated.</li>
                      <li>Connected and unanswered calls.</li>
                      <li>Customer responses.</li>
                      <li>Interested and uninterested leads.</li>
                      <li>Call duration.</li>
                      <li>Follow-up requirements.</li>
                      <li>Campaign performance.</li>
                    </ul>
                    <p className="mt-3">
                      These insights help businesses understand calling outcomes and identify opportunities for improvement.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: LIMITATIONS */}
              <section id="limitations" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT ARE THE LIMITATIONS OF AI VOICE AGENTS?
                </h2>
                <div
                  className="space-y-6 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Although AI voice agents offer several advantages, businesses should understand their practical limitations.
                  </p>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      1. Speech Recognition Errors
                    </h3>
                    <p>
                      Background noise, accents and unclear pronunciation can affect recognition accuracy and result in incorrect responses.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      2. Complex Conversations
                    </h3>
                    <p>
                      AI can handle many routine enquiries, but negotiations, sensitive complaints and complicated situations may require human judgment.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      3. Dependence on Accurate Information
                    </h3>
                    <p>
                      Incorrect pricing, outdated policies or incomplete business information can lead to inaccurate answers. Regular knowledge base updates are important.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      4. Integration Requirements
                    </h3>
                    <p>
                      Connecting AI voice agents with telephony, CRM and business applications may require technical configuration and ongoing maintenance.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      5. Customer Preferences
                    </h3>
                    <p>
                      Some customers prefer speaking with human representatives, especially when discussing complicated or sensitive matters. Businesses should provide suitable human support.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      6. Privacy and Compliance
                    </h3>
                    <p>
                      Businesses must consider customer consent, data privacy, secure information handling and applicable telecommunications regulations when running automated calling campaigns.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 9: GET STARTED */}
              <section id="how-to-get-started" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CAN BUSINESSES GET STARTED WITH AI VOICE AUTOMATION?
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Businesses should begin by identifying which calling activities are suitable for automation.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>Identify the Use Case:</strong> Select an activity such as lead qualification or appointment reminders.
                    </li>
                    <li>
                      <strong>Define the Conversation Flow:</strong> Decide what the AI should ask and how it should respond.
                    </li>
                    <li>
                      <strong>Prepare Business Information:</strong> Provide accurate service details, FAQs and policies.
                    </li>
                    <li>
                      <strong>Choose the Right Platform:</strong> Evaluate language support, voice quality, integrations and calling capacity.
                    </li>
                    <li>
                      <strong>Test Before Deployment:</strong> Run sample calls to identify incorrect responses and conversation gaps.
                    </li>
                    <li>
                      <strong>Monitor Performance:</strong> Review campaign outcomes and customer feedback to improve results.
                    </li>
                  </ol>
                  <p className="pt-2">
                    Starting with one clearly defined workflow helps businesses evaluate the value of AI calling before expanding automation.
                  </p>
                </div>
              </section>

              {/* SECTION 10: HOW CALLIENCE HELPS */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI VOICE AGENTS
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Callience helps businesses automate routine communication through customised AI voice agents designed around their calling requirements.
                  </p>
                  <p>
                    Its solutions support workflows such as lead qualification, customer follow-ups, appointment reminders, payment reminders and customer re-engagement.
                  </p>
                  <p>Key capabilities include:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Customised AI Voice Agents:</strong> Configure voice agents according to business services and communication objectives.
                    </li>
                    <li>
                      <strong>65+ Language Support:</strong> Communicate with customers across different language preferences.
                    </li>
                    <li>
                      <strong>Automated Calling Campaigns:</strong> Organise calling activities for reminders, lead generation and customer follow-ups.
                    </li>
                    <li>
                      <strong>Campaign Insights:</strong> Review calling activity, customer responses and campaign performance.
                    </li>
                    <li>
                      <strong>Expert Guidance:</strong> Get support in identifying suitable automation opportunities and planning AI calling workflows.
                    </li>
                  </ul>
                  <p className="pt-2">
                    Whether you are a startup, MSME or growing business, Callience can help you explore customised AI voice automation for your customer communication requirements.
                  </p>
                </div>
              </section>

              {/* SECTION 11: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONCLUSION
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.4] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    An AI voice agent uses artificial intelligence to communicate with customers through spoken conversations. By combining speech recognition, intent understanding and voice generation, it can manage tasks such as lead qualification, customer follow-ups, appointment reminders and payment communication.
                  </p>
                  <p>
                    For MSMEs, startups and growing businesses, AI voice automation offers a practical way to manage repetitive calling activities and improve customer communication. However, successful implementation requires accurate business information, suitable use cases and human support for conversations that need personal attention.
                  </p>
                </div>
              </section>

              {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
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

        {/* Adjacent Post Navigation (Bottom) */}
        <BlogNavigation currentSlug="what-is-an-ai-voice-agent" />

        {/* Global Contact / CTA Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
