"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    title: "FinTech",
    description:
      "Accelerate collections and handle high-volume payment reminders or service updates with secure AI calling.",
  },
  {
    title: "Ed-Tech",
    description:
      "Automate admissions follow-ups, fee reminders, and counselling calls across multiple languages to drive higher enrollment.",
  },
  {
    title: "Real Estate",
    description:
      "Instantly qualify leads, schedule callbacks, and follow up with prospects to keep your sales pipeline moving automatically.",
  },
  {
    title: "Healthcare",
    description:
      "Automate appointment reminders, patient follow-ups and routine customer outreach with personalized voice conversations.",
  },
  {
    title: "Retail & D2C",
    description:
      "Drive repeat purchases by managing order confirmations, feedback calls, and customer re-engagement at scale.",
  },
  {
    title: "Logistics",
    description:
      "Eliminate delivery bottlenecks by automating confirmations, real-time customer updates, and instant rescheduling calls.",
  },
];

export default function IndustriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<"left" | "right">("left");

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: "smooth" });
      setScrollPosition("right");
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setScrollPosition("left");
    }
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto py-[6%] flex flex-col gap-[5%] overflow-hidden px-[4%]">

      {/* Header — split layout */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-[5%]">
        {/* Heading — takes ~half width on desktop */}
        <div className="w-full md:w-[45%]">
          <h2
            className="font-normal uppercase m-0"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              fontSize: "clamp(28px, 4.5vw, 60px)",
              lineHeight: "1.1",
              color: "var(--color-primary-black)",
            }}
          >
            How Leading Businesses Automate Customer Conversations
          </h2>
        </div>

        {/* Description — right side */}
        <div className="w-full md:w-[45%] flex items-center">
          <p
            className="text-base sm:text-lg font-normal leading-relaxed m-0"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            From real estate to retail, see how custom AI voice agents are solving the biggest
            communication bottlenecks in every industry
          </p>
        </div>
      </div>

      {/* Scrollable Industry Cards Row */}
      <div className="w-full flex items-center gap-3 sm:gap-4 overflow-hidden">

        {/* Left Scroll Arrow */}
        {scrollPosition === "right" && (
          <motion.button
            onClick={handleScrollLeft}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-3xl border-none cursor-pointer flex items-center justify-center shrink-0"
            style={{ backgroundColor: "var(--color-off-white)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19L8 12L15 5"
                stroke="var(--color-primary-black)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}

        {/* Cards Scroll Container */}
        <div className="flex-1 relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto overflow-y-hidden pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              .industries-scroll::-webkit-scrollbar { display: none; }
            `}</style>

            {INDUSTRIES.map((industry) => (
              <motion.div
                key={industry.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[75vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] min-w-[220px] max-w-[320px] shrink-0 flex flex-col gap-4 p-[6%] sm:p-[5%] rounded-2xl"
                style={{
                  boxShadow: "0px 4px 20px 0px rgba(255, 91, 4, 0.10)",
                  backgroundColor: "var(--color-white)",
                }}
              >
                {/* Icon */}
                <div
                  className="p-3 rounded-full inline-flex items-center justify-center self-start"
                  style={{ backgroundColor: "var(--color-primary-black)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                      stroke="var(--color-secondary-beige)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  className="font-normal m-0"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    lineHeight: "1.2",
                    color: "var(--color-primary-black)",
                  }}
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm sm:text-base font-normal leading-relaxed m-0"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    color: "var(--color-primary-black)",
                  }}
                >
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Scroll Arrow */}
        {scrollPosition === "left" && (
          <motion.button
            onClick={handleScrollRight}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-3xl border-none cursor-pointer flex items-center justify-center shrink-0"
            style={{ backgroundColor: "var(--color-off-white)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5L16 12L9 19"
                stroke="var(--color-primary-black)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </div>
    </section>
  );
}
