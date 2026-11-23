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
  return <>{children}</>;
}
