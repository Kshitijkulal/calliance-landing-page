"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-outbound-calling-campaign", label: "What Is an AI Outbound Calling Campaign?" },
  { id: "why-automate-outbound-calling", label: "Why Should Businesses Automate Outbound Calling?" },
  { id: "how-to-set-up-campaign", label: "How to Set Up an Outbound Calling Campaign with AI" },
  { id: "best-practices", label: "Best Practices for Outbound Calling Campaigns" },
  { id: "measure-performance", label: "How to Measure AI Calling Campaign Performance" },
  { id: "optimise-campaigns", label: "How to Optimise AI Calling Campaigns" },
  { id: "how-callience-helps", label: "How Callience Helps with AI Outbound Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How do I set up an outbound calling campaign with AI?",
    a: "To set up an AI outbound calling campaign, start by defining clear campaign goals, preparing a segmented contact list, crafting conversational scripts, configuring your AI voice agent, setting scheduled calling rules, and tracking key campaign analytics.",
  },
  {
    q: "2. What are the main benefits of automated outbound calling campaigns?",
    a: "Automated outbound calling campaigns save employee hours, accelerate lead outreach, maintain consistent follow-up rhythms, automatically record outcomes in CRM software, and significantly lower cost per qualified lead.",
  },
  {
    q: "3. How do you measure outbound calling campaign performance?",
    a: "Campaign performance is evaluated using metrics such as call connection rates, completion rates, qualified lead volume, callback requests, customer conversion rates, and total cost per qualified prospect.",
  },
  {
    q: "4. How should businesses prepare contact lists for AI calling campaigns?",
    a: "Contact lists should be segmented by customer interest, past enquiry history, and language preference. Numbers should be verified, and all local telecom communication and consent rules must be strictly observed.",
  },
  {
    q: "5. Can an AI voice agent transfer calls to live human sales representatives?",
    a: "Yes. When a prospect expresses high buying intent or requires detailed assistance, the AI agent can seamlessly transfer the call to a human team member with full conversation context.",
  },
];

export default function SetUpOutboundCallingCampaignPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-outbound-calling-campaign");
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
                <span className="block">HOW TO SET UP AN OUTBOUND</span>
                <span className="block sm:whitespace-nowrap">CALLING CAMPAIGN WITH AI</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[660px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Learn how to set up an outbound calling campaign with AI, automate follow-ups, manage leads, and track campaign performance.
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
              src="/How to Set Up an Outbound Calling Campaign with AI.png"
              alt="How to Set Up an Outbound Calling Campaign with AI"
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
                  Managing outbound calls can be challenging for businesses, especially when sales teams need to contact large numbers of potential customers, follow up on enquiries, and track responses. Without a proper process, businesses may miss opportunities, make repeated calls, or struggle to identify interested customers.
                </p>
                <p>
                  An AI-powered outbound calling campaign helps businesses automate these activities through AI voice agents. From contacting new leads to sending appointment reminders and following up with potential customers, AI calling can make communication more organized. With the right campaign strategy, businesses can save time, maintain consistent communication, and measure their calling results more effectively.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AN AI OUTBOUND CALLING CAMPAIGN? */}
              <section id="what-is-ai-outbound-calling-campaign" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AN AI OUTBOUND CALLING CAMPAIGN?
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI outbound calling campaign is a planned process in which AI voice agents automatically contact customers for specific business purposes. Instead of employees making every call manually, businesses can configure AI agents with calling scripts, customer information, and predefined conversation workflows.
                  </p>
                  <p>
                    For example, a coaching institute can use an AI calling campaign to contact students who have submitted admission enquiries. The AI agent can ask about their course preferences, answer basic questions, and record whether they want to speak with an admission counsellor.
                  </p>
                  <p>
                    Outbound calling campaigns can support lead qualification, sales follow-ups, appointment reminders, payment notifications, customer re-engagement, and other routine communication activities.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY SHOULD BUSINESSES AUTOMATE OUTBOUND CALLING? */}
              <section id="why-automate-outbound-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY SHOULD BUSINESSES AUTOMATE OUTBOUND CALLING?
                </h2>
                <div className="space-y-4">
                  <p>
                    Manual calling requires time, employee availability, and proper follow-up management. As the number of enquiries increases, maintaining consistent communication becomes difficult.
                  </p>
                  <p>
                    AI calling can help businesses:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Scale outbound sales automation:</strong> Automate repetitive calls and reduce manual calling work across your sales funnel.
                    </li>
                    <li>
                      <strong>Accelerate AI sales outreach:</strong> Contact potential customers according to planned campaign schedules for faster speed-to-lead.
                    </li>
                    <li>
                      <strong>Power proactive AI lead generation:</strong> Record customer responses, qualify high-intent prospects, and schedule callbacks instantly.
                    </li>
                    <li>
                      <strong>Organize customer information:</strong> Store call outcomes and lead details in connected CRM systems.
                    </li>
                    <li>
                      <strong>Track performance:</strong> Monitor answered calls, qualified leads, and customer conversions.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 3: HOW TO SET UP AN OUTBOUND CALLING CAMPAIGN WITH AI */}
              <section id="how-to-set-up-campaign" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO SET UP AN OUTBOUND CALLING CAMPAIGN WITH AI
                </h2>
                <div className="space-y-6">
                  <p>
                    A successful campaign requires more than uploading phone numbers and starting automated calls. Understanding how to plan an effective AI outbound calling campaign helps businesses follow a structured approach to make their outreach relevant, natural, and effective.
                  </p>

                  {/* Step 1 */}
                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                      Step 1
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black">
                      Define Your Campaign Objective
                    </h3>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      Start by identifying what you want to achieve through your campaign. Every calling activity should have a clear purpose.
                    </p>
                    <p className="font-semibold text-primary-black text-sm sm:text-base pt-1">
                      Common objectives include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-dark-grey">
                      <li>Generating and qualifying new leads.</li>
                      <li>Following up on website enquiries.</li>
                      <li>Promoting products or services.</li>
                      <li>Confirming appointments.</li>
                      <li>Sending payment reminders.</li>
                      <li>Reconnecting with existing customers.</li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-grey pt-1">
                      For example, a real estate agency may create a campaign to contact people who have enquired about properties and identify buyers interested in scheduling site visits.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                      Step 2
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black">
                      Prepare Your Customer Contact List
                    </h3>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      A relevant contact list is important for successful automated calling campaign setup. Businesses should organize customer information before launching calls.
                    </p>
                    <p className="font-semibold text-primary-black text-sm sm:text-base pt-1">
                      Useful details may include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-dark-grey">
                      <li>Customer name and phone number.</li>
                      <li>Previous enquiry or purchase details.</li>
                      <li>Product or service interest.</li>
                      <li>Preferred language.</li>
                      <li>Previous call outcomes.</li>
                      <li>Follow-up requirements.</li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-grey pt-1">
                      Understanding how to prepare contact lists for AI calling campaigns helps businesses segment customers and create more relevant conversations. Contact information should be collected and used with appropriate permissions and in accordance with applicable communication requirements.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                      Step 3
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black">
                      Create an Effective AI Calling Script
                    </h3>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      The calling script determines how the AI voice agent introduces the business, explains the purpose of the call, and responds to customer questions.
                    </p>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      A good script should include a clear introduction, relevant questions, simple responses, and appropriate next steps.
                    </p>
                    <div className="bg-primary-beige p-3.5 rounded-lg border border-card-border text-sm italic text-primary-black my-2">
                      &quot;Hello, this is ABC Coaching Centre. You recently submitted an enquiry about our courses. Are you interested in receiving more information about admission options?&quot;
                    </div>
                    <p className="text-sm sm:text-base text-dark-grey">
                      Keep conversations natural and avoid unnecessary questions. The AI agent should also recognize when a customer needs human assistance.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                      Step 4
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black">
                      Configure the AI Voice Agent
                    </h3>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      The next step in AI outbound calling campaign setup is configuring the AI voice agent according to the campaign objective.
                    </p>
                    <p className="font-semibold text-primary-black text-sm sm:text-base pt-1">
                      Businesses should define:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-dark-grey">
                      <li>Calling scripts and conversation flows.</li>
                      <li>Supported languages and voice preferences.</li>
                      <li>Customer questions and expected responses.</li>
                      <li>Rules for interested and unanswered leads.</li>
                      <li>Callback scheduling.</li>
                      <li>Human call transfer options.</li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-grey pt-1">
                      The agent should be tested with different responses before the campaign is launched.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                      Step 5
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black">
                      Set Calling Schedules and Follow-Up Rules
                    </h3>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      Businesses should decide when calls should be initiated and how follow-ups should be managed.
                    </p>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      For example, an education institute may contact a new admission enquiry first and schedule another call when the student requests additional information.
                    </p>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      Businesses should also define how to handle unanswered calls, callback requests, and customers who do not want further communication. This makes outbound calling campaign management more organized and prevents unnecessary repeated calls.
                    </p>
                  </div>

                  {/* Step 6 */}
                  <div className="bg-white border border-card-border rounded-xl p-5 sm:p-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-light-grey">
                      Step 6
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black">
                      Launch and Monitor the Campaign
                    </h3>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      Once the scripts, contact lists, and calling workflows are ready, businesses can launch their campaigns.
                    </p>
                    <p className="text-sm sm:text-base text-dark-grey leading-relaxed">
                      During the campaign, they should monitor connection rates, completed conversations, qualified leads, and follow-up requirements. Regular monitoring helps identify issues early and improves overall AI calling campaign performance.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: BEST PRACTICES FOR OUTBOUND CALLING CAMPAIGNS */}
              <section id="best-practices" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BEST PRACTICES FOR OUTBOUND CALLING CAMPAIGNS
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses can improve their calling results by following a few practical guidelines:
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Segment Your Contact Lists:</strong> Group customers according to their interests, previous enquiries, or service requirements.
                    </li>
                    <li>
                      <strong>Personalize Conversations:</strong> Use relevant customer information instead of delivering the same generic message to everyone.
                    </li>
                    <li>
                      <strong>Keep Scripts Simple:</strong> Use clear language and short conversations to make customer interactions comfortable.
                    </li>
                    <li>
                      <strong>Select Suitable Calling Times:</strong> Schedule campaigns around appropriate customer availability and respect calling preferences.
                    </li>
                    <li>
                      <strong>Provide Human Assistance:</strong> Allow customers to speak with employees when conversations require detailed explanations or personal attention.
                    </li>
                    <li>
                      <strong>Review Campaign Results:</strong> Regularly check call outcomes and update scripts based on customer responses.
                    </li>
                  </ul>
                  <p className="pt-2">
                    Following these best practices for outbound calling campaigns helps businesses maintain consistent communication and manage customer enquiries more effectively.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HOW TO MEASURE AI CALLING CAMPAIGN PERFORMANCE */}
              <section id="measure-performance" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO MEASURE AI CALLING CAMPAIGN PERFORMANCE
                </h2>
                <div className="space-y-4">
                  <p>
                    Campaign monitoring helps businesses understand whether their calling activities are producing meaningful results. Outbound campaign analytics can provide insights into customer responses, campaign progress, and sales opportunities.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/2 align-top">Performance Metric</th>
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
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Call Completion Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of connected calls completed</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Qualified Leads</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Number of interested potential customers</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Callback Requests</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Customers requesting another call</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Conversion Rate</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Percentage of leads becoming customers</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Cost Per Qualified Lead</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Total campaign cost divided by qualified leads</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Businesses can also use call center analytics and call center reporting to review campaign outcomes and identify areas that need improvement.
                  </p>
                  <p>
                    To understand how to measure outbound calling campaign performance, businesses should compare these metrics over time rather than focusing only on the total number of calls made.
                  </p>
                </div>
              </section>

              {/* SECTION 6: HOW TO OPTIMISE AI CALLING CAMPAIGNS */}
              <section id="optimise-campaigns" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO OPTIMISE AI CALLING CAMPAIGNS
                </h2>
                <div className="space-y-4">
                  <p>
                    AI calling campaign optimization involves reviewing campaign results and making adjustments based on customer responses.
                  </p>
                  <p className="font-semibold text-primary-black">
                    Businesses can improve their campaigns by:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Updating scripts when customers frequently misunderstand questions.</li>
                    <li>Improving contact list quality and data hygiene.</li>
                    <li>Adjusting follow-up schedules based on customer peak response times.</li>
                    <li>Identifying the most responsive and high-converting customer segments.</li>
                    <li>Reviewing unsuccessful calls and callback requests to resolve drop-off points.</li>
                    <li>Connecting interested leads immediately with sales representatives.</li>
                  </ul>
                  <p className="pt-2">
                    Understanding how to optimise AI calling campaigns helps businesses improve their calling workflows and make better use of available resources. Continuous optimization based on accurate call insights helps maintain high engagement and conversion rates over time.
                  </p>
                  <p>
                    Campaign management software can also help organize contact lists, manage calling schedules, monitor campaign progress, and maintain customer records. Following these step-by-step setup procedures will minimize technical friction and increase team productivity.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW CALLIENCE HELPS BUSINESSES WITH AI OUTBOUND CALLING */}
              <section id="how-callience-helps" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE HELPS BUSINESSES WITH AI OUTBOUND CALLING
                </h2>
                <div className="space-y-4">
                  <p>
                    The <Link href="/#features" className="font-semibold underline hover:text-black transition-colors">Callience voice AI platform</Link> helps businesses automate outbound customer communication using AI-powered voice agents. Businesses can use these calling workflows for <Link href="/#use-cases" className="font-semibold underline hover:text-black transition-colors">lead qualification</Link>, admission enquiries, <Link href="/blogs/ai-calling-for-lead-follow-ups" className="font-semibold underline hover:text-black transition-colors">sales follow-ups</Link>, <Link href="/blogs/ai-calling-payment-reminders" className="font-semibold underline hover:text-black transition-colors">payment reminders</Link>, appointment reminders, and <Link href="/#use-cases" className="font-semibold underline hover:text-black transition-colors">customer re-engagement</Link>.
                  </p>
                  <p>
                    By using AI voice agents to handle repetitive calling activities, businesses can reduce manual calling work and maintain more consistent customer communication. This allows sales teams to focus on qualified leads, detailed discussions, and important customer interactions.
                  </p>
                </div>
              </section>

              {/* SECTION 8: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONCLUSION
                </h2>
                <div className="space-y-4">
                  <p>
                    Setting up an AI outbound calling campaign requires clear objectives, organized contact lists, effective calling scripts, and regular performance monitoring.
                  </p>
                  <p>
                    Whether a business wants to qualify leads, follow up on enquiries, send reminders, or reconnect with existing customers, AI voice agents can help automate repetitive communication activities.
                  </p>
                  <p>
                    By tracking call outcomes, reviewing customer responses, and improving campaign workflows, businesses can make their outbound calling activities more organized and productive.
                  </p>
                  <p>
                    In conclusion, taking a structured approach to your AI outbound calling campaign delivers consistent results and scalable business growth.
                  </p>
                  <p>
                    Explore Callience's high-speed <Link href="/#features" className="font-semibold underline hover:text-black transition-colors">auto dialer software and voice AI platform</Link>, read our comprehensive <Link href="/blogs/automated-outbound-calling-guide" className="font-semibold underline hover:text-black transition-colors">automated outbound calling guide</Link>, or review our flexible <Link href="/#pricing" className="font-semibold underline hover:text-black transition-colors">outbound campaign pricing</Link>.
                  </p>
                </div>
              </section>

              {/* SECTION 9: FAQS */}
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
        <BlogNavigation currentSlug="set-up-outbound-calling-campaign-with-ai" />

        {/* Contact Us Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
