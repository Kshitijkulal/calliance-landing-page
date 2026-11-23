"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-an-ai-voice-agent", label: "What Is an AI Voice Agent for Admissions?" },
  { id: "how-ai-voice-agents-help", label: "How AI Voice Agents Help With Student Admissions" },
  { id: "student-admission-journey", label: "Supporting the Student Admission Journey" },
  { id: "traditional-vs-ai-calling", label: "AI Voice Agents vs Traditional Admission Calling" },
  { id: "how-to-implement", label: "How Schools and Colleges Can Implement AI Calling" },
  { id: "education-management-systems", label: "Working Alongside Education Management Systems" },
  { id: "how-callience-supports", label: "How Callience Supports Student Admission Follow-Ups" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. How do AI voice agents help with student admissions?",
    a: "AI voice agents help educational institutions contact prospective students, answer routine admission questions, follow up on enquiries, and send application reminders through automated voice conversations.",
  },
  {
    q: "2. How can colleges automate student admission enquiry follow-ups?",
    a: "Colleges can use AI calling workflows to contact students after they submit enquiries, check their interest, share approved course information, and remind them about important admission activities.",
  },
  {
    q: "3. Can AI voice agents answer student questions about courses?",
    a: "Yes. AI voice agents can answer routine course-related questions when they have access to accurate, institution-approved information. Complex or personalised questions may require assistance from admission staff.",
  },
  {
    q: "4. How can schools automate admission enquiry calls?",
    a: "Schools can use AI-powered calling workflows to contact prospective students, follow up on enquiries, provide basic admission information, and send reminders about application deadlines.",
  },
  {
    q: "5. Do AI voice agents replace admission counsellors?",
    a: "No. AI voice agents can support repetitive communication tasks, but admission counsellors remain important for personalised guidance, complex questions, and admission decisions.",
  },
  {
    q: "6. How can educational institutions improve student admission enquiry follow-ups?",
    a: "Institutions can improve follow-ups by responding promptly, maintaining accurate enquiry records, organising follow-up schedules, sharing relevant information, and using call outcomes to identify students who need further assistance.",
  },
];

export default function StudentAdmissionsBlogPage() {
  const [activeSection, setActiveSection] = useState("what-is-an-ai-voice-agent");
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 xl:gap-14 2xl:gap-[120px]">
            {/* Left Block: Title & Subtitle */}
            <div className="flex-1 max-w-[940px]">
              <h1
                className="font-normal uppercase text-primary-black text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.05] tracking-normal mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span className="block sm:whitespace-nowrap">HOW AI VOICE AGENTS CAN SIMPLIFY</span>
                <span className="block sm:whitespace-nowrap">STUDENT ADMISSIONS &amp; EDUCATION FOLLOW-UPS</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[660px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI voice agents for admissions help schools, colleges, and educational institutions manage student enquiries, automate admission follow-ups, and improve communication with prospective students.
              </p>
            </div>

            {/* Right Block: Metadata Sidebar */}
            <div className="w-full lg:w-auto shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-primary-black pt-4 sm:pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full lg:w-[197px] flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0">
                {/* Text lines */}
                <div
                  className="flex flex-row lg:flex-col gap-4 lg:gap-6 text-primary-black"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    23rd November
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    6 min read
                  </p>
                  <p className="font-medium text-[13px] sm:text-base lg:text-[18px] leading-[1.4]">
                    Karanvir Singh
                  </p>
                </div>

                {/* Contact Us button */}
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

        {/* Hero Image Section */}
        <div className="w-full bg-white mb-8 md:mb-16 overflow-hidden">
          <div className="relative w-full aspect-[1440/515] min-h-[160px]">
            <Image
              src="/How AI Voice Agents Can Simplify Student Admissions and Education Follow-Ups.png"
              alt="How AI Voice Agents Can Simplify Student Admissions and Education Follow-Ups"
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
                                : "bg-transparent group-hover:bg-card-border"
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
              <div className="space-y-4 mb-14">
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI voice agents for admissions help schools, colleges, and educational institutions manage student enquiries, automate admission follow-ups, and improve communication with prospective students. During admission seasons, institutions often receive hundreds or thousands of enquiries about courses, eligibility, fees, application deadlines, and admission procedures. Managing every enquiry manually can create delays and make it difficult to follow up with every interested student.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  An AI voice agent for admissions provides a way to automate routine voice interactions with prospective students. These agents can make outbound calls, handle inbound enquiries, share relevant admission information, and remind students about important next steps.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AN AI VOICE AGENT FOR ADMISSIONS? */}
              <section id="what-is-an-ai-voice-agent" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AN AI VOICE AGENT FOR ADMISSIONS?
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    An AI voice agent for admissions is an AI-powered calling solution that communicates with prospective students through voice conversations. It can support routine admission-related interactions, including answering common questions, following up on enquiries, and reminding students about application-related activities.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Unlike traditional manual calling, AI-powered calling can help institutions manage repetitive communication tasks at scale.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, when a student submits an enquiry about a college course, an AI voice agent can contact the student, understand their interest, and provide relevant information based on the institution&apos;s available details.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    This makes AI calling for colleges useful for managing admission communication during busy recruitment periods.
                  </p>
                  <div className="bg-primary-beige border border-card-border rounded-xl p-4 my-3 text-sm sm:text-base font-semibold text-primary-black">
                    Student Enquiry Submission → Immediate AI Call → Course Interest Discovery → Approved Info Sharing → CRM Update & Counsellor Handoff
                  </div>
                </div>
              </section>

              {/* SECTION 2: HOW AI VOICE AGENTS HELP WITH STUDENT ADMISSIONS */}
              <section id="how-ai-voice-agents-help" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS HELP WITH STUDENT ADMISSIONS
                </h2>

                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Educational institutions can use AI voice agents at different stages of the student admission journey. Here are some important applications:
                </p>

                <div className="space-y-8">
                  {/* Subsection 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      1. Managing Student Admission Enquiries
                    </h3>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Educational institutions receive enquiries through websites, advertisements, social media, education portals, and other channels. Responding to every enquiry quickly can be challenging for admission teams.
                    </p>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      AI calling for education helps institutions contact prospective students promptly and manage routine enquiry-related conversations. For example, when a student submits an enquiry about an MBA programme, an AI voice agent can initiate a call and discuss basic details such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li>Course or programme of interest.</li>
                      <li>Preferred admission intake.</li>
                      <li>Educational background.</li>
                      <li>Interest in receiving further information.</li>
                      <li>Preferred time for another conversation.</li>
                    </ul>
                    <div className="bg-primary-beige border border-card-border rounded-lg p-3 my-3 text-sm sm:text-base space-y-1">
                      <p><strong>AI Agent:</strong> &ldquo;Hello Rahul, this is the admissions desk at Apex Institute. We received your enquiry for our MBA programme. Are you planning for the upcoming autumn intake?&rdquo;</p>
                      <p><strong>Student:</strong> &ldquo;Yes, I wanted to know the eligibility and application deadlines.&rdquo;</p>
                      <p><strong>AI Agent:</strong> &ldquo;The deadline for Round 1 is June 15th, and graduates with at least 50% marks are eligible. Would you like me to send the complete syllabus and fee structure to your WhatsApp?&rdquo;</p>
                    </div>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4]">
                      This supports student enquiry management by helping institutions organise incoming interest and identify students who may require additional assistance.
                    </p>
                  </div>

                  {/* Subsection 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      2. Automating Admission Enquiry Follow-Ups
                    </h3>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Many students enquire about courses but do not immediately complete the admission process. Some may be comparing colleges, discussing options with family, or waiting for additional information.
                    </p>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      AI admission follow-up helps institutions maintain communication with these prospective students. Understanding how to automate student admission enquiry follow-ups allows admission teams to manage routine follow-up activities more consistently.
                    </p>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      For example, an AI voice agent can contact a student who enquired about a programme but has not taken the next step. It can ask whether the student is still interested and whether they need further information. This helps institutions:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4]">
                      <li>Follow up with interested students consistently.</li>
                      <li>Remind students about application deadlines.</li>
                      <li>Identify students who need additional guidance.</li>
                      <li>Reduce missed follow-up opportunities.</li>
                    </ul>
                  </div>

                  {/* Subsection 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      3. Answering Common Course-Related Questions
                    </h3>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Students often have similar questions about admission procedures, course duration, eligibility, fees, and available programmes. An AI voice agent can handle routine questions using information approved and provided by the institution.
                    </p>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4]">
                      For example, a student enquiring about a BTech programme may ask about eligibility criteria, entrance test requirements, or application dates. Education-specific voice agents can support these conversations by sharing verified details and flagging complex questions that require personal guidance from the senior admission team. This reduces repetitive communication while ensuring basic information is immediately accessible.
                    </p>
                  </div>

                  {/* Subsection 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      4. Sending Application and Admission Reminders
                    </h3>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Students may show genuine interest in a course but forget to complete certain steps in the application process. Automated admission calls can help institutions remind students about critical activities, such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li>Completing an admission enquiry or profile form.</li>
                      <li>Submitting pending documentation or transcripts.</li>
                      <li>Checking application status before rounds close.</li>
                      <li>Reviewing upcoming scholarship and admission deadlines.</li>
                      <li>Attending a scheduled campus visit or counselling session.</li>
                    </ul>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4]">
                      For example, if a prospective student has started an online application but hasn&apos;t finished the document upload stage, an AI voice agent can place a friendly reminder call and guide them through the next steps.
                    </p>
                  </div>

                  {/* Subsection 5 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      5. Improving Student Recruitment and Lead Qualification
                    </h3>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Not every student enquiry represents the same level of readiness or interest. Some students are actively seeking immediate admission, while others are exploring distant academic cycles or general course options.
                    </p>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      AI calling helps colleges qualify admission leads by gathering key details during conversations:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      <li>Which course or department the student is interested in.</li>
                      <li>Whether the student is planning to apply in the current intake.</li>
                      <li>Which study mode (full-time, part-time, or online) they prefer.</li>
                      <li>Whether they need scholarship details or financial aid guidance.</li>
                      <li>Whether they want a direct 1-on-1 session with an academic counsellor.</li>
                    </ul>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4]">
                      This enables student recruitment automation, empowering admission teams to prioritize verified, high-intent prospects for detailed consultations.
                    </p>
                  </div>

                  {/* Subsection 6 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      6. Re-Engaging Students Who Have Stopped Responding
                    </h3>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] mb-3">
                      Prospective students frequently go silent after an initial enquiry due to exams, busy schedules, or information overload. However, many remain interested and simply require a timely reminder or reassurance.
                    </p>
                    <p className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4]">
                      AI voice agents enable colleges to reconnect with students who enquired weeks earlier without overburdening staff. These calls determine whether students are still deciding, have opted for another institution, or need specific answers before moving forward, substantially cutting down on missed admissions.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: SUPPORTING THE STUDENT ADMISSION JOURNEY */}
              <section id="student-admission-journey" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS SUPPORT THE STUDENT ADMISSION JOURNEY
                </h2>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  AI voice agents support multiple stages of the admission lifecycle, from the first contact through application reminders and re-engagement workflows.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Admission Stage</th>
                        <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">How AI Voice Agents Can Help</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Initial enquiry</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact students who submit admission enquiries</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Course exploration</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Share approved information about programmes</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead qualification</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Understand student interest and preferences</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Admission follow-up</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Reconnect with students who have not taken the next step</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Application stage</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Remind students about pending application activities</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Counselling appointment</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Provide reminders about scheduled sessions</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Re-engagement</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Contact students who stopped responding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mt-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Understanding how AI voice agents support the student admission journey helps institutions identify where automated communication can be useful without replacing personalised academic guidance.
                </p>
              </section>

              {/* SECTION 4: TRADITIONAL VS AI ADMISSION CALLING */}
              <section id="traditional-vs-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENTS VS TRADITIONAL ADMISSION CALLING
                </h2>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Traditional admission calling depends heavily on staff members manually contacting prospective students. AI-powered calling can support repetitive communication tasks, allowing admission teams to focus on conversations that require more detailed guidance.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-1/4 align-top">Area</th>
                        <th className="py-3.5 px-4 w-3/8 align-top">Traditional Admission Calling</th>
                        <th className="py-3.5 pl-4 pr-0 w-3/8 align-top">AI Voice Agents</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Initial enquiry follow-up</td>
                        <td className="py-3.5 px-4 align-top">Staff make individual calls</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Routine calls can be automated</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Repetitive questions</td>
                        <td className="py-3.5 px-4 align-top">Staff answer manually</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Can handle approved common questions</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Application reminders</td>
                        <td className="py-3.5 px-4 align-top">Staff track and make calls</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Reminder calls can be automated</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Lead qualification</td>
                        <td className="py-3.5 px-4 align-top">Depends on manual conversations</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Can collect relevant enquiry information</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Follow-up consistency</td>
                        <td className="py-3.5 px-4 align-top">Depends on staff availability</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Can support structured follow-up workflows</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Admission guidance</td>
                        <td className="py-3.5 px-4 align-top">Staff provide personalised guidance</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Complex guidance can be directed to the appropriate team</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-primary-beige border border-card-border rounded-xl p-4 my-6 text-sm sm:text-base font-semibold text-primary-black">
                  AI voice agents are best used to support routine communication rather than replace the admission team&apos;s role in detailed counselling, eligibility decisions, or complex student queries.
                </div>
              </section>

              {/* SECTION 5: HOW TO IMPLEMENT */}
              <section id="how-to-implement" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW SCHOOLS AND COLLEGES CAN IMPLEMENT AI ADMISSION CALLING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Institutions can introduce AI calling gradually by identifying repetitive communication tasks and defining clear workflows. Here is a practical approach:
                  </p>
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Identify common admission enquiries:</strong> List frequently asked questions about courses, eligibility, fees, and application deadlines.
                    </li>
                    <li>
                      <strong>Organise student enquiry data:</strong> Maintain accurate student contact details, course preferences, and enquiry status.
                    </li>
                    <li>
                      <strong>Define calling workflows:</strong> Decide when students should receive initial calls, follow-ups, and application reminders.
                    </li>
                    <li>
                      <strong>Prepare approved responses:</strong> Provide accurate admission information that AI voice agents can use during conversations.
                    </li>
                    <li>
                      <strong>Review call outcomes:</strong> Monitor student responses, follow-up requirements, and enquiry progress.
                    </li>
                    <li>
                      <strong>Improve communication:</strong> Use feedback and call outcomes to refine calling workflows.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    By following these steps, institutions can introduce automated calling software smoothly into their existing admission communication processes.
                  </p>
                </div>
              </section>

              {/* SECTION 6: WORKING ALONGSIDE EDUCATION MANAGEMENT SYSTEMS */}
              <section id="education-management-systems" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS WORK ALONGSIDE EDUCATION MANAGEMENT SYSTEMS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Educational institutions often use an admission management system, student management system, or education CRM to organise student information and admission activities. AI voice agents complement these systems by handling conversational voice tasks and recording call outcomes in real time:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Admission management system (AMS):</strong> Stores application and enquiry information, triggering calls when forms are submitted or stalled.
                    </li>
                    <li>
                      <strong>Student management system (SMS):</strong> Maintains enrolled records and verifies existing student history.
                    </li>
                    <li>
                      <strong>Education CRM tools:</strong> Organises prospective student details, scheduling callbacks and managing follow-up stages.
                    </li>
                    <li>
                      <strong>Lead management software:</strong> Tracks enquiry status, channel attribution, and lead qualification scores.
                    </li>
                    <li>
                      <strong>Student engagement software:</strong> Supports omnichannel touchpoints across WhatsApp, SMS, and email alongside voice.
                    </li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When these systems are connected through suitable integrations, institutions can build unified admission workflows where every call outcome automatically updates the student&apos;s journey.
                  </p>
                </div>
              </section>

              {/* SECTION 7: HOW CALLIENCE SUPPORTS STUDENT ADMISSIONS */}
              <section id="how-callience-supports" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE SUPPORTS STUDENT ADMISSION FOLLOW-UPS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Callience provides AI-powered voice agents that support inbound and outbound calling workflows for businesses and organisations.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For educational institutions, AI calling can support student enquiry follow-ups, admission outreach, routine reminders, and prospective student re-engagement.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    For example, institutions can use these workflows to contact students who have submitted course enquiries, remind them about application-related activities, and follow up with prospective students who need additional information.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    By supporting routine communication, Callience helps admission teams manage repetitive calling activities while they focus on personalised student guidance and admission-related decisions.
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
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI voice agents can simplify student admissions by helping educational institutions manage enquiries, automate follow-ups, share routine course information, and send application reminders. From the first student enquiry to prospective student re-engagement, AI calling can support communication at different stages of the admission journey.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    By combining student enquiry management with structured calling workflows, schools and colleges can improve follow-up consistency and make better use of their admission teams&apos; time.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The goal is not to replace personal student guidance but to make routine admission communication more organised, timely, and manageable.
                  </p>
                </div>
              </section>

              {/* SECTION 9: FAQS */}
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
        <BlogNavigation currentSlug="ai-voice-agents-for-student-admissions" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: AI Voice Agents for Admissions" />
      </div>

      <Footer />
    </div>
  );
}
