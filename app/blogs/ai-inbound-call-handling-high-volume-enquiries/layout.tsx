import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Inbound Call Handling for High-Volume Enquiries | Callience",
  description:
    "AI inbound call handling answers enquiries around the clock, absorbs peak-hour surges, resolves repetitive questions and takes pressure off support teams.",
  keywords: [
    "AI inbound call handling",
    "AI call handling",
    "AI call volume management",
    "AI call center automation",
    "AI customer enquiry management",
    "automated customer enquiry handling",
    "automated enquiry management",
    "customer enquiry automation",
    "inbound call automation",
    "AI voice agent for customer service",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-inbound-call-handling-high-volume-enquiries",
  },
  openGraph: {
    title: "AI Inbound Call Handling for High-Volume Enquiries | Callience",
    description:
      "AI inbound call handling answers enquiries around the clock, absorbs peak-hour surges, resolves repetitive questions and takes pressure off support teams.",
    url: "https://www.callience.in/blogs/ai-inbound-call-handling-high-volume-enquiries",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-19T00:00:00.000Z",
    modifiedTime: "2026-11-19T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/ai-inbound-call-handling-high-volume-enquiries.png",
        width: 1440,
        height: 515,
        alt: "AI Inbound Call Handling for High-Volume Customer Enquiries",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Inbound Call Handling for High-Volume Enquiries | Callience",
    description:
      "AI inbound call handling answers enquiries around the clock, absorbs peak-hour surges, resolves repetitive questions and takes pressure off support teams.",
    images: ["https://www.callience.in/ai-inbound-call-handling-high-volume-enquiries.png"],
  },
};

export default function AIInboundCallHandlingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI Inbound Call Handling for High-Volume Customer Enquiries",
    description:
      "AI inbound call handling answers enquiries around the clock, absorbs peak-hour surges, resolves repetitive questions and takes pressure off support teams.",
    image: [
      "https://www.callience.in/ai-inbound-call-handling-high-volume-enquiries.png",
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
      "@id": "https://www.callience.in/blogs/ai-inbound-call-handling-high-volume-enquiries",
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
        name: "AI Inbound Call Handling for High-Volume Customer Enquiries",
        item: "https://www.callience.in/blogs/ai-inbound-call-handling-high-volume-enquiries",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI inbound call handling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI inbound call handling uses an AI voice agent to answer incoming calls, understand the caller's request and resolve it or route it to the right person. It can book appointments, answer common questions and log issues without a human on the line.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI help manage high call volumes during peak hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI voice agent can answer many calls at the same time, so callers are not queued. It handles routine enquiries and sends only complex cases to human agents, which keeps wait times low during surges.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI handle after-hours customer enquiries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It can answer questions, take bookings or messages and create tickets at any hour. Urgent or complex issues can be flagged for human follow-up when the team is back.",
        },
      },
      {
        "@type": "Question",
        name: "Does AI inbound call handling replace support agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It takes over repetitive, predictable calls so agents can focus on complex, sensitive or high-value conversations. Most deployments keep a human escalation path.",
        },
      },
      {
        "@type": "Question",
        name: "How is an AI voice agent different from an IVR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An IVR makes callers press keys through fixed menus. An AI voice agent understands natural speech, can answer varied questions and can complete tasks during the call.",
        },
      },
      {
        "@type": "Question",
        name: "Which enquiries should be automated first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with frequent, low-risk, well-defined calls such as opening hours, order or application status, appointment booking and basic policy or pricing questions.",
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
