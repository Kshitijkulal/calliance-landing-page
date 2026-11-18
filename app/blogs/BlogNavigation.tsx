"use client";

import React from "react";
import Link from "next/link";
import { getAdjacentPosts } from "./blogsData";

interface BlogNavigationProps {
  currentSlug: string;
}

export default function BlogNavigation({ currentSlug }: BlogNavigationProps) {
  const { prev, next } = getAdjacentPosts(currentSlug);

  // Strictly NO demo data: if there are no adjacent real articles, render nothing
  if (!prev && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Article navigation"
      className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pb-24"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-14">
        {/* Left / Previous Card */}
        {prev ? (
          <Link
            href={prev.href}
            className="group block flex flex-col justify-start text-left cursor-pointer transition-all max-w-[340px] w-full"
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
                className="w-6 h-6 text-primary-black transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <line x1="17" y1="17" x2="7" y2="7" />
                <polyline points="17 7 7 7 7 17" />
              </svg>
            </div>
            <h3
              className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.08] tracking-normal font-normal uppercase text-primary-black group-hover:opacity-75 transition-opacity"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              {prev.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {/* Right / Next Card */}
        {next ? (
          <Link
            href={next.href}
            className="group block flex flex-col justify-start text-right items-end cursor-pointer transition-all max-w-[360px] w-full sm:ml-auto"
          >
            <div className="flex justify-end mb-3 sm:mb-4 w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <h3
              className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.08] tracking-normal font-normal uppercase text-primary-black group-hover:opacity-75 transition-opacity text-right"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              {next.title}
            </h3>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
