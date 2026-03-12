import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Résultats", href: "#resultats" },
  { label: "Processus", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Formation", href: "/" },
];

export default function AgenceFooter() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold tracking-tight">
              Opex<span className="text-[#E57373]">IA</span>
            </span>
            <span className="text-xs text-[#6B7280]">Agence d&apos;infrastructure IA</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link key={link.label} href={link.href} className="text-sm text-[#6B7280] hover:text-[#111] transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="text-sm text-[#6B7280] hover:text-[#111] transition-colors">
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#calendly"
            className="text-sm font-semibold text-[#FF1744] hover:text-[#D50000] transition-colors"
          >
            R&eacute;server un audit &rarr;
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
          <p className="text-xs text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} OpexIA. Tous droits r&eacute;serv&eacute;s.
          </p>
        </div>
      </div>
    </footer>
  );
}
