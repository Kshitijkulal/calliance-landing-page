import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Insights | Callience AI Voice Agents",
  description:
    "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling, and sales automation.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs & Insights | Callience AI Voice Agents",
    description:
      "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling, and sales automation.",
    url: "https://www.callience.in/blogs",
    siteName: "Callience",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights | Callience AI Voice Agents",
    description:
      "Explore the latest insights, technical guides, and business strategies on Voice AI, automated calling, and sales automation.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
