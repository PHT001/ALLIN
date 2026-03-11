"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#0A0A0A] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF1744]/8 rounded-full blur-[150px]" />

      {/* Decorative mascot left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-12 left-8 lg:left-32 pointer-events-none"
      >
        <Image
          src="/images/mascot-robot.png"
          alt=""
          width={120}
          height={120}
          className="w-16 lg:w-24"
        />
      </motion.div>

      {/* Decorative star right */}
      <motion.div
        initial={{ opacity: 0, rotate: 30 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute top-12 right-12 lg:right-32 pointer-events-none"
      >
        <Image
          src="/images/deco-star.png"
          alt=""
          width={80}
          height={80}
          className="w-14 lg:w-20"
        />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo above */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-opexia.png"
              alt="OpexIA"
              width={160}
              height={50}
              className="h-10 w-auto brightness-0 invert opacity-30"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            L&apos;IA change le monde.
            <br />
            <span className="text-[#FF1744]">Change ta vie avec.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Les entreprises locales cherchent des experts IA. Cette fenêtre
            d&apos;opportunité ne restera pas ouverte éternellement. Agis
            maintenant.
          </p>

          <div className="mt-10">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[#FF1744] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#D50000] hover:shadow-2xl hover:shadow-red-900/40"
            >
              Commencer maintenant
              <svg
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Satisfait ou remboursé 14 jours. Zéro risque.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
