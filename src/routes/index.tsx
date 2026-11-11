import { createFileRoute } from "@tanstack/react-router";
import hero1014 from "@/assets/hero-1014.webp.asset.json";
import hero560 from "@/assets/hero-560.webp.asset.json";
import { ogLocale, seoLinks } from "@/i18n/seo";
import { LandingPage } from "@/pages/landing";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Multicolegio — Dirige tu red educativa desde un único panel" },
      {
        name: "description",
        content:
          "Multicolegio centraliza los datos clave de todos tus centros: resultados, encuestas y evaluación docente en una visión global para dirección.",
      },
      { property: "og:title", content: "Multicolegio — Dirige tu red educativa desde un único panel" },
      {
        property: "og:description",
        content:
          "Multicolegio centraliza los datos clave de todos tus centros: resultados, encuestas y evaluación docente en una visión global para dirección.",
      },
      { property: "og:type", content: "website" },
      ...ogLocale("es"),
    ],
    links: [
      ...seoLinks("home", "es"),
      {
        rel: "preload",
        as: "image",
        href: hero1014.url,
        imageSrcSet: `${hero560.url} 560w, ${hero1014.url} 1014w`,
        imageSizes: "(min-width: 1024px) 672px, (min-width: 768px) 384px, (min-width: 640px) 320px, 280px",
        fetchPriority: "high",
        type: "image/webp",
      },
    ],
  }),
  component: LandingPage,
});
