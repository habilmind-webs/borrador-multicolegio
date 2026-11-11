import habilmindLogoAsset from "@/assets/habilmind_logo.png.asset.json";
import { useT, rich } from "@/i18n";

export function HabilmindSubpageStrip() {
  const t = useT();
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 text-center sm:text-left">
          <img
            src={habilmindLogoAsset.url}
            alt={t("strip.logo.alt")}
            className="h-10 w-auto shrink-0"
            loading="lazy"
            width={1024}
            height={512}
          />
          <span className="hidden sm:block w-px h-6 bg-rule shrink-0" aria-hidden />
          <p className="text-sm sm:text-base leading-relaxed text-foreground/80 max-w-xl">
            {rich(t("strip.texto"), { strong: (c, k) => <strong key={k} className="text-foreground font-semibold">{c}</strong> })}
          </p>
        </div>
      </div>
    </section>
  );
}
