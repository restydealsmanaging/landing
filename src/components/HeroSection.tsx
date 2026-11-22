"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  UtensilsCrossed,
  Users,
  Minus,
  Plus,
  MapPin,
  Check,
} from "lucide-react";

export default function HeroSection() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 11.5;
  const originalPrice = 18.0;
  const discountPercent = 36;
  const totalDisplay = (unitPrice * quantity).toFixed(2).replace(".", ",");
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-resty-orange/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-resty-green/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Main Headline */}
            <h1 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl text-resty-stone tracking-tight leading-[1.12] mb-6">
              Stessa qualità. <br />
              <span className="text-resty-orange">Più valore</span>, a tavola.
            </h1>

            {/* Lead description from CEO */}
            <p className="text-lg sm:text-xl text-resty-stone-light font-normal leading-relaxed mb-8 max-w-2xl font-sans">
              Con RestyDeals scopri le offerte dei ristoranti aderenti e gusti il
              tuo piatto <strong>direttamente nel locale</strong>. Tu paghi un
              prezzo più vantaggioso, il ristoratore può vendere di più nelle ore
              tranquille e insieme si riduce il rischio di spreco alimentare.
            </p>

            {/* Pulsanti di apertura (Dual CTAs) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6 font-sans">
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
                <ArrowRight className="w-4 h-4 text-resty-stone-muted" />
              </Link>
            </div>

            {/* Micro-trust indicators under CTAs */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-resty-stone-muted font-sans mb-10">
              <span className="flex items-center gap-1.5 font-medium text-resty-stone">
                <Check className="w-3.5 h-3.5 text-resty-green" />
                Sempre al tavolo (non da asporto)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-resty-stone">
                <Check className="w-3.5 h-3.5 text-resty-green" />
                Cucinato espresso
              </span>
              <span className="flex items-center gap-1.5 font-medium text-resty-stone">
                <Check className="w-3.5 h-3.5 text-resty-green" />
                Zero costi fissi per i ristoranti
              </span>
            </div>
          </div>

          {/* Right Column: Live Interactive Deal Preview Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl relative">
              {/* Outer card styled identically to RestyDeals deal card */}
              <article className="rounded-2xl md:rounded-3xl bg-white border border-resty-stone/10 shadow-lg shadow-orange-200/20 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative transition-all duration-300 hover:shadow-xl hover:shadow-orange-200/30">
                {/* Left section: Food Photo + Product Metadata */}
                <div className="flex-1 min-w-0 flex items-start gap-3.5 sm:gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
                    alt="Risotto ai Porcini & Mirtilli delle Prealpi"
                    className="h-18 w-18 sm:h-22 sm:w-22 rounded-xl sm:rounded-2xl object-cover border border-resty-stone/10 shrink-0 shadow-xs"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs text-resty-stone-muted font-sans truncate mb-0.5">
                      Trattoria San Giorgio · Centro Storico, Varese
                    </p>
                    <h3 className="font-heading font-medium text-base sm:text-lg text-resty-stone leading-tight truncate">
                      Risotto ai Porcini &amp; Mirtilli delle Prealpi
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-[11px] font-sans uppercase tracking-wider flex-wrap">
                      <span className="inline-flex items-center gap-1 text-resty-stone">
                        <UtensilsCrossed size={12} className="text-resty-orange" strokeWidth={1.75} />
                        PRODOTTO
                      </span>
                      <span className="text-resty-stone/20">•</span>
                      <span className="inline-flex items-center gap-1 text-resty-stone">
                        <Users size={12} className="text-resty-orange" strokeWidth={1.75} />
                        1 RIMASTI
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-resty-stone">
                      <span className="inline-block h-2 w-2 rounded-full bg-resty-green shrink-0 animate-pulse" />
                      <span>Al tavolo · Oggi 19:15 - 20:30</span>
                    </div>
                    <span className="text-[10px] text-resty-stone-muted block mt-0.5 font-sans">
                      Offerta sul piatto (coperto e bevande a parte)
                    </span>
                  </div>
                </div>

                {/* Right section: Transaction & Stepper (Exactly as in RestyDeals) */}
                <div className="w-full sm:w-[200px] shrink-0 border-t sm:border-t-0 sm:border-l border-resty-stone/10 pt-3 sm:pt-0 sm:pl-5 self-center">
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <p className="font-sans text-[11px] text-gray-400 line-through leading-none">
                        24,00 €
                      </p>
                      <span className="bg-resty-orange text-white px-1.5 py-0.5 rounded-md text-[10px] font-sans font-black leading-none">
                        -10%
                      </span>
                    </div>
                    <p className="mt-1 font-heading text-xl sm:text-2xl font-semibold leading-none text-resty-stone">
                      21,60 € <span className="font-sans text-gray-400 text-xs font-normal">/pz</span>
                    </p>
                  </div>

                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-[11px] font-sans text-resty-stone/50 text-left">
                      Quantità (unità)
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        aria-label="Diminuisci quantità"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-resty-stone/15 bg-white text-resty-stone hover:bg-resty-stone/5 disabled:opacity-40 transition-colors shadow-xs cursor-pointer disabled:cursor-not-allowed"
                      >
                        <Minus size={14} strokeWidth={1.75} />
                      </button>
                      <span className="font-sans text-sm font-medium text-resty-stone tabular-nums min-w-[2ch] text-center">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                        disabled={quantity >= 5}
                        aria-label="Aumenta quantità"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-resty-stone/15 bg-white text-resty-stone hover:bg-resty-stone/5 disabled:opacity-40 transition-colors shadow-xs cursor-pointer disabled:cursor-not-allowed"
                      >
                        <Plus size={14} strokeWidth={1.75} />
                      </button>
                    </div>
                    <div className="text-xs font-sans text-resty-stone text-center mt-0.5">
                      <span className="text-resty-stone/50">Totale </span>
                      <span className="text-resty-orange font-medium tabular-nums font-sans">
                        {(21.6 * quantity).toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/per-i-clienti#avvisami-lancio"
                    className="mt-3 inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-full bg-resty-stone hover:bg-resty-orange text-white px-5 py-2.5 font-sans text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer text-center group/btn"
                  >
                    <span>Prenota al tavolo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>

              {/* Decorative warm ambient layer behind card */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl md:rounded-3xl bg-resty-orange/5 border border-resty-orange/15 -z-10 transform rotate-1 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
