"use client";

import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Effortless From Day One",
    description: "We handle the complexity behind setup so your team can get started without a technical learning curve.",
  },
  {
    title: "Quality Service",
    description: "Deliver highly personalized, on-brand interactions across thousands of calls without ever sacrificing the quality of your customer experience.",
  },
  {
    title: "Setup, Training & Guidance",
    description: "From initial setup to going live, our team helps you configure, launch, and get the most from your voice campaigns.",
  },
  {
    title: "Consistent and Error-Reduced",
    description: "Automate repetitive calling workflows with consistent conversations and accurate capture of call information, reducing the errors that come with manual processes.",
  },
];

export default function MoreThanDialerSection() {
  return (
    <section
      className="flex flex-col items-start" 
    >
      {/* Header */}
      <div className="w-full mx-auto px-20 pt-20 pb-0 flex flex-col items-center gap-12">
        <div className="w-full flex flex-col gap-2">
          <h2
            className="w-full text-center font-normal uppercase"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: "1.1",
              color: "var(--color-primary-black)",
            }}
          >
            More Than Just A Voice AI Tool
          </h2>
          <p
            className="w-[1008px] max-w-full mx-auto text-center text-xl font-normal leading-7"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            From getting started to scaling your outreach, we provide the technology and support to make voice automation effortless.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full mx-auto px-20 pt-12 pb-14 flex items-center gap-20">
        <div className="flex-1 py-8 flex items-start gap-8">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ 
                backgroundColor: "var(--color-primary-black)",
                borderColor: "var(--color-primary-black)",
                boxShadow: "none"
              }}
              transition={{ duration: 0.3 }}
              className="group flex-1 self-stretch flex flex-col gap-3 pt-6 pb-6 px-8 rounded-xl border border-solid cursor-pointer"
              style={{
                boxShadow: "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
                backgroundColor: "var(--color-primary-beige)",
                borderColor: "var(--color-white)",
              }}
            >
              <div className="w-full flex-1 flex flex-col gap-4">
                <h3
                  className="font-normal m-0 text-[30px] group-hover:text-[44px] text-primary-black group-hover:text-secondary-beige transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    lineHeight: "1.1",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-base group-hover:text-[22px] font-normal leading-relaxed group-hover:leading-snug m-0 text-primary-black group-hover:text-secondary-beige transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
