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

const WEBAPP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined;

export function isGoogleSheetLeadConfigured(): boolean {
  return Boolean(WEBAPP_URL?.trim());
}

/**
 * Invia il lead allo script Google Apps (POST). Usa `no-cors` perché l'endpoint
 * di script.google.com non espone CORS leggibile dal browser; il foglio riceve comunque i dati.
 */
export async function submitLeadToSheet(payload: LeadSheetRowPayload): Promise<{ ok: boolean }> {
  const url = WEBAPP_URL?.trim();
  if (!url) {
    return { ok: false };
  }

  try {
    await fetch(url, {
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
