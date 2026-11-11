// Versión en portugués de Portugal: misma página que src/pages/desempeno-docente.tsx; solo cambian head() y el idioma (por el prefijo /pt).
import { createFileRoute } from "@tanstack/react-router";
import { EvaluacionPage } from "@/pages/desempeno-docente";
import { ptMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/pt/desempenho-docente")({
  staticData: { sitemap: true },
  head: () => ({
    meta: ptMeta("desempeno"),
    links: seoLinks("desempeno", "pt-PT"),
  }),
  component: EvaluacionPage,
});
