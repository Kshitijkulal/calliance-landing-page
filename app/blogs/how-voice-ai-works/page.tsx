"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "how-voice-ai-works", label: "How Does Voice AI Work?" },
  { id: "step-by-step", label: "How Does an AI Phone Call Work Step by Step?" },
  { id: "call-flow", label: "Understanding the AI Voice Agent Call Flow" },
  { id: "pauses-and-interruptions", label: "How Does Voice AI Handle Pauses and Interruptions?" },
  { id: "voice-ai-latency", label: "What Is Voice AI Latency?" },
  { id: "after-call-ends", label: "What Happens After an AI Phone Call Ends?" },
  { id: "business-applications", label: "Practical Business Applications of AI Calling" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How does Voice AI work in simple words?",
    a: "Voice AI listens to a person's speech, understands the message and responds using generated audio.",
  },
  {
    q: "2. What technologies are used in Voice AI?",
    a: "Common technologies include ASR, LLMs and TTS. Some systems also use direct speech-to-speech models.",
  },
  {
    q: "3. What is the difference between ASR and TTS?",
    a: "ASR converts speech into text, while TTS converts written text into spoken audio.",
  },
  {
    q: "4. What is Voice AI latency?",
    a: "Voice AI latency is the delay between a customer's speech and the AI's spoken response.",
  },
  {
    q: "5. Can AI voice agents handle interruptions?",
    a: "Some platforms support interruptions or barge-in, allowing customers to speak while the AI is responding.",
  },
  {
    q: "6. What is AI post-call analysis?",
    a: "It analyses completed conversations to generate transcripts, summaries and call outcomes.",
  },
];

export default function VoiceAIBlogPage() {
  const [activeSection, setActiveSection] = useState("how-voice-ai-works");
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
      const topOffset = 28; // Sit at the top of the screen without unnecessary gap

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
    const activeEl = document.getElementById(`toc-item-${activeSection}`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1E1E1E]">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-36">
        {/* Article Header Container (1270px x Hug) */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-12">
          {/* Back link above the header row with exact ~15px gap to title */}
          <div className="mb-3 sm:mb-3.5 sm:mb-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#1E1E1E] hover:text-black transition-colors group"
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
                className="font-normal uppercase text-[#0D0D0D] text-[32px] sm:text-[46px] lg:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                HOW VOICE AI WORKS:
                <br className="hidden sm:inline" /> A BEGINNER&apos;S GUIDE TO AI PHONE CALLS
              </h1>
              <p
                className="font-medium text-[#1E1E1E] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[640px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Voice AI allows businesses to communicate with customers through automated phone conversations.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1E1E1E] pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                {/* Text lines */}
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-[#1E1E1E]"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    13th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    5 min read
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
                    className="inline-flex items-center gap-2 bg-[#1E1E1E] text-white hover:bg-black px-4 py-2 rounded-[8px] text-sm font-semibold transition-all shadow-xs group cursor-pointer whitespace-nowrap"
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

        {/* Hero Image Section — 1440x515 Full-Width Display matching Figma reference */}
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515] min-h-[160px]">
            <Image
              src="/What Is an AI Voice Agent_ How It Works for Business.png"
              alt="How Voice AI Works: A Beginner's Guide to AI Calls"
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
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setTocOpen(!tocOpen)}
                  aria-expanded={tocOpen}
                  aria-label="Toggle table of contents"
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-[#1E1E1E] cursor-pointer"
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
                        className={`block w-full text-left py-1 text-[15px] transition-colors ${activeSection === item.id
                          ? "font-bold text-[#1E1E1E]"
                          : "text-[#535353] hover:text-[#1E1E1E]"
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
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-[#1E1E1E] hover:opacity-80 transition-opacity cursor-pointer mb-5"
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
                            ? "font-bold text-[#1E1E1E]"
                            : "text-[#535353] hover:text-[#1E1E1E]"
                            }`}
                        >
                          <span
                            className={`w-1 h-3 rounded-full mt-1 transition-all shrink-0 ${isActive
                              ? "bg-[#1E1E1E]"
                              : "bg-transparent group-hover:bg-[#E5E5E5]"
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
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Voice AI allows businesses to communicate with customers through automated phone conversations. It can listen to people, understand their questions and respond using a computer-generated voice. Businesses use AI phone calls for lead qualification, admissions outreach, appointment reminders, payment follow-ups and customer re-engagement.
                </p>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  But how voice AI works behind the scenes is more than simply generating a voice. A typical AI calling system combines speech recognition, language processing and voice generation to manage conversations. It can also use business information, scripts and configured instructions to provide relevant answers.
                </p>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Let&apos;s explore the complete AI calling process, from connecting a call to generating responses and analysing the conversation.
                </p>
              </div>

              {/* SECTION 1: HOW DOES VOICE AI WORK? */}
              <section id="how-voice-ai-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DOES VOICE AI WORK?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Many Voice AI systems use three common technologies:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Automatic Speech Recognition (ASR):</strong> Converts spoken words into text so the system can process them.
                    </li>
                    <li>
                      <strong>Large Language Model (LLM):</strong> Helps the AI understand customer requests and prepare relevant responses.
                    </li>
                    <li>
                      <strong>Text-to-Speech (TTS):</strong> Converts written responses into spoken audio.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These technologies are commonly used together, but not every Voice AI system follows exactly the same architecture. Some platforms use direct speech-to-speech models or different combinations of technologies.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, when a customer asks about course fees, the AI processes the question, understands the customer&apos;s intent and prepares an answer using the business&apos;s configured information and instructions.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The basic process looks like this:
                  </p>
                  <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-xl p-4 my-3 text-sm sm:text-base font-semibold text-[#1E1E1E]">
                    Call Connection → Listening → Understanding → Response Generation → Speaking → Call Completion
                  </div>
                </div>
              </section>

              {/* SECTION 2: STEP BY STEP */}
              <section id="step-by-step" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DOES AN AI PHONE CALL WORK STEP BY STEP?
                </h2>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      1. Call Initiation
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The process begins when an AI calling system connects with a customer. Depending on the platform, it may support:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li>
                        <strong>Inbound Calls:</strong> Customers call a business and the AI answers.
                      </li>
                      <li>
                        <strong>Outbound Calls:</strong> The AI automatically contacts customers for reminders, enquiries or follow-ups.
                      </li>
                    </ul>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      For example, an education company may use outbound AI phone calls to contact students who have submitted admission enquiries. Inbound calling availability depends on the platform.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      2. AI Speech Recognition
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Once the call connects, the AI listens to the customer. A common technology used here is Automatic Speech Recognition (ASR), which converts spoken language into text.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-1">
                      For example:
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p><strong>Customer:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                      <p><strong>Recognised text:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      This speech to text AI process helps the system understand the customer&apos;s words. AI speech recognition accuracy depends on audio quality, language support and background noise.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      3. Understanding Customer Intent
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      After recognising the words, the AI identifies what the customer wants.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      For example, &ldquo;What is the price?&rdquo; indicates a pricing enquiry, while &ldquo;When is my appointment?&rdquo; indicates a request for appointment details.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      The AI considers the current question, previous conversation and configured business instructions to understand the request.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      4. Preparing and Speaking the Response
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The AI prepares an answer using available business knowledge, frequently asked questions, scripts, policies and configured instructions. Some platforms can also retrieve information from connected business systems.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-1">
                      For example:
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p><strong>Customer:</strong> &ldquo;Can you tell me about your courses?&rdquo;</p>
                      <p><strong>AI:</strong> &ldquo;Certainly! We offer several professional courses. Are you interested in online or classroom programmes?&rdquo;</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      The response is converted into audio using text to speech AI. This process is also known as AI voice synthesis.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: UNDERSTANDING THE AI VOICE AGENT CALL FLOW */}
              <section id="call-flow" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  UNDERSTANDING THE AI VOICE AGENT CALL FLOW
                </h2>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  The AI voice agent call flow describes the different stages involved in handling a phone conversation.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-xs sm:text-sm uppercase tracking-wider font-bold text-[#1E1E1E]">
                        <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Stage</th>
                        <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">What Happens</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-[#1E1E1E]">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call Initiation</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">The AI connects with the customer.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Listening</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Speech recognition processes the customer&apos;s words.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Understanding</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">The AI identifies the customer&apos;s requirement.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Response Generation</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">It prepares an answer using business information and instructions.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Speaking</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">The response is converted into spoken audio.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call Management</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">The system manages pauses and interruptions where supported.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Post-Call Analysis</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">The system may generate summaries and call records.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 4: PAUSES AND INTERRUPTIONS */}
              <section id="pauses-and-interruptions" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DOES VOICE AI HANDLE PAUSES AND INTERRUPTIONS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Natural conversations include pauses, questions and interruptions. Depending on the platform and configuration, an AI voice agent may support:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Pause Detection:</strong> Identifies when a customer has finished speaking.
                    </li>
                    <li>
                      <strong>Barge-In:</strong> Allows a customer to interrupt the AI while it is speaking.
                    </li>
                    <li>
                      <strong>AI Voice Agent Turn Taking:</strong> Manages when the customer speaks and when the AI responds.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Some systems also support an AI voice agent handoff, where conversation context moves between specialised AI agents or workflows. For example, an enquiry workflow may pass relevant customer information to a separate appointment-booking workflow. Availability depends on the platform.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These features help make conversations smoother, but their availability and performance vary across systems.
                  </p>
                </div>
              </section>

              {/* SECTION 5: VOICE AI LATENCY */}
              <section id="voice-ai-latency" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS VOICE AI LATENCY?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Voice AI latency is the delay between a customer finishing a question and the AI responding. The AI voice agent response time can be affected by speech recognition, response generation, voice generation, network delays and external data lookups.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can improve response time by:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      Using streaming technology to process audio in smaller parts.
                    </li>
                    <li>
                      Optimising access to business information.
                    </li>
                    <li>
                      Selecting suitable speech and language models.
                    </li>
                    <li>
                      Reducing unnecessary processing steps.
                    </li>
                    <li>
                      Monitoring delays at different stages of the conversation.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The goal is to make responses quick, relevant and natural.
                  </p>
                </div>
              </section>

              {/* SECTION 6: AFTER CALL ENDS */}
              <section id="after-call-ends" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT HAPPENS AFTER AN AI PHONE CALL ENDS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Many platforms support AI post call analysis, which helps businesses understand the outcome of completed conversations.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Common outputs include:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Call Transcripts:</strong> Written records of the conversation.
                    </li>
                    <li>
                      <strong>AI Call Summary:</strong> A short explanation of the discussion and customer requirements.
                    </li>
                    <li>
                      <strong>Call Outcomes:</strong> Information about whether a customer was interested, declined or requested a follow-up.
                    </li>
                    <li>
                      <strong>Customer Updates:</strong> Relevant information sent to connected CRM or business systems, where supported.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, an AI call summary might state that a student is interested in an MBA programme and requested another call on Friday.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This helps sales teams manage follow-ups without manually reviewing every conversation.
                  </p>
                </div>
              </section>

              {/* SECTION 7: PRACTICAL BUSINESS APPLICATIONS */}
              <section id="business-applications" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  PRACTICAL BUSINESS APPLICATIONS OF AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI calling systems for several everyday activities:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Lead Qualification:</strong> Understand potential customers&apos; requirements and identify promising leads.
                    </li>
                    <li>
                      <strong>Outbound Follow-Ups:</strong> Contact customers who have requested information or shown interest.
                    </li>
                    <li>
                      <strong>Admissions Outreach:</strong> Contact prospective students and answer common admission-related questions.
                    </li>
                    <li>
                      <strong>Payment Reminders:</strong> Remind customers about pending payments and due dates.
                    </li>
                    <li>
                      <strong>Appointment Reminders:</strong> Contact customers about upcoming appointments.
                    </li>
                    <li>
                      <strong>Customer Re-Engagement:</strong> Reach out to previous customers or inactive leads.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These applications help businesses manage repetitive conversations and maintain consistent customer communication.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW CALLIENCE HELPS */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience focuses on AI-powered voice calling to help businesses automate routine communication. Its use cases include lead qualification, outbound follow-ups, admissions outreach, payment reminders, appointment reminders and customer re-engagement.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These workflows can help businesses reduce repetitive calling work, maintain consistent follow-ups and give teams more time to focus on other important tasks.
                  </p>
                </div>
              </section>

              {/* SECTION 9: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONCLUSION
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Understanding how voice AI works involves looking at the complete conversation process, not just the generated voice. Common systems use speech recognition, language models and voice generation to listen, understand and respond to customers.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Features such as interruption handling, response-time optimisation and post-call analysis make AI phone calls useful for different business activities. From lead qualification to customer re-engagement, Voice AI offers businesses more ways to manage routine communication.
                  </p>
                </div>
              </section>

              {/* SECTION 10: FAQS */}
              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={faq.q}
                      className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(openFaq === idx ? null : idx)
                        }
                        aria-expanded={openFaq === idx}
                        aria-controls={`faq-answer-${idx}`}
                        className="w-full py-4 px-5 text-left font-bold text-sm sm:text-base text-[#1E1E1E] flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <span className="text-sm font-mono text-[#808285]">
                          {openFaq === idx ? "—" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#535353] leading-relaxed border-t border-[#FAF9F5]"
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
        <BlogNavigation currentSlug="how-voice-ai-works" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
