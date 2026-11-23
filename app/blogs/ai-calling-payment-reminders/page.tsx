"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-calling", label: "What Is AI Calling for Payment Reminders?" },
  { id: "why-automate-reminders", label: "Why Should Businesses Automate Payment Reminders?" },
  { id: "6-ways-to-use", label: "6 Ways Businesses Can Use AI Voice Calling for Payment Reminders" },
  { id: "how-agents-manage-campaigns", label: "How AI Voice Agents Manage Payment Reminder Campaigns" },
  { id: "capturing-commitments", label: "How AI Voice Agents Capture Payment Commitments" },
  { id: "measuring-performance", label: "How to Measure AI Payment Calling Performance" },
  { id: "choosing-software", label: "How to Choose the Right AI Payment Collection Software" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How does AI calling help businesses manage payment reminders?",
    a: "AI calling helps businesses contact customers about upcoming due dates, pending invoices, and overdue payments while recording responses and scheduling further follow-ups.",
  },
  {
    q: "2. How can businesses automate EMI reminder calls?",
    a: "Businesses can connect their billing systems with AI voice agents to initiate scheduled calls before EMI due dates, communicate payment information, and record customer responses.",
  },
  {
    q: "3. Can AI voice agents help with overdue payment follow-ups?",
    a: "Yes. AI voice agents can remind customers about overdue payments, collect expected payment dates, and direct complicated payment queries to employees.",
  },
  {
    q: "4. What are the benefits of automated payment reminder calls?",
    a: "The benefits include reduced manual calling work, consistent reminders, organized payment records, improved follow-up tracking, and more time for employees to handle important customer queries.",
  },
  {
    q: "5. How does AI calling support routine debt collection?",
    a: "AI calling can manage routine payment notifications, communicate verified outstanding amounts, record customer responses, and organize further follow-ups while keeping sensitive cases with authorized employees.",
  },
  {
    q: "6. Can AI voice agents replace payment collection teams?",
    a: "No. AI voice agents can manage repetitive reminders and basic payment enquiries, but disputes, negotiations, complaints, and sensitive financial discussions still require human assistance.",
  },
];

export default function AICallingPaymentRemindersPage() {
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
        {/* Article Header Container (1270px x Hug) */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-12">
          {/* Back link above the header row with exact ~15px gap to title */}
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 xl:gap-14 2xl:gap-[120px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[940px]">
              <h1
                className="font-normal uppercase text-primary-black text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span className="block sm:whitespace-nowrap">HOW BUSINESSES CAN USE AI CALLING</span>
                <span className="block sm:whitespace-nowrap">FOR PAYMENT REMINDERS AND COLLECTIONS</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[660px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Discover how AI calling for payment reminders helps businesses automate EMI reminders, follow up on overdue payments, and track collections.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-primary-black pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                {/* Text lines */}
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-primary-black"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    20th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    8 min read
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
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515] min-h-[160px]">
            <Image
              src="/How Businesses Can Use AI Calling for Payment Reminders and Collections.png"
              alt="How Businesses Can Use AI Calling for Payment Reminders and Collections"
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
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Managing pending payments is an important responsibility for businesses, especially when they handle multiple customers, invoices, subscriptions, or loan instalments. If you are wondering how businesses can manage payment collection calls using AI, manually contacting every customer about payment deadlines can take considerable time and may result in missed reminders or delayed follow-ups.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI calling for payment reminders helps businesses automate routine payment-related conversations using AI voice agents. These agents can notify customers about upcoming due dates, follow up on overdue payments, remind borrowers about EMI deadlines, and record customer responses. This allows businesses to maintain consistent communication, reduce repetitive calling work, and organize payment follow-ups more efficiently.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AI CALLING FOR PAYMENT REMINDERS? */}
              <section id="what-is-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI CALLING FOR PAYMENT REMINDERS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling for payment reminders uses artificial intelligence to contact customers through automated voice conversations, often deployed as an AI voice bot. Unlike traditional recorded calls, AI voice agents can understand customer responses, answer common payment-related questions using verified information, and record the outcome of each conversation.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, a financial service provider can use an AI voice agent to remind customers about upcoming instalments, communicate payment deadlines, and record whether they have already completed their payments.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These systems can also connect with CRM, billing, or payment management platforms to access relevant customer information and maintain updated payment records.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY SHOULD BUSINESSES AUTOMATE PAYMENT REMINDERS? */}
              <section id="why-automate-reminders" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY SHOULD BUSINESSES AUTOMATE PAYMENT REMINDERS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Manually managing payment follow-ups becomes difficult when businesses have hundreds or thousands of customers.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling can help businesses:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Save time:</strong> Automate repetitive payment reminder calls.
                    </li>
                    <li>
                      <strong>Maintain consistency:</strong> Contact customers according to planned reminder schedules.
                    </li>
                    <li>
                      <strong>Improve payment tracking:</strong> Record customer responses and payment commitments.
                    </li>
                    <li>
                      <strong>Manage overdue accounts:</strong> Identify customers who require additional follow-ups.
                    </li>
                    <li>
                      <strong>Reduce manual workload:</strong> Allow employees to focus on complex payment queries and customer assistance.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 3: 6 WAYS BUSINESSES CAN USE AI VOICE CALLING */}
              <section id="6-ways-to-use" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  6 WAYS BUSINESSES CAN USE AI VOICE CALLING FOR PAYMENT REMINDERS
                </h2>
                <div className="space-y-6">
                  {/* 1. Automated Payment Due-Date Reminders */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      1. AUTOMATED PAYMENT DUE-DATE REMINDERS
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Businesses can use AI payment reminder calls to notify customers before their payment deadlines. These reminders can communicate the due date, pending amount, and available payment options using verified business information.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, a broadband service provider can automatically contact customers before their monthly subscription expires and remind them to renew their plans.
                    </p>
                  </div>

                  {/* 2. EMI Payment Reminders */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      2. EMI PAYMENT REMINDERS
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Banks, financial service providers, and lending businesses regularly need to remind borrowers about upcoming instalments.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      AI EMI reminder calls can help communicate payment dates and record customer responses. Businesses can configure automated EMI reminder calls before due dates and schedule further communication when customers request assistance.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, a lending company can contact borrowers a few days before their monthly EMI deadline and remind them about the scheduled payment.
                    </p>
                  </div>

                  {/* 3. Overdue Payment Follow-Ups */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      3. OVERDUE PAYMENT FOLLOW-UPS
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      When customers miss payment deadlines, businesses may need multiple follow-ups to understand the reason for the delay.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Overdue payment reminder calls can help businesses contact customers, communicate pending payment information, and record their responses.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, a wholesale distributor can use AI calling to contact retailers with outstanding invoices and record whether they need additional time to complete payment.
                    </p>
                  </div>

                  {/* 4. Invoice Payment Reminder Automation */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      4. INVOICE PAYMENT REMINDER AUTOMATION
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Businesses that work with recurring invoices often spend time contacting customers about pending payments.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Invoice payment reminder automation can help contact customers before and after invoice due dates.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      For example, a digital marketing agency can use AI calling to remind business clients about outstanding monthly service invoices and record whether payment has been completed.
                    </p>
                  </div>

                  {/* 5. Customer Payment Commitments */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      5. CUSTOMER PAYMENT COMMITMENTS
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Some customers may not be able to make payments immediately but may provide a specific date for completing them.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      AI voice agents can ask customers about their expected payment dates and record their responses.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      This helps businesses understand which customers have requested additional time and which accounts require further attention.
                    </p>
                  </div>

                  {/* 6. Routine Debt Collection Follow-Ups */}
                  <div>
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.15] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      6. ROUTINE DEBT COLLECTION FOLLOW-UPS
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Businesses involved in lending, subscriptions, and credit-based services may need regular communication with customers regarding outstanding balances.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      AI voice agents can support routine debt collection by communicating verified account information, asking about payment status, and recording customer requests.
                    </p>
                    <p
                      className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      An AI voice agent for loan collections can assist with routine reminders and payment-related enquiries while directing disputes, complaints, and sensitive financial discussions to authorized employees.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: HOW AI VOICE AGENTS MANAGE PAYMENT REMINDER CAMPAIGNS */}
              <section id="how-agents-manage-campaigns" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS MANAGE PAYMENT REMINDER CAMPAIGNS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A typical automated payment reminder workflow involves several steps:
                  </p>
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Step 1: Collect Payment Information:</strong> The business connects its billing system or customer database to access verified due dates, invoice details, and payment status.
                    </li>
                    <li>
                      <strong>Step 2: Configure Reminder Campaigns:</strong> Businesses define when reminders should be made, such as before the due date or after a payment becomes overdue.
                    </li>
                    <li>
                      <strong>Step 3: Initiate Automated Calls:</strong> The AI voice agent contacts customers and communicates relevant payment information.
                    </li>
                    <li>
                      <strong>Step 4: Understand Customer Responses:</strong> The agent records whether the customer has paid, needs assistance, or expects to complete payment later.
                    </li>
                    <li>
                      <strong>Step 5: Update Payment Records:</strong> Call outcomes can be stored in the connected CRM or payment management system for further tracking.
                    </li>
                    <li>
                      <strong>Step 6: Schedule Further Follow-Ups:</strong> Customers who require additional assistance or have requested callbacks can be assigned appropriate follow-up actions.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 5: HOW AI VOICE AGENTS CAPTURE PAYMENT COMMITMENTS */}
              <section id="capturing-commitments" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS CAPTURE PAYMENT COMMITMENTS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    One useful capability of AI calling is recording customer responses during payment-related conversations.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, when a customer says, &ldquo;I will complete the payment by Monday,&rdquo; the AI agent can identify the expected payment date and record it in the business system.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Understanding how AI voice agents capture payment commitments helps businesses organize follow-up activities.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These records can include:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>Customer payment confirmation.</li>
                    <li>Expected payment date.</li>
                    <li>Requests for additional time.</li>
                    <li>Payment-related queries.</li>
                    <li>Requests to speak with an accounts representative.</li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should verify payment completion through their actual payment systems rather than treating a verbal commitment as a completed transaction.
                  </p>
                </div>
              </section>

              {/* SECTION 6: HOW TO MEASURE AI PAYMENT CALLING PERFORMANCE */}
              <section id="measuring-performance" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO MEASURE AI PAYMENT CALLING PERFORMANCE
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should track campaign performance to understand whether automated payment collections are helping improve their payment follow-up process.
                  </p>

                  {/* Metrics Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-2/5 align-top">Metric</th>
                          <th className="py-3.5 pl-4 pr-0 w-3/5 align-top">What It Measures</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Calls Attempted</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Total payment reminder calls initiated</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Connection Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of customers answering calls</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Payment Confirmation Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of customers confirming payment</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Commitment Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers providing an expected payment date</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Follow-Up Completion</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Scheduled follow-ups attempted</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Collection Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Amount collected compared with the amount due</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Cost Per Successful Collection</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Campaign expenditure divided by successful collections</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Tracking these metrics helps businesses identify communication gaps, review payment outcomes, and improve reminder schedules.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW TO CHOOSE THE RIGHT AI PAYMENT COLLECTION SOFTWARE */}
              <section id="choosing-software" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CHOOSE THE RIGHT AI PAYMENT COLLECTION SOFTWARE
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Before selecting AI collection calling software or payment collection software, businesses should consider:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>CRM and Billing Integration:</strong> Ability to connect with existing customer and invoice records.
                    </li>
                    <li>
                      <strong>Custom Calling Scripts:</strong> Flexibility to configure payment reminders and follow-up conversations.
                    </li>
                    <li>
                      <strong>Payment Tracking:</strong> Ability to record customer responses and update payment status.
                    </li>
                    <li>
                      <strong>Call Scheduling:</strong> Options for configuring due-date reminders and overdue follow-ups.
                    </li>
                    <li>
                      <strong>Reporting:</strong> Dashboards to monitor calling outcomes and collection performance.
                    </li>
                    <li>
                      <strong>Human Assistance:</strong> Ability to direct disputes and complicated financial queries to employees.
                    </li>
                    <li>
                      <strong>Data Security:</strong> Responsible handling of financial and customer information.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Businesses should also ensure that calling campaigns follow applicable telecom, privacy, consent, and debt collection requirements. AI agents should never request sensitive credentials such as OTPs, PINs, or banking passwords.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW CALLIENCE HELPS */}
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
                    <Link href="/#features" className="font-semibold underline hover:text-black transition-colors">Callience</Link> helps businesses automate inbound and outbound customer communication through <Link href="/blogs/what-is-an-ai-voice-agent" className="font-semibold underline hover:text-black transition-colors">AI-powered voice agents</Link>. Businesses can use these workflows for <Link href="/#use-cases" className="font-semibold underline hover:text-black transition-colors">payment and renewal reminders</Link>, follow-ups, <Link href="/#use-cases" className="font-semibold underline hover:text-black transition-colors">lead qualification</Link>, appointment reminders, and <Link href="/#use-cases" className="font-semibold underline hover:text-black transition-colors">customer re-engagement</Link>.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For payment-related communication, AI agents can contact customers, provide basic reminder information, collect responses, and direct complicated queries to the appropriate team. These workflows help businesses reduce repetitive calling tasks, maintain consistent follow-ups, and give employees more time to focus on important customer interactions.
                  </p>
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
                    AI calling can help businesses manage payment reminders and collections by automating routine calls, tracking customer responses, and organizing follow-up activities. From EMI notifications and invoice reminders to overdue payment follow-ups, AI voice agents can support different payment communication requirements.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    By combining automated calling with accurate payment records and proper customer handling, businesses can make their payment follow-up process more organized while keeping human employees available for sensitive or complicated discussions.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Discover how Callience automates collections and reminders with <Link href="/#features" className="font-semibold underline hover:text-black transition-colors">real-time call transcription and CRM sync</Link>, read our <Link href="/blogs/automated-outbound-calling-guide" className="font-semibold underline hover:text-black transition-colors">automated outbound calling guide</Link>, or view our transparent <Link href="/#pricing" className="font-semibold underline hover:text-black transition-colors">per-minute calling plans</Link>.
                  </p>
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
        <BlogNavigation currentSlug="ai-calling-payment-reminders" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: AI Calling for Payment Reminders" />
      </div>

      <Footer />
    </div>
  );
}
