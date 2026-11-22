import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "leads.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, email } = body;

    if (!type || !email) {
      return NextResponse.json(
        { error: "Email e tipologia sono obbligatorie." },
        { status: 400 }
      );
    }

    const newLead = {
      id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      type, // 'restaurant' | 'customer'
      createdAt: new Date().toISOString(),
      ...body,
    };

    let existingLeads: Array<unknown> = [];
    try {
      const fileData = await fs.readFile(DATA_FILE, "utf-8");
      existingLeads = JSON.parse(fileData);
    } catch {
      // File non ancora presente, inizializziamo array vuoto
      existingLeads = [];
    }

    existingLeads.push(newLead);
    await fs.writeFile(DATA_FILE, JSON.stringify(existingLeads, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message:
        type === "restaurant"
          ? "Candidatura ricevuta con successo! Ti contatteremo a breve per impostare il test."
          : "Ti abbiamo aggiunto alla lista! Riceverai un avviso appena RestyDeals sarà disponibile.",
      leadId: newLead.id,
    });
  } catch (error) {
    console.error("Errore salvataggio lead:", error);
    return NextResponse.json(
      { error: "Si è verificato un errore durante l'invio. Riprova più tardi." },
      { status: 500 }
    );
  }
}
