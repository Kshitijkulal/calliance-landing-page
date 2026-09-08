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
              whileHover={{ y: -6, boxShadow: "0px 8px 50px rgba(219,220,220,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-1 self-stretch p-4 rounded-xl flex flex-col items-start gap-3 overflow-hidden"
              style={{
                boxShadow: "0px 6px 40px 0px rgba(219,220,220,0.18)",
                backgroundColor: "var(--color-white)",
              }}
            >
              <div className="w-full flex-1 px-4 pt-4 pb-3 rounded-sm flex flex-col gap-4">
                <h3
                  className="text-[30px] font-normal leading-[36px]"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                    color: "var(--color-primary-black)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-lg font-normal leading-6"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    color: "var(--color-primary-black)",
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
