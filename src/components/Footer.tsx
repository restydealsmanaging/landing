"use client";

import { UtensilsCrossed, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-resty-stone text-resty-ivory border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-resty-orange flex items-center justify-center text-white">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Resty<span className="text-resty-orange">Deals</span>
              </span>
            </div>
            <p className="text-sm text-stone-300 max-w-md leading-relaxed mb-4">
              Stessa qualità. Più valore, a tavola. La piattaforma che unisce ristoratori e amanti del buon cibo per valorizzare la cucina locale e azzerare gli sprechi.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-resty-orange-light">
              <span>● Progetto in fase di test · Provincia di Varese</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navigazione
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <a href="#come-funziona" className="hover:text-resty-orange transition-colors">
                  Come funziona
                </a>
              </li>
              <li>
                <a href="#per-i-ristoratori" className="hover:text-resty-orange transition-colors">
                  Per i ristoratori
                </a>
              </li>
              <li>
                <a href="#per-i-clienti" className="hover:text-resty-orange transition-colors">
                  Per i clienti
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="hover:text-resty-orange transition-colors">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-resty-orange transition-colors">
                  Domande frequenti
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Partecipa
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#candidatura-ristoratore"
                className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-resty-orange text-white hover:bg-resty-orange-hover text-center transition-colors"
              >
                Candidatura Ristoranti
              </a>
              <a
                href="#avvisami-lancio"
                className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-center transition-colors"
              >
                Waitlist Clienti
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-1.5">
            <span>© 2026 RestyDeals. Creato con</span>
            <Heart className="w-3.5 h-3.5 text-resty-orange fill-resty-orange" />
            <span>da Emanuele & Matteo (Varese).</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Torna su</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
