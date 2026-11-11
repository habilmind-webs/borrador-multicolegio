import { createFileRoute } from "@tanstack/react-router";
import { ogLocale, seoLinks } from "@/i18n/seo";
import { PreciosPage } from "@/pages/precios";

export const Route = createFileRoute("/precios")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Precios — Multicolegio | Habilmind" },
      {
        name: "description",
        content:
          "Elige la opción que mejor se adapte a tu red educativa: prueba gratuita con un mismo grado en todos tus colegios o acceso completo al ecosistema Habilmind.",
      },
      { property: "og:title", content: "Precios — Multicolegio" },
      {
        property: "og:description",
        content:
          "Prueba gratuita con un mismo grado en toda tu red o acceso completo dentro del ecosistema Habilmind.",
      },
      { property: "og:type", content: "website" },
      ...ogLocale("es"),
    ],
    links: seoLinks("precios", "es"),
  }),
  component: PreciosPage,
});
