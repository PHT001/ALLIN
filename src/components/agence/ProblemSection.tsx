"use client";

import { motion } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

export default function ProblemSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-sm font-semibold text-[#007AFF] uppercase tracking-wider mb-3">
            Le probl&egrave;me
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Vous perdez du temps et de l&apos;argent{" "}
            <span className="text-[#9CA3AF]">sans le savoir.</span>
          </h2>
        </div>

        {/* Horloge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="relative w-24 sm:w-36 overflow-hidden" style={{ maskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)', WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)' }}>
            <LazyVideo src="/images/horloge.mp4" className="w-full h-auto" />
          </div>
        </motion.div>



      </div>
    </section>
  );
}
