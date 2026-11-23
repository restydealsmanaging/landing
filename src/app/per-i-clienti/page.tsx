import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomerSection from "@/components/CustomerSection";

export const metadata: Metadata = {
  title: "Per i Clienti | L'esperienza unica del nostro mondo · RestyDeals",
  description:
    "Stessa qualità, prezzo in promozione. Scopri le offerte dei ristoranti a Varese e provincia: piatto al tavolo preparato espresso e prezzi trasparenti.",
};

export default function ClientiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-resty-ivory text-resty-stone selection:bg-resty-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        <CustomerSection />
      </main>
      <Footer />
    </div>
  );
}
