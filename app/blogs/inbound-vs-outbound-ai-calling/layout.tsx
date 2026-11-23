import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbound vs Outbound AI Calling: Choose What to Automate | Callience",
  description:
    "Compare inbound vs outbound AI calling for modern businesses. Discover differences in architecture, use cases, costs, and regulatory compliance to choose the right phone automation strategy.",
  keywords: [
    "inbound vs outbound AI calling",
    "AI calling",
    "inbound AI calling",
    "outbound AI calling",
    "inbound voice AI",
    "outbound voice AI",
    "inbound vs outbound AI voice agents",
    "automated outbound calls",
    "AI calling for lead follow-up",
    "AI calling for appointment reminders",
    "AI calling for payment reminders",
    "TRAI compliant AI calling India",
    "multilingual voice AI India",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/inbound-vs-outbound-ai-calling",
  },
  openGraph: {
    title: "Inbound vs Outbound AI Calling: Choose What to Automate | Callience",
    description:
      "Compare inbound vs outbound AI calling for modern businesses. Discover differences in architecture, use cases, costs, and regulatory compliance to choose the right phone automation strategy.",
    url: "https://www.callience.in/blogs/inbound-vs-outbound-ai-calling",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-18T00:00:00.000Z",
    modifiedTime: "2026-11-18T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/inbound-vs-outbound-ai-calling.png",
        width: 1440,
        height: 515,
        alt: "Inbound vs Outbound AI Calling: Choose What to Automate",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbound vs Outbound AI Calling: Choose What to Automate | Callience",
    description:
      "Compare inbound vs outbound AI calling for modern businesses. Discover differences in architecture, use cases, costs, and regulatory compliance to choose the right phone automation strategy.",
    images: ["https://www.callience.in/inbound-vs-outbound-ai-calling.png"],
  },
};

export default function InboundVsOutboundAICallingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Inbound vs Outbound AI Calling: Choose What to Automate",
    description:
      "Compare inbound vs outbound AI calling for modern businesses. Discover differences in architecture, use cases, costs, and regulatory compliance to choose the right phone automation strategy.",
    image: [
      "https://www.callience.in/inbound-vs-outbound-ai-calling.png",
    ],
    datePublished: "2026-11-18T00:00:00.000Z",
    dateModified: "2026-11-18T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/inbound-vs-outbound-ai-calling",
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
        name: "Inbound vs Outbound AI Calling: Choose What to Automate",
        item: "https://www.callience.in/blogs/inbound-vs-outbound-ai-calling",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between inbound and outbound AI calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inbound AI calling handles incoming calls initiated by customers seeking support, bookings, or inquiries, prioritizing resolution and low latency. Outbound AI calling proactively initiates calls from the business to prospects or customers for lead follow-ups, appointment reminders, qualification, and payment notifications.",
        },
      },
      {
        "@type": "Question",
        name: "What is inbound AI calling and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inbound AI calling uses conversational voice AI agents connected to business telephony (virtual numbers or toll-free lines). When a customer calls, speech recognition (ASR) transcribes their speech, a Large Language Model (LLM) understands intent and queries backend databases or CRMs via API webhooks, and text-to-speech (TTS) responds instantly in natural, human-like voice.",
        },
      },
      {
        "@type": "Question",
        name: "What is outbound AI calling and what are its best use cases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Outbound AI calling automates phone outreach initiated by businesses. Top use cases include immediate lead follow-up within 60 seconds of web form submissions, appointment and webinar attendance reminders, renewal and payment EMI notifications, customer satisfaction surveys, and re-engaging inactive leads.",
        },
      },
      {
        "@type": "Question",
        name: "Can an AI voice agent handle both inbound and outbound calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Leading conversational AI platforms like Callience support hybrid calling architectures. A unified AI voice agent can run outbound lead generation campaigns and seamlessly answer inbound callback inquiries from the exact same customers with full contextual history.",
        },
      },
      {
        "@type": "Question",
        name: "Is outbound AI calling legal and compliant with TRAI regulations in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, outbound AI calling is fully legal in India when configured according to Telecom Regulatory Authority of India (TRAI) guidelines. This includes scrubbing contact lists against the National Customer Preference Register (NCPR/DND), calling strictly within permitted hours (9:00 AM to 9:00 PM), using registered telemarketing headers (140/160 series), and honoring opt-outs.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for lead generation: inbound or outbound AI calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both play critical roles in a high-converting sales funnel. Inbound AI calling captures high-intent prospects who call directly from search, Google Ads, or social campaigns. Outbound AI calling accelerates speed-to-lead by immediately calling prospects who submitted forms or downloaded resources.",
        },
      },
      {
        "@type": "Question",
        name: "What languages and accents do conversational voice AI agents support in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern voice AI agents like Callience support over 65+ languages including English, Hindi, Hinglish, Tamil, Telugu, Marathi, Kannada, Bengali, Gujarati, and Punjabi, complete with native regional accents, natural conversational pauses, and speech interruption capabilities.",
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
