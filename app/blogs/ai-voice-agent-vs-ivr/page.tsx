"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "difference", label: "What Is the Difference Between an AI Voice Agent and IVR?" },
  { id: "key-differences", label: "AI Voice Agent vs Traditional IVR: Key Differences" },
  { id: "customer-conversations", label: "AI Voicebot vs IVR: How Do They Handle Customer Conversations?" },
  { id: "customer-experience", label: "Voice AI vs IVR: Which Offers a Better Customer Experience?" },
  { id: "hybrid-systems", label: "Conversational AI vs IVR: Can Businesses Use Both?" },
  { id: "iva-vs-ivr", label: "IVA vs IVR: Are They the Same?" },
  { id: "cost-comparison", label: "AI Voice Agent vs IVR Cost: Which Is More Affordable?" },
  { id: "resolution-vs-containment", label: "AI Voice Agent Resolution Rate vs IVR Call Containment Rate" },
  { id: "when-to-use", label: "When to Use AI Voice Agent vs IVR" },
  { id: "when-to-replace", label: "When Should You Replace Traditional IVR?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. Is an AI voice agent better than traditional IVR?",
    a: "An AI voice agent is generally more flexible  for conversational enquiries, while traditional IVR is effective for simple menus and structured call routing. The better option depends on the business use case.",
  },
  {
    q: "2. Can an AI voice agent work with an existing IVR?",
    a: "Yes. Businesses can integrate AI voice agents into supported IVR workflows, retaining existing menus while adding conversational capabilities.",
  },
  {
    q: "3. When should a business replace IVR with an AI voice agent?",
    a: "Consider replacing selected IVR workflows when customers frequently struggle with menus or need more flexible conversations that predefined options cannot handle.",
  },
  {
    q: "4. Is an AI voice agent more expensive than IVR?",
    a: "Not necessarily in overall operating terms. Costs depend on telephony, software, AI usage, integrations, maintenance and the number of successfully resolved calls.",
  },
  {
    q: "5. What is the difference between AI voice agent resolution rate and IVR call containment rate?",
    a: "Resolution rate measures whether customer enquiries are successfully resolved. Containment rate measures how many calls remain within the IVR flow without moving elsewhere. A contained call is not automatically a resolved call.",
  },
];

export default function AIVoiceAgentVsIVRPage() {
  const [activeSection, setActiveSection] = useState("difference");
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
      const topOffset = 28; // Sit at the top of the screen without unnecessary gap

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

      <main className="flex-1 pt-28 md:pt-36">
        {/* Article Header Container (1270px x Hug) */}
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          {/* Back link above the header row with exact ~15px gap to title */}
          <div className="mb-3.5 sm:mb-4">
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

          {/* Header Row: Title on Left, Metadata Sidebar on Right (exact 182px gap, Title level-aligned with Date & Vertical Line) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[802px]">
              <h1
                className="font-normal uppercase text-[#0D0D0D] text-[38px] sm:text-[50px] lg:text-[64px] leading-[1.05] tracking-normal mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                AI VOICE AGENT VS IVR:
                <br className="hidden sm:inline" /> WHICH IS BETTER FOR BUSINESS?
              </h1>
              <p
                className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal max-w-[640px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Businesses use phone automation to handle customer enquiries, reduce repetitive calls and improve customer service.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar (197 x 192 Hug, vertical line starts level with Title) */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1E1E1E] pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-col items-start">
                {/* Text lines with exact 24px gap */}
                <div
                  className="flex flex-col gap-6 text-[#1E1E1E]"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    17th November
                  </p>
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    5 min read
                  </p>
                  <p className="font-medium text-base sm:text-[18px] leading-[1.4]">
                    Karanvir Singh
                  </p>
                </div>

                {/* Contact Us button with exact 27px gap, hugging content (not w-full) */}
                <div className="mt-[27px]">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-[#1E1E1E] text-white hover:bg-black px-4 py-2 rounded-[8px] text-sm font-semibold transition-all shadow-xs group cursor-pointer"
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
        <div className="w-full bg-white mb-12 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515]">
            <Image
              src="/AI Voice Agent vs IVR_ Which Is Better for Business_ (1).png"
              alt="AI Voice Agent vs IVR: Which Is Better for Business?"
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
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Left Column: Table of Contents */}
            <aside
              ref={asideRef}
              className="lg:col-span-3 relative"
              style={{ minHeight: "500px" }}
            >
              {/* Mobile TOC Accordion Header */}
              <div className="lg:hidden mb-8">
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
                        className={`block w-full text-left py-0.5 text-[14px] transition-colors leading-snug ${activeSection === item.id
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
                          className={`group flex items-start gap-2 w-full text-left transition-all py-0.5 cursor-pointer ${isActive
                            ? "font-bold text-[#1E1E1E]"
                            : "text-[#535353] hover:text-[#1E1E1E]"
                            }`}
                        >
                          <span
                            className={`w-1 h-3 rounded-full mt-1 transition-all shrink-0 ${isActive
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
                  Businesses use phone automation to handle customer enquiries, reduce repetitive calls and improve customer service. Two common options are traditional Interactive Voice Response (IVR) systems and AI voice agents. Both can automate phone conversations, but they differ in how they understand customers, respond to questions and manage interactions.
                </p>
                <p>
                  Choosing between an AI voice agent vs IVR depends on your business requirements, call volume, customer expectations and automation budget. Traditional IVR works well for structured menus and simple requests, while AI voice agents can manage more flexible, conversational interactions.
                </p>
                <p>
                  This guide compares their features, costs, benefits and limitations to help businesses decide which solution is more suitable.
                </p>
              </div>

              {/* SECTION 1: WHAT IS THE DIFFERENCE */}
              <section id="difference" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS THE DIFFERENCE BETWEEN AN AI VOICE AGENT AND IVR?
                </h2>
                <div className="space-y-4">
                  <p>
                    A traditional IVR system allows callers to navigate a phone menu using keypad inputs or, in some systems, basic voice commands.
                  </p>
                  <p className="font-semibold text-[#1E1E1E]">For example:</p>
                  <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-xl p-4 my-2 text-sm sm:text-base font-mono text-[#1E1E1E]">
                    &ldquo;Press 1 for Sales, press 2 for Support, or press 3 for Billing.&rdquo;
                  </div>
                  <p className="pt-2">
                    An AI voice agent uses artificial intelligence to understand spoken questions, interpret customer intent and generate relevant responses. Instead of following only fixed menu options, customers can explain what they need in their own words.
                  </p>
                  <p className="font-semibold text-[#1E1E1E]">For example:</p>
                  <div className="bg-[#FAF9F5] border border-[#E5E5E5] rounded-xl p-4 my-2 text-sm sm:text-base space-y-2">
                    <p>
                      <strong>Customer:</strong> &ldquo;I want to know the status of my payment.&rdquo;
                    </p>
                    <p>
                      <strong>AI Voice Agent:</strong> &ldquo;I can help with that. Could you provide your registered phone number?&rdquo;
                    </p>
                  </div>
                  <p className="pt-2">
                    The main difference is that traditional IVR primarily guides callers through predefined options, whereas an AI voice agent can understand and respond to more natural conversations.
                  </p>
                </div>
              </section>

              {/* SECTION 2: KEY DIFFERENCES TABLE */}
              <section id="key-differences" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT VS TRADITIONAL IVR: KEY DIFFERENCES
                </h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-xs sm:text-sm uppercase tracking-wider font-bold text-[#1E1E1E]">
                        <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Comparison Factor</th>
                        <th className="py-3.5 px-4 w-3/8 align-top">Traditional IVR</th>
                        <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">AI Voice Agent</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-[#1E1E1E]">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Interaction</td>
                        <td className="py-3.5 px-4 align-top">Menu-based navigation</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Conversational interaction</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Customer Input</td>
                        <td className="py-3.5 px-4 align-top">Keypad selection or supported voice commands</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Natural spoken questions</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Understanding</td>
                        <td className="py-3.5 px-4 align-top">Predefined options and rules</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI-based intent understanding</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Responses</td>
                        <td className="py-3.5 px-4 align-top">Recorded or configured prompts</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Dynamically generated responses</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Flexibility</td>
                        <td className="py-3.5 px-4 align-top">Best for structured requests</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Better suited to varied enquiries</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Personalisation</td>
                        <td className="py-3.5 px-4 align-top">Usually rule-based</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Can use customer and business context</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Information Access</td>
                        <td className="py-3.5 px-4 align-top">Depends on configured integrations</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Can retrieve business information through supported integrations</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Best For</td>
                        <td className="py-3.5 px-4 align-top">Simple routing and repetitive options</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Complex enquiries and conversational tasks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  The right choice depends on how customers interact with your business and how much flexibility your phone automation needs.
                </p>
              </section>

              {/* SECTION 3: HOW DO THEY HANDLE CONVERSATIONS */}
              <section id="customer-conversations" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICEBOT VS IVR: HOW DO THEY HANDLE CUSTOMER CONVERSATIONS?
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI voicebot and a traditional IVR system may both answer incoming calls, but their conversation capabilities are different.
                  </p>
                  <p>
                    A traditional IVR generally follows a predefined flow. Customers select an option, provide information and move through the configured menu.
                  </p>
                  <p>
                    An AI voice bot can understand different ways of expressing the same requirement. For example, customers might ask &ldquo;Where is my order?&rdquo;, &ldquo;Has my delivery arrived?&rdquo; or &ldquo;I need an update on my purchase.&rdquo; The AI can identify that these questions relate to order status.
                  </p>
                  <p>
                    This makes conversational AI useful when customers do not always follow predictable menu paths.
                  </p>
                </div>
              </section>

              {/* SECTION 4: CUSTOMER EXPERIENCE */}
              <section id="customer-experience" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  VOICE AI VS IVR: WHICH OFFERS A BETTER CUSTOMER EXPERIENCE?
                </h2>
                <div className="space-y-4">
                  <p>The customer experience depends on the type of interaction.</p>

                  <div className="pt-2">
                    <p className="font-bold text-[#1E1E1E] mb-2">Traditional IVR may be better when:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Customers need to select from a small number of clear options.</li>
                      <li>Calls involve simple and repetitive requests.</li>
                      <li>Businesses want predictable menu-based routing.</li>
                      <li>Customers prefer keypad selection for certain transactions.</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="font-bold text-[#1E1E1E] mb-2">AI voice agents may be better when:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Customers ask questions in their own words.</li>
                      <li>Enquiries require multiple conversational steps.</li>
                      <li>Customers need information from connected business systems.</li>
                      <li>Businesses want more flexible automated conversations.</li>
                    </ul>
                  </div>

                  <p className="pt-2">
                    However, AI responses must be accurate and properly configured. Poor business information, unclear instructions or unreliable integrations can create frustrating experiences.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HYBRID SYSTEMS */}
              <section id="hybrid-systems" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONVERSATIONAL AI VS IVR: CAN BUSINESSES USE BOTH?
                </h2>
                <div className="space-y-4">
                  <p>
                    Yes. Businesses do not always have to choose between the two technologies.
                  </p>
                  <p>
                    An AI and IVR hybrid system combines traditional phone menus with conversational AI. Customers may first select a department through an IVR menu and then interact with an AI agent for their specific enquiry.
                  </p>
                  <p>
                    For example, a banking customer might select account services and then ask an AI agent about a transaction.
                  </p>
                  <p>
                    An AI voice agent with existing IVR can also be introduced gradually, allowing businesses to retain familiar menu options while adding conversational automation to selected call flows.
                  </p>
                  <p>
                    This approach can reduce the need to replace an entire phone system at once.
                  </p>
                </div>
              </section>

              {/* SECTION 6: IVA VS IVR */}
              <section id="iva-vs-ivr" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  IVA VS IVR: ARE THEY THE SAME?
                </h2>
                <div className="space-y-4">
                  <p>
                    IVR stands for Interactive Voice Response, while IVA generally stands for Intelligent Virtual Agent.
                  </p>
                  <p>
                    An IVR system manages caller interactions through configured menus, prompts and workflows. An IVA is designed to provide more intelligent interactions, often using conversational AI to understand requests and manage multi-step conversations.
                  </p>
                  <p>
                    The terms can overlap because modern IVR platforms may include AI-powered virtual agents. Their exact capabilities depend on the provider and implementation.
                  </p>
                </div>
              </section>

              {/* SECTION 7: COST COMPARISON */}
              <section id="cost-comparison" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT VS IVR COST: WHICH IS MORE AFFORDABLE?
                </h2>
                <div className="space-y-4">
                  <p>
                    The AI voice agent vs IVR cost depends on how the system is built, the number of calls it handles and the services involved.
                  </p>

                  <div className="pt-2">
                    <p className="font-bold text-[#1E1E1E] mb-2">Traditional IVR costs may include:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Telephony and call charges.</li>
                      <li>IVR platform or software fees.</li>
                      <li>Initial setup and menu configuration.</li>
                      <li>Maintenance and system integrations.</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="font-bold text-[#1E1E1E] mb-2">AI voice agent costs may include:</p>
                    <ul className="space-y-2 pl-5 list-disc text-[#1E1E1E]">
                      <li>Telephony charges.</li>
                      <li>Speech recognition and voice generation.</li>
                      <li>AI model usage.</li>
                      <li>Integration with CRM and business applications.</li>
                      <li>Development, monitoring and ongoing maintenance.</li>
                    </ul>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] mb-3">
                      IVR vs AI Voice Agent Cost Per Call
                    </h3>
                    <p className="mb-4">
                      To compare IVR vs AI voice agent cost per call, businesses should calculate the total operating cost and divide it by the number of calls handled.
                    </p>
                    <p className="mb-4">
                      For a more useful comparison, also calculate the cost per successfully resolved enquiry.
                    </p>
                    <p className="mb-4">
                      An AI voice agent may have higher technology costs but could automate enquiries that otherwise require employee time. A traditional IVR may be more economical for simple call routing and predictable menu-based interactions.
                    </p>
                    <p>
                      There is no universally cheaper option. Actual costs depend on provider pricing, call duration, usage, system complexity and resolution performance.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: RESOLUTION RATE VS CONTAINMENT RATE */}
              <section id="resolution-vs-containment" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENT RESOLUTION RATE VS IVR CALL CONTAINMENT RATE
                </h2>
                <div className="space-y-4">
                  <p>
                    Businesses should measure performance rather than compare systems only by their technology costs.
                  </p>
                  <ul className="space-y-3 pl-5 list-disc text-[#1E1E1E]">
                    <li>
                      <strong>AI Voice Agent Resolution Rate:</strong> Measures the percentage of eligible customer enquiries successfully resolved by the AI agent.
                    </li>
                    <li>
                      <strong>IVR Call Containment Rate:</strong> Measures the percentage of calls handled within the IVR system without requiring further handling outside the configured flow, such as reaching a live representative.
                    </li>
                  </ul>
                  <p className="pt-2">
                    These metrics are related but not identical. A call may remain inside an IVR system without the customer&apos;s actual problem being resolved.
                  </p>
                  <p>
                    Businesses should therefore track successful task completion, repeat calls and customer feedback alongside the IVR call containment rate and AI voice agent resolution rate.
                  </p>
                </div>
              </section>

              {/* SECTION 9: WHEN TO USE TABLE */}
              <section id="when-to-use" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHEN TO USE AI VOICE AGENT VS IVR
                </h2>
                <p className="mb-6">
                  Choosing the right option depends on the nature of your customer interactions.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-xs sm:text-sm uppercase tracking-wider font-bold text-[#1E1E1E]">
                        <th className="py-3.5 pr-4 pl-0 w-1/2 align-top">Business Requirement</th>
                        <th className="py-3.5 pl-4 pr-0 w-1/2 align-top">Recommended Option</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-[#1E1E1E]">
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Simple department selection</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Traditional IVR</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Basic call routing</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Traditional IVR</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Frequently asked questions</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI voice agent or conversational IVR</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Detailed customer enquiries</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI voice agent</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Multi-step conversations</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI voice agent</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Structured, repetitive workflows</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Traditional IVR or hybrid system</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Existing IVR with gradual automation needs</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">AI and IVR hybrid system</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 10: WHEN SHOULD YOU REPLACE */}
              <section id="when-to-replace" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHEN SHOULD YOU REPLACE TRADITIONAL IVR?
                </h2>
                <div className="space-y-4">
                  <p>
                    Consider replacing traditional IVR with an AI voice agent when customers frequently struggle with menu navigation, enquiries require flexible conversations or existing menus cannot handle the variety of customer requests.
                  </p>
                  <p>
                    However, completely replacing an IVR system may not be necessary. Businesses should first identify which call types benefit from conversational automation and which are already handled efficiently by existing menus.
                  </p>
                </div>
              </section>

              {/* SECTION 11: CONCLUSION */}
              <section id="conclusion" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-[#1E1E1E] text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  CONCLUSION
                </h2>
                <div className="space-y-4">
                  <p>
                    The choice between an AI voice agent vs IVR depends on your business&apos;s customer communication requirements.
                  </p>
                  <p>
                    Traditional IVR remains useful for structured call routing, simple menus and predictable workflows. AI voice agents are better suited to natural conversations, varied enquiries and more flexible customer interactions.
                  </p>
                  <p>
                    For businesses with existing IVR infrastructure, a hybrid approach can provide a practical transition. Rather than replacing everything immediately, organisations can introduce AI where it offers clear improvements and measure the results before expanding automation.
                  </p>
                </div>
              </section>

              {/* SECTION 12: FAQS */}
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
        <BlogNavigation currentSlug="ai-voice-agent-vs-ivr" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
