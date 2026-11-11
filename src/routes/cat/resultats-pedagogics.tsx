// Versión en catalán: misma página que src/pages/resultados-pedagogicos.tsx; solo cambian head() y el idioma (por el prefijo /cat).
import { createFileRoute } from "@tanstack/react-router";
import { ResultadosPage } from "@/pages/resultados-pedagogicos";
import { caMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/cat/resultats-pedagogics")({
  staticData: { sitemap: true },
  head: () => ({
    meta: caMeta("resultados"),
    links: seoLinks("resultados", "ca"),
  }),
  component: ResultadosPage,
});
