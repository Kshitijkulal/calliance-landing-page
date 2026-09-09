"use client";

import React, { useState, useEffect } from "react";
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

// Pad to 12 items to ensure exactly 4 pages (dots) when showing 3 cards per page on desktop
const DISPLAY_USE_CASES = [
  ...USE_CASES,
  { ...USE_CASES[0], title: USE_CASES[0].title + " " }, // slight title change for unique key
  { ...USE_CASES[1], title: USE_CASES[1].title + " " },
  { ...USE_CASES[2], title: USE_CASES[2].title + " " },
  { ...USE_CASES[3], title: USE_CASES[3].title + " " },
];

export default function CallToWorkSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(DISPLAY_USE_CASES.length / cardsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="use-cases"
      className="py-20 px-[6%]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 mx-auto max-w-[1008px]">
        <h2
          className="w-full text-center font-normal uppercase m-0"
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
          className="w-full text-center text-xl font-normal leading-7 m-0 mt-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          Automate the routine conversations your team handles every day from lead qualification and follow-ups to reminders and service calls.
        </p>
      </div>

      {/* Slideshow Container */}
      <div className="w-full max-w-[1280px] mx-auto mt-14 flex flex-col items-center gap-8">
        
        <div className="w-full flex items-center justify-between gap-4 md:gap-8">
          {/* Left Arrow */}
          <motion.button
            onClick={handlePrev}
            initial={false}
            animate={{ 
              opacity: currentPage > 0 ? 1 : 0.4,
              scale: currentPage > 0 ? 1 : 0.95
            }}
            whileHover={currentPage > 0 ? { scale: 1.05 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
            disabled={currentPage === 0}
            className="w-12 h-12 rounded-3xl border-none flex items-center justify-center shrink-0 z-10 transition-colors"
            style={{
              backgroundColor: "rgba(113,113,122,0.1)",
              cursor: currentPage > 0 ? "pointer" : "default",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          {/* Cards Track */}
          <div className="flex-1 overflow-hidden relative px-1 py-4">
            <motion.div
              className="flex"
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex items-stretch justify-center gap-6">
                  {DISPLAY_USE_CASES.slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage).map((useCase) => (
                    <div
                      key={useCase.title}
                      className="flex-1 min-w-[280px] max-w-[400px] px-6 py-10 rounded-[32px] flex flex-col items-center gap-6 border border-solid"
                      style={{
                        boxShadow: "inset 6px 6px 12px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
                        backgroundColor: "var(--color-primary-beige)",
                        borderColor: "var(--color-white)",
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-primary-black)",
                        }}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                            stroke="var(--color-secondary-beige)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col items-center gap-3 text-center">
                        <h3
                          className="m-0 uppercase"
                          style={{
                            fontFamily: "var(--font-bebas-neue), sans-serif",
                            fontSize: "30px",
                            lineHeight: "1.1",
                            color: "var(--color-primary-black)",
                          }}
                        >
                          {useCase.title}
                        </h3>
                        <p
                          className="m-0 text-[17px] font-normal"
                          style={{
                            fontFamily: "var(--font-manrope), sans-serif",
                            lineHeight: "1.5",
                            color: "var(--color-primary-black)",
                          }}
                        >
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={handleNext}
            initial={false}
            animate={{ 
              opacity: currentPage < totalPages - 1 ? 1 : 0.4,
              scale: currentPage < totalPages - 1 ? 1 : 0.95
            }}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.95 } : {}}
            disabled={currentPage === totalPages - 1}
            className="w-12 h-12 rounded-3xl border-none flex items-center justify-center shrink-0 z-10 transition-colors"
            style={{
              backgroundColor: "rgba(113,113,122,0.1)",
              cursor: currentPage < totalPages - 1 ? "pointer" : "default",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className="w-2.5 h-2.5 rounded-full border-none p-0 cursor-pointer transition-colors duration-300"
                style={{
                  backgroundColor: currentPage === idx ? "var(--color-primary-black)" : "rgba(113,113,122,0.2)",
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

