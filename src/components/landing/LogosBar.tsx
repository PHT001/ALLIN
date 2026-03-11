"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroLogos = [
  {
    name: "Claude",
    sub: "by Anthropic",
    icon: "/images/logos/claude-icon.svg",
    color: "#D4A574",
  },
  {
    name: "OpenClaw",
    sub: "Platform",
    icon: "/images/logos/openclaw-icon.svg",
    color: "#6366F1",
  },
];

const otherLogos: { name: string; file: string; size: string }[] = [];

export default function LogosBar() {
  return (
    <section className="bg-[#F8F9FA] py-10 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-[#6B7280] mb-6"
        >
          Ils utilisent les outils qu&apos;on enseigne :
        </motion.p>

        {/* Hero logos — Claude & OpenClaw with neon treatment */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 lg:gap-10 mb-6"
        >
          {heroLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              {/* Neon glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: `${logo.color}20` }}
              />
              <div
                className="relative flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border transition-all duration-300 shadow-sm group-hover:shadow-lg"
                style={{ borderColor: `${logo.color}30` }}
              >
                <div className="relative">
                  {/* Subtle permanent glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-30"
                    style={{ backgroundColor: logo.color }}
                  />
                  <Image
                    src={logo.icon}
                    alt={logo.name}
                    width={40}
                    height={40}
                    className="relative h-10 w-10"
                  />
                </div>
                <div>
                  <span className="text-base font-bold text-[#111] block">
                    {logo.name}
                  </span>
                  <span className="text-xs text-[#6B7280]">{logo.sub}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
