"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1440px] mx-auto relative flex flex-col items-center pt-[8%] pb-[8%] md:pt-[12%] md:pb-[6%] overflow-hidden px-4 sm:px-6"
    >
      {/* Giant Background Text */}
      <div className="w-full flex justify-center items-center z-0 pointer-events-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-bold select-none whitespace-nowrap tracking-[-0.02em]"
          style={{
            fontSize: "clamp(60px, 19.5vw, 280px)",
            lineHeight: "clamp(60px, 19.5vw, 280px)",
            fontFamily: "var(--font-manrope), sans-serif",
            color: "var(--color-primary-black)",
          }}
        >
          Let&apos;s Talk
        </motion.span>
      </div>

      {/* Form Card */}
      <motion.form
        suppressHydrationWarning
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] rounded-2xl flex flex-col items-center gap-8 md:gap-12 relative z-10 border border-solid backdrop-blur-[12px]"
        style={{
          padding: "clamp(24px, 5%, 64px)",
          marginTop: "calc(-0.30 * clamp(60px, 19.5vw, 280px))",
          boxShadow: "var(--shadow-glass)",
          backgroundColor: "var(--glass-bg)",
          borderColor: "var(--glass-border)",
        }}
      >
        {/* Form Title */}
        <div className="w-full text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-[40px] font-normal tracking-[0.02em] uppercase m-0"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            Ready to Automate Your Outreach?
          </h2>
        </div>

        {/* Row 1: Name + Company */}
        <div className="w-[90%] max-w-full flex flex-col sm:flex-row items-stretch gap-8 md:gap-12">
          <div className="flex-1 w-full border-b-2" style={{ borderColor: "var(--color-primary-black)" }}>
            <label
              className="block text-sm sm:text-base font-semibold mb-1"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            >
              Name
            </label>
            <input
              suppressHydrationWarning
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base sm:text-lg bg-transparent py-2"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            />
          </div>
          <div className="flex-1 w-full border-b-2" style={{ borderColor: "var(--color-primary-black)" }}>
            <label
              className="block text-sm sm:text-base font-semibold mb-1"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            >
              Company
            </label>
            <input
              suppressHydrationWarning
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base sm:text-lg bg-transparent py-2"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            />
          </div>
        </div>

        {/* Row 2: Job Title + Email */}
        <div className="w-[90%] max-w-full flex flex-col sm:flex-row items-stretch gap-8 md:gap-12">
          <div className="flex-1 w-full border-b-2" style={{ borderColor: "var(--color-primary-black)" }}>
            <label
              className="block text-sm sm:text-base font-semibold mb-1"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            >
              Job Title
            </label>
            <input
              suppressHydrationWarning
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border-none outline-none text-base sm:text-lg bg-transparent py-2"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            />
          </div>
          <div className="flex-1 w-full border-b-2" style={{ borderColor: "var(--color-primary-black)" }}>
            <label
              className="block text-sm sm:text-base font-semibold mb-1"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            >
              Email
            </label>
            <input
              suppressHydrationWarning
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-none outline-none text-base sm:text-lg bg-transparent py-2"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: "var(--color-primary-black)",
              }}
            />
          </div>
        </div>

        {/* Row 3: Phone */}
        <div className="w-[90%] max-w-full flex flex-col gap-2">
          <label
            className="block text-sm sm:text-base font-semibold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              color: "var(--color-primary-black)",
            }}
          >
            Phone No.
          </label>
          <div className="flex items-end gap-4 sm:gap-6 w-full">
            <div
              className="flex items-center justify-between min-w-[72px] sm:min-w-[80px] py-2 border-b-2 cursor-pointer shrink-0"
              style={{ borderColor: "var(--color-primary-black)" }}
            >
              <span
                className="text-xs sm:text-sm font-medium"
                style={{ fontFamily: "var(--font-manrope), sans-serif", color: "var(--color-primary-black)" }}
              >
                India
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="var(--color-primary-black)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1 w-full border-b-2" style={{ borderColor: "var(--color-primary-black)" }}>
              <input
                suppressHydrationWarning
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none outline-none text-base sm:text-lg py-2"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  color: "var(--color-primary-black)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="w-[90%] max-w-full flex justify-end">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-semibold"
                style={{
                  backgroundColor: "var(--color-off-white)",
                  fontFamily: "var(--font-manrope), sans-serif",
                  color: "var(--color-primary-black)",
                }}
              >
                ✓ We&apos;ll be in touch soon!
              </motion.div>
            ) : (
              <motion.button
                key="submit"
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-11 sm:h-12 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-none cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary-black)",
                }}
              >
                <span
                  className="text-sm sm:text-lg font-semibold"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    color: "var(--color-secondary-beige)",
                  }}
                >
                  Request Demo
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.form>
    </section>
  );
}
