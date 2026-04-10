export const config = { runtime: "edge" };

const LEADS_TO = "leads@sinaxi.it";
const SUBJECT = "AMG Antincendio - Landing Page";

type LeadBody = {
  nome?: string;
  azienda?: string;
  settore?: string;
  provincia?: string;
  email?: string;
  telefono?: string;
  messaggio?: string;
  data?: string;
  sorgente?: string;
  campagna?: string;
  adset?: string;
  ad?: string;
  pageUrl?: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clamp(s: string, max: number): string {
  const t = s.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

function buildEmailHtml(b: Required<Pick<LeadBody, "nome" | "email" | "telefono" | "provincia">> & LeadBody): string {
  const row = (label: string, value: string, pre = false) => {
    const v = value || "—";
    const inner = pre
      ? `<div style="font-size:17px;line-height:1.55;color:#111;white-space:pre-wrap;word-wrap:break-word;">${escapeHtml(v)}</div>`
      : `<div style="font-size:17px;line-height:1.55;color:#111;word-wrap:break-word;">${escapeHtml(v)}</div>`;
    return `<div style="margin:0 0 22px 0;padding-bottom:18px;border-bottom:1px solid #e8e8e8;">
  <div style="font-size:12px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#666;margin-bottom:10px;">${escapeHtml(label)}</div>
  ${inner}
</div>`;
  };

  return `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;">
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:17px;line-height:1.55;color:#1a1a1a;max-width:560px;margin:0 auto;padding:20px 16px 32px;-webkit-text-size-adjust:100%;">
  <div style="background:#fff;border-radius:12px;padding:20px 18px 8px;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
    <p style="margin:0 0 18px;font-size:15px;color:#555;">Nuovo lead dalla landing AMG Antincendio.</p>
    ${row("Nome e cognome", b.nome)}
    ${row("Azienda", b.azienda || "")}
    ${row("Settore", b.settore || "")}
    ${row("Provincia", b.provincia)}
    ${row("Email", b.email)}
    ${row("Telefono", b.telefono)}
    ${row("Messaggio", b.messaggio || "", true)}
    ${row("Data e ora (ISO)", b.data || "")}
    ${row("Sorgente", b.sorgente || "")}
    ${row("Campagna", b.campagna || "")}
    ${row("Ad set", b.adset || "")}
    ${row("Annuncio", b.ad || "")}
    ${row("URL pagina", b.pageUrl || "")}
  </div>
</div>
</body>
</html>`;
}

function buildEmailText(b: Required<Pick<LeadBody, "nome" | "email" | "telefono" | "provincia">> & LeadBody): string {
  const lines = [
    "Nuovo lead — AMG Antincendio",
    "",
    `Nome e cognome: ${b.nome}`,
    `Azienda: ${b.azienda || "—"}`,
    `Settore: ${b.settore || "—"}`,
    `Provincia: ${b.provincia}`,
    `Email: ${b.email}`,
    `Telefono: ${b.telefono}`,
    "",
    "Messaggio:",
    b.messaggio || "—",
    "",
    `Data: ${b.data || "—"}`,
    `Sorgente: ${b.sorgente || "—"}`,
    `Campagna: ${b.campagna || "—"}`,
    `Ad set: ${b.adset || "—"}`,
    `Annuncio: ${b.ad || "—"}`,
    `URL: ${b.pageUrl || "—"}`,
  ];
  return lines.join("\n");
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!key || !from) {
    return new Response(JSON.stringify({ error: "Server email not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const nome = clamp(body.nome || "", 200);
  const email = clamp(body.email || "", 320);
  const telefono = clamp(body.telefono || "", 80);
  const provincia = clamp(body.provincia || "", 120);

  if (!nome || !email || !telefono || !provincia) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const normalized: Required<Pick<LeadBody, "nome" | "email" | "telefono" | "provincia">> & LeadBody = {
    nome,
    email,
    telefono,
    provincia,
    azienda: clamp(body.azienda || "", 200),
    settore: clamp(body.settore || "", 200),
    messaggio: clamp(body.messaggio || "", 8000),
    data: clamp(body.data || "", 80),
    sorgente: clamp(body.sorgente || "", 200),
    campagna: clamp(body.campagna || "", 300),
    adset: clamp(body.adset || "", 300),
    ad: clamp(body.ad || "", 300),
    pageUrl: clamp(body.pageUrl || "", 2000),
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [LEADS_TO],
      subject: SUBJECT,
      reply_to: normalized.email,
      html: buildEmailHtml(normalized),
      text: buildEmailText(normalized),
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", res.status, errText);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
