import Link from "next/link";
import { Store, Utensils, Heart, ArrowRight, ShieldCheck } from "lucide-react";

export default function AudiencePathsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-resty-stone-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-medium text-3xl sm:text-4xl text-resty-stone tracking-tight mb-4">
            Scegli come vivere <span className="text-resty-orange">RestyDeals</span>
          </h2>
          <p className="text-base text-resty-stone-light leading-relaxed">
            Che tu abbia un ristorante da valorizzare o che tu stia cercando una buona occasione per cenare fuori a Varese, abbiamo una sezione dedicata a te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card Ristoratori */}
          <div className="relative overflow-hidden rounded-3xl bg-resty-sand/50 p-8 sm:p-10 border border-resty-stone-border/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            {/* Sfondo con icona filigrana */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -right-6 -top-6 text-resty-orange/[0.08] group-hover:text-resty-orange/[0.13] group-hover:scale-105 transition-all duration-500 ease-out select-none"
            >
              <Store className="w-56 h-56 sm:w-64 sm:h-64" strokeWidth={1.2} />
            </div>

            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-resty-stone mb-2 tracking-tight">
                Area Ristoratori
              </h3>
              <p className="font-sans font-semibold text-base sm:text-lg text-resty-orange mb-3">
                Dai più valore al tuo menù
              </p>
              <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed mb-6">
                Riempi i coperti nelle ore tranquille e vendi ciò che rischia di restare invenduto. Decidi tu quali piatti proporre, a che prezzo e in quali orari.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-resty-stone-light mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-resty-green shrink-0" />
                  <span>I clienti consumano sempre nel tuo locale al tavolo</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-resty-green shrink-0" />
                  <span>Zero costi di attivazione per il test pilota</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/per-i-ristoratori"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-resty-orange text-white font-semibold text-sm hover:bg-resty-orange-hover shadow-sm transition-all"
              >
                <span>Scopri i vantaggi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card Clienti */}
          <div className="relative overflow-hidden rounded-3xl bg-resty-sand/50 p-8 sm:p-10 border border-resty-stone-border/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            {/* Sfondo con icona filigrana */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -right-6 -top-6 text-resty-stone/[0.07] group-hover:text-resty-stone/[0.12] group-hover:scale-105 transition-all duration-500 ease-out select-none"
            >
              <Utensils className="w-56 h-56 sm:w-64 sm:h-64" strokeWidth={1.2} />
            </div>

            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-resty-stone mb-2 tracking-tight">
                Area Clienti
              </h3>
              <p className="font-sans font-semibold text-base sm:text-lg text-resty-stone/85 mb-3">
                Stessa qualità, prezzo in promozione
              </p>
              <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed mb-6">
                Scopri le offerte dei ristoranti aderenti nella provincia di Varese. Sai quanto spendi prima di andare e ti godi la cucina autentica direttamente in sala.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-resty-stone-light mb-8">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-resty-green shrink-0" />
                  <span>Nessun asporto: qualità e servizio al 100% al tavolo</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-resty-green shrink-0" />
                  <span>Aiuti i ristoratori a valorizzare la dispensa fresca</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/per-i-clienti"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-resty-stone text-white font-semibold text-sm hover:bg-stone-800 shadow-sm transition-all"
              >
                <span>Scopri l&apos;esperienza</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Founder Story - Paragrafino aperto (Zero Cards) */}
        <div className="text-center max-w-2xl mx-auto pt-4 sm:pt-6">
          <p className="text-sm sm:text-base text-resty-stone-light font-sans leading-relaxed">
            <span className="inline-flex items-center gap-1.5 font-bold text-resty-stone mr-1.5">
              <Heart className="w-4 h-4 text-resty-orange shrink-0 inline" />
              Due ragazzi della provincia di Varese.
            </span>
            Una cucina, un computer, un&apos;idea. Emanuele (ristoratore) e Matteo (studente di informatica).{" "}
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-1 font-semibold text-resty-orange hover:text-resty-orange-hover transition-colors ml-1 whitespace-nowrap"
            >
              <span>Leggi la nostra storia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
