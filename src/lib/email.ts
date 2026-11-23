import { Resend } from "resend";
import nodemailer from "nodemailer";

export interface RestaurantLeadData {
  type: "restaurant";
  restaurantName: string;
  contactName: string;
  city: string;
  phone: string;
  email: string;
  cuisineType?: string;
  notes?: string;
  createdAt?: string;
}

export interface CustomerLeadData {
  type: "customer";
  email: string;
  city?: string;
  createdAt?: string;
}

export type LeadData = RestaurantLeadData | CustomerLeadData;

const TARGET_EMAIL = process.env.NOTIFICATION_EMAIL || "restydeals.managing@gmail.com";

function generateRestaurantEmailHtml(data: RestaurantLeadData): string {
  const dateFormatted = data.createdAt
    ? new Date(data.createdAt).toLocaleString("it-IT", {
        timeZone: "Europe/Rome",
        dateStyle: "full",
        timeStyle: "short",
      })
    : new Date().toLocaleString("it-IT", {
        timeZone: "Europe/Rome",
        dateStyle: "full",
        timeStyle: "short",
      });

  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuova Candidatura Ristoratore</title>
</head>
<body style="margin: 0; padding: 30px 15px; background-color: #F7F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1C1917;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; margin: 0 auto; background-color: #FFFFFF; border-radius: 20px; border: 1px solid #EAE6DF; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    
    <!-- Header with RestyDeals branding -->
    <tr>
      <td style="padding: 32px 36px 24px 36px; background: #1C1917; border-bottom: 3px solid #DD571C;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td>
              <div style="display: inline-block; vertical-align: middle; background-color: #DD571C; width: 36px; height: 36px; border-radius: 10px; text-align: center; line-height: 36px; color: #FFFFFF; font-weight: bold; font-size: 18px; margin-right: 12px;">
                RD
              </div>
              <span style="font-size: 22px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px; vertical-align: middle;">
                Resty<span style="color: #DD571C;">Deals</span>
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 18px;">
              <span style="display: inline-block; background-color: rgba(221, 87, 28, 0.2); color: #FF9466; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 100px;">
                Nuova Candidatura Partner
              </span>
              <h1 style="margin: 8px 0 0 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px; line-height: 1.25;">
                ${escapeHtml(data.restaurantName || "Nuovo Ristorante")}
              </h1>
              <p style="margin: 6px 0 0 0; color: #A8A29E; font-size: 13px;">
                Ricevuta il ${dateFormatted}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body content -->
    <tr>
      <td style="padding: 32px 36px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Riquadro Dati Ristorante -->
          <tr>
            <td style="padding-bottom: 24px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #DD571C;">
                Dettagli Ristoratore
              </h2>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAFAF8; border-radius: 14px; border: 1px solid #EFECE6;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; width: 38%; font-size: 13px; font-weight: 600; color: #78716C;">
                    Nome Ristorante
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 700; color: #1C1917;">
                    ${escapeHtml(data.restaurantName)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 13px; font-weight: 600; color: #78716C;">
                    Referente
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 600; color: #1C1917;">
                    ${escapeHtml(data.contactName || "Non specificato")}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 13px; font-weight: 600; color: #78716C;">
                    Città / Zona
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 600; color: #1C1917;">
                    ${escapeHtml(data.city)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 13px; font-weight: 600; color: #78716C;">
                    Telefono
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 700; color: #DD571C;">
                    <a href="tel:${escapeHtml(data.phone)}" style="color: #DD571C; text-decoration: none;">
                      ${escapeHtml(data.phone)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 13px; font-weight: 600; color: #78716C;">
                    Email di contatto
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EFECE6; font-size: 14px; font-weight: 600; color: #1C1917;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #1C1917; text-decoration: underline;">
                      ${escapeHtml(data.email)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 600; color: #78716C;">
                    Tipologia Cucina
                  </td>
                  <td style="padding: 14px 18px; font-size: 14px; font-weight: 500; color: #1C1917;">
                    ${escapeHtml(data.cuisineType || "Non specificata")}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${
            data.notes && data.notes.trim()
              ? `
          <!-- Sezione Note / Esigenze -->
          <tr>
            <td style="padding-bottom: 28px;">
              <h2 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #78716C;">
                Note o Esigenze segnalate
              </h2>
              <div style="background-color: #FFFDF9; border-left: 4px solid #DD571C; padding: 16px 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #44403C; border-top: 1px solid #EFECE6; border-right: 1px solid #EFECE6; border-bottom: 1px solid #EFECE6;">
                ${escapeHtml(data.notes)}
              </div>
            </td>
          </tr>
          `
              : ""
          }

          <!-- CTA Rispondi Subito -->
          <tr>
            <td style="padding-top: 10px; text-align: center;">
              <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(
    `RestyDeals - Incontro conoscitivo per ${data.restaurantName}`
  )}" style="display: inline-block; background-color: #DD571C; color: #FFFFFF; font-size: 15px; font-weight: 700; text-decoration: none; padding: 14px 28px; border-radius: 12px; box-shadow: 0 4px 12px rgba(221,87,28,0.25);">
                ✉️ Rispondi via email a ${escapeHtml(data.contactName || data.restaurantName)}
              </a>
              <div style="margin-top: 12px; font-size: 12px; color: #78716C;">
                Puoi anche cliccare "Rispondi" direttamente a questa mail (il campo Reply-To è già configurato).
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 36px; background-color: #FAFAF8; border-top: 1px solid #EAE6DF; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #A8A29E; line-height: 1.5;">
          Notifica automatica generata dalla Landing Page di <strong>RestyDeals</strong>.<br>
          Destinatario: ${escapeHtml(TARGET_EMAIL)}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function generateCustomerEmailHtml(data: CustomerLeadData): string {
  const dateFormatted = data.createdAt
    ? new Date(data.createdAt).toLocaleString("it-IT", {
        timeZone: "Europe/Rome",
        dateStyle: "full",
        timeStyle: "short",
      })
    : new Date().toLocaleString("it-IT", {
        timeZone: "Europe/Rome",
        dateStyle: "full",
        timeStyle: "short",
      });

  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuovo Cliente in Lista d'Attesa</title>
</head>
<body style="margin: 0; padding: 30px 15px; background-color: #F7F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1C1917;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 560px; margin: 0 auto; background-color: #FFFFFF; border-radius: 20px; border: 1px solid #EAE6DF; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    <tr>
      <td style="padding: 28px 32px; background: #1C1917; border-bottom: 3px solid #DD571C;">
        <span style="display: inline-block; background-color: rgba(221, 87, 28, 0.2); color: #FF9466; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 100px;">
          Nuovo Lead Cliente (Waitlist)
        </span>
        <h1 style="margin: 10px 0 0 0; font-size: 22px; font-weight: 700; color: #FFFFFF;">
          ${escapeHtml(data.email)}
        </h1>
        <p style="margin: 4px 0 0 0; color: #A8A29E; font-size: 12px;">
          Iscritto il ${dateFormatted}
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px 32px;">
        <p style="margin: 0 0 16px 0; font-size: 14px; color: #44403C; line-height: 1.5;">
          Un nuovo cliente ha richiesto l'accesso anticipato a RestyDeals:
        </p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAFAF8; border-radius: 12px; border: 1px solid #EFECE6;">
          <tr>
            <td style="padding: 12px 16px; width: 35%; font-size: 13px; font-weight: 600; color: #78716C;">Email</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #1C1917;">
              <a href="mailto:${escapeHtml(data.email)}" style="color: #DD571C; text-decoration: none;">
                ${escapeHtml(data.email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #78716C;">Zona / Città</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #1C1917;">
              ${escapeHtml(data.city || "Non specificata")}
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 32px; background-color: #FAFAF8; border-top: 1px solid #EAE6DF; text-align: center; font-size: 11px; color: #A8A29E;">
        Landing Page RestyDeals · Inviato a ${escapeHtml(TARGET_EMAIL)}
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendLeadNotificationEmail(
  lead: LeadData
): Promise<{ success: boolean; provider?: string; error?: string }> {
  const isRestaurant = lead.type === "restaurant";

  const subject = isRestaurant
    ? `🍽️ [Candidatura Ristoratore] ${(lead as RestaurantLeadData).restaurantName || "Nuovo Ristorante"} (${(lead as RestaurantLeadData).city || "Zona non specificata"})`
    : `👥 [Nuovo Cliente Waitlist] ${(lead as CustomerLeadData).email} (${(lead as CustomerLeadData).city || "Zona"})`;

  const html = isRestaurant
    ? generateRestaurantEmailHtml(lead as RestaurantLeadData)
    : generateCustomerEmailHtml(lead as CustomerLeadData);

  const replyTo = lead.email;

  // 1. Priorità 1: Resend (se RESEND_API_KEY è configurato)
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.EMAIL_FROM || "RestyDeals <onboarding@resend.dev>";

      const res = await resend.emails.send({
        from: fromEmail,
        to: TARGET_EMAIL,
        replyTo: replyTo,
        subject: subject,
        html: html,
      });

      if (res.error) {
        console.error("[EmailService - Resend] Errore API:", res.error);
        return { success: false, provider: "resend", error: res.error.message };
      }

      console.log(`[EmailService - Resend] Email inviata con successo a ${TARGET_EMAIL}. ID:`, res.data?.id);
      return { success: true, provider: "resend" };
    } catch (err: unknown) {
      console.error("[EmailService - Resend] Eccezione:", err);
      // Se fallisce, proviamo a passare a Nodemailer se configurato
    }
  }

  // 2. Priorità 2: Gmail SMTP o SMTP Custom con Nodemailer
  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;

  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass.replace(/\s+/g, ""), // Rimuove eventuali spazi dalla password app
        },
      });

      await transporter.sendMail({
        from: `"RestyDeals Candidature" <${gmailUser}>`,
        to: TARGET_EMAIL,
        replyTo: replyTo,
        subject: subject,
        html: html,
      });

      console.log(`[EmailService - Gmail SMTP] Email inviata con successo a ${TARGET_EMAIL}`);
      return { success: true, provider: "gmail-smtp" };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[EmailService - Gmail SMTP] Errore:", msg);
      return { success: false, provider: "gmail-smtp", error: msg };
    }
  }

  // 3. Priorità 3: SMTP Standard
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"RestyDeals" <${process.env.SMTP_USER}>`,
        to: TARGET_EMAIL,
        replyTo: replyTo,
        subject: subject,
        html: html,
      });

      console.log(`[EmailService - SMTP Standard] Email inviata con successo a ${TARGET_EMAIL}`);
      return { success: true, provider: "smtp" };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[EmailService - SMTP Standard] Errore:", msg);
      return { success: false, provider: "smtp", error: msg };
    }
  }

  // 4. Se nessun provider è configurato
  console.warn(
    `[EmailService] ATTENZIONE: Nessun provider email configurato in .env.local.\n` +
      `Per ricevere le email a ${TARGET_EMAIL}, configura in .env.local:\n` +
      `- Opzione A (Gmail): GMAIL_USER=restydeals.managing@gmail.com e GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx\n` +
      `- Opzione B (Resend): RESEND_API_KEY=re_...\n` +
      `Il lead è stato comunque salvato correttamente su leads.json.`
  );

  return {
    success: false,
    provider: "none",
    error: "Nessun servizio email configurato nelle variabili d'ambiente (.env.local)",
  };
}
