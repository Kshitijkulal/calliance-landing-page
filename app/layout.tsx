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
    "Enterprise AI calling software with human-like AI calling agents. Automate inbound and outbound calls, qualify sales leads, and scale outreach 24/7 in 22+ native languages.",
  keywords: [
    "AI calling agent",
    "AI customer service",
    "AI voice agent",
    "AI receptionist",
    "inbound calling",
    "voice AI platform",
    "AI lead generation",
    "lead conversion",
    "lead qualification",
    "call tracking software",
    "automated calling system",
    "auto dialer software",
    "conversation intelligence",
    "customer support automation",
    "lead follow up",
    "conversational AI agent",
    "AI voice agent for real estate",
    "AI calling software",
    "bulk calling software",
    "AI lead scoring",
    "call center cost reduction",
    "outbound sales automation",
    "real-time call transcription",
    "renewal reminders",
    "customer re-engagement",
    "revive dead leads",
    "custom AI voice",
    "AI call analytics",
    "AI sales outreach",
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
      "Enterprise AI calling software with human-like AI calling agents. Automate inbound and outbound calls, qualify sales leads, and scale outreach 24/7 in 22+ native languages.",
    url: "https://www.callience.in",
    siteName: "Callience",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Callience Voice AI Platform & AI Calling Agents",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Software & AI Voice Agents | Callience",
    description:
      "Enterprise AI calling software with human-like AI calling agents. Automate inbound and outbound calls, qualify sales leads, and scale outreach 24/7 in 22+ native languages.",
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
                  "Enterprise voice AI platform and human-like AI calling agents for inbound calling, 24/7 AI receptionists, outbound sales automation, and lead qualification.",
                telephone: "+91-8448445810",
                email: "info@callience.in",
                knowsAbout: [
                  "AI calling agent",
                  "AI customer service",
                  "AI voice agent",
                  "AI receptionist",
                  "Inbound calling",
                  "Voice AI platform",
                  "AI lead generation",
                  "Lead conversion",
                  "Lead qualification",
                  "Call tracking software",
                  "Automated calling system",
                  "Auto dialer software",
                  "Conversation intelligence",
                  "Customer support automation",
                  "Lead follow up",
                  "Conversational AI agent",
                  "AI voice agent for real estate",
                  "AI calling software",
                  "Bulk calling software",
                  "AI lead scoring",
                  "Call center cost reduction",
                  "Outbound sales automation",
                  "Real-time call transcription",
                  "Renewal reminders",
                  "Customer re-engagement",
                  "Revive dead leads",
                  "Custom AI voice",
                  "AI call analytics",
                  "AI sales outreach",
                ],
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
