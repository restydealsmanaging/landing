"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Loader2, ArrowRight } from "lucide-react";

function PerspectivePaperPlane({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ala principale sinistra distesa in piena luce */}
      <polygon points="58,10 8,34 32,36" fill="#FF7235" />
      {/* Chiglia centrale / fusoliera a V sinistra */}
      <polygon points="58,10 32,36 24,50" fill="#DD571C" />
      {/* Chiglia destra e sottoala in ombra profonda */}
      <polygon points="58,10 24,50 38,32" fill="#9E3306" />
      {/* Ala opposta piegata verso l'alto con sfaccettatura a vista in prospettiva */}
      <polygon points="58,10 38,32 50,20" fill="#FFA372" />
      {/* Piega / risvolto tridimensionale dell'ala lontana */}
      <polygon points="50,20 38,32 44,30" fill="#FFC5A3" />
      {/* Linee di piega origami ad alta precisione */}
      <line x1="58" y1="10" x2="24" y2="50" stroke="#7A2402" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="58" y1="10" x2="32" y2="36" stroke="#E05518" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  );
}

export default function RestaurateurSection() {
  const shouldReduceMotion = useReducedMotion();
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
      metric: "Zero sprechi alimentari",
      title: "Vendi ciò che rischia di restare invenduto",
      text: "Proponi i piatti che puoi servire con gli ingredienti che hai già in cucina. Riduci gli sprechi e trasformi costi vivi in ricavi netti.",
    },
    {
      metric: "+ Coperti nei momenti morti",
      title: "Dai un motivo per venire nelle ore tranquille",
      text: "Dedica una promozione ai servizi o alle fasce orarie con meno coperti per aumentare gli incassi senza intaccare il servizio di punta.",
    },
    {
      metric: "Nuovi clienti in sala",
      title: "Fai conoscere il tuo locale a nuovi clienti",
      text: "Usa le offerte come vetrina per raccontare cosa prepari e dare ai clienti della tua zona un motivo concreto per venirti a trovare di persona.",
    },
  ];

  return (
    <section id="per-i-ristoratori" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Advantages - Colonne Editoriali con Eyebrow di Valore (Zero Icon Cliché) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mb-20 md:mb-28">
          {advantages.map((adv, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Eyebrow: Beneficio concreto orientato al business del ristoratore */}
              <div className="text-xs font-bold uppercase tracking-wider text-resty-orange mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-resty-orange shrink-0" />
                <span>{adv.metric}</span>
              </div>
              <h3 className="font-heading font-medium text-xl sm:text-2xl text-resty-stone mb-3 leading-snug tracking-tight">
                {adv.title}
              </h3>
              <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed font-sans">
                {adv.text}
              </p>
            </div>
          ))}
        </div>

        {/* Lead Capture Box / Application Form */}
        <div
          id="candidatura-ristoratore"
          className="rounded-3xl bg-resty-stone text-resty-ivory p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow from top-right corner */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 sm:-top-28 sm:-right-28 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-resty-orange/20 blur-[120px] rounded-full"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 bg-resty-peach/10 blur-[90px] rounded-full"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="restaurateur-form-view"
                initial={false}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0, transition: { duration: 0.15 } }
                    : { opacity: 0, y: -10, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }
                }
                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
              >
                {/* Left side text */}
                <div className="lg:col-span-5">
                  <h3 className="font-heading font-medium text-3xl sm:text-4xl text-white mb-4 tracking-tight leading-tight">
                    Partecipa al test
                  </h3>
                  <p className="text-base text-stone-300 leading-relaxed font-sans mb-6">
                    Prova RestyDeals nel tuo ristorante e raccontaci come va. Nessun
                    costo di attivazione, nessun vincolo. Ti aiutiamo noi a impostare la prima offerta.
                  </p>
                </div>

                {/* Right side form: unboxed open air on dark canvas */}
                <div className="lg:col-span-7">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="restaurantName" className="block text-xs font-semibold text-stone-200 mb-1.5">
                          Nome del Ristorante *
                        </label>
                        <input
                          id="restaurantName"
                          type="text"
                          required
                          value={formData.restaurantName}
                          onChange={(e) =>
                            setFormData({ ...formData, restaurantName: e.target.value })
                          }
                          placeholder="Es. Trattoria del Lago"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 focus:border-resty-orange focus:bg-white/[0.14] transition-all min-h-[44px]"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactName" className="block text-xs font-semibold text-stone-200 mb-1.5">
                          Nome referente / Titolare *
                        </label>
                        <input
                          id="contactName"
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) =>
                            setFormData({ ...formData, contactName: e.target.value })
                          }
                          placeholder="Es. Marco Rossi"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 focus:border-resty-orange focus:bg-white/[0.14] transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-xs font-semibold text-stone-200 mb-1.5">
                          Comune del locale (Prov. Varese) *
                        </label>
                        <input
                          id="city"
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="Es. Varese, Busto Arsizio, Gallarate..."
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 focus:border-resty-orange focus:bg-white/[0.14] transition-all min-h-[44px]"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-stone-200 mb-1.5">
                          Telefono / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Es. 340 1234567"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 focus:border-resty-orange focus:bg-white/[0.14] transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-stone-200 mb-1.5">
                        Email di contatto *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="info@tualocale.it"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 focus:border-resty-orange focus:bg-white/[0.14] transition-all min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-xs font-semibold text-stone-200 mb-1.5">
                        Note o piatti che vorresti proporre (facoltativo)
                      </label>
                      <textarea
                        id="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="Es. Vorremmo promuovere il piatto del giorno durante la fascia 19:00 - 20:00"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 focus:border-resty-orange focus:bg-white/[0.14] transition-all"
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/50 text-red-200 text-xs">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-resty-orange text-white font-semibold text-sm hover:bg-resty-orange-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.98]"
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
                    <p className="text-xs text-center text-stone-400 pt-1">
                      Nessun costo nascosto. Test limitato a un numero selezionato di ristoranti pilota.
                    </p>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="restaurateur-success-view"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 py-12 text-center max-w-xl mx-auto"
              >
                {/* Aeroplanino di carta in prospettiva 3D: traiettoria continua e fluida, zero scatti */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.18, x: -140, y: 90, rotate: -20 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.25 }
                      : {
                          duration: 1.0,
                          ease: [0.16, 1, 0.3, 1],
                          opacity: { duration: 0.25, ease: "easeOut" },
                        }
                  }
                  className="inline-flex items-center justify-center mx-auto mb-6"
                >
                  <PerspectivePaperPlane className="w-14 h-14 drop-shadow-[0_8px_20px_rgba(221,87,28,0.3)]" />
                </motion.div>

                {/* Staged entry 1: Titolo principale (appare mentre l'aeroplanino sta decelerando all'arrivo) */}
                <motion.h4
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0.1 : 0.8,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-heading font-medium text-3xl sm:text-4xl text-white mb-3 tracking-tight"
                >
                  Candidatura inviata con successo!
                </motion.h4>

                {/* Staged entry 2: Paragrafo esplicativo */}
                <motion.p
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0.2 : 1.1,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base text-stone-300 max-w-md mx-auto leading-relaxed mb-8 font-sans"
                >
                  Grazie per aver scelto di provare RestyDeals. Emanuele o Matteo ti contatteranno entro 24 ore per spiegarti i dettagli del test pilota.
                </motion.p>

                {/* Reset button */}
                <motion.button
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: shouldReduceMotion ? 0.25 : 1.35, duration: 0.3 }}
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
                  className="text-xs font-semibold text-resty-orange-light hover:underline cursor-pointer"
                >
                  Invia un&apos;altra candidatura
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
