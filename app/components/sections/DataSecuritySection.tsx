"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DataSecuritySection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 flex justify-center relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full overflow-hidden rounded-2xl bg-[#0D0D0D] px-4 py-5 sm:px-6 sm:py-6 md:rounded-[1.5rem] md:px-8 md:py-8 lg:rounded-[1.75rem] lg:pl-12 lg:pr-8 lg:py-10 xl:pl-14 xl:pr-10 xl:py-11"
      >
        <div className="mx-auto flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-12 xl:gap-14">
          {/* Mobile: icon | copy side-by-side. Desktop: same cluster, centered */}
          <div className="flex w-full flex-row items-center gap-3 sm:gap-4 lg:contents">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-[7.25rem] w-[7.25rem] shrink-0 sm:h-36 sm:w-36 lg:h-[17rem] lg:w-[17rem] xl:h-[18.5rem] xl:w-[18.5rem]"
            >
              <Image
                src="/Section%203%20Badge%20image.png"
                alt="Data Security Shield"
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>

            <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5 text-left sm:gap-2 lg:w-auto lg:flex-none lg:gap-2.5">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="m-0 font-bebas text-[1.35rem] font-normal uppercase leading-[1.05] text-secondary-beige sm:text-[1.65rem] md:text-[2rem] lg:whitespace-nowrap lg:text-[3.15rem] xl:text-[3.35rem]"
              >
                YOUR DATA, ONLY YOURS TO UNLOCK
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="m-0 font-manrope text-[11px] font-normal leading-snug text-secondary-beige/80 sm:text-sm md:text-base lg:max-w-xl lg:text-xl lg:leading-relaxed"
              >
                Your sensitive business and customer data is encrypted and remains
                under your control. Access and decryption are restricted to you and
                the authorized identities you choose.
              </motion.p>

              {/* Desktop button stays under the copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden pt-3 sm:pt-4 lg:block"
              >
                <a
                  href="#features"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary-beige px-6 no-underline transition-transform hover:scale-105 active:scale-95"
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

          {/* Mobile / tablet: full-width CTA under the row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full lg:hidden"
          >
            <a
              href="#features"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-secondary-beige px-5 no-underline transition-transform active:scale-[0.98] sm:h-12"
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
      </motion.div>
    </section>
  );
}
