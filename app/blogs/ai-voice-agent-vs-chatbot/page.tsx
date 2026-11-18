"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-voice-agent", label: "What Is an AI Voice Agent?" },
  { id: "what-is-chatbot", label: "What Is an AI Chatbot?" },
  { id: "key-differences", label: "AI Voice Agents vs Chatbots: Key Differences" },
  { id: "which-is-better", label: "AI Voice Agent vs Chatbot for Business: Which Is Better?" },
  { id: "understanding-technologies", label: "Voice AI vs Chatbot: Understanding the Different Technologies" },
  { id: "customer-experience", label: "AI Voice Agent vs Text Chatbot: Which Offers a Better Customer Experience?" },
  { id: "cost-considerations", label: "AI Voice Agent vs Chatbot Cost: What Should Businesses Consider?" },
  { id: "integration", label: "AI Voice Agent and Chatbot Integration: Can Businesses Use Both?" },
  { id: "when-to-use", label: "When to Use Voice AI vs Chatbot?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is the difference between an AI voice agent and a chatbot?",
    a: "An AI voice agent communicates through spoken conversations, while a chatbot primarily communicates through written messages on websites, apps or messaging platforms.",
  },
  {
    q: "2. Is an AI voice agent better than an AI chatbot?",
    a: "Neither is universally better. Voice agents are suitable for phone conversations and outbound calling, while chatbots are useful for website enquiries and text-based support.",
  },
  {
    q: "3. Can an AI voice agent and chatbot work together?",
    a: "Yes. Businesses can integrate both systems through APIs and connected platforms to support customers across voice and text channels.",
  },
  {
    q: "4. Is an AI voice agent more expensive than a chatbot?",
    a: "It depends on usage and platform pricing. Voice agents may involve telephony and audio-processing charges, while chatbots may have subscription and message-processing costs.",
  },
  {
    q: "5. What is an AI chatbot to voice agent handoff?",
    a: "It is a workflow in which a customer moves from a text-based chatbot conversation to an AI voice agent, with relevant customer details and conversation context shared where the integration supports it.",
  },
];

export default function AIVoiceAgentVsChatbotPage() {
  const [activeSection, setActiveSection] = useState("what-is-voice-agent");
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
    const activeEl = document.getElementById(`toc-item-${activeSection}`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1E1E1E]">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-36">
        {/* Article Header Container */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-12">
          {/* Back link */}
          <div className="mb-3 sm:mb-3.5 sm:mb-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#1E1E1E] hover:text-black transition-colors group"
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[802px]">
              <h1
                className="font-normal uppercase text-[#0D0D0D] text-[32px] sm:text-[46px] lg:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                AI VOICE AGENT VS CHATBOT:
                <br className="hidden sm:inline" /> A BUSINESS USE-CASE GUIDE
              </h1>
              <p
                className="font-medium text-[#1E1E1E] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[640px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Businesses use AI-powered communication tools to answer customer questions, manage enquiries and provide support.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1E1E1E] pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-[#1E1E1E]"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    17th November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    5 min read
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
                    className="inline-flex items-center gap-2 bg-[#1E1E1E] text-white hover:bg-black px-4 py-2 rounded-[8px] text-sm font-semibold transition-all shadow-xs group cursor-pointer whitespace-nowrap"
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
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515] min-h-[160px]">
            <Image
              src="/AI Voice Agent vs Chatbot_ A Business Use-Case Guide.png"
              alt="AI Voice Agent vs Chatbot: A Business Use-Case Guide"
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
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-[#1E1E1E] cursor-pointer"
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
                            ? "font-bold text-[#1E1E1E]"
                            : "text-[#535353] hover:text-[#1E1E1E]"
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
                  className="flex items-center gap-2 text-left font-bold text-[18px] leading-[1.4] text-[#1E1E1E] hover:opacity-80 transition-opacity cursor-pointer mb-4"
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
                              ? "font-bold text-[#1E1E1E]"
                              : "text-[#535353] hover:text-[#1E1E1E]"
                          }`}
                        >
                          <span
                            className={`w-1 h-3 rounded-full mt-1 transition-all shrink-0 ${
                              isActive
                                ? "bg-[#1E1E1E]"
                                : "bg-transparent group-hover:bg-[#E5E5E5]"
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

            {/* Right Column: Article Content */}
            <article
              ref={articleRef}
              className="lg:col-span-9 max-w-[820px] font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.6]"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-4 mb-12">
                <p>
                  Businesses use AI-powered communication tools to answer customer questions, manage enquiries and provide support. Two popular options are AI voice agents and chatbots. Both can automate customer interactions, but they communicate through different channels and serve different business needs.
                </p>
                <p>
                  When comparing an <strong>AI voice agent vs chatbot</strong>, the main difference is how customers interact with them. An AI voice agent communicates through spoken conversations, usually over a phone call, while a chatbot typically interacts through text on websites, apps or messaging platforms.
                </p>
                <p>
                  So, which option is better for business? The answer depends on your customers, communication requirements, budget and the type of tasks you want to automate.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AN AI VOICE AGENT */}
              <section id="what-is-voice-agent" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AN AI VOICE AGENT?
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI voice agent is a software system that communicates with customers using spoken language. It listens to questions, understands customer requirements and generates spoken responses.
                  </p>
                  <p>
                    Depending on its capabilities, a voice AI system may use speech recognition, language models and voice-generation technology to manage conversations.
                  </p>
                  <p>
                    For example, a customer may call an education company and ask about course fees. The AI voice agent can understand the question, use configured business information and provide a relevant answer.
                  </p>
                  <p>
                    AI voice agents are commonly used for customer enquiries, lead qualification, appointment reminders, outbound follow-ups and customer support.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHAT IS AN AI CHATBOT */}
              <section id="what-is-chatbot" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AN AI CHATBOT?
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI chatbot is a software application that communicates with users through text-based conversations. It can appear on websites, mobile applications and messaging platforms.
                  </p>
                  <p>
                    For example, a website visitor may ask, &ldquo;What are your business hours?&rdquo; The chatbot can provide the answer without requiring the visitor to call the company.
                  </p>
                  <p>
                    An AI chatbot can answer frequently asked questions, collect customer details, recommend products, guide users through processes and support basic service requests.
                  </p>
                  <p>
                    Unlike a traditional rule-based chatbot, an AI chatbot can use natural language processing and language models to understand different ways of asking questions.
                  </p>
                </div>
              </section>

              {/* SECTION 3: KEY DIFFERENCES TABLE */}
              <section id="key-differences" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENTS VS CHATBOTS: KEY DIFFERENCES
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-xs sm:text-sm uppercase tracking-wider font-bold text-[#1E1E1E]">
                        <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Comparison Factor</th>
                        <th className="py-3.5 px-4 w-3/8 align-top">AI Voice Agent</th>
                        <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">AI Chatbot</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-[#1E1E1E]">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Communication</td>
                        <td className="py-3.5 px-4 align-top">Spoken conversations</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Text conversations</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer Input</td>
                        <td className="py-3.5 px-4 align-top">Voice</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Typed messages</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Response</td>
                        <td className="py-3.5 px-4 align-top">Generated speech</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Written messages</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Main Channel</td>
                        <td className="py-3.5 px-4 align-top">Phone calls and supported voice interfaces</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Websites, apps and messaging platforms</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer Experience</td>
                        <td className="py-3.5 px-4 align-top">Conversational and hands-free</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Convenient and text-based</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Best For</td>
                        <td className="py-3.5 px-4 align-top">Calling, follow-ups and voice support</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">FAQs, enquiries and online assistance</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Availability</td>
                        <td className="py-3.5 px-4 align-top">Depends on calling and platform setup</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Can offer continuous automated chat access</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">User Preference</td>
                        <td className="py-3.5 px-4 align-top">Customers comfortable speaking</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Customers who prefer typing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Both solutions can use AI to understand customer intent and provide relevant answers. Their main difference is the communication channel.
                </p>
              </section>

              {/* SECTION 4: WHICH IS BETTER */}
              <section id="which-is-better" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT VS CHATBOT FOR BUSINESS: WHICH IS BETTER?
                </h2>
                <div className="space-y-4">
                  <p>
                    The right option depends on how your business communicates with customers.
                  </p>

                  <div className="pt-2">
                    <p className="font-bold text-[#1E1E1E] mb-2">An AI voice agent may be better when:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Businesses need to make outbound calls for lead qualification and follow-ups.</li>
                      <li>Customers prefer speaking instead of typing.</li>
                      <li>Conversations require several questions and spoken responses.</li>
                      <li>Businesses need automated appointment or payment reminder calls.</li>
                      <li>Phone enquiries form a major part of customer communication.</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="font-bold text-[#1E1E1E] mb-2">An AI chatbot may be better when:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Customers visit a website and need quick answers.</li>
                      <li>Businesses receive repetitive text-based enquiries.</li>
                      <li>Customers prefer messaging rather than phone calls.</li>
                      <li>Users need to share links, documents or written information.</li>
                      <li>Businesses want to collect information through website forms or chat.</li>
                    </ul>
                  </div>

                  <p className="pt-3">
                    For example, a university can use a chatbot to answer questions on its admission website and an AI voice agent to contact students who have submitted enquiries.
                  </p>
                </div>
              </section>

              {/* SECTION 5: UNDERSTANDING DIFFERENT TECHNOLOGIES */}
              <section id="understanding-technologies" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  VOICE AI VS CHATBOT: UNDERSTANDING THE DIFFERENT TECHNOLOGIES
                </h2>
                <div className="space-y-4">
                  <p>
                    The terms AI voice agent, voicebot, chatbot and voice assistant are sometimes used interchangeably, but they do not always describe the same experience.
                  </p>
                  <ul className="space-y-2.5 pl-5 list-disc text-[#1E1E1E]">
                    <li>
                      <strong>Voice AI:</strong> Technology that enables computers to understand and generate spoken communication.
                    </li>
                    <li>
                      <strong>Voice Bot:</strong> A software application that interacts with users through voice, often using predefined or AI-powered conversation flows.
                    </li>
                    <li>
                      <strong>Voice Chatbot:</strong> A conversational system that uses spoken input and audio responses instead of text.
                    </li>
                    <li>
                      <strong>AI Chatbot:</strong> A text-based conversational system that understands questions and generates written answers.
                    </li>
                    <li>
                      <strong>Voice Assistant:</strong> A voice-enabled assistant designed to respond to spoken commands or requests.
                    </li>
                  </ul>
                  <p className="pt-2">
                    A voice assistant and chatbot may share similar AI technology, but their interaction methods are different. A voice assistant communicates through speech, while a traditional chatbot primarily communicates through text.
                  </p>
                  <p>
                    The exact terminology varies between providers, so businesses should compare actual features rather than product names.
                  </p>
                </div>
              </section>

              {/* SECTION 6: CUSTOMER EXPERIENCE */}
              <section id="customer-experience" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT VS TEXT CHATBOT: WHICH OFFERS A BETTER CUSTOMER EXPERIENCE?
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI voice agent can make communication easier for customers who prefer speaking, are unable to type conveniently or need to discuss their requirements through a phone conversation.
                  </p>
                  <p>
                    A text chatbot provides a different advantage. Customers can read responses at their own pace, revisit earlier messages and share written details.
                  </p>
                  <p>
                    For example, a customer asking about a complicated service may prefer speaking with an AI voice agent. Someone comparing product specifications may find a text chatbot more convenient.
                  </p>
                  <p>
                    Neither option automatically provides a better experience. The best choice depends on the customer&apos;s situation and communication preference.
                  </p>
                </div>
              </section>

              {/* SECTION 7: COST CONSIDERATIONS */}
              <section id="cost-considerations" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT VS CHATBOT COST: WHAT SHOULD BUSINESSES CONSIDER?
                </h2>
                <div className="space-y-4">
                  <p>
                    The cost of an AI voice agent vs chatbot depends on usage, platform pricing, integrations and the complexity of the required workflows.
                  </p>

                  <div className="pt-2">
                    <p className="font-bold text-[#1E1E1E] mb-2">AI voice agent costs may include:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Phone numbers and telephony charges.</li>
                      <li>Speech recognition and voice generation.</li>
                      <li>AI model usage and call duration.</li>
                      <li>CRM and business system integrations.</li>
                      <li>Setup, monitoring and maintenance.</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="font-bold text-[#1E1E1E] mb-2">AI chatbot costs may include:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Chatbot platform or software subscription.</li>
                      <li>AI model usage and message volume.</li>
                      <li>Website or messaging platform integrations.</li>
                      <li>Knowledge base setup and maintenance.</li>
                      <li>Development and ongoing support.</li>
                    </ul>
                  </div>

                  <p className="pt-3">
                    Voice AI may involve additional telephony and audio-processing expenses, while chatbots may have costs related to messages, AI usage or platform subscriptions.
                  </p>
                  <p>
                    Businesses should compare the total monthly operating cost against successful customer interactions, completed tasks and the amount of manual work saved. The cheapest solution is not necessarily the most cost-effective.
                  </p>
                </div>
              </section>

              {/* SECTION 8: INTEGRATION / CAN BUSINESSES USE BOTH */}
              <section id="integration" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT AND CHATBOT INTEGRATION: CAN BUSINESSES USE BOTH?
                </h2>
                <div className="space-y-4">
                  <p>
                    Yes. Businesses can combine an AI voice agent and chatbot to communicate with customers across different channels.
                  </p>
                  <p className="font-semibold text-[#1E1E1E]">For example:</p>

                  <ol className="space-y-2.5 pl-6 list-decimal text-[#1E1E1E]">
                    <li>A visitor asks questions through the company&apos;s website chatbot.</li>
                    <li>The chatbot collects the customer&apos;s name, contact details and requirements.</li>
                    <li>The business identifies that the customer needs a detailed conversation.</li>
                    <li>An AI voice agent contacts the customer, where the customer has provided the appropriate consent and the workflow supports it.</li>
                    <li>The conversation details can be recorded in a connected CRM system.</li>
                  </ol>

                  <p className="pt-2">
                    This is an example of AI chatbot to voice agent handoff. It allows customers to move from text-based communication to a phone conversation without necessarily repeating all their information.
                  </p>
                  <p>
                    The integration requires suitable APIs, shared customer records and conversation-context management. Not every chatbot or voice AI platform supports this workflow automatically.
                  </p>
                </div>
              </section>

              {/* SECTION 9: WHEN TO USE TABLE */}
              <section id="when-to-use" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHEN TO USE VOICE AI VS CHATBOT?
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-xs sm:text-sm uppercase tracking-wider font-bold text-[#1E1E1E]">
                        <th className="py-3.5 pr-4 pl-0 w-1/2 align-top">Business Requirement</th>
                        <th className="py-3.5 pl-4 pr-0 w-1/2 align-top">Recommended Solution</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-[#1E1E1E]">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Website FAQs</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI Chatbot</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Outbound lead follow-ups</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI Voice Agent</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment reminders</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI Voice Agent</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Online product enquiries</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI Chatbot</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Spoken customer support</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI Voice Agent</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Written customer support</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI Chatbot</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Multi-channel customer communication</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Both integrated</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  For businesses handling high volumes of both phone and online enquiries, combining the two technologies may provide more flexibility than relying on a single channel.
                </p>
              </section>

              {/* SECTION 10: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONCLUSION
                </h2>
                <div className="space-y-4">
                  <p>
                    The choice between an AI voice agent vs chatbot depends on how customers prefer to communicate and what your business wants to automate.
                  </p>
                  <p>
                    AI voice agents are useful for phone-based conversations, outbound follow-ups, lead qualification and spoken customer support. Chatbots are effective for website enquiries, written assistance and messaging-based communication.
                  </p>
                  <p>
                    Businesses do not necessarily need to choose only one. By integrating both solutions, they can support customers through text and voice while maintaining a more connected communication experience.
                  </p>
                </div>
              </section>

              {/* SECTION 11: FAQS */}
              <section id="faqs" className="scroll-mt-32 mb-16">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={faq.q}
                      className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(openFaq === idx ? null : idx)
                        }
                        aria-expanded={openFaq === idx}
                        aria-controls={`faq-answer-${idx}`}
                        className="w-full py-4 px-5 text-left font-bold text-sm sm:text-base text-[#1E1E1E] flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <span className="text-sm font-mono text-[#808285]">
                          {openFaq === idx ? "—" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#535353] leading-relaxed border-t border-[#FAF9F5]"
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
        <BlogNavigation currentSlug="ai-voice-agent-vs-chatbot" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
