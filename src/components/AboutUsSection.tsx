"use client";

import { Utensils, Laptop, Heart, MapPin } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="chi-siamo" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-resty-peach text-xs font-bold uppercase tracking-wider text-resty-orange-dark mb-4">
            Chi Siamo
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-resty-stone tracking-tight mb-4">
            Due ragazzi della <br />
            <span className="text-resty-orange">provincia di Varese.</span>
          </h2>
          <div className="text-xl sm:text-2xl font-heading font-bold text-resty-stone mb-4">
            Una cucina, un computer, un&apos;idea.
          </div>
          <p className="text-base sm:text-lg text-resty-stone-light leading-relaxed">
            Siamo <strong>Emanuele e Matteo</strong>, due ragazzi che vivono in
            provincia di Varese. Emanuele è ristoratore, Matteo studia
            informatica. Ognuno di noi ama quello che fa.
          </p>
        </div>

        {/* Narrative & The Two Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Manifesto Card */}
          <div className="lg:col-span-5 bg-resty-sand/70 rounded-3xl p-8 sm:p-10 border border-resty-stone-border flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-resty-peach flex items-center justify-center text-resty-orange mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-resty-stone mb-4">
                La forza di unire due mondi diversi
              </h3>
              <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed mb-6">
                Da una parte c&apos;è chi conosce il lavoro reale in sala e in cucina, con
                tutte le sue difficoltà quotidiane. Dall&apos;altra c&apos;è chi ama sviluppare
                strumenti digitali pensati per semplificare la vita delle persone.
              </p>
              <p className="text-sm sm:text-base text-resty-stone font-medium leading-relaxed">
                Abbiamo unito queste due passioni per aiutare i ristoratori a vendere
                quello che preparano e dare ai clienti un&apos;occasione in più per mangiare fuori.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-resty-stone-border flex items-center gap-2 text-xs font-semibold text-resty-stone-muted">
              <MapPin className="w-4 h-4 text-resty-orange" />
              <span>Nato e sviluppato tra Varese e i laghi lombardi</span>
            </div>
          </div>

          {/* Profile Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Emanuele */}
            <div className="bg-white rounded-3xl p-7 border border-resty-stone-border/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/60 font-heading font-black text-lg">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100/70 text-amber-800">
                    Cucina & Sala
                  </span>
                </div>

                <h4 className="font-heading font-bold text-xl text-resty-stone mb-1">
                  Emanuele
                </h4>
                <div className="text-xs font-semibold text-resty-orange mb-4">
                  Co-founder & Ristoratore
                </div>

                <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed">
                  Conosce a fondo la quotidianità di un ristorante: i costi fissi,
                  la gestione degli ordini, le fasce orarie calme e la cura con cui
                  si scelgono gli ingredienti ogni mattina.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-resty-stone-border/60 text-xs text-resty-stone-muted italic">
                &ldquo;Vogliamo ridare valore ad ogni singolo piatto preparato.&rdquo;
              </div>
            </div>

            {/* Matteo */}
            <div className="bg-white rounded-3xl p-7 border border-resty-stone-border/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-resty-blue flex items-center justify-center border border-blue-200/60 font-heading font-black text-lg">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100/70 text-resty-blue-dark">
                    Informatica & Tech
                  </span>
                </div>

                <h4 className="font-heading font-bold text-xl text-resty-stone mb-1">
                  Matteo
                </h4>
                <div className="text-xs font-semibold text-resty-orange mb-4">
                  Co-founder & Studente di Informatica
                </div>

                <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed">
                  Sviluppa e progetta l&apos;applicazione con un obiettivo chiaro:
                  interfacce veloci, chiarezza assoluta per i clienti e nessuno
                  spreco di tempo per chi lavora dietro i fornelli.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-resty-stone-border/60 text-xs text-resty-stone-muted italic">
                &ldquo;La tecnologia deve essere utile, diretta e accessibile a tutti.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
