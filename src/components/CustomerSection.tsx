"use client";

import { useState } from "react";
import { BadgePercent, HeartHandshake, Leaf, Mail, CheckCircle2, ArrowRight, Loader2, BellRing } from "lucide-react";

export default function CustomerSection() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
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
          type: "customer",
          email,
          city: city || "Non specificata",
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
      icon: BadgePercent,
      title: "Sai quanto spendi prima di andare",
      text: "Ogni offerta indica con chiarezza il piatto, il prezzo promozionale e la fascia oraria. Nessun conto a sorpresa, massima trasparenza.",
      tag: "Prezzi certi",
    },
    {
      icon: HeartHandshake,
      title: "Ti godi il ristorante al tavolo",
      text: "Ti siedi a tavola e ritrovi la cucina e il servizio del locale. Niente code, niente fretta, nessuna busta di cartone da portare a casa.",
      tag: "Esperienza vera in sala",
    },
    {
      icon: Leaf,
      title: "Dai valore a quello che è già in cucina",
      text: "Scegliendo un piatto che il ristorante propone per usare gli ingredienti freschi che ha già, aiuti concretamente a ridurre il rischio di spreco alimentare.",
      tag: "Scelta sostenibile",
    },
  ];

  return (
    <section id="per-i-clienti" className="pt-6 pb-20 md:pt-8 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-resty-stone tracking-tight mb-6 leading-[1.12]">
            Stessa qualità, <br />
            <span className="text-resty-orange">prezzo in promozione.</span>
          </h2>
          <div className="text-lg sm:text-xl text-resty-stone font-medium mb-3">
            Il piatto che scegli, al tavolo.
          </div>
          <p className="text-base sm:text-lg text-resty-stone-light leading-relaxed">
            Scopri le offerte dei ristoranti aderenti, controlla il prezzo e la
            fascia oraria e gusta il piatto direttamente nel locale.{" "}
            <strong>Il prezzo è in promozione, la qualità è quella di sempre.</strong>
          </p>
        </div>

        {/* 3 Customer Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-resty-stone-border/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-resty-peach/60 flex items-center justify-center text-resty-orange mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-resty-stone mb-3 leading-snug">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-resty-stone-light leading-relaxed mb-6">
                    {adv.text}
                  </p>
                </div>
                <div className="pt-4 border-t border-resty-stone-border/60 text-xs font-bold text-resty-stone-light flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-resty-green" />
                  <span>{adv.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Avvisami al lancio / Waitlist Card */}
        <div
          id="avvisami-lancio"
          className="rounded-3xl bg-white border border-resty-stone-border shadow-lg p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-resty-orange/15 text-resty-orange flex items-center justify-center mx-auto mb-5">
              <BellRing className="w-7 h-7" />
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-resty-stone mb-3">
              Avvisami al lancio
            </h3>
            <p className="text-base text-resty-stone-light mb-8 max-w-lg mx-auto">
              Ricevi un avviso quando RestyDeals sarà disponibile a Varese e provincia. Ti invieremo un link per accedere in anteprima alle prime offerte dei ristoranti.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-resty-green-soft border border-resty-green/20 text-center animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-resty-green mx-auto mb-2" />
                <h4 className="font-sans font-bold text-lg text-resty-stone mb-1">
                  Sei nella lista d&apos;attesa!
                </h4>
                <p className="text-sm text-resty-stone-light">
                  Ti avviseremo via email appena apriremo l&apos;accesso ai primi food lovers di Varese.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-resty-stone-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua migliore email..."
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all bg-resty-sand/30"
                  />
                </div>
                <div className="w-full sm:w-44">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Città (opzionale)"
                    className="w-full px-3.5 py-3.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all bg-resty-sand/30"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 rounded-xl bg-resty-orange text-white font-semibold text-sm hover:bg-resty-orange-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 whitespace-nowrap"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Avvisami</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {errorMsg && (
              <p className="mt-3 text-xs text-red-600">{errorMsg}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
