// Versión en catalán: misma página que src/pages/landing.tsx; solo cambian head() y el idioma (por el prefijo /cat).
import { createFileRoute } from "@tanstack/react-router";
import hero1014 from "@/assets/hero-1014.webp.asset.json";
import hero560 from "@/assets/hero-560.webp.asset.json";
import { LandingPage } from "@/pages/landing";
import { caMeta, seoLinks } from "@/i18n/seo";

export const Route = createFileRoute("/cat/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: caMeta("home"),
    links: [
      ...seoLinks("home", "ca"),
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
