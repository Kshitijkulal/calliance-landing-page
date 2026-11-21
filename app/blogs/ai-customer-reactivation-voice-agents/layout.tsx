import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Customer Reactivation: Win Back Inactive Customers | Callience",
  description:
    "AI customer reactivation uses voice agents to call lapsed customers, learn why they left and bring them back. See how win-back calls work and what to measure.",
  keywords: [
    "AI customer reactivation",
    "AI calls for inactive customers",
    "AI calls for dormant customers",
    "AI calling for customer reactivation",
    "AI voice agent for customer reactivation",
    "automated customer reactivation",
    "dormant customer reactivation",
    "AI customer re-engagement",
    "customer win-back campaigns",
    "AI customer retention calls",
    "automated customer win-back calls",
    "lapsed customer reactivation",
    "customer reactivation",
    "customer retention software",
    "customer engagement software",
    "customer re-engagement",
    "AI voice bot",
    "automated calling software",
    "customer retention strategies",
    "how AI voice agents help businesses re-engage inactive customers",
    "how businesses can reactivate dormant customers using AI",
    "how AI calling helps win back inactive customers",
    "benefits of automated customer reactivation calls",
    "how to create customer win-back campaigns using AI",
    "how businesses can reconnect with lapsed customers",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-customer-reactivation-voice-agents",
  },
  openGraph: {
    title: "AI Customer Reactivation: Win Back Inactive Customers | Callience",
    description:
      "AI customer reactivation uses voice agents to call lapsed customers, learn why they left and bring them back. See how win-back calls work and what to measure.",
    url: "https://www.callience.in/blogs/ai-customer-reactivation-voice-agents",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-21T00:00:00.000Z",
    modifiedTime: "2026-11-21T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/ai-customer-reactivation-voice-agents.png",
        width: 1440,
        height: 515,
        alt: "AI Customer Reactivation: How Voice Agents Re-Engage Inactive Customers",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Reactivation: Win Back Inactive Customers | Callience",
    description:
      "AI customer reactivation uses voice agents to call lapsed customers, learn why they left and bring them back. See how win-back calls work and what to measure.",
    images: [
      "https://www.callience.in/ai-customer-reactivation-voice-agents.png",
    ],
  },
};

export default function AICustomerReactivationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI Customer Reactivation: How Voice Agents Re-Engage Inactive Customers",
    description:
      "AI customer reactivation uses voice agents to call lapsed customers, learn why they left and bring them back. See how win-back calls work and what to measure.",
    image: ["https://www.callience.in/ai-customer-reactivation-voice-agents.png"],
    datePublished: "2026-11-21T00:00:00.000Z",
    dateModified: "2026-11-21T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: "Divyanshu Singh",
    },
    publisher: {
      "@type": "Organization",
      name: "Callience",
      logo: {
        "@type": "ImageObject",
        url: "https://www.callience.in/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.callience.in/blogs/ai-customer-reactivation-voice-agents",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.callience.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.callience.in/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Customer Reactivation: How Voice Agents Re-Engage Inactive Customers",
        item: "https://www.callience.in/blogs/ai-customer-reactivation-voice-agents",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do AI voice agents help businesses re-engage inactive customers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They call customers who have stopped engaging, use their history to personalise the conversation, ask what changed and offer a relevant next step. Responses and reasons are recorded for follow-up.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses reactivate dormant customers using AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Segment dormant customers from CRM data, confirm calling permissions, write a short personalised script and run a pilot with an AI voice agent. Route interested customers to a salesperson or booking and measure results against a control group.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI calling help win back inactive customers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It contacts every customer in a segment consistently, listens to their reasons for leaving and responds with a suitable option. It also frees staff to handle the customers who show interest.",
        },
      },
      {
        "@type": "Question",
        name: "What are customer win-back campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customer win-back campaigns are planned outreach efforts to bring back customers who have stopped buying or engaging, using calls, messages or offers matched to their history.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of automated customer reactivation calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scale, consistent personalised outreach, insight into why customers left, less manual calling and clearly recorded outcomes for each call.",
        },
      },
      {
        "@type": "Question",
        name: "How should businesses measure reactivation campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Track connect and completion rates, reactivation rate, revenue per reactivated customer, retention afterwards, reasons for inactivity and opt-outs, and compare results with a control group that was not called.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
