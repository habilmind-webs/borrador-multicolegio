import { createFileRoute } from "@tanstack/react-router";
import { ogLocale, seoLinks } from "@/i18n/seo";
import { GestionPage } from "@/pages/todos-tus-colegios";

export const Route = createFileRoute("/todos-tus-colegios")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Acceso directo a cada colegio — Multicolegio" },
      {
        name: "description",
        content:
          "Multicolegio reúne todos los centros de tu red educativa en un único panel para que puedas supervisar su actividad, comparar información clave y acceder a cada colegio.",
      },
      { property: "og:title", content: "Acceso directo a cada colegio — Multicolegio" },
      {
        property: "og:description",
        content:
          "Centraliza la información de tu red educativa y accede directamente a cada centro desde una sola plataforma.",
      },
      { property: "og:type", content: "website" },
      ...ogLocale("es"),
    ],
    links: seoLinks("colegios", "es"),
  }),
  component: GestionPage,
});
