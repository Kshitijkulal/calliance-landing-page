"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-are-automated-sales-enquiry-follow-ups", label: "What Are Automated Sales Enquiry Follow-Ups?" },
  { id: "why-struggle-with-sales-enquiries", label: "Why Do Businesses Struggle with Sales Enquiry Management?" },
  { id: "how-automated-follow-ups-help", label: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries" },
  { id: "how-businesses-can-automate", label: "How Businesses Can Automate Sales Enquiry Follow-Ups" },
  { id: "tools-that-help", label: "Tools That Help Businesses Manage Sales Follow-Ups" },
  { id: "benefits-of-automated-follow-ups", label: "Benefits of Automated Sales Enquiry Follow-Ups" },
  { id: "how-to-track-and-manage", label: "How to Track and Manage Sales Enquiries" },
  { id: "how-to-improve-enquiry-management", label: "How Businesses Can Improve Their Sales Enquiry Management" },
  { id: "how-callience-helps", label: "How Callience Helps with Automated Follow-Ups" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How automated follow-ups help businesses manage sales enquiries?",
    a: "Automated follow-ups help businesses contact potential customers on time, record their responses, schedule callbacks, and organize enquiries throughout the sales process.",
  },
  {
    q: "2. How can businesses automate sales enquiry follow-ups?",
    a: "Businesses can use CRM systems, sales automation software, and AI voice agents to contact new enquiries, qualify leads, record responses, and schedule further communication.",
  },
  {
    q: "3. What is the best software for managing sales enquiries?",
    a: "The right software depends on business requirements. Sales CRM platforms, lead management tools, and automated follow-up systems can help organize customer information and monitor sales activities.",
  },
  {
    q: "4. Can AI voice agents manage sales follow-ups?",
    a: "Yes. AI voice agents can contact potential customers, ask qualification questions, provide basic information, record responses, and arrange callbacks.",
  },
  {
    q: "5. How can businesses track sales enquiries?",
    a: "Businesses can track enquiries using CRM dashboards and sales tracking software. Important metrics include response time, qualified leads, follow-up completion, and conversion rates.",
  },
];

export default function AutomatedFollowUpsManageSalesEnquiriesPage() {
  const [activeSection, setActiveSection] = useState("what-are-automated-sales-enquiry-follow-ups");
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

          {/* Header Row: Title & Metadata Sidebar */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 xl:gap-14 2xl:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[940px]">
              <h1
                className="font-normal uppercase text-primary-black text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span className="block">HOW AUTOMATED FOLLOW-UPS HELP</span>
                <span className="block sm:whitespace-nowrap">BUSINESSES MANAGE SALES ENQUIRIES</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[660px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Learn how automated enquiry follow-ups help businesses manage sales enquiries, qualify leads, schedule callbacks, and improve conversions.
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
        <div className="w-full bg-primary-beige mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515]">
            <Image
              src="/How Automated Follow-Ups Help Businesses Manage Sales Enquiries.png"
              alt="How Automated Follow-Ups Help Businesses Manage Sales Enquiries"
              fill
              sizes="100vw"
              className="object-cover object-center w-full h-full"
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
              {/* Mobile Accordion */}
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
                        className={`block w-full text-left py-0.5 text-[14px] transition-colors leading-snug ${
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

              {/* Desktop Sticky / Fixed TOC */}
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
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-primary-black hover:opacity-80 transition-opacity cursor-pointer mb-4"
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
                        <div
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`group flex items-start gap-2.5 w-full text-left transition-all py-1 cursor-pointer ${
                            isActive
                              ? "font-bold text-primary-black"
                              : "text-dark-grey hover:text-primary-black"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-2 transition-all shrink-0 ${
                              isActive
                                ? "bg-primary-black scale-110"
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
              {/* Introduction Paragraphs */}
              <div className="space-y-4 mb-12">
                <p>
                  Managing sales enquiries is an important part of growing a business, but following up with every potential customer can become difficult as enquiries increase. Delayed responses, missed calls, and unorganized customer records can lead to lost sales opportunities. Businesses need a consistent process to ensure that every enquiry receives proper attention.
                </p>
                <p>
                  Automated enquiry follow-ups help businesses manage customer communication through scheduled calls, messages, and automated workflows. With AI voice agents and sales automation tools, businesses can contact potential customers, understand their requirements, record responses, and schedule further follow-ups. This helps sales teams save time, manage enquiries more efficiently, and focus on customers who are more likely to convert.
                </p>
              </div>

              {/* SECTION 1: WHAT ARE AUTOMATED SALES ENQUIRY FOLLOW-UPS? */}
              <section id="what-are-automated-sales-enquiry-follow-ups" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT ARE AUTOMATED SALES ENQUIRY FOLLOW-UPS?
                </h2>
                <div className="space-y-4">
                  <p>
                    Automated sales enquiry follow-up is a process of contacting potential customers through predefined workflows instead of depending entirely on manual follow-ups.
                  </p>
                  <p>
                    When someone submits an enquiry through a website, advertisement, phone call, or landing page, the system can record their details and initiate a follow-up based on the business&apos;s communication process.
                  </p>
                  <p>
                    For example, a real estate agency can automatically contact someone who has enquired about a property, ask about their preferred location and budget, and arrange a callback with a sales representative.
                  </p>
                  <p>
                    An automated enquiry follow-up process helps businesses maintain regular communication and reduces the chances of overlooking potential customers.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY DO BUSINESSES STRUGGLE WITH SALES ENQUIRY MANAGEMENT? */}
              <section id="why-struggle-with-sales-enquiries" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY DO BUSINESSES STRUGGLE WITH SALES ENQUIRY MANAGEMENT?
                </h2>
                <div className="space-y-4">
                  <p>
                    As businesses receive more enquiries, manually managing every customer interaction becomes challenging. Some common problems include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Delayed responses:</strong> Customers may lose interest when businesses take too long to respond.
                    </li>
                    <li>
                      <strong>Missed follow-ups:</strong> Employees may forget to contact potential customers again.
                    </li>
                    <li>
                      <strong>Unorganized records:</strong> Customer details and previous conversations may be scattered across different platforms.
                    </li>
                    <li>
                      <strong>Limited staff availability:</strong> Small sales teams may struggle to manage a large number of enquiries.
                    </li>
                    <li>
                      <strong>Poor tracking:</strong> Businesses may not know which enquiries are interested, unanswered, or awaiting callbacks.
                    </li>
                  </ul>
                  <p className="pt-2">
                    A structured sales enquiry management process helps businesses organize customer information and ensure that important enquiries receive timely attention.
                  </p>
                </div>
              </section>

              {/* SECTION 3: HOW AUTOMATED FOLLOW-UPS HELP BUSINESSES MANAGE SALES ENQUIRIES */}
              <section id="how-automated-follow-ups-help" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AUTOMATED FOLLOW-UPS HELP BUSINESSES MANAGE SALES ENQUIRIES
                </h2>
                <div className="space-y-6">
                  <p>
                    Automated customer follow-ups can support different stages of the sales process. Here are some practical ways businesses can use them:
                  </p>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      1. Responding to New Enquiries
                    </h3>
                    <p className="mb-2">
                      Contacting customers soon after they submit an enquiry helps businesses maintain interest and provide relevant information.
                    </p>
                    <p className="mb-2">
                      An automated sales enquiry follow-up system can initiate calls or messages when a new enquiry is received.
                    </p>
                    <p>
                      <strong>Example:</strong> A coaching institute can automatically contact students who submit admission enquiries, ask about their preferred courses, and arrange counselling calls.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      2. Qualifying Potential Customers
                    </h3>
                    <p className="mb-2">
                      Not every enquiry represents an immediate sales opportunity. Businesses need to understand customer requirements before assigning enquiries to sales representatives.
                    </p>
                    <p className="mb-2">
                      AI voice agents can ask questions about product preferences, budget, requirements, and purchase timelines.
                    </p>
                    <p>
                      Based on the responses, businesses can identify interested customers and prioritize further communication.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      3. Scheduling Consistent Follow-Ups
                    </h3>
                    <p className="mb-2">
                      Some customers need additional time before making a purchasing decision. Automated enquiry follow-ups help businesses reconnect with these customers according to planned schedules.
                    </p>
                    <p className="mb-2">
                      For example, an electronics retailer can follow up with someone who enquired about a laptop but did not complete the purchase.
                    </p>
                    <p>
                      The system can record the customer&apos;s response and arrange another call when required.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      4. Managing Unanswered Calls and Callback Requests
                    </h3>
                    <p className="mb-2">
                      Customers may not always be available when businesses contact them. Automated workflows can record unanswered calls and callback requests for future action.
                    </p>
                    <p>
                      For example, a clinic can contact a customer about a consultation. When the customer requests another call in the evening, the system can record the preferred callback time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      5. Keeping Customer Records Organized
                    </h3>
                    <p className="mb-2">
                      An automated follow-up system can record customer details, previous interactions, call outcomes, and future follow-up requirements.
                    </p>
                    <p>
                      When connected to suitable lead management software or a CRM, this information helps sales teams understand the status of each enquiry without reviewing every conversation manually.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: HOW BUSINESSES CAN AUTOMATE SALES ENQUIRY FOLLOW-UPS */}
              <section id="how-businesses-can-automate" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BUSINESSES CAN AUTOMATE SALES ENQUIRY FOLLOW-UPS
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses can create a structured follow-up process using automation tools and AI voice agents:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 1
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Collect Enquiries
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Capture customer details from website forms, advertisements, landing pages, phone calls, and other enquiry sources.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 2
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Organize Customer Information
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Store customer names, contact details, product interests, and enquiry dates in a centralized system.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 3
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Initiate Automated Contact
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Configure AI voice agents or other communication tools to contact new enquiries according to the selected workflow.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 4
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Record Customer Responses
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Identify whether customers are interested, unavailable, requesting callbacks, or no longer interested.
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
                        Arrange future communication based on customer preferences and the stage of the enquiry.
                      </p>
                    </div>

                    <div className="bg-white border border-card-border rounded-xl p-5 space-y-1.5">
                      <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                        Step 6
                      </div>
                      <h4 className="font-bold text-lg text-primary-black">
                        Assign Important Enquiries
                      </h4>
                      <p className="text-sm text-dark-grey leading-relaxed">
                        Forward qualified leads and complicated queries to sales representatives for personal assistance.
                      </p>
                    </div>
                  </div>

                  <p className="pt-2">
                    Understanding how to manage sales enquiries through automated follow-ups helps businesses create a consistent process for handling customer interactions.
                  </p>
                </div>
              </section>

              {/* SECTION 5: TOOLS THAT HELP BUSINESSES MANAGE SALES FOLLOW-UPS */}
              <section id="tools-that-help" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  TOOLS THAT HELP BUSINESSES MANAGE SALES FOLLOW-UPS
                </h2>
                <div className="space-y-4">
                  <p>
                    Different tools can support enquiry management and sales automation. Businesses should select solutions according to their team size, communication requirements, and budget:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Tool</th>
                          <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">How It Helps</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Sales Automation Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Automates repetitive sales activities and follow-ups</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead Management Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Stores customer information and lead status</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Sales Follow-Up Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Organizes scheduled customer follow-ups</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead Follow-Up Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Helps manage and prioritize potential customers</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Sales Pipeline Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Tracks enquiries through different sales stages</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Enquiry Management System</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Centralizes incoming customer enquiries</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Sales Tracking Software</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Monitors sales activities and conversions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Using suitable tools makes follow-up automation for businesses more organized and easier to manage.
                  </p>
                </div>
              </section>

              {/* SECTION 6: BENEFITS OF AUTOMATED SALES ENQUIRY FOLLOW-UPS */}
              <section id="benefits-of-automated-follow-ups" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF AUTOMATED SALES ENQUIRY FOLLOW-UPS
                </h2>
                <div className="space-y-4">
                  <p>
                    The benefits of automated sales enquiry follow-ups extend beyond reducing manual calling work:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Faster communication:</strong> New enquiries can receive timely responses.
                    </li>
                    <li>
                      <strong>Consistent follow-ups:</strong> Businesses can maintain planned communication schedules.
                    </li>
                    <li>
                      <strong>Better lead organization:</strong> Customer responses and enquiry status remain easier to track.
                    </li>
                    <li>
                      <strong>Improved productivity:</strong> Sales employees can spend more time on important conversations.
                    </li>
                    <li>
                      <strong>Reduced missed opportunities:</strong> Automated reminders help identify enquiries requiring further attention.
                    </li>
                  </ul>
                  <p className="pt-2">
                    These benefits can help businesses maintain a more organized sales process as their customer base grows.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW TO TRACK AND MANAGE SALES ENQUIRIES */}
              <section id="how-to-track-and-manage" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO TRACK AND MANAGE SALES ENQUIRIES
                </h2>
                <div className="space-y-4">
                  <p>
                    Automation becomes more useful when businesses regularly review enquiry performance and follow-up outcomes. Important metrics include:
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
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Total Enquiries</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Number of enquiries received</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Response Time</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Time taken to contact a new enquiry</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Follow-Up Completion</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Number of scheduled follow-ups attempted</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Qualified Leads</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers showing genuine interest</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Callback Requests</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers requesting another conversation</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Conversion Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of enquiries that become customers</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Cost Per Lead</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Total expenditure divided by leads generated</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    For example, if a business receives 200 enquiries and converts 30 into customers, its enquiry-to-customer conversion rate is 15%.
                  </p>
                  <p>
                    Tracking these metrics helps businesses identify delays, improve communication workflows, and understand which enquiries need additional attention.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW BUSINESSES CAN IMPROVE THEIR SALES ENQUIRY MANAGEMENT */}
              <section id="how-to-improve-enquiry-management" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BUSINESSES CAN IMPROVE THEIR SALES ENQUIRY MANAGEMENT
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses can improve their enquiry management process by following a few practical practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Respond Promptly:</strong> Contact new enquiries as soon as reasonably possible.
                    </li>
                    <li>
                      <strong>Maintain Accurate Records:</strong> Keep customer details and previous conversations updated.
                    </li>
                    <li>
                      <strong>Personalize Follow-Ups:</strong> Use relevant enquiry information instead of sending the same message to every customer.
                    </li>
                    <li>
                      <strong>Set Clear Follow-Up Schedules:</strong> Decide when customers should receive additional calls or messages.
                    </li>
                    <li>
                      <strong>Prioritize Interested Leads:</strong> Focus sales representatives on customers who require detailed discussions.
                    </li>
                    <li>
                      <strong>Review Performance Regularly:</strong> Monitor follow-up completion, customer responses, and conversion rates.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 9: HOW CALLIENCE HELPS BUSINESSES WITH AUTOMATED FOLLOW-UPS */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AUTOMATED FOLLOW-UPS
                </h2>
                <div className="space-y-4">
                  <p>
                    Callience helps businesses manage customer communication through AI-powered inbound and outbound voice calling. Businesses can use AI voice agents for lead qualification, admission enquiries, automated follow-ups, appointment reminders, and customer re-engagement.
                  </p>
                  <p>
                    For incoming enquiries, AI agents can answer common questions, collect customer information, and direct callers to the appropriate team. These workflows help businesses reduce repetitive calling tasks, maintain consistent follow-ups, and give sales teams more time to focus on qualified leads and important customer conversations.
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
                    Automated enquiry follow-ups help businesses manage customer communication more consistently by organizing new enquiries, scheduling calls, recording responses, and prioritizing interested customers.
                  </p>
                  <p>
                    Whether it is a real estate agency following up with property buyers or an education institute managing admission enquiries, automation can reduce repetitive work and help sales teams focus on meaningful conversations.
                  </p>
                  <p>
                    By combining suitable sales tools, AI voice agents, and proper enquiry tracking, businesses can create a more organized sales process and improve how they manage potential customers.
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
        <BlogNavigation currentSlug="automated-follow-ups-manage-sales-enquiries" />

        {/* Contact Us Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
