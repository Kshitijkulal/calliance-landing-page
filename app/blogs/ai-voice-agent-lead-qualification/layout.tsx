import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent for Lead Qualification: How It Works | Callience",
  description:
    "An AI voice agent for lead qualification calls leads, asks set questions, scores interest and passes sales-ready prospects to your team. See how it works.",
  keywords: [
    "AI voice agent for lead qualification",
    "AI lead qualification",
    "AI lead qualification calls",
    "AI lead qualification for businesses",
    "AI calling for lead qualification",
    "AI lead scoring and qualification",
    "AI qualification questions",
    "AI sales lead qualification",
    "automated lead qualification",
    "BANT lead qualification",
    "lead qualification software",
    "lead management software",
    "sales automation software",
    "lead generation software",
    "lead scoring software",
    "lead management system",
    "how AI voice agents qualify leads",
    "how AI calling helps businesses qualify sales leads",
    "how AI lead qualification works",
    "what questions should AI voice agents ask to qualify leads",
    "how businesses can identify sales-ready leads using AI",
    "how AI voice agents assess lead interest and requirements",
    "how BANT qualification works with AI voice agents",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-voice-agent-lead-qualification",
  },
  openGraph: {
    title: "AI Voice Agent for Lead Qualification: How It Works | Callience",
    description:
      "An AI voice agent for lead qualification calls leads, asks set questions, scores interest and passes sales-ready prospects to your team. See how it works.",
    url: "https://www.callience.in/blogs/ai-voice-agent-lead-qualification",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-21T00:00:00.000Z",
    modifiedTime: "2026-11-21T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/ai-voice-agent-lead-qualification.png",
        width: 1440,
        height: 515,
        alt: "How AI Voice Agents Help Businesses Qualify Leads",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent for Lead Qualification: How It Works | Callience",
    description:
      "An AI voice agent for lead qualification calls leads, asks set questions, scores interest and passes sales-ready prospects to your team. See how it works.",
    images: [
      "https://www.callience.in/ai-voice-agent-lead-qualification.png",
    ],
  },
};

export default function AIVoiceAgentLeadQualificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How AI Voice Agents Help Businesses Qualify Leads",
    description:
      "An AI voice agent for lead qualification calls leads, asks set questions, scores interest and passes sales-ready prospects to your team. See how it works.",
    image: ["https://www.callience.in/ai-voice-agent-lead-qualification.png"],
    datePublished: "2026-11-21T00:00:00.000Z",
    dateModified: "2026-11-21T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/ai-voice-agent-lead-qualification",
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
        name: "How AI Voice Agents Help Businesses Qualify Leads",
        item: "https://www.callience.in/blogs/ai-voice-agent-lead-qualification",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do AI voice agents qualify leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They call or answer leads, ask a short set of questions, convert the answers into structured data, score the lead and then book a meeting, transfer the call or notify a salesperson.",
        },
      },
      {
        "@type": "Question",
        name: "What questions should AI voice agents ask to qualify leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Questions about the lead's need, budget, decision-making role, timeline and fit, plus a question to set the next step. Keep it to four to six conversational questions.",
        },
      },
      {
        "@type": "Question",
        name: "How does BANT qualification work with AI voice agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The agent asks about Budget, Authority, Need and Timeline in natural conversation and records each answer. If a lead does not share one, the agent flags it as unknown for the salesperson to follow up.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses identify sales-ready leads using AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By scoring the lead's answers against set criteria, such as matching need, budget in range, near-term timeline and agreement to a meeting, and combining them with data like lead source and past activity.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI replace SDRs for lead qualification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can take over the first-pass qualification of high volumes of leads. Human representatives are still needed for complex deals, relationship building and leads that need judgement.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between lead qualification software and lead management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lead qualification software decides whether a lead is sales-ready. Lead management software stores and tracks leads through the pipeline. AI voice agents typically feed qualification results into the lead management system.",
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
