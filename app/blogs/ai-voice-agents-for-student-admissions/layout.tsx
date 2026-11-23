import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Voice Agents Simplify Student Admissions | Callience",
  description:
    "Learn how an AI voice agent for admissions helps colleges manage student enquiries, follow-ups, and application reminders.",
  keywords: [
    "AI voice agent for admissions",
    "AI calling for student admissions",
    "AI calling for colleges",
    "AI calling for education",
    "AI calling in education",
    "AI admission follow-up",
    "AI student enquiry follow-up",
    "student enquiry management",
    "student admission enquiry management",
    "student enquiry follow-up",
    "admission lead follow-up",
    "automated admission calls",
    "automated admission outreach",
    "student recruitment automation",
    "education-specific voice agents",
    "student recruitment process",
    "AI voice bot",
    "automated calling software",
    "education software",
    "admission management system",
    "student management system",
    "education CRM",
    "lead management software",
    "student recruitment",
    "online admission system",
    "education marketing",
    "student engagement software",
    "how AI voice agents help with student admissions",
    "how to automate student admission enquiry follow-ups",
    "how AI calling helps colleges manage admission enquiries",
    "how AI voice agents follow up with prospective students",
    "how schools can automate admission enquiry calls",
    "how AI voice agents support the student admission journey",
    "how to improve student admission enquiry follow-ups",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-voice-agents-for-student-admissions",
  },
  openGraph: {
    title: "How AI Voice Agents Simplify Student Admissions | Callience",
    description:
      "Learn how an AI voice agent for admissions helps colleges manage student enquiries, follow-ups, and application reminders.",
    url: "https://www.callience.in/blogs/ai-voice-agents-for-student-admissions",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-23T00:00:00.000Z",
    modifiedTime: "2026-11-23T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/How%20AI%20Voice%20Agents%20Can%20Simplify%20Student%20Admissions%20and%20Education%20Follow-Ups.png",
        width: 1440,
        height: 515,
        alt: "How AI Voice Agents Can Simplify Student Admissions and Education Follow-Ups",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI Voice Agents Simplify Student Admissions | Callience",
    description:
      "Learn how an AI voice agent for admissions helps colleges manage student enquiries, follow-ups, and application reminders.",
    images: [
      "https://www.callience.in/How%20AI%20Voice%20Agents%20Can%20Simplify%20Student%20Admissions%20and%20Education%20Follow-Ups.png",
    ],
  },
};

export default function StudentAdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How AI Voice Agents Simplify Student Admissions",
    description:
      "Learn how an AI voice agent for admissions helps colleges manage student enquiries, follow-ups, and application reminders.",
    image: [
      "https://www.callience.in/How%20AI%20Voice%20Agents%20Can%20Simplify%20Student%20Admissions%20and%20Education%20Follow-Ups.png",
    ],
    datePublished: "2026-11-23T00:00:00.000Z",
    dateModified: "2026-11-23T00:00:00.000Z",
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
      "@id": "https://www.callience.in/blogs/ai-voice-agents-for-student-admissions",
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
        name: "How AI Voice Agents Simplify Student Admissions",
        item: "https://www.callience.in/blogs/ai-voice-agents-for-student-admissions",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do AI voice agents help with student admissions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI voice agents help educational institutions contact prospective students, answer routine admission questions, follow up on enquiries, and send application reminders through automated voice conversations.",
        },
      },
      {
        "@type": "Question",
        name: "How can colleges automate student admission enquiry follow-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Colleges can use AI calling workflows to contact students after they submit enquiries, check their interest, share approved course information, and remind them about important admission activities.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents answer student questions about courses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI voice agents can answer routine course-related questions when they have access to accurate, institution-approved information. Complex or personalised questions may require assistance from admission staff.",
        },
      },
      {
        "@type": "Question",
        name: "How can schools automate admission enquiry calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schools can use AI-powered calling workflows to contact prospective students, follow up on enquiries, provide basic admission information, and send reminders about application deadlines.",
        },
      },
      {
        "@type": "Question",
        name: "Do AI voice agents replace admission counsellors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AI voice agents can support repetitive communication tasks, but admission counsellors remain important for personalised guidance, complex questions, and admission decisions.",
        },
      },
      {
        "@type": "Question",
        name: "How can educational institutions improve student admission enquiry follow-ups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Institutions can improve follow-ups by responding promptly, maintaining accurate enquiry records, organising follow-up schedules, sharing relevant information, and using call outcomes to identify students who need further assistance.",
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
