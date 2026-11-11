import { createFileRoute } from "@tanstack/react-router";
import { ogLocale, seoLinks } from "@/i18n/seo";
import { EvaluacionPage } from "@/pages/desempeno-docente";

export const Route = createFileRoute("/desempeno-docente")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Evaluación del desempeño docente — Multicolegio" },
      {
        name: "description",
        content:
          "Multicolegio permite coordinar campañas de evaluación del desempeño docente y directivo en todos los colegios de la red.",
      },
      { property: "og:title", content: "Evaluación del desempeño docente — Multicolegio" },
      {
        property: "og:description",
        content:
          "Supervisa el avance de cada campaña, accede a informes individuales y analiza resultados globales por centro, persona, dimensión y competencia evaluada.",
      },
      { property: "og:type", content: "website" },
      ...ogLocale("es"),
    ],
    links: seoLinks("desempeno", "es"),
  }),
  component: EvaluacionPage,
});
