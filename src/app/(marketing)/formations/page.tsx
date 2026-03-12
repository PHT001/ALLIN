import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
import { TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Formations",
  description: "Découvre nos 3 formules pour lancer ton agence IA : Starter, Academy et One-to-One.",
};

export default function FormationsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge dot className="mb-6">3 formules adaptées</Badge>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Choisis ta formule
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Que tu sois curieux, déterminé ou pressé, on a la formule qu&apos;il te faut
            pour lancer ton agence IA.
          </p>
        </div>
      </ScrollFadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIERS.map((tier, i) => (
          <ScrollFadeIn key={tier.id} delay={i * 100}>
            <GlassCard
              className={cn(
                "p-8 flex flex-col h-full",
                tier.popular && "border-white/[0.15] shadow-[0_0_30px_rgba(255,255,255,0.06)]"
              )}
              depth
            >
              {tier.popular && (
                <Badge className="self-start mb-4">Populaire</Badge>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black">{tier.price}&euro;</span>
                <span className="text-sm text-text-tertiary">{tier.period}</span>
              </div>
              <p className="text-sm text-text-secondary mb-8">{tier.description}</p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-text-tertiary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={cn(!feature.included && "text-text-tertiary")}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "primary" : "secondary"}
                className="w-full"
                glow={tier.popular}
              >
                {tier.cta}
              </Button>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>

      {/* Guarantee */}
      <ScrollFadeIn>
        <div className="max-w-2xl mx-auto text-center mt-20">
          <GlassCard className="p-8">
            <h3 className="text-lg font-bold mb-3">Satisfait ou remboursé</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Tu as 14 jours pour tester la formation. Si ça ne te convient pas,
              on te rembourse intégralement. Sans condition.
            </p>
          </GlassCard>
        </div>
      </ScrollFadeIn>
    </div>
  );
}
