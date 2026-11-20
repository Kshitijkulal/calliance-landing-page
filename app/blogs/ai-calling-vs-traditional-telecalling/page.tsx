"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-calling", label: "What Is AI Calling?" },
  { id: "what-is-traditional-telecalling", label: "What Is Traditional Telecalling?" },
  { id: "key-differences", label: "AI Calling vs Traditional Telecalling: Key Differences" },
  { id: "cost-comparison", label: "AI Calling Cost vs Telecaller Cost in India" },
  { id: "scalability", label: "Scalability: AI Calling vs Human Telecallers" },
  { id: "customer-trust", label: "Customer Trust: AI Calling Agent vs Human Telecaller" },
  { id: "productivity-efficiency", label: "AI Calling vs Manual Calling: Productivity and Efficiency" },
  { id: "practical-applications", label: "Practical Business Applications of AI Calling" },
  { id: "hybrid-calling", label: "What Is AI Human Hybrid Calling?" },
  { id: "benefits-and-limitations", label: "Benefits and Limitations of AI Calling" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is the main difference between AI calling and traditional telecalling?",
    a: "AI calling uses automated voice agents to communicate with customers, while traditional telecalling relies on human employees. AI is useful for repetitive conversations, while humans are better suited to complex discussions.",
  },
  {
    q: "2. Is AI calling cheaper than traditional telecalling?",
    a: "AI calling can reduce costs for high-volume, repetitive tasks. However, actual expenses depend on call duration, platform pricing, telephony charges and implementation requirements.",
  },
  {
    q: "3. Can AI calling replace human telecallers?",
    a: "AI calling can automate many routine activities, but human telecallers remain important for sensitive discussions, negotiations and complicated customer enquiries.",
  },
  {
    q: "4. Is AI calling suitable for small businesses in India?",
    a: "Yes. MSMEs and startups can use AI calling for lead qualification, customer follow-ups, appointment reminders and other repetitive communication tasks.",
  },
  {
    q: "5. What is AI human hybrid calling?",
    a: "AI human hybrid calling combines AI voice agents with human representatives. AI handles routine conversations, while human agents manage complex enquiries and important customer interactions.",
  },
  {
    q: "6. Can AI calling improve lead generation?",
    a: "AI calling can support lead generation by contacting prospects, asking qualification questions and identifying interested customers. Actual results depend on lead quality, campaign design and follow-up processes.",
  },
];

export default function AICallingVsTraditionalTelecallingPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-calling");
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
                AI CALLING VS TRADITIONAL
                <br className="hidden sm:inline" /> TELECALLING: COST, SCALE & TRUST
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[580px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI calling vs traditional telecalling is an important comparison for businesses seeking efficient communication, differing in cost, scalability and customer experience.
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
                    17th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    6 min read
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

        {/* Hero Image Section — 1440x515 Full-Width Display matching Figma reference */}
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden min-h-[160px]">
          <div className="relative w-full aspect-[1440/515]">
            <Image
              src="/ai-calling-vs-traditional-telecalling.png"
              alt="AI Calling vs Traditional Telecalling: Cost, Scale & Trust"
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
                                : "bg-transparent group-hover:bg-card-border"
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
                  Traditional telecalling relies on human agents to handle conversations, while AI calling uses automated voice agents to communicate with customers. AI agents can understand spoken responses, answer common questions and perform repetitive calling tasks using configured business information.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Let&apos;s compare AI calling and traditional telecalling based on cost, scalability, customer trust and practical business applications to understand which approach works best for growing businesses.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AI CALLING? */}
              <section id="what-is-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI CALLING?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling uses artificial intelligence to make or receive phone calls and communicate with customers through automated voice conversations. AI voice agents can listen to customer responses, understand basic requirements and provide relevant answers.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses commonly use AI calling for:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Lead Qualification:</strong> Contact potential customers and identify interested leads.
                    </li>
                    <li>
                      <strong>Customer Follow-Ups:</strong> Reach out to customers who have requested information.
                    </li>
                    <li>
                      <strong>Appointment Reminders:</strong> Remind customers about scheduled appointments.
                    </li>
                    <li>
                      <strong>Payment Reminders:</strong> Inform customers about upcoming or pending payments.
                    </li>
                    <li>
                      <strong>Customer Re-Engagement:</strong> Reconnect with previous customers or inactive leads.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, an education consultancy can use an AI telecaller for lead generation to contact students, understand their course preferences and schedule counselling sessions.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHAT IS TRADITIONAL TELECALLING? */}
              <section id="what-is-traditional-telecalling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS TRADITIONAL TELECALLING?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Traditional telecalling involves human agents making or receiving phone calls to communicate with customers. Telecallers handle enquiries, explain products, follow up with leads and provide customer support.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, a real estate company may hire telecallers to contact potential buyers, discuss property requirements and arrange site visits.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Human telecallers can adapt conversations, understand emotional situations and handle complex questions. However, businesses must manage recruitment, training, salaries and employee availability.
                  </p>
                </div>
              </section>

              {/* SECTION 3: KEY DIFFERENCES */}
              <section id="key-differences" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALLING VS TRADITIONAL TELECALLING: KEY DIFFERENCES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The main difference between AI calling and manual calling is how customer conversations are handled. AI calling uses automated systems, while traditional telecalling depends on human employees.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Feature</th>
                          <th className="py-3.5 px-4 w-3/8 align-top">AI Calling</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">Traditional Telecalling</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Communication</td>
                          <td className="py-3.5 px-4 align-top">AI-generated voice conversations</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Human conversations</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Availability</td>
                          <td className="py-3.5 px-4 align-top">Can operate 24/7</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Depends on working shifts</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Calling Capacity</td>
                          <td className="py-3.5 px-4 align-top">Multiple simultaneous calls</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Limited by available agents</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Cost Structure</td>
                          <td className="py-3.5 px-4 align-top">Usage-based or subscription-based</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Salaries and operational expenses</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Scalability</td>
                          <td className="py-3.5 px-4 align-top">Can expand through system capacity</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Usually requires more employees</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Consistency</td>
                          <td className="py-3.5 px-4 align-top">Follows configured instructions</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Depends on individual agents</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer Trust</td>
                          <td className="py-3.5 px-4 align-top">Depends on transparency and call quality</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Supports direct human interaction</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Complex Queries</td>
                          <td className="py-3.5 px-4 align-top">May require human assistance</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Better suited to nuanced discussions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Both approaches have advantages. The right choice depends on calling volume, customer requirements, available budget and the complexity of conversations.
                  </p>
                </div>
              </section>

              {/* SECTION 4: COST COMPARISON */}
              <section id="cost-comparison" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALLING COST VS TELECALLER COST IN INDIA
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Cost is a major factor when businesses compare AI calling with traditional telecalling. Both approaches involve different types of expenses.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    1. Traditional Telecalling Costs
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The telecaller cost in India depends on employee experience, location, industry and company requirements. Businesses generally need to consider:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Employee Salaries:</strong> Monthly compensation for telecalling staff.
                    </li>
                    <li>
                      <strong>Recruitment and Training:</strong> Costs involved in hiring and preparing employees.
                    </li>
                    <li>
                      <strong>Calling Infrastructure:</strong> Telephony services, CRM software and equipment.
                    </li>
                    <li>
                      <strong>Management Expenses:</strong> Supervision, quality monitoring and performance tracking.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    As calling requirements increase, businesses may need to hire additional employees, which increases recurring expenses.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-4"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    2. AI Calling Costs
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling platforms commonly follow usage-based, subscription-based or customized pricing models. Expenses may include:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Call Charges:</strong> Costs based on call duration or usage.
                    </li>
                    <li>
                      <strong>AI Processing:</strong> Speech recognition, language processing and voice generation.
                    </li>
                    <li>
                      <strong>Platform Subscription:</strong> Access to calling features and campaign management.
                    </li>
                    <li>
                      <strong>Setup and Integration:</strong> Configuration of workflows and business systems.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, an MSME managing hundreds of routine follow-up calls may find AI calling more cost-efficient than expanding its telecalling team. However, actual savings depend on usage, pricing and implementation requirements.
                  </p>
                </div>
              </section>

              {/* SECTION 5: SCALABILITY */}
              <section id="scalability" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  SCALABILITY: AI CALLING VS HUMAN TELECALLERS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Scalability refers to how easily a business can increase its calling capacity when customer demand grows.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Traditional telecalling usually requires additional employees to handle more conversations. Hiring, training and managing larger teams can take time and increase operational costs.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling systems can manage multiple simultaneous conversations, depending on platform capacity, telephony infrastructure and configured concurrency limits.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, a startup launching a new service may receive hundreds of enquiries in one day. An AI calling agent can contact interested customers, ask qualifying questions and identify leads that require human assistance.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This makes automated calling useful for businesses with changing call volumes, seasonal campaigns or growing customer databases.
                  </p>
                </div>
              </section>

              {/* SECTION 6: CUSTOMER TRUST */}
              <section id="customer-trust" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CUSTOMER TRUST: AI CALLING AGENT VS HUMAN TELECALLER
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Customer trust plays an important role in successful business communication. Both AI agents and human telecallers can provide useful customer experiences, but they have different strengths.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    1. Trust in Human Telecalling
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Human telecallers can recognise emotional concerns, adjust their communication style and handle sensitive discussions. Customers may prefer human assistance when making important decisions or resolving complicated problems.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-4"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    2. Trust in AI Calling
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI voice agents can provide consistent information, respond to common questions and maintain structured conversations. However, customer confidence depends on response accuracy, transparency and the ability to reach human support when needed.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, an AI agent can remind a customer about an upcoming payment. If the customer raises a billing dispute, transferring the conversation to a human representative may be more appropriate.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should also disclose AI involvement where required, respect customer calling preferences and protect personal information.
                  </p>
                </div>
              </section>

              {/* SECTION 7: PRODUCTIVITY AND EFFICIENCY */}
              <section id="productivity-efficiency" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALLING VS MANUAL CALLING: PRODUCTIVITY AND EFFICIENCY
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Manual telecalling often involves repetitive activities such as introducing services, confirming customer details and making follow-up calls. These tasks can consume significant employee time.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling can automate structured conversations and help employees focus on activities that require personal attention.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, an educational institute can use AI calling to:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>Contact students who submit admission enquiries.</li>
                    <li>Ask about preferred courses and qualifications.</li>
                    <li>Share basic admission information.</li>
                    <li>Schedule counselling appointments.</li>
                    <li>Identify students requiring human assistance.</li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Human counsellors can then focus on detailed guidance and admission-related discussions instead of handling every initial enquiry manually.
                  </p>
                </div>
              </section>

              {/* SECTION 8: PRACTICAL BUSINESS APPLICATIONS */}
              <section id="practical-applications" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  PRACTICAL BUSINESS APPLICATIONS OF AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling can support repetitive communication across different industries and business sizes.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    1. Lead Qualification
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI telecaller for lead generation can contact potential customers, ask relevant questions and identify interested prospects. Real estate companies, education consultancies and service providers can use this approach to organise leads.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    2. Customer Follow-Ups
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can use AI agents to contact customers who previously requested information or showed interest in a product. This helps maintain consistent follow-up communication.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    3. Appointment Reminders
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Clinics, salons and consulting businesses can automate appointment reminder calls. AI agents can share appointment details and collect confirmation responses where supported.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    4. Payment Reminders
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling can remind customers about upcoming payment deadlines, subscription renewals and pending invoices. Complex payment disputes should be handled by authorised human representatives.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    5. Customer Re-Engagement
                  </h3>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses can reconnect with inactive customers or previous leads through automated calling campaigns. For example, a fitness centre may contact former members about available membership programmes.
                  </p>
                </div>
              </section>

              {/* SECTION 9: WHAT IS AI HUMAN HYBRID CALLING? */}
              <section id="hybrid-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI HUMAN HYBRID CALLING?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI human hybrid calling combines automated voice agents with human telecallers. Instead of replacing the entire calling team, businesses use AI for repetitive conversations and human agents for complex customer requirements.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A typical hybrid calling process includes:
                  </p>
                  <ol
                    className="list-decimal pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>AI Calling:</strong> The AI contacts a potential customer.
                    </li>
                    <li>
                      <strong>Lead Qualification:</strong> It asks questions and identifies customer requirements.
                    </li>
                    <li>
                      <strong>Information Collection:</strong> Relevant responses are recorded.
                    </li>
                    <li>
                      <strong>Human Handoff:</strong> Interested customers are connected or assigned to human agents.
                    </li>
                    <li>
                      <strong>Follow-Up:</strong> The human team handles detailed discussions and next steps.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, a real estate business can use AI calling to identify interested property buyers while sales executives manage negotiations and site visits.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This approach helps businesses combine automation efficiency with meaningful human interaction.
                  </p>
                </div>
              </section>

              {/* SECTION 10: BENEFITS AND LIMITATIONS */}
              <section id="benefits-and-limitations" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS AND LIMITATIONS OF AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling offers several practical advantages, but businesses should also understand its limitations before implementation.
                  </p>

                  {/* Benefits & Limitations Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/2 align-top">Benefits</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/2 align-top">Practical Limitations</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 align-top">Automates repetitive calling tasks</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">May struggle with complex questions</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 align-top">Supports multiple simultaneous calls</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Depends on system capacity</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 align-top">Maintains consistent communication</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Requires accurate business information</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 align-top">Can operate outside normal office hours</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Must follow calling regulations</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 align-top">Provides campaign and call insights</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Needs proper setup and monitoring</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 align-top">Supports multilingual communication</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Accuracy may vary across languages and accents</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling works best when businesses select suitable workflows, monitor conversation quality and provide human assistance when necessary.
                  </p>
                </div>
              </section>

              {/* SECTION 11: HOW CALLIENCE HELPS */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience provides customized AI voice agents designed to help businesses automate routine customer communication. Its solutions support activities such as lead qualification, outbound follow-ups, admissions outreach, payment reminders, appointment reminders and customer re-engagement.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience offers several business-focused capabilities:
                  </p>
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Customized AI Voice Agents:</strong> Calling workflows configured around specific business requirements.
                    </li>
                    <li>
                      <strong>65+ Languages:</strong> Multilingual voice communication for customers across different regions.
                    </li>
                    <li>
                      <strong>Campaign Insights:</strong> Information about call outcomes, customer responses and campaign performance.
                    </li>
                    <li>
                      <strong>Calling Automation:</strong> Support for repetitive customer communication activities.
                    </li>
                    <li>
                      <strong>Expert Guidance:</strong> Assistance with planning and implementing suitable AI calling workflows.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These capabilities can help MSMEs, startups and growing businesses manage customer communication while allowing human teams to focus on more complex conversations.
                  </p>
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
                    AI calling vs traditional telecalling is not simply a comparison between automation and human employees. Both approaches offer advantages depending on business requirements, customer expectations and calling volume.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling can help businesses automate repetitive conversations, manage larger calling campaigns and maintain consistent communication. Traditional telecalling remains valuable for complex discussions, customer relationships and situations requiring human judgment.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For many businesses, AI human hybrid calling offers a practical balance between operational efficiency and personal customer interaction.
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
        <BlogNavigation currentSlug="ai-calling-vs-traditional-telecalling" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
