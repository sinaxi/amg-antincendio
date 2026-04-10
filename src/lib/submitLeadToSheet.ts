import type { LeadAttribution } from "@/lib/leadAttribution";

export type LeadFormPayload = {
  nome: string;
  azienda: string;
  settore: string;
  provincia: string;
  email: string;
  telefono: string;
  messaggio: string;
};

/** Corpo inviato allo script Google (allineato alle colonne del foglio). */
export type LeadSheetRowPayload = LeadFormPayload &
  LeadAttribution & {
    data: string;
  };

const WEBAPP_URL = (import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined)?.trim();
const LEADS_SHEET_FLAG = import.meta.env.VITE_LEADS_SHEET === "true";

const apiOrigin = (import.meta.env.VITE_LEAD_API_ORIGIN as string | undefined)?.replace(/\/$/, "") ?? "";

/**
 * True se il modulo deve tentare la registrazione sul foglio.
 * - URL script nel client (VITE_GOOGLE_SHEETS_WEBAPP_URL), oppure
 * - VITE_LEADS_SHEET=true (URL solo lato server: GOOGLE_SHEETS_WEBAPP_URL su Vercel).
 */
export function isGoogleSheetLeadConfigured(): boolean {
  return LEADS_SHEET_FLAG || Boolean(WEBAPP_URL);
}

/**
 * 1) POST a /api/submit-lead-sheet (Vercel) — consigliato in produzione: risposta reale dallo script.
 * 2) In locale senza API, fallback POST diretto allo script (no-cors, esito non verificabile).
 */
export async function submitLeadToSheet(payload: LeadSheetRowPayload): Promise<{ ok: boolean }> {
  if (!isGoogleSheetLeadConfigured()) {
    return { ok: false };
  }

  const apiPath = "/api/submit-lead-sheet";
  const apiUrl = apiOrigin ? `${apiOrigin}${apiPath}` : apiPath;

  try {
    const r = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (r.ok) {
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean };
      return { ok: j.ok !== false };
    }

    // Proxy attivo ma errore (es. script Google)
    if (r.status !== 404) {
      return { ok: false };
    }
  } catch {
    /* nessun endpoint /api (es. solo vite) → fallback sotto */
  }

  const directUrl = WEBAPP_URL;
  if (!directUrl) {
    return { ok: false };
  }

  try {
    await fetch(directUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
