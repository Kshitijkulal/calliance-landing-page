import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice AI & Calling Automation Insights",
  description:
    "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling software, and AI voice agents.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Voice AI & Calling Automation Insights | Callience",
    description:
      "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling software, and AI voice agents.",
    url: "https://www.callience.in/blogs",
    siteName: "Callience",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.callience.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Callience Voice AI and Calling Automation Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice AI & Calling Automation Insights | Callience",
    description:
      "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling software, and AI voice agents.",
    images: ["https://www.callience.in/og-image.png"],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Callience Voice AI & Calling Automation Insights",
    description:
      "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling software, and AI voice agents.",
    url: "https://www.callience.in/blogs",
    publisher: {
      "@type": "Organization",
      name: "Callience",
      url: "https://www.callience.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.callience.in/logo.png",
      },
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
