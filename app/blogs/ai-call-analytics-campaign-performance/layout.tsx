import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Call Analytics Improves Campaign Performance | Callience",
  description:
    "Discover how AI call analytics uses conversation insights, call transcripts, and sentiment analysis to improve calling campaign performance.",
  keywords: [
    "AI call analytics",
    "Call analytics",
    "conversation analytics",
    "conversation intelligence",
    "conversation insights",
    "AI call insights",
    "AI conversation intelligence",
    "AI-generated call insights",
    "call transcript analysis",
    "sales call analytics",
    "call sentiment analysis",
    "voice analytics",
    "call analytics campaign optimization",
    "Call analytics software",
    "call tracking software",
    "call monitoring software",
    "call center analytics",
    "call center reporting",
    "speech analytics",
    "call recording software",
    "sales call analysis",
    "sales analytics software",
    "customer experience analytics",
    "marketing analytics",
    "how AI call analytics improves campaign performance",
    "how conversation insights help improve AI calling campaigns",
    "how AI call analytics identifies customer objections",
    "how conversation analytics helps improve lead quality",
    "how to use call outcomes to optimise AI calling campaigns",
    "how to use call transcripts to improve calling campaigns",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-call-analytics-campaign-performance",
  },
  openGraph: {
    title: "How AI Call Analytics Improves Campaign Performance | Callience",
    description:
      "Discover how AI call analytics uses conversation insights, call transcripts, and sentiment analysis to improve calling campaign performance.",
    url: "https://www.callience.in/blogs/ai-call-analytics-campaign-performance",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-21T00:00:00.000Z",
    modifiedTime: "2026-11-21T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20AI%20Call%20Analytics%20and%20Conversation%20Insights%20Improve%20Campaign%20Performance.png",
        width: 1440,
        height: 515,
        alt: "How AI Call Analytics and Conversation Insights Improve Campaign Performance",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI Call Analytics Improves Campaign Performance | Callience",
    description:
      "Discover how AI call analytics uses conversation insights, call transcripts, and sentiment analysis to improve calling campaign performance.",
    images: [
      "https://www.callience.in/How%20AI%20Call%20Analytics%20and%20Conversation%20Insights%20Improve%20Campaign%20Performance.png",
    ],
  },
};

export default function AICallAnalyticsCampaignPerformanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How AI Call Analytics Improves Campaign Performance",
    description:
      "Discover how AI call analytics uses conversation insights, call transcripts, and sentiment analysis to improve calling campaign performance.",
    image: [
      "https://www.callience.in/How%20AI%20Call%20Analytics%20and%20Conversation%20Insights%20Improve%20Campaign%20Performance.png",
    ],
    datePublished: "2026-11-21T00:00:00.000Z",
    dateModified: "2026-11-21T00:00:00.000Z",
    wordCount: 1700,
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
      "@id": "https://www.callience.in/blogs/ai-call-analytics-campaign-performance",
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
        name: "How AI Call Analytics Improves Campaign Performance",
        item: "https://www.callience.in/blogs/ai-call-analytics-campaign-performance",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI call analytics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI call analytics is the process of analysing voice conversations using AI technologies to understand customer behaviour, identify objections, evaluate call outcomes, and improve campaign performance.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI call analytics improve campaign performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It helps businesses identify customer objections, understand sentiment, improve lead qualification, analyse conversation patterns, and refine calling strategies using insights from customer interactions.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between call analytics and conversation analytics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call analytics generally examines call data such as duration, connection rates, and outcomes. Conversation analytics focuses more on the content of conversations, including customer questions, objections, and sentiment.",
        },
      },
      {
        "@type": "Question",
        name: "How does conversation intelligence help sales teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conversation intelligence helps sales teams understand customer requirements, identify common objections, review conversation patterns, and improve their communication strategies.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI call analytics identify customer sentiment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI-powered sentiment analysis can help identify positive, neutral, or negative customer responses during conversations, depending on the analytics tool's capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "What is call transcript analysis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call transcript analysis involves reviewing text versions of voice conversations to identify customer questions, objections, recurring topics, and opportunities to improve communication.",
        },
      },
      {
        "@type": "Question",
        name: "What should businesses look for in call analytics software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses should evaluate conversation analysis, transcript availability, call outcome reporting, sentiment analysis, integration options, data security, and reporting capabilities according to their requirements.",
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
