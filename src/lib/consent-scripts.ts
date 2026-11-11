/**
 * Habilmind - Gestor de scripts condicionales por consentimiento
 *
 * - Lee el consentimiento guardado en localStorage.
 * - Mantiene un registro central de scripts de terceros.
 * - Solo carga scripts cuya categoría ha sido aceptada.
 * - Es idempotente: no vuelve a cargar scripts ya cargados.
 * - Escucha el evento `habilmind:cookie-consent` para reaccionar en tiempo real.
 */

export type ConsentCategory =
  | "necessary"
  | "analytics"
  | "personalization"
  | "advertising"
  | "third_party";

export interface ConsentRecord {
  date: string; // ISO date (YYYY-MM-DD)
  time: string; // ISO time (HH:mm:ss)
  timestamp: string; // full ISO timestamp
  accepted: ConsentCategory[];
  rejected: ConsentCategory[];
}

export const CONSENT_STORAGE_KEY = "habilmind_cookie_consent_v1";
export const CONSENT_EVENT = "habilmind:cookie-consent";
export const OPEN_PREFERENCES_EVENT = "habilmind:open-cookie-preferences";

interface ManagedScript {
  id: string;
  category: Exclude<ConsentCategory, "necessary">;
  src?: string;
  inline?: string;
  attrs?: Record<string, string>;
}

/**
 * Registro central de scripts de terceros.
 * Añade aquí cualquier script no esencial que la web use en el futuro.
 * Actualmente la web NO carga scripts de terceros (analytics, ads, píxeles, etc.).
 */
const SCRIPT_REGISTRY: ManagedScript[] = [
  // Ejemplo (deshabilitado por defecto):
  // {
  //   id: "ga4",
  //   category: "analytics",
  //   src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX",
  //   attrs: { async: "true" },
  // },
];

const loadedScripts = new Set<string>();

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentRecord;
  } catch {
    return null;
  }
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  const record = readConsent();
  if (!record) return false;
  return record.accepted.includes(category);
}

function injectScript(script: ManagedScript) {
  if (loadedScripts.has(script.id)) return;
  if (typeof document === "undefined") return;

  const el = document.createElement("script");
  el.dataset.habilmindConsentId = script.id;
  if (script.attrs) {
    for (const [k, v] of Object.entries(script.attrs)) {
      el.setAttribute(k, v);
    }
  }
  if (script.src) el.src = script.src;
  if (script.inline) el.text = script.inline;
  document.head.appendChild(el);
  loadedScripts.add(script.id);
}

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
let gaLoading = false;

function ensureGtagStub() {
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
  }
  return w.gtag;
}

async function applyGoogleAnalytics() {
  const w = window as GtagWindow;
  const granted = hasConsent("analytics");
  if (!granted) {
    if (w.gtag) w.gtag("consent", "update", { analytics_storage: "denied" });
    return;
  }
  if (loadedScripts.has("ga4")) {
    w.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  if (gaLoading) return;
  gaLoading = true;
  try {
    const { getGaMeasurementId } = await import("./ga.functions");
    const { id } = await getGaMeasurementId();
    if (!id || !hasConsent("analytics")) return;
    const gtag = ensureGtagStub();
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    gtag("consent", "update", { analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("config", id);
    const el = document.createElement("script");
    el.async = true;
    el.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(el);
    loadedScripts.add("ga4");
  } catch (e) {
    console.error("GA4 load failed", e);
  } finally {
    gaLoading = false;
  }
}

export function applyConsent() {
  for (const script of SCRIPT_REGISTRY) {
    if (hasConsent(script.category)) {
      injectScript(script);
    }
  }
  void applyGoogleAnalytics();
}

export function saveConsent(accepted: ConsentCategory[]) {
  const all: ConsentCategory[] = [
    "necessary",
    "analytics",
    "personalization",
    "advertising",
    "third_party",
  ];
  const acceptedSet = new Set<ConsentCategory>([...accepted, "necessary"]);
  const rejected = all.filter((c) => !acceptedSet.has(c));
  const now = new Date();
  const record: ConsentRecord = {
    date: now.toISOString().slice(0, 10),
    time: now.toISOString().slice(11, 19),
    timestamp: now.toISOString(),
    accepted: Array.from(acceptedSet),
    rejected,
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
  }
  return record;
}

/** Reabre el panel de preferencias desde cualquier lugar de la app. */
export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

let initialized = false;
export function initConsentScripts() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  applyConsent();

  window.addEventListener(CONSENT_EVENT, () => {
    applyConsent();
  });
}
