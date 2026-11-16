export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

// Single source of truth for all real, published blogs
export const REAL_BLOGS: BlogPost[] = [
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

/**
 * Returns adjacent (previous and next) posts for a given blog slug.
 * If only 1 post exists or at boundaries, fallback actions (All Blogs / Demo CTA) are provided.
 */
export function getAdjacentPosts(currentSlug: string) {
  const currentIndex = REAL_BLOGS.findIndex((post) => post.slug === currentSlug);

  const prevPost =
    currentIndex > 0 ? REAL_BLOGS[currentIndex - 1] : null;

  const nextPost =
    currentIndex >= 0 && currentIndex < REAL_BLOGS.length - 1
      ? REAL_BLOGS[currentIndex + 1]
      : null;

  return {
    prev: prevPost
      ? { title: prevPost.title, href: `/blogs/${prevPost.slug}` }
      : { title: "ALL BLOGS & INSIGHTS", href: "/blogs" },
    next: nextPost
      ? { title: nextPost.title, href: `/blogs/${nextPost.slug}` }
      : { title: "REQUEST A LIVE VOICE AI DEMO", href: "#contact" },
    hasRealPrev: !!prevPost,
    hasRealNext: !!nextPost,
    totalPosts: REAL_BLOGS.length,
  };
}
