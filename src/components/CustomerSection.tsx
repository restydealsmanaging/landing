"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UtensilsCrossed,
  Package,
  Check,
  ArrowRight,
  Loader2,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Heart,
  Mail,
  Users,
  Compass,
} from "lucide-react";

export default function CustomerSection() {
  const [activeTab, setActiveTab] = useState<"tavolo" | "asporto">("tavolo");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const quickCities = [
    "Varese Centro",
    "Gallarate",
    "Busto Arsizio",
    "Saronno",
    "Zona Laghi",
  ];

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

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. UNIFIED HERO BANNER (No double headers, pure intent)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-resty-stone-border/60 bg-[radial-gradient(ellipse_at_top,rgba(221,87,28,0.07)_0%,transparent_70%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Cinematic Headline: Syne medium tracking-tight */}
            <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.08] mb-5">
              L&apos;esperienza unica del <br />
              <span className="text-resty-orange">nostro mondo.</span>
            </h1>

            {/* Core Value Proposition & Subtitle */}
            <div className="text-xl sm:text-2xl font-sans font-semibold text-resty-stone mb-4 leading-snug">
              Stessa qualità, prezzo in promozione.{" "}
              <span className="text-resty-stone-light font-normal text-lg sm:text-xl block sm:inline mt-1 sm:mt-0">
                Il piatto che scegli, al tavolo del ristorante.
              </span>
            </div>

            {/* Human, authentic lead copy */}
            <p className="text-base sm:text-lg text-resty-stone-light font-sans font-normal leading-relaxed mb-8 max-w-2xl">
              Niente buste fredde da asporto né scatole misteriose. Con RestyDeals
              scopri cosa propongono i ristoranti di Varese e provincia nelle loro
              fasce orarie dedicate: ti accomodi in sala, gusti il piatto cucinato
              espresso e paghi un prezzo promozionale trasparente.
            </p>

            {/* Micro-trust indicators in an ergonomic flex row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-resty-stone-muted font-sans pt-2">
              <span className="inline-flex items-center gap-2 font-medium text-resty-stone">
                <CheckCircle2 className="w-4 h-4 text-resty-green shrink-0" />
                Cucinato espresso al momento
              </span>
              <span className="inline-flex items-center gap-2 font-medium text-resty-stone">
                <CheckCircle2 className="w-4 h-4 text-resty-green shrink-0" />
                Consumazione al tavolo in sala
              </span>
              <span className="inline-flex items-center gap-2 font-medium text-resty-stone">
                <CheckCircle2 className="w-4 h-4 text-resty-green shrink-0" />
                Prezzo chiaro prima di partire
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE EXPERIENCE COMPARISON (Emil Kowalski interactive switcher)
          Replaces the 6 redundant cards with 1 purposeful high-intent object
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-resty-stone-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-resty-stone-muted">
              Il confronto dell&apos;esperienza
            </span>
            <h2 className="font-heading font-medium text-3xl sm:text-5xl text-resty-stone tracking-tight mt-2 mb-4">
              Perché cenare al tavolo batte l&apos;asporto.
            </h2>
            <p className="text-sm sm:text-base text-resty-stone-light font-sans leading-relaxed">
              Il buon cibo merita un piatto vero, un tavolo preparato e l&apos;accoglienza della sala.
              Tocca le due modalità per vedere la differenza reale.
            </p>

            {/* Interactive Switcher with Animated Shared Layout Pill */}
            <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-resty-sand border border-resty-stone-border/80 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("tavolo")}
                className={`relative px-5 py-3 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeTab === "tavolo"
                    ? "text-white"
                    : "text-resty-stone-light hover:text-resty-stone"
                }`}
              >
                {activeTab === "tavolo" && (
                  <motion.div
                    layoutId="customer-experience-pill"
                    className="absolute inset-0 bg-resty-orange rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <UtensilsCrossed size={16} />
                  <span>Al tavolo con RestyDeals</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("asporto")}
                className={`relative px-5 py-3 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeTab === "asporto"
                    ? "text-white"
                    : "text-resty-stone-light hover:text-resty-stone"
                }`}
              >
                {activeTab === "asporto" && (
                  <motion.div
                    layoutId="customer-experience-pill"
                    className="absolute inset-0 bg-resty-stone rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Package size={16} />
                  <span>La solita box da asporto</span>
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Display Stage */}
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              {activeTab === "tavolo" ? (
                <motion.div
                  key="tavolo"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl bg-gradient-to-br from-white to-resty-peach/30 border-2 border-resty-orange/30 shadow-xl shadow-orange-950/5 p-6 sm:p-10 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Visual Dining Pass Card */}
                    <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-resty-stone-border/80 shadow-md">
                      {/* Top Row: Place Name + Location (No pillow) */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] uppercase tracking-wider text-resty-stone-muted font-sans font-semibold">
                          Trattoria San Giorgio
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-resty-orange-dark">
                          <MapPin size={12} className="text-resty-orange shrink-0" />
                          Varese · Centro
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-lg text-resty-stone mb-3 leading-snug">
                        Risotto ai Porcini &amp; Mirtilli
                      </h4>

                      <div className="space-y-1.5 text-xs text-resty-stone-light font-sans pb-3 mb-3 border-b border-resty-stone/10">
                        <div className="flex items-center justify-between gap-2 text-resty-stone font-medium">
                          <div className="flex items-center gap-2">
                            <Clock size={13} className="text-resty-orange shrink-0" />
                            <span>Fascia: <strong>19:15 - 20:30</strong></span>
                          </div>
                          <span className="text-[11px] font-semibold text-resty-green shrink-0">
                            Al tavolo stasera
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-resty-stone-muted">
                          <Users size={13} className="shrink-0" />
                          <span>Coperto e bevande a listino normale</span>
                        </div>
                      </div>

                      {/* Price Block (Reference style: compact stacked) */}
                      <div className="pt-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs text-gray-400 line-through font-medium">18,00 €</span>
                          <span className="inline-flex items-center bg-resty-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full leading-none">
                            -36%
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-bold font-sans text-resty-stone tracking-tight">
                            11,50 €
                          </span>
                          <span className="text-sm font-medium text-gray-400">
                            /pz
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Key Experience Guarantees */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-resty-peach flex items-center justify-center text-resty-orange shrink-0 mt-0.5">
                          <Flame className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-base text-resty-stone mb-1">
                            Cucinato espresso, al minuto
                          </h4>
                          <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                            Nessun cibo precotto o tenuto in caldo ore prima. Lo chef cucina la tua porzione esattamente quando ti accomodi in sala, con la qualità di sempre.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-resty-peach flex items-center justify-center text-resty-orange shrink-0 mt-0.5">
                          <UtensilsCrossed className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-base text-resty-stone mb-1">
                            L&apos;accoglienza e l&apos;atmosfera del locale
                          </h4>
                          <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                            Ti siedi al tavolo con posate, bicchieri e servizio standard. Puoi ordinare il tuo calice di vino preferito e goderti una vera serata fuori.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-resty-peach flex items-center justify-center text-resty-orange shrink-0 mt-0.5">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-base text-resty-stone mb-1">
                            Sai esattamente cosa mangi
                          </h4>
                          <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                            Visualizzi il piatto, gli ingredienti principali e il prezzo prima di muoverti da casa. Zero sorprese al momento del conto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="asporto"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl bg-stone-100/80 border-2 border-stone-300/70 p-6 sm:p-10 lg:p-12 text-stone-700"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Visual Mystery Bag */}
                    <div className="lg:col-span-5 bg-white/90 rounded-2xl p-6 border border-stone-200 shadow-sm opacity-90">
                      {/* Top Row: Place Name + Mystery Bag (No pillow) */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] uppercase tracking-wider text-stone-400 font-sans font-semibold">
                          Locale generico
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-600">
                          <Package size={12} className="text-stone-400 shrink-0" />
                          Mystery Bag da asporto
                        </span>
                      </div>

                      <h4 className="font-sans font-bold text-lg text-stone-800 mb-3 leading-snug">
                        Contenuto a sorpresa (invenduti)
                      </h4>

                      <div className="space-y-1.5 text-xs text-stone-500 font-sans pb-3 mb-3 border-b border-stone-200">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-stone-600 font-medium">
                            <Clock size={13} className="text-stone-400 shrink-0" />
                            <span>Ritiro: <strong>21:45 - 22:00</strong></span>
                          </div>
                          <span className="text-[11px] font-semibold text-amber-800 shrink-0">
                            Solo ritiro al banco
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package size={13} className="text-stone-400 shrink-0" />
                          <span>Da portare a casa in busta di carta</span>
                        </div>
                      </div>

                      <div className="text-xs text-stone-500 italic">
                        Spesso richiede di essere riscaldato a microonde sul divano.
                      </div>
                    </div>

                    {/* Right Column: Takeaway Pain Points */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5 font-bold">
                          ✕
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-base text-stone-800 mb-1">
                            Contenuto a sorpresa e imprevisti
                          </h4>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                            Non puoi scegliere cosa mangiare: scopri cosa ti è capitato solo quando apri il sacchetto a casa, rischiando cibi che non gradisci o eccessi di carboidrati.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5 font-bold">
                          ✕
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-base text-stone-800 mb-1">
                            Cena solitaria sul divano in vaschetta
                          </h4>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                            Nessun tavolo apparecchiato, nessuna accoglienza. Mangi spesso da solo davanti alla TV, producendo rifiuti di plastica e cartone.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5 font-bold">
                          ✕
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-base text-stone-800 mb-1">
                            Corsa al bancone prima della chiusura
                          </h4>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                            Fasce di ritiro scomode e ristrette a tarda ora. Se tardi di 10 minuti, perdi la tua scatola senza possibilità di appello.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE UNIFIED 3-STEP JOURNEY (Open Timeline Rail - ZERO CARDS)
          Replaces the card soup with a fluid, continuous progressive rail
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-resty-sand/50 border-b border-resty-stone-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-resty-stone-muted">
              Il viaggio in 3 tappe
            </span>
            <h2 className="font-heading font-medium text-3xl sm:text-5xl text-resty-stone tracking-tight mt-2 mb-4">
              Come funziona la tua cena
            </h2>
            <p className="text-sm sm:text-base text-resty-stone-light font-sans leading-relaxed">
              Dalla scoperta dell&apos;offerta al tavolo del ristorante, senza scatole né asporto.
            </p>
          </div>

          {/* Connected Horizontal Timeline Rail (Zero Cards, 100% Fluid Narrative) */}
          <div className="relative">
            {/* Continuous horizontal guide line on desktop */}
            <div className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[2px] bg-resty-stone-border/80 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14 relative z-10">
              {/* Milestone 1 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-resty-orange text-resty-orange font-sans font-black text-lg flex items-center justify-center mb-6 shadow-xs">
                  01
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-resty-orange mb-2">
                  Passo 1 · Esplora
                </div>
                <h3 className="font-heading font-medium text-2xl text-resty-stone mb-3 leading-snug">
                  Scopri le proposte del giorno
                </h3>
                <p className="text-sm text-resty-stone-light font-sans leading-relaxed">
                  I ristoranti aderenti a Varese e dintorni pubblicano i piatti freschi disponibili nelle loro fasce orarie meno affollate. Visualizzi foto, ingredienti e orario prima di partire.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-resty-orange text-resty-orange font-sans font-black text-lg flex items-center justify-center mb-6 shadow-xs">
                  02
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-resty-orange mb-2">
                  Passo 2 · Blocca
                </div>
                <h3 className="font-heading font-medium text-2xl text-resty-stone mb-3 leading-snug">
                  Blocchi il piatto e l&apos;orario
                </h3>
                <p className="text-sm text-resty-stone-light font-sans leading-relaxed">
                  Verifichi la fascia oraria di arrivo e il prezzo in promozione (es. 11,50€ invece di 18€). Sai esattamente quanto spendi prima ancora di uscire di casa.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-resty-orange text-resty-orange font-sans font-black text-lg flex items-center justify-center mb-6 shadow-xs">
                  03
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-resty-orange mb-2">
                  Passo 3 · Gusta
                </div>
                <h3 className="font-heading font-medium text-2xl text-resty-stone mb-3 leading-snug">
                  Ti accomodi al tavolo e gusti
                </h3>
                <p className="text-sm text-resty-stone-light font-sans leading-relaxed">
                  Arrivi al ristorante nella fascia indicata, mostri la conferma e ti siedi. Lo chef cucina il piatto espresso al momento, con la consueta cura della brigata e il servizio di sala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE CLIMAX: REDESIGNED WAITLIST FORM (#avvisami-lancio)
          Ergonomic input with fast municipality pills and spring feedback
         ───────────────────────────────────────────────────────────── */}
      <section id="avvisami-lancio" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-resty-sand/70 border border-resty-stone-border/90 p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-lg">
            {/* Subtle warm glow background aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-resty-orange/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-resty-peach border border-resty-orange/20 text-resty-orange flex items-center justify-center mx-auto mb-5 shadow-xs">
                <Compass className="w-7 h-7" />
              </div>

              <h2 className="font-heading font-medium text-3xl sm:text-4xl text-resty-stone tracking-tight mb-3">
                Vuoi scoprire i primi piatti al lancio?
              </h2>
              <p className="text-base text-resty-stone-light mb-8 max-w-lg mx-auto font-sans leading-relaxed">
                Stiamo selezionando i primi ristoranti pilota tra Varese, Gallarate e provincia.
                Lascia la tua email per accedere in anteprima alle prime offerte al tavolo senza vincoli.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-2xl bg-resty-green-soft border border-resty-green/20 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-resty-green mx-auto mb-3" />
                  <h3 className="font-sans font-bold text-xl text-resty-stone mb-2">
                    Sei nella lista prioritaria!
                  </h3>
                  <p className="text-sm text-resty-stone-light max-w-md mx-auto leading-relaxed">
                    Grazie! Ti avviseremo via email appena apriremo le prime offerte al tavolo nei ristoranti della tua zona.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-left">
                  {/* Quick municipality pill selection (Fitts' Law & Least Effort) */}
                  <div>
                    <label className="block text-xs font-semibold text-resty-stone-light mb-2 text-center">
                      Seleziona la tua zona (opzionale):
                    </label>
                    <div className="flex flex-wrap justify-center gap-2">
                      {quickCities.map((cityName) => {
                        const isSelected = city === cityName;
                        return (
                          <button
                            key={cityName}
                            type="button"
                            onClick={() => setCity(isSelected ? "" : cityName)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-resty-orange text-white shadow-xs"
                                : "bg-white border border-resty-stone-border text-resty-stone-light hover:border-resty-orange/50 hover:text-resty-stone"
                            }`}
                          >
                            {cityName}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Fields Row */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-resty-stone-muted" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Inserisci la tua email..."
                        aria-label="Indirizzo email"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-resty-stone-border text-sm focus:outline-none focus:ring-2 focus:ring-resty-orange/50 transition-all bg-white text-resty-stone shadow-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3.5 rounded-xl bg-resty-orange text-white font-semibold text-sm hover:bg-resty-orange-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 whitespace-nowrap active:scale-[0.98]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Iscrizione...</span>
                        </>
                      ) : (
                        <>
                          <span>Avvisami al lancio</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Inline Error Message */}
                  {errorMsg && (
                    <p className="text-xs text-red-600 text-center pt-1 animate-in fade-in duration-200">
                      {errorMsg}
                    </p>
                  )}

                  {/* Micro-trust indicators */}
                  <p className="text-[11px] text-center text-resty-stone-muted pt-2">
                    Nessuno spam. Ti scriveremo solo per comunicare il lancio dei primi ristoranti a Varese.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
