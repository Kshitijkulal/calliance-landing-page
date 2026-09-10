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
  title: "AICaller — AI Voice Agents That Automate Outbound Calling",
  description:
    "Deploy intelligent AI voice agents that handle thousands of outbound calls simultaneously, qualify leads, book meetings, and scale your revenue on autopilot.",
  keywords: [
    "AI calling",
    "voice agents",
    "outbound automation",
    "sales automation",
    "AI dialer",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${bebasNeue.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-manrope), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
