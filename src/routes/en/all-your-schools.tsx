// Versión en inglés británico: misma página que src/pages/todos-tus-colegios.tsx; solo cambian head() y el idioma (por el prefijo /en).
import { createFileRoute } from "@tanstack/react-router";
import { GestionPage } from "@/pages/todos-tus-colegios";
import { enMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/en/all-your-schools")({
  staticData: { sitemap: true },
  head: () => ({
    meta: enMeta("colegios"),
    links: seoLinks("colegios", "en"),
  }),
  component: GestionPage,
});
