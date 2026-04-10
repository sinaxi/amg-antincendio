import { getLeadAttribution } from "@/lib/leadAttribution";
import type { LeadSheetRowPayload } from "@/lib/submitLeadToSheet";

export type ContactFormState = {
  nome: string;
  azienda: string;
  settore: string;
  email: string;
  telefono: string;
  provincia: string;
  messaggio: string;
};

export function buildLeadPayload(form: ContactFormState, href: string, referrer: string): LeadSheetRowPayload {
  const attr = getLeadAttribution(href, referrer);
  return {
    nome: form.nome.trim(),
    azienda: form.azienda.trim(),
    settore: form.settore.trim(),
    provincia: form.provincia.trim(),
    email: form.email.trim(),
    telefono: form.telefono.trim(),
    messaggio: form.messaggio.trim(),
    data: new Date().toISOString(),
    sorgente: attr.sorgente,
    campagna: attr.campagna,
    adset: attr.adset,
    ad: attr.ad,
    pageUrl: attr.pageUrl,
  };
}
