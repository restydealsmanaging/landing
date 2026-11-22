# RestyDeals — Official Landing Page (Beta / Test Pilota)

Landing page ufficiale di **RestyDeals** per la fase di test pilota in provincia di Varese.

---

## 🎯 Obiettivo del Progetto
Presentare il prodotto e raccogliere candidature e iscrizioni per la fase di validazione:
1. **Per i Ristoratori (B2B)**: Candidatura per il programma pilota gratuito ("Partecipa al test"), per riempire le ore tranquille e valorizzare i piatti riducendo lo spreco.
2. **Per i Clienti (B2C)**: Waitlist con avviso al lancio ("Avvisami al lancio"), garantendo consumazione al tavolo, stessa qualità e prezzi promozionali certi.
3. **Storytelling dei Founder**: La storia autentica di Emanuele (ristoratore) e Matteo (studente di informatica).

---

## 🛠️ Stack Tecnologico
- **Framework**: Next.js 16 (App Router) con Turbopack
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS v4 con design token personalizzati RestyDeals:
  - `resty-ivory`: `#FDFCF8`
  - `resty-stone`: `#2D2D2A`
  - `resty-orange`: `#FF6B35`
  - `resty-peach`: `#FAEDE5`
  - `resty-green`: `#16A34A`
- **Tipografia**: Google Fonts `Syne` (Headings) + `Lexend` (Body / UI)
- **Icone**: `lucide-react`
- **Lead Capture API**: `/api/lead` (salva localmente in `leads.json` ed è predisposto per webhook / database)

---

## 🚀 Come avviare il progetto

```bash
# Entra nella cartella del progetto
cd "C:\Users\matti\Documents\Progetti\landing"

# Avvia il server di sviluppo
npm run dev

# Compilazione di produzione
npm run build
npm run start
```

Il sito sarà accessibile su `http://localhost:3000`.

---

## 📂 Struttura delle Sezioni
- `src/components/Navbar.tsx`: Header con logo, badge di stato test e navigazione rapida.
- `src/components/HeroSection.tsx`: Headline del CEO *"Stessa qualità. Più valore, a tavola."*, doppio CTA e anteprima interattiva di un piatto al tavolo.
- `src/components/HowItWorksSection.tsx`: Il loop in 3 passaggi *"Il ristorante sceglie. Tu gusti in sala."*.
- `src/components/RestaurateurSection.tsx`: Sezione dedicata ai gestori con i 3 vantaggi del documento e form di candidatura.
- `src/components/CustomerSection.tsx`: Sezione dedicata a chi mangia fuori con i 3 vantaggi e box iscrizione waitlist.
- `src/components/AboutUsSection.tsx`: *"Due ragazzi della provincia di Varese — Una cucina, un computer, un'idea."* con schede dedicate a Emanuele e Matteo.
- `src/components/FaqSection.tsx`: Accordion con le 4 risposte chiave del documento PDF.
- `src/components/Footer.tsx`: Chiusura pulita, link e crediti.
