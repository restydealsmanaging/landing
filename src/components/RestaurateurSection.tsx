"use client";

import { useState } from "react";
import { Store, TrendingUp, Users, Clock, CheckCircle2, ArrowRight, Loader2, Sparkles } from "lucide-react";

export default function RestaurateurSection() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    contactName: "",
    city: "",
    phone: "",
    email: "",
    cuisineType: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "restaurant",
          ...formData,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Errore durante l'invio");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Si è verificato un errore imprevisto.");
      }
    } finally {
      setLoading(false);
    }
  };

  const advantages = [
    {
      icon: TrendingUp,
      title: "Vendi ciò che rischia di restare invenduto",
      text: "Proponi i piatti che puoi servire con gli ingredienti che hai già in cucina. Riduci gli sprechi e trasformi costi vivi in ricavi netti.",
      metric: "Zero sprechi alimentari",
    },
    {
      icon: Clock,
      title: "Dai un motivo per venire nelle ore tranquille",
      text: "Dedica una promozione ai servizi o alle fasce orarie con meno coperti per aumentare gli incassi senza intaccare il servizio di punta.",
      metric: "+ Coperti nei momenti calmi",
    },
    {
      icon: Users,
      title: "Fai conoscere il tuo locale a nuovi clienti",
      text: "Usa le offerte come vetrina per raccontare cosa prepari e dare ai clienti della tua zona un motivo concreto per venirti a trovare di persona.",
      metric: "Nuovi clienti in sala",
    },
  ];

  return (
    <section id="per-i-ristoratori" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-resty-peach text-xs font-bold uppercase tracking-wider text-resty-orange-dark mb-4">
            Per i Ristoratori
          </div>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-resty-stone tracking-tight mb-6 leading-[1.12]">
            Dai più valore al tuo menù.
          </h2>
          <div className="text-lg sm:text-xl text-resty-stone font-medium mb-3">
            Tu scegli cosa promuovere e quando.
          </div>
          <p className="text-base sm:text-lg text-resty-stone-light leading-relaxed">
            Con RestyDeals puoi mettere in evidenza un piatto del menù o proporlo
            in una fascia in cui di solito arrivano meno clienti. Decidi tu quali
            piatti offrire, a che prezzo e in quali orari. <strong>I clienti consumano nel tuo locale.</strong>
          </p>
        </div>

        {/* 3 Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-resty-stone-border/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-resty-sand flex items-center justify-center text-resty-orange mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-resty-stone mb-3 leading-snug">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-resty-stone-light leading-relaxed mb-6">
                    {adv.text}
                  </p>
                </div>
                <div className="pt-4 border-t border-resty-stone-border/60 text-xs font-bold text-resty-orange-dark flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-resty-orange" />
                  <span>{adv.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Capture Box / Application Form */}
        <div
          id="candidatura-ristoratore"
          className="rounded-3xl bg-resty-stone text-resty-ivory p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-resty-orange/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left side text */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-resty-orange-light mb-4">
                <Store className="w-3.5 h-3.5" />
                <span>Test Pilota Gratuito</span>
              </div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white mb-3">
                Partecipa al test
              </h3>
              <p className="text-base text-stone-300 leading-relaxed mb-6">
                Prova RestyDeals nel tuo ristorante e raccontaci come va. Nessun
                costo di attivazione, nessun vincolo. Ti aiutiamo noi a impostare la prima offerta.
              </p>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-resty-stone shadow-lg">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-resty-green-soft text-resty-green mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-sans font-bold text-2xl text-resty-stone mb-2">
                    Candidatura inviata con successo!
                  </h4>
                  <p className="text-sm text-resty-stone-light max-w-md mx-auto mb-6">
                    Grazie per aver scelto di provare RestyDeals. Emanuele o Matteo ti contatteranno entro 24 ore per spiegarti i dettagli del test pilota.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        restaurantName: "",
                        contactName: "",
                        city: "",
                        phone: "",
                        email: "",
                        cuisineType: "",
                        notes: "",
                      });
                    }}
                    className="text-xs font-semibold text-resty-orange hover:underline"
                  >
                    Invia un&apos;altra candidatura
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-resty-stone mb-1">
                        Nome del Ristorante *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.restaurantName}
                        onChange={(e) =>
                          setFormData({ ...formData, restaurantName: e.target.value })
                        }
                        placeholder="Es. Trattoria del Lago"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-resty-stone mb-1">
                        Nome referente / Titolare *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({ ...formData, contactName: e.target.value })
                        }
                        placeholder="Es. Marco Rossi"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-resty-stone mb-1">
                        Comune del locale (Prov. Varese) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="Es. Varese, Busto Arsizio, Gallarate..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-resty-stone mb-1">
                        Telefono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Es. 340 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-resty-stone mb-1">
                      Email di contatto *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="info@tualocale.it"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-resty-stone mb-1">
                      Note o piatti che vorresti proporre (facoltativo)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Es. Vorremmo promuovere il piatto del giorno durante la fascia 19:00 - 20:00"
                      className="w-full px-3.5 py-2 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-resty-orange text-white font-semibold text-sm hover:bg-resty-orange-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <span>Invia candidatura per il test gratuito</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-resty-stone-muted">
                    Nessun costo nascosto. Test limitato a un numero selezionato di ristoranti pilota.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
