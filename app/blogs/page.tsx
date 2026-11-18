"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import { REAL_BLOGS } from "./blogsData";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(REAL_BLOGS.map((post) => post.category).filter(Boolean))),
];


export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return REAL_BLOGS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-primary-beige flex flex-col font-sans text-primary-black">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-36 pb-16 md:pb-20">
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-6 md:pb-8 pt-2 md:pt-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10 lg:gap-12">
              <h1
                className="text-[72px] sm:text-7xl md:text-8xl lg:text-[128px] font-normal uppercase tracking-normal text-primary-black leading-none shrink-0"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                BLOGS
              </h1>
              <p
                className="font-medium text-primary-black text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] tracking-normal max-w-[440px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Explore the latest trends, insights, and innovations shaping the
                future of AI calling and business communication.
              </p>
            </div>

            {/* Search Pill */}
            <div className="relative w-full md:w-72 shrink-0">
              <div
                className="flex items-center gap-2.5 bg-white border border-card-border rounded-full px-4 py-2.5 text-xs sm:text-[13px] text-light-grey shadow-xs"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                <svg
                  className="w-4 h-4 text-light-grey shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tell Us What You Are Looking For"
                  aria-label="Search blog articles"
                  className="bg-transparent border-none outline-none text-xs sm:text-[13px] text-primary-black placeholder:text-light-grey w-full"
                />
              </div>
            </div>
          </div>

          {/* Categories Nav */}
          <div
            className="flex items-center gap-5 sm:gap-8 overflow-x-auto pb-3 pt-1 mb-7 md:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span
                    className={`text-[13px] sm:text-sm md:text-base transition-colors whitespace-nowrap ${isActive
                      ? "font-bold text-primary-black"
                      : "text-dark-grey hover:text-primary-black"
                      }`}
                  >
                    {cat}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-primary-black" : "bg-transparent"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Blog Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-10 lg:gap-y-14">
              {filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="block overflow-hidden rounded-2xl md:rounded-[28px] bg-white border border-card-border relative shadow-xs group w-full"
                    style={{ aspectRatio: "623.45 / 373.65" }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="100vw"
                      className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </Link>

                  <div className="pt-4 sm:pt-5 md:pt-6">
                    <h2
                      className="text-[26px] sm:text-3xl md:text-[34px] lg:text-[40px] font-normal uppercase tracking-normal text-primary-black leading-[1.05] mb-2 sm:mb-3 md:mb-3.5"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p
                      className="text-[13px] sm:text-sm md:text-base text-dark-grey leading-[1.5]"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-light-grey text-sm">
              No articles found matching &quot;{searchQuery || selectedCategory}&quot;.
            </div>
          )}
        </div>
      </main>

      <ContactSection />

      <Footer />
    </div>
  );
}
