"use client";

import { useEffect, useRef, useState } from "react";
import { ChefHat, Smartphone, UtensilsCrossed, ArrowRight, ArrowDown } from "lucide-react";

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Immediate fallback: Ensure it's ALWAYS visible even if observer fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      number: "01",
      icon: ChefHat,
      badge: "Il locale decide",
      title: "Il ristorante sceglie cosa e quando",
      description:
        "Il locale decide quali piatti proporre, a quale prezzo promozionale e in quali fasce orarie meno affollate, valorizzando gli ingredienti freschi già presenti in cucina.",
    },
    {
      number: "02",
      icon: Smartphone,
      badge: "Trasparenza totale",
      title: "Tu consulti e blocchi l'offerta",
      description:
        "Scopri le proposte del giorno vicino a te, verifichi in anteprima il piatto, l'orario e il prezzo esatto. Sai quanto spendi prima ancora di uscire di casa.",
    },
    {
      number: "03",
      icon: UtensilsCrossed,
      badge: "Esperienza al tavolo",
      title: "Gusti il piatto direttamente in sala",
      description:
        "Niente asporto frettoloso o contenitori freddi: ti accomodi al tavolo del ristorante e gusti il piatto con l'accoglienza, la qualità e il servizio di sempre.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="come-funziona"
      className="relative z-20 w-full bg-[#EFE6D8] rounded-t-[40px] md:rounded-t-[64px] border-t border-resty-stone/15 shadow-[0_-30px_80px_rgba(45,45,42,0.22)]"
    >
      {/* ─────────────────────────────────────────────────────────────
          STAGE 1: Dedicated Grand Statement Screen (Full Viewport)
          "Il ristorante sceglie. Tu gusti in sala." con effetto cinetico
         ───────────────────────────────────────────────────────────── */}
      <div className="min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative py-16 sm:py-24">
        {/* Subtle decorative glowing aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-resty-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Small top category tag */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-resty-stone/10 shadow-2xs mb-8 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-resty-orange animate-pulse" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-resty-stone">
            Il Concept RestyDeals
          </span>
        </div>

        {/* Big Punchline with Staggered Entrance Effect */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="overflow-hidden pb-1">
            <h2
              className={`font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-resty-stone tracking-tight leading-[1.1] transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Il ristorante sceglie.
            </h2>
          </div>
          <div className="overflow-hidden pt-1 pb-1">
            <h2
              className={`font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-resty-orange tracking-tight leading-[1.1] transition-all duration-700 delay-150 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Tu gusti in sala.
            </h2>
          </div>
        </div>

        {/* Animated accent underline bar */}
        <div
          className={`w-28 h-1.5 rounded-full bg-resty-orange/60 origin-center mb-8 transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Narrative subtext */}
        <p
          className={`max-w-2xl text-base sm:text-xl text-resty-stone-light font-sans font-normal leading-relaxed mb-12 transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Il locale decide quali piatti proporre, a quale prezzo e in quali orari.
          Tu consulti l&apos;offerta e gusti il piatto nel ristorante, con la qualità e il servizio di sempre.
        </p>

        {/* Subtle scroll cue to guide down to the 3 steps */}
        <div
          className={`flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider text-resty-stone-muted transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>I 3 passaggi di RestyDeals</span>
          <div className="w-8 h-8 rounded-full bg-white/80 border border-resty-stone/10 flex items-center justify-center text-resty-orange shadow-xs mt-1 animate-bounce">
            <ArrowDown size={14} />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          STAGE 2: The 3 Cards with Generous Spacing & Breathing Room
          "Far posto alla sezione come funziona con le card"
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-32 sm:pb-40 border-t border-resty-stone/10">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-resty-stone bg-white/90 px-4 py-1.5 rounded-full border border-resty-stone/10 shadow-2xs mb-4">
            Come Funziona · 3 Semplici Passaggi
          </span>
          <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight">
            Tre mosse. Zero sorprese.
          </h3>
          <p className="mt-3 text-sm sm:text-base text-resty-stone-light max-w-xl mx-auto font-sans">
            Dalla pubblicazione dell&apos;offerta al tavolo del ristorante, senza asporto e senza scatole misteriose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-white rounded-3xl p-7 sm:p-9 border border-resty-stone-border/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-resty-orange/30 group-hover:text-resty-orange transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-resty-sand text-resty-stone-light border border-resty-stone-border/60">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-resty-peach/70 text-resty-orange flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-resty-orange group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title & Desc */}
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-resty-stone mb-2.5 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-resty-stone-border/50 flex items-center gap-1.5 text-xs font-semibold text-resty-orange">
                  <span>Passo {index + 1} del percorso</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
