export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt?: string;
  lastModified?: string;
}

// Single source of truth for all real, published blogs
export const REAL_BLOGS: BlogPost[] = [
  {
    id: 1,
    slug: "how-voice-ai-works",
    title: "HOW VOICE AI WORKS: A BEGINNER'S GUIDE TO AI PHONE CALLS",
    excerpt:
      "Voice AI allows businesses to communicate with customers through automated phone conversations. It can listen to people, understand their questions and respond using a computer-generated voice. Businesses use AI phone calls for lead qualification, admissions outreach, appointment reminders, payment follow-ups and customer re-engagement.",
    image: "/How Voice AI Works A Beginner's Guide to AI Calls.png",
    category: "AI Technology",
    publishedAt: "2026-11-13",
    lastModified: "2026-11-17",
  },
  {
    id: 2,
    slug: "ai-voice-agent-vs-ivr",
    title: "AI VOICE AGENT VS IVR: WHICH IS BETTER FOR BUSINESS?",
    excerpt:
      "Businesses use phone automation to handle customer enquiries, reduce repetitive calls and improve customer service. Compare traditional IVR systems and AI voice agents on features, costs, resolution rates, and customer experience.",
    image: "/AI Voice Agent vs IVR Which Is Better for Business (1).png",
    category: "AI Technology",
    publishedAt: "2026-11-17",
    lastModified: "2026-11-17",
  },
];

/**
 * Returns adjacent (previous and next) posts for a given blog slug.
 * If no adjacent real posts exist, returns null (strictly NO demo data).
 */
export function getAdjacentPosts(currentSlug: string) {
  const currentIndex = REAL_BLOGS.findIndex((post) => post.slug === currentSlug);
  if (currentIndex === -1) {
    return { prev: null, next: null, totalPosts: REAL_BLOGS.length };
  }

  const prevPost =
    currentIndex > 0 ? REAL_BLOGS[currentIndex - 1] : null;

  const nextPost =
    currentIndex >= 0 && currentIndex < REAL_BLOGS.length - 1
      ? REAL_BLOGS[currentIndex + 1]
      : null;

  return {
    prev: prevPost
      ? { title: prevPost.title, href: `/blogs/${prevPost.slug}` }
      : null,
    next: nextPost
      ? { title: nextPost.title, href: `/blogs/${nextPost.slug}` }
      : null,
    totalPosts: REAL_BLOGS.length,
  };
}
