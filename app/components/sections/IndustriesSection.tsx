"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    title: "FinTech",
    description: "Accelerate collections and handle high-volume payment reminders or service updates with secure AI calling.",
  },
  {
    title: "Ed-Tech",
    description: "Automate admissions follow-ups, fee reminders, and counselling calls across multiple languages to drive higher enrollment.",
  },
  {
    title: "Real Estate",
    description: "Instantly qualify leads, schedule callbacks, and follow up with prospects to keep your sales pipeline moving automatically.",
  },
  {
    title: "Healthcare",
    description: "Automate appointment reminders, patient follow-ups and routine customer outreach with personalized voice conversations.",
  },
  {
    title: "Retail & D2C",
    description: "Drive repeat purchases by managing order confirmations, feedback calls, and customer re-engagement at scale.",
  },
  {
    title: "Logistics",
    description: "Eliminate delivery bottlenecks by automating confirmations, real-time customer updates, and instant rescheduling calls.",
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
    <section
      className="w-full mx-auto py-20 flex flex-col gap-20 overflow-hidden" 
    >
      {/* Header — split layout */}
      <div className="flex items-start gap-8">
        <div className="flex-1 flex items-start gap-12">
          <div className="flex-1">
            <h2
              className="font-normal uppercase"
              style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(32px, 5vw, 60px)",
                lineHeight: "1.1",
                color: "var(--color-primary-black)",
              }}
            >
              How Leading Businesses Automate Customer Conversations
            </h2>
          </div>
          <div className="w-[556px] max-w-full">
            <p
              className="text-xl font-normal leading-7"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            >
              From real estate to retail, see how custom AI voice agents are solving the biggest communication bottlenecks in every industry
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Industry Cards */}
      <div className="w-[1280px] max-w-full flex items-center gap-6 overflow-hidden">
        
        {/* Left Scroll Arrow */}
        {scrollPosition === "right" && (
          <motion.button
            onClick={handleScrollLeft}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-3xl border-none cursor-pointer flex items-center justify-center shrink-0"
            style={{
              backgroundColor: "rgba(113,113,122,0.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}

        <div
          className="flex-1 h-[320px] relative overflow-hidden" 
        >
          <div
            ref={scrollRef}
            className="absolute inset-0 h-[320px] flex items-center gap-6 overflow-x-auto overflow-y-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {INDUSTRIES.map((industry) => (
              <motion.div
                key={industry.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[320px] min-w-[320px] self-stretch px-6 pt-6 pb-4 rounded-xl flex flex-col items-start gap-3 overflow-hidden"
                style={{
                  boxShadow: "0px 4px 20px 0px rgba(255,91,4,0.10)",
                  backgroundColor: "var(--color-secondary-beige)",
                }}
              >
                <div className="w-full py-3 rounded-sm flex flex-col gap-4">
                  {/* Icon */}
                  <div
                    className="p-3.5 rounded-[60px] inline-flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-primary-black)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="var(--color-secondary-beige)"/>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[30px] font-normal leading-[36px]"
                    style={{
                      fontFamily: "var(--font-bebas-neue), sans-serif",
                      color: "var(--color-primary-black)",
                    }}
                  >
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-lg font-normal leading-6"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      color: "var(--color-primary-black)",
                    }}
                  >
                    {industry.description}
                  </p>
                </div>
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
            style={{
              backgroundColor: "rgba(113,113,122,0.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </div>
    </section>
  );
}
