"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-are-inactive-and-dormant-customers", label: "What Are Inactive and Dormant Customers?" },
  { id: "why-customers-stop-engaging", label: "Why Customers Stop Engaging" },
  { id: "why-customer-reactivation-is-worth-the-effort", label: "Why Customer Reactivation Is Worth the Effort" },
  { id: "how-agents-conduct-reactivation-calls", label: "How AI Voice Agents Conduct Reactivation Calls" },
  { id: "personalised-win-back-conversations", label: "Personalised Customer Win-Back Conversations" },
  { id: "understanding-why-customers-left", label: "Understanding Why Customers Became Inactive" },
  { id: "capturing-renewed-interest-and-responses", label: "Capturing Renewed Interest & Responses" },
  { id: "how-to-create-win-back-campaigns", label: "How to Create Win-Back Campaigns Using AI" },
  { id: "benefits-of-automated-reactivation-calls", label: "Benefits of Automated Customer Reactivation" },
  { id: "measuring-reactivation-outcomes", label: "Measuring Reactivation & Campaign Outcomes" },
  { id: "limitations-and-good-practice", label: "Limitations and Good Practice" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "How do AI voice agents help businesses re-engage inactive customers?",
    a: "They call customers who have stopped engaging, use their history to personalise the conversation, ask what changed and offer a relevant next step. Responses and reasons are recorded for follow-up.",
  },
  {
    q: "How can businesses reactivate dormant customers using AI?",
    a: "Segment dormant customers from CRM data, confirm calling permissions, write a short personalised script and run a pilot with an AI voice agent. Route interested customers to a salesperson or booking and measure results against a control group.",
  },
  {
    q: "How does AI calling help win back inactive customers?",
    a: "It contacts every customer in a segment consistently, listens to their reasons for leaving and responds with a suitable option. It also frees staff to handle the customers who show interest.",
  },
  {
    q: "What are customer win-back campaigns?",
    a: "Customer win-back campaigns are planned outreach efforts to bring back customers who have stopped buying or engaging, using calls, messages or offers matched to their history.",
  },
  {
    q: "What are the benefits of automated customer reactivation calls?",
    a: "Scale, consistent personalised outreach, insight into why customers left, less manual calling and clearly recorded outcomes for each call.",
  },
  {
    q: "How should businesses measure reactivation campaigns?",
    a: "Track connect and completion rates, reactivation rate, revenue per reactivated customer, retention afterwards, reasons for inactivity and opt-outs, and compare results with a control group that was not called.",
  },
];

export default function AICustomerReactivationPage() {
  const [activeSection, setActiveSection] = useState("what-are-inactive-and-dormant-customers");
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
                AI CUSTOMER REACTIVATION: HOW VOICE AGENTS RE-ENGAGE INACTIVE CUSTOMERS
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI customer reactivation uses voice agents to call lapsed customers, learn why they left and bring them back. See how win-back calls work and what to measure.
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
              src="/ai-customer-reactivation-voice-agents.png"
              alt="AI Customer Reactivation: How Voice Agents Re-Engage Inactive Customers"
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
                  AI customer reactivation is the use of AI voice agents to call customers who have stopped buying or engaging, find out why, and invite them back with a relevant offer or next step. An AI voice agent for customer reactivation uses the customer&apos;s history, such as the last purchase, last visit or lapsed plan, to open a personalised conversation, records the response, and then books the next step or passes interested customers to a salesperson. Businesses use it for dormant customer reactivation in subscriptions, healthcare, education, retail, insurance and services.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  An inactive customer is someone who has not purchased, renewed or engaged within the period that is normal for that business. A dormant customer has been inactive long enough that the relationship has gone quiet. These people already know the business, so they are usually cheaper to win back than strangers are to acquire, and the reason they left is often something the business can fix.
                </p>
              </div>

              {/* SECTION 1: WHAT ARE INACTIVE AND DORMANT CUSTOMERS? */}
              <section id="what-are-inactive-and-dormant-customers" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT ARE INACTIVE AND DORMANT CUSTOMERS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    There is no single time limit that makes a customer inactive. It depends on the buying cycle. A customer who has not ordered groceries in two months has lapsed. A customer who has not renewed an annual insurance policy in a year may simply be due. Define inactivity from your own purchase pattern.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Common examples include lapsed subscribers, past buyers who have not returned, expired members, patients overdue for a follow-up, students who enquired or enrolled but dropped off, and service customers whose contract ended.
                  </p>

                  {/* Table 1: Inactivity Stages */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Stage</th>
                          <th className="py-3.5 px-4 w-1/2 align-top">Description</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/4 align-top">Typical call approach</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">At risk</td>
                          <td className="py-3.5 px-4 align-top">Recently inactive, past their usual buying interval</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Light check-in, remind of value, offer help</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lapsed</td>
                          <td className="py-3.5 px-4 align-top">Inactive for a clear period, such as an expired plan</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Ask what changed, offer a relevant option</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Dormant</td>
                          <td className="py-3.5 px-4 align-top">Long inactive, relationship cold</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Reintroduce the business, share what is new, accept a no gracefully</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 2: WHY CUSTOMERS STOP ENGAGING WITH A BUSINESS */}
              <section id="why-customers-stop-engaging" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY CUSTOMERS STOP ENGAGING WITH A BUSINESS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Customers rarely leave for one reason, and many never say why. Common causes include:
                  </p>
                  <ul className="space-y-2.5 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Price or value:</strong> The cost no longer feels justified, or a cheaper option appeared.
                    </li>
                    <li>
                      <strong>A better alternative:</strong> A competitor offered something more suitable.
                    </li>
                    <li>
                      <strong>A poor or unresolved experience:</strong> A delay, mistake or complaint that was never fixed.
                    </li>
                    <li>
                      <strong>Changed needs:</strong> The customer no longer needs the product or service.
                    </li>
                    <li>
                      <strong>Timing or life change:</strong> A move, a busy period or a change in budget.
                    </li>
                    <li>
                      <strong>Forgetting:</strong> The customer simply drifted away and was never contacted.
                    </li>
                    <li>
                      <strong>Friction:</strong> Hard-to-use booking, payment or renewal processes.
                    </li>
                    <li>
                      <strong>Lack of communication:</strong> The business went quiet and the customer lost touch.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Because the real reason is often unknown, a good reactivation call asks before it offers.
                  </p>
                </div>
              </section>

              {/* SECTION 3: WHY CUSTOMER REACTIVATION IS WORTH THE EFFORT */}
              <section id="why-customer-reactivation-is-worth-the-effort" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY CUSTOMER REACTIVATION IS WORTH THE EFFORT
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Reactivation is one of several customer retention strategies, alongside onboarding, loyalty programmes and proactive support. Bain &amp; Company research by Frederick Reichheld on more than two dozen service businesses found that a five-point improvement in customer retention can lift profits by 25% to 80%, and later versions of the finding quote figures up to 95%, depending on the industry. Those figures describe retention in general, not reactivation calls specifically, but they show why keeping and recovering customers matters. Reactivation also surfaces the reasons customers leave, which helps prevent further losses.
                  </p>
                </div>
              </section>

              {/* SECTION 4: HOW AI VOICE AGENTS CONDUCT REACTIVATION CALLS */}
              <section id="how-agents-conduct-reactivation-calls" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS CONDUCT REACTIVATION CALLS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Here is how AI calling for customer reactivation works from start to finish:
                  </p>
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Segment the inactive customers.</strong> Use CRM or billing data to find customers by last activity date, value and history.
                    </li>
                    <li>
                      <strong>Check permissions and clean the list.</strong> Remove customers who opted out, are on do-not-call lists or have invalid numbers.
                    </li>
                    <li>
                      <strong>Build a personalised call flow.</strong> Prepare the opening, the questions, the offers and the responses for each outcome.
                    </li>
                    <li>
                      <strong>Place the calls at suitable times.</strong> The AI voice bot dials through automated calling software in permitted calling windows.
                    </li>
                    <li>
                      <strong>Open with identity and purpose.</strong> The agent says it is an automated assistant, names the business and gives a reason for calling.
                    </li>
                    <li>
                      <strong>Listen and ask why.</strong> It asks an open question about the customer&apos;s experience and what changed.
                    </li>
                    <li>
                      <strong>Respond with a relevant next step.</strong> This may be an offer, a booking, a renewal link or a call from a team member.
                    </li>
                    <li>
                      <strong>Route the outcome.</strong> Interested customers are booked or transferred, undecided customers are scheduled for a callback, and those who decline are recorded.
                    </li>
                    <li>
                      <strong>Write results to your systems.</strong> Responses, reasons and outcomes are saved in your CRM or customer engagement software.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This is how AI calls for inactive customers can run at scale while staying personal.
                  </p>
                </div>
              </section>

              {/* SECTION 5: PERSONALISED CUSTOMER WIN-BACK CONVERSATIONS */}
              <section id="personalised-win-back-conversations" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  PERSONALISED CUSTOMER WIN-BACK CONVERSATIONS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Personalisation is what separates a win-back call from a generic marketing call. Useful data includes the customer&apos;s name, last purchase or plan, time since last activity, preferred language, past issues and usual buying pattern.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    A good win-back conversation:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li><strong>Opens with relevance:</strong> It refers to the customer&apos;s actual history, not a generic script.</li>
                    <li><strong>Asks before it sells:</strong> It invites the customer to say what changed.</li>
                    <li><strong>Offers a choice:</strong> It presents one or two relevant options, not a long menu.</li>
                    <li><strong>Accepts a no:</strong> It thanks the customer and ends the call politely.</li>
                    <li><strong>Offers a person:</strong> The customer can always ask to speak to someone.</li>
                  </ul>

                  <div className="p-5 rounded-xl bg-white border border-card-border space-y-2.5 my-4">
                    <p className="text-xs uppercase font-bold tracking-wider text-light-grey">Illustrative Dialogue: Fitness Studio</p>
                    <p className="font-medium text-[15px] sm:text-base leading-relaxed text-primary-black">
                      <strong>AI:</strong> &quot;Hello, this is an automated assistant calling from FitCore. I noticed you have not visited since March. Is it okay if I ask what changed?&quot;
                    </p>
                    <p className="font-medium text-[15px] sm:text-base leading-relaxed text-dark-grey">
                      <strong>Customer:</strong> &quot;The evening batches did not suit my schedule.&quot;
                    </p>
                    <p className="font-medium text-[15px] sm:text-base leading-relaxed text-primary-black">
                      <strong>AI:</strong> &quot;Thank you for telling me. We now have early morning classes at 6 am. Would you like a free trial class this week?&quot;
                    </p>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The agent here listens to the reason and tailors the offer to it, instead of opening with a discount.
                  </p>
                </div>
              </section>

              {/* SECTION 6: UNDERSTANDING WHY CUSTOMERS BECAME INACTIVE */}
              <section id="understanding-why-customers-left" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  UNDERSTANDING WHY CUSTOMERS BECAME INACTIVE
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The most valuable output of a reactivation call is often the reason, not the sale. The AI voice agent asks an open question, interprets the answer and tags it, for example as price, service, competitor, no longer needed, timing or other. Over hundreds of calls, these tags show patterns, such as a rising number of customers leaving after a particular issue.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    To keep the data useful:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>Use a short, neutral question and let the customer answer freely.</li>
                    <li>Record the customer&apos;s words as well as the category.</li>
                    <li>Accept &quot;no particular reason&quot; without pressing.</li>
                    <li>Review samples of calls to check that the AI has tagged reasons correctly.</li>
                    <li>Share patterns with product, operations and support teams.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 7: CAPTURING RENEWED INTEREST AND CUSTOMER RESPONSES */}
              <section id="capturing-renewed-interest-and-responses" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CAPTURING RENEWED INTEREST AND CUSTOMER RESPONSES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Each call should end in a defined outcome so the follow-up is clear.
                  </p>

                  {/* Table 2: Reactivation Call Outcomes */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Customer response</th>
                          <th className="py-3.5 px-4 w-1/2 align-top">What the AI voice agent does</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/4 align-top">What is recorded</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Interested now</td>
                          <td className="py-3.5 px-4 align-top">Books the next step or transfers to a salesperson</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Reactivation interest, booking or lead</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Interested later</td>
                          <td className="py-3.5 px-4 align-top">Asks for a good time and schedules a callback</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Callback date and reason</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Has an unresolved issue</td>
                          <td className="py-3.5 px-4 align-top">Apologises, collects details and escalates to support</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Issue logged and assigned to a person</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Price or offer concern</td>
                          <td className="py-3.5 px-4 align-top">Shares an approved offer or passes to a team member</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Objection and offer discussed</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Not interested</td>
                          <td className="py-3.5 px-4 align-top">Thanks the customer and ends the call</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Reason given and status closed</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Asks not to be called again</td>
                          <td className="py-3.5 px-4 align-top">Confirms and stops further calls</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Opt-out, number suppressed</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">No answer</td>
                          <td className="py-3.5 px-4 align-top">Retries within the campaign limit</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Attempt count and outcome</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These structured outcomes make AI customer re-engagement measurable and keep follow-up consistent.
                  </p>
                </div>
              </section>

              {/* SECTION 8: HOW TO CREATE CUSTOMER WIN-BACK CAMPAIGNS USING AI */}
              <section id="how-to-create-win-back-campaigns" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CREATE CUSTOMER WIN-BACK CAMPAIGNS USING AI
                </h2>
                <div className="space-y-4">
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Set a clear goal.</strong> For example, bring back lapsed subscribers or rebook overdue patients.
                    </li>
                    <li>
                      <strong>Segment your customers.</strong> Group by inactivity period, value and reason for leaving, if known.
                    </li>
                    <li>
                      <strong>Choose the offer carefully.</strong> Match the offer to the segment, and consider whether a discount is needed at all.
                    </li>
                    <li>
                      <strong>Write a short, natural script</strong> that includes the opening, a reason question and the next steps.
                    </li>
                    <li>
                      <strong>Set campaign rules.</strong> Define calling windows, retry limits, frequency caps and language.
                    </li>
                    <li>
                      <strong>Define handoff rules.</strong> Decide when calls go to a salesperson or support team.
                    </li>
                    <li>
                      <strong>Run a small pilot</strong> on one segment and listen to the calls.
                    </li>
                    <li>
                      <strong>Add follow-up channels.</strong> A text or message with details can support the call.
                    </li>
                    <li>
                      <strong>Measure against a control group,</strong> then refine and expand.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI voice agents sit beside, not instead of, your customer retention software and customer engagement software. Those tools hold the data and trigger campaigns, while the voice agent adds the conversation.
                  </p>
                </div>
              </section>

              {/* SECTION 9: BENEFITS OF AUTOMATED CUSTOMER REACTIVATION CALLS */}
              <section id="benefits-of-automated-reactivation-calls" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF AUTOMATED CUSTOMER REACTIVATION CALLS
                </h2>
                <div className="space-y-4">
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Reach at scale:</strong> Every inactive customer in a segment can be contacted, not only the ones staff have time for.
                    </li>
                    <li>
                      <strong>Consistent, personalised outreach:</strong> The agent uses each customer&apos;s history in the same structured way.
                    </li>
                    <li>
                      <strong>Insight into why customers left:</strong> Reasons are captured and tagged.
                    </li>
                    <li>
                      <strong>Less manual calling:</strong> Staff time goes to interested customers and complex cases.
                    </li>
                    <li>
                      <strong>Clear outcomes:</strong> Each call ends in a recorded result and next step.
                    </li>
                    <li>
                      <strong>Flexible timing and language:</strong> Calls can run at suitable times and in the customer&apos;s preferred language.
                    </li>
                    <li>
                      <strong>Lower cost per contact</strong> than manual calling for routine conversations.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 10: MEASURING REACTIVATION AND CAMPAIGN OUTCOMES */}
              <section id="measuring-reactivation-outcomes" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  MEASURING REACTIVATION AND CAMPAIGN OUTCOMES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Track both call performance and business results:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li><strong>Connect rate:</strong> share of calls answered by a person.</li>
                    <li><strong>Conversation completion rate:</strong> share of answered calls where the conversation was finished.</li>
                    <li><strong>Response mix:</strong> interested now, interested later, issue raised, not interested, opt-out.</li>
                    <li><strong>Reactivation rate:</strong> share of contacted customers who purchase, renew or rebook within a set window.</li>
                    <li><strong>Revenue per reactivated customer.</strong></li>
                    <li><strong>Retention after reactivation:</strong> how many are still active after 60 to 90 days.</li>
                    <li><strong>Reasons for inactivity:</strong> distribution by category.</li>
                    <li><strong>Opt-out and complaint rate.</strong></li>
                    <li><strong>Cost per reactivated customer.</strong></li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Use a control group, which is a similar set of inactive customers who are not called. Some customers would have returned anyway, and the control group shows how much extra return the calls actually produced.
                  </p>
                </div>
              </section>

              {/* SECTION 11: LIMITATIONS AND GOOD PRACTICE */}
              <section id="limitations-and-good-practice" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  LIMITATIONS AND GOOD PRACTICE
                </h2>
                <div className="space-y-4">
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Rules on calling:</strong> Win-back calls with an offer are likely to be treated as promotional calls. In India, that brings TRAI&apos;s rules on consent, Do Not Disturb preferences and number series, plus the Digital Personal Data Protection Act, 2023. Confirm what applies to your campaign with your telecom provider and legal advisor.
                    </li>
                    <li>
                      <strong>Respect opt-outs and limit frequency:</strong> Repeated calls to people who are not interested damage the brand.
                    </li>
                    <li>
                      <strong>Review customers who left after a serious complaint:</strong> Route them to a person first.
                    </li>
                    <li>
                      <strong>Be transparent:</strong> The agent should say it is an automated assistant and make it easy to reach a person.
                    </li>
                    <li>
                      <strong>Keep data accurate:</strong> Wrong numbers, outdated records and customers who have moved waste calls and annoy people.
                    </li>
                    <li>
                      <strong>Do not overpromise:</strong> Offers must be approved, accurate and honoured.
                    </li>
                    <li>
                      <strong>Take extra care in sensitive sectors,</strong> such as healthcare and financial services, and avoid sharing personal details on voicemail.
                    </li>
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
                    AI customer reactivation lets businesses reach customers who have gone quiet, learn why they left and offer a relevant reason to return. It works best when the segments are well defined, the conversation is personal and short, the next steps are clear, and people are available for complex or sensitive cases. Measure reactivation against a control group, listen to the reasons customers give, and use them to improve the business as well as the campaign.
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
        <BlogNavigation currentSlug="ai-customer-reactivation-voice-agents" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: AI Customer Reactivation" />
      </div>

      <Footer />
    </div>
  );
}
