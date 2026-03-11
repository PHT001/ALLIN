"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroTestimonial = {
  quote:
    "OpexIA m'a permis de passer de zéro connaissance en IA à une agence qui génère 3 200€/mois en seulement 6 semaines. Le programme est clair, concret, et le support est exceptionnel.",
  name: "Thomas D.",
  role: "Fondateur, AgenceAI Pro",
  result: "3 200€/mois en 6 semaines",
};

const testimonials = [
  {
    quote:
      "J'avais peur de la technique, mais les leçons sont tellement bien structurées que j'ai créé mon premier chatbot en 3 jours. Mon client était bluffé.",
    name: "Sarah M.",
    role: "Freelance IA",
    result: "Premier client en 10 jours",
  },
  {
    quote:
      "Le pipeline CRM intégré change tout. Je gère mes prospects, mes projets et ma facturation depuis la même plateforme. Un gain de temps énorme.",
    name: "Marc L.",
    role: "Consultant IA",
    result: "5 clients en 2 mois",
  },
  {
    quote:
      "Les templates et les scripts de prospection m'ont permis de décrocher mon premier contrat à 1 500€ en moins de 2 semaines. ROI immédiat.",
    name: "Julie R.",
    role: "Créatrice d'agence IA",
    result: "1 500€ dès la semaine 2",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FF1744]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ce qu&apos;ils en disent
          </h2>
        </motion.div>

        {/* Hero testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-[#F8F9FA] rounded-3xl p-8 lg:p-12">
            <svg
              className="absolute top-8 left-8 lg:top-12 lg:left-12 h-10 w-10 text-[#FF1744]/15"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative">
              <Stars />
              <blockquote className="mt-6 text-xl lg:text-2xl font-medium leading-relaxed text-[#111]">
                &ldquo;{heroTestimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#FF1744] to-[#FF5252] flex items-center justify-center text-white font-bold text-lg">
                  {heroTestimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-[#111]">
                    {heroTestimonial.name}
                  </div>
                  <div className="text-sm text-[#6B7280]">
                    {heroTestimonial.role}
                  </div>
                </div>
                <div className="ml-auto hidden sm:block">
                  <span className="inline-flex items-center rounded-full bg-[#FF1744]/10 px-4 py-1.5 text-sm font-semibold text-[#FF1744]">
                    {heroTestimonial.result}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F8F9FA] rounded-2xl p-6 lg:p-8 space-y-4"
            >
              <Stars />
              <p className="text-[#6B7280] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-semibold text-[#6B7280] text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111]">{t.name}</div>
                  <div className="text-xs text-[#6B7280]">{t.role}</div>
                </div>
              </div>
              <span className="inline-flex items-center text-xs font-semibold text-[#FF1744]">
                {t.result}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Founders trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              <div className="h-9 w-9 rounded-full border-2 border-[#333] overflow-hidden">
                <Image src="/images/founder-marius.png" alt="Marius" width={36} height={36} className="h-full w-full object-cover" />
              </div>
              <div className="h-9 w-9 rounded-full border-2 border-[#333] overflow-hidden">
                <Image src="/images/founder-igor.jpg" alt="Igor" width={36} height={36} className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-white text-sm font-medium">
              &ldquo;On a créé OpexIA pour rendre l&apos;IA accessible à tous.&rdquo;
              <span className="text-gray-400 text-xs block">— Marius &amp; Igor, Co-fondateurs</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
