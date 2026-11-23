"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "Define Your AI Agent’s Goal",
    description:
      "Give your conversational AI agent the specific knowledge, calling scripts, and conversation-handling protocols to fit your business goals.",
  },
  {
    number: "2",
    title: "Customize the AI Voice",
    description:
      "Choose the tone, language (including Hindi), and personality of your custom AI voice to align with your brand identity.",
  },
  {
    number: "3",
    title: "Answer Inbound Calls 24/7",
    description:
      "Your AI receptionist answers every inbound call instantly, day or night, so no customer waits and no call goes unanswered.",
  },
  {
    number: "4",
    title: "Handle Multiple Calls at Once",
    description:
      "The AI handles multiple inbound calls at the same time, so customers get an answer without waiting in a queue.",
  },
  {
    number: "5",
    title: "Launch Outbound Calls at Scale",
    description:
      "Select your audience, schedule the deployment, and initiate thousands of simultaneous calls instantly with bulk calling software.",
  },
  {
    number: "6",
    title: "Track Calls and Optimize",
    description:
      "Monitor real-time call transcription, analyze call outcomes, and use AI call analytics to continually optimize your ROI.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center pt-2 sm:pt-3 md:pt-8 pb-0 gap-0 w-full"
    >
      {/* Header — responsive wrap layout */}
      <div
        className="w-full px-4 lg:px-20 flex flex-wrap justify-between items-start gap-2.5 sm:gap-4 md:gap-8"
      >
        <h2
          className="flex-[1_1_100%] lg:flex-[1_1_400px] font-normal uppercase m-0 font-bebas text-[clamp(40px,5vw,64px)] leading-[1.1] text-primary-black"
        >
          How AI Voice Agents Work
        </h2>
        <p
          className="flex-[1_1_100%] lg:flex-[1_1_500px] font-normal leading-relaxed m-0 text-[clamp(16px,2vw,20px)] font-manrope text-primary-black"
        >
          From your first AI voice agent to your first full-scale campaign, we handle the technical heavy lifting. We guide you through setting up your automated calling system so your team can focus on driving revenue, not figuring out the software.
        </p>
      </div>
      {/* Full-width Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative -mt-6 lg:-mt-12 mb-4 md:-mb-12 lg:-mb-24 z-0"
      >
        <Image
          src="/how_it_works_full.webp"
          alt="Callience AI Calling Platform Workflow"
          width={1600}
          height={1067}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1440px"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Step Cards */}
      <div
        className="w-full px-4 lg:px-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10"
      >
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="group flex-[1_1_100%] md:flex-[1_1_280px] min-w-[280px] pt-8 pb-8 px-5 rounded-xl flex flex-col gap-2 border border-solid border-white bg-primary-beige shadow-[inset_4px_4px_15px_rgba(0,0,0,0.04),inset_-6px_-6px_8px_rgba(255,255,255,1),0px_6px_40px_0px_rgba(219,220,220,0.18)] cursor-pointer hover:bg-primary-black hover:border-primary-black hover:shadow-none"
          >
            {/* Title + Number Badge */}
            <div className="flex justify-between items-center gap-3">
              <h3
                className="font-normal m-0 text-[26px] group-hover:text-[30px] text-primary-black group-hover:text-secondary-beige flex-1 pr-4 group-hover:pr-0 leading-[1.1] group-hover:leading-none font-bebas"
              >
                {step.title}
              </h3>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-solid border-white bg-primary-beige shadow-[inset_4px_4px_15px_rgba(0,0,0,0.04),inset_-6px_-6px_8px_rgba(255,255,255,1),0px_6px_20px_0px_rgba(0,0,0,0.2)] group-hover:opacity-0 group-hover:hidden"
              >
                <span
                  className="leading-none flex items-center justify-center text-[16px] font-bold font-manrope text-primary-black mt-[2px]"
                >
                  {step.number}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[15px] md:text-[16px] group-hover:text-[18px] font-normal leading-[1.4] group-hover:leading-[1.25] m-0 text-primary-black group-hover:text-secondary-beige pr-6 group-hover:pr-0 font-manrope"
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
