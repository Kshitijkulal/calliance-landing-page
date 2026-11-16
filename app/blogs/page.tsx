"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const CATEGORIES = [
  "All",
  "Market Trends",
  "AI Technology",
  "Sales & Lead Generation",
  "Inbound calls",
];

// Only real blogs in your project — using the exact clean image from the blog
const REAL_BLOGS = [
  {
    id: 1,
    slug: "how-voice-ai-works",
    title: "HOW DOES VOICE AI WORK? A BEGINNER'S GUIDE TO AI CALLING",
    excerpt:
      "Voice AI is changing how businesses communicate with customers through automated phone conversations. From following up with potential customers to sending appointment reminders, AI-powered calling systems can handle many routine conversations.",
    image: "/blog-hero-voice-ai-guide.jpg",
    category: "AI Technology",
  },
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
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1E1E1E]">
      <Navbar />

      <main className="flex-1 pt-28 md:pt-36 pb-20">
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 pt-4">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-12">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[128px] font-normal uppercase tracking-normal text-[#1E1E1E] leading-none shrink-0"
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                BLOGS
              </h1>
              <p
                className="font-medium text-[#1E1E1E] text-[16px] sm:text-[18px] leading-[1.4] tracking-normal max-w-[440px]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                Explore the latest trends, insights, and innovations shaping the
                future of AI calling and business communication.
              </p>
            </div>

            {/* Search Pill */}
            <div className="relative w-full md:w-72 shrink-0">
              <div
                className="flex items-center gap-2.5 bg-[#F6F6F6] border border-[#E5E5E5] rounded-full px-4 py-2.5 text-xs sm:text-[13px] text-[#808285]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
              >
                <svg
                  className="w-4 h-4 text-[#808285] shrink-0"
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
                  className="bg-transparent border-none outline-none text-xs sm:text-[13px] text-[#1E1E1E] placeholder-[#808285] w-full"
                />
              </div>
            </div>
          </div>

          {/* Categories Nav */}
          <div
            className="flex items-center gap-8 overflow-x-auto pb-4 pt-2 mb-10 scrollbar-none"
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
                    className={`text-sm md:text-base transition-colors ${isActive
                      ? "font-bold text-[#1E1E1E]"
                      : "text-[#535353] hover:text-[#1E1E1E]"
                      }`}
                  >
                    {cat}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#1E1E1E]" : "bg-transparent"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Blog Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-10 lg:gap-y-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="block overflow-hidden rounded-2xl md:rounded-3xl bg-[#FAF9F5] border border-[#E5E5E5] aspect-[2/1] relative shadow-xs group"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      unoptimized
                    />
                  </Link>

                  <div className="pt-4">
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-normal text-[#0D0D0D] leading-[1.05] mb-2"
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="hover:opacity-80"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p
                      className="text-xs sm:text-sm text-[#535353] leading-relaxed"
                      style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#808285] text-sm">
              No articles found matching &quot;{searchQuery || selectedCategory}&quot;.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
