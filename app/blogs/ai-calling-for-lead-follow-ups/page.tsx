"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "why-lose-leads", label: "Why Small Businesses Lose Leads" },
  { id: "what-is-lead-automation", label: "What Is AI Lead Follow-Up Automation?" },
  { id: "how-voice-agents-automate", label: "How AI Voice Agents Automate Follow-Ups" },
  { id: "manage-lead-outcomes", label: "Managing Lead Outcomes" },
  { id: "effective-workflow", label: "How to Create an Effective Workflow" },
  { id: "practical-examples", label: "Practical Examples for Small Businesses" },
  { id: "assisting-sales-teams", label: "How AI Helps Sales Teams Without Replacing Them" },
  { id: "measure-performance", label: "How to Measure Follow-Up Performance" },
  { id: "choose-software", label: "Choosing the Right Lead Follow-Up Software" },
  { id: "how-callience-helps", label: "How Callience Helps with AI Lead Follow-Ups" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How can small businesses automate lead follow-ups?",
    a: "Small businesses can use AI voice agents to automatically contact new enquiries, ask qualification questions, record customer responses, and schedule further calls.",
  },
  {
    q: "2. How do AI voice agents follow up with leads?",
    a: "AI voice agents contact potential customers, understand their requirements, ask relevant questions, and record whether they are interested, unavailable, or requesting a callback.",
  },
  {
    q: "3. How does AI calling help convert leads?",
    a: "AI calling helps businesses maintain consistent communication, reduce missed follow-ups, identify qualified customers, and connect interested leads with sales representatives.",
  },
  {
    q: "4. Can AI lead follow-up software manage unanswered calls?",
    a: "Yes. Businesses can configure follow-up workflows to record unanswered calls and schedule appropriate retry attempts, subject to customer preferences and calling rules.",
  },
  {
    q: "5. Can AI calling replace sales representatives?",
    a: "No. AI can manage repetitive calling and basic lead qualification, while sales representatives remain important for negotiations, detailed discussions, and closing deals.",
  },
];

export default function AICallingForLeadFollowUpsPage() {
  const [activeSection, setActiveSection] = useState("why-lose-leads");
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
                <span className="block">AI CALLING FOR LEAD FOLLOW-UPS:</span>
                <span className="block lg:whitespace-nowrap">HOW SMALL BUSINESSES CAN AUTOMATE THEM</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Learn how AI calling helps small businesses automate lead follow-ups, qualify prospects, and schedule callbacks more efficiently.
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
              src="/AI Calling for Lead Follow-Ups_ How Small Businesses Can Automate Them.png"
              alt="AI Calling for Lead Follow-Ups: How Small Businesses Can Automate Them"
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
                  Following up with potential customers is essential for business growth, but managing multiple enquiries can be difficult for small businesses. Delayed responses, missed calls, and inconsistent follow-ups can result in lost sales opportunities. This is especially important for businesses such as real estate agencies and coaching institutes, where timely communication influences customer decisions.
                </p>
                <p>
                  AI calling for lead follow-up helps businesses automate initial calls, understand customer interests, ask relevant questions, and schedule further follow-ups. This allows sales teams to focus on qualified leads, improve customer communication, and reduce repetitive manual calling.
                </p>
              </div>

              {/* SECTION 1: WHY DO SMALL BUSINESSES LOSE LEADS DUE TO POOR FOLLOW-UPS? */}
              <section id="why-lose-leads" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY DO SMALL BUSINESSES LOSE LEADS DUE TO POOR FOLLOW-UPS?
                </h2>
                <div className="space-y-4">
                  <p>
                    Generating enquiries does not always result in sales. Many potential customers need additional information, clarification, or time before making a purchase decision.
                  </p>
                  <p>
                    Small businesses may lose these opportunities because:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Delayed responses:</strong> Customers may lose interest when businesses take too long to contact them.
                    </li>
                    <li>
                      <strong>Missed follow-ups:</strong> Employees may forget to call potential customers again.
                    </li>
                    <li>
                      <strong>Limited staff:</strong> Small sales teams may struggle to manage a large number of enquiries.
                    </li>
                    <li>
                      <strong>Unorganized lead records:</strong> Without proper tracking, businesses may not know which customers need another call.
                    </li>
                    <li>
                      <strong>Inconsistent communication:</strong> Some leads receive multiple follow-ups, while others are overlooked.
                    </li>
                  </ul>
                  <p>
                    AI lead follow-up automation helps businesses organize these activities and maintain a more consistent communication process.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHAT IS AI LEAD FOLLOW-UP AUTOMATION? */}
              <section id="what-is-lead-automation" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI LEAD FOLLOW-UP AUTOMATION?
                </h2>
                <div className="space-y-4">
                  <p>
                    AI lead follow-up automation uses artificial intelligence to contact potential customers, conduct conversations, collect information, and organize follow-up activities.
                  </p>
                  <p>
                    Unlike traditional automated calls that play fixed recordings, AI voice agents can understand customer responses and reply according to the conversation.
                  </p>
                  <p>
                    For example, when someone submits an enquiry about a property through a real estate website, an AI voice agent can call the person, ask about their preferred location and budget, and record whether they want to schedule a property visit.
                  </p>
                  <p>
                    The information can then be stored in a CRM or lead management system so that sales representatives can take the next action.
                  </p>
                  <p>
                    AI sales automation combines lead qualification, automated calling, and follow-up scheduling to help businesses manage their sales activities more efficiently.
                  </p>
                </div>
              </section>

              {/* SECTION 3: HOW AI VOICE AGENTS AUTOMATE LEAD FOLLOW-UPS */}
              <section id="how-voice-agents-automate" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS AUTOMATE LEAD FOLLOW-UPS
                </h2>
                <div className="space-y-6">
                  <p>
                    AI voice agents can manage different stages of the lead follow-up process:
                  </p>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      1. Automated First Calls
                    </h3>
                    <p className="mb-2">
                      The first interaction after receiving an enquiry is important. AI voice agents can contact new leads through automated first calls and introduce the business.
                    </p>
                    <p className="mb-2">
                      For example, a coaching institute can use AI-powered lead follow-up to contact students who have submitted admission forms. The agent can ask which course they are interested in and whether they want additional information.
                    </p>
                    <p>
                      This helps businesses respond to enquiries more consistently.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      2. Structured Lead Qualification
                    </h3>
                    <p className="mb-2">
                      Not every enquiry represents an immediate sales opportunity. Businesses need to understand customer requirements before assigning leads to sales employees.
                    </p>
                    <p className="mb-2">
                      AI lead qualification and follow up helps businesses understand customer requirements, identify interested prospects, and decide which leads need further attention.
                    </p>
                    <p className="mb-2">
                      AI voice agents can ask structured questions about:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Product or service requirements</li>
                      <li>Budget and preferences</li>
                      <li>Purchase or admission timelines</li>
                      <li>Interest in receiving additional information</li>
                      <li>Availability for a follow-up conversation</li>
                    </ul>
                    <p className="mb-2">
                      Based on the responses, businesses can categorize leads according to their interest and requirements.
                    </p>
                    <p>
                      <strong>Example:</strong> A real estate agency can identify buyers who are actively searching for properties and separate them from people who are only exploring available options.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      3. Automated Follow-Up Calls
                    </h3>
                    <p className="mb-2">
                      Some customers may show interest but need more time before making a decision. AI lead follow-up calls can help businesses reconnect with these customers according to a planned schedule.
                    </p>
                    <p className="mb-2">
                      For example, an electronics retailer can contact customers who previously enquired about laptops but did not complete their purchase.
                    </p>
                    <p>
                      The AI agent can ask whether they are still interested and offer to arrange a conversation with a sales representative.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      4. Callback Scheduling
                    </h3>
                    <p className="mb-2">
                      Sometimes customers answer a call but are not available to speak. AI voice agents can record their preferred callback time and update the lead&apos;s follow-up status.
                    </p>
                    <p className="mb-2">
                      For example, a clinic can contact someone who enquired about a consultation. If the person is busy, the AI agent can record a suitable time for another call.
                    </p>
                    <p>
                      This helps businesses avoid unnecessary repeated calls.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: HOW TO MANAGE INTERESTED, UNANSWERED AND CALLBACK-REQUESTED LEADS */}
              <section id="manage-lead-outcomes" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO MANAGE INTERESTED, UNANSWERED AND CALLBACK-REQUESTED LEADS
                </h2>
                <div className="space-y-4">
                  <p>
                    An organized lead management process helps businesses understand what action is required after every calling attempt. AI lead follow-up software can help categorize customer interactions into different outcomes:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Lead Status</th>
                          <th className="py-3.5 px-4 w-5/12 align-top">Meaning</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/3 align-top">Next Action</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Interested</td>
                          <td className="py-3.5 px-4 align-top">Customer wants more information</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Assign to sales team</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Unanswered</td>
                          <td className="py-3.5 px-4 align-top">Customer did not answer</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Schedule an appropriate retry</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Callback Requested</td>
                          <td className="py-3.5 px-4 align-top">Customer requested another call</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Schedule callback</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Not Interested</td>
                          <td className="py-3.5 px-4 align-top">Customer declined the offer</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Update lead record and respect preferences</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Qualified</td>
                          <td className="py-3.5 px-4 align-top">Customer meets business requirements</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Prioritize sales follow-up</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    This classification helps sales teams identify important enquiries instead of manually reviewing every call.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HOW TO CREATE AN EFFECTIVE AI LEAD FOLLOW-UP WORKFLOW */}
              <section id="effective-workflow" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CREATE AN EFFECTIVE AI LEAD FOLLOW-UP WORKFLOW
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses can create a simple automated workflow to manage new enquiries and follow-ups:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 1
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Collect New Leads
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Capture enquiries through website forms, advertisements, landing pages, or other business channels.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 2
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Initiate the First Call
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        The AI voice agent contacts the customer promptly and introduces the business.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 3
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Ask Qualification Questions
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        The agent collects relevant information about customer requirements, interest, and preferences.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 4
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Record the Call Outcome
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        The system records whether the customer is interested, unavailable, requires a callback, or does not want further contact.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 5
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Schedule Further Follow-Ups
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Based on the outcome, the business can arrange suitable future calls or assign the lead to a sales representative.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 6
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Track Lead Progress
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Call outcomes and follow-up status can be reviewed directly through the CRM or lead management dashboard.
                      </p>
                    </div>
                  </div>

                  <p>
                    This workflow reduces repetitive manual calling and makes lead management more organized.
                  </p>
                  <p>
                    Understanding how to automate lead follow ups with AI can help businesses create a structured process for contacting new enquiries, recording responses, and scheduling callbacks.
                  </p>
                  <p>
                    Businesses looking for how to automate sales follow up calls can use AI voice agents to manage repetitive conversations and organize future contact attempts.
                  </p>
                </div>
              </section>

              {/* SECTION 6: PRACTICAL EXAMPLES OF AI LEAD FOLLOW-UP FOR SMALL BUSINESSES */}
              <section id="practical-examples" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  PRACTICAL EXAMPLES OF AI LEAD FOLLOW-UP FOR SMALL BUSINESSES
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice agents can support different industries where customer enquiries require regular communication:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Business Type</th>
                          <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">How AI Calling Helps</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Real Estate Agencies</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Follow up with property enquiries, qualify buyers, and arrange site visits</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Education Institutes</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Contact admission enquiries, understand course preferences, and schedule counselling calls</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Clinics</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Follow up with consultation enquiries and arrange appointments</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Service Providers</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Contact customers requesting quotations and schedule service callbacks</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Retail Businesses</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Follow up with product enquiries and identify interested buyers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    These examples show how AI calling can support daily sales activities without requiring employees to manually contact every enquiry.
                  </p>
                  <p>
                    Understanding how small businesses can automate lead follow ups helps companies maintain regular communication with potential customers without depending entirely on manual calling.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW AI CALLING HELPS SALES TEAMS WITHOUT REPLACING THEM */}
              <section id="assisting-sales-teams" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI CALLING HELPS SALES TEAMS WITHOUT REPLACING THEM
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice agents are useful for repetitive conversations, but important customer interactions still require human involvement.
                  </p>
                  <p>
                    AI can handle initial enquiries, basic qualification questions, and scheduled follow-ups. Human sales representatives can then focus on product demonstrations, negotiations, detailed explanations, and closing deals.
                  </p>
                  <p>
                    AI voice agents can follow up with leads by understanding their interests, answering basic questions, and arranging conversations with sales representatives.
                  </p>
                  <p>
                    For example, an education institute can use AI calling to contact new admission enquiries and understand students&apos; course preferences. Students who show strong interest can then be connected with counsellors for detailed discussions.
                  </p>
                  <p>
                    This approach allows businesses to combine automated communication with personal customer relationships. The best way to follow up with new leads automatically is to combine timely AI calling, structured qualification questions, and clear follow-up schedules.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW TO MEASURE AI LEAD FOLLOW-UP PERFORMANCE */}
              <section id="measure-performance" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO MEASURE AI LEAD FOLLOW-UP PERFORMANCE
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses should regularly review calling outcomes to understand whether their AI lead follow-up automation is working effectively. Important performance metrics include:
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
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Total Calls</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Number of calls attempted</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Connection Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of calls answered</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Qualified Leads</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Number of leads meeting business requirements</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Callback Requests</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers requesting another call</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Follow-Up Completion</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Scheduled follow-ups successfully attempted</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Conversion Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of leads that become customers</td>
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
                      Performance Tracking Example:
                    </p>
                    <p className="text-sm sm:text-base text-dark-grey">
                      Suppose a business contacts 200 potential customers, connects with 120, and identifies 36 qualified leads:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base font-semibold text-primary-black">
                      <li>Connection Rate = (120 ÷ 200) × 100 = 60%</li>
                      <li>Lead Qualification Rate (among connected calls) = (36 ÷ 120) × 100 = 30%</li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-grey pt-1">
                      Tracking these metrics helps businesses identify gaps in their calling process, improve scripts, and prioritize leads that need attention.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 9: HOW TO CHOOSE THE RIGHT AI LEAD FOLLOW-UP SOFTWARE */}
              <section id="choose-software" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CHOOSE THE RIGHT AI LEAD FOLLOW-UP SOFTWARE
                </h2>
                <div className="space-y-4">
                  <p>
                    Before selecting AI lead follow-up software, small businesses should consider:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>CRM Integration:</strong> Ability to store customer information and update lead status.
                    </li>
                    <li>
                      <strong>Custom Calling Scripts:</strong> Flexibility to create conversations for different products and services.
                    </li>
                    <li>
                      <strong>Lead Qualification:</strong> Ability to ask structured questions and capture customer responses.
                    </li>
                    <li>
                      <strong>Callback Management:</strong> Options for recording customer availability and scheduling follow-ups.
                    </li>
                    <li>
                      <strong>Reporting:</strong> Dashboard features to track call outcomes and conversions.
                    </li>
                    <li>
                      <strong>Human Call Transfer:</strong> Ability to connect interested customers with sales representatives.
                    </li>
                    <li>
                      <strong>Pricing:</strong> Calling charges, subscriptions, and integration costs.
                    </li>
                  </ul>
                  <p>
                    Businesses should also evaluate data security and ensure their calling campaigns follow applicable communication, privacy, and consent requirements.
                  </p>
                </div>
              </section>

              {/* SECTION 10: HOW CALLIENCE HELPS BUSINESSES WITH AI LEAD FOLLOW-UPS */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI LEAD FOLLOW-UPS
                </h2>
                <div className="space-y-4">
                  <p>
                    Callience helps businesses automate inbound and outbound customer communication using AI voice agents. Businesses can use it for lead qualification, admission enquiries, follow-ups, and customer re-engagement.
                  </p>
                  <p>
                    For inbound calls, AI agents can answer common questions, collect customer details, and direct enquiries to the right team. This helps businesses reduce repetitive calling tasks, maintain consistent follow-ups, and give sales teams more time to focus on important customer interactions.
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
                    AI calling for lead follow-up helps small businesses manage customer enquiries more consistently by automating initial calls, qualification questions, and scheduled follow-ups. It also helps organize interested, unanswered, and callback-requested leads so that businesses know which customers need further attention.
                  </p>
                  <p>
                    For businesses such as real estate agencies, coaching institutes, clinics, and service providers, AI voice agents can reduce repetitive calling work while supporting sales teams throughout the lead management process.
                  </p>
                  <p>
                    The best approach is to use AI for routine conversations and keep human employees involved in important sales discussions. By tracking call outcomes, qualified leads, follow-up completion, and conversions, businesses can improve their lead management process over time.
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
        <BlogNavigation currentSlug="ai-calling-for-lead-follow-ups" />

        {/* Contact Us Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
