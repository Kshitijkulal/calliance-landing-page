"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-multilingual-voice-ai", label: "What Is Multilingual Voice AI and How Does It Work?" },
  { id: "why-language-limits-reach-in-india", label: "Why Language Limits Customer Reach in India" },
  { id: "five-ways-voice-ai-helps-reach", label: "Five Ways Multilingual Voice AI Helps Businesses Reach More Customers" },
  { id: "voice-ai-vs-traditional-multilingual-team", label: "Multilingual Voice AI vs. Traditional Contact Center" },
  { id: "industry-use-cases", label: "Industry Use Cases & Documented Results" },
  { id: "limitations-to-plan-for", label: "Limitations to Plan For" },
  { id: "how-to-roll-out-step-by-step", label: "How to Roll Out Multilingual Voice AI Step by Step" },
  { id: "how-to-measure-reach", label: "How to Measure Whether Reach Has Improved" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is multilingual Voice AI?",
    a: "Multilingual Voice AI is technology that lets a business talk with customers by phone in more than one language. It uses speech recognition to understand callers, language models to decide the response, and text-to-speech to reply in a natural voice.",
  },
  {
    q: "2. How does multilingual Voice AI help businesses reach more customers?",
    a: "It lets a business serve and contact customers in more regional languages without hiring a separate team for each. This opens new states, reaches customer segments that prefer voice, extends coverage to all hours and allows outbound calls at a scale human teams find hard to match.",
  },
  {
    q: "3. How is an AI voice bot different from a multilingual chatbot?",
    a: "A multilingual chatbot works through typed text on websites or messaging apps. An AI voice bot works on phone calls, so it can reach customers who prefer speaking, who are less comfortable typing, or who do not use apps.",
  },
  {
    q: "4. Which languages can an AI voice agent support?",
    a: "It depends on the provider. Many platforms cover major Indian languages such as Hindi, Tamil, Telugu, Bengali and Marathi, but quality differs by language. Ask for a list of production-ready languages and test them with your own scenarios.",
  },
  {
    q: "5. Will multilingual AI voice agents replace human agents?",
    a: "No. They handle routine, high-volume conversations, while human agents handle complex, sensitive and high-value cases. Most businesses get the best results from a hybrid model.",
  },
  {
    q: "6. Which industries benefit most from AI calling for regional markets?",
    a: "Industries with large, geographically spread customer bases and frequent calls benefit most, including BFSI, telecom, education, real estate, healthcare, retail and travel.",
  },
];

export default function MultilingualVoiceAIPage() {
  const [activeSection, setActiveSection] = useState("what-is-multilingual-voice-ai");
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
                HOW MULTILINGUAL VOICE AI HELPS BUSINESSES REACH MORE CUSTOMERS
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Multilingual Voice AI enables human-like phone calls across Hindi, Tamil, Telugu, and regional languages. Discover how Indian businesses enter new markets and scale outreach without hiring local calling teams.
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
                    8 min read
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
              src="/multilingual-voice-ai-reach-more-customers.png"
              alt="How Multilingual Voice AI Helps Businesses Reach More Customers"
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
                  Multilingual Voice AI is software that lets a business hold phone conversations in several languages. It recognises what a caller says, works out what they need, and replies in a natural spoken voice in the same language.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  For businesses in India, it removes one of the most practical limits on growth: the number of languages a human team can realistically cover. A single system can handle Hindi, Tamil, Telugu, Bengali, Marathi and other languages, so a company can enter a new region without first building a local calling team.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  From metropolitan commercial hubs like Delhi NCR, Mumbai, and Bengaluru to high-growth Tier-2 and Tier-3 markets across Uttar Pradesh, Maharashtra, Tamil Nadu, Andhra Pradesh, and West Bengal, this guide examines how localized voice AI bridges India&apos;s regional language divide. Discover proven industry applications, regulatory compliance guardrails, and a strategic rollout roadmap to capture regional customer demand at scale.
                </p>
              </div>

              {/* SECTION 1: WHAT MULTILINGUAL VOICE AI IS AND HOW IT WORKS */}
              <section id="what-is-multilingual-voice-ai" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT MULTILINGUAL VOICE AI IS AND HOW IT WORKS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Multilingual Voice AI, also called a multilingual AI voice agent or AI voice bot, combines four components:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Telephony:</strong> connects the system to inbound and outbound phone calls.
                    </li>
                    <li>
                      <strong>Automatic Speech Recognition (ASR):</strong> converts the caller&apos;s speech into text.
                    </li>
                    <li>
                      <strong>Language Understanding:</strong> identifies the caller&apos;s intent and decides the next step, often with a large language model and the company&apos;s own knowledge base.
                    </li>
                    <li>
                      <strong>Text-to-Speech (TTS):</strong> speaks the reply aloud in the chosen language.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The agent can also connect to a CRM, ticketing tool or payment system, so a call can end with an action: a booking made, a lead recorded, a payment reminder logged or a ticket opened.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This differs from a multilingual chatbot, which works through typed text on a website or messaging app. A voice agent works on an ordinary phone call. That matters for reach, because a call needs no app, no typing and no internet-enabled device beyond a basic handset.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY LANGUAGE LIMITS CUSTOMER REACH IN INDIA */}
              <section id="why-language-limits-reach-in-india" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY LANGUAGE LIMITS CUSTOMER REACH IN INDIA
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    India&apos;s language landscape is the reason this technology matters. The Constitution lists 22 scheduled languages, and Census of India 2011 data records 121 languages spoken by at least 10,000 people each. A business serving customers in several states is, in practice, serving several language markets.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Digital behaviour reflects this. The IAMAI and Kantar Internet in India 2024 report found that India had 886 million active internet users in 2024, and that about 870 million of them (98%) had accessed the internet in Indic languages. Among urban internet users, 57% said they prefer accessing content in Indic languages. Rural India accounted for 488 million users, or 55% of the total base.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For a business, this turns language into a reach problem rather than a service-quality detail. A company that can only handle calls in Hindi and English is, in effect, closed to a large share of the customers in states where those are second languages. Staffing around this with human agents is costly, because each language needs recruiting, training, shift cover and quality monitoring.
                  </p>
                </div>
              </section>

              {/* SECTION 3: FIVE WAYS MULTILINGUAL VOICE AI HELPS BUSINESSES REACH MORE CUSTOMERS */}
              <section id="five-ways-voice-ai-helps-reach" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FIVE WAYS MULTILINGUAL VOICE AI HELPS BUSINESSES REACH MORE CUSTOMERS
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      1. Enter New States and Regional Markets Faster
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A business expanding into a new state normally has to hire local-language agents before it can answer a single call. With multilingual AI calling, the same agent platform can be configured for a new language, which shortens the gap between deciding to enter a market and being able to serve it.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      This is especially useful for testing demand. A lender, school or clinic chain can switch on a regional language, watch call volumes and conversion, and only then decide whether a physical presence or dedicated team is justified.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      2. Serve Customer Segments That Text Channels Miss
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Voice reaches people who are less likely to use apps, web forms or chat. These include customers in smaller towns and rural areas, older customers, and first-time digital users. The Kantar report also notes that Indic-language and voice usage on the internet continues to grow, which supports the case for voice as a primary channel rather than an add-on.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A regional language voice AI agent lets these segments ask questions, book services or complete onboarding by speaking, using the phone they already have.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      3. Reach More Leads Through Outbound Calling in Multiple Languages
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Most businesses lose leads to slow or mismatched follow-up. A lead from Coimbatore called back in Hindi, or called two days late, is unlikely to convert. AI calling in multiple languages lets a company contact every lead promptly in the language linked to their region or stated preference.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Common outbound uses include:
                    </p>
                    <ul
                      className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      <li>Following up on inquiry forms, ad leads and missed calls.</li>
                      <li>Confirming appointments, site visits and demos.</li>
                      <li>Sending payment and renewal reminders.</li>
                      <li>Collecting feedback after a purchase or service.</li>
                    </ul>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Because one platform can run many calls at once, campaign reach is limited by the lead list rather than by the size of the calling team.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      4. Extend Coverage Beyond Office Hours and Peak Loads
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A human team usually covers a few languages during fixed hours. Contact center AI can answer in every configured language at any hour and absorb sudden spikes, such as a festival sale, an exam result day or a billing cycle. Fewer calls go unanswered or abandoned, and each unanswered call is a customer the business never reached.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      5. See Which Language Markets Are Worth Growing
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Every call produces data. When calls are transcribed and tagged by language and region, a business can compare which languages bring the most inquiries, the best conversion and the most support demand. This turns multilingual customer engagement into a measurable growth input. A company might discover, for example, that Telugu-language inquiries convert well but are under-served, and shift marketing spend accordingly.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: MULTILINGUAL VOICE AI VS TRADITIONAL MULTILINGUAL CONTACT CENTER */}
              <section id="voice-ai-vs-traditional-multilingual-team" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  MULTILINGUAL VOICE AI VS. A TRADITIONAL MULTILINGUAL CONTACT CENTER
                </h2>
                <div className="space-y-4">
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Dimension</th>
                          <th className="py-3.5 px-4 w-3/8 align-top">Human Multilingual Team</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">Multilingual Voice AI</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Adding a new language</td>
                          <td className="py-3.5 px-4 align-top">Recruit, train and schedule new agents</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Configure and test the language on the platform</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Coverage hours</td>
                          <td className="py-3.5 px-4 align-top">Limited by shifts and staffing</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Available around the clock</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Handling call spikes</td>
                          <td className="py-3.5 px-4 align-top">Needs extra headcount or leads to queues</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Handles many simultaneous calls</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Outbound campaigns</td>
                          <td className="py-3.5 px-4 align-top">Limited by agent capacity</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Scales across large lead lists</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Reporting across languages</td>
                          <td className="py-3.5 px-4 align-top">Often manual and inconsistent</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Transcripts and tags can be analysed by language and region</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Complex or sensitive cases</td>
                          <td className="py-3.5 px-4 align-top">Strong</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Best handled with escalation to a human agent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The most effective setup is usually a hybrid: AI handles routine, high-volume conversations in every language, and human agents take over complex, sensitive or high-value cases.
                  </p>
                </div>
              </section>

              {/* SECTION 5: INDUSTRY USE CASES & DOCUMENTED RESULTS */}
              <section id="industry-use-cases" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  INDUSTRY USE CASES &amp; DOCUMENTED RESULTS
                </h2>
                <div className="space-y-4">
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Banking, financial services and insurance (BFSI):</strong> payment reminders, loan inquiries, KYC follow-ups and policy renewals across state-wise customer bases.
                    </li>
                    <li>
                      <strong>Telecom:</strong> plan inquiries, recharge reminders and retention calls.
                    </li>
                    <li>
                      <strong>Education:</strong> counselling follow-ups, admission reminders and parent communication in regional languages.
                    </li>
                    <li>
                      <strong>Real estate:</strong> site visit scheduling and lead qualification for projects in different cities.
                    </li>
                    <li>
                      <strong>Healthcare:</strong> appointment booking, reminders and follow-up calls.
                    </li>
                    <li>
                      <strong>Retail and e-commerce:</strong> order updates, delivery coordination and feedback collection.
                    </li>
                    <li>
                      <strong>Travel and hospitality:</strong> booking support and itinerary changes.
                    </li>
                  </ul>
                  <div className="pt-2 space-y-3">
                    <h3
                      className="font-bold text-primary-black text-[18px] sm:text-[20px] leading-[1.3]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      A documented example
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      An AWS case study on Oriserve, an India-based conversational AI company, describes agents that support more than 120 languages and regional dialects. According to the case study, a telecom provider, Vi, used Oriserve&apos;s bots to engage customers who had requested to port out, and the company reported a 75% increase in retention.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      The same case study reports that an education technology company tripled its qualified leads and that a global retail brand saw a 10% boost in revenue. These are vendor-reported results from one provider, so treat them as illustrations of what is possible, not as guaranteed outcomes.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 6: LIMITATIONS TO PLAN FOR */}
              <section id="limitations-to-plan-for" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  LIMITATIONS TO PLAN FOR
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Multilingual Voice AI widens reach, but it is not a replacement for good operations.
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Language quality varies:</strong> Support differs by provider and by language. Ask which languages are production-ready, and test each one on your own call scenarios before launch.
                    </li>
                    <li>
                      <strong>Human handoff is essential:</strong> Complaints, disputes, emotionally sensitive calls and high-value negotiations should route to a person.
                    </li>
                    <li>
                      <strong>Compliance matters:</strong> Outbound calling must follow telecom regulator rules on calling and do-not-disturb preferences, and handling of customer data should align with India&apos;s Digital Personal Data Protection Act, 2023. Disclose clearly that the caller is speaking with an automated agent.
                    </li>
                    <li>
                      <strong>Knowledge must be accurate in every language:</strong> The agent is only as reliable as the product, pricing and policy information it is given.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 7: HOW TO ROLL OUT MULTILINGUAL VOICE AI STEP BY STEP */}
              <section id="how-to-roll-out-step-by-step" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO ROLL OUT MULTILINGUAL VOICE AI STEP BY STEP
                </h2>
                <div className="space-y-4">
                  <ol
                    className="list-decimal pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Map your language demand:</strong> Review customer data by state, lead source, support tickets and missed calls to see which languages your customers actually need.
                    </li>
                    <li>
                      <strong>Start with two or three languages:</strong> Choose the ones with the largest unmet demand, then expand.
                    </li>
                    <li>
                      <strong>Pick high-volume, repeatable use cases:</strong> Lead follow-up, reminders, FAQs and appointment booking are good starting points.
                    </li>
                    <li>
                      <strong>Integrate with your systems:</strong> Connect the agent to your CRM, telephony and ticketing tools so each call produces a recorded outcome.
                    </li>
                    <li>
                      <strong>Define escalation rules:</strong> Decide which situations transfer to a human agent, and make sure that team can support the same languages where possible.
                    </li>
                    <li>
                      <strong>Pilot, review and refine:</strong> Listen to call samples in each language and correct gaps in scripts and knowledge.
                    </li>
                    <li>
                      <strong>Measure by language and region, then expand:</strong> Use the results to add languages and markets.
                    </li>
                  </ol>
                </div>
              </section>

              {/* SECTION 8: HOW TO MEASURE WHETHER REACH HAS IMPROVED */}
              <section id="how-to-measure-reach" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO MEASURE WHETHER REACH HAS IMPROVED
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Track these metrics for each language and region, not only in aggregate:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>Share of inbound calls answered.</li>
                    <li>Number of new customers or leads contacted per week.</li>
                    <li>Contact rate and connection rate on outbound calls.</li>
                    <li>Lead-to-appointment and lead-to-sale conversion.</li>
                    <li>Containment rate (calls resolved without a human) and handoff rate.</li>
                    <li>Cost per conversation compared with the existing team.</li>
                    <li>Revenue and inquiry volume from newly served regions.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 9: CONCLUSION */}
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
                    Multilingual Voice AI helps businesses reach more customers by removing language as a barrier to entering new regions, contacting more leads, covering more hours and serving customers who prefer to speak rather than type.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    With nearly all of India&apos;s internet users already accessing content in Indic languages, the case for serving them by voice is practical rather than theoretical. Businesses that start with a few high-demand languages, keep human agents available for complex cases and measure results by language will be able to expand in a controlled way.
                  </p>
                  <div className="pt-4">
                    <p
                      className="font-bold text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Talk to our team at Callience to see how multilingual AI voice agents can help you reach customers in the languages your market speaks.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 10: FAQS */}
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
        <BlogNavigation currentSlug="multilingual-voice-ai-reach-more-customers" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
