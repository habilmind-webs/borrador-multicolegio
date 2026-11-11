import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-360.webp.asset.json";
import { useT, useLang, localPath, type RouteKey } from "@/i18n";

const NAV: { route: RouteKey; label: string }[] = [
  { route: "resultados", label: "nav.resultados" },
  { route: "encuestas", label: "nav.encuestas" },
  { route: "colegios", label: "nav.colegios" },
  { route: "desempeno", label: "nav.desempeno" },
];

export function SiteHeader() {
  const lang = useLang();
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <header
      className="border-b border-rule sticky z-40 bg-background/95 backdrop-blur"
      style={{ top: "var(--flash-banner-height, 0px)" }}
    >
      <div className="container-academic flex h-16 items-center justify-between">
        <Link to={localPath("home", lang)} className="flex items-center">
          <img
            src={logoAsset.url}
            width={360}
            height={132}
            alt={t("header.logo.alt")}
            className="h-11 w-auto"
            style={{ maxWidth: "260px" }}
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((l) => (
            <Link
              key={l.route}
              to={localPath(l.route, lang)}
              className={cn("text-sm font-medium", lang === "pt-PT" ? "px-[9px]" : "px-3", "py-2 hover:text-accent transition-colors whitespace-nowrap")}
            >
              {t(l.label)}
            </Link>
          ))}
          <a
            href="https://go.habilmind.net/webchat/cta/multicolegio?boton=encabezado" target="_blank" rel="noopener noreferrer" data-ofelia-cta="multicolegio" data-ofelia-boton="encabezado"
            className="inline-flex items-center gap-2 text-sm font-medium border border-foreground px-4 py-2 rounded-sm hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            {t("cta.reunion")}
          </a>
          <Link
            to={localPath("precios", lang)}
            className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-sm hover:bg-foreground/85 transition-colors whitespace-nowrap"
          >
            {t("cta.precios")} <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 xl:hidden shrink-0">
          <LanguageSwitcher compact className="border border-border rounded-none px-2.5 py-1.5 text-xs" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("header.menu.cerrar") : t("header.menu.abrir")}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-foreground/80"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {/* Selector de idioma en escritorio: fuera de .container-academic para que no se mueva nada de la cabecera */}
      {/* En /cat/ el trigger con «CAT» es más ancho: el selector sigue compacto hasta 1366 px (en ES y PT, hasta 1336). */}
      <LanguageSwitcher
        compact
        labelClassName={lang === "ca" ? "hidden min-[1366px]:inline" : "hidden min-[1336px]:inline"}
        className={
          lang === "ca"
            ? "hidden xl:inline-flex absolute top-1/2 -translate-y-1/2 right-2 min-[1366px]:right-4 border border-border rounded-none px-1.5 min-[1366px]:px-2.5 py-1.5 text-xs"
            : "hidden xl:inline-flex absolute top-1/2 -translate-y-1/2 right-2 min-[1336px]:right-4 border border-border rounded-none px-1.5 min-[1336px]:px-2.5 py-1.5 text-xs"
        }
      />
      {open && (
        <div className="xl:hidden border-t border-rule bg-background">
          <nav className="container-academic flex flex-col py-3">
            {NAV.map((l) => (
              <Link
                key={l.route}
                to={localPath(l.route, lang)}
                onClick={() => setOpen(false)}
                className="text-sm py-3 border-b border-rule"
              >
                {t(l.label)}
              </Link>
            ))}
            <a
              href="https://go.habilmind.net/webchat/cta/multicolegio?boton=encabezado" target="_blank" rel="noopener noreferrer" data-ofelia-cta="multicolegio" data-ofelia-boton="encabezado"
              onClick={() => setOpen(false)}
              className="mt-3 text-sm font-medium border border-foreground px-4 py-2 rounded-sm inline-flex items-center gap-2 self-start"
            >
              {t("cta.reunion")}
            </a>
            <Link
              to={localPath("precios", lang)}
              onClick={() => setOpen(false)}
              className="mt-3 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-sm inline-flex items-center gap-2 self-start"
            >
              {t("cta.precios")} <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
