// Página compartida por la ruta en español y la de /pt/ (multicolegio.com, 10/11/2026).
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useT, useLang, DATOS, rich } from "@/i18n";


export function PreciosPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Breadcrumbs items={[{ label: t("cta.precios") }]} />
      <main>
        <Hero />
        <PlansGrid />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const t = useT();
  return (
    <section className="border-b border-rule">
      <div className="container-academic py-10 lg:py-12 text-center max-w-3xl mx-auto">
        <span className="eyebrow text-muted-foreground">{t("cta.precios")}</span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
          {rich(t("pre.hero.h1"), { span: (c, k) => <span key={k} className="text-muted-foreground">{c}</span> })}
        </h1>
      </div>
    </section>
  );
}

const trustItems = ["pre.trial.t1", "pre.trial.t2", "pre.trial.t3"];

function TrialCard() {
  const t = useT();
  return (
    <article className="bg-background p-5 lg:p-6 flex flex-col border border-rule">
      <span className="eyebrow text-muted-foreground">{t("pre.trial.eyebrow")}</span>
      <h3 className="mt-4 text-xl lg:text-2xl leading-snug">
        {t("pre.trial.h3")}
      </h3>

      <div className="mt-5 pb-5 border-b border-rule">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-medium tracking-tight">{t("pre.trial.precio")}</span>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {t("pre.trial.precio_nota")}
        </p>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {t("pre.trial.texto")}
      </p>

      <ul className="mt-4 space-y-2 flex-1">
        {trustItems.map((label) => (
          <li key={label} className="flex items-start gap-3 text-sm leading-relaxed">
            <Check className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.25} />
            <span>{t(label)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2.5">
        <a
          href="https://go.habilmind.net/webchat/cta/multicolegio?boton=alta-gratis" target="_blank" rel="noopener noreferrer" data-ofelia-cta="multicolegio" data-ofelia-boton="alta-gratis"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
        >
          {t("pre.trial.cta")}
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="https://go.habilmind.net/webchat/cta/multicolegio?boton=reu-multicolegio" target="_blank" rel="noopener noreferrer" data-ofelia-cta="multicolegio" data-ofelia-boton="reu-multicolegio"
          className="inline-flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
        >
          {t("cta.reunion")}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

const habilmindTools = [
  "pre.hab.tool1",
  "pre.hab.tool2",
  "pre.hab.tool3",
  "pre.hab.tool4",
  "pre.hab.tool5",
  "pre.hab.tool6",
  "pre.hab.tool7",
  "pre.hab.tool8",
  "pre.hab.tool9",
  "pre.hab.tool10",
  "pre.hab.tool11",
  "pre.hab.tool12",
  "pre.hab.tool13",
];

const habilmindExtras = [
  "pre.hab.x1",
  "pre.hab.x2",
  "pre.hab.x3",
];

function PlansGrid() {
  const lang = useLang();
  const t = useT();
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <TrialCard />

          <article className="relative bg-card p-5 lg:p-6 flex flex-col border-2 border-[#0095a9] shadow-lg">
            <span className="absolute top-0 right-8 -translate-y-1/2 inline-flex items-center gap-1.5 bg-foreground text-background px-3 py-1 text-xs font-medium rounded-sm uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              {t("pre.hab.badge")}
            </span>

            <span className="eyebrow text-muted-foreground">{t("footer.eco.habilmind.nombre")}</span>

            <h3 className="mt-4 text-xl lg:text-2xl leading-snug">
              {t("pre.hab.h3")}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground pb-5 border-b border-rule">
              {t("pre.hab.p")}
            </p>

            <ul className="mt-5 grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col lg:grid-rows-7 gap-x-4 gap-y-2">
              {habilmindTools.map((tool) => (
                <li key={tool} className="flex items-start gap-2.5 text-xs leading-relaxed">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={2.25} />
                  <span>{t(tool)}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-4 pt-4 border-t border-rule space-y-1.5 flex-1">
              {habilmindExtras.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.25} />
                  <span>{t(f)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={DATOS[lang].habilmind}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
              >
                {t("pre.hab.cta")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://go.habilmind.net/webchat/cta/multicolegio?boton=reu-multicolegio" target="_blank" rel="noopener noreferrer" data-ofelia-cta="multicolegio" data-ofelia-boton="reu-multicolegio"
                className="inline-flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {t("cta.reunion")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
