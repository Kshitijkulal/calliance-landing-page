import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import CallToWorkSection from "./components/sections/CallToWorkSection";
import DataSecuritySection from "./components/sections/DataSecuritySection";
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
      <main
        className="overflow-x-hidden"
        style={{ flex: 1, backgroundColor: "var(--color-primary-beige)" }}
      >
        <HeroSection />
        <DataSecuritySection />
        <CallToWorkSection />
        <HowItWorksSection />
        <div className="h-12 md:h-24 w-full" />
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
