/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL dell'app web Google Apps Script che esegue doPost e append sul foglio */
  readonly VITE_GOOGLE_SHEETS_WEBAPP_URL?: string;
  /** Base URL dell’API Vercel in dev (es. http://localhost:3000 con `vercel dev`) */
  readonly VITE_LEAD_API_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
