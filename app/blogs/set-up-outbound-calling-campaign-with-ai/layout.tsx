import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Up an Outbound Calling Campaign with AI | Callience",
  description:
    "Learn how to set up an outbound calling campaign with AI, automate follow-ups, manage leads, and track campaign performance.",
  keywords: [
    "How to set up an outbound calling campaign",
    "How to Set Up an Outbound Calling Campaign with AI",
    "Outbound calling campaigns",
    "AI calling campaign optimization",
    "outbound calling campaign management",
    "AI calling campaign performance",
    "automated calling campaign setup",
    "AI outbound calling campaign setup",
    "outbound campaign analytics",
    "Campaign management software",
    "Outbound campaign management",
    "Call center analytics",
    "Call center reporting",
    "how to plan an effective AI outbound calling campaign",
    "steps to create an AI outbound calling campaign",
    "best practices for outbound calling campaigns",
    "how to optimise AI calling campaigns",
    "how to measure outbound calling campaign performance",
    "how to prepare contact lists for AI calling campaigns",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/set-up-outbound-calling-campaign-with-ai",
  },
  openGraph: {
    title: "How to Set Up an Outbound Calling Campaign with AI | Callience",
    description:
      "Learn how to set up an outbound calling campaign with AI, automate follow-ups, manage leads, and track campaign performance.",
    url: "https://www.callience.in/blogs/set-up-outbound-calling-campaign-with-ai",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-20T00:00:00.000Z",
    modifiedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20to%20Set%20Up%20an%20Outbound%20Calling%20Campaign%20with%20AI.png",
        width: 1440,
        height: 515,
        alt: "How to Set Up an Outbound Calling Campaign with AI",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Up an Outbound Calling Campaign with AI | Callience",
    description:
      "Learn how to set up an outbound calling campaign with AI, automate follow-ups, manage leads, and track campaign performance.",
    images: [
      "https://www.callience.in/How%20to%20Set%20Up%20an%20Outbound%20Calling%20Campaign%20with%20AI.png",
    ],
  },
};

export default function SetUpOutboundCallingCampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Set Up an Outbound Calling Campaign with AI",
    description:
      "Learn how to set up an outbound calling campaign with AI, automate follow-ups, manage leads, and track campaign performance.",
    image: [
      "https://www.callience.in/How%20to%20Set%20Up%20an%20Outbound%20Calling%20Campaign%20with%20AI.png",
    ],
    datePublished: "2026-11-20T00:00:00.000Z",
    dateModified: "2026-11-20T00:00:00.000Z",
    wordCount: 1650,
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
      "@id": "https://www.callience.in/blogs/set-up-outbound-calling-campaign-with-ai",
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
        name: "How to Set Up an Outbound Calling Campaign with AI",
        item: "https://www.callience.in/blogs/set-up-outbound-calling-campaign-with-ai",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I set up an outbound calling campaign with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To set up an AI outbound calling campaign, define clear campaign objectives, prepare and segment your customer contact list, create natural calling scripts, configure the AI voice agent with conversation workflows, establish calling schedules and follow-up rules, and monitor performance analytics.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of automated outbound calling campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI outbound calling saves employee time, scales lead qualification instantly, maintains consistent follow-up schedules, logs conversation outcomes into CRM systems, and improves lead conversion rates.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure outbound calling campaign performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key performance metrics include total calls attempted, connection rate, call completion rate, qualified leads generated, callback requests, conversion rate, and cost per qualified lead.",
        },
      },
      {
        "@type": "Question",
        name: "How do I prepare contact lists for AI calling campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Segment your contacts by product interest, previous enquiry history, and preferred language. Ensure phone numbers are verified and formatted correctly, and comply with all applicable communication consent regulations.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI outbound callers transfer calls to human agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. When a prospect requires complex negotiation or asks detailed technical questions, the AI voice agent can immediately transfer the call to a live human sales representative with full context.",
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
