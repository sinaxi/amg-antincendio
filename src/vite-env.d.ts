/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface ImportMetaEnv {
  /** URL dell'app web Google Apps Script che esegue doPost e append sul foglio */
  readonly VITE_GOOGLE_SHEETS_WEBAPP_URL?: string;
  /** Se "true", abilita il salvataggio foglio anche senza URL nel bundle (usa GOOGLE_SHEETS_WEBAPP_URL su Vercel) */
  readonly VITE_LEADS_SHEET?: string;
  /** Base URL dell’API Vercel in dev (es. http://localhost:3000 con `vercel dev`) */
  readonly VITE_LEAD_API_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
