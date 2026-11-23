"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-ai-calling-can-do", label: "What AI Calling Can Do for Small and Growing Businesses" },
  { id: "which-businesses-benefit", label: "Which Types and Sizes of Businesses Can Benefit from AI Calling" },
  { id: "signs-your-business-is-ready", label: "Signs Your Business Is Ready to Adopt AI Calling" },
  { id: "how-ai-calling-supports-growth", label: "How AI Calling Supports Business Growth and Scaling" },
  { id: "costs-affordability-roi", label: "AI Calling Cost for Small Businesses: Affordability and ROI" },
  { id: "ai-calling-vs-human-telecallers", label: "AI Calling vs Human Telecallers: When to Use Each" },
  { id: "evaluation-factors", label: "Practical Factors to Evaluate Before Choosing an AI Calling Platform" },
  { id: "simple-pilot-plan", label: "How to Start: A Simple Pilot Plan" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. Is AI calling suitable for small businesses?",
    a: "Yes, when a business has regular phone traffic, repetitive questions or missed calls. It is less suitable for very low call volumes or highly complex, relationship-driven calls.",
  },
  {
    q: "2. Can small businesses afford AI calling?",
    a: "yes. Many platforms use usage-based pricing or small monthly plans, so cost scales with call volume. Ask for an all-in estimate that includes telephony, setup and integrations, then compare it with the revenue and staff time you expect to recover.",
  },
  {
    q: "3. When should a small business adopt AI calling?",
    a: "When calls regularly go unanswered, the same questions repeat, leads wait too long for a response, or you are about to hire mainly to handle call volume, and you have documented answers and a place to record outcomes.",
  },
  {
    q: "4. When should businesses switch to AI voice agents?",
    a: "Most should add AI voice agents gradually instead of switching fully. Start with missed calls, after-hours calls and routine enquiries, and move more volume once escalation rates, customer satisfaction and team confidence are stable.",
  },
  {
    q: "5. How does AI calling help startups?",
    a: "AI calling for startups gives lean teams phone coverage without building a calling team. It can respond to leads quickly, schedule demos, answer common questions and capture call data as the company grows.",
  },
];

export default function IsAICallingRightPage() {
  const [activeSection, setActiveSection] = useState("what-ai-calling-can-do");
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
                IS AI CALLING SUITABLE FOR SMALL AND GROWING BUSINESSES?
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Is AI calling right for growing businesses? See what it does, what it costs, when to adopt it, when to stay with human telecallers, and what to check first.
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
              src="/is-ai-calling-right-for-growing-businesses.png"
              alt="Is AI Calling Suitable for Small and Growing Businesses?"
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

            {/* Right Column: Article Body */}
            <article
              ref={articleRef}
              className="lg:col-span-9 w-full max-w-[743px] text-primary-black"
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-4 mb-14">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI calling is suitable for most small and growing businesses that handle a steady flow of phone calls, but it is not the right choice for every business at every stage. AI calling uses an AI voice agent to answer or place phone calls, understand what people say, and take action such as answering questions, booking appointments or qualifying leads. For AI for small business, it works best on repetitive, high-volume conversations that a small team struggles to cover.
                </p>

                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI calling is becoming a practical solution for growing businesses looking to manage increasing call volumes without expanding their teams. From answering customer queries and booking appointments to qualifying leads and handling follow-ups, AI voice agents help businesses streamline everyday phone conversations while keeping customer interactions responsive and consistent.
                </p>
              </div>

              {/* SECTION 1: WHAT AI CALLING CAN DO FOR SMALL AND GROWING BUSINESSES */}
              <section id="what-ai-calling-can-do" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT AI CALLING CAN DO FOR SMALL AND GROWING BUSINESSES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Here is how AI calling helps growing businesses: it takes over the phone work that is frequent, predictable and time-consuming, so a small team can focus on work that needs a person.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice agent can:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Answer inbound calls and missed calls.</strong> Every call is picked up, including during lunch, after hours and at busy times.
                    </li>
                    <li>
                      <strong>Respond to common questions.</strong> Prices, timings, locations, availability, documents required and order or booking status.
                    </li>
                    <li>
                      <strong>Book and reschedule appointments.</strong> It can check a calendar and confirm slots.
                    </li>
                    <li>
                      <strong>Qualify leads.</strong> It can ask a few set questions and pass promising prospects to a salesperson.
                    </li>
                    <li>
                      <strong>Send reminders and make follow-up calls.</strong> Appointment reminders, payment reminders, feedback calls and renewal nudges.
                    </li>
                    <li>
                      <strong>Record call data.</strong> Transcripts, call reasons and outcomes can flow into a CRM or spreadsheet.
                    </li>
                    <li>
                      <strong>Hand over to a person.</strong> Complex or sensitive calls can transfer to a staff member with a summary.
                    </li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This is a practical form of AI business automation. The value is not in replacing the team. It is in making sure no call is missed and no routine call consumes the time of people whose skills are needed elsewhere.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHICH TYPES AND SIZES OF BUSINESSES CAN BENEFIT */}
              <section id="which-businesses-benefit" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHICH TYPES AND SIZES OF BUSINESSES CAN BENEFIT FROM AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling suits any business where the phone is a main channel for enquiries, bookings or follow-up. The examples below are illustrative scenarios, not customer results.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <h3
                        className="font-bold text-[18px] text-primary-black mb-1"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Clinics and healthcare practices
                      </h3>
                      <p
                        className="font-medium text-primary-black text-[16px] leading-[1.4]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        A clinic&apos;s front desk often cannot answer the phone while attending to patients. An AI voice agent can answer calls, book and reschedule appointments, share timings and send reminders. Urgent or clinical questions should always route to staff.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="font-bold text-[18px] text-primary-black mb-1"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Education and coaching businesses
                      </h3>
                      <p
                        className="font-medium text-primary-black text-[16px] leading-[1.4]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Institutes receive waves of enquiries about courses, fees, batches and admission dates, especially around admission seasons. AI calling can answer these questions, capture student and parent details, and schedule counselling calls with human counsellors.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="font-bold text-[18px] text-primary-black mb-1"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Real estate teams
                      </h3>
                      <p
                        className="font-medium text-primary-black text-[16px] leading-[1.4]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Brokers and developers receive enquiries from portals and ads at all hours. An AI voice agent can respond quickly, ask about budget, location and timeline, and schedule site visits for agents, so human time goes to serious buyers.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="font-bold text-[18px] text-primary-black mb-1"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Retail and e-commerce businesses
                      </h3>
                      <p
                        className="font-medium text-primary-black text-[16px] leading-[1.4]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Retailers get repetitive calls about stock, store timings, order status, returns and delivery. AI calling can answer these and confirm orders or deliveries, leaving staff free to serve customers in the store or pack orders.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="font-bold text-[18px] text-primary-black mb-1"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Service businesses
                      </h3>
                      <p
                        className="font-medium text-primary-black text-[16px] leading-[1.4]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Salons, repair services, cleaners, tutors, travel agents and similar businesses lose work when calls go unanswered while staff are out on a job. AI calling can take the booking, note the details and confirm the time.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="font-bold text-[18px] text-primary-black mb-1"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        Startups and growing companies
                      </h3>
                      <p
                        className="font-medium text-primary-black text-[16px] leading-[1.4]"
                        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                      >
                        AI calling for startups is attractive because a startup rarely has a calling team and cannot justify hiring one early. Usage-based pricing means cost grows with calls. For AI calling for startups and growing companies, the best starting points are lead response, demo scheduling and customer onboarding calls.
                      </p>
                    </div>
                  </div>

                  {/* Standard Blog Table 1: Which business sizes benefit most */}
                  <div className="pt-4">
                    <h3
                      className="font-bold text-[18px] text-primary-black mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Which business sizes benefit most
                    </h3>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left text-sm sm:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                            <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Business size</th>
                            <th className="py-3.5 px-4 w-1/3 align-top">Typical call situation</th>
                            <th className="py-3.5 pl-4 pr-0 w-1/3 align-top">Fit for AI calling</th>
                          </tr>
                        </thead>
                        <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                          <tr>
                            <td className="py-3.5 pr-4 pl-0 font-bold align-top">
                              Sole Proprietors &amp; Micro Businesses
                            </td>
                            <td className="py-3.5 px-4 align-top">
                              Business owners manage calls alongside daily operations and often miss incoming calls
                            </td>
                            <td className="py-3.5 pl-4 pr-0 align-top">
                              Good for missed-call and after-hours coverage, where call volume justifies it
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3.5 pr-4 pl-0 font-bold align-top">
                              Small &amp; Mid-Sized Businesses
                            </td>
                            <td className="py-3.5 px-4 align-top">
                              Calls compete with daily operations, and hiring additional staff is becoming challenging
                            </td>
                            <td className="py-3.5 pl-4 pr-0 align-top">
                              Strongest fit for routine calls, bookings and follow-ups
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: SIGNS YOUR BUSINESS IS READY TO ADOPT AI CALLING */}
              <section id="signs-your-business-is-ready" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  SIGNS YOUR BUSINESS IS READY TO ADOPT AI CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When should a small business adopt AI calling? When several of these are true:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>Calls go unanswered during busy hours, breaks or after hours.</li>
                    <li>The same questions come up again and again.</li>
                    <li>Staff spend hours each day on routine calls, reminders or follow-ups.</li>
                    <li>Leads wait hours or days for a first response.</li>
                    <li>You are about to hire more callers or receptionists mainly to keep up with call volume.</li>
                    <li>You have clear answers, prices and rules that can be written down.</li>
                    <li>You use a CRM, calendar or spreadsheet where call outcomes can be recorded.</li>
                  </ul>

                  <div className="pt-2">
                    <h3
                      className="font-bold text-[20px] text-primary-black mb-2"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      When should businesses switch to AI voice agents?
                    </h3>
                    <p
                      className="font-medium text-primary-black text-[16px] leading-[1.4]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      Most businesses should add AI voice agents rather than switch entirely. Start by putting AI on the front line for the calls your team handles worst: missed calls, after-hours calls and repetitive enquiries. Move more volume to AI only when escalation rates are low, callers are satisfied and your team trusts the summaries. Keep people on complex, sensitive and high-value calls.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: HOW AI CALLING SUPPORTS BUSINESS GROWTH AND SCALING */}
              <section id="how-ai-calling-supports-growth" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI CALLING SUPPORTS BUSINESS GROWTH AND SCALING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling for scaling businesses mainly helps in five ways:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li>
                      <strong>Capacity without proportional hiring.</strong> An AI voice agent can handle many calls at once, so growth in call volume does not require the same growth in headcount.
                    </li>
                    <li>
                      <strong>Faster response to new leads.</strong> Contacting a lead quickly, while interest is fresh, improves the chance of a conversation.
                    </li>
                    <li>
                      <strong>Consistent service.</strong> Every caller receives the same approved information, in every shift.
                    </li>
                    <li>
                      <strong>Better data.</strong> Transcripts and call tags show what customers ask, which offers attract calls and where processes fail.
                    </li>
                    <li>
                      <strong>Easier expansion.</strong> A platform that supports several languages lets a business serve new regions without building a new calling team first.
                    </li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For AI voice agents for growing businesses, this means the phone stops being a bottleneck as the business scales.
                  </p>
                </div>
              </section>

              {/* SECTION 5: AI CALLING COST FOR SMALL BUSINESSES */}
              <section id="costs-affordability-roi" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALLING COST FOR SMALL BUSINESSES: AFFORDABILITY AND ROI
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Can small businesses afford AI calling? In most cases, yes, for focused use cases, because many platforms charge by usage or offer small monthly plans. The real cost depends on more than the headline price.
                  </p>

                  <h3
                    className="font-bold text-[20px] text-primary-black mt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    What makes up the cost
                  </h3>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li><strong>Platform fee or subscription.</strong> A monthly charge, which may include a set number of minutes.</li>
                    <li><strong>Usage charges.</strong> Usually per minute or per call, beyond any included minutes.</li>
                    <li><strong>Telephony.</strong> Phone numbers and carrier charges, which some platforms bill separately.</li>
                    <li><strong>Setup and integration.</strong> Connecting the agent to your CRM, calendar or booking system.</li>
                    <li><strong>Content preparation.</strong> Writing the scripts, FAQs and rules the agent uses.</li>
                    <li><strong>Ongoing review.</strong> Time to listen to calls and improve responses.</li>
                  </ul>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Published price lists show how much this varies. Platform list prices in late 2026 are commonly quoted from a few cents to several tens of cents per minute in US dollars, and comparison guides note that telephony, integrations and testing can add to the headline rate. Ask every vendor for an all-in estimate for your expected call volume, in your currency.
                  </p>

                  <h3
                    className="font-bold text-[20px] text-primary-black pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    How to estimate ROI
                  </h3>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Use this simple formula with your own numbers:
                  </p>

                  <div className="bg-white rounded-xl p-4 my-2 border border-card-border">
                    <p className="font-mono text-sm sm:text-base text-primary-black text-center font-bold">
                      Monthly ROI = (Recovered revenue + Staff time saved − Total AI calling cost) / Total AI calling cost
                    </p>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An illustrative example, with assumed numbers you should replace with your own: a clinic misses 120 calls a month. If 30% of those callers would have booked a ₹600 consultation, the recovered revenue is 36 × ₹600 = ₹21,600 per month. If the AI also handles 300 routine calls of about 3 minutes each, that frees roughly 15 hours of staff time. If the total monthly cost of the AI service is lower than the revenue and time value recovered, the investment pays for itself.
                  </p>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The approach works for any business: count missed or slow-handled calls, estimate how many would convert, multiply by average order or booking value, then add the staff time saved.
                  </p>
                </div>
              </section>

              {/* SECTION 6: AI CALLING VS HUMAN TELECALLERS: WHEN TO USE EACH */}
              <section id="ai-calling-vs-human-telecallers" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI CALLING VS HUMAN TELECALLERS: WHEN TO USE EACH
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling and human telecallers are not direct substitutes. Each is better at different work.
                  </p>

                  {/* Standard Blog Table 2: AI Calling vs Human Telecallers */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Situation</th>
                          <th className="py-3.5 px-4 w-1/6 align-top">Better choice</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/2 align-top">Why</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Missed calls and after-hours calls</td>
                          <td className="py-3.5 px-4 font-bold align-top">AI</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Always available</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Repetitive questions and status checks</td>
                          <td className="py-3.5 px-4 font-bold align-top">AI</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Fast, consistent, low cost per call</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment booking and reminders</td>
                          <td className="py-3.5 px-4 font-bold align-top">AI</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Structured and high-volume</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">First response to new leads</td>
                          <td className="py-3.5 px-4 font-bold align-top">AI</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Immediate contact</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Complex, consultative sales</td>
                          <td className="py-3.5 px-4 font-bold align-top">Human</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Needs judgement and rapport</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Negotiation and objections</td>
                          <td className="py-3.5 px-4 font-bold align-top">Human</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Requires flexibility and authority</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Complaints and emotionally sensitive calls</td>
                          <td className="py-3.5 px-4 font-bold align-top">Human</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Needs empathy and discretion</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">High-value or long-term accounts</td>
                          <td className="py-3.5 px-4 font-bold align-top">Human</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Relationship matters</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Most growing businesses get the best results from a hybrid model: AI handles routine and first-contact calls, and telecallers handle conversations where a person makes the difference.
                  </p>
                </div>
              </section>

              {/* SECTION 7: PRACTICAL FACTORS TO EVALUATE */}
              <section id="evaluation-factors" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  PRACTICAL FACTORS TO EVALUATE BEFORE CHOOSING AN AI CALLING PLATFORM
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When comparing AI calling solutions for growing businesses, check:
                  </p>

                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li><strong>Language and voice quality.</strong> Test the languages and accents your customers actually use, using real call scenarios.</li>
                    <li><strong>Integrations.</strong> Can it connect to your CRM, calendar, booking tool, payment or WhatsApp workflow?</li>
                    <li><strong>Human handoff.</strong> Can it transfer to staff with a summary, and route calls by reason or language?</li>
                    <li><strong>Pricing transparency.</strong> Get an all-in estimate covering minutes, telephony, setup and overages.</li>
                    <li><strong>Setup effort and support.</strong> How much of the setup do you do, and how much does the vendor do?</li>
                    <li><strong>Reporting.</strong> Can you see transcripts, call reasons, outcomes and escalation rates?</li>
                    <li><strong>Compliance and data security.</strong> Look for clear handling of consent, call recording and customer data, and alignment with India&apos;s Digital Personal Data Protection Act, 2023 and the telecom regulator&apos;s calling rules.</li>
                    <li><strong>Scalability.</strong> Can it handle growth in call volume and added use cases?</li>
                    <li><strong>Trial or pilot option.</strong> A small, time-limited test with real calls reduces risk.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 8: HOW TO START: A SIMPLE PILOT PLAN */}
              <section id="simple-pilot-plan" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO START: A SIMPLE PILOT PLAN
                </h2>
                <div className="space-y-4">
                  <ul
                    className="list-disc pl-5 space-y-2 text-primary-black text-[16px] sm:text-[18px] leading-[1.4] font-medium"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    <li><strong>List your call types.</strong> Note which calls are frequent, routine and low-risk.</li>
                    <li><strong>Pick one or two use cases.</strong> For example, missed-call follow-up and appointment booking.</li>
                    <li><strong>Prepare the content.</strong> Write accurate answers, prices and rules.</li>
                    <li><strong>Run a short pilot.</strong> Use real calls, with a clear path to a human.</li>
                    <li><strong>Review the calls weekly.</strong> Fix wrong answers and add missing information.</li>
                    <li><strong>Compare before and after.</strong> Measure answered calls, bookings, response time and staff hours.</li>
                    <li><strong>Expand if results hold.</strong> Add use cases or call volume gradually.</li>
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
                    AI calling is a practical investment for small and growing businesses that receive many repetitive calls, miss calls they cannot afford to miss, or are about to hire mainly to keep up with the phone. It is a weaker fit for businesses with very low volume, highly consultative sales or undocumented processes. For most, the sensible path is a hybrid: let AI handle routine and first-contact calls, keep people on complex conversations, start with one or two use cases and measure the results before expanding. That is the clearest answer to whether AI calling is right for growing businesses.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Explore our transparent <Link href="/#pricing" className="font-semibold underline hover:text-black transition-colors">pay-as-you-go pricing</Link>, read how <Link href="/blogs/ai-voice-calling-for-msmes" className="font-semibold underline hover:text-black transition-colors">MSMEs use AI voice calling</Link>, compare <Link href="/blogs/ai-calling-vs-traditional-telecalling" className="font-semibold underline hover:text-black transition-colors">AI calling vs traditional telecalling</Link>, or <Link href="/#contact" className="font-semibold underline hover:text-black transition-colors">request a pilot consultation</Link>.
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
        <BlogNavigation currentSlug="is-ai-calling-right-for-growing-businesses" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
