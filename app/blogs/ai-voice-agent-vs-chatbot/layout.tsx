import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent vs Chatbot: A Business Use-Case Guide | Callience",
  description:
    "Compare AI voice agents and chatbots for business, including use cases, customer experience, costs and integration options.",
  keywords: [
    "AI voice agent vs chatbot",
    "AI voice agents vs chatbots",
    "AI voice agent vs chatbot for business",
    "voice AI vs chatbot",
    "AI chatbot vs voice agent",
    "voicebot vs chatbot",
    "voice assistant vs chatbot",
    "AI voice agent vs text chatbot",
    "AI voice agent for customer support",
    "voice chatbot",
    "AI chatbot",
    "Voice bot",
    "Voice AI",
    "Chatbot",
    "when to use voice AI vs chatbot",
    "AI voice agent vs chatbot cost",
    "AI voice agent and chatbot integration",
    "AI chatbot to voice agent handoff",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-voice-agent-vs-chatbot",
  },
  openGraph: {
    title: "AI Voice Agent vs Chatbot: A Business Use-Case Guide | Callience",
    description:
      "Compare AI voice agents and chatbots for business, including use cases, customer experience, costs and integration options.",
    url: "https://www.callience.in/blogs/ai-voice-agent-vs-chatbot",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-17T00:00:00.000Z",
    modifiedTime: "2026-11-17T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/AI%20Voice%20Agent%20vs%20Chatbot_%20A%20Business%20Use-Case%20Guide.png",
        width: 1440,
        height: 515,
        alt: "AI Voice Agent vs Chatbot: A Business Use-Case Guide",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent vs Chatbot: A Business Use-Case Guide | Callience",
    description:
      "Compare AI voice agents and chatbots for business, including use cases, customer experience, costs and integration options.",
    images: ["https://www.callience.in/AI%20Voice%20Agent%20vs%20Chatbot_%20A%20Business%20Use-Case%20Guide.png"],
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
    headline: "AI Voice Agent vs Chatbot: A Business Use-Case Guide",
    description:
      "Compare AI voice agents and chatbots for business, including use cases, customer experience, costs and integration options.",
    image: "https://www.callience.in/AI%20Voice%20Agent%20vs%20Chatbot_%20A%20Business%20Use-Case%20Guide.png",
    datePublished: "2026-11-17T00:00:00.000Z",
    dateModified: "2026-11-17T00:00:00.000Z",
    wordCount: 1400,
    inLanguage: "en-IN",
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
      "@id": "https://www.callience.in/blogs/ai-voice-agent-vs-chatbot",
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
        name: "AI Voice Agent vs Chatbot: A Business Use-Case Guide",
        item: "https://www.callience.in/blogs/ai-voice-agent-vs-chatbot",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between an AI voice agent and a chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI voice agent communicates through spoken conversations, while a chatbot primarily communicates through written messages on websites, apps or messaging platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Is an AI voice agent better than an AI chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neither is universally better. Voice agents are suitable for phone conversations and outbound calling, while chatbots are useful for website enquiries and text-based support.",
        },
      },
      {
        "@type": "Question",
        name: "Can an AI voice agent and chatbot work together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Businesses can integrate both systems through APIs and connected platforms to support customers across voice and text channels.",
        },
      },
      {
        "@type": "Question",
        name: "Is an AI voice agent more expensive than a chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on usage and platform pricing. Voice agents may involve telephony and audio-processing charges, while chatbots may have subscription and message-processing costs.",
        },
      },
      {
        "@type": "Question",
        name: "What is an AI chatbot to voice agent handoff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a workflow in which a customer moves from a text-based chatbot conversation to an AI voice agent, with relevant customer details and conversation context shared where the integration supports it.",
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
