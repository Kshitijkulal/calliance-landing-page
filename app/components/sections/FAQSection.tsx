"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "What can I use Callience platform for?",
    answer:
      "Callience AI voice agents handle inbound calls, such as customer enquiries and lead capture, and outbound calls, such as lead qualification, follow-ups, appointment reminders, payment reminders, re-engagement and surveys, for enterprises and MSMEs.",
  },
  {
    question: "Can the AI handle inbound calls?",
    answer:
      "Yes. Callience AI voice agents answer inbound calls 24/7, including after hours, and handle multiple inbound calls at the same time, so customers never wait in a queue.",
  },
  {
    question: "Can the AI handle multiple calls at the same time?",
    answer:
      "Yes. You can launch thousands of simultaneous outbound calls to reach large customer lists instantly, and the AI handles multiple inbound calls at the same time, expanding your capacity without adding headcount.",
  },
  {
    question: "Do I need technical expertise to set up an AI voice agent?",
    answer:
      "No technical expertise is required. Our team provides white-glove onboarding, handling configuration, AI voice agent setup, and campaign deployment so you can go live effortlessly.",
  },
  {
    question: "Is my customer data secure with an AI voice agent?",
    answer:
      "Yes. Your business and customer data is encrypted and stays under your control, protecting your data privacy. Access and decryption are restricted to you and the authorized identities you choose.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faqs"
      className="w-full mx-auto py-8 sm:py-12 md:py-16 flex flex-col items-center gap-6 sm:gap-8 md:gap-16"
    >
      {/* Header */}
      <div className="w-[90%] md:w-[80%] lg:w-[60%] flex flex-col items-center gap-2">
        <h2
          className="w-full text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontWeight: 400,
            color: "var(--color-primary-black)",
          }}
        >
          Have Questions? We Have You Covered
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] flex flex-col gap-4">
        {FAQ_ITEMS.map((item, index) => (
          <div key={item.question}>
            {index === openIndex ? (
              /* Expanded Item */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full py-4 px-6 rounded-tl-xl rounded-tr-xl rounded-bl-xl flex flex-col gap-6 cursor-pointer"
                style={{
                  backgroundColor: "var(--color-primary-black)",
                  boxShadow: "0px 4px 20px 0px rgba(219,220,220,0.10)",
                }}
                onClick={() => setOpenIndex(-1)}
              >
                <div className="py-2 flex items-center">
                  <h3
                    className="flex-1 text-xl sm:text-2xl md:text-3xl leading-tight"
                    style={{
                      fontFamily: "var(--font-bebas-neue), sans-serif",
                      fontWeight: 400,
                      color: "var(--color-secondary-beige)",
                    }}
                  >
                    {item.question}
                  </h3>
                </div>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    fontWeight: 400,
                    fontFamily: "var(--font-manrope), sans-serif",
                    color: "var(--color-secondary-beige)",
                  }}
                >
                  {item.answer}
                </p>
              </motion.div>
            ) : (
              /* Collapsed Item */
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setOpenIndex(index)}
                className="w-full p-4 rounded-xl flex flex-col justify-center cursor-pointer border border-solid"
                style={{
                  backgroundColor: "var(--color-primary-beige)",
                  borderColor: "var(--color-white)",
                  boxShadow: "inset 6px 6px 12px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex-1 text-base sm:text-lg md:text-xl font-semibold tracking-tight"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      color: "var(--color-primary-black)",
                    }}
                  >
                    {item.question}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                    <path d="M12 5V19M5 12H19" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
