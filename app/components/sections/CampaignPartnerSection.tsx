"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Built Around Your Business",
    description:
      "Agents, scripts and workflows are customized to your targets, then refined as your needs evolve, keeping every conversation on track.",
    image: "/image 826-3.png",
    imageAlt: "A hand placing a target into a voice-agent dashboard",
    imageOnLeft: false,
  },
  {
    title: "Marketing Consultants On Your Side",
    description:
      "AI specialists and marketing consultants plan audiences, strategy and follow-ups with you and keep advising you at every stage.",
    image: "/image 826-2.png",
    imageAlt: "A marketing consultant planning a campaign with an AI agent",
    imageOnLeft: true,
  },
  {
    title: "Smarter Spend, Better ROI",
    description:
      "We tailor your budget to your needs and help you spend it efficiently, so you skip costly trial and error and improve campaign ROI.",
    image: "/image 826-1.png",
    imageAlt: "An AI agent saving coins beside a rising results chart",
    imageOnLeft: false,
  },
  {
    title: "Every Lead Followed Up",
    description:
      "Consistent calls, structured qualification and reliable follow-ups, with call data captured accurately, so fewer prospects fall through.",
    image: "/image 826.png",
    imageAlt: "An AI agent qualifying leads through a funnel",
    imageOnLeft: true,
  },
];

export default function CampaignPartnerSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[6%] pt-4 pb-8 md:pb-12">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-3 md:gap-4 text-center">
          <h2 className="m-0 font-bebas font-normal uppercase text-primary-black text-[clamp(34px,6vw,56px)] leading-[0.95] tracking-wide">
            A Campaign Partner, Not Just A Voice AI
          </h2>
          <p className="m-0 max-w-3xl font-manrope font-normal text-primary-black text-sm sm:text-base md:text-lg leading-relaxed">
            We combine voice AI, expert marketing consultation and continuous
            optimization to help you plan, run and improve campaigns that
            deliver better outcomes.
          </p>
        </div>

        <div className="w-full mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
          {CARDS.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
              className="w-full rounded-2xl border border-solid px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-7"
              style={{
                boxShadow:
                  "inset 6px 6px 12px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
                backgroundColor: "var(--color-primary-beige)",
                borderColor: "var(--color-white)",
              }}
            >
              <div
                className={`flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between md:gap-8 ${
                  card.imageOnLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:max-w-[380px] lg:max-w-[420px] text-left shrink-0">
                  <h3 className="m-0 font-bebas font-normal uppercase text-primary-black text-[26px] sm:text-[30px] md:text-[32px] leading-[0.95]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 md:mt-3 m-0 font-manrope font-normal text-primary-black text-sm md:text-[15px] leading-snug">
                    {card.description}
                  </p>
                </div>

                <div className="relative w-full h-40 sm:h-44 md:h-[168px] md:w-[42%] lg:w-[46%] shrink-0">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className={`object-contain ${
                      card.imageOnLeft
                        ? "object-center md:object-left"
                        : "object-center md:object-right"
                    }`}
                    unoptimized
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
