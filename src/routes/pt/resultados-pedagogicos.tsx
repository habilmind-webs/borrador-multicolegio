// Versión en portugués de Portugal: misma página que src/pages/resultados-pedagogicos.tsx; solo cambian head() y el idioma (por el prefijo /pt).
import { createFileRoute } from "@tanstack/react-router";
import { ResultadosPage } from "@/pages/resultados-pedagogicos";
import { ptMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/pt/resultados-pedagogicos")({
  staticData: { sitemap: true },
  head: () => ({
    meta: ptMeta("resultados"),
    links: seoLinks("resultados", "pt-PT"),
  }),
  component: ResultadosPage,
});
