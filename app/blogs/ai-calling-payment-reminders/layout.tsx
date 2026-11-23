import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Payment Reminders: How Businesses Can Automate Collections | Callience",
  description:
    "Discover how AI calling for payment reminders helps businesses automate EMI reminders, follow up on overdue payments, and track collections.",
  keywords: [
    "AI calling for payment reminders",
    "AI payment reminder calls",
    "AI voice agent for payment reminders",
    "AI EMI reminder calls",
    "automated EMI reminder calls",
    "overdue payment reminder calls",
    "automated payment reminder calls",
    "AI collection calling software",
    "AI voice agent for loan collections",
    "invoice payment reminder automation",
    "automated payment collections",
    "AI voice bot",
    "payment collection software",
    "how AI calling helps businesses manage payment reminders",
    "how businesses automate EMI reminder calls",
    "how AI voice agents help with overdue payment follow-ups",
    "benefits of automated payment reminder calls",
    "how AI calling supports routine debt collection",
    "how businesses can manage payment collection calls using AI",
    "how AI voice agents capture payment commitments",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-calling-payment-reminders",
  },
  openGraph: {
    title: "AI Calling for Payment Reminders: How Businesses Can Automate Collections | Callience",
    description:
      "Discover how AI calling for payment reminders helps businesses automate EMI reminders, follow up on overdue payments, and track collections.",
    url: "https://www.callience.in/blogs/ai-calling-payment-reminders",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-20T00:00:00.000Z",
    modifiedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20Businesses%20Can%20Use%20AI%20Calling%20for%20Payment%20Reminders%20and%20Collections.png",
        width: 1440,
        height: 515,
        alt: "How Businesses Can Use AI Calling for Payment Reminders and Collections",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling for Payment Reminders: How Businesses Can Automate Collections | Callience",
    description:
      "Discover how AI calling for payment reminders helps businesses automate EMI reminders, follow up on overdue payments, and track collections.",
    images: [
      "https://www.callience.in/How%20Businesses%20Can%20Use%20AI%20Calling%20for%20Payment%20Reminders%20and%20Collections.png",
    ],
  },
};

export default function AICallingPaymentRemindersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI Calling for Payment Reminders: How Businesses Can Automate Collections",
    description:
      "Discover how AI calling for payment reminders helps businesses automate EMI reminders, follow up on overdue payments, and track collections.",
    image: [
      "https://www.callience.in/How%20Businesses%20Can%20Use%20AI%20Calling%20for%20Payment%20Reminders%20and%20Collections.png",
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
      "@id": "https://www.callience.in/blogs/ai-calling-payment-reminders",
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
        name: "AI Calling for Payment Reminders: How Businesses Can Automate Collections",
        item: "https://www.callience.in/blogs/ai-calling-payment-reminders",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does AI calling help businesses manage payment reminders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling helps businesses contact customers about upcoming due dates, pending invoices, and overdue payments while recording responses and scheduling further follow-ups.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses automate EMI reminder calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses can connect their billing systems with AI voice agents to initiate scheduled calls before EMI due dates, communicate payment information, and record customer responses.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents help with overdue payment follow-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI voice agents can remind customers about overdue payments, collect expected payment dates, and direct complicated payment queries to employees.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of automated payment reminder calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The benefits include reduced manual calling work, consistent reminders, organized payment records, improved follow-up tracking, and more time for employees to handle important customer queries.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI calling support routine debt collection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling can manage routine payment notifications, communicate verified outstanding amounts, record customer responses, and organize further follow-ups while keeping sensitive cases with authorized employees.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents replace payment collection teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AI voice agents can manage repetitive reminders and basic payment enquiries, but disputes, negotiations, complaints, and sensitive financial discussions still require human assistance.",
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
