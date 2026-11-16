import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Does Voice AI Work? A Beginner's Guide to AI Calling | Callience",
  description:
    "Voice AI is changing how businesses communicate with customers through automated phone conversations. Learn how speech recognition, language models, and text-to-speech work together.",
  keywords: [
    "How Does Voice AI Work",
    "Beginner's Guide to AI Calling",
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
    title: "How Does Voice AI Work? A Beginner's Guide to AI Calling",
    description:
      "Voice AI is changing how businesses communicate with customers through automated phone conversations. Learn how an AI-powered phone conversation works from beginning to end.",
    url: "https://www.callience.in/blogs/how-voice-ai-works",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-13T00:00:00.000Z",
    modifiedTime: "2026-11-13T00:00:00.000Z",
    authors: ["Callience Editorial Team"],
    images: [
      {
        url: "/blog-hero-voice-ai-guide.jpg",
        width: 1440,
        height: 515,
        alt: "How Voice AI Works: A Beginner's Guide to AI Calls",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does Voice AI Work? A Beginner's Guide to AI Calling",
    description:
      "Voice AI is changing how businesses communicate with customers through automated phone conversations.",
    images: ["/blog-hero-voice-ai-guide.jpg"],
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
    headline: "How Does Voice AI Work? A Beginner's Guide to AI Calling",
    description:
      "Voice AI is changing how businesses communicate with customers through automated phone conversations. Learn how speech recognition, language models, and text-to-speech work together.",
    image: "https://www.callience.in/blog-hero-voice-ai-guide.jpg",
    datePublished: "2026-11-13T00:00:00.000Z",
    dateModified: "2026-11-13T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: "Karanvir Singh",
      url: "https://www.callience.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Callience",
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
        name: "How Does Voice AI Work? A Beginner's Guide to AI Calling",
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
        name: "How does voice AI work in simple words?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voice AI listens to what a person says, understands the message and responds using a computer-generated voice.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI make phone calls automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI calling systems can contact customers for lead follow-ups, appointment reminders and other business activities.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI understand different accents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many AI systems support different accents and languages, although accuracy depends on the technology and audio quality.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents transfer calls to humans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. They can transfer calls when customers request human assistance or need additional support.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after an AI phone call ends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The system can prepare conversation records, call summaries and customer follow-up information.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Voice AI used in business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voice AI is commonly used for lead follow-ups, appointment reminders, customer enquiries and feedback collection.",
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
