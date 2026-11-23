"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "what-is-ai-patient-appointment-management", label: "What Is AI Patient Appointment Management?" },
  { id: "how-voice-agents-improve-appointment-management", label: "How AI Voice Agents Improve Appointments" },
  { id: "benefits-of-ai-voice-agents", label: "Benefits for Healthcare Providers" },
  { id: "improving-patient-scheduling-workflows", label: "AI Patient Scheduling Workflows" },
  { id: "healthcare-management-software", label: "Healthcare Software & Integrations" },
  { id: "how-to-implement-ai-calling", label: "How Providers Can Implement AI Calling" },
  { id: "how-callience-supports", label: "How Callience Supports Healthcare" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "1. What are the benefits of AI voice agents for patient appointment management?",
    a: "The benefits include reduced manual calling, consistent appointment reminders, improved confirmation follow-ups, organised cancellation requests, and easier rescheduling communication.",
  },
  {
    q: "2. How do AI voice agents help hospitals manage patient appointments?",
    a: "AI voice agents help hospitals manage patient appointments by contacting patients, sharing appointment details, collecting confirmations, and recording requests for cancellations or rescheduling.",
  },
  {
    q: "3. How does AI calling help clinics manage appointment cancellations?",
    a: "AI calling helps clinics manage appointment cancellations by contacting patients, collecting cancellation requests, and recording responses for the administrative team to review and process.",
  },
  {
    q: "4. How do AI voice agents help patients reschedule appointments?",
    a: "AI voice agents can collect requests to change appointment dates or times and communicate the next steps. Direct rescheduling depends on the healthcare provider's scheduling system and available integrations.",
  },
  {
    q: "5. How do AI voice agents improve patient scheduling workflows?",
    a: "AI voice agents improve patient scheduling workflows by supporting reminders, confirmations, response collection, cancellation communication, and follow-up processes.",
  },
];

export default function PatientAppointmentManagementBlogPage() {
  const [activeSection, setActiveSection] = useState("what-is-ai-patient-appointment-management");
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
                <span className="block sm:whitespace-nowrap">HOW AI VOICE AGENTS CAN IMPROVE</span>
                <span className="block sm:whitespace-nowrap">APPOINTMENT MANAGEMENT IN HEALTHCARE</span>
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[660px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI voice agents help healthcare providers automate appointment reminders, confirmations, cancellations, and rescheduling.
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
              src="/How AI Voice Agents Can Improve Appointment Management in Healthcare.png"
              alt="How AI Voice Agents Can Improve Appointment Management in Healthcare"
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
                    className="mt-4 space-y-2 text-sm"
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

            {/* Right Column: Article Content */}
            <article
              ref={articleRef}
              className="lg:col-span-9 max-w-[820px] font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.6]"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-4 mb-12">
                <p>
                  AI voice agents can improve AI patient appointment management by helping hospitals, clinics, and healthcare providers automate appointment reminders, confirmations, booking requests, cancellations, and rescheduling communication. Healthcare facilities often manage hundreds of patient interactions every day, and handling every call manually can increase administrative workloads and delay follow-ups.
                </p>
                <p>
                  An AI voice agent for healthcare can make inbound and outbound calls to communicate appointment details, remind patients about scheduled visits, and collect responses when patients need to change their appointments. By automating repetitive communication, AI calling for healthcare helps administrative teams manage patient interactions more consistently while giving staff more time to focus on patient care.
                </p>
              </div>

              {/* SECTION 1: WHAT IS AI PATIENT APPOINTMENT MANAGEMENT? */}
              <section id="what-is-ai-patient-appointment-management" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHAT IS AI PATIENT APPOINTMENT MANAGEMENT?
                </h2>
                <div className="space-y-4">
                  <p>
                    AI patient appointment management involves using AI-powered voice agents to support routine communication between healthcare providers and patients. These systems can assist with appointment reminders, confirmation calls, booking enquiries, cancellation requests, and rescheduling communication.
                  </p>
                  <p>
                    Unlike traditional manual calling, AI calling in healthcare can support repetitive communication at scale. This is particularly useful for hospitals and clinics that manage appointments across multiple departments, doctors, and locations.
                  </p>
                  <p>
                    For example, an AI voice agent can call a patient before a scheduled consultation, communicate the appointment date and time, and record whether the patient confirms or requests a change.
                  </p>
                  <p className="font-semibold text-primary-black">For example:</p>
                  <div className="bg-primary-beige border border-card-border rounded-xl p-4 my-2 text-sm sm:text-base space-y-2">
                    <p>
                      <strong>AI Voice Agent:</strong> &ldquo;Hello Sunita, this is City Care Clinic calling to confirm your consultation with Dr. Sharma tomorrow at 11:30 AM. Will you be attending?&rdquo;
                    </p>
                    <p>
                      <strong>Patient:</strong> &ldquo;Yes, I will be attending.&rdquo;
                    </p>
                    <p>
                      <strong>AI Voice Agent:</strong> &ldquo;Thank you! Your appointment has been confirmed. Please remember to arrive 10 minutes early with your previous medical records.&rdquo;
                    </p>
                  </div>
                  <div className="bg-primary-beige border border-card-border rounded-xl p-4 my-3 text-sm sm:text-base font-semibold text-primary-black">
                    Scheduled Visit in HMS → Timely AI Reminder Call → Patient Intent (Confirm/Reschedule/Cancel) → Instant System Update &amp; Reception Alert
                  </div>
                </div>
              </section>

              {/* SECTION 2: HOW AI VOICE AGENTS IMPROVE APPOINTMENT MANAGEMENT IN HEALTHCARE */}
              <section id="how-voice-agents-improve-appointment-management" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS IMPROVE APPOINTMENT MANAGEMENT IN HEALTHCARE
                </h2>

                <p className="mb-6">
                  Healthcare providers can use AI voice agents at different stages of the patient appointment journey:
                </p>

                <div className="space-y-8">
                  {/* Item 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      1. Automating Appointment Reminders
                    </h3>
                    <p className="mb-3">
                      Patients may forget scheduled appointments because of busy routines, personal commitments, or changes in their schedules. Missed appointments can create scheduling difficulties for healthcare facilities.
                    </p>
                    <p className="mb-3">
                      AI appointment reminders healthcare workflows can help providers contact patients before their scheduled visits. An AI voice agent can communicate the appointment date, time, and other approved details.
                    </p>
                    <p className="mb-2">Using AI calling for appointment reminders can help healthcare providers:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                      <li>Remind patients about upcoming consultations.</li>
                      <li>Communicate appointment dates and timings clearly.</li>
                      <li>Ask patients whether they plan to attend.</li>
                      <li>Identify patients who need to change their appointments.</li>
                    </ul>
                    <p>
                      These automated appointment reminders can make communication more consistent and reduce the need for staff to make every reminder call manually.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      2. Confirming Patient Appointments
                    </h3>
                    <p className="mb-3">
                      Healthcare providers need to know whether patients plan to attend their scheduled consultations. AI appointment confirmation calls can help clinics and hospitals collect patient responses before appointment dates.
                    </p>
                    <p className="mb-3">
                      For example, an AI voice agent can contact a patient and ask whether they will attend an upcoming consultation. The response can then be recorded for the administrative team.
                    </p>
                    <p>
                      These appointment confirmation calls can help healthcare facilities identify appointments that need attention, follow up with patients who have not responded, and maintain updated appointment information.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      3. Supporting Appointment Booking and Scheduling
                    </h3>
                    <p className="mb-3">
                      Managing new appointment requests can create additional work for receptionists, especially during busy morning hours.
                    </p>
                    <p className="mb-3">
                      AI appointment scheduling healthcare workflows can help patients communicate their preferred dates, times, departments, or consultation requirements through voice conversations.
                    </p>
                    <p>
                      An AI voice agent for appointment scheduling may collect this information and support appointment selection, depending on the available system capabilities and integrations. AI healthcare appointment booking can therefore make routine appointment requests easier to organise. Direct booking should depend on accurate availability information from the healthcare provider&apos;s scheduling system.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      4. Managing Appointment Cancellations
                    </h3>
                    <p className="mb-3">
                      Patients sometimes cancel appointments because of personal commitments, travel difficulties, or changes in availability.
                    </p>
                    <p className="mb-3">
                      Understanding how AI calling helps clinics manage appointment cancellations can help healthcare facilities create more organised communication workflows.
                    </p>
                    <p>
                      An AI voice agent can collect cancellation requests, record patient responses, and notify the relevant administrative team. Where supported by the system, appointment records can also be updated through an integration. This helps clinics identify open slots early and reallocate them to emergency or waitlisted patients.
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      5. Helping Patients Reschedule Appointments
                    </h3>
                    <p className="mb-3">
                      Some patients want to attend their consultation but cannot visit the healthcare facility at the originally scheduled time.
                    </p>
                    <p className="mb-3">
                      AI appointment rescheduling workflows can help collect these requests and communicate the next steps. For example, an AI voice agent can ask whether a patient wants to change an appointment and collect their preferred date or time slot.
                    </p>
                    <p>
                      The availability of direct rescheduling depends on whether the AI solution can access and update the provider&apos;s scheduling system. Otherwise, the request can be recorded for administrative staff follow-up.
                    </p>
                  </div>

                  {/* Item 6 */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-black mb-2">
                      6. Reducing Missed Patient Appointments
                    </h3>
                    <p className="mb-3">
                      Missed appointments can affect consultation schedules, doctor availability, and the delivery of timely medical care to other patients.
                    </p>
                    <p className="mb-3">
                      AI voice agents support more consistent patient communication through timely reminders, confirmation calls, and follow-ups with patients who have not responded.
                    </p>
                    <p>
                      These workflows do not guarantee that every patient will attend, but they help healthcare providers maintain contact before scheduled visits and minimize empty consultation slots.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: BENEFITS OF AI VOICE AGENTS */}
              <section id="benefits-of-ai-voice-agents" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF AI VOICE AGENTS FOR PATIENT APPOINTMENT MANAGEMENT
                </h2>
                <p className="mb-6">
                  The benefits of AI voice agents for patient appointment management go beyond making reminder calls. They can support several administrative activities across the entire appointment journey.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Benefit</th>
                        <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">How It Helps Healthcare Providers</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Reduced manual calling</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Automates repetitive appointment-related calls</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Better communication</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Keeps patients informed about scheduled visits</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Improved confirmations</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Helps collect patient responses before appointments</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Easier rescheduling</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Organises requests to change appointment timings</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Administrative efficiency</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Reduces repetitive tasks for reception teams</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Consistent follow-ups</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Supports structured communication with patients</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Automated appointment management can help hospitals and clinics improve appointment coordination while allowing staff to focus on activities that require personal attention.
                </p>
              </section>

              {/* SECTION 4: HOW AI VOICE AGENTS IMPROVE PATIENT SCHEDULING WORKFLOWS */}
              <section id="improving-patient-scheduling-workflows" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS IMPROVE PATIENT SCHEDULING WORKFLOWS
                </h2>
                <p className="mb-6">
                  Understanding how AI voice agents improve patient scheduling workflows helps healthcare providers identify where automated communication can be introduced.
                </p>

                <p className="mb-4">A typical AI patient scheduling workflow may include:</p>
                <ul className="space-y-3 pl-5 list-disc mb-6">
                  <li>
                    <strong>Appointment information:</strong> The healthcare facility maintains accurate appointment details in its scheduling system or electronic health record (EHR).
                  </li>
                  <li>
                    <strong>Reminder call:</strong> An AI voice agent contacts the patient before the scheduled visit at an optimal interval (e.g., 24 to 48 hours prior).
                  </li>
                  <li>
                    <strong>Patient response:</strong> The patient confirms attendance, cancels, or requests a change in date or time.
                  </li>
                  <li>
                    <strong>Request handling:</strong> The response is recorded and processed automatically through the supported workflow.
                  </li>
                  <li>
                    <strong>Staff follow-up:</strong> Requests requiring clinical or manual attention are immediately routed to the appropriate department.
                  </li>
                  <li>
                    <strong>Schedule updates:</strong> Appointment records are updated by authorised staff or through direct integrations with the hospital management software.
                  </li>
                </ul>

                <p>
                  This process makes AI patient appointment management more organised by connecting routine patient communication with appointment administration.
                </p>
              </section>

              {/* SECTION 5: AI VOICE AGENTS AND HEALTHCARE MANAGEMENT SOFTWARE */}
              <section id="healthcare-management-software" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-4"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI VOICE AGENTS AND HEALTHCARE MANAGEMENT SOFTWARE
                </h2>
                <p className="mb-6">
                  Healthcare facilities use different digital platforms to manage patient information, appointments, and administrative activities. AI calling solutions can complement these systems through suitable integrations:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                        <th className="py-3.5 pr-4 pl-0 w-1/3 align-top">Software Type</th>
                        <th className="py-3.5 pl-4 pr-0 w-2/3 align-top">Purpose in Appointment Management</th>
                      </tr>
                    </thead>
                    <tbody className="font-medium text-primary-black">
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Healthcare software</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Supports overarching healthcare administration and facility operations</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Hospital management system (HMS)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Helps manage hospital departments, doctors, and multi-location operations</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Clinic management software (CMS)</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Organises outpatient clinic appointments and administrative tasks</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Patient management system</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Maintains patient-related records, contact histories, and profiles</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Healthcare CRM</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Helps manage patient communication, engagement, and relationships</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Medical practice management software</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Supports medical practice administration, billing, and reception workflows</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment scheduling software</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Organises appointment availability calendars and real-time slot bookings</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment reminder system</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Organises structured reminder communication across voice and messaging</td>
                      </tr>
                      <tr className="border-b border-card-border/50">
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Patient scheduling software</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Helps manage dynamic patient appointment queues and doctor timetables</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 pr-4 pl-0 font-bold align-top">Appointment booking system</td>
                        <td className="py-3.5 pl-4 pr-0 align-top">Supports incoming appointment requests and patient intake reservations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-primary-beige border border-card-border rounded-xl p-4 my-4 text-sm sm:text-base font-semibold text-primary-black">
                  Integration capabilities vary between platforms. Healthcare facilities should evaluate system compatibility, data security, patient consent, and access permissions before connecting AI calling solutions with existing systems.
                </div>
              </section>

              {/* SECTION 6: HOW HEALTHCARE PROVIDERS CAN IMPLEMENT AI CALLING */}
              <section id="how-to-implement-ai-calling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW HEALTHCARE PROVIDERS CAN IMPLEMENT AI CALLING
                </h2>
                <div className="space-y-4">
                  <p>
                    Healthcare providers can introduce AI calling for clinics gradually by identifying repetitive communication tasks. A practical approach includes:
                  </p>
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black">
                    <li>
                      <strong>Identify requirements:</strong> Determine whether the facility needs reminders, confirmation calls, cancellation handling, or rescheduling support.
                    </li>
                    <li>
                      <strong>Organise appointment information:</strong> Maintain accurate patient contact details, doctor schedules, and appointment records.
                    </li>
                    <li>
                      <strong>Define calling workflows:</strong> Decide when reminder and confirmation calls should take place (e.g., 48 hours or 24 hours prior).
                    </li>
                    <li>
                      <strong>Prepare approved responses:</strong> Ensure that AI voice agents communicate accurate appointment locations, preparation instructions, and doctor names.
                    </li>
                    <li>
                      <strong>Establish staff follow-ups:</strong> Define how cancellation requests, emergency queries, and unresolved issues reach the appropriate clinical or reception team.
                    </li>
                    <li>
                      <strong>Monitor performance:</strong> Review call outcomes, confirmation responses, missed appointment rates, and patient feedback to continually optimize workflows.
                    </li>
                  </ol>
                  <div className="bg-primary-beige border border-card-border rounded-xl p-4 my-4 text-sm sm:text-base text-primary-black">
                    <p className="font-semibold mb-1">Compliance &amp; Clinical Safety Note:</p>
                    <p>
                      Healthcare providers should follow applicable privacy, consent, and data protection requirements (such as the Digital Personal Data Protection Act and HIPAA guidelines) when handling patient information. AI voice agents should focus strictly on administrative communication, not medical advice or clinical decision-making.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 7: HOW CALLIENCE SUPPORTS HEALTHCARE */}
              <section id="how-callience-supports" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW CALLIENCE SUPPORTS HEALTHCARE APPOINTMENT COMMUNICATION
                </h2>
                <div className="space-y-4">
                  <p>
                    Callience provides AI-powered voice agents that support inbound and outbound calling workflows. These capabilities can support healthcare organisations that want to organise routine patient communication.
                  </p>
                  <p>
                    For example, healthcare providers can use AI calling workflows for appointment reminders, outbound follow-ups, and other routine communication requirements.
                  </p>
                  <p>
                    By supporting repetitive calling activities, Callience can help healthcare teams manage patient communication while administrative staff focus on appointment requests and matters requiring personal attention. Booking, rescheduling, and system integration capabilities depend on the configured workflow and supported integrations.
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
                    AI voice agents can help healthcare providers improve appointment management through reminders, confirmation calls, booking enquiries, cancellation communication, and rescheduling requests. By implementing AI patient appointment management, healthcare facilities can improve follow-up consistency, support patient scheduling, and make better use of administrative resources.
                  </p>
                  <p>
                    The goal is not to replace healthcare staff but to make routine appointment communication more manageable, timely, and organised.
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
        <BlogNavigation currentSlug="ai-patient-appointment-management" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: AI Patient Appointment Management" />
      </div>

      <Footer />
    </div>
  );
}
