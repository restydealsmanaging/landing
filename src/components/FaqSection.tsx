"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      question: "Dove si consuma il piatto?",
      answer:
        "Al tavolo, direttamente nel ristorante che propone l'offerta. Non si tratta di asporto né di consegna a domicilio: ti siedi in sala con la consueta accoglienza e il servizio del locale.",
    },
    {
      question: "Perché costa meno?",
      answer:
        "È il ristoratore a scegliere quali piatti promuovere e in quali orari. Invece di applicare sconti indiscriminati, il locale decide quando incentivare la clientela (ad esempio nelle ore più tranquille) valorizzando la propria cucina. La qualità della materia prima e del servizio sono identiche a quelle del menù classico.",
    },
    {
      question: "Come aiuto a ridurre gli sprechi?",
      answer:
        "Quando scegli un'offerta pensata per valorizzare ingredienti che il locale ha già freschi in cucina, aiuti il ristorante a utilizzarli al meglio prima che vadano sprecati. È un circolo virtuoso che premia sia te con un prezzo vantaggioso sia il cuoco che non butta via cibo.",
    },
    {
      question: "Posso già usare RestyDeals?",
      answer:
        "RestyDeals è attualmente in fase di test. Se hai un ristorante in provincia di Varese, puoi candidarti subito a provarla come locale pilota. Se vuoi scoprire le offerte da cliente, puoi lasciare la tua email per ricevere un avviso esclusivo al lancio.",
    },
    {
      question: "Ci sono costi per il test pilota dei ristoratori?",
      answer:
        "No, la partecipazione alla fase di test pilota è totalmente gratuita e senza vincoli per i locali selezionati. L'obiettivo è raccogliere feedback reali e migliorare la piattaforma insieme a chi vive la cucina ogni giorno.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-resty-sand/30 border-t border-resty-stone-border/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-medium text-3xl sm:text-4xl text-resty-stone tracking-tight mb-4">
            Domande frequenti
          </h2>
          <p className="text-base text-resty-stone-light max-w-xl mx-auto">
            I chiarimenti fondamentali su come funziona RestyDeals sia per chi va a cena fuori sia per chi gestisce una sala.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-resty-stone-border/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-bold text-base sm:text-lg text-resty-stone hover:text-resty-orange transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-resty-sand flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-resty-peach text-resty-orange" : "text-resty-stone-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-resty-stone-light leading-relaxed border-t border-resty-stone-border/40 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact info pill */}
        <div className="mt-12 text-center text-xs sm:text-sm text-resty-stone-muted">
          Hai una domanda specifica da farci? Scrivi direttamente a Matteo ed Emanuele:{" "}
          <a
            href="mailto:restydeals.managing@gmail.com"
            className="text-resty-orange font-semibold hover:underline"
          >
            restydeals.managing@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
