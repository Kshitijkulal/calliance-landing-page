"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "Define Your Goal",
    description: "Give your AI agent the specific knowledge, scripts, and conversation handling protocols to fit your business goals.",
  },
  {
    number: "2",
    title: "Customize the Voice",
    description: "Choose the tone, language, and personality that perfectly aligns with your brand identity.",
  },
  {
    number: "3",
    title: "Launch At Scale",
    description: "Select your audience, schedule the deployment, and initiate thousands of simultaneous calls instantly.",
  },
  {
    number: "4",
    title: "Track and Optimize",
    description: "Monitor real-time transcripts, analyze call outcomes, and use performance insights to continually optimize your ROI.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center pt-20 pb-0 gap-8 w-full"
      style={{
        backgroundColor: "var(--color-primary-beige)",
      }}
    >
      {/* Header — responsive wrap layout */}
      <div
        className="w-full px-4 lg:px-20 flex flex-wrap justify-between items-start gap-8"
      >
        <h2
          className="flex-[1_1_400px] font-normal uppercase m-0"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "1.1",
            color: "var(--color-primary-black)",
          }}
        >
          How It Works
        </h2>
        <p
          className="flex-[1_1_500px] font-normal leading-relaxed m-0"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontFamily: "var(--font-manrope), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          From your first agent to your first full-scale campaign, we handle the technical heavy lifting. We guide you through the entire setup process so your team can focus on driving revenue not figuring out the software.
        </p>
      </div>

      {/* Step Cards */}
      <div
        className="w-full px-4 lg:px-20 flex flex-wrap justify-center gap-6"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.number}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex-[1_1_280px] min-w-[280px] p-6 rounded-xl flex flex-col gap-4"
            style={{
              boxShadow: "0px 6px 40px 0px rgba(219,220,220,0.18)",
              backgroundColor: "var(--color-white)",
            }}
          >
            {/* Title + Number Badge */}
            <div className="flex justify-between items-start gap-3">
              <h3
                className="text-2xl font-normal leading-7 m-0 flex-1"
                style={{
                  fontFamily: "var(--font-bebas-neue), sans-serif",
                  color: "var(--color-primary-black)",
                }}
              >
                {step.title}
              </h3>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(212,212,216,0.3)",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "'Geist', var(--font-manrope), sans-serif",
                    color: "var(--color-primary-black)",
                  }}
                >
                  {step.number}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base font-normal leading-relaxed m-0"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Full-width Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative min-h-[400px] lg:min-h-[600px] mt-8"
      >
        <Image
          src="/how_it_works_full.png"
          alt="AICaller Full Interface"
          fill
          className="object-cover object-top"
          unoptimized
        />
      </motion.div>
    </section>
  );
}
