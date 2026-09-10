"use client";

import React from "react";
import { motion } from "framer-motion";

const CHECKLIST = [
  "Customized AI agent setup",
  "30–40% cost advantage over comparable solutions",
  "Flexible, Usage-Based Calling Plans",
  "Seamless API & CRM Integrations",
  "Multilingual voice capabilities",
  "Guided onboarding and setup",
  "Dedicated support",
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full max-w-[1440px] mx-auto py-[7%] flex flex-col items-center gap-12 overflow-hidden px-[6%]" 
    >
      {/* Header */}
      <div className="w-full max-w-[1280px] flex flex-col gap-2 mx-auto items-center">
        <h2
          className="w-full text-center font-normal uppercase m-0"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: "0.9",
            color: "var(--color-primary-black)",
          }}
        >
          Pricing Built Around Your Needs
        </h2>
        <p
          className="w-full text-center text-[20px] font-normal m-0"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            lineHeight: "1.4",
            color: "var(--color-primary-black)",
          }}
        >
          Get a plan tailored to your calling volume, workflows, integrations and business requirements.
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
          boxShadow: "inset 6px 6px 12px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
          backgroundColor: "var(--color-primary-beige)",
          borderColor: "var(--color-white)",
        }}
      >
        {/* Checklist */}
        <div className="flex flex-col gap-4 w-full">
          {CHECKLIST.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4" 
            >
              {/* Checkmark icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M5 13L9 17L19 7" stroke="var(--color-primary-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                className="text-[17px] md:text-[19px] font-normal leading-relaxed"
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
          className="flex items-center justify-center h-14 p-4 mt-2 mx-auto rounded-xl outline-2 outline-[color:var(--color-primary-black)] -outline-offset-2 no-underline"
          style={{
            backgroundColor: "var(--color-primary-black)",
            color: "var(--color-secondary-beige)",
          }}
        >
          <span
            className="px-4 text-[17px] md:text-[19px] font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
            }}
          >
            Request Demo
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ overflow: "hidden" }}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="var(--color-secondary-beige)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
