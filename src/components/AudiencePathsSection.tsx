import Link from "next/link";
import { Store, Utensils, Heart, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function AudiencePathsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-resty-stone-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-resty-peach text-xs font-bold uppercase tracking-wider text-resty-orange-dark mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Due percorsi, un unico valore</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-resty-stone tracking-tight mb-4">
            Scegli come vivere <span className="text-resty-orange">RestyDeals</span>
          </h2>
          <p className="text-base text-resty-stone-light leading-relaxed">
            Che tu abbia un ristorante da valorizzare o che tu stia cercando una buona occasione per cenare fuori a Varese, abbiamo una sezione dedicata a te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card Ristoratori */}
          <div className="rounded-3xl bg-resty-sand/50 p-8 sm:p-10 border border-resty-stone-border/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-resty-stone text-white flex items-center justify-center mb-6 group-hover:bg-resty-orange transition-colors">
                <Store className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-resty-orange-dark border border-resty-stone-border/60 mb-3 inline-block">
                Area Ristoratori
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-resty-stone mb-3 leading-snug">
                Dai più valore al tuo menù
              </h3>
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

            <Link
              href="/per-i-ristoratori"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-resty-orange text-white font-semibold text-sm hover:bg-resty-orange-hover shadow-sm transition-all"
            >
              <span>Entra nella sezione ristoratori</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card Clienti */}
          <div className="rounded-3xl bg-resty-sand/50 p-8 sm:p-10 border border-resty-stone-border/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-resty-peach text-resty-orange flex items-center justify-center mb-6 group-hover:bg-resty-orange group-hover:text-white transition-colors">
                <Utensils className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-resty-stone-light border border-resty-stone-border/60 mb-3 inline-block">
                Area Clienti
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-resty-stone mb-3 leading-snug">
                Stessa qualità, prezzo in promozione
              </h3>
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

            <Link
              href="/per-i-clienti"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-resty-stone text-white font-semibold text-sm hover:bg-stone-800 shadow-sm transition-all"
            >
              <span>Entra nella sezione clienti</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Founder Story Strip */}
        <div className="rounded-2xl bg-resty-sand p-6 sm:p-8 border border-resty-stone-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-resty-peach flex items-center justify-center text-resty-orange shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-resty-stone">
                Due ragazzi della provincia di Varese
              </h4>
              <p className="text-xs sm:text-sm text-resty-stone-light">
                Una cucina, un computer, un&apos;idea. Emanuele (ristoratore) e Matteo (studente di informatica).
              </p>
            </div>
          </div>

          <Link
            href="/chi-siamo"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-resty-orange hover:text-resty-orange-hover transition-colors shrink-0"
          >
            <span>Leggi la nostra storia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
