import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling vs Traditional Telecalling: Cost, Scale & Trust | Callience",
  description:
    "Compare AI calling vs traditional telecalling based on cost, scalability, customer trust and practical business applications to understand which approach works best.",
  keywords: [
    "AI calling vs traditional telecalling",
    "AI calling vs telecalling",
    "AI calling vs manual calling",
    "telecaller cost in India",
    "AI calling cost in India",
    "AI telecaller for lead generation",
    "AI human hybrid calling",
    "AI voice agent vs human telecaller",
    "voice AI calling",
    "call center automation",
    "outbound AI calling",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-calling-vs-traditional-telecalling",
  },
  openGraph: {
    title: "AI Calling vs Traditional Telecalling: Cost, Scale & Trust | Callience",
    description:
      "Compare AI calling vs traditional telecalling based on cost, scalability, customer trust and practical business applications to understand which approach works best.",
    url: "https://www.callience.in/blogs/ai-calling-vs-traditional-telecalling",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-17T00:00:00.000Z",
    modifiedTime: "2026-11-17T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/ai-calling-vs-traditional-telecalling.png",
        width: 1440,
        height: 515,
        alt: "AI Calling vs Traditional Telecalling: Cost, Scale & Trust",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling vs Traditional Telecalling: Cost, Scale & Trust | Callience",
    description:
      "Compare AI calling vs traditional telecalling based on cost, scalability, customer trust and practical business applications to understand which approach works best.",
    images: ["https://www.callience.in/ai-calling-vs-traditional-telecalling.png"],
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
    headline: "AI Calling vs Traditional Telecalling: Cost, Scale & Trust",
    description:
      "Compare AI calling vs traditional telecalling based on cost, scalability, customer trust and practical business applications to understand which approach works best.",
    image: "https://www.callience.in/ai-calling-vs-traditional-telecalling.png",
    datePublished: "2026-11-17T00:00:00.000Z",
    dateModified: "2026-11-17T00:00:00.000Z",
    wordCount: 1650,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: "Divyanshu Singh",
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
      "@id": "https://www.callience.in/blogs/ai-calling-vs-traditional-telecalling",
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
        name: "AI Calling vs Traditional Telecalling: Cost, Scale & Trust",
        item: "https://www.callience.in/blogs/ai-calling-vs-traditional-telecalling",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the main difference between AI calling and traditional telecalling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling uses automated voice agents to communicate with customers, while traditional telecalling relies on human employees. AI is useful for repetitive conversations, while humans are better suited to complex discussions.",
        },
      },
      {
        "@type": "Question",
        name: "Is AI calling cheaper than traditional telecalling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling can reduce costs for high-volume, repetitive tasks. However, actual expenses depend on call duration, platform pricing, telephony charges and implementation requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI calling replace human telecallers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling can automate many routine activities, but human telecallers remain important for sensitive discussions, negotiations and complicated customer enquiries.",
        },
      },
      {
        "@type": "Question",
        name: "Is AI calling suitable for small businesses in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MSMEs and startups can use AI calling for lead qualification, customer follow-ups, appointment reminders and other repetitive communication tasks.",
        },
      },
      {
        "@type": "Question",
        name: "What is AI human hybrid calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI human hybrid calling combines AI voice agents with human representatives. AI handles routine conversations, while human agents manage complex enquiries and important customer interactions.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI calling improve lead generation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling can support lead generation by contacting prospects, asking qualification questions and identifying interested customers. Actual results depend on lead quality, campaign design and follow-up processes.",
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
