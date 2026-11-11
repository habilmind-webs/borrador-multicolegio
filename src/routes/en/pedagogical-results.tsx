// Versión en inglés británico: misma página que src/pages/resultados-pedagogicos.tsx; solo cambian head() y el idioma (por el prefijo /en).
import { createFileRoute } from "@tanstack/react-router";
import { ResultadosPage } from "@/pages/resultados-pedagogicos";
import { enMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/en/pedagogical-results")({
  staticData: { sitemap: true },
  head: () => ({
    meta: enMeta("resultados"),
    links: seoLinks("resultados", "en"),
  }),
  component: ResultadosPage,
});
