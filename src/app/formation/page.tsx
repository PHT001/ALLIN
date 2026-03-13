import Navbar from "@/components/landing/Navbar";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import UrgenceIA from "@/components/landing/UrgenceIA";
import DreamSection from "@/components/landing/DreamSection";
import DarkStats from "@/components/landing/DarkStats";
import Testimonials from "@/components/landing/Testimonials";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Program from "@/components/landing/Program";

import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyFloatingCTA from "@/components/landing/StickyFloatingCTA";
import Chatbot from "@/components/landing/Chatbot";

export default function FormationPage() {
  return (
    <>
      <UrgencyBanner />
      <Navbar />
      <Hero />
      <PainSection />
      <UrgenceIA />
      <DreamSection />
      <DarkStats />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Program />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyFloatingCTA />
      <Chatbot />
    </>
  );
}
