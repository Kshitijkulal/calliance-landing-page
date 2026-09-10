"use client";

import React from "react";
import Image from "next/image";
const SOCIAL_ICONS = [
  {
    label: "YouTube",
    href: "#",
    path: "M23.5 6.5a3.07 3.07 0 00-2.16-2.16C19.54 4 12 4 12 4s-7.54 0-9.34.34A3.07 3.07 0 00.5 6.5 32.09 32.09 0 000 12a32.09 32.09 0 00.5 5.5 3.07 3.07 0 002.16 2.16C4.46 20 12 20 12 20s7.54 0 9.34-.34a3.07 3.07 0 002.16-2.16A32.09 32.09 0 0024 12a32.09 32.09 0 00-.5-5.5zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "X",
    href: "#",
    path: "M16.4066 17.6109C16.342 17.7286 16.2471 17.8267 16.1317 17.8951C16.0162 17.9636 15.8846 17.9998 15.7504 18H11.2504C11.1241 18 11 17.9681 10.8893 17.9073C10.7787 17.8465 10.6852 17.7587 10.6176 17.6522L6.82162 11.6869L1.30536 17.7544C1.17089 17.8988 0.984904 17.9845 0.787721 17.9927C0.590538 18.0009 0.398054 17.9311 0.252001 17.7984C0.105948 17.6657 0.0180975 17.4807 0.00749552 17.2836C-0.00310645 17.0866 0.064395 16.8933 0.195365 16.7456L5.9863 10.3706L0.117552 1.15313C0.0452725 1.03973 0.00481053 0.908984 0.000403041 0.774582C-0.00400445 0.64018 0.0278046 0.507066 0.0924997 0.389177C0.157195 0.271288 0.252396 0.172962 0.368134 0.104494C0.483873 0.0360256 0.615891 -6.53095e-05 0.750365 8.87202e-08H5.25036C5.37659 3.91221e-05 5.50077 0.0319361 5.61139 0.0927355C5.722 0.153535 5.81549 0.24127 5.88318 0.347813L9.67912 6.31312L15.1954 0.245625C15.3298 0.101174 15.5158 0.015547 15.713 0.00730857C15.9102 -0.00092985 16.1027 0.0688843 16.2487 0.201615C16.3948 0.334346 16.4826 0.519295 16.4932 0.716365C16.5038 0.913434 16.4363 1.10674 16.3054 1.25438L10.5144 7.62469L16.3832 16.8478C16.4551 16.9613 16.4951 17.0919 16.4993 17.2262C16.5034 17.3604 16.4714 17.4933 16.4066 17.6109Z",
    viewBox: "0 0 17 18",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/callience.ai?stkn=dWpyY3p4eGRqZXRq&utm_source=qr",
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
  },
];

export default function Footer() {
  return (
    <footer className="w-full font-sans bg-primary-beige">
      <div className="w-full mx-auto flex flex-col gap-10 py-10 px-6 md:py-16 md:px-10 lg:px-16">
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
                <svg
                  viewBox={(social as any).viewBox || "0 0 24 24"}
                  fill="currentColor"
                  className="w-full h-full"
                >
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
              <a href="mailto:info@callience.in" className="flex items-center gap-3 no-underline group">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-4 stroke-primary-black stroke-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span className="text-sm md:text-base font-semibold text-dark-grey leading-6 whitespace-nowrap group-hover:text-primary-black transition-colors duration-200">
                  info@callience.in
                </span>
              </a>
              <a href="https://wa.me/918448445810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 no-underline group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-primary-black"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm md:text-base font-semibold text-dark-grey leading-6 whitespace-nowrap group-hover:text-primary-black transition-colors duration-200">
                  +91 8448445810
                </span>
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-base md:text-lg font-extrabold leading-6 text-primary-black">
              Visit Us
            </h4>
            <a href="https://maps.app.goo.gl/WDFL1XoTQSEbfJUK6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 no-underline group">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-4 mt-1 shrink-0 stroke-primary-black stroke-2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="w-full max-w-xs text-sm md:text-base font-semibold text-dark-grey leading-6 group-hover:text-primary-black transition-colors duration-200">
                B-36,37,38, 2nd Floor, IDC Area, MG Road Opposite -Sector 14,
                Gurugram, Haryana 122001
              </span>
            </a>
          </div>

          {/* Policy */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-base md:text-lg font-extrabold leading-6 text-primary-black">
              Policy
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm md:text-base font-semibold text-dark-grey leading-6 no-underline whitespace-nowrap transition-colors duration-200 hover:text-primary-black"
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="text-sm md:text-base font-semibold text-dark-grey leading-6 no-underline whitespace-nowrap transition-colors duration-200 hover:text-primary-black"
              >
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
              The information provided on this website is for general
              informational purposes only and does not constitute professional,
              legal, financial, or other specialized advice. Product
              capabilities, features, availability, and pricing may vary based
              on your business requirements and deployment. Please contact our
              team for specific information about your use case.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-t border-light-grey" />

        {/* Bottom Row — Copyright + Nav */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-2 text-center md:text-left">
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
