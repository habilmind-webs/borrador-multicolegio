// Versión en catalán: misma página que src/pages/precios.tsx; solo cambian head() y el idioma (por el prefijo /cat).
import { createFileRoute } from "@tanstack/react-router";
import { PreciosPage } from "@/pages/precios";
import { caMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/cat/preus")({
  staticData: { sitemap: true },
  head: () => ({
    meta: caMeta("precios"),
    links: seoLinks("precios", "ca"),
  }),
  component: PreciosPage,
});
