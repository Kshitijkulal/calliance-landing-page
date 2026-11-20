import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is AI Calling Right for Growing Businesses? A Guide | Callience",
  description:
    "Is AI calling right for growing businesses? See what it does, what it costs, when to adopt it, when to stay with human telecallers, and what to check first.",
  keywords: [
    "Is AI calling right for growing businesses",
    "AI calling for growing businesses",
    "AI calling for scaling businesses",
    "AI calling solutions for growing businesses",
    "AI calling for startups and growing companies",
    "AI voice agents for growing businesses",
    "AI calling cost for small businesses",
    "AI calling for startups",
    "AI for small business",
    "AI business automation",
    "how AI calling helps growing businesses",
    "can small businesses afford AI calling",
    "when should a small business adopt AI calling",
    "when should businesses switch to AI voice agents",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/is-ai-calling-right-for-growing-businesses",
  },
  openGraph: {
    title: "Is AI Calling Right for Growing Businesses? A Guide | Callience",
    description:
      "Is AI calling right for growing businesses? See what it does, what it costs, when to adopt it, when to stay with human telecallers, and what to check first.",
    url: "https://www.callience.in/blogs/is-ai-calling-right-for-growing-businesses",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-20T00:00:00.000Z",
    modifiedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/is-ai-calling-right-for-growing-businesses.png",
        width: 1440,
        height: 515,
        alt: "Is AI Calling Suitable for Small and Growing Businesses?",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is AI Calling Right for Growing Businesses? A Guide | Callience",
    description:
      "Is AI calling right for growing businesses? See what it does, what it costs, when to adopt it, when to stay with human telecallers, and what to check first.",
    images: ["https://www.callience.in/is-ai-calling-right-for-growing-businesses.png"],
  },
};

export default function IsAICallingRightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Is AI Calling Suitable for Small and Growing Businesses?",
    description:
      "Is AI calling right for growing businesses? See what it does, what it costs, when to adopt it, when to stay with human telecallers, and what to check first.",
    image: [
      "https://www.callience.in/is-ai-calling-right-for-growing-businesses.png",
    ],
    datePublished: "2026-11-20T00:00:00.000Z",
    dateModified: "2026-11-20T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/is-ai-calling-right-for-growing-businesses",
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
        name: "Is AI Calling Suitable for Small and Growing Businesses?",
        item: "https://www.callience.in/blogs/is-ai-calling-right-for-growing-businesses",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is AI calling suitable for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when a business has regular phone traffic, repetitive questions or missed calls. It is less suitable for very low call volumes or highly complex, relationship-driven calls.",
        },
      },
      {
        "@type": "Question",
        name: "Can small businesses afford AI calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many platforms use usage-based pricing or small monthly plans, so cost scales with call volume. Ask for an all-in estimate that includes telephony, setup and integrations, then compare it with the revenue and staff time you expect to recover.",
        },
      },
      {
        "@type": "Question",
        name: "When should a small business adopt AI calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When calls regularly go unanswered, the same questions repeat, leads wait too long for a response, or you are about to hire mainly to handle call volume, and you have documented answers and a place to record outcomes.",
        },
      },
      {
        "@type": "Question",
        name: "When should businesses switch to AI voice agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most should add AI voice agents gradually instead of switching fully. Start with missed calls, after-hours calls and routine enquiries, and move more volume once escalation rates, customer satisfaction and team confidence are stable.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI calling help startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling for startups gives lean teams phone coverage without building a calling team. It can respond to leads quickly, schedule demos, answer common questions and capture call data as the company grows.",
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
