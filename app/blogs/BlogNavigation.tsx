"use client";

import React from "react";
import Link from "next/link";
import { getAdjacentPosts } from "./blogsData";

interface BlogNavigationProps {
  currentSlug: string;
}

export default function BlogNavigation({ currentSlug }: BlogNavigationProps) {
  const { prev, next } = getAdjacentPosts(currentSlug);

  return (
    <nav
      aria-label="Article navigation"
      className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pb-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
        {/* Left / Previous Card */}
        <Link
          href={prev.href}
          className="group block flex flex-col justify-start text-left cursor-pointer transition-all"
        >
          <div className="mb-3 sm:mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#1E1E1E] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <line x1="17" y1="17" x2="7" y2="7" />
              <polyline points="17 7 7 7 7 17" />
            </svg>
          </div>
          <h3
            className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] leading-[1.05] tracking-normal font-normal uppercase text-[#1E1E1E] group-hover:opacity-75 transition-opacity"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            {prev.title}
          </h3>
        </Link>

        {/* Right / Next Card */}
        <Link
          href={next.href}
          className="group block flex flex-col justify-start text-left cursor-pointer transition-all"
        >
          <div className="flex justify-end mb-3 sm:mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#1E1E1E] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <h3
            className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] leading-[1.05] tracking-normal font-normal uppercase text-[#1E1E1E] group-hover:opacity-75 transition-opacity"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            {next.title}
          </h3>
        </Link>
      </div>
    </nav>
  );
}
