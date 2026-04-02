import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const googleSheetsWebhookUrl = Deno.env.get("GOOGLE_SHEETS_WEBHOOK_URL");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  province: string;
  userType: string;
  fenceLength: string;
  message: string;
  pageUrl: string;
  clientIp: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to submit-contact function");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Form data received:", { ...formData, email: "***" });

    // Get current date and time in Italy timezone
    const now = new Date();
    const italyDate = now.toLocaleDateString("it-IT", { timeZone: "Europe/Rome" });
    const italyTime = now.toLocaleTimeString("it-IT", { timeZone: "Europe/Rome" });

    // Prepare data for Google Sheets (starting from column C)
    // C: Nome e Cognome, D: Email, E: Telefono, F: Provincia, G: Tipologia, H: Messaggio, I: Data, J: Lunghezza, K: Ora, L: Page URL, M: IP
    const sheetData = {
      "Nome e Cognome": formData.name,
      Email: formData.email,
      Telefono: formData.phone,
      Provincia: formData.province,
      Tipologia: formData.userType,
      Messaggio: formData.message,
      Data: italyDate,
      Lunghezza: formData.fenceLength || "",
      Ora: italyTime,
      "Page URL": formData.pageUrl, // Full URL with query parameters
      IP: formData.clientIp,
    };

    // Send to Google Sheets via webhook (must not block email sending)
    console.log("Sending data to Google Sheets...");

    const isValidUrl = (value: string) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    };

    if (googleSheetsWebhookUrl && isValidUrl(googleSheetsWebhookUrl)) {
      try {
        const sheetsResponse = await fetch(googleSheetsWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8", // Use text/plain to avoid CORS preflight
          },
          body: JSON.stringify(sheetData),
        });
        console.log("Google Sheets response status:", sheetsResponse.status);
        // Consume body to avoid leaks in Deno
        await sheetsResponse.text();
      } catch (sheetsError) {
        console.error("Google Sheets webhook request failed (continuing):", sheetsError);
      }
    } else {
      console.error(
        "Google Sheets webhook URL not configured or invalid (continuing). Check GOOGLE_SHEETS_WEBHOOK_URL.",
      );
    }

    // Prepare email content
    const fenceLengthRow = formData.fenceLength ? `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Dettaglio richiesta</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.fenceLength}</td>
        </tr>` : "";

    const emailHtml = `
      <h1>Nuovo contatto — AMG Sistemi (landing)</h1>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefono</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Provincia</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.province}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tipologia</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.userType}</td>
        </tr>${fenceLengthRow}
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Messaggio</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.message}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Data</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${italyDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Ora</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${italyTime}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Page URL</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.pageUrl}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">IP</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.clientIp}</td>
        </tr>
      </table>
    `;

    console.log("Sending emails...");

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }
    
    // Send emails to all recipients using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AMG Sistemi <noreply@richiestainfo.com>",
        to: ["leads@sinaxi.it", "lisa.micheli@megtrading.it", "andrea@megtrading.it"],
        subject: "AMG Sistemi — Nuovo contatto dalla landing",
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult);

    if (!emailResponse.ok) {
      throw new Error(`Resend error: ${JSON.stringify(emailResult)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
