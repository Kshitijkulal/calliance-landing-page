import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent vs IVR: Which Is Better for Business? | Callience",
  description:
    "Compare AI voice agents and traditional IVR systems, including features, costs, resolution rates and the best option for your business.",
  keywords: [
    "AI voice agent vs IVR",
    "AI Voice Agent vs Traditional IVR",
    "AI voicebot vs IVR",
    "voice AI vs IVR",
    "conversational AI vs IVR",
    "AI voice agent vs IVR cost",
    "AI voice agent with existing IVR",
    "AI and IVR hybrid system",
    "IVA vs IVR",
    "AI voice bot",
    "IVR system",
    "when to use AI voice agent vs IVR",
    "when to replace traditional IVR",
    "replace IVR with AI voice agent",
    "IVR vs AI voice agent cost per call",
    "AI voice agent resolution rate",
    "IVR call containment rate",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-voice-agent-vs-ivr",
  },
  openGraph: {
    title: "AI Voice Agent vs IVR: Which Is Better for Business? | Callience",
    description:
      "Compare AI voice agents and traditional IVR systems, including features, costs, resolution rates and the best option for your business.",
    url: "https://www.callience.in/blogs/ai-voice-agent-vs-ivr",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-17T00:00:00.000Z",
    modifiedTime: "2026-11-17T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/AI%20Voice%20Agent%20vs%20IVR%20Which%20Is%20Better%20for%20Business%20(1).png",
        width: 1440,
        height: 515,
        alt: "AI Voice Agent vs IVR: Which Is Better for Business?",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent vs IVR: Which Is Better for Business? | Callience",
    description:
      "Compare AI voice agents and traditional IVR systems, including features, costs, resolution rates and the best option for your business.",
    images: ["https://www.callience.in/AI%20Voice%20Agent%20vs%20IVR%20Which%20Is%20Better%20for%20Business%20(1).png"],
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
    headline: "AI Voice Agent vs IVR: Which Is Better for Business?",
    description:
      "Compare AI voice agents and traditional IVR systems, including features, costs, resolution rates and the best option for your business.",
    image: "https://www.callience.in/AI%20Voice%20Agent%20vs%20IVR%20Which%20Is%20Better%20for%20Business%20(1).png",
    datePublished: "2026-11-17T00:00:00.000Z",
    dateModified: "2026-11-17T00:00:00.000Z",
    wordCount: 1350,
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
      "@id": "https://www.callience.in/blogs/ai-voice-agent-vs-ivr",
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
        name: "AI Voice Agent vs IVR: Which Is Better for Business?",
        item: "https://www.callience.in/blogs/ai-voice-agent-vs-ivr",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is an AI voice agent better than traditional IVR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI voice agent is generally more flexible for conversational enquiries, while traditional IVR is effective for simple menus and structured call routing. The better option depends on the business use case.",
        },
      },
      {
        "@type": "Question",
        name: "Can an AI voice agent work with an existing IVR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Businesses can integrate AI voice agents into supported IVR workflows, retaining existing menus while adding conversational capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "When should a business replace IVR with an AI voice agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consider replacing selected IVR workflows when customers frequently struggle with menus or need more flexible conversations that predefined options cannot handle.",
        },
      },
      {
        "@type": "Question",
        name: "Is an AI voice agent more expensive than IVR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily in overall operating terms. Costs depend on telephony, software, AI usage, integrations, maintenance and the number of successfully resolved calls.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between AI voice agent resolution rate and IVR call containment rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Resolution rate measures whether customer enquiries are successfully resolved. Containment rate measures how many calls remain within the IVR flow without moving elsewhere. A contained call is not automatically a resolved call.",
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
