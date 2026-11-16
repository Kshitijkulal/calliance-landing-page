import React from "react";
import type { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Callience",
  description:
    "Review Callience's Terms of Service for our AI calling software, voice agent automation, and customer outreach platform.",
  alternates: {
    canonical: "/terms-of-service",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8 max-w-4xl mx-auto font-manrope text-primary-black">
        <h1 className="text-4xl sm:text-5xl font-bebas uppercase tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-dark-grey mb-8">
          Last Updated: November 16, 2026 | Effective Date: November 16, 2026
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-primary-black/90">
          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website at callience.in or utilizing Callience&rsquo;s AI calling software, voice automation infrastructure, or campaign management services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you possess the legal authority to bind such entity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              2. Description of Platform Services
            </h2>
            <p>
              Callience provides enterprise software for configuring, testing, and deploying automated outbound and inbound conversational voice agents powered by artificial intelligence. Services include conversation flow modeling, telephony carrier routing, call logging, and transcript analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              3. Telephony Compliance &amp; Customer Warranties
            </h2>
            <p>
              The customer agrees that all outbound calling campaigns initiated via the platform must strictly comply with all applicable local, national, and international laws, telecommunications regulations, and consumer protection mandates.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Prior Express Consent:</strong> You warrant that you have obtained all necessary prior express consents from call recipients before launching automated voice calls.
              </li>
              <li>
                <strong>Telecommunications Guidelines:</strong> For operations in India, customers must strictly adhere to the Telecom Commercial Communications Customer Preference Regulations (TCCCPR) issued by TRAI, including Do-Not-Disturb (DND) list scrubbing and calling time restrictions.
              </li>
              <li>
                <strong>Prohibited Uses:</strong> You shall not use Callience for fraudulent activities, impersonation, unsolicited robo-spam, harassment, or any unlawful deceptive marketing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              4. Intellectual Property &amp; Customer Data
            </h2>
            <p>
              Callience and its licensors retain all rights, title, and interest in and to the platform, models, code, and interfaces. The customer retains all ownership of proprietary data, contact records, and campaign scripts uploaded into the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              5. Service Availability &amp; Limitations of Liability
            </h2>
            <p>
              While Callience endeavors to maintain high availability and low latency, telephony delivery depends on third-party telecommunications networks and internet connectivity. Callience provides the service on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. [SPECIFIC SLA TERMS AND LIABILITY CAPS: NEEDS MY INPUT].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Gurugram, Haryana, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              7. Inquiries
            </h2>
            <p>
              For legal or contractual questions regarding these Terms, contact us at: <a href="mailto:info@callience.in" className="underline">info@callience.in</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
