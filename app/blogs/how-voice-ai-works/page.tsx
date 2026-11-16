"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "how-voice-ai-works", label: "Core Technologies Powering Voice AI" },
  { id: "step-by-step", label: "How Does an AI Phone Call Work Step by Step?" },
  { id: "ai-calling-process", label: "Understanding the AI Calling Process" },
  { id: "pauses-and-interruptions", label: "How Does Voice AI Handle Pauses and Interruptions?" },
  { id: "call-transfers", label: "Can AI Transfer Calls to Human Agents?" },
  { id: "after-call-ends", label: "What Happens After an AI Phone Call Ends?" },
  { id: "business-applications", label: "Practical Business Applications of Voice AI" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Calling" },
  { id: "conclusion", label: "Summary: The Future of AI Phone Calling" },
  { id: "faqs", label: "Frequently Asked Questions (FAQs)" },
];

const FAQS = [
  {
    q: "1. How does voice AI work in simple words?",
    a: "Voice AI listens to what a person says, understands the message and responds using a computer-generated voice.",
  },
  {
    q: "2. Can AI make phone calls automatically?",
    a: "Yes. AI calling systems can contact customers for lead follow-ups, appointment reminders and other business activities.",
  },
  {
    q: "3. Can AI understand different accents?",
    a: "Many AI systems support different accents and languages, although accuracy depends on the technology and audio quality.",
  },
  {
    q: "4. Can AI voice agents transfer calls to humans?",
    a: "Yes. They can transfer calls when customers request human assistance or need additional support.",
  },
  {
    q: "5. What happens after an AI phone call ends?",
    a: "The system can prepare conversation records, call summaries and customer follow-up information.",
  },
  {
    q: "6. Where is Voice AI used in business?",
    a: "Voice AI is commonly used for lead follow-ups, appointment reminders, customer enquiries and feedback collection.",
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
      const topOffset = 112; // 112px below floating navbar

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

      <main className="flex-1 pt-28 md:pt-36">
        {/* Article Header Container (1270px x Hug) */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          {/* Back link above the header row with exact ~15px gap to title */}
          <div className="mb-3.5 sm:mb-4">
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

          {/* Header Row: Title on Left, Metadata Sidebar on Right (exact 182px gap, Title level-aligned with 21st October & Vertical Line) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[802px]">
              <h1
                className="font-normal uppercase text-[#0D0D0D] text-[38px] sm:text-[50px] lg:text-[64px] leading-[1.05] tracking-normal mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                HOW DOES VOICE AI WORK?
                <br className="hidden sm:inline" /> A BEGINNER&apos;S GUIDE TO AI CALLING
              </h1>
              <p
                className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal max-w-[640px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Voice AI is changing how businesses communicate with customers
                <br className="hidden sm:inline" /> through automated phone conversations.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar (197 x 192 Hug, vertical line starts level with Title) */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1E1E1E] pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-col items-start">
                {/* Text lines with exact 24px gap */}
                <div
                  className="flex flex-col gap-6 text-[#1E1E1E]"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    13th November
                  </p>
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    8 min read
                  </p>
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    Karanvir Singh
                  </p>
                </div>

                {/* Contact Us button with exact 27px gap, hugging content (not w-full) */}
                <div className="mt-[27px]">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-[#1E1E1E] text-white hover:bg-black px-4 py-2 rounded-[8px] text-sm font-semibold transition-all shadow-xs group"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section — 100% Full Width Seamless Background Fill */}
        <div className="w-full bg-[#FAF9F5] mb-12 md:mb-16">
          <div className="relative w-full max-w-[1440px] mx-auto h-[260px] sm:h-[360px] md:h-[460px] lg:h-[515px] overflow-hidden">
            <Image
              src="/blog-hero-voice-ai-guide.webp"
              alt="How Voice AI Works: A Beginner's Guide to AI Calls"
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-contain object-center"
              loading="eager"
              priority
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
                    className="mt-4 space-y-2.5 text-sm border-l border-[#E5E5E5] pl-4"
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
                      top: "112px",
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
                    className="space-y-2 text-sm max-h-[calc(100vh-10rem)] overflow-y-auto pr-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {TOC_ITEMS.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollTo(item.id)}
                          className={`group flex items-start gap-2.5 w-full text-left transition-all py-1 cursor-pointer ${isActive
                            ? "font-bold text-[#1E1E1E]"
                            : "text-[#535353] hover:text-[#1E1E1E]"
                            }`}
                        >
                          <span
                            className={`w-1 h-3.5 rounded-full mt-1 transition-all shrink-0 ${isActive
                              ? "bg-[#1E1E1E]"
                              : "bg-transparent group-hover:bg-[#E5E5E5]"
                              }`}
                          />
                          <span className="leading-snug text-[15px]">{item.label}</span>
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
                  Voice AI is changing how modern businesses communicate with customers
                  through automated phone conversations. From following up with
                  potential leads to sending appointment reminders, intelligent{" "}
                  <Link
                    href="/"
                    className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                  >
                    AI calling software and voice agents
                  </Link>{" "}
                  can handle many routine conversations with natural responsiveness.
                </p>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  But how does voice AI actually work under the hood?
                </p>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Simply put, Voice AI allows computers to listen to people,
                  understand their questions and respond with a human-like voice.
                  Let&apos;s understand how an AI-powered phone conversation
                  works from beginning to end.
                </p>
              </div>

              {/* SECTION 1: HOW DOES VOICE AI WORK? */}
              <section id="how-voice-ai-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW VOICE AI WORKS: THE THREE CORE TECHNOLOGIES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Voice AI uses three main technologies to communicate with people:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Speech Recognition (ASR):</strong> Helps AI understand what a person is saying.
                    </li>
                    <li>
                      <strong>Language Model (LLM):</strong> Helps AI understand questions and decide what to say.
                    </li>
                    <li>
                      <strong>Text-to-Speech (TTS):</strong> Converts the AI&apos;s written response into spoken words.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, when a customer asks about a product&apos;s price, the AI listens to the question, understands what the customer wants and responds with the relevant information.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The basic AI calling process looks like this:
                  </p>
                  <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-xl p-4 my-3 text-sm sm:text-base font-semibold text-[#1E1E1E]">
                    Call Starts → AI Listens → Understands the Question → Prepares a Response → Speaks to the Customer
                  </div>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Learn how the{" "}
                    <Link
                      href="/#features"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      Callience calling platform
                    </Link>{" "}
                    orchestrates this flow to maintain seamless real-time conversations.
                  </p>
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
                  {/* Stage 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      1. Call Initiation
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The process starts when an AI calling system connects with a customer.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-2">
                      It can handle two types of calls:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li>
                        <strong>Inbound Calls:</strong> When a customer calls a business and the AI answers.
                      </li>
                      <li>
                        <strong>Outbound Calls:</strong> When the AI automatically calls customers for follow-ups, reminders or enquiries.
                      </li>
                    </ul>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      For example, an education company can use AI calling to contact students who have shown interest in its courses.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      Once the call connects, the AI introduces itself and explains the purpose of the call.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      2. AI Listens to the Customer
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      After connecting the call, the AI listens to what the customer says and converts their speech into text.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-1">
                      For example:
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base">
                      <p><strong>Customer:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The AI understands the customer&apos;s words and prepares to respond.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      It can also handle different accents and speaking styles, although its accuracy depends on audio quality and language support.
                    </p>
                  </div>

                  {/* Stage 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      3. Understanding Customer Questions
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      After listening, the AI identifies what the customer wants.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-2">
                      For example:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li>&ldquo;What is the price?&rdquo; – The customer wants pricing information.</li>
                      <li>&ldquo;Can you explain your plans?&rdquo; – The customer wants more details.</li>
                      <li>&ldquo;I am not interested.&rdquo; – The customer does not want to continue.</li>
                    </ul>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      Based on the conversation, the AI decides whether to answer a question, provide information, schedule an appointment or transfer the call to a human representative.
                    </p>
                  </div>

                  {/* Stage 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      4. Preparing and Speaking the Response
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Once the AI understands the customer&apos;s question, it prepares a suitable response using available business information.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-1">
                      For example:
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p><strong>Customer:</strong> &ldquo;Can you tell me about your courses?&rdquo;</p>
                      <p><strong>AI:</strong> &ldquo;Certainly! We offer several professional courses. Are you interested in online or classroom programmes?&rdquo;</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The AI then converts its written response into spoken words using voice-generation technology.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      The customer hears the response through the phone, and the conversation continues.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: UNDERSTANDING THE AI CALLING PROCESS */}
              <section id="ai-calling-process" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  UNDERSTANDING THE AI CALLING PROCESS
                </h2>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  The following table summarises how an AI calling system manages a phone conversation.
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
                        <td className="py-3.5 pl-4 pr-0 align-top">AI connects with the customer.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Listening</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI listens to the customer&apos;s words.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Understanding</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI identifies the customer&apos;s question or requirement.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Response</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI prepares a suitable answer.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Speaking</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI responds using a generated voice.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call Management</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI handles pauses, interruptions and call transfers.</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Post-Call Analysis</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI prepares call summaries and conversation records.</td>
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
                    A good phone conversation should feel natural. Customers may pause while speaking, change their questions or interrupt the other speaker.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI voice agents manage these situations in different ways:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Pauses:</strong> AI waits to understand whether the customer has finished speaking.
                    </li>
                    <li>
                      <strong>Interruptions:</strong> Customers can interrupt the AI, and it can adjust its response accordingly.
                    </li>
                    <li>
                      <strong>Response Time:</strong> AI systems aim to respond quickly so customers do not experience long periods of silence.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These features help make AI phone conversations smoother and more natural.
                  </p>
                </div>
              </section>

              {/* SECTION 5: CALL TRANSFERS */}
              <section id="call-transfers" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CAN AI TRANSFER CALLS TO HUMAN AGENTS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Yes. Not every customer request can be handled by AI. Some situations require personal attention or additional support.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, a customer may have a complicated complaint or simply want to speak with a human representative.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling systems can transfer calls in two ways:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Cold Transfer:</strong> The AI directly transfers the customer to a human representative.
                    </li>
                    <li>
                      <strong>Warm Transfer:</strong> The AI shares important conversation details with the representative before transferring the call.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This helps businesses combine automated customer communication with seamless human escalation. Learn more about our{" "}
                    <Link
                      href="/#features"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      live call routing and transfer features
                    </Link>.
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
                    The work does not always stop when the customer disconnects. AI calling systems can prepare useful information about the conversation.
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
                      <strong>Call Summaries:</strong> Short explanations of what happened during the call.
                    </li>
                    <li>
                      <strong>Call Outcomes:</strong> Information about whether the customer was interested, declined or requested a follow-up.
                    </li>
                    <li>
                      <strong>Customer Updates:</strong> Important details can be shared with connected business management systems.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, after a lead follow-up, the AI may generate a summary stating that the customer is interested and wants another call tomorrow.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This helps sales teams execute{" "}
                    <Link
                      href="/#features"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      automated lead qualification
                    </Link>{" "}
                    without manually reviewing every recorded conversation.
                  </p>
                </div>
              </section>

              {/* SECTION 7: PRACTICAL BUSINESS APPLICATIONS */}
              <section id="business-applications" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  PRACTICAL BUSINESS APPLICATIONS OF VOICE AI
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI voice agents for several everyday communication tasks:
                  </p>
                  <ol className="space-y-2 pl-5 list-decimal font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Lead Follow-Ups:</strong> Contact potential customers and understand their requirements.
                    </li>
                    <li>
                      <strong>Appointment Reminders:</strong> Remind customers about upcoming appointments and confirm their availability.
                    </li>
                    <li>
                      <strong>Customer Enquiries:</strong> Answer common questions about pricing, products and services.
                    </li>
                    <li>
                      <strong>Customer Feedback:</strong> Contact customers to collect feedback after a purchase or service.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These applications help businesses manage repetitive phone conversations and reduce manual work.
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
                    Callience is an enterprise{" "}
                    <Link
                      href="/"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      AI calling software platform
                    </Link>{" "}
                    built to help businesses automate routine voice communications and scale outbound outreach.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can configure AI voice agents for outbound lead follow-ups, customer service enquiries, and appointment scheduling tailored to their custom CRM workflows.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    By automating repetitive phone calls, teams save hours every week while keeping human representatives focused on complex deals. Explore our{" "}
                    <Link
                      href="/#pricing"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      custom pricing plans
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/#contact"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      request a live voice AI demo
                    </Link>{" "}
                    to evaluate how it works for your use case.
                  </p>
                </div>
              </section>

              {/* SECTION 9: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  SUMMARY: THE FUTURE OF AI PHONE CALLING FOR MODERN BUSINESS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Voice AI makes automated phone conversations possible by allowing computers to listen, understand and respond naturally to callers in real time.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    From connecting calls and answering questions to managing interruptions and preparing post-call analytics, modern AI calling systems handle high-volume communication reliably.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    To see how voice AI can transform your organization&apos;s phone operations,{" "}
                    <Link
                      href="/#contact"
                      className="underline decoration-[#1E1E1E] underline-offset-4 hover:text-black font-semibold"
                    >
                      book a discovery session with Callience today
                    </Link>.
                  </p>
                </div>
              </section>

              {/* SECTION 10: FAQS */}
              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FREQUENTLY ASKED QUESTIONS (FAQS)
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
