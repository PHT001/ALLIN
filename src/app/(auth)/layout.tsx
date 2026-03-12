import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-dark min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <Link href="/" className="mb-10">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-white">Opex</span>
          <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">IA</span>
        </span>
      </Link>
      {children}
    </div>
  );
}
