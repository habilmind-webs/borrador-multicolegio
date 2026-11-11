// Desplegable de idioma (copia del de socioemociograma). El idioma depende solo del prefijo (/pt, /cat, /en).
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import esFlag from "@/assets/flags/es.png";
import ptFlag from "@/assets/flags/pt.png";
import catFlag from "@/assets/flags/cat.png";
import gbFlag from "@/assets/flags/gb.png";
import { cn } from "@/lib/utils";
import { equivalentPath, useLang, useT, type Lang } from "@/i18n";

const LANGS: Record<Lang, { labelKey: string; flag: string; altKey: string; nameKey: string }> = {
  es: { labelKey: "lang.es.label", flag: esFlag, altKey: "lang.es.flag_alt", nameKey: "nav.espanol" },
  "pt-PT": { labelKey: "lang.pt.label", flag: ptFlag, altKey: "lang.pt.flag_alt", nameKey: "nav.portuguesPT" },
  ca: { labelKey: "lang.ca.label", flag: catFlag, altKey: "lang.ca.flag_alt", nameKey: "nav.catala" },
  en: { labelKey: "lang.en.label", flag: gbFlag, altKey: "lang.en.flag_alt", nameKey: "nav.ingles" },
};

export function LanguageSwitcher({
  className,
  compact = false,
  labelClassName,
  onNavigate,
}: {
  className?: string;
  compact?: boolean;
  /** Clases de la etiqueta ES/PT/CAT/EN (por defecto, como socio: oculta en móvil si compact). */
  labelClassName?: string;
  onNavigate?: () => void;
}) {
  const t = useT();
  const lang = useLang();
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });
  const current = LANGS[lang];
  const others = (Object.keys(LANGS) as Lang[]).filter((l) => l !== lang);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("nav.idioma")}
        className={cn("inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none", className)}
      >
        <img src={current.flag} alt={t(current.altKey)} loading="lazy" className="w-4 h-[11px] object-cover" />
        <span className={labelClassName ?? (compact ? "hidden sm:inline" : undefined)}>{t(current.labelKey)}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background z-[60]">
        {others.map((l) => (
          <DropdownMenuItem asChild key={l}>
            <Link to={equivalentPath(pathname, l, hash)} onClick={onNavigate} className="flex items-center gap-2">
              <img src={LANGS[l].flag} alt={t(LANGS[l].altKey)} className="w-4 h-4 object-cover rounded-full" />
              {t(LANGS[l].nameKey)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
