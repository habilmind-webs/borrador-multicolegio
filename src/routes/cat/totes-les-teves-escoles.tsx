// Versión en catalán: misma página que src/pages/todos-tus-colegios.tsx; solo cambian head() y el idioma (por el prefijo /cat).
import { createFileRoute } from "@tanstack/react-router";
import { GestionPage } from "@/pages/todos-tus-colegios";
import { caMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/cat/totes-les-teves-escoles")({
  staticData: { sitemap: true },
  head: () => ({
    meta: caMeta("colegios"),
    links: seoLinks("colegios", "ca"),
  }),
  component: GestionPage,
});
