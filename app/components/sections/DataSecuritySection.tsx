"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DataSecuritySection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-2 md:pt-4 pb-8 md:pb-10 flex justify-center relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[1.75rem] bg-[#0D0D0D] px-6 py-8 sm:px-8 sm:py-9 lg:pl-12 lg:pr-8 lg:py-10 xl:pl-14 xl:pr-10 xl:py-11"
      >
        <div className="mx-auto flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12 xl:gap-14">
          {/* Shield */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-44 w-44 shrink-0 sm:h-52 sm:w-52 lg:h-[17rem] lg:w-[17rem] xl:h-[18.5rem] xl:w-[18.5rem]"
          >
            <Image
              src="/Section%203%20Badge%20image.png"
              alt="Data Security Shield"
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>

          {/* Copy — single-line title on desktop; right padding trimmed so it fits */}
          <div className="flex w-full min-w-0 flex-col items-center gap-2 text-center sm:gap-2.5 lg:w-auto lg:items-start lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="m-0 font-bebas text-3xl font-normal uppercase leading-[1.05] text-secondary-beige sm:text-[2.5rem] md:text-[2.75rem] lg:whitespace-nowrap lg:text-[3.15rem] xl:text-[3.35rem]"
            >
              YOUR DATA, ONLY YOURS TO UNLOCK
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="m-0 max-w-xl font-manrope text-base font-normal leading-relaxed text-secondary-beige/80 sm:text-lg md:text-xl"
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
              className="pt-3 sm:pt-4"
            >
              <a
                href="#features"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-secondary-beige px-5 no-underline transition-transform hover:scale-105 active:scale-95 sm:h-12 sm:px-6"
              >
                <span className="font-manrope text-sm font-bold text-primary-black">
                  See More Features
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-primary-black"
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
        </div>
      </motion.div>
    </section>
  );
}
