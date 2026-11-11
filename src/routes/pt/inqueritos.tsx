// Versión en portugués de Portugal: misma página que src/pages/encuestas.tsx; solo cambian head() y el idioma (por el prefijo /pt).
import { createFileRoute } from "@tanstack/react-router";
import { EncuestasPage } from "@/pages/encuestas";
import { ptMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/pt/inqueritos")({
  staticData: { sitemap: true },
  head: () => ({
    meta: ptMeta("encuestas"),
    links: seoLinks("encuestas", "pt-PT"),
  }),
  component: EncuestasPage,
});
