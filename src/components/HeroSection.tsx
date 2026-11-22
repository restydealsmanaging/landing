"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Users,
  MapPin,
  Check,
} from "lucide-react";

export default function HeroSection() {
  const unitPrice = "11,50";
  const originalPrice = "18,00";
  const discountPercent = 36;
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(221,87,28,0.12)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.08)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
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

          {/* Right Column: Live Interactive Deal Preview Card (Vertical Layout) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px] relative">
              {/* Outer vertical card */}
              <article className="rounded-3xl bg-white border border-resty-stone/10 shadow-xl shadow-orange-950/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
                {/* Food Photo Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-resty-sand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
                    alt="Risotto ai Porcini & Mirtilli delle Prealpi"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-resty-stone shadow-sm">
                      <MapPin size={12} className="text-resty-orange" />
                      Varese · Centro
                    </span>
                  </div>

                  {/* Discount badge over image */}
                  <div className="absolute bottom-3 right-3 bg-resty-orange text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md font-sans">
                    -{discountPercent}%
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Restaurant name & remaining counter */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] text-resty-stone-muted font-sans font-medium uppercase tracking-wider">
                      Trattoria San Giorgio
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-resty-orange-dark bg-resty-peach/70 px-2 py-0.5 rounded-full">
                      <Users size={11} />
                      Solo 3 rimasti
                    </span>
                  </div>

                  {/* Dish Title */}
                  <h3 className="font-heading font-bold text-lg text-resty-stone leading-snug mb-2">
                    Risotto ai Porcini &amp; Mirtilli delle Prealpi
                  </h3>

                  {/* Dining Details */}
                  <div className="space-y-1 text-xs text-resty-stone-light font-sans mb-4 pb-4 border-b border-resty-stone/10">
                    <div className="flex items-center gap-1.5 font-medium text-resty-stone">
                      <Clock size={13} className="text-resty-orange" />
                      <span>Al tavolo stasera: <strong>19:15 - 20:30</strong></span>
                    </div>
                    <p className="text-[11px] text-resty-stone-muted">
                      Preparato espresso · Coperto e bevande a parte
                    </p>
                  </div>

                  {/* Centered Pricing Block */}
                  <div className="flex flex-col items-center justify-center text-center my-2 p-3.5 rounded-2xl bg-resty-sand/50 border border-resty-stone/5">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 line-through font-sans">
                        {originalPrice} €
                      </span>
                      <span className="text-[11px] font-bold text-resty-green bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                        Risparmi 6,50 € (-{discountPercent}%)
                      </span>
                    </div>
                    <div className="font-heading text-3xl font-extrabold text-resty-stone">
                      {unitPrice} €
                    </div>
                    <span className="text-[11px] text-resty-stone-muted font-sans mt-0.5">
                      Prezzo promozionale per il piatto
                    </span>
                  </div>

                  {/* Action Link Button leading to RestyDeals Web App */}
                  <a
                    href="https://resty-deals.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-resty-stone hover:bg-resty-orange text-white px-5 py-2.5 font-sans text-sm font-semibold transition-all duration-200 shadow-md cursor-pointer text-center group/btn mt-2"
                  >
                    <span>Prenota al tavolo</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>

              {/* Decorative warm ambient layer behind card */}
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-3xl bg-resty-orange/5 border border-resty-orange/15 -z-10 transform rotate-1 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
