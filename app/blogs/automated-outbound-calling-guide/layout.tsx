import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Automated Outbound Calling? A Business Guide | Callience",
  description:
    "Automated outbound calling uses software or AI voice agents to place calls at scale. Learn how it works, where it helps, and how it differs from dialers.",
  keywords: [
    "Automated outbound calling",
    "outbound call automation",
    "automated outbound calls",
    "automated outbound calling software",
    "outbound calling software",
    "outbound calling campaigns",
    "AI outbound calling",
    "AI outbound calling bot",
    "AI phone call automation",
    "AI voice bot",
    "automated calling software",
    "automated phone calls",
    "sales automation software",
    "what is automated outbound calling",
    "how automated outbound calling works",
    "how AI outbound calling works for businesses",
    "benefits of automated outbound calling",
    "difference between AI outbound calling and traditional calling",
    "how businesses automate outbound phone calls",
    "common uses of automated outbound calling",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/automated-outbound-calling-guide",
  },
  openGraph: {
    title: "What Is Automated Outbound Calling? A Business Guide | Callience",
    description:
      "Automated outbound calling uses software or AI voice agents to place calls at scale. Learn how it works, where it helps, and how it differs from dialers.",
    url: "https://www.callience.in/blogs/automated-outbound-calling-guide",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-20T00:00:00.000Z",
    modifiedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/automated-outbound-calling-guide.png",
        width: 1440,
        height: 515,
        alt: "What Is Automated Outbound Calling and How Does It Help Businesses?",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Automated Outbound Calling? A Business Guide | Callience",
    description:
      "Automated outbound calling uses software or AI voice agents to place calls at scale. Learn how it works, where it helps, and how it differs from dialers.",
    images: ["https://www.callience.in/automated-outbound-calling-guide.png"],
  },
};

export default function AutomatedOutboundCallingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Is Automated Outbound Calling and How Does It Help Businesses?",
    description:
      "Automated outbound calling uses software or AI voice agents to place calls at scale. Learn how it works, where it helps, and how it differs from dialers.",
    image: ["https://www.callience.in/automated-outbound-calling-guide.png"],
    datePublished: "2026-11-20T00:00:00.000Z",
    dateModified: "2026-11-20T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/automated-outbound-calling-guide",
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
        name: "What Is Automated Outbound Calling and How Does It Help Businesses?",
        item: "https://www.callience.in/blogs/automated-outbound-calling-guide",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is automated outbound calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Automated outbound calling is the use of software to place phone calls automatically. Depending on the system, it may connect answered calls to human agents, play a recorded message, or use an AI voice agent to hold the whole conversation.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI outbound calling work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The platform dials contacts from a list. An AI voice agent then converts speech to text, understands the person's intent, decides the next step and replies in a natural voice. It records the outcome and transfers to a human when needed.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between AI outbound calling and traditional calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In traditional calling, humans make or handle each call, sometimes with a dialler that speeds up dialling. In AI outbound calling, an AI voice agent conducts the conversation, so many structured calls can run at once and results are logged automatically.",
        },
      },
      {
        "@type": "Question",
        name: "What are common uses of automated outbound calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common uses include appointment and payment reminders, order and delivery confirmations, feedback surveys, event reminders, service alerts, re-engagement calls and first-step lead qualification.",
        },
      },
      {
        "@type": "Question",
        name: "Is automated outbound calling legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can be, when it follows the rules in the country you call. In India, that includes TRAI's rules on number series, consent and Do Not Disturb preferences, and data protection law. Confirm requirements with your provider and legal advisor.",
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
