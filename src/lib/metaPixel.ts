/** Dopo invio contatto riuscito: evento standard Lead per Ads / dataset (Pixel in index.html). */
export function trackMetaLead(): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "Lead");
}
