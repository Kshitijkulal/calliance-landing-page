import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is an AI Voice Agent? How It Works for Business | Callience",
  description:
    "An AI voice agent is an artificial intelligence-powered system that communicates with customers through natural, human-like phone conversations. Learn how it works, business applications, benefits, and limitations.",
  keywords: [
    "What Is an AI Voice Agent",
    "AI voice agent for business",
    "voice AI for business",
    "how AI voice agents work",
    "AI voice technology",
    "AI voice assistant",
    "AI voice bot",
    "automated phone calls",
    "conversational AI calling",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/what-is-an-ai-voice-agent",
  },
  openGraph: {
    title: "What Is an AI Voice Agent? How It Works for Business | Callience",
    description:
      "An AI voice agent is an artificial intelligence-powered system that communicates with customers through natural, human-like phone conversations. Learn how it works, business applications, benefits, and limitations.",
    url: "https://www.callience.in/blogs/what-is-an-ai-voice-agent",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-18T00:00:00.000Z",
    modifiedTime: "2026-11-18T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/what-is-an-ai-voice-agent-how-it-works-for-business.png",
        width: 1440,
        height: 515,
        alt: "What Is an AI Voice Agent? How It Works for Business",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is an AI Voice Agent? How It Works for Business | Callience",
    description:
      "An AI voice agent is an artificial intelligence-powered system that communicates with customers through natural, human-like phone conversations.",
    images: ["https://www.callience.in/what-is-an-ai-voice-agent-how-it-works-for-business.png"],
  },
};

export default function WhatIsAnAIVoiceAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Is an AI Voice Agent? How It Works for Business",
    description:
      "An AI voice agent is an artificial intelligence-powered system that communicates with customers through natural, human-like phone conversations. Learn how it works, business applications, benefits, and limitations.",
    image: [
      "https://www.callience.in/what-is-an-ai-voice-agent-how-it-works-for-business.png",
    ],
    datePublished: "2026-11-18T00:00:00.000Z",
    dateModified: "2026-11-18T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/what-is-an-ai-voice-agent",
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
        name: "What Is an AI Voice Agent? How It Works for Business",
        item: "https://www.callience.in/blogs/what-is-an-ai-voice-agent",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AI voice agent in simple words?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI voice agent is software that communicates with people through phone calls using artificial intelligence. It understands spoken questions and generates relevant voice responses.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They use speech recognition to convert spoken words into text, AI models to understand customer intent and generate responses, and text-to-speech technology to communicate through audio.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between an AI voice agent and an AI voice bot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The terms are sometimes used interchangeably. An AI voice bot generally refers to an automated voice-based conversational system, while an AI voice agent often describes a system with broader conversational and task-handling capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents make outbound calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Depending on the platform, they can make outbound calls for lead qualification, customer follow-ups, appointment reminders and payment reminders.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents communicate in multiple languages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many platforms support multiple languages, although language availability and communication quality depend on their speech recognition and voice-generation capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "Are AI voice agents better than traditional IVR systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents are more flexible for natural conversations, while traditional IVR systems are useful for structured menus and basic call routing. The right option depends on business requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can small businesses and startups use AI voice agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Small businesses and startups can use AI voice agents for repetitive calling activities such as lead follow-ups, appointment reminders and customer enquiries.",
        },
      },
      {
        "@type": "Question",
        name: "Do AI voice agents replace human telecallers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. They automate suitable repetitive conversations, while human telecallers remain important for complex enquiries, negotiations and situations requiring personal judgment.",
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
