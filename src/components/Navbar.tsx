"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UtensilsCrossed, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Come funziona", href: "/#come-funziona" },
    { label: "Per i ristoratori", href: "/per-i-ristoratori" },
    { label: "Per i clienti", href: "/per-i-clienti" },
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Domande frequenti", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-resty-ivory/95 backdrop-blur-sm border-b border-resty-stone-border/60 transition-colors isolate transform-gpu">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-resty-stone flex items-center justify-center text-resty-ivory shadow-sm group-hover:bg-resty-orange transition-colors">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-resty-stone">
              Resty<span className="text-resty-orange">Deals</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-resty-orange font-bold border-b-2 border-resty-orange"
                    : "text-resty-stone-light hover:text-resty-orange"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/per-i-ristoratori#candidatura-ristoratore"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-resty-orange text-white text-sm font-semibold hover:bg-resty-orange-hover shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Partecipa al test</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-resty-stone hover:bg-resty-sand-card transition-colors"
          aria-label="Apri menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-resty-stone-border bg-resty-ivory px-4 pt-3 pb-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-resty-stone pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive
                      ? "text-resty-orange font-bold"
                      : "text-resty-stone hover:text-resty-orange"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-resty-stone-border">
            <Link
              href="/per-i-ristoratori#candidatura-ristoratore"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-resty-orange text-white font-semibold text-sm shadow-sm"
            >
              Per i ristoratori · Partecipa al test
            </Link>
            <Link
              href="/per-i-clienti#avvisami-lancio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl border border-resty-stone-border text-resty-stone font-semibold text-sm bg-resty-sand"
            >
              Per i clienti · Avvisami al lancio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
