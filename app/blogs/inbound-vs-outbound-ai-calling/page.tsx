"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-inbound-ai-calling", label: "What Is Inbound AI Calling?" },
  { id: "what-is-outbound-ai-calling", label: "What Is Outbound AI Calling?" },
  { id: "key-differences", label: "Inbound vs Outbound AI Calling: Key Differences" },
  { id: "which-should-you-choose", label: "Which Should Your Business Choose?" },
  { id: "can-businesses-use-both", label: "Can Businesses Use Both?" },
  { id: "how-to-choose-what-to-automate", label: "How to Choose What to Automate First" },
  { id: "benefits", label: "Benefits of Inbound and Outbound AI Calling" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses Automate AI Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is the difference between inbound and outbound AI calling?",
    a: "Inbound AI calling handles incoming calls initiated by customers seeking support, bookings, or inquiries, prioritizing resolution and low latency. Outbound AI calling proactively initiates calls from the business to prospects or customers for lead follow-ups, appointment reminders, qualification, and payment notifications.",
  },
  {
    q: "2. What is inbound AI calling and how does it work?",
    a: "Inbound AI calling uses conversational voice AI agents connected to business telephony (virtual numbers or toll-free lines). When a customer calls, speech recognition (ASR) transcribes their speech, a Large Language Model (LLM) understands intent and queries backend databases or CRMs via API webhooks, and text-to-speech (TTS) responds instantly in natural, human-like voice.",
  },
  {
    q: "3. What is outbound AI calling and what are its best use cases?",
    a: "Outbound AI calling automates phone outreach initiated by businesses. Top use cases include immediate lead follow-up within 60 seconds of web form submissions, appointment and webinar attendance reminders, renewal and payment EMI notifications, customer satisfaction surveys, and re-engaging inactive leads.",
  },
  {
    q: "4. Can an AI voice agent handle both inbound and outbound calls?",
    a: "Yes. Leading conversational AI platforms like Callience support hybrid calling architectures. A unified AI voice agent can run outbound lead generation campaigns and seamlessly answer inbound callback inquiries from the exact same customers with full contextual history.",
  },
  {
    q: "5. Is outbound AI calling legal and compliant with TRAI regulations in India?",
    a: "Yes, outbound AI calling is fully legal in India when configured according to Telecom Regulatory Authority of India (TRAI) guidelines. This includes scrubbing contact lists against the National Customer Preference Register (NCPR/DND), calling strictly within permitted hours (9:00 AM to 9:00 PM), using registered telemarketing headers (140/160 series), and honoring opt-outs.",
  },
  {
    q: "6. Which is better for lead generation: inbound or outbound AI calling?",
    a: "Both play critical roles in a high-converting sales funnel. Inbound AI calling captures high-intent prospects who call directly from search, Google Ads, or social campaigns. Outbound AI calling accelerates speed-to-lead by immediately calling prospects who submitted forms or downloaded resources.",
  },
  {
    q: "7. What languages and accents do conversational voice AI agents support in India?",
    a: "Modern voice AI agents like Callience support over 65+ languages including English, Hindi, Hinglish, Tamil, Telugu, Marathi, Kannada, Bengali, Gujarati, and Punjabi, complete with native regional accents, natural conversational pauses, and speech interruption capabilities.",
  },
];

export default function InboundVsOutboundAICallingPage() {
  const [activeSection, setActiveSection] = useState("what-is-inbound-ai-calling");
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
                INBOUND VS OUTBOUND AI CALLING:
                <br className="hidden sm:inline" /> CHOOSE WHAT TO AUTOMATE
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Compare inbound vs outbound AI calling for Indian enterprises and MSMEs across Delhi NCR, Mumbai, and Bengaluru. Learn differences in workflows, TRAI compliance, and ROI to automate the right calls first.
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
                    18th November
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
              src="/inbound-vs-outbound-ai-calling.png"
              alt="Inbound vs Outbound AI Calling: Choose What to Automate"
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
              <div className="mb-14">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.6] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  For businesses across India—from fast-scaling startups in Bengaluru and Delhi-NCR to established MSMEs and clinics in Mumbai and Pune—phone calls remain the single most trusted, high-conversion channel for customer communication. Deciding what to automate starts with understanding <strong>inbound vs outbound AI calling</strong>: inbound voice AI answers customer-initiated calls 24/7 for instant support, appointment booking, and order inquiries, while outbound voice AI proactively connects with prospects for rapid lead qualification, payment reminders, and follow-ups. Choosing the right approach—or deploying a synchronized hybrid strategy—enables Indian enterprises to eliminate wait times, maintain TRAI compliance, and scale communication without multiplying headcount.
                </p>
              </div>

              {/* SECTION 1: WHAT IS INBOUND AI CALLING? */}
              <section id="what-is-inbound-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS INBOUND AI CALLING?
                </h2>
                <div
                  className="space-y-5 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    <strong>Inbound AI calling</strong> refers to artificial intelligence-powered voice systems engineered to answer, understand, and resolve incoming telephone calls initiated by customers. When a caller dials your toll-free number (1800 series), landline, or virtual mobile DID, an inbound AI voice agent answers instantaneously—eliminating hold times, frustrating IVR menu mazes (&ldquo;Press 1 for Sales, Press 2 for Support&rdquo;), and dropped calls.
                  </p>
                  <p>
                    Unlike traditional interactive voice response systems that rely on keypad tones or robotic pre-recorded scripts, modern inbound voice AI leverages real-time <strong>Automatic Speech Recognition (ASR)</strong>, advanced <strong>Large Language Models (LLMs)</strong>, and neural <strong>Text-to-Speech (TTS)</strong> engines. This allows the AI agent to hold natural, context-aware conversations, understand complex accents and colloquial phrasing (such as Indian English, Hindi, and Hinglish), retrieve live customer data via API integrations, and take definitive actions in real time.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    High-Impact Inbound AI Calling Use Cases
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>24/7 Tier-1 Customer Support &amp; FAQs:</strong> Instantly answering recurring questions regarding product pricing, operating hours, delivery timelines, warranty terms, and office locations without keeping callers in a waiting queue.
                    </li>
                    <li>
                      <strong>Automated Appointment Booking &amp; Rescheduling:</strong> Directly syncing with Google Calendar, Practo, Calendly, or proprietary EHR/CRM software to check real-time availability, lock in appointments, and send immediate WhatsApp confirmation links.
                    </li>
                    <li>
                      <strong>High-Intent Inbound Lead Capture:</strong> Engaging potential buyers who call directly from Google Search Ads, social campaigns, or billboards. The AI qualifies the lead&apos;s budget and timeline before booking a meeting with your senior sales representatives.
                    </li>
                    <li>
                      <strong>Context-Aware Intelligent Call Routing:</strong> Understanding caller sentiment, urgency, and query complexity to execute warm transfers to human specialists, accompanied by a real-time transcript and query summary.
                    </li>
                    <li>
                      <strong>E-Commerce Order Status &amp; Logistics Tracking:</strong> Connecting with Shopify, WooCommerce, Shiprocket, or custom ERP systems to provide live tracking updates, address verification, and return process guidance.
                    </li>
                  </ul>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-3 mb-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    Realistic Example: Inbound Healthcare Clinic Call
                  </h3>
                  <div className="bg-white border border-card-border rounded-xl p-5 my-3 text-[15px] sm:text-[16px] space-y-2">
                    <p className="font-semibold text-primary-black border-b border-card-border pb-2">
                      Scenario: A patient calling an orthopedic clinic in Delhi-NCR during peak hours.
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;Namaste and welcome to Apex Orthopedic Centre. I am your virtual assistant. How may I help you today?&rdquo;
                    </p>
                    <p>
                      <strong>Caller:</strong> &ldquo;Hi, I have severe knee pain and need an appointment with Dr. Sharma for tomorrow afternoon. Do you have any open slots?&rdquo;
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;I understand how uncomfortable that must be. Let me check Dr. Sharma&apos;s schedule for tomorrow, Thursday. We have an opening at 2:30 PM and another at 4:45 PM. Would either of those work for you?&rdquo;
                    </p>
                    <p>
                      <strong>Caller:</strong> &ldquo;4:45 PM works better. Please book that.&rdquo;
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;Done! Your consultation with Dr. Sharma is booked for tomorrow at 4:45 PM. I have sent the clinic location map and digital booking receipt to this mobile number via WhatsApp. Is there anything else I can assist you with?&rdquo;
                    </p>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                    By resolving the patient inquiry in under 60 seconds with zero hold time, the clinic eliminates lost patient appointments while relieving front-desk staff from answering 150+ repetitive scheduling calls each day.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHAT IS OUTBOUND AI CALLING? */}
              <section id="what-is-outbound-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS OUTBOUND AI CALLING?
                </h2>
                <div
                  className="space-y-5 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    <strong>Outbound AI calling</strong> refers to automated, proactive telephone calls placed by an artificial intelligence voice agent to a designated list of prospective or existing customers. Rather than requiring human telecallers to manually dial hundreds of numbers, endure ringing tones, and navigate voicemails, an outbound AI voice agent initiates calls at enterprise scale according to predefined campaign triggers or automated CRM workflows.
                  </p>
                  <p>
                    Outbound voice AI is particularly transformative for speed-to-lead execution. Studies across sales organizations demonstrate that contacting an online inbound inquiry within <strong>5 minutes</strong> increases lead qualification rates by more than <strong>300%</strong> compared to calling after an hour. Outbound AI agents bridge this critical response window by automatically dialing new web leads within 30 to 60 seconds of form submission.
                  </p>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-2 mb-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    High-Impact Outbound AI Calling Use Cases
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Instant Speed-to-Lead Follow-up:</strong> Dialing prospects the moment they submit a lead form on Facebook, Google, LinkedIn, or your landing page to qualify interest while their intent is peak.
                    </li>
                    <li>
                      <strong>Structured Lead Qualification:</strong> Asking targeted pre-qualification questions (e.g., budget range, property preference, company size, timeline) to filter out casual browsers and route hot prospects to human sales closers.
                    </li>
                    <li>
                      <strong>Proactive Appointment &amp; Webinar Reminders:</strong> Calling patients, clients, or event registrants 24 hours prior to scheduled meetings to confirm attendance or facilitate immediate one-click rescheduling, slashing costly no-show rates.
                    </li>
                    <li>
                      <strong>Payment, EMI &amp; Subscription Due Reminders:</strong> Courteous, compliant voice notifications reminding customers of upcoming credit card dues, insurance renewals, loan EMIs, or utility invoices with automated payment link dispatch.
                    </li>
                    <li>
                      <strong>Customer Win-Back &amp; Re-engagement:</strong> Contacting dormant CRM contacts, dropped-off cart abandoners, or past clients with personalized promotional offers or reactivation incentives.
                    </li>
                    <li>
                      <strong>Post-Service Feedback &amp; CSAT/NPS Audits:</strong> Conducting concise 45-second conversational survey calls to collect structured feedback and customer sentiment immediately following delivery or service completion.
                    </li>
                  </ul>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-3 mb-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    Realistic Example: Outbound Real Estate Lead Qualification
                  </h3>
                  <div className="bg-white border border-card-border rounded-xl p-5 my-3 text-[15px] sm:text-[16px] space-y-2">
                    <p className="font-semibold text-primary-black border-b border-card-border pb-2">
                      Scenario: An outbound AI voice agent contacting a lead in Bengaluru who downloaded a property brochure online 45 seconds ago.
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;Hello Vikram! This is Priya from Urban Crest Residences. I noticed you just downloaded our brochure for the new luxury towers in Whitefield. Do you have a quick minute to chat?&rdquo;
                    </p>
                    <p>
                      <strong>Lead:</strong> &ldquo;Oh, that was quick! Yes, I was just looking at the floor plans.&rdquo;
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;Wonderful! To help share the most relevant floor plans, are you primarily exploring a 2 BHK or a 3 BHK, and are you planning to move within the next six months?&rdquo;
                    </p>
                    <p>
                      <strong>Lead:</strong> &ldquo;I&apos;m looking for a spacious 3 BHK, and my budget is around 1.8 to 2 Crores. I&apos;d want possession by Diwali.&rdquo;
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;That matches our Tower B layout perfectly. We are hosting private walkthroughs at the site this Saturday. Would you prefer a morning slot at 11:00 AM or an afternoon slot around 3:00 PM?&rdquo;
                    </p>
                    <p>
                      <strong>Lead:</strong> &ldquo;Saturday at 11:00 AM works great.&rdquo;
                    </p>
                    <p>
                      <strong>AI Agent:</strong> &ldquo;Excellent! I have reserved Saturday at 11:00 AM for you. Our senior property advisor Rajesh will receive you at the site lounge. I&apos;ve sent the calendar invite and gate pass via WhatsApp. Have a great day!&rdquo;
                    </p>
                  </div>

                  <div className="bg-primary-beige border border-card-border rounded-xl p-4 sm:p-5 mt-4">
                    <h4 className="font-bold text-primary-black text-base sm:text-lg mb-2">
                      Regulatory Compliance Note for Outbound Calling in India
                    </h4>
                    <p className="text-[14px] sm:text-[15px] text-primary-black leading-relaxed">
                      Outbound AI calling in India must strictly adhere to the <strong>Telecom Regulatory Authority of India (TRAI)</strong> regulations under the Telecom Commercial Communications Customer Preference Regulations (TCCCPR). Businesses must ensure contact scrubbing against the <strong>National Customer Preference Register (NCPR/DND)</strong>, operate calls strictly within sanctioned calling windows (9:00 AM to 9:00 PM IST), deploy verified telemarketing header series (e.g., 140/160 series numbers), and maintain clear opt-out mechanisms.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: INBOUND VS OUTBOUND KEY DIFFERENCES */}
              <section id="key-differences" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  INBOUND VS OUTBOUND AI CALLING: KEY DIFFERENCES
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    While both inbound and outbound AI voice agents rely on the same foundational conversational AI stack—comprising Automatic Speech Recognition (ASR), Natural Language Understanding (NLU), Large Language Models (LLMs), and Text-to-Speech (TTS)—their operational triggers, conversational objectives, latency priorities, and technical integrations are substantially different.
                  </p>
                  <p>
                    Understanding these distinctions is essential for designing effective conversational prompts, setting up telephony routing, and establishing meaningful key performance indicators (KPIs).
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Comparison Factor</th>
                        <th className="py-3.5 px-4 w-3/8 align-top">Inbound AI Calling</th>
                        <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">Outbound AI Calling</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call Initiator</td>
                        <td className="py-3.5 px-4 align-top">Customer dials the business phone line</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Business initiates automated outreach to contact list</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Caller Mindset &amp; Intent</td>
                        <td className="py-3.5 px-4 align-top">High intent; seeking immediate assistance, booking, or resolution</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Passive or multi-tasking; requires compelling hook within first 5 seconds</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Primary Objective</td>
                        <td className="py-3.5 px-4 align-top">Answer enquiries, solve issues, schedule appointments, or route calls</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Qualify interest, follow up on leads, collect confirmations, or remind about payments</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Trigger Mechanism</td>
                        <td className="py-3.5 px-4 align-top">Inbound phone ring on DID or toll-free (1800) number</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">CRM event trigger, web form webhook, or scheduled campaign batch</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Technical Latency Priority</td>
                        <td className="py-3.5 px-4 align-top">Ultra-low latency (&lt;500ms) to ensure natural conversational flow</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Low latency coupled with dynamic objection handling and structured qualification steering</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Required Context &amp; Data</td>
                        <td className="py-3.5 px-4 align-top">Extensive business knowledge base, FAQs, order database, real-time calendar availability</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact list data, campaign goals, lead form submissions, transaction history</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Telephony Setup</td>
                        <td className="py-3.5 px-4 align-top">Inbound SIP trunking, toll-free lines, virtual landline numbers</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Outbound dialer infrastructure, caller ID management, 140/160 telemarketing series</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Typical Integrations</td>
                        <td className="py-3.5 px-4 align-top">Customer support desks (Zendesk, Freshdesk), Google/Outlook calendars, ERP systems</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Sales CRMs (HubSpot, Salesforce, Zoho, LeadSquared), ad platform webhooks, payment gateways</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Regulatory &amp; Compliance</td>
                        <td className="py-3.5 px-4 align-top">Standard call recording consent and privacy disclosures</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Strict TRAI compliance in India (DND/NCPR scrubbing, 9 AM–9 PM calling window)</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Main Success Metrics</td>
                        <td className="py-3.5 px-4 align-top">First Call Resolution (FCR), Average Speed of Answer, CSAT, Containment Rate</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact Rate, Lead Qualification Rate, Meeting Booking Rate, Cost per Acquisition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium mt-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    As the comparison illustrates, inbound voice AI is primarily evaluated on its <strong>depth of knowledge and resolution speed</strong>—callers expect accurate answers immediately without repeating themselves. In contrast, outbound voice AI is evaluated on its <strong>conversational persuasion and speed-to-lead</strong>—capturing attention gracefully, asking clarifying questions, and driving a specific conversion outcome.
                  </p>
                </div>
              </section>

              {/* SECTION 4: WHICH SHOULD YOUR BUSINESS CHOOSE? */}
              <section id="which-should-you-choose" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  INBOUND VOICE AI VS OUTBOUND VOICE AI: WHICH SHOULD YOUR BUSINESS CHOOSE?
                </h2>
                <div
                  className="space-y-6 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Determining whether to prioritize inbound or outbound voice AI depends on your current operational bottlenecks, lead generation velocity, and customer touchpoints. Here is a clear decision diagnostic for business owners and operations heads:
                  </p>

                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-3">
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      Prioritize Inbound AI Calling If:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2.5">
                      <li>
                        <strong>You experience high call abandonment rates:</strong> Callers are waiting on hold for more than 45 seconds or hanging up before reaching an agent.
                      </li>
                      <li>
                        <strong>Over 60% of your incoming calls are repetitive:</strong> Questions about pricing, office locations, appointment slots, or order statuses are overwhelming your front desk.
                      </li>
                      <li>
                        <strong>You miss significant call volumes outside business hours:</strong> Customers calling between 7:00 PM and 9:00 AM or over weekends are met with unanswered rings or generic voicemail.
                      </li>
                      <li>
                        <strong>Support team burnout is high:</strong> Your customer support team is exhausted answering the same tier-1 inquiries instead of addressing complex, high-value customer escalations.
                      </li>
                      <li>
                        <strong>First Call Resolution (FCR) is dropping:</strong> Customers have to call multiple times to complete a single booking or receive basic service details.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-3">
                    <h3
                      className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      Prioritize Outbound AI Calling If:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2.5">
                      <li>
                        <strong>You invest heavily in performance marketing (Meta/Google Ads):</strong> Your cost per acquisition (CPA) is high because web leads sit in your CRM for hours or days before a human rep calls.
                      </li>
                      <li>
                        <strong>Your sales reps waste hours on dead dials:</strong> Human telecallers spend up to 70% of their workday listening to ringing tones, invalid numbers, and voicemails rather than pitching qualified buyers.
                      </li>
                      <li>
                        <strong>Appointment no-show rates exceed 20%:</strong> Medical clinics, salon chains, financial consultancies, or webinar hosts suffer lost revenue because clients fail to show up for scheduled meetings.
                      </li>
                      <li>
                        <strong>You manage collections, renewals, or EMIs:</strong> Financial institutions, NBFCs, EdTech platforms, or subscription services struggle to contact hundreds of customers for timely payment reminders.
                      </li>
                      <li>
                        <strong>You have thousands of dormant CRM leads:</strong> Past prospects who never bought are sitting untouched because your human team only has capacity to call new leads.
                      </li>
                    </ul>
                  </div>

                  <h3
                    className="font-normal uppercase text-primary-black text-[22px] sm:text-[26px] leading-[1.2] tracking-normal pt-4 mb-2"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    Industry-Specific Applications in the Indian Market
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="border border-card-border rounded-xl p-4 bg-white">
                      <p className="font-bold text-primary-black mb-1.5">Healthcare &amp; Diagnostics</p>
                      <p className="text-[14px] sm:text-[15px] text-dark-grey leading-relaxed">
                        Inbound AI manages OP booking, doctor availability, and lab report status. Outbound AI sends automated 24-hour appointment confirmations and annual health checkup reminders.
                      </p>
                    </div>
                    <div className="border border-card-border rounded-xl p-4 bg-white">
                      <p className="font-bold text-primary-black mb-1.5">Real Estate &amp; Construction</p>
                      <p className="text-[14px] sm:text-[15px] text-dark-grey leading-relaxed">
                        Outbound AI calls prospective buyers within 60 seconds of downloading property brochures to qualify budget and book weekend site visits; Inbound AI answers billboard ad calls.
                      </p>
                    </div>
                    <div className="border border-card-border rounded-xl p-4 bg-white">
                      <p className="font-bold text-primary-black mb-1.5">EdTech &amp; Coaching Academies</p>
                      <p className="text-[14px] sm:text-[15px] text-dark-grey leading-relaxed">
                        Outbound AI calls students inquiring about NEET/JEE/UPSC test series to schedule counseling demos; Inbound AI handles syllabus and batch timing inquiries.
                      </p>
                    </div>
                    <div className="border border-card-border rounded-xl p-4 bg-white">
                      <p className="font-bold text-primary-black mb-1.5">Fintech, NBFCs &amp; Insurance</p>
                      <p className="text-[14px] sm:text-[15px] text-dark-grey leading-relaxed">
                        Outbound AI delivers polite, automated EMI due alerts and policy renewal notifications; Inbound AI verifies KYC status and assists with basic claims submission.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5: CAN BUSINESSES USE BOTH? */}
              <section id="can-businesses-use-both" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CAN BUSINESSES USE BOTH? (THE UNIFIED HYBRID AI CALLING ENGINE)
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    For growing businesses and mid-market enterprises, treating inbound and outbound calling as isolated silos creates fragmented customer experiences. The most effective communication strategy is a <strong>unified hybrid voice AI architecture</strong>, where inbound and outbound voice agents share the same real-time CRM memory, customer context, and telephony identification.
                  </p>
                  <p>
                    Consider how a unified hybrid workflow functions in practice across the customer lifecycle:
                  </p>

                  <div className="bg-white border border-card-border rounded-xl p-5 my-3 space-y-3">
                    <p className="font-bold text-primary-black">The Closed-Loop Voice AI Journey:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-[15px] sm:text-[16px]">
                      <li>
                        <strong>Instant Outbound Qualification:</strong> A prospect submits an online loan enquiry at 10:00 PM. At 9:05 AM the next morning (within TRAI calling hours), an Outbound AI agent calls, confirms key eligibility details, and books a call with a loan officer.
                      </li>
                      <li>
                        <strong>Automated WhatsApp &amp; SMS Dispatch:</strong> Immediately following the call, the system dispatches meeting details and a document upload checklist to the applicant&apos;s WhatsApp.
                      </li>
                      <li>
                        <strong>Proactive Meeting Reminder:</strong> Two hours before the meeting, an Outbound AI agent dials the prospect with a 20-second reminder to confirm they have their documents ready.
                      </li>
                      <li>
                        <strong>Seamless Inbound Callback Handling:</strong> If the prospect misses the reminder call and dials back 15 minutes later, an Inbound AI voice agent answers immediately: &ldquo;Hello Rajesh! We just called to confirm your loan review at 2:00 PM today. Are you still able to join, or would you like to reschedule?&rdquo;
                      </li>
                    </ol>
                  </div>

                  <p className="pt-2">
                    Because both systems tap into the same central CRM database, the customer never has to explain who they are, verify their phone number, or repeat previous conversations. This unified approach maximizes conversion rates while delivering an effortless, premium customer experience.
                  </p>
                </div>
              </section>

              {/* SECTION 6: HOW TO CHOOSE WHAT TO AUTOMATE FIRST */}
              <section id="how-to-choose-what-to-automate" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CHOOSE WHAT TO AUTOMATE FIRST: A 6-STEP STRATEGIC FRAMEWORK
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Businesses often make the mistake of attempting to automate all calling operations at once. Successful voice AI deployments always begin with a single, highly measurable workflow where success metrics are unambiguous.
                  </p>
                  <p>
                    Follow this proven 6-step framework to identify your ideal starting point:
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="border border-card-border rounded-xl p-4 sm:p-5 bg-white">
                      <h3 className="font-bold text-primary-black text-lg mb-1.5">
                        Step 1: Audit Call Volumes &amp; Staff Time Allocation
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                        Examine your telephony logs over the past 60 days. Calculate how many hours your employees spend handling repetitive inquiries versus high-stakes sales or client management. If inbound lines are jammed with tier-1 questions, start with inbound support; if outbound sales reps are spending 4+ hours daily on manual dialing with poor connect rates, start with outbound speed-to-lead.
                      </p>
                    </div>

                    <div className="border border-card-border rounded-xl p-4 sm:p-5 bg-white">
                      <h3 className="font-bold text-primary-black text-lg mb-1.5">
                        Step 2: Quantify the Financial Cost of Inaction
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                        Assign concrete financial values to your communication bottlenecks. What is the monetary value of a dropped sales call? What is the cost of a missed clinic appointment or an unanswered inbound lead on a Saturday evening? Prioritize the workflow where automated voice intervention delivers the most immediate revenue recovery.
                      </p>
                    </div>

                    <div className="border border-card-border rounded-xl p-4 sm:p-5 bg-white">
                      <h3 className="font-bold text-primary-black text-lg mb-1.5">
                        Step 3: Select Predictable, High-Frequency Conversations
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                        Never start with unstructured, emotionally volatile conversations (e.g., severe billing disputes or complex medical diagnosis). Begin with structured, deterministic workflows such as appointment reminders, lead qualification, seminar confirmations, or FAQs where the conversational path has clear boundaries.
                      </p>
                    </div>

                    <div className="border border-card-border rounded-xl p-4 sm:p-5 bg-white">
                      <h3 className="font-bold text-primary-black text-lg mb-1.5">
                        Step 4: Verify Telephony &amp; CRM Integration Readiness
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                        Ensure your underlying software stack has open API or webhook support. For appointment booking, your calendar or EHR system must support real-time read/write access. For lead follow-up, your CRM (HubSpot, LeadSquared, Salesforce, Zoho) must trigger webhook events immediately upon form submission.
                      </p>
                    </div>

                    <div className="border border-card-border rounded-xl p-4 sm:p-5 bg-white">
                      <h3 className="font-bold text-primary-black text-lg mb-1.5">
                        Step 5: Define Robust Human Escalation &amp; Fallback Rules
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                        A great voice AI agent knows its limitations. Configure clear business rules for when the AI should execute a warm transfer to human staff—for instance, when a customer expresses frustration, asks questions outside the approved knowledge base, or explicitly requests a manager.
                      </p>
                    </div>

                    <div className="border border-card-border rounded-xl p-4 sm:p-5 bg-white">
                      <h3 className="font-bold text-primary-black text-lg mb-1.5">
                        Step 6: Deploy a Focused Pilot, A/B Test &amp; Iterate
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-dark-grey leading-relaxed">
                        Launch a 2 to 4-week pilot on a specific slice of call traffic (e.g., all after-hours inbound calls, or all outbound Facebook ad leads). Monitor conversation transcripts, customer sentiment, connection rates, and completion percentages. Refine your system prompts and conversational pauses before rolling out across all operations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 7: BENEFITS */}
              <section id="benefits" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF INBOUND AND OUTBOUND AI CALLING
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Whether deployed individually or as a synchronized hybrid engine, conversational AI voice agents deliver substantial operational and commercial advantages over traditional telecalling setups:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Up to 70% Operational Cost Reduction:</strong> Eliminate the heavy overhead of hiring, onboarding, desk infrastructure, and churn associated with large manual call center teams.
                    </li>
                    <li>
                      <strong>Zero Wait Times &amp; 24/7 Availability:</strong> Answer every incoming customer call on the first ring, 365 days a year, across Indian holidays and after office hours.
                    </li>
                    <li>
                      <strong>Elastic Scalability Without Hiring Lag:</strong> Handle sudden spikes in call volume—such as flash sales, marketing ad surges, or product launches—supporting dozens or hundreds of simultaneous calls without degrading voice quality.
                    </li>
                    <li>
                      <strong>Native Multilingual Capabilities in 65+ Languages:</strong> Communicate effortlessly with customers across India and global markets in English, Hindi, Hinglish, Marathi, Tamil, Telugu, Kannada, Bengali, and Gujarati.
                    </li>
                    <li>
                      <strong>Consistent Adherence to Brand Voice &amp; Compliance:</strong> AI voice agents never deviate from approved messaging, never lose patience during challenging interactions, and consistently capture required consent.
                    </li>
                    <li>
                      <strong>100% Transcription &amp; Actionable Intelligence:</strong> Automatically convert every conversation into a structured CRM note, sentiment analysis tag, and follow-up task.
                    </li>
                  </ul>
                  <p className="pt-2 text-dark-grey text-[15px] sm:text-[16px] leading-relaxed">
                    Note: While AI calling delivers massive efficiency, it is designed to augment human teams rather than replace them entirely. High-empathy escalations, complex enterprise negotiations, and sensitive grievances should always have a seamless path to human specialists.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW CALLIENCE HELPS */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES AUTOMATE AI CALLING
                </h2>
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Implementing voice AI requires more than generic speech models. It demands robust conversational orchestration, low latency, seamless CRM synchronization, and enterprise telephony integration built specifically for real-world business conversations.
                  </p>
                  <p>
                    The <Link href="/#features" className="font-semibold underline hover:text-black transition-colors">Callience enterprise voice AI platform</Link> provides end-to-end, customized conversational AI voice agent solutions tailored to both inbound support and outbound outreach campaigns:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Ultra-Low Latency Conversational Voice Engine:</strong> Sub-600ms voice response times that deliver natural, interruptible, human-like dialogue without awkward conversational pauses.
                    </li>
                    <li>
                      <strong>Custom Inbound AI Voice Agents:</strong> Engineered for <Link href="/blogs/ai-inbound-call-handling-high-volume-enquiries" className="font-semibold underline hover:text-black transition-colors">AI inbound call handling</Link> to answer enquiries, access dynamic backend data, book appointments, and route calls with context-rich warm handoffs.
                    </li>
                    <li>
                      <strong>High-Converting Outbound Calling Workflows:</strong> Powered by <Link href="/blogs/automated-outbound-calling-guide" className="font-semibold underline hover:text-black transition-colors">automated outbound calling</Link> speed-to-lead dialing, smart qualification sequences, attendance reminders, and payment notifications that integrate directly with your sales pipeline.
                    </li>
                    <li>
                      <strong>Multilingual Support Across 65+ Languages:</strong> Connect with diverse regional demographics across India using authentic accents, natural idioms, and effortless language switching.
                    </li>
                    <li>
                      <strong>Native CRM &amp; Telephony Integrations:</strong> Bi-directional sync with HubSpot, Salesforce, Zoho, LeadSquared, Practo, Google Calendar, and custom REST API webhooks.
                    </li>
                    <li>
                      <strong>TRAI Compliance &amp; DND Management:</strong> Built-in telemarketing compliance, NCPR scrubbing, time-window controls, and encrypted enterprise data security.
                    </li>
                    <li>
                      <strong>Comprehensive Transcripts &amp; Campaign Analytics:</strong> Real-time dashboards displaying call completion rates, sentiment scoring, qualification breakdowns, and conversation audio logs.
                    </li>
                  </ul>
                  <p className="pt-2">
                    Explore how Callience can transform your business communication. Explore our <Link href="/#how-it-works" className="font-semibold underline hover:text-black transition-colors">AI calling process</Link>, view our <Link href="/#use-cases" className="font-semibold underline hover:text-black transition-colors">industry use cases</Link>, or <Link href="/#contact" className="font-semibold underline hover:text-black transition-colors">book a live demo</Link> to schedule a tailored consultation for your business.
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
                <div
                  className="space-y-4 text-[16px] sm:text-[18px] leading-[1.6] text-primary-black font-medium"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p>
                    Choosing between inbound and outbound AI calling is not an either-or proposition for most ambitious businesses. Inbound voice AI excels at satisfying high-intent callers through instant resolution, zero hold times, and automated scheduling. Outbound voice AI accelerates top-of-funnel velocity through immediate speed-to-lead follow-up, proactive reminders, and disciplined qualification.
                  </p>
                  <p>
                    The smartest path forward is to start where friction is highest. If your front desk is swamped with repetitive queries, automate inbound support first. If valuable ad leads are rotting in your CRM before sales reps can dial them, deploy outbound speed-to-lead qualification.
                  </p>
                  <p>
                    By starting with a focused, measurable workflow and expanding toward a synchronized hybrid voice AI ecosystem, businesses can dramatically lower operating costs, boost conversion rates, and deliver 24/7 responsiveness that leaves competitors behind.
                  </p>
                </div>
              </section>

              {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
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
        <BlogNavigation currentSlug="inbound-vs-outbound-ai-calling" />

        {/* Global Contact / CTA Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
