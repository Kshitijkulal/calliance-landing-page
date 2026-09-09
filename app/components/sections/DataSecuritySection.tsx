"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DataSecuritySection() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex justify-center relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl rounded-[32px] md:rounded-[48px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-10 lg:gap-16"
        style={{ backgroundColor: "var(--color-primary-black)" }}
      >
        {/* Left: Shield Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
          >
            <Image
              src="/Section 3 Badge image.png"
              alt="Data Security Shield"
              fill
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase m-0 leading-[1.1]"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "var(--color-secondary-beige)",
            }}
          >
            YOUR DATA , ONLY YOURS TO UNLOCK
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl font-normal m-0 max-w-2xl leading-relaxed"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-secondary-beige)",
              opacity: 0.85,
            }}
          >
            Your sensitive business and customer data is encrypted and remains
            under your control. Access and decryption are restricted to you and
            the authorized identities you choose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-xl gap-3 no-underline transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--color-secondary-beige)",
                color: "var(--color-primary-black)",
              }}
            >
              <span
                className="text-sm md:text-base font-bold"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                See More Features
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ stroke: "var(--color-primary-black)" }}
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
