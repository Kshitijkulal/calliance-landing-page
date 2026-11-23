"use client";

import React from "react";
import { motion } from "framer-motion";

const CHECKLIST = [
  "Custom AI Voice Agents for Your Business, Available 24/7 for Inbound and Outbound Calls",
  "30–40% Cost Advantage Over Comparable AI Calling Solutions",
  "Flexible, Pay-for-What-You-Use AI Calling Plans for Inbound and Outbound Calls",
  "Seamless AI Voice Agent API & CRM Integrations",
  "Natural Multilingual AI Conversations in 65+ Native Languages",
  "Guided Onboarding and Setup",
  "Ongoing Expert Support & Campaign Optimization",
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full max-w-[1440px] mx-auto pt-4 sm:pt-6 md:pt-[4%] pb-6 sm:pb-8 md:pb-[4%] flex flex-col items-center gap-6 sm:gap-8 md:gap-12 overflow-hidden px-[6%]"
    >
      {/* Header */}
      <div className="w-full max-w-[1280px] flex flex-col gap-3 md:gap-4 mx-auto items-center">
        <h2
          className="w-full text-center font-normal uppercase m-0"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: "0.9",
            color: "var(--color-primary-black)",
          }}
        >
          AI Calling Software Pricing Built Around Your Needs
        </h2>
        <p
          className="w-full text-center text-base sm:text-lg md:text-[20px] font-normal m-0"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            lineHeight: "1.4",
            color: "var(--color-primary-black)",
          }}
        >
          Get an AI calling plan tailored to your inbound and outbound calling
          volume, workflows, integrations, and business requirements.
        </p>
      </div>

      {/* Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[555px] px-6 py-8 rounded-xl flex flex-col items-start gap-8 border border-solid mx-auto"
        style={{
          boxShadow:
            "inset 6px 6px 12px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
          backgroundColor: "var(--color-primary-beige)",
          borderColor: "var(--color-white)",
        }}
      >
        {/* Checklist */}
        <div className="flex flex-col gap-4 w-full">
          {CHECKLIST.map((item) => (
            <div key={item} className="flex items-center gap-4">
              {/* Checkmark icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="var(--color-primary-black)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-base md:text-[19px] font-normal leading-relaxed"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  color: "var(--color-primary-black)",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 gap-3 mt-2 mx-auto rounded-xl outline-2 outline-[color:var(--color-primary-black)] -outline-offset-2 no-underline"
          style={{
            backgroundColor: "var(--color-primary-black)",
            color: "var(--color-secondary-beige)",
          }}
        >
          <span
            className="text-sm md:text-base font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
            }}
          >
            Request an AI Calling Demo
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ overflow: "hidden" }}
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="var(--color-secondary-beige)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
