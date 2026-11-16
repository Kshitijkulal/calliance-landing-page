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
    question: "What can I use the platform for?",
    answer:
      "Automate outbound conversations such as lead qualification, customer follow-ups, appointment reminders, payment collections, targeted re-engagement, surveys and other high-volume calling workflows.",
  },
  {
    question: "Can I create an AI agent specific to my business?",
    answer:
      "Yes. Every AI agent is fully customized around your specific business goals, knowledge base, conversation flows, and brand tone to ensure highly personalized customer interactions.",
  },
  {
    question: "Can the AI speak multiple languages?",
    answer:
      "Yes. The platform supports multilingual conversations, allowing you to reach customers in the languages they are most comfortable speaking.",
  },
  {
    question: "Can I make multiple calls at the same time?",
    answer:
      "Yes. You can launch thousands of simultaneous outbound calls to reach large customer lists instantly, expanding your outreach capacity without adding headcount.",
  },
  {
    question: "Can I integrate it with my existing systems?",
    answer:
      "Yes. We architect the platform to integrate directly into your existing CRM, workflows, and business processes so your data stays perfectly synced.",
  },
  {
    question: "How do I know what happened on each call?",
    answer:
      "Every interaction is automatically captured. Your team gets real-time access to call transcripts, intent analysis, conversation outcomes, and clear follow-up steps right in your dashboard.",
  },
  {
    question: "Do I need technical expertise to get started?",
    answer:
      "No technical expertise is required. Our team provides white-glove onboarding, handling the configuration, agent setup, and campaign deployment so you can go live effortlessly.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Absolutely. Enterprise-grade security is built directly into our infrastructure to ensure your proprietary business information and customer data remain strictly protected at all times.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is customized based on your business requirements, calling volume, workflows and deployment needs.",
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
    name: "Callience AI Calling Software",
    operatingSystem: "All (Cloud-based SaaS)",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Sales Automation & AI Voice Calling",
    description:
      "Enterprise AI calling software and human-like AI voice agents that automate customer conversations, qualify sales leads, and scale outreach on autopilot.",
    url: "https://www.callience.in",
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
