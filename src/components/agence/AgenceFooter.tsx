"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Résultats", href: "#resultats" },
  { label: "Processus", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Formation", href: "/formation" },
];

export default function AgenceFooter() {
  return (
    <footer className="bg-[#0A0A0A] overflow-hidden">
      {/* Final CTA block */}
      <div className="relative py-20 lg:py-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#007AFF]/8 rounded-full blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              Dans 30 jours, votre entreprise
              <br />
              peut tourner <span className="text-[#007AFF]">2x plus vite.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              <strong className="font-semibold text-gray-300">1 heure</strong> pour découvrir ce que l&apos;IA peut changer dans votre business.
              <br />
              <strong className="font-semibold text-gray-300">Gratuit</strong>. <strong className="font-semibold text-gray-300">Sans engagement</strong>.
            </p>

            <div className="mt-10">
              <a
                href="https://calendly.com/opexiapro/audit-ia-gratuit"
                className="inline-flex items-center justify-center rounded-full bg-[#007AFF] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#0055D4] hover:shadow-2xl hover:shadow-blue-900/40"
              >
                Réserver mon audit gratuit maintenant
                <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              {["1h", "Gratuit", "Sans engagement", "En visio"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Opex<span className="text-[#5AC8FA]">IA</span>
              </span>
              <span className="text-xs text-gray-500">Agence d&apos;automatisation IA</span>
            </div>

            <nav className="flex flex-wrap items-center gap-6">
              {footerLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <a
              href="https://calendly.com/opexiapro/audit-ia-gratuit"
              className="text-sm font-semibold text-[#007AFF] hover:text-[#0055D4] transition-colors"
            >
              Réserver un audit &rarr;
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} OpexIA. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
