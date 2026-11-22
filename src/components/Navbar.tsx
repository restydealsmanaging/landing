"use client";

import { useState } from "react";
import { UtensilsCrossed, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-resty-ivory/85 backdrop-blur-md border-b border-resty-stone-border/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-resty-stone flex items-center justify-center text-resty-ivory shadow-sm group-hover:bg-resty-orange transition-colors">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-resty-stone">
              Resty<span className="text-resty-orange">Deals</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-resty-stone-light">
          <a
            href="#come-funziona"
            className="hover:text-resty-orange transition-colors"
          >
            Come funziona
          </a>
          <a
            href="#per-i-ristoratori"
            className="hover:text-resty-orange transition-colors"
          >
            Per i ristoratori
          </a>
          <a
            href="#per-i-clienti"
            className="hover:text-resty-orange transition-colors"
          >
            Per i clienti
          </a>
          <a
            href="#chi-siamo"
            className="hover:text-resty-orange transition-colors"
          >
            Chi siamo
          </a>
          <a
            href="#faq"
            className="hover:text-resty-orange transition-colors"
          >
            Domande frequenti
          </a>
        </nav>

        {/* CTA Buttons Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#candidatura-ristoratore"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-resty-orange text-white text-sm font-semibold hover:bg-resty-orange-hover shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Partecipa al test</span>
            <ArrowRight className="w-4 h-4" />
          </a>
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
            <a
              href="#come-funziona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-resty-orange transition-colors"
            >
              Come funziona
            </a>
            <a
              href="#per-i-ristoratori"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-resty-orange transition-colors"
            >
              Per i ristoratori
            </a>
            <a
              href="#per-i-clienti"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-resty-orange transition-colors"
            >
              Per i clienti
            </a>
            <a
              href="#chi-siamo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-resty-orange transition-colors"
            >
              Chi siamo
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-resty-orange transition-colors"
            >
              Domande frequenti
            </a>
          </nav>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-resty-stone-border">
            <a
              href="#candidatura-ristoratore"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-resty-orange text-white font-semibold text-sm shadow-sm"
            >
              Per i ristoratori · Partecipa al test
            </a>
            <a
              href="#avvisami-lancio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl border border-resty-stone-border text-resty-stone font-semibold text-sm bg-resty-sand"
            >
              Per i clienti · Avvisami al lancio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
