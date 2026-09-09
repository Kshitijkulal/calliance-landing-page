import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import UnifiedPlatformSection from "./components/sections/UnifiedPlatformSection";
import CallToWorkSection from "./components/sections/CallToWorkSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import MoreThanDialerSection from "./components/sections/MoreThanDialerSection";
import PricingSection from "./components/sections/PricingSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: "var(--color-primary-beige)" }}>
        <HeroSection />
        <UnifiedPlatformSection />
        <CallToWorkSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MoreThanDialerSection />
        <PricingSection />
        <IndustriesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
