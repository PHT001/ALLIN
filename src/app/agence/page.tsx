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
    <>
      <AgenceNavbar />
      {/* HOOK — Accroche + preuve sociale */}
      <AgenceHero />
      {/* CONFIANCE — Secteurs accompagnés */}
      <LogoMarquee />
      {/* PROBLÈME — Agiter la douleur */}
      <ProblemSection />
      {/* URGENCE — Timeline marché */}
      <UrgencyTimeline />
      {/* SOLUTION — Services IA */}
      <ServicesSection />
      {/* PROCESSUS — 3 étapes */}
      <ProcessSteps />
      {/* RÉSULTATS — Avant / Après */}
      <BeforeAfter />
      {/* PREUVE SOCIALE — Témoignages */}
      <AgenceTestimonials />
      {/* PASSERELLE — Formation */}
      <FormationBridge />
      {/* OBJECTIONS — FAQ */}
      <AgenceFAQ />
      {/* CTA FINAL */}
      <AgenceFinalCTA />
      {/* FOOTER */}
      <AgenceFooter />
      {/* FLOATING */}
      <AgenceStickyMobileCTA />
    </>
  );
}
