"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "What can I use the platform for?",
    answer: "Automate outbound conversations such as lead qualification, customer follow-ups, appointment reminders, payment collections, targeted re-engagement, surveys and other high-volume calling workflows.",
  },
  {
    question: "Can I create an AI agent specific to my business?",
    answer: "Yes. You can build fully customized AI voice agents tailored to your specific business workflows, scripts, and conversation handling protocols.",
  },
  {
    question: "Can the AI speak multiple languages?",
    answer: "Absolutely. Our AI agents support multiple languages with natural pronunciation and cultural awareness, enabling you to connect with customers in their preferred language.",
  },
  {
    question: "Can I make multiple calls at the same time?",
    answer: "Yes. Our platform supports simultaneous calling at scale, allowing you to run thousands of concurrent calls without any degradation in quality.",
  },
  {
    question: "Can I integrate it with my existing systems?",
    answer: "Yes. We offer seamless API and CRM integrations with popular platforms, allowing call data and outcomes to sync automatically with your existing workflows.",
  },
  {
    question: "How do I know what happened on each call?",
    answer: "Every call is recorded, transcribed, and analyzed. You get detailed call summaries, sentiment analysis, and outcome tracking through our unified dashboard.",
  },
  {
    question: "Do I need technical expertise to get started?",
    answer: "Not at all. We provide guided onboarding and setup assistance. Our team helps you configure, launch, and optimize your voice campaigns from day one.",
  },
  {
    question: "Is my customer data secure?",
    answer: "Yes. We use enterprise-grade encryption, comply with industry regulations, and conduct regular security audits to ensure your data is always protected.",
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible, usage-based calling plans tailored to your volume and requirements. Contact us for a customized quote that fits your business needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faqs"
      className="w-full mx-auto py-20 flex flex-col items-center gap-16"
    >
      {/* Header */}
      <div className="w-[1280px] max-w-full flex flex-col items-center gap-2">
        <h2
          className="w-full text-center uppercase"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            lineHeight: "1.1",
            fontWeight: 400,
            color: "var(--color-primary-black)",
          }}
        >
          Have Questions? We Have You Covered
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-[900px] max-w-full flex flex-col gap-4 px-4 md:px-0">
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
                <div className="h-11 flex items-center">
                  <h3
                    className="flex-1 text-[30px] leading-[36px]"
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
                  className="text-lg leading-6"
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
                className="w-full p-4 rounded-xl flex flex-col justify-center cursor-pointer"
                style={{
                  backgroundColor: "rgba(212,212,216,0.2)",
                  boxShadow: "0px 4px 20px 0px rgba(255,91,4,0.10)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex-1 text-xl font-semibold tracking-tight"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      color: "var(--color-primary-black)",
                    }}
                  >
                    {item.question}
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
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
