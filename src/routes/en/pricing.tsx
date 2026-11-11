// Versión en inglés británico: misma página que src/pages/precios.tsx; solo cambian head() y el idioma (por el prefijo /en).
import { createFileRoute } from "@tanstack/react-router";
import { PreciosPage } from "@/pages/precios";
import { enMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/en/pricing")({
  staticData: { sitemap: true },
  head: () => ({
    meta: enMeta("precios"),
    links: seoLinks("precios", "en"),
  }),
  component: PreciosPage,
});
