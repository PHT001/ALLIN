"use client";

import AgenceNavbar from "@/components/agence/AgenceNavbar";
import AgenceHero from "@/components/agence/AgenceHero";
import SectorChat from "@/components/agence/SectorChat";
import ProblemSection from "@/components/agence/ProblemSection";
import UrgencyTimeline from "@/components/agence/UrgencyTimeline";
import ServicesSection from "@/components/agence/ServicesSection";
import ProcessSteps from "@/components/agence/ProcessSteps";
import BeforeAfter from "@/components/agence/BeforeAfter";
import AgenceTestimonials from "@/components/agence/AgenceTestimonials";
import FormationBridge from "@/components/agence/FormationBridge";
import AgenceFAQ from "@/components/agence/AgenceFAQ";
import AgenceFinalCTA from "@/components/agence/AgenceFinalCTA";
import AgenceFooter from "@/components/agence/AgenceFooter";
import AgenceStickyMobileCTA from "@/components/agence/AgenceStickyMobileCTA";
import AgenceChatbot from "@/components/agence/AgenceChatbot";
import ScrollVideo from "@/components/agence/ScrollVideo";
export default function Home() {
  return (
    <>
      <AgenceNavbar />
      <AgenceHero />
      <SectorChat />
      <ProblemSection />
      <ScrollVideo />
      <UrgencyTimeline />
      <ServicesSection />
      <ProcessSteps />
      <BeforeAfter />
      <AgenceTestimonials />
      <FormationBridge />
      <AgenceFAQ />
      <AgenceFinalCTA />
      <AgenceFooter />
      <AgenceStickyMobileCTA />
      <AgenceChatbot />
    </>
  );
}
