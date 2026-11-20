import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Human Collaboration in Call Centers: Hybrid Teams | Callience",
  description:
    "Learn how AI voice agents and human teams share calls, manage escalations and improve customer support in hybrid call centers.",
  keywords: [
    "AI human collaboration in call centers",
    "AI voice agents",
    "AI call center",
    "hybrid call center",
    "hybrid AI human call center",
    "AI voice agent human handoff",
    "human in the loop voice AI",
    "AI call center agent assist",
    "AI to human handoff",
    "AI agents for call centers",
    "AI voice agent handoff",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-human-collaboration-in-call-centers",
  },
  openGraph: {
    title: "AI Human Collaboration in Call Centers: Hybrid Teams | Callience",
    description:
      "Learn how AI voice agents and human teams share calls, manage escalations and improve customer support in hybrid call centers.",
    url: "https://www.callience.in/blogs/ai-human-collaboration-in-call-centers",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-20T00:00:00.000Z",
    modifiedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/ai-human-collaboration-in-call-centers.png",
        width: 1440,
        height: 515,
        alt: "AI Human Collaboration in Call Centers: Can AI Voice Agents Work Alongside Human Teams?",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Human Collaboration in Call Centers: Hybrid Teams | Callience",
    description:
      "Learn how AI voice agents and human teams share calls, manage escalations and improve customer support in hybrid call centers.",
    images: ["https://www.callience.in/ai-human-collaboration-in-call-centers.png"],
  },
};

export default function AIHumanCollaborationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI Human Collaboration in Call Centers: Can AI Voice Agents Work Alongside Human Teams?",
    description:
      "Learn how AI voice agents and human teams share calls, manage escalations and improve customer support in hybrid call centers.",
    image: [
      "https://www.callience.in/ai-human-collaboration-in-call-centers.png",
    ],
    datePublished: "2026-11-20T00:00:00.000Z",
    dateModified: "2026-11-20T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/ai-human-collaboration-in-call-centers",
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
        name: "AI Human Collaboration in Call Centers: Can AI Voice Agents Work Alongside Human Teams?",
        item: "https://www.callience.in/blogs/ai-human-collaboration-in-call-centers",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can AI voice agents work with human agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI voice agents can work alongside human agents by managing routine calls, answering common questions and qualifying leads. They can transfer complex or sensitive conversations to human employees when required.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents work with human calling teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents handle predefined calling tasks, collect customer information and identify the purpose of each conversation. When human support is needed, they transfer the call along with relevant details and a conversation summary.",
        },
      },
      {
        "@type": "Question",
        name: "When should AI voice agents transfer calls to humans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI should transfer calls when customers request a person, raise complex complaints, need a policy exception, discuss sensitive matters or ask questions the AI cannot answer reliably.",
        },
      },
      {
        "@type": "Question",
        name: "How do human agents manage AI-escalated calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Human agents review the AI-generated summary, understand the reason for escalation and continue the conversation. They should have access to the information already collected so customers do not need to repeat themselves.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of combining AI voice agents and human agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The main benefits include improved call handling capacity, reduced repetitive work, faster routine assistance, better lead qualification and more time for human agents to focus on important customer interactions.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses start using a hybrid call center model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses can begin by automating one repetitive calling task, defining human handoff rules, connecting relevant customer records, training employees and measuring the results before expanding the workflow.",
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
