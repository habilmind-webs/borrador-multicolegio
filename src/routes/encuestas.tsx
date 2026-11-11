import { createFileRoute } from "@tanstack/react-router";
import { ogLocale, seoLinks } from "@/i18n/seo";
import { EncuestasPage } from "@/pages/encuestas";

export const Route = createFileRoute("/encuestas")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Encuestas comparativas de la comunidad educativa — Multicolegio" },
      {
        name: "description",
        content:
          "Multicolegio permite analizar las encuestas aplicadas en todos los colegios de tu red y comparar sus resultados desde un único panel.",
      },
      { property: "og:title", content: "Encuestas comparativas de la comunidad educativa — Multicolegio" },
      {
        property: "og:description",
        content:
          "Consulta la percepción de familias, alumnos, docentes y equipos para detectar fortalezas, áreas de mejora y diferencias relevantes entre centros.",
      },
      { property: "og:type", content: "website" },
      ...ogLocale("es"),
    ],
    links: seoLinks("encuestas", "es"),
  }),
  component: EncuestasPage,
});
