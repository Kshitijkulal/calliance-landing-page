"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "understanding-native-language-ai", label: "Understanding Native-Language AI Calling" },
  { id: "why-language-matters", label: "Why Language Matters in Indian Business" },
  { id: "5-reasons-why-it-matters", label: "5 Reasons Native-Language AI Calling Matters" },
  { id: "how-language-barriers-affect-engagement", label: "How Language Barriers Affect Engagement" },
  { id: "how-businesses-use-ai-calling", label: "How Businesses Use AI in Indian Languages" },
  { id: "making-ai-conversations-natural", label: "Making AI Conversations More Natural" },
  { id: "how-to-choose-platform", label: "How to Choose an AI Voice Calling Platform" },
  { id: "how-callience-helps", label: "How Callience Helps with AI Calling" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What is native-language AI calling?",
    a: "Native-language AI calling refers to using AI voice agents to communicate with customers in their preferred regional Indian languages, such as Hindi, Punjabi, Marathi, or Tamil, instead of relying exclusively on English.",
  },
  {
    q: "2. Why is vernacular voice AI important for Indian businesses?",
    a: "India is linguistically diverse. Speaking to customers in their familiar regional language builds trust, eliminates misunderstandings, improves comfort, and boosts customer engagement and conversion rates.",
  },
  {
    q: "3. Can AI voice agents accurately understand Indian regional accents?",
    a: "Yes. Advanced voice AI platforms like Callience are configured with speech recognition models adapted for regional Indian pronunciations, local expressions, and multilingual conversational contexts.",
  },
  {
    q: "4. Which industries benefit most from regional language AI calling?",
    a: "Healthcare clinics, educational institutes, real estate agencies, financial services, and retail businesses benefit significantly by making everyday customer interactions accessible across different states.",
  },
  {
    q: "5. Can regional AI voice agents transfer calls to human employees?",
    a: "Yes. AI voice agents can manage initial qualification, routine enquiries, and reminders, then seamlessly transfer complex discussions or negotiations to human representatives when required.",
  },
];

export default function NativeLanguageAICallingPage() {
  const [activeSection, setActiveSection] = useState("understanding-native-language-ai");
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 xl:gap-14 2xl:gap-[182px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[880px]">
              <h1
                className="font-normal uppercase text-primary-black text-[32px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[58px] 2xl:text-[64px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span className="block">WHY NATIVE-LANGUAGE AI CALLING</span>
                <span className="block lg:whitespace-nowrap">MATTERS FOR INDIAN BUSINESSES</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Learn how native-language AI calling helps Indian businesses build trust, reduce language barriers, and create natural customer conversations.
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
                    19th November
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
              src="/Why Native-Language AI Calling Matters for Indian Businesses.png"
              alt="Why Native-Language AI Calling Matters for Indian Businesses"
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
                    className="mt-4 space-y-2.5 text-sm"
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
                  India&apos;s diverse languages and regional cultures influence how businesses communicate with customers. Many customers feel more comfortable discussing their needs, asking questions, and making decisions in a language they understand well. However, businesses serving customers across different regions may find it difficult to manage communication in multiple languages.
                </p>
                <p>
                  Native-language AI calling helps businesses make customer conversations more accessible by allowing AI voice agents to communicate in familiar languages supported by the platform. It can help businesses create natural interactions, improve customer engagement, and build trust.
                </p>
              </div>

              {/* SECTION 1: UNDERSTANDING NATIVE-LANGUAGE AI CALLING */}
              <section id="understanding-native-language-ai" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  UNDERSTANDING NATIVE-LANGUAGE AI CALLING
                </h2>
                <div className="space-y-4">
                  <p>
                    Native-language AI calling refers to using AI voice agents to communicate with customers in their preferred or familiar language. Instead of relying only on English, businesses can use AI voice agents configured for supported regional languages.
                  </p>
                  <p>
                    For example, a customer in Punjab may prefer speaking in Punjabi, while someone in Maharashtra may feel more comfortable communicating in Marathi. Using a familiar language can make it easier for customers to explain their requirements and understand information.
                  </p>
                </div>
              </section>

              {/* SECTION 2: WHY LANGUAGE MATTERS IN INDIAN BUSINESS COMMUNICATION */}
              <section id="why-language-matters" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY LANGUAGE MATTERS IN INDIAN BUSINESS COMMUNICATION
                </h2>
                <div className="space-y-4">
                  <p>
                    India has significant linguistic diversity, and businesses regularly interact with customers who have different language preferences.
                  </p>
                  <p>
                    Language influences how customers understand product information, ask questions, and respond to business communication. When businesses communicate in a language customers understand comfortably, conversations can become clearer and more accessible.
                  </p>
                </div>
              </section>

              {/* SECTION 3: 5 REASONS WHY NATIVE-LANGUAGE AI CALLING MATTERS */}
              <section id="5-reasons-why-it-matters" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  5 REASONS WHY NATIVE-LANGUAGE AI CALLING MATTERS
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      1. Makes Customer Conversations More Comfortable
                    </h3>
                    <p className="mb-2">
                      Customers may find it easier to explain their requirements in a familiar language. Native-language AI calling allows businesses to communicate in supported languages that customers understand.
                    </p>
                    <p>
                      <strong>Example:</strong> A local clinic can use a regional-language AI voice agent to handle appointment enquiries and record booking requests.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      2. Helps Build Customer Trust
                    </h3>
                    <p className="mb-2">
                      Familiar language can make conversations feel more natural and help customers feel comfortable communicating with a business.
                    </p>
                    <p>
                      <strong>Example:</strong> A real estate agency can contact potential buyers in their preferred language to discuss property requirements and arrange further conversations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      3. Reduces Language Barriers
                    </h3>
                    <p className="mb-2">
                      Language differences can create misunderstandings during customer conversations. Customers may misunderstand product details, service information, appointment timings, or payment instructions.
                    </p>
                    <p>
                      AI calling in regional languages can help reduce these barriers by communicating information in supported languages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      4. Improves Customer Engagement
                    </h3>
                    <p className="mb-2">
                      When customers understand a conversation easily, they can respond more comfortably and share relevant information.
                    </p>
                    <p>
                      <strong>Example:</strong> An education institute can use vernacular AI calling to follow up on admission enquiries, understand course preferences, and arrange counselling calls.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
                      5. Supports Businesses Across Different Regions
                    </h3>
                    <p className="mb-2">
                      Businesses expanding into new locations need communication strategies that suit different customer groups.
                    </p>
                    <p>
                      AI voice agents in native languages can help businesses manage routine customer interactions across supported languages. This can be useful for retail businesses, educational institutions, healthcare providers, and service companies.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: HOW LANGUAGE BARRIERS AFFECT CUSTOMER ENGAGEMENT */}
              <section id="how-language-barriers-affect-engagement" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW LANGUAGE BARRIERS AFFECT CUSTOMER ENGAGEMENT
                </h2>
                <div className="space-y-4">
                  <p>
                    When customers cannot comfortably communicate in the language used by a business, several problems can arise:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Misunderstandings:</strong> Customers may misunderstand product details, pricing, or service information.
                    </li>
                    <li>
                      <strong>Reduced engagement:</strong> Some customers may avoid asking questions when they are uncomfortable with the language.
                    </li>
                    <li>
                      <strong>Communication gaps:</strong> Important customer requirements may not be explained clearly.
                    </li>
                    <li>
                      <strong>Lower confidence:</strong> Customers may hesitate before sharing information or proceeding with a service.
                    </li>
                  </ul>
                  <p>
                    Regional language AI calling can help make everyday customer conversations easier to understand.
                  </p>
                </div>
              </section>

              {/* SECTION 5: HOW BUSINESSES CAN USE AI CALLING IN INDIAN LANGUAGES */}
              <section id="how-businesses-use-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BUSINESSES CAN USE AI CALLING IN INDIAN LANGUAGES
                </h2>
                <div className="space-y-4">
                  <p>
                    AI voice agents can be configured to support customer interactions across multiple Indian business sectors:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Business Type</th>
                          <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">Practical Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black">
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Education Institutes</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Follow up on admission enquiries and explain course information</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Real Estate Agencies</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Contact property buyers and understand their requirements</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Clinics</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Manage appointment enquiries and send reminders</td>
                        </tr>
                        <tr className="border-b border-card-border">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Retail Businesses</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Follow up on product enquiries and share basic information</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Service Providers</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Handle service enquiries and schedule callbacks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    For example, a coaching institute serving students across different states can configure calling workflows based on supported language preferences. This allows students to discuss admission enquiries more comfortably.
                  </p>
                </div>
              </section>

              {/* SECTION 6: HOW BUSINESSES CAN MAKE AI CONVERSATIONS MORE NATURAL */}
              <section id="making-ai-conversations-natural" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW BUSINESSES CAN MAKE AI CONVERSATIONS MORE NATURAL
                </h2>
                <div className="space-y-4">
                  <p>
                    Using a regional language alone does not guarantee a good customer experience. Businesses should also focus on how AI voice agents communicate:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Understand Customer Language Preferences:</strong> Identify which languages customers prefer before configuring calling campaigns.
                    </li>
                    <li>
                      <strong>Use Simple and Familiar Words:</strong> Avoid complicated expressions that may confuse customers.
                    </li>
                    <li>
                      <strong>Consider Regional Pronunciation:</strong> Test how AI agents pronounce common words, names, and local expressions.
                    </li>
                    <li>
                      <strong>Keep Conversations Natural:</strong> Use short questions, clear responses, and a polite conversational tone.
                    </li>
                    <li>
                      <strong>Provide Human Assistance:</strong> Allow customers to speak with employees when they need detailed explanations.
                    </li>
                    <li>
                      <strong>Test Before Launching:</strong> Review conversations with native speakers to identify translation errors and pronunciation issues.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 7: HOW TO CHOOSE AN AI VOICE CALLING PLATFORM */}
              <section id="how-to-choose-platform" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO CHOOSE AN AI VOICE CALLING PLATFORM
                </h2>
                <div className="space-y-4">
                  <p>
                    Before selecting a platform for vernacular AI calling, businesses should evaluate:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Language Availability:</strong> Check whether the platform supports the regional languages relevant to your customers.
                    </li>
                    <li>
                      <strong>Speech Recognition:</strong> Ensure the AI can understand customer responses accurately.
                    </li>
                    <li>
                      <strong>Voice Quality:</strong> Evaluate pronunciation, clarity, and response speed.
                    </li>
                    <li>
                      <strong>CRM Integration:</strong> Check whether customer information and call outcomes can be recorded.
                    </li>
                    <li>
                      <strong>Inbound and Outbound Calling:</strong> Look for support for incoming enquiries and outgoing follow-ups.
                    </li>
                    <li>
                      <strong>Human Call Transfer:</strong> Ensure customers can reach employees when required.
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
                    Callience helps businesses manage inbound and outbound customer communication through AI-powered voice agents. Businesses can use these workflows for lead qualification, admission enquiries, follow-ups, appointment reminders, and customer re-engagement.
                  </p>
                  <p>
                    For businesses serving customers across different regions, choosing suitable language options and creating clear calling scripts can help make conversations more accessible. Callience workflows can also help handle incoming enquiries, collect customer information, and direct callers to the appropriate team.
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
                  <p>
                    Native-language AI calling can help Indian businesses make customer communication more accessible, comfortable, and understandable. By communicating in familiar languages, businesses can reduce language barriers, encourage customer engagement, and create more natural conversations.
                  </p>
                  <p>
                    Whether it is a coaching institute following up on admission enquiries or a service provider managing customer requests, regional language AI calling can support everyday business communication. The key is to choose suitable language options, test conversation quality, and keep human assistance available when customers need it.
                  </p>
                </div>
              </section>

              {/* SECTION 10: FAQS */}
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
        <BlogNavigation currentSlug="native-language-ai-calling-indian-businesses" />

        {/* Contact Us Form Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
