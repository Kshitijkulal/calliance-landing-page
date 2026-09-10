"use client";

import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Effortless From Day One",
    description:
      "We handle the complexity behind setup so your team can get started without a technical learning curve.",
  },
  {
    title: "Technology That Keeps Evolving",
    description:
      "Deliver highly personalized, on-brand interactions at scale, continuously refined by AI specialists to improve quality as technology evolves.",
  },
  {
    title: "Setup, Training & Guidance",
    description:
      "From initial setup to going live, our team helps you configure, launch, and get the most from your voice campaigns.",
  },
  {
    title: "Consistent and Error-Reduced",
    description:
      "Automate repetitive calling workflows with consistent conversations and accurate capture of call information, reducing the errors that come with manual processes.",
  },
];

export default function MoreThanDialerSection() {
  return (
    <section className="flex flex-col items-start">
      {/* Header */}
      <div className="w-full mx-auto px-4 lg:px-20 pt-8 pb-0 flex flex-col items-center gap-12">
        <div className="w-full flex flex-col gap-2">
          <h2
            className="w-full text-center font-normal uppercase text-4xl sm:text-5xl md:text-6xl leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            More Than Just A Voice AI Tool
          </h2>
          <p
            className="w-[95%] sm:w-[85%] md:w-[70%] max-w-full mx-auto text-center text-base sm:text-lg lg:text-xl font-normal leading-relaxed"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            From getting started to scaling your outreach, we provide the
            technology and support to make voice automation effortless.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-20 pt-8 pb-8">
        <div className="w-full py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{
                backgroundColor: "var(--color-primary-black)",
                borderColor: "var(--color-primary-black)",
                boxShadow: "none",
              }}
              transition={{ duration: 0 }}
              className="group h-full flex flex-col gap-3 py-6 px-6 sm:px-8 rounded-xl border border-solid cursor-pointer"
              style={{
                boxShadow:
                  "inset 4px 4px 15px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
                backgroundColor: "var(--color-primary-beige)",
                borderColor: "var(--color-white)",
              }}
            >
              <div className="w-full flex-1 flex flex-col gap-4">
                <h3
                  className="font-normal m-0 text-2xl md:text-3xl group-hover:text-3xl md:group-hover:text-4xl text-primary-black group-hover:text-secondary-beige pr-4 group-hover:pr-0 leading-none transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-bebas-neue), sans-serif",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm md:text-base group-hover:text-base md:group-hover:text-lg font-normal leading-snug m-0 text-primary-black group-hover:text-secondary-beige pr-6 group-hover:pr-0 transition-all duration-300"
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
