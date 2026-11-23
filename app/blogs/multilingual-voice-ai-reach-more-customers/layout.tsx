import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multilingual Voice AI: Reach More Customers Across India | Callience",
  description:
    "Learn how multilingual Voice AI helps businesses cover new regions, language markets and customer segments in India without adding a team for every language.",
  keywords: [
    "Multilingual Voice AI",
    "multilingual AI voice agents",
    "multilingual AI calling",
    "multilingual customer support",
    "multilingual customer engagement",
    "multilingual customer communication",
    "AI voice agents for Indian businesses",
    "AI calling in multiple languages",
    "AI calling for regional markets",
    "AI voice bot in multiple languages",
    "regional language voice AI",
    "AI voice assistant",
    "AI voice bot",
    "multilingual chatbot",
    "AI customer service",
    "AI customer support",
    "contact center AI",
    "multilingual customer service",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/multilingual-voice-ai-reach-more-customers",
  },
  openGraph: {
    title: "Multilingual Voice AI: Reach More Customers Across India | Callience",
    description:
      "Learn how multilingual Voice AI helps businesses cover new regions, language markets and customer segments in India without adding a team for every language.",
    url: "https://www.callience.in/blogs/multilingual-voice-ai-reach-more-customers",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-19T00:00:00.000Z",
    modifiedTime: "2026-11-19T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/multilingual-voice-ai-reach-more-customers.png",
        width: 1440,
        height: 515,
        alt: "How Multilingual Voice AI Helps Businesses Reach More Customers",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilingual Voice AI: Reach More Customers Across India | Callience",
    description:
      "Learn how multilingual Voice AI helps businesses cover new regions, language markets and customer segments in India without adding a team for every language.",
    images: ["https://www.callience.in/multilingual-voice-ai-reach-more-customers.png"],
  },
};

export default function MultilingualVoiceAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Multilingual Voice AI Helps Businesses Reach More Customers",
    description:
      "Learn how multilingual Voice AI helps businesses cover new regions, language markets and customer segments in India without adding a team for every language.",
    image: [
      "https://www.callience.in/multilingual-voice-ai-reach-more-customers.png",
    ],
    datePublished: "2026-11-19T00:00:00.000Z",
    dateModified: "2026-11-19T00:00:00.000Z",
    inLanguage: "en-IN",
    keywords: Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : (metadata.keywords || ""),
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
      "@id": "https://www.callience.in/blogs/multilingual-voice-ai-reach-more-customers",
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
        name: "How Multilingual Voice AI Helps Businesses Reach More Customers",
        item: "https://www.callience.in/blogs/multilingual-voice-ai-reach-more-customers",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is multilingual Voice AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multilingual Voice AI is technology that lets a business talk with customers by phone in more than one language. It uses speech recognition to understand callers, language models to decide the response, and text-to-speech to reply in a natural voice.",
        },
      },
      {
        "@type": "Question",
        name: "How does multilingual Voice AI help businesses reach more customers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It lets a business serve and contact customers in more regional languages without hiring a separate team for each. This opens new states, reaches customer segments that prefer voice, extends coverage to all hours and allows outbound calls at a scale human teams find hard to match.",
        },
      },
      {
        "@type": "Question",
        name: "How is an AI voice bot different from a multilingual chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A multilingual chatbot works through typed text on websites or messaging apps. An AI voice bot works on phone calls, so it can reach customers who prefer speaking, who are less comfortable typing, or who do not use apps.",
        },
      },
      {
        "@type": "Question",
        name: "Which languages can an AI voice agent support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the provider. Many platforms cover major Indian languages such as Hindi, Tamil, Telugu, Bengali and Marathi, but quality differs by language. Ask for a list of production-ready languages and test them with your own scenarios.",
        },
      },
      {
        "@type": "Question",
        name: "Will multilingual AI voice agents replace human agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. They handle routine, high-volume conversations, while human agents handle complex, sensitive and high-value cases. Most businesses get the best results from a hybrid model.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries benefit most from AI calling for regional markets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Industries with large, geographically spread customer bases and frequent calls benefit most, including BFSI, telecom, education, real estate, healthcare, retail and travel.",
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
