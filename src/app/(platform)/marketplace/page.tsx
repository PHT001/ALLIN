"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const listings = [
  { title: "Agent Support Client", category: "Agent IA", price: "49\u20ac", rating: 4.8, downloads: 234 },
  { title: "Chatbot E-commerce", category: "Chatbot", price: "79\u20ac", rating: 4.6, downloads: 156 },
  { title: "Automatisation LinkedIn", category: "Automation", price: "29\u20ac", rating: 4.9, downloads: 412 },
  { title: "Générateur de contenu SEO", category: "Contenu", price: "39\u20ac", rating: 4.7, downloads: 189 },
  { title: "Assistant RH", category: "Agent IA", price: "59\u20ac", rating: 4.5, downloads: 98 },
  { title: "Pipeline de prospection", category: "Automation", price: "69\u20ac", rating: 4.8, downloads: 267 },
];

export default function MarketplacePage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Marketplace</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Achete et vends des Skills, agents IA et templates sur le marketplace.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((item) => (
          <GlassCard key={item.title} className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-white/40 bg-white/[0.06] px-2 py-0.5 rounded-full">
                {item.category}
              </span>
              <span className="text-sm font-bold">{item.price}</span>
            </div>
            <h3 className="font-semibold text-sm mb-3">{item.title}</h3>
            <div className="flex items-center justify-between text-[10px] text-white/30">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="text-warning">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {item.rating}
              </span>
              <span>{item.downloads} téléchargements</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
