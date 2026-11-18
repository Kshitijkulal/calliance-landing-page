import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Calling for MSMEs: A Practical Guide | Callience",
  description:
    "Learn how MSMEs use AI voice calling for lead follow-ups, customer reminders and inbound and outbound communication more efficiently.",
  keywords: [
    "AI voice calling for MSMEs",
    "voice AI for MSMEs",
    "AI calling for small businesses in India",
    "AI voice agents for small businesses",
    "AI customer outreach for small businesses",
    "automated lead follow up calls",
    "AI appointment reminder calls for small businesses",
    "multilingual AI calling India",
    "AI calling scripts",
    "AI telecaller ROI",
    "how small businesses can automate customer calls",
    "how to automate customer follow up calls",
    "how AI voice agents help small businesses",
    "benefits of AI calling for MSMEs",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-voice-calling-for-msmes",
  },
  openGraph: {
    title: "AI Voice Calling for MSMEs: A Practical Guide | Callience",
    description:
      "Learn how MSMEs use AI voice calling for lead follow-ups, customer reminders and inbound and outbound communication more efficiently.",
    url: "https://www.callience.in/blogs/ai-voice-calling-for-msmes",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-18T00:00:00.000Z",
    modifiedTime: "2026-11-18T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20MSMEs%20Can%20Use%20AI%20Voice%20Calling%20to%20Manage%20Customer%20Outreach.png",
        width: 1440,
        height: 515,
        alt: "How MSMEs Can Use AI Voice Calling to Manage Customer Outreach",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Calling for MSMEs: A Practical Guide | Callience",
    description:
      "Learn how MSMEs use AI voice calling for lead follow-ups, customer reminders and inbound and outbound communication more efficiently.",
    images: [
      "https://www.callience.in/How%20MSMEs%20Can%20Use%20AI%20Voice%20Calling%20to%20Manage%20Customer%20Outreach.png",
    ],
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
    headline: "How MSMEs Can Use AI Voice Calling to Manage Customer Outreach",
    description:
      "Learn how MSMEs use AI voice calling for lead follow-ups, customer reminders and inbound and outbound communication more efficiently.",
    image:
      "https://www.callience.in/How%20MSMEs%20Can%20Use%20AI%20Voice%20Calling%20to%20Manage%20Customer%20Outreach.png",
    datePublished: "2026-11-18T00:00:00.000Z",
    dateModified: "2026-11-18T00:00:00.000Z",
    wordCount: 1550,
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
      "@id": "https://www.callience.in/blogs/ai-voice-calling-for-msmes",
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
        name: "How MSMEs Can Use AI Voice Calling to Manage Customer Outreach",
        item: "https://www.callience.in/blogs/ai-voice-calling-for-msmes",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can small businesses automate customer calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small businesses can use AI voice calling platforms to automate lead follow-ups, appointment reminders, payment notifications, and customer re-engagement campaigns.",
        },
      },
      {
        "@type": "Question",
        name: "What are AI voice agents for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents are software systems that use artificial intelligence to communicate with customers, understand spoken responses, answer common questions, and record interaction details.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents handle both inbound and outbound calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI voice agents can manage incoming customer enquiries and outgoing calls for lead qualification, reminders, follow-ups, and customer re-engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents make calls in Indian regional languages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several platforms support Hindi, English, and selected regional languages. Availability and conversation accuracy depend on the platform.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice calling replace human telecallers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI can handle repetitive conversations, but complex complaints, negotiations, and sensitive customer interactions still require human assistance.",
        },
      },
      {
        "@type": "Question",
        name: "How can MSMEs measure AI calling ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MSMEs can track campaign costs, connected calls, qualified leads, successful follow-ups, and customer conversions to evaluate campaign performance.",
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
