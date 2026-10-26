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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.callience.in"),
  title: "Callience | AI Voice Agents That Automate Outbound Calling",
  description:
    "Deploy intelligent AI voice agents that handle thousands of outbound calls simultaneously, qualify leads, book meetings, and scale your revenue on autopilot.",
  keywords: [
    "AI calling",
    "voice agents",
    "outbound automation",
    "sales automation",
    "AI dialer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Callience | AI Voice Agents That Automate Outbound Calling",
    description:
      "Deploy intelligent AI voice agents that handle thousands of outbound calls simultaneously, qualify leads, book meetings, and scale your revenue on autopilot.",
    url: "https://www.callience.in",
    siteName: "Callience",
    images: [
      {
        url: "/Mockup 1.png",
        width: 1200,
        height: 630,
        alt: "Callience AI Voice Agents Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Callience",
              url: "https://www.callience.in",
              logo: "https://www.callience.in/logo.png",
              image: "https://www.callience.in/Mockup%201.png",
              description:
                "AI voice agents that automate outbound calling, qualify leads, and book meetings.",
              telephone: "+91-8448445810",
              email: "info@callience.in",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "B-36,37,38, 2nd Floor, IDC Area, MG Road Opposite -Sector 14",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122001",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
