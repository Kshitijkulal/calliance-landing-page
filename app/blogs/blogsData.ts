export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categories?: string[];
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
  {
    id: 7,
    slug: "what-is-an-ai-voice-agent",
    title: "WHAT IS AN AI VOICE AGENT? HOW IT WORKS FOR BUSINESS",
    excerpt:
      "An AI voice agent is an artificial intelligence-powered system that communicates with customers through natural, human-like phone conversations. Learn how it works, applications, and benefits.",
    image: "/what-is-an-ai-voice-agent-how-it-works-for-business.png",
    category: "AI Technology",
    publishedAt: "2026-11-18",
    lastModified: "2026-11-18",
  },
  {
    id: 8,
    slug: "inbound-vs-outbound-ai-calling",
    title: "INBOUND VS OUTBOUND AI CALLING: CHOOSE WHAT TO AUTOMATE",
    excerpt:
      "Compare inbound vs outbound AI calling for modern businesses. Discover differences in architecture, use cases, costs, and regulatory compliance to choose the right phone automation strategy.",
    image: "/inbound-vs-outbound-ai-calling.png",
    category: "AI Calling",
    publishedAt: "2026-11-18",
    lastModified: "2026-11-18",
  },
  {
    id: 9,
    slug: "native-language-ai-calling-indian-businesses",
    title: "WHY NATIVE-LANGUAGE AI CALLING MATTERS FOR INDIAN BUSINESSES",
    excerpt:
      "Learn how native-language AI calling helps Indian businesses build trust, reduce language barriers and improve customer communication.",
    image: "/Why Native-Language AI Calling Matters for Indian Businesses.png",
    category: "AI Calling",
    publishedAt: "2026-11-19",
    lastModified: "2026-11-19",
  },
  {
    id: 10,
    slug: "ai-voice-agents-different-languages-accents",
    title: "CAN AI VOICE AGENTS UNDERSTAND DIFFERENT LANGUAGES AND ACCENTS?",
    excerpt:
      "Learn how AI voice agents understand different languages, Indian accents and Hinglish, and what affects speech recognition accuracy.",
    image: "/Can AI Voice Agents Understand Different Languages and Accents.png",
    category: "AI Technology",
    publishedAt: "2026-11-19",
    lastModified: "2026-11-19",
  },
  {
    id: 11,
    slug: "multilingual-voice-ai-reach-more-customers",
    title: "HOW MULTILINGUAL VOICE AI HELPS BUSINESSES REACH MORE CUSTOMERS",
    excerpt:
      "Learn how multilingual Voice AI helps businesses cover new regions, language markets and customer segments in India without adding a team for every language.",
    image: "/multilingual-voice-ai-reach-more-customers.png",
    category: "AI Calling",
    publishedAt: "2026-11-19",
    lastModified: "2026-11-19",
  },
  {
    id: 12,
    slug: "ai-inbound-call-handling-high-volume-enquiries",
    title: "AI INBOUND CALL HANDLING FOR HIGH-VOLUME CUSTOMER ENQUIRIES",
    excerpt:
      "AI inbound call handling answers enquiries around the clock, absorbs peak-hour surges, resolves repetitive questions and takes pressure off support teams.",
    image: "/ai-inbound-call-handling-high-volume-enquiries.png",
    category: "AI Calling",
    publishedAt: "2026-11-19",
    lastModified: "2026-11-19",
  },
  {
    id: 13,
    slug: "ai-human-collaboration-in-call-centers",
    title: "AI HUMAN COLLABORATION IN CALL CENTERS: CAN AI VOICE AGENTS WORK ALONGSIDE HUMAN TEAMS?",
    excerpt:
      "Learn how AI voice agents and human teams share calls, manage escalations and improve customer support in hybrid call centers.",
    image: "/ai-human-collaboration-in-call-centers.png",
    category: "AI Calling",
    publishedAt: "2026-11-20",
    lastModified: "2026-11-20",
  },
  {
    id: 14,
    slug: "set-up-outbound-calling-campaign-with-ai",
    title: "HOW TO SET UP AN OUTBOUND CALLING CAMPAIGN WITH AI",
    excerpt:
      "Learn how to set up an outbound calling campaign with AI, automate follow-ups, manage leads, and track campaign performance.",
    image: "/How to Set Up an Outbound Calling Campaign with AI.png",
    category: "AI Calling",
    publishedAt: "2026-11-20",
    lastModified: "2026-11-20",
  },
  {
    id: 15,
    slug: "is-ai-calling-right-for-growing-businesses",
    title: "IS AI CALLING SUITABLE FOR SMALL AND GROWING BUSINESSES?",
    excerpt:
      "Is AI calling right for growing businesses? See what it does, what it costs, when to adopt it, when to stay with human telecallers, and what to check first.",
    image: "/is-ai-calling-right-for-growing-businesses.png",
    category: "AI Calling",
    publishedAt: "2026-11-20",
    lastModified: "2026-11-20",
  },
  {
    id: 16,
    slug: "automated-outbound-calling-guide",
    title: "WHAT IS AUTOMATED OUTBOUND CALLING AND HOW DOES IT HELP BUSINESSES?",
    excerpt:
      "Automated outbound calling uses software or AI voice agents to place calls at scale. Learn how it works, where it helps, and how it differs from dialers.",
    image: "/automated-outbound-calling-guide.png",
    category: "AI Calling",
    categories: ["AI Technology", "Sales & Lead Generation", "AI Calling"],
    publishedAt: "2026-11-20",
    lastModified: "2026-11-20",
  },
  {
    id: 17,
    slug: "automated-follow-ups-manage-sales-enquiries",
    title: "HOW AUTOMATED FOLLOW-UPS HELP BUSINESSES MANAGE SALES ENQUIRIES",
    excerpt:
      "Learn how automated enquiry follow-ups help businesses manage sales enquiries, qualify leads, schedule callbacks, and improve conversions.",
    image: "/How Automated Follow-Ups Help Businesses Manage Sales Enquiries.png",
    category: "Sales & Lead Generation",
    categories: ["AI Technology", "Sales & Lead Generation", "AI Calling"],
    publishedAt: "2026-11-20",
    lastModified: "2026-11-20",
  },
  {
    id: 18,
    slug: "ai-calling-payment-reminders",
    title: "HOW BUSINESSES CAN USE AI CALLING FOR PAYMENT REMINDERS AND COLLECTIONS",
    excerpt:
      "Discover how AI calling for payment reminders helps businesses automate EMI reminders, follow up on overdue payments, and track collections.",
    image: "/How Businesses Can Use AI Calling for Payment Reminders and Collections.png",
    category: "AI Calling",
    categories: ["AI Technology", "Sales & Lead Generation", "AI Calling"],
    publishedAt: "2026-11-20",
    lastModified: "2026-11-20",
  },
  {
    id: 19,
    slug: "measure-ai-calling-campaign-roi",
    title: "HOW TO MEASURE ROI FROM AI VOICE CALLING CAMPAIGNS",
    excerpt:
      "Learn how to measure AI calling campaign ROI using conversion rates, cost per lead, customer acquisition cost, and revenue metrics.",
    image: "/How to Measure ROI from AI Voice Calling Campaigns.png",
    category: "AI Calling",
    categories: ["AI Technology", "Sales & Lead Generation", "AI Calling"],
    publishedAt: "2026-11-21",
    lastModified: "2026-11-21",
  },
  {
    id: 20,
    slug: "ai-call-analytics-campaign-performance",
    title: "HOW AI CALL ANALYTICS AND CONVERSATION INSIGHTS IMPROVE CAMPAIGN PERFORMANCE",
    excerpt:
      "Discover how AI call analytics uses conversation insights, call transcripts, and sentiment analysis to improve calling campaign performance.",
    image: "/How AI Call Analytics and Conversation Insights Improve Campaign Performance.png",
    category: "AI Calling",
    categories: ["AI Technology", "Sales & Lead Generation", "AI Calling"],
    publishedAt: "2026-11-21",
    lastModified: "2026-11-21",
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
