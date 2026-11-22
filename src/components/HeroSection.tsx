"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin, Utensils, ShieldCheck, Flame, Check } from "lucide-react";

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
          </div>

          {/* Right Column: Live Interactive Deal Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Outer card with subtle warm glow */}
              <div className="rounded-[28px] bg-white border border-resty-stone-border/80 shadow-[0_20px_50px_rgba(28,25,23,0.06)] p-6 sm:p-7 relative transition-all duration-300 hover:shadow-[0_24px_55px_rgba(221,87,28,0.1)]">
                {/* Header card: Restaurant info & Live indicator */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-resty-peach border border-resty-orange/15 text-resty-orange flex items-center justify-center font-heading font-semibold text-2xl shadow-xs shrink-0">
                      R
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading font-medium text-base sm:text-lg text-resty-stone leading-tight">
                          Trattoria San Giorgio
                        </h4>
                        <ShieldCheck className="w-4 h-4 text-resty-green shrink-0" />
                      </div>
                      <p className="text-xs text-resty-stone-muted flex items-center gap-1 mt-0.5 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-resty-orange/80 shrink-0" />
                        Centro Storico · Varese
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-resty-green-soft text-resty-green-dark border border-resty-green/20 text-xs font-semibold shadow-xs shrink-0">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-resty-green/60 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-resty-green" />
                    </span>
                    Offerta attiva
                  </span>
                </div>

                {/* Offer visual badge & details */}
                <div className="rounded-2xl bg-resty-sand p-5 border border-resty-stone-border/70 mb-5 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-resty-orange mb-2">
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-resty-orange shrink-0" />
                      Piatto del Giorno
                    </span>
                    <span className="text-resty-stone-muted font-normal lowercase tracking-normal text-[11px]">
                      disponibilità limitata
                    </span>
                  </div>

                  <h3 className="font-heading font-medium text-xl sm:text-[1.38rem] text-resty-stone mt-2.5 mb-2 leading-snug tracking-tight">
                    Risotto ai Porcini &amp; Mirtilli delle Prealpi
                  </h3>
                  <p className="text-xs sm:text-[13px] text-resty-stone-light leading-relaxed mb-4 font-sans">
                    Preparato espresso con ingredienti freschi di giornata. Stessa
                    ricetta, porzione completa del menù.
                  </p>

                  <div className="pt-3.5 border-t border-resty-stone-border/60 flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-heading font-semibold text-resty-orange tracking-tight leading-none">
                        € 11,50
                      </span>
                      <span className="text-sm font-sans line-through text-resty-stone-muted decoration-resty-stone-muted/70">
                        € 18,00
                      </span>
                      <span className="text-xs font-semibold text-resty-green bg-resty-green-soft border border-resty-green/20 px-2 py-0.5 rounded-md">
                        -36%
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-resty-stone font-semibold bg-white px-3 py-1.5 rounded-xl border border-resty-stone-border/80 shadow-xs shrink-0">
                      <Clock className="w-3.5 h-3.5 text-resty-orange shrink-0" />
                      <span>19:15 - 20:30</span>
                    </div>
                  </div>
                </div>

                {/* Key value guarantees (Non da asporto!) */}
                <div className="space-y-2.5 text-xs sm:text-[13px] text-resty-stone-light font-sans">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-resty-peach border border-resty-orange/15 flex items-center justify-center text-resty-orange shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>
                      <strong className="font-semibold text-resty-stone">Consumazione al tavolo:</strong> ti siedi in sala con il servizio di sempre.
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-resty-peach border border-resty-orange/15 flex items-center justify-center text-resty-orange shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>
                      <strong className="font-semibold text-resty-stone">Prezzo fisso garantito:</strong> sai quanto spendi prima di uscire di casa.
                    </span>
                  </div>
                </div>

                {/* Floating micro-pill indicator */}
                <div className="mt-5 pt-4 border-t border-resty-stone-border/70 flex items-center justify-between text-xs text-resty-stone-muted font-sans">
                  <span className="flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-resty-stone-muted" />
                    Offerta sul piatto (coperto e bevande a parte)
                  </span>
                  <span className="font-semibold text-resty-orange-dark">
                    Solo 3 piatti rimasti
                  </span>
                </div>
              </div>

              {/* Decorative background element for the card */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[28px] bg-resty-peach/70 border border-resty-orange/15 -z-10 transform rotate-1 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
