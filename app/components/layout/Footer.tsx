"use client";

import React from "react";
import Image from "next/image";
const SOCIAL_ICONS = [
  { label: "YouTube", href: "#", path: "M23.5 6.5a3.07 3.07 0 00-2.16-2.16C19.54 4 12 4 12 4s-7.54 0-9.34.34A3.07 3.07 0 00.5 6.5 32.09 32.09 0 000 12a32.09 32.09 0 00.5 5.5 3.07 3.07 0 002.16 2.16C4.46 20 12 20 12 20s7.54 0 9.34-.34a3.07 3.07 0 002.16-2.16A32.09 32.09 0 0024 12a32.09 32.09 0 00-.5-5.5zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
  { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Twitter", href: "#", path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
  { label: "Instagram", href: "#", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
  { label: "LinkedIn", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" },
];

export default function Footer() {
  return (
    <footer className="w-full font-sans bg-primary-beige">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 py-10 px-6 md:py-16 md:px-10 lg:px-16">
        {/* Top Row — Logo + Social */}
        <div className="flex justify-between items-center w-full gap-2">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center justify-center no-underline shrink-0"
          >
            <Image
              src="/ai%20CALLING%20f.svg"
              alt="Callience Logo"
              width={216}
              height={100}
              className="h-7 sm:h-10 md:h-14 lg:h-16 w-auto object-contain object-left"
              priority
            />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex items-center justify-center size-5 sm:size-6 text-primary-black transition-colors duration-200 hover:text-dark-grey"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-light-grey" />

        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 w-full pt-2 md:pt-4 lg:pt-8">
          
          {/* Contact Us */}
          <div className="lg:col-span-3 flex flex-col gap-4 lg:pl-12">
            <h4 className="text-base md:text-lg font-extrabold leading-6 text-primary-black">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 stroke-primary-black stroke-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span className="text-sm md:text-base font-semibold text-dark-grey leading-6 whitespace-nowrap">
                  info@callience.in
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 stroke-primary-black stroke-2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-sm md:text-base font-semibold text-dark-grey leading-6 whitespace-nowrap">
                  +91 8448445810
                </span>
              </div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-base md:text-lg font-extrabold leading-6 text-primary-black">
              Visit Us
            </h4>
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="size-4 mt-1 shrink-0 stroke-primary-black stroke-2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="w-full max-w-xs text-sm md:text-base font-semibold text-dark-grey leading-6">
                B-36,37,38, 2nd Floor, IDC Area, MG Road Opposite -Sector 14, Gurugram, Haryana 122001
              </span>
            </div>
          </div>

          {/* Policy */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-base md:text-lg font-extrabold leading-6 text-primary-black">
              Policy
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm md:text-base font-semibold text-dark-grey leading-6 no-underline whitespace-nowrap transition-colors duration-200 hover:text-primary-black">
                Refund Policy
              </a>
              <a href="#" className="text-sm md:text-base font-semibold text-dark-grey leading-6 no-underline whitespace-nowrap transition-colors duration-200 hover:text-primary-black">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-base md:text-lg font-extrabold leading-6 text-primary-black">
              Disclaimer
            </h4>
            <p className="text-xs md:text-sm font-medium text-dark-grey leading-6">
              The information provided on this website is for general informational purposes only and does not constitute professional, legal, financial, or other specialized advice. Product capabilities, features, availability, and pricing may vary based on your business requirements and deployment. Please contact our team for specific information about your use case.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-t border-light-grey" />

        {/* Bottom Row — Copyright + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-2 text-center md:text-left">
          <span className="text-xs md:text-sm text-primary-black font-medium leading-5">
            Callience @ 2026. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {["How it works", "Pricing", "Use Cases"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm md:text-base text-primary-black font-bold tracking-tight no-underline transition-colors duration-200 hover:text-dark-grey"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
