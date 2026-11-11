// Versión en inglés británico: misma página que src/pages/encuestas.tsx; solo cambian head() y el idioma (por el prefijo /en).
import { createFileRoute } from "@tanstack/react-router";
import { EncuestasPage } from "@/pages/encuestas";
import { enMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/en/surveys")({
  staticData: { sitemap: true },
  head: () => ({
    meta: enMeta("encuestas"),
    links: seoLinks("encuestas", "en"),
  }),
  component: EncuestasPage,
});
