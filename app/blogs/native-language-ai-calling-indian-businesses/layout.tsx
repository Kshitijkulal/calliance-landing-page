import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Native-Language AI Calling Matters for Indian Businesses | Callience",
  description:
    "Learn how native-language AI calling helps Indian businesses build trust, reduce language barriers and improve customer communication.",
  keywords: [
    "Native language AI calling",
    "AI calling in Indian languages",
    "AI calling in regional languages",
    "regional language AI calling",
    "vernacular AI calling",
    "AI voice agents in native languages",
    "AI calling for Indian businesses",
    "Why native-language AI calling matters for Indian businesses",
    "Benefits of native-language AI calling",
    "How vernacular voice AI builds customer trust",
    "Callience",
  ],
  alternates: {
    canonical: "/blogs/native-language-ai-calling-indian-businesses",
  },
  openGraph: {
    title: "Why Native-Language AI Calling Matters for Indian Businesses | Callience",
    description:
      "Learn how native-language AI calling helps Indian businesses build trust, reduce language barriers and improve customer communication.",
    url: "https://www.callience.in/blogs/native-language-ai-calling-indian-businesses",
    siteName: "Callience",
    type: "article",
    publishedTime: "2026-11-19T00:00:00.000Z",
    modifiedTime: "2026-11-19T00:00:00.000Z",
    authors: ["Karanvir Singh"],
    images: [
      {
        url: "https://www.callience.in/Why%20Native-Language%20AI%20Calling%20Matters%20for%20Indian%20Businesses.png",
        width: 1440,
        height: 515,
        alt: "Why Native-Language AI Calling Matters for Indian Businesses",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Native-Language AI Calling Matters for Indian Businesses | Callience",
    description:
      "Learn how native-language AI calling helps Indian businesses build trust, reduce language barriers and improve customer communication.",
    images: [
      "https://www.callience.in/Why%20Native-Language%20AI%20Calling%20Matters%20for%20Indian%20Businesses.png",
    ],
  },
};

export default function NativeLanguageAICallingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Why Native-Language AI Calling Matters for Indian Businesses",
    description:
      "Learn how native-language AI calling helps Indian businesses build trust, reduce language barriers and improve customer communication.",
    image:
      "https://www.callience.in/Why%20Native-Language%20AI%20Calling%20Matters%20for%20Indian%20Businesses.png",
    datePublished: "2026-11-19T00:00:00.000Z",
    dateModified: "2026-11-19T00:00:00.000Z",
    wordCount: 1400,
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
      "@id": "https://www.callience.in/blogs/native-language-ai-calling-indian-businesses",
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
        name: "Why Native-Language AI Calling Matters for Indian Businesses",
        item: "https://www.callience.in/blogs/native-language-ai-calling-indian-businesses",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is native-language AI calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Native-language AI calling refers to using AI voice agents to communicate with customers in their preferred regional Indian languages, such as Hindi, Punjabi, Marathi, or Tamil, instead of relying exclusively on English.",
        },
      },
      {
        "@type": "Question",
        name: "Why is vernacular voice AI important for Indian businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "India is linguistically diverse. Speaking to customers in their familiar regional language builds trust, eliminates misunderstandings, improves comfort, and boosts customer engagement and conversion rates.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI voice agents accurately understand Indian regional accents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Advanced voice AI platforms like Callience are configured with speech recognition models adapted for regional Indian pronunciations, local expressions, and multilingual conversational contexts.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries benefit most from regional language AI calling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthcare clinics, educational institutes, real estate agencies, financial services, and retail businesses benefit significantly by making everyday customer interactions accessible across different states.",
        },
      },
      {
        "@type": "Question",
        name: "Can regional AI voice agents transfer calls to human employees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI voice agents can manage initial qualification, routine enquiries, and reminders, then seamlessly transfer complex discussions or negotiations to human representatives when required.",
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
