// Versión en portugués de Portugal: misma página que src/pages/todos-tus-colegios.tsx; solo cambian head() y el idioma (por el prefijo /pt).
import { createFileRoute } from "@tanstack/react-router";
import { GestionPage } from "@/pages/todos-tus-colegios";
import { ptMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/pt/todos-os-seus-colegios")({
  staticData: { sitemap: true },
  head: () => ({
    meta: ptMeta("colegios"),
    links: seoLinks("colegios", "pt-PT"),
  }),
  component: GestionPage,
});
