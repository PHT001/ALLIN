import type { Metadata } from "next";
import { DM_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import { SessionProvider } from "@/components/providers/SessionProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OpexIA — Lance ton agence IA rentable en 30 jours",
    template: "%s | OpexIA",
  },
  description:
    "Formation complète pour créer et vendre des services IA aux entreprises locales. Atteins 10k€/mois.",
  keywords: [
    "agence IA",
    "formation IA",
    "automatisation IA",
    "intelligence artificielle",
    "freelance IA",
  ],
  openGraph: {
    title: "OpexIA — Lance ton agence IA",
    description: "Formations IA pour créer et gérer ta propre agence. Premier client en 30 jours.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${outfit.variable} ${jetbrains.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
