import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initConsentScripts } from "../lib/consent-scripts";
import CookieConsent from "../components/CookieConsent";
import { FlashNoticeBanner } from "../components/flash-notice-banner";
import { useT, useLang, localPath, HTML_LANG } from "@/i18n";
import { extraOgLocaleAlternates } from "@/i18n/seo";

function NotFoundComponent() {
  const lang = useLang();
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("notfound.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("notfound.text")}
        </p>
        <div className="mt-6">
          <Link
            to={localPath("home", lang)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("notfound.home")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  const t = useT();
  const err = error instanceof Error ? error : new Error(String(error));
  console.error(err);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(err, { boundary: "tanstack_root_error_component" });
  }, [err]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("error.title")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("error.text")}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("error.retry")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("notfound.home")}
          </a>
        </div>
      </div>
    </div>
  );
}

const LazyErrorComponent = lazy(() =>
  Promise.resolve({ default: ErrorComponent }),
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Multicolegio — Dirige tu red educativa desde un único panel" },
      { name: "description", content: "Multicolegio centraliza los datos clave de todos tus centros: resultados, encuestas y evaluación docente en una visión global para dirección." },
      // BORRADOR: noindex mientras sea borrador (el staging además envía X-Robots-Tag)
      { name: "robots", content: "noindex, nofollow" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Multicolegio — Dirige tu red educativa desde un único panel" },
      { property: "og:description", content: "Multicolegio centraliza los datos clave de todos tus centros: resultados, encuestas y evaluación docente en una visión global para dirección." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Multicolegio — Dirige tu red educativa desde un único panel" },
      { name: "twitter:description", content: "Multicolegio centraliza los datos clave de todos tus centros: resultados, encuestas y evaluación docente en una visión global para dirección." },
      { property: "og:image", content: "https://multicolegio.com/__l5e/assets-v1/f04b3e97-b9e3-422b-ab0b-d902dc6a2963/multicolegio_og_hero.jpg" },
      { name: "twitter:image", content: "https://multicolegio.com/__l5e/assets-v1/f04b3e97-b9e3-422b-ab0b-d902dc6a2963/multicolegio_og_hero.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [{ src: "https://go.habilmind.net/webchat/widget.js", async: true }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: LazyErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const lang = useLang();
  return (
    <html lang={HTML_LANG[lang]}>
      <head>
        <HeadContent />
        {extraOgLocaleAlternates(lang).map((c) => (
          <meta key={c} property="og:locale:alternate" content={c} />
        ))}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    initConsentScripts();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <FlashNoticeBanner />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}
