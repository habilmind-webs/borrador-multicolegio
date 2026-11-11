import { createFileRoute } from "@tanstack/react-router";
import { ogLocale, seoLinks } from "@/i18n/seo";
import { ResultadosPage } from "@/pages/resultados-pedagogicos";

export const Route = createFileRoute("/resultados-pedagogicos")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Resultados pedagógicos de la red — Multicolegio" },
      {
        name: "description",
        content:
          "Multicolegio permite consultar los resultados de las pruebas pedagógicas aplicadas en todos los centros de tu red desde un único panel.",
      },
      { property: "og:title", content: "Resultados pedagógicos de la red — Multicolegio" },
      {
        property: "og:description",
        content:
          "Compara colegios, analiza cursos e indicadores, detecta necesidades comunes y reconoce fortalezas para toda la organización.",
      },
      { property: "og:type", content: "website" },
      ...ogLocale("es"),
    ],
    links: seoLinks("resultados", "es"),
  }),
  component: ResultadosPage,
});
