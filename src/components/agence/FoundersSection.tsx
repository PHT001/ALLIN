"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundersSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
            L&apos;&eacute;quipe derri&egrave;re OpexIA
          </h2>

          {/* Founder cards */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-10">
            {[
              { name: "Marius", role: "Co-Fondateur", img: "/images/marius.png" },
              { name: "Igor", role: "Co-Fondateur", img: "/images/igor.jpg" },
            ].map((founder) => (
              <div
                key={founder.name}
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#111]">{founder.name}</span>
                    <Image
                      src="/images/blinkedin.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </div>
                  <p className="text-sm text-[#9CA3AF]">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Personal message */}
          <div className="text-left space-y-4 text-[#6B7280] leading-relaxed">
            <p>
              OpexIA est n&eacute;e d&apos;un <strong className="text-[#111]">constat terrain</strong> : des <strong className="text-[#111]">entreprises performantes</strong> perdent du terrain face &agrave; des concurrents qui ont d&eacute;j&agrave; <strong className="text-[#111]">int&eacute;gr&eacute; l&apos;IA</strong> dans leurs op&eacute;rations. Pas par manque de comp&eacute;tences, mais par <strong className="text-[#111]">manque de temps</strong> et d&apos;accompagnement adapt&eacute;.
            </p>
            <p>
              Nous avons accompagn&eacute; <strong className="text-[#111]">plus de 200 entreprises</strong> — PME, agences, cabinets — dans l&apos;int&eacute;gration concr&egrave;te de l&apos;IA. Notre m&eacute;thode est rod&eacute;e : identification des <strong className="text-[#111]">processus &agrave; fort impact</strong>, d&eacute;ploiement <strong className="text-[#111]">cl&eacute; en main en 14 jours</strong>, <strong className="text-[#111]">r&eacute;sultats mesurables</strong> d&egrave;s le premier mois.
            </p>
            <p>
              <strong className="text-[#111]">Audit, automatisation, d&eacute;ploiement, formation, support continu</strong> — tout est inclus. Vous restez concentr&eacute; sur <strong className="text-[#111]">votre activit&eacute;</strong>, on s&apos;occupe de la <strong className="text-[#111]">transformation</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
