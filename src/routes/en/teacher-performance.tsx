// Versión en inglés británico: misma página que src/pages/desempeno-docente.tsx; solo cambian head() y el idioma (por el prefijo /en).
import { createFileRoute } from "@tanstack/react-router";
import { EvaluacionPage } from "@/pages/desempeno-docente";
import { enMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/en/teacher-performance")({
  staticData: { sitemap: true },
  head: () => ({
    meta: enMeta("desempeno"),
    links: seoLinks("desempeno", "en"),
  }),
  component: EvaluacionPage,
});
