import type { LeadSheetRowPayload } from "@/lib/submitLeadToSheet";

/**
 * Origine opzionale per chiamare l'API in locale con `vercel dev` (es. http://localhost:3000).
 * In produzione lasciare vuoto: stesso dominio → `/api/send-lead-email`.
 */
const apiOrigin = (import.meta.env.VITE_LEAD_API_ORIGIN as string | undefined)?.replace(/\/$/, "") ?? "";

export async function sendLeadNotificationEmail(payload: LeadSheetRowPayload): Promise<{ ok: boolean }> {
  const path = "/api/send-lead-email";
  const url = apiOrigin ? `${apiOrigin}${path}` : path;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { ok: r.ok };
  } catch {
    return { ok: false };
  }
}
