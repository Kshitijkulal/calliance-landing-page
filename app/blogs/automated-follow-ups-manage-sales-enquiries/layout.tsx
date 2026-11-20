import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries | Callience",
  description:
    "Learn how automated enquiry follow-ups help businesses manage sales enquiries, qualify leads, schedule callbacks, and improve conversions.",
  keywords: [
    "Automated enquiry follow-ups",
    "Automated sales enquiry follow-up",
    "sales enquiry management",
    "sales enquiry follow-up system",
    "automated customer follow-ups",
    "follow-up automation for businesses",
    "sales follow-up software",
    "automated follow-up system",
    "Sales automation software",
    "lead management software",
    "lead follow-up software",
    "sales pipeline software",
    "enquiry management system",
    "sales tracking software",
    "how automated follow-ups help businesses manage sales enquiries",
    "how businesses can automate sales enquiry follow-ups",
    "how to manage sales enquiries through automated follow-ups",
    "benefits of automated sales enquiry follow-ups",
    "how to track and manage sales enquiries",
    "how businesses can improve sales enquiry management",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/automated-follow-ups-manage-sales-enquiries",
  },
  openGraph: {
    title: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries | Callience",
    description:
      "Learn how automated enquiry follow-ups help businesses manage sales enquiries, qualify leads, schedule callbacks, and improve conversions.",
    url: "https://www.callience.in/blogs/automated-follow-ups-manage-sales-enquiries",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-20T00:00:00.000Z",
    modifiedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20Automated%20Follow-Ups%20Help%20Businesses%20Manage%20Sales%20Enquiries.png",
        width: 1440,
        height: 515,
        alt: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries | Callience",
    description:
      "Learn how automated enquiry follow-ups help businesses manage sales enquiries, qualify leads, schedule callbacks, and improve conversions.",
    images: [
      "https://www.callience.in/How%20Automated%20Follow-Ups%20Help%20Businesses%20Manage%20Sales%20Enquiries.png",
    ],
  },
};

export default function AutomatedFollowUpsSalesEnquiriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries",
    description:
      "Learn how automated enquiry follow-ups help businesses manage sales enquiries, qualify leads, schedule callbacks, and improve conversions.",
    image: [
      "https://www.callience.in/How%20Automated%20Follow-Ups%20Help%20Businesses%20Manage%20Sales%20Enquiries.png",
    ],
    datePublished: "2026-11-20T00:00:00.000Z",
    dateModified: "2026-11-20T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/automated-follow-ups-manage-sales-enquiries",
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
        name: "How Automated Follow-Ups Help Businesses Manage Sales Enquiries",
        item: "https://www.callience.in/blogs/automated-follow-ups-manage-sales-enquiries",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How automated follow-ups help businesses manage sales enquiries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Automated follow-ups help businesses contact potential customers on time, record their responses, schedule callbacks, and organize enquiries throughout the sales process.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses automate sales enquiry follow-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses can use CRM systems, sales automation software, and AI voice agents to contact new enquiries, qualify leads, record responses, and schedule further communication.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best software for managing sales enquiries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The right software depends on business requirements. Sales CRM platforms, lead management tools, and automated follow-up systems can help organize customer information and monitor sales activities.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents manage sales follow-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI voice agents can contact potential customers, ask qualification questions, provide basic information, record responses, and arrange callbacks.",
        },
      },
      {
        "@type": "Question",
        name: "How can businesses track sales enquiries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses can track enquiries using CRM dashboards and sales tracking software. Important metrics include response time, qualified leads, follow-up completion, and conversion rates.",
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
