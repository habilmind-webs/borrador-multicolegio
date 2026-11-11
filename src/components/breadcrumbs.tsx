import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { useT, useLang, localPath } from "@/i18n";

export type Crumb = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const lang = useLang();
  const t = useT();
  const all: Crumb[] = [{ label: t("crumbs.inicio"), to: localPath("home", lang) }, ...items];
  return (
    <nav aria-label={t("crumbs.aria")} className="border-b border-rule bg-surface">
      <ol className="container-academic flex flex-wrap items-center gap-2 py-3 text-xs sm:text-sm text-muted-foreground">
        {all.map((c, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden />}
              {isLast || !c.to ? (
                <span
                  className="font-medium text-foreground inline-flex items-center gap-1.5"
                  aria-current={isLast ? "page" : undefined}
                >
                  {i === 0 && <Home className="w-3.5 h-3.5" aria-hidden />}
                  {c.label}
                </span>
              ) : (
                <Link
                  to={c.to}
                  className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  {i === 0 && <Home className="w-3.5 h-3.5" aria-hidden />}
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
