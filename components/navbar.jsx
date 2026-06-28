import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-xl font-black text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm text-white shadow-lg shadow-slate-300">
            TN
          </span>
          TechNova
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Get Started</Link>
        </Button>
        <div className="flex flex-wrap justify-end gap-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
