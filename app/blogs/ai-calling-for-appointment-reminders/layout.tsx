import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Appointment Reminders and Confirmations | Callience",
  description:
    "AI calling for appointment reminders confirms attendance, handles reschedules and cuts no-shows. See how it works across clinics, schools and salons.",
  keywords: [
    "AI calling for appointment reminders",
    "AI appointment reminder calls",
    "AI appointment confirmation calls",
    "appointment reminder calls",
    "automated appointment reminders",
    "automated reminder calls",
    "appointment confirmation automation",
    "AI voice agent for appointment reminders",
    "voice AI appointment reminders",
    "AI voice bot",
    "appointment scheduling software",
    "appointment reminder software",
    "appointment confirmation calls",
    "reminder call service",
    "appointment management software",
    "how AI voice calling improves appointment confirmations",
    "how businesses automate appointment reminder calls",
    "how AI voice agents confirm customer appointments",
    "benefits of automated appointment reminder calls",
    "how AI calling reduces missed appointments",
    "how automated calls collect appointment confirmations",
    "how AI voice agents handle appointment cancellations and rescheduling",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/ai-calling-for-appointment-reminders",
  },
  openGraph: {
    title: "AI Calling for Appointment Reminders and Confirmations | Callience",
    description:
      "AI calling for appointment reminders confirms attendance, handles reschedules and cuts no-shows. See how it works across clinics, schools and salons.",
    url: "https://www.callience.in/blogs/ai-calling-for-appointment-reminders",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-21T00:00:00.000Z",
    modifiedTime: "2026-11-21T00:00:00.000Z",
    authors: ["Divyanshu Singh"],
    images: [
      {
        url: "https://www.callience.in/ai-calling-for-appointment-reminders.png",
        width: 1440,
        height: 515,
        alt: "How AI Voice Calling Can Improve Appointment Confirmations and Reminders",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling for Appointment Reminders and Confirmations | Callience",
    description:
      "AI calling for appointment reminders confirms attendance, handles reschedules and cuts no-shows. See how it works across clinics, schools and salons.",
    images: [
      "https://www.callience.in/ai-calling-for-appointment-reminders.png",
    ],
  },
};

export default function AICallingForAppointmentRemindersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How AI Voice Calling Can Improve Appointment Confirmations and Reminders",
    description:
      "AI calling for appointment reminders confirms attendance, handles reschedules and cuts no-shows. See how it works across clinics, schools and salons.",
    image: ["https://www.callience.in/ai-calling-for-appointment-reminders.png"],
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
      "@id": "https://www.callience.in/blogs/ai-calling-for-appointment-reminders",
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
        name: "How AI Voice Calling Can Improve Appointment Confirmations and Reminders",
        item: "https://www.callience.in/blogs/ai-calling-for-appointment-reminders",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does AI voice calling improve appointment confirmations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It calls every customer on a schedule, gives the appointment details and asks for a clear response. Each answer is recorded as confirmed, cancelled, rescheduled or no response, so staff can see the status of every booking.",
        },
      },
      {
        "@type": "Question",
        name: "How do businesses automate appointment reminder calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They connect an AI voice bot to their appointment scheduling software or calendar, set when calls go out, write a short script and define what happens for each response. The system then places the calls and updates the booking system.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI voice agents confirm customer appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The agent identifies itself, states the date, time and location, and asks whether the customer will attend. It maps the spoken reply to a status and saves it to the booking record.",
        },
      },
      {
        "@type": "Question",
        name: "How does AI calling reduce missed appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It reminds customers before the appointment and lets them cancel or reschedule on the call. Customers who cannot attend tell you in advance, which also lets you refill the slot.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents handle cancellations and rescheduling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The agent can apply your cancellation rules, offer available slots from the calendar, confirm the new time and update the system. Complex requests can transfer to a staff member.",
        },
      },
      {
        "@type": "Question",
        name: "Is an AI reminder call better than a text message?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They do different jobs. A text is quick and easy to send, while a voice call allows a live two-way conversation and reaches customers who may not read messages. Many businesses use calls and texts together.",
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
