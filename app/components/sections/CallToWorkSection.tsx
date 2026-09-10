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

export default function CallToWorkSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCardsPerPage = () => {
      let newCardsPerPage = 3;
      if (window.innerWidth < 768) {
        newCardsPerPage = 1;
      } else if (window.innerWidth < 1024) {
        newCardsPerPage = 2;
      }
      setCardsPerPage(newCardsPerPage);
      
      const newTotalPages = newCardsPerPage === 3 ? 4 : newCardsPerPage === 2 ? 4 : USE_CASES.length;
      setCurrentPage((prev) => (prev >= newTotalPages ? Math.max(0, newTotalPages - 1) : prev));
    };
    
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = cardsPerPage === 3 ? 4 : cardsPerPage === 2 ? 4 : USE_CASES.length;

  const getPageCards = (pageIndex: number) => {
    if (cardsPerPage === 3) {
      const offsets = [0, 3, 4, 5];
      const start = offsets[pageIndex] || 0;
      return USE_CASES.slice(start, start + 3);
    } else if (cardsPerPage === 2) {
      const offsets = [0, 2, 4, 6];
      const start = offsets[pageIndex] || 0;
      return USE_CASES.slice(start, start + 2);
    } else {
      return USE_CASES.slice(pageIndex, pageIndex + 1);
    }
  };


  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages, currentPage, isHovered]);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="use-cases"
      className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-8 lg:px-[6%]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 mx-auto max-w-[1008px]">
        <h2
          className="w-full text-center font-normal uppercase m-0 font-bebas text-[clamp(32px,5vw,60px)] leading-[1.1] text-primary-black"
        >
          Put Every Customer Call To Work
        </h2>
        <p
          className="w-full text-center text-lg md:text-xl font-normal leading-7 m-0 mt-4 font-manrope text-primary-black"
        >
          Automate the routine conversations your team handles every day from lead qualification and follow-ups to reminders and service calls.
        </p>
      </div>

      {/* Slideshow Container */}
      <div 
        className="w-full max-w-[1280px] mx-auto mt-10 md:mt-14 flex flex-col items-center gap-6 md:gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="w-full flex items-center justify-between gap-1 sm:gap-2 md:gap-8">
          {/* Left Arrow */}
          <motion.button
            onClick={handlePrev}
            initial={false}
            animate={{ 
              opacity: currentPage > 0 ? 1 : 0,
              scale: currentPage > 0 ? 1 : 0.8
            }}
            whileHover={currentPage > 0 ? { scale: 1.05 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-none flex items-center justify-center shrink-0 z-10 transition-colors bg-[#71717a1a] text-primary-black ${currentPage > 0 ? "cursor-pointer pointer-events-auto" : "cursor-default pointer-events-none"}`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          {/* Cards Track */}
          <div className="flex-1 overflow-hidden relative px-1 py-4">
            <motion.div
              className="flex"
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1.5 }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex items-stretch justify-center gap-6">
                  {getPageCards(pageIndex).map((useCase) => (
                    <div
                      key={useCase.title}
                      className="flex-1 w-full md:w-auto md:min-w-[280px] max-w-[400px] px-4 md:px-6 py-8 md:py-10 rounded-[32px] flex flex-col items-center gap-4 md:gap-6 border border-solid border-white bg-primary-beige shadow-[inset_6px_6px_12px_rgba(0,0,0,0.04),inset_-6px_-6px_8px_rgba(255,255,255,1),0px_6px_40px_0px_rgba(219,220,220,0.18)]"
                    >
                      {/* Icon */}
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 bg-primary-black text-secondary-beige"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-7 md:h-7">
                          <path
                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
                        <h3
                          className="m-0 uppercase font-bebas text-[24px] md:text-[30px] leading-[1.1] text-primary-black"
                        >
                          {useCase.title}
                        </h3>
                        <p
                          className="m-0 text-[15px] md:text-[17px] font-normal font-manrope leading-[1.5] text-primary-black"
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
              opacity: currentPage < totalPages - 1 ? 1 : 0,
              scale: currentPage < totalPages - 1 ? 1 : 0.8
            }}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.95 } : {}}
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-none flex items-center justify-center shrink-0 z-10 transition-colors bg-[#71717a1a] text-primary-black ${currentPage < totalPages - 1 ? "cursor-pointer pointer-events-auto" : "cursor-default pointer-events-none"}`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-2">
            {(() => {
              const dots = [];
              let grayCounter = 0;
              for (let i = 0; i < totalPages; i++) {
                if (i === currentPage) {
                  dots.push({ id: "black", type: "active", pageIndex: i });
                } else {
                  dots.push({ id: `gray-${grayCounter}`, type: "inactive", pageIndex: i });
                  grayCounter++;
                }
              }
              return dots.map((dot) => (
                <motion.button
                  layout
                  key={dot.id}
                  onClick={() => setCurrentPage(dot.pageIndex)}
                  className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full border-none p-0 cursor-pointer ${dot.type === "active" ? "bg-primary-black" : "bg-[#71717a33]"}`}
                  transition={{ type: "tween", ease: "easeInOut", duration: 1.5 }}
                  aria-label={`Go to slide ${dot.pageIndex + 1}`}
                />
              ));
            })()}
          </div>
        )}

      </div>
    </section>
  );
}

