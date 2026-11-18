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
    image: "/How Voice AI Works_ A Beginner's Guide to AI Calls.png",
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
    image: "/AI Voice Agent vs IVR_ Which Is Better for Business.png",
    category: "AI Technology",
    publishedAt: "2026-11-17",
    lastModified: "2026-11-17",
  },
  {
    id: 3,
    slug: "ai-voice-agent-vs-chatbot",
    title: "AI VOICE AGENT VS CHATBOT: A BUSINESS USE-CASE GUIDE",
    excerpt:
      "Businesses use AI-powered communication tools to answer customer questions, manage enquiries and provide support. Compare AI voice agents and chatbots for business, including use cases, customer experience, costs and integration options.",
    image: "/AI Voice Agent vs Chatbot_ A Business Use-Case Guide.png",
    category: "AI Technology",
    publishedAt: "2026-11-17",
    lastModified: "2026-11-17",
  },
  {
    id: 4,
    slug: "ai-calling-vs-traditional-telecalling",
    title: "AI CALLING VS TRADITIONAL TELECALLING: COST, SCALE & TRUST",
    excerpt:
      "Compare AI calling and traditional telecalling on cost, scalability, customer trust and business applications. Discover which approach works best for growing businesses.",
    image: "/ai-calling-vs-traditional-telecalling.png",
    category: "AI Technology",
    publishedAt: "2026-11-17",
    lastModified: "2026-11-17",
  },
  {
    id: 5,
    slug: "ai-voice-calling-for-msmes",
    title: "HOW MSMES CAN USE AI VOICE CALLING TO MANAGE CUSTOMER OUTREACH",
    excerpt:
      "AI voice calling helps MSMEs automate outreach, qualify leads, send reminders, and manage follow-ups.",
    image: "/How MSMEs Can Use AI Voice Calling to Manage Customer Outreach.png",
    category: "Sales & Lead Generation",
    publishedAt: "2026-11-18",
    lastModified: "2026-11-18",
  },
  {
    id: 6,
    slug: "ai-calling-for-lead-follow-ups",
    title: "AI CALLING FOR LEAD FOLLOW-UPS: HOW SMALL BUSINESSES CAN AUTOMATE THEM",
    excerpt:
      "Learn how AI calling helps small businesses automate lead follow-ups, qualify prospects and schedule callbacks more efficiently.",
    image: "/AI Calling for Lead Follow-Ups_ How Small Businesses Can Automate Them.png",
    category: "Sales & Lead Generation",
    publishedAt: "2026-11-18",
    lastModified: "2026-11-18",
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
