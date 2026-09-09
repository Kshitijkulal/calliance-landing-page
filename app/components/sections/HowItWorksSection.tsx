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
        className="w-full px-4 lg:px-20 flex flex-wrap justify-center gap-10"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.number}
            whileHover={{ 
              backgroundColor: "var(--color-primary-black)",
              borderColor: "var(--color-primary-black)",
              boxShadow: "none"
            }}
            transition={{ duration: 0.3 }}
            className="group flex-[1_1_280px] min-w-[280px] pt-8 pb-8 px-7 rounded-xl flex flex-col gap-2 border border-solid cursor-pointer"
            style={{
              boxShadow: "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
              backgroundColor: "var(--color-primary-beige)",
              borderColor: "var(--color-white)",
            }}
          >
            {/* Title + Number Badge */}
            <div className="flex justify-between items-center gap-3">
              <h3
                className="font-normal m-0 text-[26px] group-hover:text-[30px] text-primary-black group-hover:text-secondary-beige transition-all duration-300 flex-1 pr-4 group-hover:pr-0 leading-[1.1] group-hover:leading-[1.0]"
                style={{
                  fontFamily: "var(--font-bebas-neue), sans-serif",
                }}
              >
                {step.title}
              </h3>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-solid transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden"
                style={{
                  boxShadow: "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 20px 0px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "var(--color-primary-beige)",
                  borderColor: "var(--color-white)",
                }}
              >
                <span
                  className="leading-none flex items-center justify-center"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "var(--font-manrope), sans-serif",
                    color: "var(--color-primary-black)",
                    marginTop: "2px"
                  }}
                >
                  {step.number}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[16px] group-hover:text-[18px] font-normal leading-[1.3] group-hover:leading-[1.15] m-0 text-primary-black group-hover:text-secondary-beige transition-all duration-300 pr-6 group-hover:pr-0"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
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
