import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomerSection from "@/components/CustomerSection";

export const metadata: Metadata = {
  title: "Per i Clienti | Il piatto che scegli, al tavolo · RestyDeals",
  description:
    "Scopri le offerte dei ristoranti a Varese e provincia. Piatto al tavolo preparato espresso, prezzi trasparenti e zero spreco alimentare.",
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
