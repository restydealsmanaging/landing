import type { Metadata } from "next";
import { Syne, Lexend } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RestyDeals | Stessa qualità. Più valore, a tavola.",
  description:
    "Con RestyDeals scopri le offerte dei ristoranti aderenti e gusti il tuo piatto direttamente nel locale. Piatto fresco al tavolo, prezzi trasparenti e riduzione dello spreco alimentare.",
  keywords: [
    "RestyDeals",
    "ristoranti Varese",
    "offerte ristoranti",
    "mangiare al tavolo",
    "riduzione spreco alimentare",
    "ristoratori Varese",
  ],
  openGraph: {
    title: "RestyDeals | Stessa qualità. Più valore, a tavola.",
    description:
      "Scopri le offerte dei ristoranti aderenti e gusta il tuo piatto direttamente nel locale. Trasparenza, qualità e zero spreco.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${syne.variable} ${lexend.variable}`}>
      <body className="min-h-screen bg-resty-ivory text-resty-stone font-sans selection:bg-resty-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
