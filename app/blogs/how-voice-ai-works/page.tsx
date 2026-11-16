"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const TOC_ITEMS = [
  { id: "how-voice-ai-works", label: "How Does Voice AI Work?" },
  { id: "step-by-step", label: "How Does an AI Phone Call Work Step by Step?" },
  { id: "ai-calling-process", label: "Understanding the AI Calling Process" },
  { id: "pauses-and-interruptions", label: "How Does Voice AI Handle Pauses and Interruptions?" },
  { id: "call-transfers", label: "Can AI Transfer Calls to Human Agents?" },
  { id: "after-call-ends", label: "What Happens After an AI Phone Call Ends?" },
  { id: "business-applications", label: "Practical Business Applications of Voice AI" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Calling" },
  { id: "conclusion", label: "Conclusion" },
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
        setFixedState({ mode: "normal", left: 0, width: 0 });
        return;
      }

      if (!asideRef.current || !articleRef.current || !tocBoxRef.current) return;

      const asideRect = asideRef.current.getBoundingClientRect();
      const articleRect = articleRef.current.getBoundingClientRect();
      const tocHeight = tocBoxRef.current.offsetHeight;
      const topOffset = 112; // 112px below navbar

      if (articleRect.bottom <= topOffset + tocHeight) {
        setFixedState({
          mode: "bottom",
          left: 0,
          width: asideRect.width,
        });
      } else if (asideRect.top <= topOffset) {
        setFixedState({
          mode: "fixed",
          left: asideRect.left,
          width: asideRect.width,
        });
      } else {
        setFixedState({
          mode: "normal",
          left: 0,
          width: asideRect.width,
        });
      }

      let current = TOC_ITEMS[0].id;
      for (const item of TOC_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
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
          {/* Back link above the header row */}
          <div className="mb-6 lg:mb-8">
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

          {/* Header Row: Title on Left, Metadata Sidebar on Right (exact 182px gap, level-aligned) */}
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

            {/* Right Block: Metadata Sidebar (197 x 192 Hug) */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1E1E1E] pt-6 lg:pt-0 lg:pl-10">
              <div className="w-full lg:w-[197px]">
                {/* Text lines with exact 24px gap */}
                <div
                  className="flex flex-col gap-6 text-[#1E1E1E]"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    21st October
                  </p>
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    8 min read
                  </p>
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    Callience Editorial Team
                  </p>
                </div>

                {/* Contact Us button with exact 27px gap */}
                <div className="mt-[27px]">
                  <Link
                    href="/#contact"
                    className="flex items-center justify-between w-full bg-[#1E1E1E] text-white hover:bg-black px-5 py-3 rounded-[8px] text-sm sm:text-base font-semibold transition-all shadow-sm group"
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

        {/* Hero Image Section — 100% Full Width Background Fill */}
        <div className="w-full bg-[#D6E0D7] mb-12 md:mb-16">
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[515px] overflow-hidden">
            <Image
              src="/blog-hero-voice-ai.jpg"
              alt="Retro telephone and modern smartphone illustrating voice AI communication"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Content Section with Sticky Sidebar */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Left Column: Table of Contents */}
            <aside ref={asideRef} className="lg:col-span-3 relative">
              {/* Mobile TOC Accordion Header */}
              <div className="lg:hidden mb-8">
                <button
                  type="button"
                  onClick={() => setTocOpen(!tocOpen)}
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

              {/* Desktop Sticky Floating TOC */}
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
                  Voice AI is changing how businesses communicate with customers
                  through automated phone conversations. From outbound lead follow-ups
                  to appointment reminders, AI-powered calling systems can understand
                  spoken language and respond without requiring a human agent for every
                  interaction.
                </p>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  But how does voice AI actually work?
                </p>
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  It combines speech recognition, artificial intelligence and
                  voice-generation technologies to listen to customers, understand
                  their requests and respond naturally. Let&apos;s explore how an
                  AI-powered phone conversation works from beginning to end.
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
                    Voice AI works by combining three main technologies:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Automatic Speech Recognition (ASR):</strong> Converts spoken words into text.
                    </li>
                    <li>
                      <strong>Large Language Model (LLM):</strong> Understands customer intent and generates appropriate responses.
                    </li>
                    <li>
                      <strong>Text-to-Speech (TTS):</strong> Converts AI-generated text into spoken audio.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Together, these technologies allow an AI voice agent to listen, understand and respond during a phone conversation.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The basic AI calling process follows this sequence:
                  </p>
                  <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-xl p-4 my-3 text-sm sm:text-base font-semibold text-[#1E1E1E]">
                    Call Initiation → Speech Recognition → Intent Understanding → Response Generation → Text-to-Speech → Spoken Response
                  </div>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This process repeats throughout the conversation until the call ends.
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
                <p
                  className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  An AI-powered phone conversation involves several connected stages.
                </p>

                <div className="space-y-8">
                  {/* Stage 1 */}
                  <div className="border-l-2 border-[#1E1E1E] pl-6">
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      1. Call Initiation
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The process begins when an AI calling system connects with a customer.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-2">
                      It can handle two types of calls:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li><strong>Inbound calls:</strong> The AI agent answers calls received by a business.</li>
                      <li><strong>Outbound calls:</strong> The AI system automatically contacts customers using scheduled campaigns or contact lists.</li>
                    </ul>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      For example, an education company can use outbound AI calls to follow up with students who have submitted course enquiries.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      Once the call connects, the AI agent introduces itself and explains the purpose of the conversation.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div className="border-l-2 border-[#1E1E1E] pl-6">
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      2. Speech Recognition: Converting Speech into Text
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      After the call connects, the AI voice agent listens to the customer&apos;s response using Automatic Speech Recognition (ASR).
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      ASR converts spoken words into written text so the AI system can understand them.
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p><strong>Customer says:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                      <p><strong>Converted text:</strong> &ldquo;I want to know more about your courses.&rdquo;</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      Modern speech recognition systems can also handle different accents, background noise and speaking styles. Accurate transcription helps the AI understand customer requests correctly.
                    </p>
                  </div>

                  {/* Stage 3 */}
                  <div className="border-l-2 border-[#1E1E1E] pl-6">
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      3. Understanding Customer Intent
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Once speech is converted into text, a Large Language Model (LLM) analyses the customer&apos;s message and conversation history.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-2">
                      It identifies what the customer wants and determines an appropriate response.
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p className="font-bold">For example:</p>
                      <p>&bull; <em>&ldquo;What is the price?&rdquo;</em> – Pricing enquiry.</p>
                      <p>&bull; <em>&ldquo;Can you explain your plans?&rdquo;</em> – Product information request.</p>
                      <p>&bull; <em>&ldquo;I am not interested.&rdquo;</em> – Negative response.</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      Based on the customer&apos;s intent, the AI can answer questions, retrieve business information, schedule appointments or transfer calls to human representatives.
                    </p>
                  </div>

                  {/* Stage 4 */}
                  <div className="border-l-2 border-[#1E1E1E] pl-6">
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      4. Response Generation and Text-to-Speech
                    </h3>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      After understanding the customer&apos;s request, the AI generates a relevant response using the conversation context and available business information.
                    </p>
                    <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p className="font-bold">For example:</p>
                      <p><strong>Customer:</strong> &ldquo;Can you tell me about your courses?&rdquo;</p>
                      <p><strong>AI response:</strong> &ldquo;Certainly! We offer several professional courses. Are you interested in online or classroom programmes?&rdquo;</p>
                    </div>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      The generated text is then converted into spoken audio using Text-to-Speech (TTS) technology.
                    </p>
                    <p className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4]">
                      The customer hears the AI-generated voice through the phone call, and the conversation continues.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: TECHNOLOGY MATRIX */}
              <section id="technology-matrix" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  VOICE AI TECHNOLOGY MATRIX
                </h2>
                <div className="overflow-x-auto rounded-xl border border-[#E5E5E5]">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#FAF9F5] border-b border-[#E5E5E5] text-xs uppercase tracking-wider font-bold text-[#1E1E1E]">
                        <th className="py-3.5 px-4">Stage</th>
                        <th className="py-3.5 px-4">Technology</th>
                        <th className="py-3.5 px-4">What It Does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5] font-medium text-[#1E1E1E]">
                      <tr>
                        <td className="py-3 px-4 font-bold">Call Initiation</td>
                        <td className="py-3 px-4">Telephony System</td>
                        <td className="py-3 px-4">Connects the AI agent with the customer.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Speech Recognition</td>
                        <td className="py-3 px-4">ASR</td>
                        <td className="py-3 px-4">Converts customer speech into text.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Intent Understanding</td>
                        <td className="py-3 px-4">LLM</td>
                        <td className="py-3 px-4">Understands the customer&apos;s message and requirements.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Response Generation</td>
                        <td className="py-3 px-4">LLM</td>
                        <td className="py-3 px-4">Creates an appropriate response.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Voice Generation</td>
                        <td className="py-3 px-4">TTS</td>
                        <td className="py-3 px-4">Converts the response into spoken audio.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Conversation Management</td>
                        <td className="py-3 px-4">Turn-taking and Barge-in</td>
                        <td className="py-3 px-4">Handles pauses and interruptions.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Call Transfer</td>
                        <td className="py-3 px-4">Telephony Integration</td>
                        <td className="py-3 px-4">Transfers calls to human representatives when needed.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold">Post-Call Analysis</td>
                        <td className="py-3 px-4">AI Analytics</td>
                        <td className="py-3 px-4">Generates transcripts, summaries and call outcomes.</td>
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
                    A natural phone conversation involves more than understanding words. AI voice agents must also manage pauses, interruptions and response timing.
                  </p>
                  <ul className="space-y-3 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Turn-taking:</strong> Helps the AI determine when the customer has finished speaking before responding.
                    </li>
                    <li>
                      <strong>Barge-in:</strong> Allows customers to interrupt the AI while it is speaking. The system can stop its current response and process the customer&apos;s new request.
                    </li>
                    <li>
                      <strong>Latency:</strong> Refers to the delay between a customer finishing a statement and the AI beginning its response. Streaming audio, faster speech recognition and optimised language models can help reduce this delay.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These capabilities make AI phone conversations more responsive and natural.
                  </p>
                </div>
              </section>

              {/* SECTION 5: CALL TRANSFERS */}
              <section id="call-transfers" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DOES AI TRANSFER CALLS TO HUMAN AGENTS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Not every customer request can be handled by AI. Complicated complaints, sensitive issues or requests for human assistance may require a representative.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling systems generally support two types of transfers:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Cold Transfer:</strong> The AI transfers the call directly to a human representative.
                    </li>
                    <li>
                      <strong>Warm Transfer:</strong> The AI provides relevant conversation details to the representative before handing over the call.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, if a customer raises a complicated billing issue, the AI can collect basic information and transfer the call to the appropriate department.
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
                    After a call ends, the AI system can perform post-call analysis to organise important conversation information.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Common outputs include:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Call Transcripts:</strong> Written records of customer and AI conversations.
                    </li>
                    <li>
                      <strong>Call Summaries:</strong> Short overviews of the conversation and its outcome.
                    </li>
                    <li>
                      <strong>Call Classification:</strong> Identifies whether a customer is interested, not interested or requires follow-up.
                    </li>
                    <li>
                      <strong>CRM Updates:</strong> Sends call details and customer information to connected business systems.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, after an outbound lead follow-up, the system can generate a summary stating that the customer is interested and requires another call tomorrow.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This helps sales teams manage follow-ups without manually reviewing every conversation.
                  </p>
                </div>
              </section>

              {/* SECTION 7: PRACTICAL APPLICATIONS */}
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
                    Businesses use AI voice agents for several communication tasks:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Outbound Lead Follow-Ups:</strong> Contact potential customers, understand their requirements and identify interested leads.
                    </li>
                    <li>
                      <strong>Appointment Reminders:</strong> Remind customers about upcoming appointments and confirm their availability.
                    </li>
                    <li>
                      <strong>Customer Enquiries:</strong> Answer common questions about pricing, services and availability.
                    </li>
                    <li>
                      <strong>Customer Feedback:</strong> Conduct automated surveys and collect responses after purchases or service interactions.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These applications help businesses manage repetitive phone conversations more efficiently.
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
                    Callience focuses on AI-powered voice calling to help businesses automate routine communication and manage customer conversations.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI voice agents for outbound lead follow-ups, customer enquiries and appointment-related communication, depending on their configured workflows.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    By automating repetitive calling activities, businesses can reduce manual effort while keeping human representatives available for conversations that require personal attention.
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
                    Voice AI works by combining speech recognition, language models and text-to-speech technology to create automated phone conversations.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    It listens to customers, understands their intent, generates relevant responses and converts those responses into spoken audio. It can also manage interruptions, transfer calls to human agents and generate useful post-call summaries.
                  </p>
                  <p
                    className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For businesses, these capabilities make routine communication easier to manage and improve calling efficiency.
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
                        className="w-full py-4 px-5 text-left font-bold text-sm sm:text-base text-[#1E1E1E] flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <span className="text-sm font-mono text-[#808285]">
                          {openFaq === idx ? "—" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#535353] leading-relaxed border-t border-[#FAF9F5]">
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
      </main>

      <Footer />
    </div>
  );
}
