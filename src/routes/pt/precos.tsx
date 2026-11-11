// Versión en portugués de Portugal: misma página que src/pages/precios.tsx; solo cambian head() y el idioma (por el prefijo /pt).
import { createFileRoute } from "@tanstack/react-router";
import { PreciosPage } from "@/pages/precios";
import { ptMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/pt/precos")({
  staticData: { sitemap: true },
  head: () => ({
    meta: ptMeta("precios"),
    links: seoLinks("precios", "pt-PT"),
  }),
  component: PreciosPage,
});
