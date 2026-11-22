"use client";

import { useEffect, useRef, useState } from "react";
import { ChefHat, Smartphone, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
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
    <section id="come-funziona" className="relative z-20 pb-20 md:pb-28 bg-resty-sand/40 border-b border-resty-stone-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Statement Card: Overlaps the bottom of the Hero section */}
        <div
          ref={cardRef}
          className="-mt-16 sm:-mt-24 md:-mt-28 mb-16 md:mb-24 relative z-30 flex justify-center"
        >
          <div
            className={`w-full max-w-3xl rounded-3xl bg-white border border-resty-stone-border/80 shadow-[0_20px_60px_-15px_rgba(45,45,42,0.12)] p-8 sm:p-12 lg:p-14 text-center transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100 shadow-[0_25px_70px_-15px_rgba(45,45,42,0.18)]"
                : "translate-y-8 opacity-0 scale-[0.97]"
            }`}
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight leading-[1.18]">
              Il ristorante sceglie. <br className="hidden sm:inline" />
              <span className="text-resty-orange">Tu gusti in sala.</span>
            </h2>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-white rounded-3xl p-8 border border-resty-stone-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl text-resty-orange/30 group-hover:text-resty-orange transition-colors">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-resty-sand text-resty-stone-light border border-resty-stone-border/60">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-resty-peach/70 text-resty-orange flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-resty-orange group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-heading font-bold text-xl text-resty-stone mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-resty-stone-light leading-relaxed">
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
