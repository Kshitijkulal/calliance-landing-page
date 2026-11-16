import React from "react";
import type { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | Callience",
  description:
    "Read Callience's policy on platform subscriptions, custom onboarding, telephony usage credits, and refunds.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8 max-w-4xl mx-auto font-manrope text-primary-black">
        <div className="mb-8 p-4 rounded-xl border border-dashed border-amber-600/40 bg-amber-50 text-amber-900 text-xs sm:text-sm font-medium">
          [DRAFT STRUCTURE &mdash; NEEDS FORMAL LEGAL REVIEW BEFORE RELIANCE. DO NOT ASSUME REFUND TIMELINES WITHOUT MANAGEMENT INPUT.]
        </div>

        <h1 className="text-4xl sm:text-5xl font-bebas uppercase tracking-tight mb-4">
          Refund Policy
        </h1>
        <p className="text-sm text-dark-grey mb-8">
          Last Updated: November 16, 2026 | Effective Date: November 16, 2026
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-primary-black/90">
          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              1. Commercial Scope
            </h2>
            <p>
              Callience provides business-to-business (B2B) software services and campaign consulting. Pricing structures are tailored around enterprise calling volume, voice model configuration, and telecommunications usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              2. Onboarding &amp; Setup Services
            </h2>
            <p>
              Custom agent onboarding, bespoke conversation script engineering, CRM webhook integration, and white-glove setup services represent dedicated engineering effort and are non-refundable once service kickoff has commenced.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              3. Telephony Minutes &amp; Consumables
            </h2>
            <p>
              Call charges and carrier connection minutes consumed during test calls, campaign simulations, or live outbound/inbound operations are incurred directly with telecommunications carriers and are strictly non-refundable once executed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              4. Subscription Cancellations &amp; Adjustments
            </h2>
            <p>
              Enterprise clients may cancel recurring platform access prior to the next billing cycle by submitting a written notice to their account manager or emailing <a href="mailto:info@callience.in" className="underline">info@callience.in</a>. [CANCELLATION NOTICE WINDOW AND PRE-PAID CREDIT EXPIRATION: NEEDS MY INPUT].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-primary-black">
              5. Dispute Resolution &amp; Inquiries
            </h2>
            <p>
              If you believe a billing error has occurred on your invoice or account ledger, please notify our accounts team within 15 days of the charge date for review:
            </p>
            <div className="mt-3 p-4 bg-primary-beige/50 rounded-xl border border-black/10">
              <p className="font-bold">Callience Billing &amp; Inquiries</p>
              <p>Email: <a href="mailto:info@callience.in" className="underline">info@callience.in</a></p>
              <p>Phone: +91 8448445810</p>
              <p>Address: B-36, 37, 38, 2nd Floor, IDC Area, MG Road, Opposite Sector 14, Gurugram, Haryana 122001, India</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
