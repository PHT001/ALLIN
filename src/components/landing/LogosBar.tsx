"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroLogos = [
  {
    name: "Claude",
    sub: "by Anthropic",
    icon: "/images/claude-logo-3d.png",
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

        {/* Hero logos — Claude & OpenClaw */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 lg:gap-6 mb-6"
        >
          {heroLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-2.5 border border-gray-200 shadow-sm"
            >
              <Image
                src={logo.icon}
                alt={logo.name}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#111] leading-tight">
                  {logo.name}
                </span>
                <span className="text-[11px] text-[#6B7280] leading-tight whitespace-nowrap">{logo.sub}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
