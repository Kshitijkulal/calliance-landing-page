import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Lead Follow-Ups: A Small Business Guide | Callience",
  description:
    "Learn how AI calling helps small businesses automate lead follow-ups, qualify prospects and schedule callbacks more efficiently.",
  keywords: [
    "AI calling for lead follow-up",
    "AI lead follow up",
    "AI lead follow up automation",
    "AI lead follow up calls",
    "AI lead qualification and follow up",
    "AI powered lead follow up",
    "AI lead follow up software",
    "AI sales automation",
    "lead follow up software",
    "how small businesses can automate lead follow ups",
    "how to automate lead follow ups with AI",
    "how AI voice agents follow up with leads",
    "how AI calling helps convert leads",
    "how to automate sales follow up calls",
    "best way to follow up with new leads automatically",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-calling-for-lead-follow-ups",
  },
  openGraph: {
    title: "AI Calling for Lead Follow-Ups: A Small Business Guide | Callience",
    description:
      "Learn how AI calling helps small businesses automate lead follow-ups, qualify prospects and schedule callbacks more efficiently.",
    url: "https://www.callience.in/blogs/ai-calling-for-lead-follow-ups",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-18T00:00:00.000Z",
    modifiedTime: "2026-11-18T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/AI%20Calling%20for%20Lead%20Follow-Ups_%20How%20Small%20Businesses%20Can%20Automate%20Them.png",
        width: 1440,
        height: 515,
        alt: "AI Calling for Lead Follow-Ups: How Small Businesses Can Automate Them",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling for Lead Follow-Ups: A Small Business Guide | Callience",
    description:
      "Learn how AI calling helps small businesses automate lead follow-ups, qualify prospects and schedule callbacks more efficiently.",
    images: [
      "https://www.callience.in/AI%20Calling%20for%20Lead%20Follow-Ups_%20How%20Small%20Businesses%20Can%20Automate%20Them.png",
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI Calling for Lead Follow-Ups: How Small Businesses Can Automate Them",
    description:
      "Learn how AI calling helps small businesses automate lead follow-ups, qualify prospects and schedule callbacks more efficiently.",
    image:
      "https://www.callience.in/AI%20Calling%20for%20Lead%20Follow-Ups_%20How%20Small%20Businesses%20Can%20Automate%20Them.png",
    datePublished: "2026-11-18T00:00:00.000Z",
    dateModified: "2026-11-18T00:00:00.000Z",
    wordCount: 1600,
    inLanguage: "en-IN",
    keywords: Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : (metadata.keywords || ""),
    author: {
      "@type": "Person",
      name: "Karanvir Singh",
      url: "https://www.callience.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Callience",
      url: "https://www.callience.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.callience.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.callience.in/blogs/ai-calling-for-lead-follow-ups",
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
        name: "AI Calling for Lead Follow-Ups: How Small Businesses Can Automate Them",
        item: "https://www.callience.in/blogs/ai-calling-for-lead-follow-ups",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can small businesses automate lead follow-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small businesses can use AI voice agents to automatically contact new enquiries, ask qualification questions, record customer responses, and schedule further calls.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents follow up with leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents contact potential customers, understand their requirements, ask relevant questions, and record whether they are interested, unavailable, or requesting a callback.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI calling help convert leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling helps businesses maintain consistent communication, reduce missed follow-ups, identify qualified customers, and connect interested leads with sales representatives.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI lead follow-up software manage unanswered calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Businesses can configure follow-up workflows to record unanswered calls and schedule appropriate retry attempts, subject to customer preferences and calling rules.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI calling replace sales representatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AI can manage repetitive calling and basic lead qualification, while sales representatives remain important for negotiations, detailed discussions, and closing deals.",
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
