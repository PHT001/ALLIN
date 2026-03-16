"use client";

import { motion } from "framer-motion";

export default function ScrollVideo() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Video container - full width, no padding */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl mx-auto px-6 lg:px-8 py-12"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15">
          {/* Subtle gradient overlay on edges */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.05) 100%)",
            }}
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          >
            <source src="/images/desk-transform.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}
