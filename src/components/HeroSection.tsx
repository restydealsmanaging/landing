"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin, Sparkles, Utensils, ShieldCheck, Flame } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-resty-orange/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-resty-green/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-resty-sand-card border border-resty-stone-border/80 text-xs font-bold tracking-wider uppercase text-resty-orange-dark mb-6">
              <span className="w-2 h-2 rounded-full bg-resty-orange inline-block" />
              <span>Titolo principale · Web App in fase di test</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-resty-stone tracking-tight leading-[1.08] mb-6">
              Stessa qualità. <br />
              <span className="text-resty-orange">Più valore</span>, a tavola.
            </h1>

            {/* Lead description from CEO */}
            <p className="text-lg sm:text-xl text-resty-stone-light font-normal leading-relaxed mb-8 max-w-2xl">
              Con RestyDeals scopri le offerte dei ristoranti aderenti e gusti il
              tuo piatto <strong>direttamente nel locale</strong>. Tu paghi un
              prezzo più vantaggioso, il ristoratore può vendere di più nelle ore
              tranquille e insieme si riduce il rischio di spreco alimentare.
            </p>

            {/* Pulsanti di apertura (Dual CTAs) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Link
                href="/per-i-ristoratori#candidatura-ristoratore"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-resty-orange text-white font-semibold text-base shadow-md hover:bg-resty-orange-hover hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Per i ristoratori · Partecipa al test</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/per-i-clienti#avvisami-lancio"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-resty-sand border border-resty-stone-border text-resty-stone font-semibold text-base hover:bg-resty-sand-card hover:border-resty-stone-muted/40 transition-all text-center"
              >
                <span>Per i clienti · Avvisami al lancio</span>
              </Link>
            </div>

            {/* Titoli alternativi & Payoff pill from doc */}
            <div className="w-full pt-6 border-t border-resty-stone-border/70 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs sm:text-sm text-resty-stone-muted">
              <div className="flex items-center gap-1.5 font-medium text-resty-stone-light">
                <Sparkles className="w-4 h-4 text-resty-orange" />
                <span>La nostra promessa:</span>
              </div>
              <div className="italic">
                &ldquo;Buono come sempre. Conveniente quando c&apos;è un&apos;offerta.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Deal Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Outer card with subtle warm glow */}
              <div className="rounded-3xl bg-white border border-resty-stone-border/80 shadow-2xl p-6 sm:p-7 relative transition-all duration-300 hover:shadow-3xl">
                {/* Header card: Restaurant info & Live indicator */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-resty-orange/15 text-resty-orange flex items-center justify-center font-heading font-black text-lg">
                      R
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading font-bold text-base text-resty-stone">
                          Trattoria San Giorgio
                        </h4>
                        <ShieldCheck className="w-4 h-4 text-resty-green" />
                      </div>
                      <p className="text-xs text-resty-stone-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-resty-orange" />
                        Centro Storico · Varese
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-resty-green-soft text-resty-green-dark text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-resty-green animate-pulse" />
                    Offerta attiva
                  </span>
                </div>

                {/* Offer visual badge & details */}
                <div className="rounded-2xl bg-resty-sand p-4 border border-resty-stone-border/50 mb-5">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-resty-orange-dark mb-2">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-resty-orange" />
                      Piatto del Giorno
                    </span>
                    <span className="text-resty-stone-muted font-normal lowercase">
                      disponibilità limitata
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-resty-stone mb-1.5 leading-snug">
                    Risotto ai Porcini & Mirtilli delle Prealpi
                  </h3>
                  <p className="text-xs text-resty-stone-light leading-relaxed">
                    Preparato espresso con ingredienti freschi di giornata. Stessa
                    ricetta, porzione completa del menù.
                  </p>

                  <div className="mt-4 pt-3 border-t border-resty-stone-border/60 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-heading font-extrabold text-resty-orange">
                        € 11,50
                      </span>
                      <span className="text-sm line-through text-resty-stone-muted">
                        € 18,00
                      </span>
                      <span className="text-xs font-bold text-resty-green bg-resty-green-soft px-1.5 py-0.5 rounded">
                        -36%
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-resty-stone-light font-medium bg-white px-2.5 py-1 rounded-lg border border-resty-stone-border/60">
                      <Clock className="w-3.5 h-3.5 text-resty-orange" />
                      <span>19:15 - 20:30</span>
                    </div>
                  </div>
                </div>

                {/* Key value guarantees (Non da asporto!) */}
                <div className="space-y-2.5 text-xs text-resty-stone-light">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-resty-peach flex items-center justify-center text-resty-orange font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span>
                      <strong>Consumazione al tavolo:</strong> ti siedi in sala con il servizio di sempre.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-resty-peach flex items-center justify-center text-resty-orange font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span>
                      <strong>Prezzo fisso garantito:</strong> sai quanto spendi prima di uscire di casa.
                    </span>
                  </div>
                </div>

                {/* Floating micro-pill indicator */}
                <div className="mt-5 pt-4 border-t border-resty-stone-border flex items-center justify-between text-xs text-resty-stone-muted">
                  <span className="flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5 text-resty-stone-muted" />
                    Coperto e servizio standard
                  </span>
                  <span className="font-semibold text-resty-orange-dark">
                    Solo 3 coperti rimasti
                  </span>
                </div>
              </div>

              {/* Decorative background element for the card */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl bg-resty-peach/60 border border-resty-orange/15 -z-10 transform rotate-1 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
