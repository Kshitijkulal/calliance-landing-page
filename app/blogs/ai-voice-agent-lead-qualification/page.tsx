"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-lead-qualification", label: "What Is AI Lead Qualification?" },
  { id: "how-ai-lead-qualification-works", label: "How AI Lead Qualification Works" },
  { id: "what-questions-should-ai-voice-agents-ask", label: "What Questions Should AI Voice Agents Ask?" },
  { id: "how-bant-qualification-works", label: "How BANT Qualification Works" },
  { id: "assess-lead-interest-and-requirements", label: "Assessing Lead Interest and Requirements" },
  { id: "ai-lead-scoring-and-qualification", label: "AI Lead Scoring: Identifying Sales-Ready Leads" },
  { id: "business-examples", label: "AI Calling for Lead Qualification: Business Examples" },
  { id: "lead-qualification-software-fit", label: "Where AI Voice Agents Fit with Software" },
  { id: "benefits-of-automated-lead-qualification", label: "Benefits of Automated Lead Qualification" },
  { id: "limitations-and-risks", label: "Limitations and Risks" },
  { id: "how-to-set-up-ai-lead-qualification", label: "How to Set Up AI Lead Qualification" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "How do AI voice agents qualify leads?",
    a: "They call or answer leads, ask a short set of questions, convert the answers into structured data, score the lead and then book a meeting, transfer the call or notify a salesperson.",
  },
  {
    q: "What questions should AI voice agents ask to qualify leads?",
    a: "Questions about the lead's need, budget, decision-making role, timeline and fit, plus a question to set the next step. Keep it to four to six conversational questions.",
  },
  {
    q: "How does BANT qualification work with AI voice agents?",
    a: "The agent asks about Budget, Authority, Need and Timeline in natural conversation and records each answer. If a lead does not share one, the agent flags it as unknown for the salesperson to follow up.",
  },
  {
    q: "How can businesses identify sales-ready leads using AI?",
    a: "By scoring the lead's answers against set criteria, such as matching need, budget in range, near-term timeline and agreement to a meeting, and combining them with data like lead source and past activity.",
  },
  {
    q: "Can AI replace SDRs for lead qualification?",
    a: "It can take over the first-pass qualification of high volumes of leads. Human representatives are still needed for complex deals, relationship building and leads that need judgement.",
  },
  {
    q: "What is the difference between lead qualification software and lead management software?",
    a: "Lead qualification software decides whether a lead is sales-ready. Lead management software stores and tracks leads through the pipeline. AI voice agents typically feed qualification results into the lead management system.",
  },
];

export default function AIVoiceAgentLeadQualificationPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-lead-qualification");
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
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          {/* Back link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary-black font-semibold text-sm sm:text-base hover:opacity-70 transition-opacity group"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
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
                HOW AI VOICE AGENTS HELP BUSINESSES QUALIFY LEADS
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                An AI voice agent for lead qualification calls leads, asks set questions, scores interest and passes sales-ready prospects to your team. See how it works.
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
                    21st November
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
              src="/ai-voice-agent-lead-qualification.png"
              alt="How AI Voice Agents Help Businesses Qualify Leads"
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
                        zIndex: 20,
                      }
                    : fixedState.mode === "bottom"
                    ? {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 20,
                      }
                    : {
                        position: "relative",
                        width: "100%",
                      }
                }
                className="hidden lg:block"
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
                    {TOC_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollTo(item.id)}
                        className={`text-left text-[15px] leading-[1.4] transition-colors cursor-pointer ${
                          activeSection === item.id
                            ? "font-bold text-primary-black"
                            : "font-medium text-dark-grey hover:text-primary-black"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            </aside>

            {/* Right Column: Article Body */}
            <article
              ref={articleRef}
              className="lg:col-span-9 max-w-[743px]"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-4 mb-12 sm:mb-14">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  An AI voice agent for lead qualification is software that calls new leads or answers their calls, asks a short set of questions, and decides whether each lead is ready for a sales conversation. It captures details such as need, budget, timeline and decision-making authority, records them in a CRM and passes sales-ready leads to a salesperson with a summary. Businesses use AI lead qualification calls to sort large numbers of enquiries quickly, so sales teams spend their time on the prospects most likely to buy.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  A qualified lead is a prospect who matches the business&apos;s target customer and shows enough need, interest and ability to buy to justify a sales conversation. AI qualification does not close sales. It sorts leads into sales-ready, not ready yet and not a fit, using the same questions on every call.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AI LEAD QUALIFICATION? */}
              <section id="what-is-ai-lead-qualification" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI LEAD QUALIFICATION?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Lead qualification is the process of deciding whether a lead is worth a salesperson&apos;s time. Traditionally, a sales development representative calls each lead, asks questions and judges the answers. AI sales lead qualification automates the first part of this process: an AI voice agent holds the conversation, collects structured answers and applies the business&apos;s scoring rules.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Automated lead qualification is most useful when lead volume is high, lead quality varies, or leads arrive at hours when no one is available to call. It does not replace sales judgement. It prepares leads so that people can use theirs where it matters.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Three approaches are common:
                  </p>
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Manual calling:</strong> a sales or SDR team calls each lead. It is flexible and builds rapport, but it is slow at volume and the questions vary from caller to caller.
                    </li>
                    <li>
                      <strong>Form scoring only:</strong> software rules score leads from the data they submit. It is fast and cheap, but there is no conversation and little depth.
                    </li>
                    <li>
                      <strong>AI voice agent with human handoff:</strong> an AI agent holds the conversation instantly and asks the same questions every time. It is limited on complex, consultative needs, so those go to a person.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 2: HOW AI LEAD QUALIFICATION WORKS */}
              <section id="how-ai-lead-qualification-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI LEAD QUALIFICATION WORKS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Here is how AI voice agents qualify leads, step by step:
                  </p>
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>A lead arrives.</strong> It may come from a web form, ad campaign, property portal, missed call or an inbound phone call.
                    </li>
                    <li>
                      <strong>The AI voice agent connects quickly.</strong> It calls the lead or answers the call and introduces itself as an automated assistant.
                    </li>
                    <li>
                      <strong>It confirms context.</strong> The agent checks it is speaking to the right person and that the time is suitable.
                    </li>
                    <li>
                      <strong>It asks qualification questions.</strong> The questions follow a script built around the business&apos;s criteria.
                    </li>
                    <li>
                      <strong>It understands the answers.</strong> Speech recognition turns speech into text, and language understanding extracts the details, such as budget range, timeline or location, into structured fields.
                    </li>
                    <li>
                      <strong>It scores and categorises the lead.</strong> Rules assign points or labels, such as hot, warm or not a fit.
                    </li>
                    <li>
                      <strong>It takes the next action.</strong> It books a meeting, transfers the call, notifies a salesperson or closes out the lead politely.
                    </li>
                    <li>
                      <strong>It logs the outcome.</strong> The transcript, answers, score and summary are saved to the CRM.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This is how AI calling helps businesses qualify sales leads without every lead needing a person&apos;s first call.
                  </p>
                </div>
              </section>

              {/* SECTION 3: WHAT QUESTIONS SHOULD AI VOICE AGENTS ASK TO QUALIFY LEADS? */}
              <section id="what-questions-should-ai-voice-agents-ask" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT QUESTIONS SHOULD AI VOICE AGENTS ASK TO QUALIFY LEADS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Good AI qualification questions are short, conversational and tied directly to a decision the sales team will make. Most scripts use four to six questions. More than that increases drop-off, and each question should have a clear reason.
                  </p>

                  {/* Table 1: Example Qualification Questions */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">What to find out</th>
                          <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">Example question</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Need or requirement</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;What are you looking for help with?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Budget</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Do you have a budget range in mind?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Decision authority</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Will you be making this decision yourself, or is anyone else involved?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Timeline</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;When are you hoping to get started?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Fit</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Which city or area are you looking in?&quot; or &quot;How many people are on your team?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Current situation</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;What are you using at the moment?&quot;</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Next step</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;What is a good time for our specialist to call you?&quot;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The questions change by industry:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Real estate:</strong> property type, location, budget, purchase timeline and whether a loan is needed.
                    </li>
                    <li>
                      <strong>Education:</strong> course interest, current qualification, preferred start date and who is deciding.
                    </li>
                    <li>
                      <strong>Insurance and financial services:</strong> product interest, coverage need and timing, without collecting sensitive details the call does not need.
                    </li>
                    <li>
                      <strong>B2B software and services:</strong> use case, company size, current tool, decision-makers and timeline.
                    </li>
                    <li>
                      <strong>Clinics and service businesses:</strong> type of service, urgency and preferred appointment time.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Ask only what the next step needs. Avoid collecting sensitive personal data unnecessarily, and let the lead ask to speak to a person at any point.
                  </p>
                </div>
              </section>

              {/* SECTION 4: HOW BANT QUALIFICATION WORKS WITH AI VOICE AGENTS */}
              <section id="how-bant-qualification-works" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BANT QUALIFICATION WORKS WITH AI VOICE AGENTS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    BANT lead qualification is a framework that checks four criteria: Budget, Authority, Need and Timeline. It is widely attributed to IBM and remains a common starting point for sales qualification. An AI voice agent can ask the BANT questions in a natural conversation and record each answer as a field.
                  </p>

                  {/* Table 2: BANT Framework with AI Voice Agents */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/5 align-top">Criterion</th>
                          <th className="py-3.5 px-4 w-1/4 align-top">What it means</th>
                          <th className="py-3.5 px-4 w-1/3 align-top">AI question</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/4 align-top">Sales-ready signal</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Budget</td>
                          <td className="py-3.5 px-4 align-top">Can the lead afford the solution?</td>
                          <td className="py-3.5 px-4 align-top">&quot;Do you have a budget range in mind?&quot;</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Budget is within your price range</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Authority</td>
                          <td className="py-3.5 px-4 align-top">Can the lead decide or influence the decision?</td>
                          <td className="py-3.5 px-4 align-top">&quot;Who else is involved in choosing?&quot;</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">The lead is the decision-maker or a key influencer</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Need</td>
                          <td className="py-3.5 px-4 align-top">Is there a real problem your offer solves?</td>
                          <td className="py-3.5 px-4 align-top">&quot;What are you trying to achieve?&quot;</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">A specific, relevant need is stated</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Timeline</td>
                          <td className="py-3.5 px-4 align-top">When will they buy?</td>
                          <td className="py-3.5 px-4 align-top">&quot;When do you plan to start?&quot;</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">A near-term, defined timeframe</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    There are practical limits. Many leads will not share a budget on a first call, and buying decisions are often shared. So businesses usually treat BANT as a flexible guide: the AI records what it learns, flags unknowns instead of rejecting the lead, and the sales team follows up on gaps.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HOW AI VOICE AGENTS ASSESS LEAD INTEREST AND REQUIREMENTS */}
              <section id="assess-lead-interest-and-requirements" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS ASSESS LEAD INTEREST AND REQUIREMENTS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice agent assesses interest by combining what the lead says with what the lead does. Useful signals include:
                  </p>
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Specific requirements:</strong> A detailed need, such as a property type and area, signals more intent than a vague one.
                    </li>
                    <li>
                      <strong>Stated timeline:</strong> A near-term date suggests urgency.
                    </li>
                    <li>
                      <strong>Willingness to continue:</strong> Answering all questions and asking their own shows engagement.
                    </li>
                    <li>
                      <strong>Agreement to a next step:</strong> Accepting a meeting or callback is a strong indicator.
                    </li>
                    <li>
                      <strong>Objections and hesitation:</strong> These show what to address in the sales conversation.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Explicit answers are the most reliable inputs. Tone or sentiment estimates can add context, but they are imperfect and should not be the sole basis for rejecting a lead.
                  </p>
                </div>
              </section>

              {/* SECTION 6: AI LEAD SCORING AND QUALIFICATION: IDENTIFYING SALES-READY LEADS */}
              <section id="ai-lead-scoring-and-qualification" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI LEAD SCORING AND QUALIFICATION: IDENTIFYING SALES-READY LEADS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI lead scoring and qualification turn answers into a priority. Most businesses use a points system with clear thresholds. This illustrative example shows the idea, and each business should set its own criteria:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Need matches an offer:</strong> 0 to 3 points
                    </li>
                    <li>
                      <strong>Budget within range:</strong> 0 to 3 points
                    </li>
                    <li>
                      <strong>Decision-maker or key influencer:</strong> 0 to 2 points
                    </li>
                    <li>
                      <strong>Timeline within 30 days:</strong> 0 to 3 points
                    </li>
                    <li>
                      <strong>Agreed to a meeting or callback:</strong> 0 to 2 points
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The total maps to a category. For instance, high scores are hot leads sent to a salesperson immediately, middle scores are warm leads for scheduled follow-up, and low scores are not-yet-ready or not-a-fit leads.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses identify sales-ready leads using AI best when voice answers are combined with other data, such as the lead source, pages visited or past purchases. A strong handoff gives the salesperson the score, the answers, a short summary, the transcript and the best time to call.
                  </p>
                </div>
              </section>

              {/* SECTION 7: AI CALLING FOR LEAD QUALIFICATION: BUSINESS EXAMPLES */}
              <section id="business-examples" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALLING FOR LEAD QUALIFICATION: BUSINESS EXAMPLES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal italic text-dark-grey"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These are illustrative scenarios, not customer results.
                  </p>
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Real estate team:</strong> Portal enquiries arrive at all hours. The AI agent confirms budget, location and timeline, then books site visits for serious buyers and passes only those to agents.
                    </li>
                    <li>
                      <strong>Education business:</strong> The agent asks about course interest and start date, then hands qualified students to a counsellor with their answers.
                    </li>
                    <li>
                      <strong>Financial services or insurance:</strong> The agent confirms product interest and timing, then schedules an adviser call, leaving regulated advice to a licensed person.
                    </li>
                    <li>
                      <strong>B2B service company:</strong> The agent checks company size, use case and decision-makers before a salesperson spends time on a demo.
                    </li>
                    <li>
                      <strong>Clinic or home service:</strong> The agent confirms the service needed and urgency, then books a slot.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 8: WHERE AI VOICE AGENTS FIT WITH LEAD QUALIFICATION SOFTWARE */}
              <section id="lead-qualification-software-fit" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHERE AI VOICE AGENTS FIT WITH LEAD QUALIFICATION SOFTWARE
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Several software categories overlap with lead qualification. Each does a different job:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Lead generation software</strong> finds and captures new leads.
                    </li>
                    <li>
                      <strong>Lead management software</strong> or a lead management system stores, organises and tracks leads through the pipeline.
                    </li>
                    <li>
                      <strong>Lead scoring software</strong> ranks leads from data and rules.
                    </li>
                    <li>
                      <strong>Sales automation software</strong> automates repetitive sales tasks such as reminders and emails.
                    </li>
                    <li>
                      <strong>Lead qualification software</strong> collects answers and decides whether a lead is sales-ready.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice agent adds a spoken conversation to qualify leads by phone. An AI voice agent usually sits between lead capture and the sales team, and writes its results into the existing lead management system.
                  </p>
                </div>
              </section>

              {/* SECTION 9: BENEFITS OF AUTOMATED LEAD QUALIFICATION */}
              <section id="benefits-of-automated-lead-qualification" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF AUTOMATED LEAD QUALIFICATION
                </h2>
                <div className="space-y-4">
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Faster first contact:</strong> Leads are contacted soon after enquiring, while interest is fresh.
                    </li>
                    <li>
                      <strong>Consistent questions:</strong> Every lead is assessed on the same criteria.
                    </li>
                    <li>
                      <strong>Sales time focused on better leads:</strong> Salespeople speak mainly with ready prospects.
                    </li>
                    <li>
                      <strong>Coverage beyond office hours:</strong> Leads arriving at night or on weekends are not left waiting.
                    </li>
                    <li>
                      <strong>Cleaner CRM data:</strong> Answers are recorded in structured fields, with transcripts.
                    </li>
                    <li>
                      <strong>Clear insight:</strong> Patterns show which sources and messages bring the best leads.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 10: LIMITATIONS AND RISKS */}
              <section id="limitations-and-risks" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  LIMITATIONS AND RISKS
                </h2>
                <div className="space-y-4">
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Rigid scoring:</strong> Over-strict rules can reject good leads. Review rejected leads regularly.
                    </li>
                    <li>
                      <strong>Poor questions:</strong> Long or intrusive scripts reduce completion and annoy leads.
                    </li>
                    <li>
                      <strong>Complex needs:</strong> Consultative or high-value deals need a person early.
                    </li>
                    <li>
                      <strong>Compliance:</strong> Calls to leads need valid consent and must follow telecom rules. In India, that includes TRAI&apos;s rules on number series and Do Not Disturb preferences, plus data protection law such as the Digital Personal Data Protection Act, 2023. Confirm requirements with your provider and legal advisor.
                    </li>
                    <li>
                      <strong>Fairness:</strong> Do not score leads on sensitive personal attributes.
                    </li>
                    <li>
                      <strong>Transparency:</strong> The AI should identify itself as an automated assistant and make it easy to reach a person.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 11: HOW TO SET UP AI LEAD QUALIFICATION */}
              <section id="how-to-set-up-ai-lead-qualification" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO SET UP AI LEAD QUALIFICATION
                </h2>
                <div className="space-y-4">
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Define your ideal customer and a sales-ready lead.</strong> Agree this with the sales team.
                    </li>
                    <li>
                      <strong>Choose four to six criteria.</strong> Use BANT or a version that suits your sales process.
                    </li>
                    <li>
                      <strong>Write short, natural questions for each criterion.</strong>
                    </li>
                    <li>
                      <strong>Set scoring and handoff rules.</strong> Decide who receives hot, warm and not-ready leads, and how.
                    </li>
                    <li>
                      <strong>Connect your CRM and calendar</strong> so results and meetings are recorded automatically.
                    </li>
                    <li>
                      <strong>Pilot with real leads</strong> and listen to sample calls.
                    </li>
                    <li>
                      <strong>Compare AI scores with sales outcomes</strong> and adjust questions and scoring.
                    </li>
                  </ol>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-3"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Track these metrics:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>Percentage of leads reached and qualification completion rate.</li>
                    <li>Share of leads rated sales-ready.</li>
                    <li>Sales acceptance rate of AI-qualified leads.</li>
                    <li>Lead-to-meeting and lead-to-sale conversion by score band.</li>
                    <li>Time from enquiry to first conversation.</li>
                    <li>Cost per qualified lead.</li>
                    <li>False positives and false negatives found during review.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 12: CONCLUSION */}
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
                    An AI voice agent for lead qualification helps businesses respond to leads quickly, ask consistent questions and pass only sales-ready prospects to their teams. It works best when the criteria are clear, the scoring is reviewed against real sales results, the AI is transparent and people take over where judgement matters. Used this way, AI lead qualification for businesses saves sales time without lowering lead quality.
                  </p>
                </div>
              </section>

              {/* SECTION 13: FAQS */}
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
        <BlogNavigation currentSlug="ai-voice-agent-lead-qualification" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: AI Voice Agent for Lead Qualification" />
      </div>

      <Footer />
    </div>
  );
}
