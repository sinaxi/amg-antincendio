export type LeadAttribution = {
  sorgente: string;
  campagna: string;
  adset: string;
  ad: string;
  pageUrl: string;
};

function normalizeUtmSource(raw: string): string {
  const s = raw.trim().toLowerCase();
  if (/^(fb|facebook|meta)$/.test(s)) return "Facebook";
  if (/^(ig|instagram)$/.test(s)) return "Instagram";
  if (/^google$/.test(s)) return "Google";
  if (/^(gads|googleads|google ads)$/.test(s)) return "Google Ads";
  if (/^(bing|ms|microsoft)$/.test(s)) return "Microsoft / Bing";
  if (/^(linkedin|li)$/.test(s)) return "LinkedIn";
  if (/^(tiktok|tt)$/.test(s)) return "TikTok";
  if (/^(email|newsletter|mail)$/.test(s)) return "Email";
  if (!s) return "";
  return raw.trim().replace(/\b\w/g, (c) => c.toUpperCase());
}

function mediumHint(medium: string): string {
  const m = medium.trim().toLowerCase();
  if (m === "cpc" || m === "ppc") return "Paid search (Ads)";
  if (m === "paid_social" || m === "paid social") return "Social ads";
  if (m === "social") return "Social";
  if (m === "organic") return "Ricerca organica";
  if (m === "referral") return "Referral";
  if (m === "email") return "Email";
  return "";
}

function referrerToSource(ref: string): string {
  try {
    const host = new URL(ref).hostname.replace(/^www\./, "").toLowerCase();
    if (/facebook\.|fb\.com|instagram\.|threads\.net/.test(host)) return "Facebook / Meta";
    if (/^google\./.test(host) && !/googleads|doubleclick|pagead/.test(host)) return "Google (referral)";
    if (/bing\.|microsoft\.|msn\./.test(host)) return "Microsoft / Bing";
    if (/linkedin\.com/.test(host)) return "LinkedIn";
    if (/t\.co|twitter\.com|x\.com/.test(host)) return "X (Twitter)";
    if (/tiktok\.com/.test(host)) return "TikTok";
    if (/yahoo\.|duckduckgo\./.test(host)) return "Motore di ricerca";
    return `Referral: ${host}`;
  } catch {
    return "";
  }
}

/**
 * Deriva sorgente / campagna / adset / ad da query string (UTM, click id) e referrer.
 */
export function getLeadAttribution(href: string, referrer: string): LeadAttribution {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return { sorgente: "", campagna: "", adset: "", ad: "", pageUrl: href };
  }

  const p = url.searchParams;
  const utmSource = (p.get("utm_source") || "").trim();
  const utmMedium = (p.get("utm_medium") || "").trim();
  const utmCampaign = (p.get("utm_campaign") || "").trim();
  const utmContent = (p.get("utm_content") || "").trim();
  const utmTerm = (p.get("utm_term") || "").trim();

  let sorgente = "";

  if (p.has("fbclid")) sorgente = "Facebook / Meta (fbclid)";
  else if (p.has("gclid")) sorgente = "Google Ads (gclid)";
  else if (p.has("wbraid") || p.has("gbraid")) sorgente = "Google Ads";
  else if (p.has("msclkid")) sorgente = "Microsoft Ads (msclkid)";
  else if (p.has("ttclid")) sorgente = "TikTok Ads";
  else if (p.has("li_fat_id")) sorgente = "LinkedIn Ads";

  if (!sorgente && utmSource) {
    sorgente = normalizeUtmSource(utmSource);
  }

  if (!sorgente && referrer) {
    sorgente = referrerToSource(referrer);
  }

  if (!sorgente) {
    const hint = utmMedium ? mediumHint(utmMedium) : "";
    sorgente = hint || "Sito diretto / non attribuito";
  }

  const campagna =
    utmCampaign ||
    (p.get("campaign_id") || "").trim() ||
    (p.get("campaignid") || "").trim() ||
    "";

  const adset =
    utmContent ||
    (p.get("adset_id") || "").trim() ||
    (p.get("adsetid") || "").trim() ||
    "";

  const ad =
    utmTerm ||
    (p.get("ad_id") || "").trim() ||
    (p.get("adid") || "").trim() ||
    "";

  return {
    sorgente,
    campagna,
    adset,
    ad,
    pageUrl: href,
  };
}
