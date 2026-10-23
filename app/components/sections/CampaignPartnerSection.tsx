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
              className="relative w-full overflow-hidden rounded-2xl border border-solid"
              style={{
                boxShadow:
                  "inset 6px 6px 12px rgba(0, 0, 0, 0.04), inset -6px -6px 8px rgba(255, 255, 255, 1), 0px 6px 40px 0px rgba(219, 220, 220, 0.18)",
                backgroundColor: "var(--color-primary-beige)",
                borderColor: "var(--color-white)",
              }}
            >
              <div
                className={`flex flex-col md:min-h-[188px] md:flex-row md:items-center ${
                  card.imageOnLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative z-10 w-full px-4 py-4 sm:px-5 sm:py-5 md:w-[48%] md:max-w-[460px] md:px-5 md:py-6">
                  <h3 className="m-0 font-bebas font-normal uppercase text-primary-black text-[26px] sm:text-[30px] md:text-[32px] leading-[0.95]">
                    {card.title}
                  </h3>
                  <p className="mt-2 md:mt-2.5 m-0 font-manrope font-normal text-primary-black text-sm md:text-[15px] leading-snug">
                    {card.description}
                  </p>
                </div>

                <div
                  className={`relative h-44 w-full sm:h-48 md:absolute md:inset-y-0 md:h-auto md:w-[52%] ${
                    card.imageOnLeft ? "md:left-0" : "md:right-0"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className={`object-contain ${
                      card.imageOnLeft
                        ? "origin-bottom-left object-left-bottom scale-[1.18] md:origin-left md:object-left md:scale-[1.38]"
                        : "origin-bottom-right object-right-bottom scale-[1.18] md:origin-right md:object-right md:scale-[1.38]"
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
