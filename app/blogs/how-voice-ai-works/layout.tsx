import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Voice AI Works: A Beginner's Guide to AI Phone Calls",
  description:
    "Voice AI allows businesses to communicate with customers through automated phone conversations. Learn how speech recognition, language models, and text-to-speech work together.",
  keywords: [
    "How Voice AI Works",
    "Beginner's Guide to AI Phone Calls",
    "AI Calling",
    "Automatic Speech Recognition",
    "Text-to-Speech",
    "AI Voice Agents",
    "Callience",
    "AI phone calls",
    "AI calling process",
    "AI calling system",
    "AI voice agent call flow",
    "AI speech recognition",
    "speech to text AI",
    "text to speech AI",
    "voice AI latency",
    "AI post call analysis",
  ],
  alternates: {
    canonical: "/blogs/how-voice-ai-works",
  },
  openGraph: {
    title: "How Voice AI Works: A Beginner's Guide to AI Phone Calls | Callience",
    description:
      "Voice AI allows businesses to communicate with customers through automated phone conversations. Learn how an AI-powered phone conversation works from beginning to end.",
    url: "https://www.callience.in/blogs/how-voice-ai-works",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-13T00:00:00.000Z",
    modifiedTime: "2026-11-17T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/blog-hero-voice-ai-guide.webp",
        width: 1440,
        height: 515,
        alt: "How Voice AI Works: A Beginner's Guide to AI Phone Calls",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Voice AI Works: A Beginner's Guide to AI Phone Calls | Callience",
    description:
      "Voice AI allows businesses to communicate with customers through automated phone conversations.",
    images: ["https://www.callience.in/blog-hero-voice-ai-guide.webp"],
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
    headline: "How Voice AI Works: A Beginner's Guide to AI Phone Calls",
    description:
      "Voice AI allows businesses to communicate with customers through automated phone conversations. Learn how speech recognition, language models, and text-to-speech work together.",
    image: "https://www.callience.in/blog-hero-voice-ai-guide.webp",
    datePublished: "2026-11-13T00:00:00.000Z",
    dateModified: "2026-11-17T00:00:00.000Z",
    wordCount: 1650,
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
      "@id": "https://www.callience.in/blogs/how-voice-ai-works",
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
        name: "How Voice AI Works: A Beginner's Guide to AI Phone Calls",
        item: "https://www.callience.in/blogs/how-voice-ai-works",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Voice AI work in simple words?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voice AI listens to a person's speech, understands the message and responds using generated audio.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies are used in Voice AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common technologies include ASR, LLMs and TTS. Some systems also use direct speech-to-speech models.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between ASR and TTS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ASR converts speech into text, while TTS converts written text into spoken audio.",
        },
      },
      {
        "@type": "Question",
        name: "What is Voice AI latency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voice AI latency is the delay between a customer's speech and the AI's spoken response.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents handle interruptions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some platforms support interruptions or barge-in, allowing customers to speak while the AI is responding.",
        },
      },
      {
        "@type": "Question",
        name: "What is AI post-call analysis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It analyses completed conversations to generate transcripts, summaries and call outcomes.",
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
