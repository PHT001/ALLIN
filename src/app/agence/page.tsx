"use client";

import AgenceNavbar from "@/components/agence/AgenceNavbar";
import AgenceHero from "@/components/agence/AgenceHero";
import LogoMarquee from "@/components/agence/LogoMarquee";
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

export default function AgencePage() {
  return (
    <div className="relative">
      {/* Global grid pattern background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        <AgenceNavbar />
        <AgenceHero />
        <LogoMarquee />
        <ProblemSection />
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
      </div>
    </div>
  );
}
