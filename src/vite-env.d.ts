/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL dell'app web Google Apps Script che esegue doPost e append sul foglio */
  readonly VITE_GOOGLE_SHEETS_WEBAPP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
