"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactSection from "@/app/components/sections/ContactSection";
import { REAL_BLOGS } from "./blogsData";

const POSTS_PER_PAGE = 6;

const CATEGORIES = [
  "All",
  ...Array.from(new Set(REAL_BLOGS.map((post) => post.category).filter(Boolean))),
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    // Sort newest posts first: by publishedAt date, fallback to descending ID
    const sorted = [...REAL_BLOGS].sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      if (dateB !== dateA) {
        return dateB - dateA;
      }
      return b.id - a.id;
    });

    return sorted.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);

    const anchor = document.getElementById("blog-content-top");
    if (anchor) {
      const topOffset = anchor.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    return pages;
  };

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
                  onChange={handleSearchChange}
                  placeholder="Tell Us What You Are Looking For"
                  aria-label="Search blog articles"
                  className="bg-transparent border-none outline-none text-xs sm:text-[13px] text-primary-black placeholder:text-light-grey w-full"
                />
              </div>
            </div>
          </div>

          {/* Categories Nav */}
          <div
            id="blog-content-top"
            className="flex items-center gap-5 sm:gap-8 overflow-x-auto pb-3 pt-1 mb-7 md:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span
                    className={`text-[13px] sm:text-sm md:text-base transition-colors whitespace-nowrap ${
                      isActive
                        ? "font-bold text-primary-black"
                        : "text-dark-grey hover:text-primary-black"
                    }`}
                  >
                    {cat}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-primary-black" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Blog Cards Grid */}
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-10 lg:gap-y-14">
                {paginatedPosts.map((post) => (
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

              {/* Pagination Bar */}
              {totalPages >= 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 md:pt-16 mt-8 sm:mt-12 border-t border-card-border/70">
                  <p
                    className="text-xs sm:text-sm text-dark-grey font-medium order-2 sm:order-1"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    Showing{" "}
                    <span className="font-bold text-primary-black">
                      {(currentPage - 1) * POSTS_PER_PAGE + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-bold text-primary-black">
                      {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-bold text-primary-black">
                      {filteredPosts.length}
                    </span>{" "}
                    articles
                  </p>

                  <nav
                    aria-label="Blog pagination"
                    className="flex items-center gap-2 order-1 sm:order-2"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {/* Previous Page Button */}
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                      className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                        currentPage === 1
                          ? "opacity-35 cursor-not-allowed bg-transparent text-light-grey"
                          : "bg-white border border-card-border text-primary-black hover:border-primary-black hover:shadow-xs cursor-pointer"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1.5">
                      {getPageNumbers().map((page, index) => {
                        if (page === "...") {
                          return (
                            <span
                              key={`ellipsis-${index}`}
                              className="px-2 text-light-grey text-sm font-bold select-none"
                            >
                              &hellip;
                            </span>
                          );
                        }
                        const pageNum = Number(page);
                        const isActive = currentPage === pageNum;
                        return (
                          <button
                            key={`page-${pageNum}`}
                            type="button"
                            onClick={() => handlePageChange(pageNum)}
                            aria-current={isActive ? "page" : undefined}
                            aria-label={`Page ${pageNum}`}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                              isActive
                                ? "bg-primary-black text-white shadow-xs"
                                : "bg-white border border-card-border text-primary-black hover:border-primary-black hover:bg-neutral-50"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Page Button */}
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                      className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                        currentPage === totalPages
                          ? "opacity-35 cursor-not-allowed bg-transparent text-light-grey"
                          : "bg-white border border-card-border text-primary-black hover:border-primary-black hover:shadow-xs cursor-pointer"
                      }`}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
              )}
            </>
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
