"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const USE_CASES = [
  {
    title: "Payment Reminders",
    description: "Proactively reach customers about pending payments to improve cash flow before accounts become overdue",
  },
  {
    title: "Lead Qualification",
    description: "Identify high-intent prospects and move them to the next step automatically.",
  },
  {
    title: "Lead Follow-Ups",
    description: "Ensure consistent outreach so no promising pipeline opportunity goes cold.",
  },
  {
    title: "Appointment Reminders",
    description: "Confirm bookings and reduce costly no-shows with timely automated calls",
  },
  {
    title: "Customer Re-engagement",
    description: "Reconnect with inactive customers and automatically bring them back into your sales funnel.",
  },
  {
    title: "Real Estate Outreach",
    description: "Qualify property leads, schedule site visits and keep prospects moving through the pipeline.",
  },
  {
    title: "Admissions Outreach",
    description: "Reach students and parents for admissions follow-ups, counselling and timely updates.",
  },
  {
    title: "Renewals & Retention",
    description: "Reach customers before renewals and turn timely conversations into guaranteed retention.",
  },
];

export default function CallToWorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  return (
    <section
      id="use-cases"
      className="py-20"
    >
      {/* Header */}
      <div className="p-0 flex flex-col items-center gap-1.5">
        <h2
          className="w-full text-center font-normal uppercase"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            lineHeight: "1.1",
            color: "var(--color-primary-black)",
          }}
        >
          Put Every Customer Call To Work
        </h2>
        <p
          className="w-[1008px] max-w-full text-center text-xl font-normal leading-7"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          Automate the routine conversations your team handles every day from lead qualification and follow-ups to reminders and service calls.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="w-full mx-auto mt-14 flex flex-col items-center gap-12 overflow-hidden">
        <div className="w-full p-0 flex items-center gap-6">
          {/* Left Scroll Arrow */}
          <motion.button
            onClick={handleScrollLeft}
            animate={{ opacity: canScrollLeft ? 1 : 0, scale: canScrollLeft ? 1 : 0.8 }}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            className="p-3 rounded-3xl border-none flex items-center justify-center shrink-0"
            style={{
              backgroundColor: "rgba(113,113,122,0.1)",
              cursor: canScrollLeft ? "pointer" : "default",
              pointerEvents: canScrollLeft ? "auto" : "none",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <div
            className="flex-1 h-[240px] relative overflow-hidden" 
          >
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="absolute inset-0 h-[240px] flex items-center gap-6 overflow-x-auto overflow-y-hidden"
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
              {USE_CASES.map((useCase) => (
                <motion.div
                  key={useCase.title}
                  whileHover={{ y: -4, boxShadow: "0px 8px 30px rgba(219,220,220,0.25)" }}
                  transition={{ duration: 0.2 }}
                  className="w-[384px] min-w-[384px] p-6 rounded-3xl flex flex-col items-center gap-4 outline-1 outline-[rgba(0,0,0,0.06)] -outline-offset-1"
                  style={{
                    boxShadow: "0px 6px 20px 0px rgba(219,220,220,0.10)",
                    backgroundColor: "var(--color-secondary-beige)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="p-3.5 rounded-[60px] flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-primary-black)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="var(--color-secondary-beige)"/>
                    </svg>
                  </div>

                  {/* Title */}
                  <div className="text-center">
                    <h3
                      className="text-[30px] font-normal leading-[36px]"
                      style={{
                        fontFamily: "var(--font-bebas-neue), sans-serif",
                        color: "var(--color-primary-black)",
                      }}
                    >
                      {useCase.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-center text-lg font-normal leading-6"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      color: "var(--color-primary-black)",
                    }}
                  >
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Scroll Arrow */}
          <motion.button
            onClick={handleScrollRight}
            animate={{ opacity: canScrollRight ? 1 : 0, scale: canScrollRight ? 1 : 0.8 }}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
            className="p-3 rounded-3xl border-none flex items-center justify-center shrink-0"
            style={{
              backgroundColor: "rgba(113,113,122,0.1)",
              cursor: canScrollRight ? "pointer" : "default",
              pointerEvents: canScrollRight ? "auto" : "none",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
