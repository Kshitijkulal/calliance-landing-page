"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "What can I use the platform for?",
    answer: "Automate outbound conversations such as lead qualification, customer follow-ups, appointment reminders, payment collections, targeted re-engagement, surveys and other high-volume calling workflows.",
  },
  {
    question: "Can I create an AI agent specific to my business?",
    answer: "Yes. Agents can be customized around your business goals, conversation flows, knowledge, tone and customer interactions. Yes. Every AI agent is fully customized around your specific business goals, knowledge base, conversation flows, and brand tone to ensure highly personalized customer interactions.",
  },
  {
    question: "Can the AI speak multiple languages?",
    answer: "Yes. The platform supports multilingual conversations, allowing you to reach customers in the languages they are most comfortable speaking.",
  },
  {
    question: "Can I make multiple calls at the same time?",
    answer: "Yes. Run simultaneous outbound calls to reach large customer lists without having to scale your calling team one person at a time. Yes. You can launch thousands of simultaneous outbound calls to reach large customer lists instantly, expanding your outreach capacity without adding headcount.",
  },
  {
    question: "Can I integrate it with my existing systems?",
    answer: "Yes. We architect the platform to integrate directly into your existing CRM, workflows, and business processes so your data stays perfectly synced.",
  },
  {
    question: "How do I know what happened on each call?",
    answer: "Every interaction is automatically captured. Your team gets real-time access to call transcripts, intent analysis, conversation outcomes, and clear follow-up steps right in your dashboard.",
  },
  {
    question: "Do I need technical expertise to get started?",
    answer: "Not necessarily. We help you set up your agents and calling workflows, with guidance throughout the onboarding process so you can get started without having to figure everything out yourself. No technical expertise is required. Our team provides white-glove onboarding, handling the configuration, agent setup, and campaign deployment so you can go live effortlessly.",
  },
  {
    question: "Is my customer data secure?",
    answer: "Security is built into the platform to help protect your business and customer data throughout your calling workflows. Absolutely. Enterprise-grade security is built directly into our infrastructure to ensure your proprietary business information and customer data remain strictly protected at all times.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is customized based on your business requirements, calling volume, workflows and deployment needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faqs"
      className="w-full mx-auto pt-4 md:pt-8 pb-12 md:pb-8 flex flex-col items-center gap-16"
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
