export const config = { runtime: "edge" };

/**
 * Inoltra il lead allo script Google Apps (POST).
 * Variabili (Vercel / server): una tra queste deve contenere l’URL /exec del deploy.
 * - GOOGLE_SHEETS_WEBAPP_URL (consigliata, solo server)
 * - VITE_GOOGLE_SHEETS_WEBAPP_URL (stesso valore se già impostata per il client)
 */
function getScriptUrl(): string | undefined {
  const a = process.env.GOOGLE_SHEETS_WEBAPP_URL?.trim();
  const b = process.env.VITE_GOOGLE_SHEETS_WEBAPP_URL?.trim();
  return a || b || undefined;
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const scriptUrl = getScriptUrl();
  if (!scriptUrl) {
    return new Response(JSON.stringify({ ok: false, error: "GOOGLE_SHEETS_WEBAPP_URL not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const gRes = await fetch(scriptUrl, {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const text = await gRes.text();
  let sheetOk = gRes.ok;

  try {
    const j = JSON.parse(text) as { ok?: boolean };
    if (j.ok === false) sheetOk = false;
  } catch {
    if (!text.includes('"ok":true') && gRes.ok) {
      sheetOk = false;
    }
  }

  if (!sheetOk) {
    console.error("Google Apps Script sheet error:", gRes.status, text.slice(0, 800));
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Sheet append failed",
        status: gRes.status,
      }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
