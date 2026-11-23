import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Patient Appointment Management: Benefits & Use Cases | Callience",
  description:
    "Explore how AI patient appointment management helps clinics automate reminders, confirmations, cancellations, and patient follow-ups.",
  keywords: [
    "AI patient appointment management",
    "AI voice agent for healthcare",
    "AI calling for healthcare",
    "AI calling in healthcare",
    "AI appointment scheduling healthcare",
    "AI voice agent for appointment scheduling",
    "AI appointment reminders healthcare",
    "AI calling for appointment reminders",
    "AI patient scheduling",
    "AI appointment confirmation calls",
    "AI appointment rescheduling",
    "automated appointment management",
    "AI healthcare appointment booking",
    "AI calling for clinics",
    "patient scheduling",
    "appointment scheduling",
    "Healthcare software",
    "hospital management system",
    "clinic management software",
    "patient management system",
    "healthcare CRM",
    "medical practice management software",
    "appointment scheduling software",
    "appointment management software",
    "appointment reminder software",
    "appointment reminder system",
    "automated appointment reminders",
    "appointment confirmation calls",
    "appointment booking system",
    "patient scheduling software",
    "benefits of AI voice agents for patient appointment management",
    "how AI voice agents help hospitals manage patient appointments",
    "how AI calling helps clinics manage appointment cancellations",
    "how AI calling helps reduce missed patient appointments",
    "how AI voice agents help patients reschedule appointments",
    "how AI voice agents improve patient scheduling workflows",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-patient-appointment-management",
  },
  openGraph: {
    title: "AI Patient Appointment Management: Benefits & Use Cases | Callience",
    description:
      "Explore how AI patient appointment management helps clinics automate reminders, confirmations, cancellations, and patient follow-ups.",
    url: "https://www.callience.in/blogs/ai-patient-appointment-management",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-23T00:00:00.000Z",
    modifiedTime: "2026-11-23T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20AI%20Voice%20Agents%20Can%20Improve%20Appointment%20Management%20in%20Healthcare.png",
        width: 1440,
        height: 515,
        alt: "How AI Voice Agents Can Improve Appointment Management in Healthcare",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Patient Appointment Management: Benefits & Use Cases | Callience",
    description:
      "Explore how AI patient appointment management helps clinics automate reminders, confirmations, cancellations, and patient follow-ups.",
    images: [
      "https://www.callience.in/How%20AI%20Voice%20Agents%20Can%20Improve%20Appointment%20Management%20in%20Healthcare.png",
    ],
  },
};

export default function PatientAppointmentManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "AI Patient Appointment Management: Benefits & Use Cases",
    description:
      "Explore how AI patient appointment management helps clinics automate reminders, confirmations, cancellations, and patient follow-ups.",
    image: [
      "https://www.callience.in/How%20AI%20Voice%20Agents%20Can%20Improve%20Appointment%20Management%20in%20Healthcare.png",
    ],
    datePublished: "2026-11-23T00:00:00.000Z",
    dateModified: "2026-11-23T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/ai-patient-appointment-management",
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
        name: "AI Patient Appointment Management: Benefits & Use Cases",
        item: "https://www.callience.in/blogs/ai-patient-appointment-management",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the benefits of AI voice agents for patient appointment management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The benefits include reduced manual calling, consistent appointment reminders, improved confirmation follow-ups, organised cancellation requests, and easier rescheduling communication.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents help hospitals manage patient appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents help hospitals manage patient appointments by contacting patients, sharing appointment details, collecting confirmations, and recording requests for cancellations or rescheduling.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI calling help clinics manage appointment cancellations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI calling helps clinics manage appointment cancellations by contacting patients, collecting cancellation requests, and recording responses for the administrative team to review and process.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents help patients reschedule appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents can collect requests to change appointment dates or times and communicate the next steps. Direct rescheduling depends on the healthcare provider's scheduling system and available integrations.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents improve patient scheduling workflows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents improve patient scheduling workflows by supporting reminders, confirmations, response collection, cancellation communication, and follow-up processes.",
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
