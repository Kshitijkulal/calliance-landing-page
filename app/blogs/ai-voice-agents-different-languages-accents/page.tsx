"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "how-ai-understands-languages", label: "How AI Voice Agents Understand Languages" },
  { id: "why-accents-create-challenges", label: "Why Regional Accents Create Challenges" },
  { id: "can-ai-understand-indian-accents", label: "Can AI Voice Agents Understand Indian Accents?" },
  { id: "handling-hinglish-code-switching", label: "Handling Hinglish & Code-Switching" },
  { id: "how-ai-understands-regional-dialects", label: "How AI Voice Agents Understand Regional Dialects" },
  { id: "noise-and-audio-quality", label: "Background Noise & Telephone Audio" },
  { id: "words-vs-intent", label: "Word Recognition vs Customer Intent" },
  { id: "testing-with-real-customer-calls", label: "Testing with Real Customer Calls" },
  { id: "speech-recognition-technologies", label: "Speech Recognition Technologies" },
  { id: "how-callience-helps", label: "How Callience Helps with AI Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. Can AI voice agents understand Indian accents?",
    a: "Yes. Modern AI voice agents use Automatic Speech Recognition (ASR) models trained on diverse regional Indian accents and dialects, allowing them to comprehend varied pronunciations accurately.",
  },
  {
    q: "2. How do AI voice agents handle Hinglish conversations?",
    a: "Advanced AI voice agents support code-switching, allowing them to recognize and process mixed-language phrases where customers blend English and Hindi (or regional languages) naturally.",
  },
  {
    q: "3. How does AI speech recognition work for Indian languages?",
    a: "The system converts spoken regional audio into text using ASR, detects the language, interprets customer intent with Natural Language Processing (NLP), and generates relevant spoken responses using Text-to-Speech (TTS).",
  },
  {
    q: "4. How do regional accents affect voice recognition accuracy?",
    a: "Differences in regional pronunciation, local idioms, and speaking speed can challenge baseline models. Accuracy improves significantly when platforms utilize localized Indian acoustic and language models.",
  },
  {
    q: "5. How do AI voice agents understand regional dialects?",
    a: "AI voice agents understand regional dialects by pairing specialized acoustic models trained on local colloquialisms with Natural Language Processing (NLP) that maps regional phrasing back to the core customer intent.",
  },
  {
    q: "6. What is the difference between word recognition and intent understanding?",
    a: "Word recognition converts spoken speech into written text. Intent understanding interprets the underlying meaning, context, and requested action (e.g., rescheduling an appointment instead of simply taking note of an absence).",
  },
  {
    q: "7. How to test AI voice agents with real customer calls?",
    a: "Businesses should test AI voice agents with real customer calls across diverse regional accents, check Hinglish and code-switching handling, evaluate performance under noisy telephone conditions, and verify intent resolution before full deployment.",
  },
];

export default function AIVoiceAgentsLanguagesAccentsPage() {
  const [activeSection, setActiveSection] = useState("how-ai-understands-languages");
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 xl:gap-14 2xl:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[880px]">
              <h1
                className="font-normal uppercase text-primary-black text-[32px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[58px] 2xl:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span className="block">CAN AI VOICE AGENTS UNDERSTAND</span>
                <span className="block lg:whitespace-nowrap">DIFFERENT LANGUAGES AND ACCENTS?</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Learn how AI voice agents understand different languages, Indian accents and Hinglish, and what affects speech recognition accuracy.
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
                    19th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    6 min read
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    Karanvir Singh
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
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden min-h-[160px]">
          <div className="relative w-full aspect-[1440/515]">
            <Image
              src="/Can AI Voice Agents Understand Different Languages and Accents.png"
              alt="Can AI Voice Agents Understand Different Languages and Accents?"
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
                    className="flex flex-col space-y-2.5"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {TOC_ITEMS.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <div
                          key={item.id}
                          id={`toc-item-${item.id}`}
                          className="flex items-start gap-2.5 group cursor-pointer"
                          onClick={() => scrollTo(item.id)}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors ${
                              isActive
                                ? "bg-primary-black"
                                : "bg-transparent group-hover:bg-card-border"
                            }`}
                          />
                          <span
                            className={`text-[14px] leading-[1.4] transition-colors ${
                              isActive
                                ? "font-bold text-primary-black"
                                : "text-dark-grey hover:text-primary-black"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </nav>
                )}
              </div>
            </aside>

            {/* Right Column: Article Content */}
            <article
              ref={articleRef}
              className="lg:col-span-9 font-medium text-base sm:text-[17px] lg:text-[18px] leading-[1.65] text-primary-black"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              {/* Introduction Paragraph */}
              <div className="space-y-4 mb-12">
                <p>
                  Businesses interact with customers who speak different languages and have different accents. In a country like India, these differences can sometimes make customer communication difficult, especially when businesses serve people across multiple regions. Language barriers, regional pronunciation, and mixed-language conversations can affect how customers interact with automated calling systems.
                </p>
                <p>
                  AI voice agents different languages capabilities help businesses communicate with customers across supported languages and accents. Using Automatic Speech Recognition (ASR), Speech to text technology, and AI language processing, voice agents can recognize spoken words, understand customer responses, and provide relevant answers. However, their accuracy depends on language support, audio quality, and their ability to understand regional speech patterns.
                </p>
              </div>

              {/* SECTION 1: HOW DO AI VOICE AGENTS UNDERSTAND SPOKEN LANGUAGES? */}
              <section id="how-ai-understands-languages" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DO AI VOICE AGENTS UNDERSTAND SPOKEN LANGUAGES?
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice agents use different technologies to understand customer conversations. One important component is Automatic Speech Recognition, which converts spoken words into written text. This process allows AI systems to identify what customers are saying before generating an appropriate response.
                  </p>
                  <p>
                    A typical process involves three stages:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>Speech Recognition:</strong> The system captures customer speech and converts it into text using ASR.
                    </li>
                    <li>
                      <strong>Language Understanding:</strong> AI processes the recognized words to identify the customer&apos;s question, request, or intent.
                    </li>
                    <li>
                      <strong>Response Generation:</strong> The system generates an appropriate response and converts it into speech using text-to-speech technology.
                    </li>
                  </ol>
                  <p>
                    For example, when a customer calls a service provider to ask about an appointment, the AI voice agent identifies the request, checks the relevant information if connected to the business system, and responds accordingly.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY DO REGIONAL ACCENTS CREATE SPEECH RECOGNITION CHALLENGES? */}
              <section id="why-accents-create-challenges" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY DO REGIONAL ACCENTS CREATE SPEECH RECOGNITION CHALLENGES?
                </h2>
                <div className="space-y-4">
                  <p>
                    People speaking the same language may pronounce words differently depending on their region, local dialect, and speaking style. These differences can affect AI voice agent accent recognition and make it difficult for systems to identify certain words correctly.
                  </p>
                  <p>
                    Some common challenges include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Regional Pronunciation:</strong> The same word may sound different across regions.
                    </li>
                    <li>
                      <strong>Local Dialects:</strong> Customers may use regional expressions that are unfamiliar to the AI system.
                    </li>
                    <li>
                      <strong>Speaking Speed:</strong> Fast speech or unclear pronunciation can make words difficult to recognize.
                    </li>
                    <li>
                      <strong>Mixed Vocabulary:</strong> Customers may combine English words with regional languages during conversations.
                    </li>
                  </ul>
                  <p>
                    AI speech recognition Indian accents requires suitable language models and testing with different speaking styles to improve recognition accuracy. Understanding Voice AI regional accents also requires evaluating how systems respond to variations in pronunciation.
                  </p>
                </div>
              </section>

              {/* SECTION 3: CAN AI VOICE AGENTS UNDERSTAND INDIAN ACCENTS? */}
              <section id="can-ai-understand-indian-accents" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CAN AI VOICE AGENTS UNDERSTAND INDIAN ACCENTS?
                </h2>
                <div className="space-y-4">
                  <p>
                    Yes, AI voice agents can understand several Indian accents, depending on their speech recognition models and language support. However, accuracy may vary between speakers, regions, and conversational situations.
                  </p>
                  <p>
                    For example, two customers speaking Hindi may use different regional pronunciations or expressions. An AI system trained on limited speech samples may recognize one conversation correctly but struggle with another.
                  </p>
                  <p>
                    Businesses should evaluate AI voice agents different languages capabilities using realistic conversations instead of assuming that support for a particular language guarantees accurate recognition of every accent.
                  </p>
                </div>
              </section>

              {/* SECTION 4: HOW DO AI VOICE AGENTS HANDLE HINGLISH AND CODE-SWITCHING? */}
              <section id="handling-hinglish-code-switching" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DO AI VOICE AGENTS HANDLE HINGLISH AND CODE-SWITCHING?
                </h2>
                <div className="space-y-4">
                  <p>
                    In India, many people naturally switch between languages during conversations. For example, someone might say, &ldquo;Mujhe appointment book karni hai&rdquo; or &ldquo;Can you call me kal?&rdquo;
                  </p>
                  <p>
                    This is known as code-switching, where speakers move between two or more languages within a conversation.
                  </p>
                  <p>
                    AI voice agent code switching capabilities allow systems to process mixed-language conversations when their speech recognition models support the relevant languages and combinations.
                  </p>
                  <p>
                    Similarly, AI language detection can help identify the language being spoken and support multilingual speech recognition. However, not every AI voice agent understands Hinglish equally well. Businesses should check whether their chosen platform supports common regional expressions and mixed-language conversations.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HOW DO AI VOICE AGENTS UNDERSTAND REGIONAL DIALECTS? */}
              <section id="how-ai-understands-regional-dialects" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW DO AI VOICE AGENTS UNDERSTAND REGIONAL DIALECTS?
                </h2>
                <div className="space-y-4">
                  <p>
                    AI dialect recognition helps speech recognition systems handle variations in pronunciation, vocabulary, and expressions within a language.
                  </p>
                  <p>
                    For example, customers speaking Hindi in different regions may use different words or pronunciations to communicate the same request. AI voice agents in regional languages need suitable language models and conversational training to understand these differences.
                  </p>
                  <p>
                    When evaluating an AI voice bot, businesses should check whether it can understand common local expressions and respond appropriately rather than simply recognizing individual words.
                  </p>
                </div>
              </section>

              {/* SECTION 6: HOW BACKGROUND NOISE AND TELEPHONE AUDIO AFFECT ACCURACY */}
              <section id="noise-and-audio-quality" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BACKGROUND NOISE AND TELEPHONE AUDIO AFFECT ACCURACY
                </h2>
                <div className="space-y-4">
                  <p>
                    Even advanced speech recognition software can misunderstand customers when audio quality is poor. Background noise and telephone limitations can affect how clearly spoken words are captured.
                  </p>
                  <p>
                    Common challenges include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Background Noise:</strong> Traffic, machinery, or nearby conversations can interfere with speech recognition.
                    </li>
                    <li>
                      <strong>Poor Network Quality:</strong> Unstable connections may cause missing or unclear words.
                    </li>
                    <li>
                      <strong>Telephone Audio:</strong> Compressed telephone audio may reduce speech clarity.
                    </li>
                    <li>
                      <strong>Overlapping Speech:</strong> When customers and AI agents speak simultaneously, parts of the conversation may be missed.
                    </li>
                  </ul>
                  <p>
                    Businesses should test AI calling systems under realistic telephone conditions instead of relying only on studio-quality audio.
                  </p>
                </div>
              </section>

              {/* SECTION 7: WHY RECOGNIZING WORDS IS DIFFERENT FROM UNDERSTANDING CUSTOMER INTENT */}
              <section id="words-vs-intent" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY RECOGNIZING WORDS IS DIFFERENT FROM UNDERSTANDING CUSTOMER INTENT
                </h2>
                <div className="space-y-4">
                  <p>
                    Recognizing spoken words does not always mean understanding what a customer wants.
                  </p>
                  <p>
                    For example, a customer might say, &ldquo;I cannot come tomorrow.&rdquo; A speech recognition system may correctly convert the sentence into text, but the AI agent still needs to understand that the customer wants to reschedule an appointment.
                  </p>
                  <p>
                    This is where intent recognition becomes important. AI voice agents need to understand conversation context to identify whether customers want to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Book or reschedule appointments.</li>
                    <li>Ask about products or services.</li>
                    <li>Request payment information.</li>
                    <li>Speak with a human representative.</li>
                    <li>Cancel or change an existing booking.</li>
                  </ul>
                  <p>
                    Voice recognition software helps process spoken input, but understanding the meaning behind customer responses requires additional AI language processing.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW BUSINESSES CAN TEST AI VOICE AGENTS WITH REAL CUSTOMER CALLS */}
              <section id="testing-with-real-customer-calls" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BUSINESSES CAN TEST AI VOICE AGENTS WITH REAL CUSTOMER CALLS
                </h2>
                <div className="space-y-4">
                  <p>
                    Before using AI voice agents for customer communication, businesses should test their performance with realistic conversations.
                  </p>
                  <p>
                    Here are some practical ways to evaluate them:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>Test Different Languages:</strong> Try conversations in the languages commonly spoken by your customers.
                    </li>
                    <li>
                      <strong>Include Regional Accents:</strong> Test different pronunciations, dialects, and speaking speeds.
                    </li>
                    <li>
                      <strong>Check Hinglish Conversations:</strong> Include examples where customers naturally mix English and regional languages.
                    </li>
                    <li>
                      <strong>Test Audio Conditions:</strong> Evaluate performance with background noise and typical telephone audio quality.
                    </li>
                    <li>
                      <strong>Check Intent Recognition:</strong> Verify whether the AI understands what customers actually want.
                    </li>
                    <li>
                      <strong>Review Call Outcomes:</strong> Track misunderstood responses, incomplete conversations, successful bookings, and requests for human assistance.
                    </li>
                  </ol>
                  <p>
                    Testing how AI voice agents understand regional dialects is important for identifying recognition errors before launching larger calling campaigns.
                  </p>
                  <p>
                    Businesses should also use appropriate, permission-based test recordings or test calls and handle customer information responsibly.
                  </p>
                </div>
              </section>

              {/* SECTION 9: HOW AI SPEECH RECOGNITION IMPROVES CUSTOMER COMMUNICATION */}
              <section id="speech-recognition-technologies" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI SPEECH RECOGNITION IMPROVES CUSTOMER COMMUNICATION
                </h2>
                <div className="space-y-4">
                  <p>
                    AI speech recognition technologies help businesses manage customer conversations across different languages and communication channels.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Technology</th>
                          <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">Role in Customer Communication</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Automatic Speech Recognition (ASR)</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Converts spoken language into text</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Speech to text</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Creates written transcripts of conversations</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">AI Language Detection</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Identifies the language being spoken</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Natural Language Processing</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Helps interpret customer questions and intent</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Text-to-Speech</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Converts AI responses into spoken language</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Voice Recognition Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Can identify or distinguish speakers, depending on the system</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Together, these technologies help AI voice agents recognize speech, understand requests, and provide relevant responses.
                  </p>
                </div>
              </section>

              {/* SECTION 10: HOW CALLIENCE HELPS BUSINESSES WITH AI CALLING */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI CALLING
                </h2>
                <div className="space-y-4">
                  <p>
                    Callience helps businesses manage inbound and outbound customer communication through AI-powered voice agents. These workflows support lead qualification, admission enquiries, appointment reminders, follow-ups, and customer re-engagement.
                  </p>
                  <p>
                    For businesses serving customers across different regions, selecting suitable language options and testing voice recognition with real conversations can help make communication more accessible. Callience also supports inbound enquiry handling, helping businesses collect customer information and direct callers to the appropriate team.
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
                <div className="space-y-4">
                  <p>
                    AI voice agents can understand multiple languages and accents through speech recognition and AI language processing, but their accuracy depends on language support, regional pronunciation, code-switching, and audio quality.
                  </p>
                  <p>
                    For Indian businesses, evaluating AI voice agents different languages capabilities with real customer conversations is important to identify recognition errors and improve customer interactions. By testing language understanding, intent recognition, and call outcomes, businesses can select suitable AI calling solutions and provide more accessible communication to customers across different regions.
                  </p>
                </div>
              </section>

              {/* SECTION 12: FAQS */}
              <section id="faqs" className="scroll-mt-32 mb-8">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
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

        {/* Previous / Next Blog Navigation */}
        <BlogNavigation currentSlug="ai-voice-agents-different-languages-accents" />

        {/* Contact Us Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
