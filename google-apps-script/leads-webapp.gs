/**
 * Google Apps Script — append lead al foglio "AMG Antincendio - Leads"
 *
 * 1. Apri il foglio → Estensioni → Apps Script → incolla questo file.
 * 2. Imposta SPREADSHEET_ID e opzionalmente SHEET_NAME (nome del tab).
 * 3. Deploy → Nuova distribuzione → Tipo "App web"
 *    - Esegui come: Me
 *    - Chi ha accesso: Chiunque (o "Chiunque con link Google" se disponibile)
 * 4. Copia l'URL /exec in Vercel: GOOGLE_SHEETS_WEBAPP_URL (consigliato) e/o
 *    VITE_GOOGLE_SHEETS_WEBAPP_URL; oppure solo server URL + VITE_LEADS_SHEET=true.
 */

var SPREADSHEET_ID = "1KpYINWsnrVBvbhaqnvRnFQJV6XqN5jUXJotx9Fe6g0I";
/** Lascia vuoto per usare il primo foglio del file */
var SHEET_NAME = "";

function getTargetSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  if (SHEET_NAME) {
    var sh = ss.getSheetByName(SHEET_NAME);
    if (sh) return sh;
  }
  return ss.getSheets()[0];
}

/**
 * Righe attese (intestazione riga 1):
 * A Stato | B Feedback ricevuto | C Nome | D Azienda | E Settore | F Provincia | G Email | H Telefono | I Messaggio | J Data | K Sorgente | L Campagna | M AdSet | N Ad
 * Le colonne A e B restano vuote per uso interno.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "no body" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);
    var sheet = getTargetSheet_();

    sheet.appendRow([
      "",
      "",
      data.nome || "",
      data.azienda || "",
      data.settore || "",
      data.provincia || "",
      data.email || "",
      data.telefono || "",
      data.messaggio || "",
      data.data || new Date().toISOString(),
      data.sorgente || "",
      data.campagna || "",
      data.adset || "",
      data.ad || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Verifica rapida dopo il deploy (apri l'URL nel browser). */
function doGet() {
  return ContentService.createTextOutput("AMG leads endpoint OK").setMimeType(ContentService.MimeType.TEXT);
}
