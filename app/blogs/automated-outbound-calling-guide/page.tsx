"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-automated-outbound-calling", label: "What Is Automated Outbound Calling?" },
  { id: "how-automated-outbound-calling-works", label: "How Automated Outbound Calling Works" },
  { id: "how-ai-outbound-calling-works", label: "How AI Outbound Calling Works for Businesses" },
  { id: "ai-outbound-calling-vs-traditional-calling", label: "AI Outbound Calling vs Traditional Calling" },
  { id: "common-uses-of-automated-outbound-calling", label: "Common Uses of Automated Outbound Calling" },
  { id: "benefits-of-automated-outbound-calling", label: "Benefits of Automated Outbound Calling" },
  { id: "limitations-and-risks", label: "Limitations and Risks to Plan For" },
  { id: "how-to-choose-software", label: "How to Choose Automated Outbound Calling Software" },
  { id: "how-to-start", label: "How to Start with Automated Outbound Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is automated outbound calling?",
    a: "Automated outbound calling is the use of software to place phone calls automatically. Depending on the system, it may connect answered calls to human agents, play a recorded message, or use an AI voice agent to hold the whole conversation.",
  },
  {
    q: "2. How does AI outbound calling work?",
    a: "The platform dials contacts from a list. An AI voice agent then converts speech to text, understands the person's intent, decides the next step and replies in a natural voice. It records the outcome and transfers to a human when needed.",
  },
  {
    q: "3. What is the difference between AI outbound calling and traditional calling?",
    a: "In traditional calling, humans make or handle each call, sometimes with a dialler that speeds up dialling. In AI outbound calling, an AI voice agent conducts the conversation, so many structured calls can run at once and results are logged automatically.",
  },
  {
    q: "4. What are common uses of automated outbound calling?",
    a: "Common uses include appointment and payment reminders, order and delivery confirmations, feedback surveys, event reminders, service alerts, re-engagement calls and first-step lead qualification.",
  },
  {
    q: "5. Is automated outbound calling legal?",
    a: "It can be, when it follows the rules in the country you call. In India, that includes TRAI's rules on number series, consent and Do Not Disturb preferences, and data protection law. Confirm requirements with your provider and legal advisor.",
  },
];

export default function AutomatedOutboundCallingPage() {
  const [activeSection, setActiveSection] = useState("what-is-automated-outbound-calling");
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
            <div className="flex-1 max-w-[802px]">
              <h1
                className="font-normal uppercase text-primary-black text-[32px] sm:text-[46px] lg:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                WHAT IS AUTOMATED OUTBOUND CALLING AND HOW DOES IT HELP BUSINESSES?
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Automated outbound calling uses software or AI voice agents to place calls at scale. Learn how it works, where it helps, and how it differs from dialers.
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
              src="/automated-outbound-calling-guide.png"
              alt="What Is Automated Outbound Calling and How Does It Help Businesses?"
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
                    {TOC_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollTo(item.id)}
                        className={`block w-full text-left py-1 text-[15px] transition-colors cursor-pointer ${
                          activeSection === item.id
                            ? "font-bold text-primary-black"
                            : "font-normal text-neutral-600 hover:text-primary-black"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            </aside>

            {/* Right Column: Article Content */}
            <article ref={articleRef} className="lg:col-span-9 space-y-12">
              {/* Introduction */}
              <div className="space-y-5">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Automated outbound calling is the use of software to place phone calls to customers or prospects automatically, without a person dialling each number. Modern systems range from basic automated calling software that plays a recorded message to AI voice agents that hold a two-way conversation, understand responses and update business systems. Businesses use automated outbound calls for tasks such as appointment reminders, payment nudges, feedback surveys and lead qualification.
                </p>

                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  The main difference between the types is who holds the conversation. An auto dialer only places the call and connects it to a human agent, a recorded call delivers a one-way message, and an AI outbound calling bot speaks with the person, understands the reply and records the outcome. Businesses choose between them based on the purpose of the call, the call volume and how much real conversation is needed. In regulated markets such as India, every type must also follow consent, Do Not Disturb and number-series rules.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AUTOMATED OUTBOUND CALLING */}
              <section id="what-is-automated-outbound-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AUTOMATED OUTBOUND CALLING?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Automated outbound calling, also called outbound call automation, is a system that starts phone calls on a business&apos;s behalf and handles all or part of the conversation without a human caller. The business supplies a list of contacts, a goal for the call and the rules for when and how to call. The software does the dialling and, depending on its type, the talking.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    There are three common types of automated phone calls:
                  </p>

                  {/* Table 1: Three Common Types of Automated Phone Calls */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Type</th>
                          <th className="py-3.5 px-4 w-1/3 align-top">How it works</th>
                          <th className="py-3.5 px-4 w-1/6 align-top">Conversation</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/4 align-top">Typical use</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Auto dialer (power or predictive)</td>
                          <td className="py-3.5 px-4 align-top">Dials numbers automatically and connects answered calls to a human agent</td>
                          <td className="py-3.5 px-4 align-top">Human agent speaks</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Sales and collections teams with large call lists</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Recorded or IVR-based calls</td>
                          <td className="py-3.5 px-4 align-top">Plays a pre-recorded message, sometimes asking the person to press a key</td>
                          <td className="py-3.5 px-4 align-top">One-way or keypad only</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Announcements, simple alerts</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">AI outbound calling bot</td>
                          <td className="py-3.5 px-4 align-top">An AI voice agent places the call and talks naturally with the person</td>
                          <td className="py-3.5 px-4 align-top">Two-way, spoken</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Reminders, surveys, qualification, confirmations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice bot is a software agent that can hold a spoken conversation. AI phone call automation combines such a bot with outbound calling software, which manages lists, scheduling, retries and reporting.
                  </p>
                </div>
              </section>

              {/* SECTION 2: HOW AUTOMATED OUTBOUND CALLING WORKS */}
              <section id="how-automated-outbound-calling-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AUTOMATED OUTBOUND CALLING WORKS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Here is how businesses automate outbound phone calls, step by step:
                  </p>

                  <ol
                    className="list-decimal pl-5 space-y-3 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Define the goal and the audience.</strong> Decide what the call should achieve, such as confirming an appointment, and which contacts should receive it. Use only numbers you are permitted to call.
                    </li>
                    <li>
                      <strong>Design the call flow.</strong> Write what the agent says, what questions it asks, what it does with each answer and when it hands over to a person.
                    </li>
                    <li>
                      <strong>Connect your systems.</strong> Link the outbound calling software to your telephony provider and to your CRM, calendar or billing system so it can read contact data and write results back.
                    </li>
                    <li>
                      <strong>Set campaign rules.</strong> Define calling windows, the number of retries, the caller number used and the languages.
                    </li>
                    <li>
                      <strong>Launch the campaign.</strong> The platform dials contacts in the schedule you set, usually many at a time.
                    </li>
                    <li>
                      <strong>Conduct the conversation.</strong> For AI calls, the agent greets the person, delivers the message, listens to the response and replies.
                    </li>
                    <li>
                      <strong>Take action.</strong> The result is recorded: a booking confirmed, a reschedule requested, a callback set, a survey answered or a transfer to a human.
                    </li>
                    <li>
                      <strong>Report and refine.</strong> Dashboards show pick-up rates, outcomes and call reasons. The team reviews calls and improves the script.
                    </li>
                  </ol>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This workflow applies to any automated calling software. What changes with AI is step 6.
                  </p>
                </div>
              </section>

              {/* SECTION 3: HOW AI OUTBOUND CALLING WORKS FOR BUSINESSES */}
              <section id="how-ai-outbound-calling-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI OUTBOUND CALLING WORKS FOR BUSINESSES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI outbound calling replaces the fixed script of older systems with a conversation. During a call, an AI voice agent typically works in a loop:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Speech recognition</strong> converts what the person says into text.
                    </li>
                    <li>
                      <strong>Language understanding</strong> works out the intent, such as &quot;I want to reschedule&quot;, using the call script and business information the agent has been given.
                    </li>
                    <li>
                      <strong>Decision and action logic</strong> chooses the next step: answer a question, collect a detail, update a record or transfer the call.
                    </li>
                    <li>
                      <strong>Text-to-speech</strong> turns the reply into natural spoken audio.
                    </li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The same system also handles the surrounding work: dialling at scale, retrying unanswered numbers, logging each call and passing complex cases to a human agent with a summary. Many platforms can also operate in several languages, which matters for businesses serving different regions.
                  </p>
                </div>
              </section>

              {/* SECTION 4: AI OUTBOUND CALLING VS TRADITIONAL CALLING */}
              <section id="ai-outbound-calling-vs-traditional-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI OUTBOUND CALLING VS TRADITIONAL CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The difference between AI outbound calling and traditional calling comes down to who speaks, how flexible the conversation is, and how far it scales.
                  </p>

                  {/* Table 2: AI Outbound Calling vs Traditional Calling */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/5 align-top">Dimension</th>
                          <th className="py-3.5 px-4 w-1/4 align-top">Manual calling</th>
                          <th className="py-3.5 px-4 w-1/4 align-top">Traditional auto dialer</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/10 align-top">AI outbound calling</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Who speaks</td>
                          <td className="py-3.5 px-4 align-top">Human agent</td>
                          <td className="py-3.5 px-4 align-top">Human agent (dialler connects calls)</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">AI voice agent</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Scale</td>
                          <td className="py-3.5 px-4 align-top">Limited by headcount</td>
                          <td className="py-3.5 px-4 align-top">Higher, still limited by agents</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Many calls in parallel</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Conversation</td>
                          <td className="py-3.5 px-4 align-top">Fully flexible</td>
                          <td className="py-3.5 px-4 align-top">Flexible, human-led</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Flexible within the designed scope</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Handling unexpected questions</td>
                          <td className="py-3.5 px-4 align-top">Strong</td>
                          <td className="py-3.5 px-4 align-top">Strong</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Depends on the knowledge provided; escalates when unsure</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Data capture</td>
                          <td className="py-3.5 px-4 align-top">Manual notes</td>
                          <td className="py-3.5 px-4 align-top">Manual notes and dispositions</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Automatic transcripts and outcomes</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Working hours</td>
                          <td className="py-3.5 px-4 align-top">Shifts</td>
                          <td className="py-3.5 px-4 align-top">Shifts</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Any time within permitted calling hours</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Best for</td>
                          <td className="py-3.5 px-4 align-top">Complex, high-value conversations</td>
                          <td className="py-3.5 px-4 align-top">High-volume human sales and collections</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Repetitive, structured conversations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Traditional dialers speed up the dialling, but a person still has to hold every conversation. AI outbound calling automates the conversation too, which is why it is aimed at structured, repeatable calls.
                  </p>
                </div>
              </section>

              {/* SECTION 5: COMMON USES OF AUTOMATED OUTBOUND CALLING */}
              <section id="common-uses-of-automated-outbound-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  COMMON USES OF AUTOMATED OUTBOUND CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Common uses of automated outbound calling include:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Appointment reminders and confirmations:</strong> Clinics, salons, service centres and schools confirm or reschedule bookings.
                    </li>
                    <li>
                      <strong>Payment and renewal reminders:</strong> Insurance, lending, utilities and subscription businesses nudge customers before due dates.
                    </li>
                    <li>
                      <strong>Order and delivery updates:</strong> Retailers and logistics firms confirm addresses, delivery slots and cash-on-delivery orders.
                    </li>
                    <li>
                      <strong>Customer feedback and surveys:</strong> Short post-purchase or post-service surveys with spoken answers.
                    </li>
                    <li>
                      <strong>Lead qualification:</strong> An AI agent asks a few set questions and passes suitable prospects to a salesperson.
                    </li>
                    <li>
                      <strong>Event and webinar reminders:</strong> Reminding registrants about timing and joining details.
                    </li>
                    <li>
                      <strong>Re-engagement:</strong> Contacting lapsed customers or inactive users with a relevant update.
                    </li>
                    <li>
                      <strong>Service alerts and announcements:</strong> Outage notices, policy changes and schedule updates.
                    </li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These are mostly repetitive calls with a clear purpose. That is why they suit automation.
                  </p>
                </div>
              </section>

              {/* SECTION 6: BENEFITS OF AUTOMATED OUTBOUND CALLING */}
              <section id="benefits-of-automated-outbound-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF AUTOMATED OUTBOUND CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The main benefits of automated outbound calling are:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Scale:</strong> One system can run outbound calling campaigns across thousands of contacts in far less time than a human team.
                    </li>
                    <li>
                      <strong>Consistency:</strong> Every contact hears the same approved message and questions.
                    </li>
                    <li>
                      <strong>Speed:</strong> Time-sensitive calls, such as reminders, go out on schedule.
                    </li>
                    <li>
                      <strong>Lower cost per routine call:</strong> Staff time shifts to conversations that need judgement.
                    </li>
                    <li>
                      <strong>Better data:</strong> Calls are transcribed, tagged and logged, which shows outcomes and common reasons.
                    </li>
                    <li>
                      <strong>Flexible capacity:</strong> Volume can rise and fall without hiring and releasing callers.
                    </li>
                    <li>
                      <strong>Language reach:</strong> Multilingual agents can contact people in languages a small team may not cover.
                    </li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For sales automation software, the benefit is mainly time: automation handles the repetitive first touch so salespeople spend their time on conversations most likely to convert.
                  </p>
                </div>
              </section>

              {/* SECTION 7: LIMITATIONS AND RISKS TO PLAN FOR */}
              <section id="limitations-and-risks" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  LIMITATIONS AND RISKS TO PLAN FOR
                </h2>
                <div className="space-y-4">
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Regulation and consent:</strong> Outbound calling is regulated. Calling people who have not agreed or who are on a Do Not Disturb list can lead to penalties and reputational damage.
                    </li>
                    <li>
                      <strong>Complex or emotional conversations:</strong> AI is a poor fit for negotiation, sensitive complaints and high-value relationship calls. These should go to a person.
                    </li>
                    <li>
                      <strong>Customer reaction:</strong> A badly designed call that sounds robotic, interrupts or cannot be exited easily can annoy people and hurt the brand.
                    </li>
                    <li>
                      <strong>Lower pick-up rates:</strong> Many people ignore unknown numbers. Calling windows, number identity and relevance of the message matter.
                    </li>
                    <li>
                      <strong>Data and script quality:</strong> The results are only as good as the contact data, scripts and business information the agent is given.
                    </li>
                    <li>
                      <strong>Need for a human path:</strong> Callers must be able to reach a person, and the agent must transfer cleanly with context.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 8: HOW TO CHOOSE AUTOMATED OUTBOUND CALLING SOFTWARE */}
              <section id="how-to-choose-software" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CHOOSE AUTOMATED OUTBOUND CALLING SOFTWARE
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When comparing automated outbound calling software, check:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Conversation quality:</strong> Test the agent on your real scripts, languages and call scenarios.
                    </li>
                    <li>
                      <strong>Compliance features:</strong> Consent handling, DND checks, calling-hour controls, approved number series and call disclosure.
                    </li>
                    <li>
                      <strong>Integrations:</strong> Connection to your CRM, calendar, billing or helpdesk.
                    </li>
                    <li>
                      <strong>Human handoff:</strong> Warm transfer with a summary, and clear rules for when to transfer.
                    </li>
                    <li>
                      <strong>Campaign controls:</strong> Scheduling, retries, call pacing and list management.
                    </li>
                    <li>
                      <strong>Reporting:</strong> Pick-up rate, outcomes, transcripts and call reasons.
                    </li>
                    <li>
                      <strong>Pricing clarity:</strong> What is included per minute or per call, and what telephony, setup and add-ons cost.
                    </li>
                    <li>
                      <strong>Support and onboarding:</strong> Help with script design and tuning.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 9: HOW TO START WITH AUTOMATED OUTBOUND CALLING */}
              <section id="how-to-start" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO START WITH AUTOMATED OUTBOUND CALLING
                </h2>
                <div className="space-y-4">
                  <ol
                    className="list-decimal pl-5 space-y-3 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Choose one simple use case.</strong> Appointment reminders or feedback calls are good starting points.
                    </li>
                    <li>
                      <strong>Clean and verify your contact list.</strong> Confirm permission to call.
                    </li>
                    <li>
                      <strong>Write a short call flow.</strong> Keep it clear, with an easy way to reach a person.
                    </li>
                    <li>
                      <strong>Run a small pilot.</strong> Call a limited group and listen to the calls.
                    </li>
                    <li>
                      <strong>Measure results.</strong> Track answer rate, completion rate, outcomes and complaints.
                    </li>
                    <li>
                      <strong>Improve and expand.</strong> Adjust the script and add use cases once results are stable.
                    </li>
                  </ol>
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
                    Automated outbound calling lets a business place calls at scale without a person dialling and, with AI outbound calling, without a person holding every routine conversation. It works best for structured, repeatable calls such as reminders, confirmations, surveys and first-touch qualification. Its value depends on consent, good scripts, accurate data and a clean path to human agents. Businesses that start small, follow calling rules and measure outcomes can use outbound call automation to reach more people with less manual effort.
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
        <BlogNavigation currentSlug="automated-outbound-calling-guide" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
