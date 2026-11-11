// Tabla de rutas por idioma (multicolegio.com /pt/, /cat/ y /en/, 10/11/2026)
export type Lang = "es" | "pt-PT" | "ca" | "en";
export type RouteKey = "home" | "resultados" | "encuestas" | "colegios" | "desempeno" | "precios";

export const SITE_URL = "https://multicolegio.com";

export const LANGS_ORDER: Lang[] = ["es", "pt-PT", "ca", "en"];

export const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { es: "/", "pt-PT": "/pt/", ca: "/cat/", en: "/en/" },
  resultados: { es: "/resultados-pedagogicos", "pt-PT": "/pt/resultados-pedagogicos", ca: "/cat/resultats-pedagogics", en: "/en/pedagogical-results" },
  encuestas: { es: "/encuestas", "pt-PT": "/pt/inqueritos", ca: "/cat/enquestes", en: "/en/surveys" },
  colegios: { es: "/todos-tus-colegios", "pt-PT": "/pt/todos-os-seus-colegios", ca: "/cat/totes-les-teves-escoles", en: "/en/all-your-schools" },
  desempeno: { es: "/desempeno-docente", "pt-PT": "/pt/desempenho-docente", ca: "/cat/acompliment-docent", en: "/en/teacher-performance" },
  precios: { es: "/precios", "pt-PT": "/pt/precos", ca: "/cat/preus", en: "/en/pricing" },
};

/** El idioma depende SOLO del prefijo: /pt y /pt/* son pt-PT, /cat y /cat/* son ca, /en y /en/* son en, el resto es. */
export function langFromPath(pathname: string): Lang {
  if (pathname === "/pt" || pathname.startsWith("/pt/")) return "pt-PT";
  if (pathname === "/cat" || pathname.startsWith("/cat/")) return "ca";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "es";
}

/** Valor de <html lang> y de hreflang por idioma (en es inglés británico). */
export const HTML_LANG: Record<Lang, string> = { es: "es", "pt-PT": "pt-PT", ca: "ca", en: "en-GB" };

export function localPath(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

function norm(p: string): string {
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "/pt") return "/pt/";
  if (p === "/cat") return "/cat/";
  if (p === "/en") return "/en/";
  return p;
}

export function routeKeyFromPath(pathname: string): RouteKey | null {
  const p = norm(pathname);
  for (const k of Object.keys(ROUTES) as RouteKey[]) {
    if (LANGS_ORDER.some((l) => norm(ROUTES[k][l]) === p)) return k;
  }
  return null;
}

/** Misma página en otro idioma (si no se encuentra, la home de ese idioma). Conserva el #hash. */
export function equivalentPath(pathname: string, lang: Lang, hash = ""): string {
  const k = routeKeyFromPath(pathname) ?? "home";
  const h = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";
  return ROUTES[k][lang] + h;
}
