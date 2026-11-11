// Versión en catalán: misma página que src/pages/encuestas.tsx; solo cambian head() y el idioma (por el prefijo /cat).
import { createFileRoute } from "@tanstack/react-router";
import { EncuestasPage } from "@/pages/encuestas";
import { caMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/cat/enquestes")({
  staticData: { sitemap: true },
  head: () => ({
    meta: caMeta("encuestas"),
    links: seoLinks("encuestas", "ca"),
  }),
  component: EncuestasPage,
});
