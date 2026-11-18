"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-voice-calling", label: "What Is AI Voice Calling for MSMEs?" },
  { id: "why-small-businesses", label: "Why Should Small Businesses Use AI Voice Calling?" },
  { id: "practical-ways", label: "7 Practical Ways MSMEs Can Use AI Voice Calling" },
  { id: "inbound-and-outbound", label: "How AI Voice Agents Manage Inbound and Outbound Calls" },
  { id: "effective-scripts", label: "How to Create Effective AI Calling Scripts" },
  { id: "measure-roi", label: "How MSMEs Can Measure AI Telecaller ROI" },
  { id: "choose-platform", label: "How to Choose the Right AI Voice Calling Platform" },
  { id: "how-callience-helps", label: "How Callience Helps Businesses with AI Calling" },
  { id: "challenges", label: "Challenges of Using AI Voice Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How can small businesses automate customer calls?",
    a: "Small businesses can use AI voice calling platforms to automate lead follow-ups, appointment reminders, payment notifications, and customer re-engagement campaigns.",
  },
  {
    q: "2. What are AI voice agents for small businesses?",
    a: "AI voice agents are software systems that use artificial intelligence to communicate with customers, understand spoken responses, answer common questions, and record interaction details.",
  },
  {
    q: "3. Can AI voice agents handle both inbound and outbound calls?",
    a: "Yes. AI voice agents can manage incoming customer enquiries and outgoing calls for lead qualification, reminders, follow-ups, and customer re-engagement.",
  },
  {
    q: "4. Can AI voice agents make calls in Indian regional languages?",
    a: "Several platforms support Hindi, English, and selected regional languages. Availability and conversation accuracy depend on the platform.",
  },
  {
    q: "5. Can AI voice calling replace human telecallers?",
    a: "AI can handle repetitive conversations, but complex complaints, negotiations, and sensitive customer interactions still require human assistance.",
  },
  {
    q: "6. How can MSMEs measure AI calling ROI?",
    a: "MSMEs can track campaign costs, connected calls, qualified leads, successful follow-ups, and customer conversions to evaluate campaign performance.",
  },
];

export default function AIVoiceCallingForMSMEsPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-voice-calling");
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[802px]">
              <h1
                className="font-normal uppercase text-primary-black text-[32px] sm:text-[46px] lg:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                HOW MSMES CAN USE AI VOICE CALLING
                <br className="hidden sm:inline" /> TO MANAGE CUSTOMER OUTREACH
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[580px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI voice calling helps MSMEs automate outreach, qualify leads, send reminders, and manage follow-ups.
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
              src="/How MSMEs Can Use AI Voice Calling to Manage Customer Outreach.png"
              alt="How MSMEs Can Use AI Voice Calling to Manage Customer Outreach"
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
                    className="mt-4 space-y-2 text-sm"
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
                        className={`block w-full text-left py-0.5 text-[14px] transition-colors leading-snug ${activeSection === item.id
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
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors ${isActive
                              ? "bg-primary-black"
                              : "bg-transparent group-hover:bg-card-border"
                              }`}
                          />
                          <span
                            className={`text-[14px] leading-[1.4] transition-colors ${isActive
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
              className="lg:col-span-9 max-w-[820px] font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.6]"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-4 mb-12">
                <p>
                  Managing customer communication can be challenging for MSMEs in India, especially when handling sales enquiries, follow-ups, appointment bookings, and payment reminders. Making these calls manually takes time and can sometimes result in missed opportunities.
                </p>
                <p>
                  AI voice calling for MSMEs helps automate routine outbound calls, qualify leads, send reminders, and reconnect with existing customers. It can also support multilingual communication, helping businesses such as coaching centres and clinics manage customer outreach and follow-ups more efficiently.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AI VOICE CALLING FOR MSMES? */}
              <section id="what-is-ai-voice-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI VOICE CALLING FOR MSMES?
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice calling uses artificial intelligence to communicate with customers through phone conversations. Unlike traditional recorded calls, AI voice agents can understand customer responses, answer common questions, and respond according to predefined conversation flows.
                  </p>
                  <p>
                    For example, when someone submits an enquiry on a coaching centre&apos;s website, an AI voice agent can call the person, ask about their preferred course, and record whether they want a counsellor to contact them.
                  </p>
                  <p>
                    Businesses can use AI calling for both inbound calls (incoming customer enquiries) and outbound calls (calls initiated by the business).
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY SHOULD SMALL BUSINESSES USE AI VOICE CALLING? */}
              <section id="why-small-businesses" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY SHOULD SMALL BUSINESSES USE AI VOICE CALLING?
                </h2>
                <div className="space-y-4">
                  <p>
                    AI calling for small businesses in India can help manage customer communication with limited staff and resources:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Automated communication:</strong> Handle repetitive calls such as appointment confirmations and payment reminders.
                    </li>
                    <li>
                      <strong>Consistent follow-ups:</strong> Contact new enquiries according to a planned schedule.
                    </li>
                    <li>
                      <strong>Better lead management:</strong> Identify interested customers and arrange callbacks with sales employees.
                    </li>
                    <li>
                      <strong>Multilingual communication:</strong> Reach customers in supported Indian regional languages.
                    </li>
                    <li>
                      <strong>Organized customer records:</strong> Store call outcomes and customer responses through CRM integration.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 3: 7 PRACTICAL WAYS MSMES CAN USE AI VOICE CALLING */}
              <section id="practical-ways" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  7 PRACTICAL WAYS MSMES CAN USE AI VOICE CALLING
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      1. Automated Lead Qualification and Follow-Up
                    </h3>
                    <p className="mb-2">
                      AI voice agents can contact people who submit enquiries through websites, advertisements, or landing pages. They can ask about customer requirements, budget, product preferences, and purchase timelines.
                    </p>
                    <p className="mb-2">
                      <strong>Example:</strong> A real estate agency can contact potential buyers, understand their preferred location and budget, and schedule a callback with a property consultant.
                    </p>
                    <p>
                      Automated lead follow-up calls help businesses organize enquiries and prioritize interested customers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      2. Appointment Reminders and Confirmations
                    </h3>
                    <p className="mb-2">
                      Clinics, salons, coaching centres, and repair services can use AI appointment reminder calls for small businesses to confirm bookings and reduce missed appointments.
                    </p>
                    <p>
                      <strong>Example:</strong> A dental clinic can automatically remind patients about appointments scheduled for the following day and record whether they want to confirm or reschedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      3. Automated Payment Reminders
                    </h3>
                    <p>
                      Distributors, wholesalers, and service providers often spend time contacting customers about pending invoices. AI voice agents can make scheduled payment reminder calls, communicate verified payment information, and record customer responses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      4. Customer Re-Engagement and Renewal Reminders
                    </h3>
                    <p className="mb-2">
                      Businesses can use AI customer outreach to reconnect with inactive customers and remind existing customers about upcoming renewals.
                    </p>
                    <p>
                      For example, a gym can contact former members about membership plans, while a car service centre can remind customers about vehicle maintenance. Internet service providers can also remind customers before their plans expire.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      5. Multilingual Customer Communication
                    </h3>
                    <p className="mb-2">
                      Multilingual AI calling in India helps businesses communicate with customers in their preferred supported languages. A business in Punjab may communicate with some customers in Punjabi, while customers in other regions may prefer Hindi or English.
                    </p>
                    <p>
                      Businesses should test language accuracy and regional pronunciation before launching campaigns.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      6. Customer Feedback Collection
                    </h3>
                    <p className="mb-2">
                      AI voice agents can contact customers after purchases or service appointments to collect basic feedback.
                    </p>
                    <p>
                      For example, an electronics repair shop can ask customers whether they were satisfied with the repair service and whether they need additional assistance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      7. Handling Repetitive Customer Enquiries
                    </h3>
                    <p className="mb-2">
                      AI voice agents can support businesses by handling common customer questions, collecting basic information, and directing callers to the appropriate department.
                    </p>
                    <p>
                      For example, a service centre can use an AI agent to respond to incoming enquiries about business hours, available services, appointment bookings, and service requests.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: HOW AI VOICE AGENTS MANAGE INBOUND AND OUTBOUND CALLS */}
              <section id="inbound-and-outbound" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS MANAGE INBOUND AND OUTBOUND CALLS
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice agents can support two important types of business communication:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Inbound Calling:</strong> When customers call a business, an AI voice agent can answer incoming enquiries, respond to common questions, collect customer details, help with appointment requests, and route complicated queries to human employees.
                    </li>
                    <li>
                      <strong>Outbound Calling:</strong> When a business needs to contact customers, AI voice agents can make calls for lead qualification, appointment reminders, payment notifications, renewals, and customer re-engagement.
                    </li>
                  </ul>
                  <p>
                    A typical workflow involves collecting customer information, selecting a calling objective, preparing scripts, configuring the AI agent, managing conversations, and recording call outcomes for future follow-ups.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HOW TO CREATE EFFECTIVE AI CALLING SCRIPTS */}
              <section id="effective-scripts" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CREATE EFFECTIVE AI CALLING SCRIPTS
                </h2>
                <div className="space-y-4">
                  <p>
                    A clear and effective AI calling script helps businesses deliver messages naturally and maintain meaningful customer conversations:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Set one objective:</strong> Keep each campaign focused on a specific purpose.
                    </li>
                    <li>
                      <strong>Use simple language:</strong> Avoid long conversations and unnecessary information.
                    </li>
                    <li>
                      <strong>Personalize calls:</strong> Use accurate customer details, such as appointment dates or enquiry information.
                    </li>
                    <li>
                      <strong>Provide human assistance:</strong> Transfer complicated questions and complaints to employees.
                    </li>
                    <li>
                      <strong>Test campaigns:</strong> Check voice quality, pronunciation, and response accuracy before scaling.
                    </li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-bold text-primary-black pt-4 mb-2">
                    Sample AI Calling Scripts
                  </h3>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Campaign</th>
                          <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">Sample Message</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead Follow-Up</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Hello, this is ABC Furniture. You recently enquired about our products. Are you still interested?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment Reminder</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Hello, this is ABC Clinic. Your appointment is scheduled for tomorrow at 11 AM. Would you like to confirm or reschedule?&quot;</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Payment Reminder</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Hello, this is ABC Services. We are calling regarding your pending invoice. Would you like assistance from our accounts team?&quot;</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Inbound Enquiry</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">&quot;Hello, welcome to ABC Services. How can I help you today? I can assist with general enquiries or connect you with our team.&quot;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 6: HOW MSMES CAN MEASURE AI TELECALLER ROI */}
              <section id="measure-roi" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW MSMES CAN MEASURE AI TELECALLER ROI
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses should measure more than the number of calls made. AI telecaller ROI depends on customer responses, qualified leads, successful follow-ups, and conversions.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/2 align-top">Metric</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/2 align-top">What It Measures</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Calls Attempted</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Total outbound calls initiated</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Connection Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of calls answered</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call Completion Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of connected calls completed</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Qualified Leads</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers showing genuine interest</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Follow-Up Status</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers requiring additional contact</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Conversion Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of leads becoming customers</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Cost Per Qualified Lead</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Campaign cost divided by qualified leads</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Calculation Box */}
                  <div className="bg-white border border-card-border rounded-xl p-4 sm:p-5 my-4 space-y-2">
                    <p className="font-bold text-primary-black">
                      ROI Calculation Example:
                    </p>
                    <p className="text-sm sm:text-base text-dark-grey">
                      Suppose a business contacts 500 potential customers. Out of these, 300 answer the calls, 90 become qualified leads, and 18 make a purchase:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base font-semibold text-primary-black">
                      <li>Call Connection Rate = (300 ÷ 500) × 100 = 60%</li>
                      <li>Lead Qualification Rate = (90 ÷ 300) × 100 = 30%</li>
                      <li>Lead-to-Customer Conversion Rate = (18 ÷ 90) × 100 = 20%</li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-grey pt-1">
                      These metrics help businesses understand campaign performance and identify areas for improvement.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 7: HOW TO CHOOSE THE RIGHT AI VOICE CALLING PLATFORM */}
              <section id="choose-platform" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CHOOSE THE RIGHT AI VOICE CALLING PLATFORM
                </h2>
                <div className="space-y-4">
                  <p>
                    Before selecting a platform, MSMEs should consider:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Language support:</strong> Availability of relevant Indian regional languages.
                    </li>
                    <li>
                      <strong>Inbound and outbound capabilities:</strong> Ability to manage incoming enquiries and outgoing campaigns.
                    </li>
                    <li>
                      <strong>CRM integration:</strong> Ability to update customer records and follow-up status.
                    </li>
                    <li>
                      <strong>Custom scripts:</strong> Flexibility to create different calling workflows.
                    </li>
                    <li>
                      <strong>Human call transfer:</strong> Options for handling complicated conversations.
                    </li>
                    <li>
                      <strong>Pricing:</strong> Subscription charges, per-minute costs, and integration expenses.
                    </li>
                    <li>
                      <strong>Data security:</strong> Responsible handling of customer information and compliance with applicable communication requirements.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 8: HOW CALLIENCE HELPS BUSINESSES WITH AI CALLING */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI CALLING
                </h2>
                <div className="space-y-4">
                  <p>
                    Callience helps businesses automate outbound calling activities such as lead qualification, admission enquiries, follow-ups, payment reminders, appointment reminders, and customer re-engagement through AI voice agents.
                  </p>
                  <p>
                    It also supports inbound calls by handling customer enquiries, answering common questions, collecting lead information, and directing callers to the appropriate team. These workflows help businesses reduce repetitive calling tasks, maintain consistent communication, and save time.
                  </p>
                </div>
              </section>

              {/* SECTION 9: CHALLENGES OF USING AI VOICE CALLING */}
              <section id="challenges" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CHALLENGES OF USING AI VOICE CALLING
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice calling also has limitations. Some customers prefer speaking directly with human employees, while AI agents may misunderstand regional accents or background noise. Initial setup, script testing, and CRM integration also require effort.
                  </p>
                  <p>
                    Businesses should follow applicable telecom, privacy, consent, and commercial communication requirements. AI calling should support human employees rather than replace them in sensitive or complicated customer interactions.
                  </p>
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
                  <p>
                    AI voice calling can help MSMEs manage customer outreach more efficiently by automating repetitive activities such as lead qualification, appointment reminders, payment follow-ups, and customer re-engagement. It can also help businesses handle incoming enquiries through AI-powered inbound calling.
                  </p>
                  <p>
                    For Indian small businesses, the best approach is to start with one specific requirement. A coaching centre can automate admission enquiry follow-ups, a clinic can manage appointment reminders, and a distributor can organize payment notifications.
                  </p>
                  <p>
                    By tracking call outcomes, qualified leads, follow-up status, and conversions, businesses can evaluate campaign performance and improve customer communication over time.
                  </p>
                </div>
              </section>

              {/* SECTION 11: FAQS */}
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
        <BlogNavigation currentSlug="ai-voice-calling-for-msmes" />

        {/* Contact Us Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
