// SEO por idioma: canonical absoluto, hreflang recíproco (es, pt-PT, ca, en-GB, x-default) y og:locale.
import { fixedT } from "./index";
import { LANGS_ORDER, ROUTES, SITE_URL, type Lang, type RouteKey } from "./routes";

export function absUrl(key: RouteKey, lang: Lang): string {
  const p = ROUTES[key][lang];
  return SITE_URL + (p === "/" ? "/" : p);
}

export function seoLinks(key: RouteKey, lang: Lang) {
  return [
    { rel: "canonical", href: absUrl(key, lang) },
    { rel: "alternate", hrefLang: "es", href: absUrl(key, "es") },
    { rel: "alternate", hrefLang: "pt-PT", href: absUrl(key, "pt-PT") },
    { rel: "alternate", hrefLang: "ca", href: absUrl(key, "ca") },
    { rel: "alternate", hrefLang: "en-GB", href: absUrl(key, "en") },
    { rel: "alternate", hrefLang: "x-default", href: absUrl(key, "es") },
  ];
}

const OG_LOCALE: Record<Lang, string> = { es: "es_ES", "pt-PT": "pt_PT", ca: "ca_ES", en: "en_GB" };

function alternates(lang: Lang): string[] {
  return LANGS_ORDER.filter((l) => l !== lang).map((l) => OG_LOCALE[l]);
}

/**
 * og:locale y el primer og:locale:alternate. El head() de TanStack Router deja un solo meta por «property»,
 * así que los demás og:locale:alternate los pinta RootShell con extraOgLocaleAlternates().
 */
export function ogLocale(lang: Lang) {
  return [
    { property: "og:locale", content: OG_LOCALE[lang] },
    { property: "og:locale:alternate", content: alternates(lang)[0] },
  ];
}

/** Resto de og:locale:alternate (los que no caben en head() por la deduplicación de TanStack). */
export function extraOgLocaleAlternates(lang: Lang): string[] {
  return alternates(lang).slice(1);
}

const META: Record<RouteKey, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  home: { title: "home.meta.title", description: "home.meta.description", ogTitle: "home.meta.title", ogDescription: "home.meta.description" },
  resultados: { title: "res.meta.title", description: "res.meta.description", ogTitle: "res.meta.title", ogDescription: "res.meta.og_description" },
  encuestas: { title: "enc.meta.title", description: "enc.meta.description", ogTitle: "enc.meta.title", ogDescription: "enc.meta.og_description" },
  colegios: { title: "col.meta.title", description: "col.meta.description", ogTitle: "col.meta.title", ogDescription: "col.meta.og_description" },
  desempeno: { title: "doc.meta.title", description: "doc.meta.description", ogTitle: "doc.meta.title", ogDescription: "doc.meta.og_description" },
  precios: { title: "pre.meta.title", description: "pre.meta.description", ogTitle: "pre.meta.og_title", ogDescription: "pre.meta.og_description" },
};

/** meta[] completo de una página traducida (title, description, og:*, twitter:*, og:locale). */
export function langMeta(key: RouteKey, lang: Lang) {
  const t = fixedT(lang);
  const m = META[key];
  return [
    { title: t(m.title) },
    { name: "description", content: t(m.description) },
    { property: "og:title", content: t(m.ogTitle) },
    { property: "og:description", content: t(m.ogDescription) },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: t(m.ogTitle) },
    { name: "twitter:description", content: t(m.ogDescription) },
    ...ogLocale(lang),
  ];
}

/** meta[] completo de una página en portugués. */
export function ptMeta(key: RouteKey) {
  return langMeta(key, "pt-PT");
}

/** meta[] completo de una página en catalán. */
export function caMeta(key: RouteKey) {
  return langMeta(key, "ca");
}

/** meta[] completo de una página en inglés británico. */
export function enMeta(key: RouteKey) {
  return langMeta(key, "en");
}
