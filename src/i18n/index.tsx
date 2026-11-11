// Sistema de idiomas de multicolegio.com (igual que socioemociograma): el idioma depende SOLO del prefijo de la ruta.
import i18next, { type TFunction } from "i18next";
import { Fragment, useMemo, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import es from "./es";
import pt from "./pt-PT";
import ca from "./ca";
import en from "./en";
import { langFromPath, type Lang } from "./routes";

export * from "./routes";

export const i18n = i18next.createInstance();
i18n.init({
  resources: { es: { translation: es }, "pt-PT": { translation: pt }, ca: { translation: ca }, en: { translation: en } },
  lng: "es",
  fallbackLng: "es",
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
  initAsync: false,
} as Parameters<typeof i18n.init>[0]);

export function fixedT(lang: Lang): TFunction {
  return i18n.getFixedT(lang);
}

export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return langFromPath(pathname);
}

export function useT(): TFunction {
  const lang = useLang();
  return useMemo(() => fixedT(lang), [lang]);
}

/** Datos que cambian en /pt/, /cat/ y /en/ (_meta.datos_pt, _meta.datos_ca y _meta.datos_en de los JSON de traducciones). */
export const DATOS: Record<Lang, { habilmind: string; expertosBase: string; empleo: string; trust: string; telLabel: string; telHref: string; flashLang: string }> = {
  es: {
    habilmind: "https://www.habilmind.com",
    expertosBase: "https://habilmind.com",
    empleo: "https://www.habilmind.com/empleo",
    trust: "https://trust.habilmind.dev",
    telLabel: "+34 911 676 361",
    telHref: "tel:+34911676361",
    flashLang: "es",
  },
  "pt-PT": {
    habilmind: "https://habilmind.pt",
    expertosBase: "https://habilmind.pt",
    empleo: "https://habilmind.pt/emprego",
    trust: "https://trust.habilmind.dev/pt",
    telLabel: "+351 911 818 097",
    telHref: "tel:+351911818097",
    flashLang: "pt",
  },
  // /cat/: teléfonos y WhatsApp iguales que en español; enlaces a habilmind.cat; flash como socio (lang=cat).
  ca: {
    habilmind: "https://habilmind.cat",
    expertosBase: "https://habilmind.cat",
    empleo: "https://habilmind.cat/feina",
    trust: "https://trust.habilmind.dev/cat",
    telLabel: "+34 911 676 361",
    telHref: "tel:+34911676361",
    flashLang: "cat",
  },
  // /en/: teléfonos y WhatsApp iguales que en español; enlaces a habilmind.uk; flash como socio (lang=en).
  en: {
    habilmind: "https://habilmind.uk",
    expertosBase: "https://habilmind.uk",
    empleo: "https://habilmind.uk/careers",
    trust: "https://trust.habilmind.dev/en",
    telLabel: "+34 911 676 361",
    telHref: "tel:+34911676361",
    flashLang: "en",
  },
};

type Renderer = (children: ReactNode, key: number) => ReactNode;

/**
 * Pinta un texto traducido con etiquetas simples (<strong>, <em>, <a>, <span ...>) usando los elementos
 * reales de la página, para que el HTML quede igual que el original. &nbsp; pasa a espacio duro.
 */
export function rich(text: string, map: Record<string, Renderer>): ReactNode {
  const out: ReactNode[] = [];
  const re = /<(strong|em|a|span)(\s[^>]*)?>([\s\S]*?)<\/\1>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  const nb = (s: string) => s.replace(/&nbsp;/g, "\u00a0");
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(nb(text.slice(last, m.index)));
    const r = map[m[1]];
    out.push(r ? r(nb(m[3]), i++) : nb(m[3]));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(nb(text.slice(last)));
  return <Fragment>{out.map((n, k) => (typeof n === "string" ? n : <Fragment key={k}>{n}</Fragment>))}</Fragment>;
}

export function nbsp(s: string): string {
  return s.replace(/&nbsp;/g, "\u00a0");
}
