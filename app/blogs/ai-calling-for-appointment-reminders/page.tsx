"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogNavigation from "../BlogNavigation";

const TOC_ITEMS = [
  { id: "why-confirmations-matter", label: "Why Confirmations and Reminders Matter" },
  { id: "how-agents-make-reminder-calls", label: "How AI Voice Agents Make Reminder Calls" },
  { id: "how-agents-confirm-appointments", label: "Confirming Appointments & Collecting Responses" },
  { id: "handle-cancellations-and-rescheduling", label: "Handling Cancellations and Rescheduling" },
  { id: "reducing-manual-reminder-calls", label: "Reducing Manual Reminder Calls" },
  { id: "benefits-of-automated-reminders", label: "Benefits of Automated Reminder Calls" },
  { id: "reminders-across-sectors", label: "Reminders Across Different Industries" },
  { id: "measuring-outcomes", label: "Measuring Confirmation & Completion Outcomes" },
  { id: "limitations-and-good-practice", label: "Limitations and Good Practice" },
  { id: "how-to-get-started", label: "How to Get Started with AI Reminders" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    q: "How does AI voice calling improve appointment confirmations?",
    a: "It calls every customer on a schedule, gives the appointment details and asks for a clear response. Each answer is recorded as confirmed, cancelled, rescheduled or no response, so staff can see the status of every booking.",
  },
  {
    q: "How do businesses automate appointment reminder calls?",
    a: "They connect an AI voice bot to their appointment scheduling software or calendar, set when calls go out, write a short script and define what happens for each response. The system then places the calls and updates the booking system.",
  },
  {
    q: "How do AI voice agents confirm customer appointments?",
    a: "The agent identifies itself, states the date, time and location, and asks whether the customer will attend. It maps the spoken reply to a status and saves it to the booking record.",
  },
  {
    q: "How does AI calling reduce missed appointments?",
    a: "It reminds customers before the appointment and lets them cancel or reschedule on the call. Customers who cannot attend tell you in advance, which also lets you refill the slot.",
  },
  {
    q: "Can AI voice agents handle cancellations and rescheduling?",
    a: "Yes. The agent can apply your cancellation rules, offer available slots from the calendar, confirm the new time and update the system. Complex requests can transfer to a staff member.",
  },
  {
    q: "Is an AI reminder call better than a text message?",
    a: "They do different jobs. A text is quick and easy to send, while a voice call allows a live two-way conversation and reaches customers who may not read messages. Many businesses use calls and texts together.",
  },
];

export default function AICallingForAppointmentRemindersPage() {
  const [activeSection, setActiveSection] = useState("why-confirmations-matter");
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
                HOW AI VOICE CALLING CAN IMPROVE APPOINTMENT CONFIRMATIONS AND REMINDERS
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[620px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                AI calling for appointment reminders confirms attendance, handles reschedules and cuts no-shows. See how it works across clinics, schools and salons.
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
              src="/ai-calling-for-appointment-reminders.png"
              alt="How AI Voice Calling Can Improve Appointment Confirmations and Reminders"
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
                  AI voice calling improves appointment confirmations and reminders by using an AI voice agent to phone customers before their appointment, confirm they will attend and record their response, including cancellations and reschedule requests. Instead of staff making manual reminder calls, the system calls from the booking list, speaks naturally and updates the calendar or CRM with the result. Clinics, schools, salons and service businesses use AI appointment reminder calls to reduce no-shows, fill cancelled slots and free up staff time.
                </p>
                <p
                  className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  A missed appointment is a time slot that cannot be resold. A rapid systematic review published in 2023 cites a global average no-show rate of about 23% for healthcare appointments, and it reports that reminders increase attendance and reduce no-shows. AI calling for appointment reminders adds a live two-way conversation to that proven tactic, so a customer can confirm, cancel or reschedule simply by speaking.
                </p>
              </div>

              {/* SECTION 1: WHY APPOINTMENT CONFIRMATIONS AND REMINDERS MATTER */}
              <section id="why-confirmations-matter" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  WHY APPOINTMENT CONFIRMATIONS AND REMINDERS MATTER
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Every no-show has a cost. The slot goes unused, the revenue is lost, staff time is wasted, and other customers may have waited longer for a space that could have been released earlier. Late cancellations create the same problem, because there is too little time to refill the slot.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The strongest evidence for reminders comes from healthcare. An NIHR evidence synthesis found strong, consistent evidence that simple reminders giving the time and location of an appointment increase attendance. Other businesses do not have the same volume of published research, but the logic carries over: a customer who is reminded and given an easy way to confirm or change the booking is less likely to forget or quietly skip it.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Manual reminder calling is the weak point. It is repetitive, easy to postpone on a busy day, and hard to do consistently at the time of day when customers can pick up.
                  </p>
                </div>
              </section>

              {/* SECTION 2: HOW AI VOICE AGENTS MAKE REMINDER CALLS */}
              <section id="how-agents-make-reminder-calls" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS MAKE REMINDER CALLS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Here is how businesses automate appointment reminder calls with an AI voice agent:
                  </p>
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Connect the booking data.</strong> The AI voice bot is linked to your appointment scheduling software, calendar or CRM, so it can read upcoming bookings.
                    </li>
                    <li>
                      <strong>Set the reminder rules.</strong> Decide when calls go out, for example a day or two before the appointment and again on the day, and in which language.
                    </li>
                    <li>
                      <strong>The system places the call.</strong> The AI voice agent for appointment reminders dials the customer from the booking list.
                    </li>
                    <li>
                      <strong>It identifies itself and the business.</strong> The agent states that it is an automated assistant calling about an appointment.
                    </li>
                    <li>
                      <strong>It gives the details.</strong> It reads out the date, time, location and any preparation instructions, such as documents to bring.
                    </li>
                    <li>
                      <strong>It asks for confirmation.</strong> The agent asks a clear question, such as whether the customer will attend.
                    </li>
                    <li>
                      <strong>It records the response.</strong> The answer is written back to the booking system as confirmed, cancelled, reschedule requested or no response.
                    </li>
                    <li>
                      <strong>It follows the fallback rules.</strong> If nobody answers, the system retries, leaves an approved voicemail or sends a text message, depending on your settings.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    In practice, voice AI appointment reminders work as a layer on top of your existing appointment reminder software or appointment management software. The AI makes the call, and the booking system remains the source of truth.
                  </p>
                </div>
              </section>

              {/* SECTION 3: HOW AI VOICE AGENTS CONFIRM CUSTOMER APPOINTMENTS AND COLLECT RESPONSES */}
              <section id="how-agents-confirm-appointments" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS CONFIRM CUSTOMER APPOINTMENTS AND COLLECT RESPONSES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The core of appointment confirmation automation is turning a spoken answer into a structured status. Automated calls collect appointment confirmations by asking a short, specific question and mapping the reply to a defined outcome. Customers can answer in their own words, and many systems also accept keypad input as a fallback.
                  </p>

                  {/* Table 1: Spoken Response Mapping */}
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
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Confirms attendance</td>
                          <td className="py-3.5 px-4 align-top">Repeats the details and ends the call</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Status set to confirmed</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Wants to cancel</td>
                          <td className="py-3.5 px-4 align-top">Confirms the cancellation and may offer a new time</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Status set to cancelled, slot released</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Wants a different time</td>
                          <td className="py-3.5 px-4 align-top">Starts the rescheduling flow</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Reschedule requested or new time booked</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Asks a question the agent cannot answer</td>
                          <td className="py-3.5 px-4 align-top">Transfers to a staff member or logs a callback request</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Escalation noted with the question</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Does not answer</td>
                          <td className="py-3.5 px-4 align-top">Retries or follows the fallback rule</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">No response, retry count</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    These AI appointment confirmation calls give staff a clear list of who is confirmed, who needs attention and which slots have opened.
                  </p>
                </div>
              </section>

              {/* SECTION 4: HOW AI VOICE AGENTS HANDLE APPOINTMENT CANCELLATIONS AND RESCHEDULING */}
              <section id="handle-cancellations-and-rescheduling" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW AI VOICE AGENTS HANDLE APPOINTMENT CANCELLATIONS AND RESCHEDULING
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Cancellations and reschedules are where AI calling reduces missed appointments most directly, because a customer who cannot attend can say so at once instead of not showing up. A well-designed flow works like this:
                  </p>
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Detect the intent.</strong> The agent recognises a request to cancel or change the booking.
                    </li>
                    <li>
                      <strong>Check the rules.</strong> It applies your policy, such as cancellation windows or fees, and tells the customer if they apply.
                    </li>
                    <li>
                      <strong>Offer available slots.</strong> It reads out a few options from the live calendar rather than asking the customer to suggest times blindly.
                    </li>
                    <li>
                      <strong>Confirm the new booking.</strong> It repeats the new date and time and asks the customer to agree.
                    </li>
                    <li>
                      <strong>Update the system.</strong> The old slot is released and the new one is booked.
                    </li>
                    <li>
                      <strong>Send a confirmation.</strong> A text or message with the new details is sent where your setup allows.
                    </li>
                  </ol>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    When no suitable slot exists or the request is complicated, the agent should hand the call to a staff member or log a callback, not keep the customer in a loop.
                  </p>
                </div>
              </section>

              {/* SECTION 5: REDUCING MANUAL REMINDER CALLS */}
              <section id="reducing-manual-reminder-calls" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  REDUCING MANUAL REMINDER CALLS
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    In many small businesses, a receptionist or coordinator spends part of every day phoning customers to remind them of appointments. For example, if a clinic makes 40 reminder calls a day at about two minutes each, that is around 80 minutes of staff time daily. These figures are illustrative, so replace them with your own.
                  </p>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    With automated reminder calls, staff no longer make the routine calls. They deal with the exceptions: customers who asked for a person, requests the AI could not complete, and calls that need a decision. The team spends less time dialling and more time on customers who are in front of them.
                  </p>
                </div>
              </section>

              {/* SECTION 6: BENEFITS OF AUTOMATED APPOINTMENT REMINDER CALLS */}
              <section id="benefits-of-automated-reminders" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  BENEFITS OF AUTOMATED APPOINTMENT REMINDER CALLS
                </h2>
                <div className="space-y-4">
                  <ul className="space-y-3 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Fewer no-shows:</strong> Reminders prompt customers to attend or to cancel in advance.
                    </li>
                    <li>
                      <strong>Fewer empty slots:</strong> Early cancellations give you time to rebook the space.
                    </li>
                    <li>
                      <strong>Less manual work:</strong> Staff stop making routine reminder calls.
                    </li>
                    <li>
                      <strong>Consistent coverage:</strong> Every booking is reminded, not only the ones staff had time for.
                    </li>
                    <li>
                      <strong>Easy two-way response:</strong> Customers can confirm, cancel or reschedule on the same call.
                    </li>
                    <li>
                      <strong>Reliable records:</strong> Every outcome is logged with a status and, where enabled, a transcript.
                    </li>
                    <li>
                      <strong>Scalable volume:</strong> The same system handles a quiet week and a busy season.
                    </li>
                    <li>
                      <strong>Language flexibility:</strong> Multilingual agents can call customers in the language they prefer.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 7: APPOINTMENT REMINDERS ACROSS DIFFERENT INDUSTRIES */}
              <section id="reminders-across-sectors" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  APPOINTMENT REMINDERS ACROSS HEALTHCARE, EDUCATION, SALONS AND SERVICE BUSINESSES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    The basic flow is the same everywhere. What changes is the information the call carries and the care it needs.
                  </p>

                  {/* Table 2: Industry Specific Call Details */}
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-card-border text-xs sm:text-sm uppercase tracking-wider font-bold text-primary-black">
                          <th className="py-3.5 pr-4 pl-0 w-1/5 align-top">Sector</th>
                          <th className="py-3.5 px-4 w-1/4 align-top">Typical appointments</th>
                          <th className="py-3.5 px-4 w-1/3 align-top">What the call covers</th>
                          <th className="py-3.5 pl-4 pr-0 w-1/4 align-top">Extra care</th>
                        </tr>
                      </thead>
                      <tbody className="font-medium text-primary-black text-[15px] sm:text-base">
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Healthcare</td>
                          <td className="py-3.5 px-4 align-top">Consultations, check-ups, diagnostics, follow-ups</td>
                          <td className="py-3.5 px-4 align-top">Date, time, doctor or department, preparation such as documents or fasting instructions, reschedule option</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Share minimal detail, give no clinical advice and route health questions to staff</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Education</td>
                          <td className="py-3.5 px-4 align-top">Counselling sessions, admission interviews, demo classes, parent-teacher meetings</td>
                          <td className="py-3.5 px-4 align-top">Date, time, mode (in person or online), joining details</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Confirm with the correct person, such as a parent or student</td>
                        </tr>
                        <tr className="border-b border-card-border/40">
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Salons and wellness</td>
                          <td className="py-3.5 px-4 align-top">Haircuts, spa sessions, beauty services</td>
                          <td className="py-3.5 px-4 align-top">Service, time, stylist, any deposit or cancellation policy</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Keep the call short and offer easy rescheduling</td>
                        </tr>
                        <tr>
                          <td className="py-3.5 pr-4 pl-0 font-bold align-top">Service businesses</td>
                          <td className="py-3.5 px-4 align-top">Repairs, installations, inspections, home visits</td>
                          <td className="py-3.5 px-4 align-top">Visit window, address, access instructions, technician arrival</td>
                          <td className="py-3.5 pl-4 pr-0 align-top">Confirm the address and a contact number for the visit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 8: MEASURING CONFIRMATION AND CALL-COMPLETION OUTCOMES */}
              <section id="measuring-outcomes" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  MEASURING CONFIRMATION AND CALL-COMPLETION OUTCOMES
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Measure results against a baseline from before automation, such as your no-show rate and the hours staff spent on reminders. Useful metrics include:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li><strong>Call connect rate:</strong> the share of calls that reach a person.</li>
                    <li><strong>Call completion rate:</strong> the share of connected calls where the agent finished the conversation.</li>
                    <li><strong>Confirmation rate:</strong> the share of customers who confirm attendance.</li>
                    <li><strong>Cancellation and reschedule rates:</strong> especially cancellations made with enough notice to refill the slot.</li>
                    <li><strong>No-show rate:</strong> before and after automation, by appointment type.</li>
                    <li><strong>Slot refill rate:</strong> how many released slots were rebooked.</li>
                    <li><strong>Escalation rate:</strong> calls transferred to staff, with reasons.</li>
                    <li><strong>Staff time on reminders:</strong> hours saved per week.</li>
                    <li><strong>Opt-out and complaint rate:</strong> a check on whether the calls are well received.</li>
                  </ul>
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal pt-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Review call samples regularly. A high completion rate does not help if customers are confused, so listen to how the questions land.
                  </p>
                </div>
              </section>

              {/* SECTION 9: LIMITATIONS AND GOOD PRACTICE */}
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
                      <strong>Consent and rules:</strong> Reminders about an existing booking are generally treated as service calls rather than promotional calls, but confirm the rules for number series, calling hours and consent with your telecom provider. In India, that includes TRAI&apos;s regulations and the Digital Personal Data Protection Act, 2023.
                    </li>
                    <li>
                      <strong>Privacy:</strong> Verify you are speaking to the right person before sharing details, and keep voicemail messages minimal, especially in healthcare.
                    </li>
                    <li>
                      <strong>Customers who miss automated messages:</strong> Research suggests some patient groups may overlook automated reminders, so offer an easy way to reach a person.
                    </li>
                    <li>
                      <strong>Calling times:</strong> Call at hours when customers are likely to answer, within permitted calling windows.
                    </li>
                    <li>
                      <strong>Keep calls short:</strong> Give the essentials, ask one clear question and end.
                    </li>
                    <li>
                      <strong>Be transparent:</strong> The agent should say it is an automated assistant.
                    </li>
                    <li>
                      <strong>Human fallback:</strong> Complex, sensitive or emotional calls should transfer to a person.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 10: HOW TO GET STARTED WITH AI APPOINTMENT REMINDERS */}
              <section id="how-to-get-started" className="scroll-mt-32 mb-14">
                <h2
                  className="font-normal uppercase text-primary-black text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-normal mb-6"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  HOW TO GET STARTED WITH AI APPOINTMENT REMINDERS
                </h2>
                <div className="space-y-4">
                  <ol className="space-y-3 pl-5 list-decimal font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal">
                    <li>
                      <strong>Measure your baseline.</strong> Record your current no-show rate, late cancellations and time spent on reminder calls.
                    </li>
                    <li>
                      <strong>Choose a starting group.</strong> Pick one appointment type or location.
                    </li>
                    <li>
                      <strong>Connect your calendar or booking system.</strong> Make sure the AI reads accurate data and writes outcomes back.
                    </li>
                    <li>
                      <strong>Write a short call script.</strong> Include the details, one confirmation question and the cancellation and rescheduling paths.
                    </li>
                    <li>
                      <strong>Set timing and fallbacks.</strong> Decide when to call, how many retries and what happens if nobody answers.
                    </li>
                    <li>
                      <strong>Pilot and listen.</strong> Review calls and fix unclear wording.
                    </li>
                    <li>
                      <strong>Compare with the baseline and expand.</strong> Extend to more appointment types once results are stable.
                    </li>
                  </ol>
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
                  <p
                    className="font-medium text-primary-black text-[16px] sm:text-[18px] leading-[1.4] tracking-normal"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    AI calling for appointment reminders helps businesses confirm attendance, collect clear responses, free slots early and cut the hours staff spend on routine calls. It works best when the booking data is accurate, the script is short, cancellations and rescheduling are built into the call, and people remain available for exceptions. Measure confirmation, completion and no-show rates against your baseline, and expand only when the results hold.
                  </p>
                </div>
              </section>

              {/* SECTION 12: FAQS */}
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
        <BlogNavigation currentSlug="ai-calling-for-appointment-reminders" />
      </main>

      <div className="w-full" style={{ backgroundColor: "var(--color-primary-beige)" }}>
        <ContactSection source="Blog: AI Calling for Appointment Reminders" />
      </div>

      <Footer />
    </div>
  );
}
