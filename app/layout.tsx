import type { Metadata } from "next";
import { Manrope, Bebas_Neue } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.callience.in"),
  title: {
    default: "AI Calling Software & AI Voice Agents | Callience",
    template: "%s | Callience",
  },
  description:
    "Deploy enterprise AI calling software and human-like AI voice agents to automate outbound calls, qualify sales leads, and book meetings at scale. Request a live demo.",
  keywords: [
    "AI calling software",
    "AI voice agent",
    "automated calling software",
    "AI calling platform",
    "AI outbound calling",
    "AI telecalling software",
    "outbound AI voice agent",
    "AI lead qualification",
    "automated outbound calling software",
    "AI voice agent platform",
    "AI voice calling software",
    "bulk AI calling",
    "AI sales call automation",
    "AI calling software India",
    "automated lead follow up calls",
    "AI lead calling",
    "Multilingual AI voice agent",
    "AI calling campaign software",
    "automated calling campaigns",
    "AI dialer",
    "Callience",
  ],
  alternates: {
    canonical: "/",
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
    ],
    shortcut: "/icon.svg",
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "AI Calling Software & AI Voice Agents | Callience",
    description:
      "Deploy enterprise AI calling software and human-like AI voice agents to automate outbound calls, qualify sales leads, and book meetings at scale. Request a live demo.",
    url: "https://www.callience.in",
    siteName: "Callience",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Callience AI Calling Software & Voice Agents Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Software & AI Voice Agents | Callience",
    description:
      "Deploy enterprise AI calling software and human-like AI voice agents to automate outbound calls, qualify sales leads, and book meetings at scale. Request a live demo.",
    images: ["/og-image.png"],
    creator: "@callience_ai",
    site: "@callience_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  applicationName: "Callience",
  authors: [{ name: "Callience", url: "https://www.callience.in" }],
  creator: "Callience",
  publisher: "Callience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bebasNeue.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-manrope), system-ui, sans-serif",
        }}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Callience",
                url: "https://www.callience.in",
                logo: "https://www.callience.in/logo.png",
                image: "https://www.callience.in/og-image.png",
                description:
                  "Enterprise AI calling software and outbound voice agents that automate customer conversations, qualify leads, and scale outreach.",
                telephone: "+91-8448445810",
                email: "info@callience.in",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "B-36, 37, 38, 2nd Floor, IDC Area, MG Road, Opposite Sector 14",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  postalCode: "122001",
                  addressCountry: "IN",
                },
                sameAs: [
                  "https://www.linkedin.com/company/callience",
                  "https://x.com/callience_ai",
                  "https://www.instagram.com/callience.ai",
                  "https://www.youtube.com/@ai.callience",
                  "https://www.facebook.com/people/Callience/61594899522765/",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Callience",
                url: "https://www.callience.in",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.callience.in/blogs?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
