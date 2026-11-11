// Versión en catalán: misma página que src/pages/desempeno-docente.tsx; solo cambian head() y el idioma (por el prefijo /cat).
import { createFileRoute } from "@tanstack/react-router";
import { EvaluacionPage } from "@/pages/desempeno-docente";
import { caMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/cat/acompliment-docent")({
  staticData: { sitemap: true },
  head: () => ({
    meta: caMeta("desempeno"),
    links: seoLinks("desempeno", "ca"),
  }),
  component: EvaluacionPage,
});
