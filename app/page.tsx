import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import DataSecuritySection from "./components/sections/DataSecuritySection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import CampaignPartnerSection from "./components/sections/CampaignPartnerSection";
import PricingSection from "./components/sections/PricingSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import FasterCallsSection from "./components/sections/FasterCallsSection";

const HOME_FAQS = [
  {
    question: "What can I use Callience platform for?",
    answer:
      "Callience AI voice agents handle inbound calls, such as customer enquiries and lead capture, and outbound calls, such as lead qualification, follow-ups, appointment reminders, payment reminders, re-engagement and surveys, for enterprises and MSMEs.",
  },
  {
    question: "Can the AI handle inbound calls?",
    answer:
      "Yes. Callience AI voice agents answer inbound calls 24/7, including after hours, and handle multiple inbound calls at the same time, so customers never wait in a queue.",
  },
  {
    question: "Can the AI handle multiple calls at the same time?",
    answer:
      "Yes. You can launch thousands of simultaneous outbound calls to reach large customer lists instantly, and the AI handles multiple inbound calls at the same time, expanding your capacity without adding headcount.",
  },
  {
    question: "Do I need technical expertise to set up an AI voice agent?",
    answer:
      "No technical expertise is required. Our team provides white-glove onboarding, handling configuration, AI voice agent setup, and campaign deployment so you can go live effortlessly.",
  },
  {
    question: "Is my customer data secure with an AI voice agent?",
    answer:
      "Yes. Your business and customer data is encrypted and stays under your control, protecting your data privacy. Access and decryption are restricted to you and the authorized identities you choose.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Callience - Voice AI Platform & AI Calling Software",
    operatingSystem: "All (Cloud-based SaaS)",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Voice AI Platform & Conversational AI Agent Software",
    description:
      "Enterprise AI calling software with human-like AI calling agents and AI receptionists. Automate inbound and outbound calls, qualify sales leads, and scale outreach 24/7 in 22+ native languages.",
    url: "https://www.callience.in",
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
    ],
    featureList: [
      "Human-Like AI Calling Agents Built Around Your Business",
      "24/7 Inbound Calling With an AI Receptionist",
      "Outbound Sales Automation at Scale with Auto Dialer Software",
      "Multilingual AI Calling in 22+ Native Languages",
      "Track Every Call with Conversation Intelligence & Call Tracking Software",
      "Automated Lead Follow Up & AI Lead Qualification",
      "Industry Solutions for Real Estate, Education, FinTech, Healthcare, Retail & Logistics",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Flexible, pay-for-what-you-use AI calling plans for inbound and outbound calls",
    },
  };

  return (
    <>
      <Navbar />
      <main
        className="overflow-x-hidden"
        style={{ flex: 1, backgroundColor: "var(--color-primary-beige)" }}
      >
        <HeroSection />
        <DataSecuritySection />
        <HowItWorksSection />
        <FasterCallsSection />
        <div className="h-2 sm:h-4 md:h-24 w-full" />
        <FeaturesSection />
        <CampaignPartnerSection />
        <PricingSection />
        <IndustriesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, softwareSchema]),
        }}
      />
    </>
  );
}
