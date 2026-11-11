// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // webs-habilmind: hosting estático; se prerenderizan todas las rutas
    pages: [
      { path: "/" },
      { path: "/desempeno-docente" },
      { path: "/encuestas" },
      { path: "/precios" },
      { path: "/resultados-pedagogicos" },
      { path: "/todos-tus-colegios" },
      { path: "/pt/" },
      { path: "/pt/resultados-pedagogicos" },
      { path: "/pt/inqueritos" },
      { path: "/pt/todos-os-seus-colegios" },
      { path: "/pt/desempenho-docente" },
      { path: "/pt/precos" },
      { path: "/cat/" },
      { path: "/cat/resultats-pedagogics" },
      { path: "/cat/enquestes" },
      { path: "/cat/totes-les-teves-escoles" },
      { path: "/cat/acompliment-docent" },
      { path: "/cat/preus" },
      { path: "/en/" },
      { path: "/en/pedagogical-results" },
      { path: "/en/surveys" },
      { path: "/en/all-your-schools" },
      { path: "/en/teacher-performance" },
      { path: "/en/pricing" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: (page: { path: string }) => !page.path.startsWith("/__l5e/") && !/\.[a-z0-9]{2,5}$/i.test(page.path),
    },
  },
});
