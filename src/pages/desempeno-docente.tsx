// Página compartida por la ruta en español y la de /pt/ (multicolegio.com, 10/11/2026).
import { Link } from "@tanstack/react-router";
import { ExpandableVideo } from "@/components/expandable-video";
import seguimientoEncuesta360Asset from "@/assets/seguimiento_encuesta360.mp4.asset.json";
import visionGlobalEncuesta360Asset from "@/assets/vision_global_encuesta360.mp4.asset.json";
import recorridoSeccionesEncuesta360Asset from "@/assets/recorrido_secciones_encuesta360.mp4.asset.json";
import recorridoSeguimientoResultadosEncuesta360Asset from "@/assets/recorrido_seguimiento_resultados_encuesta360.mp4.asset.json";
import {
  ArrowRight,
  Activity,
  FileText,
  Target,
  Users,
  ImageIcon,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HabilmindSubpageStrip } from "@/components/habilmind-subpage-strip";
import { useT, useLang, localPath } from "@/i18n";


export function EvaluacionPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Breadcrumbs items={[{ label: t("home.eva.eyebrow") }]} />
      <main>
        <Hero />
        <HabilmindSubpageStrip />
        <AvanceCampaña />
        <ResultadosGlobales />
        <QuePuedesObtener />
        <MejoraContinua />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}


function MediaPlaceholder({ label }: { label: string }) {
  const t = useT();
  return (
    <div className="relative aspect-[16/10] w-full rounded-md border border-dashed border-rule bg-surface overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-rule) 1px, transparent 1px), linear-gradient(90deg, var(--color-rule) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-rule">
          <ImageIcon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
        </span>
        <span className="eyebrow">{t("placeholder.eyebrow")}</span>
        <p className="text-sm text-foreground/80 max-w-md leading-snug">{label}</p>
      </div>
    </div>
  );
}

function Hero() {
  const lang = useLang();
  const t = useT();
  return (
    <section className="border-b border-rule">
      <div className="container-academic py-20 lg:py-24 text-center max-w-3xl mx-auto">
        <span className="eyebrow text-muted-foreground">{t("doc.hero.eyebrow")}</span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
          {t("home.eva.h3")}
        </h1>
        <p className="mt-6 text-lg lg:text-xl leading-snug text-foreground/85">
          {t("doc.hero.sub")}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {t("doc.meta.description")}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t("doc.meta.og_description")}
        </p>
        <div className="mt-10">
          <Link
            to={localPath("precios", lang)}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
          >
            {t("cta.precios")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}



function AvanceCampaña() {
  const t = useT();
  return (
    <section className="border-b border-rule">
      <div className="container-academic py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl lg:text-3xl leading-tight text-balance">
              {t("doc.av.h2")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                {t("doc.av.p1")}
              </p>
              <p>
                {t("doc.av.p2")}
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ExpandableVideo
              src={seguimientoEncuesta360Asset.url}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultadosGlobales() {
  const t = useT();
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ExpandableVideo
              src={visionGlobalEncuesta360Asset.url}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule"
            />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl leading-tight text-balance">
              {t("doc.glob.h2")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                {t("doc.glob.p1")}
              </p>
              <p>
                {t("doc.glob.p2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuePuedesObtener() {
  const t = useT();
  const items = [
    {
      Icon: Activity,
      title: t("doc.obt.1.t"),
      desc: t("doc.obt.1.d"),
    },
    {
      Icon: FileText,
      title: t("home.eva.b2"),
      desc: t("doc.obt.2.d"),
    },
    {
      Icon: Target,
      title: t("doc.obt.3.t"),
      desc: t("doc.obt.3.d"),
    },
    {
      Icon: Users,
      title: t("doc.obt.4.t"),
      desc: t("doc.obt.4.d"),
    },
  ];

  return (
    <section className="border-b border-rule">
      <div className="container-academic py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance max-w-3xl">
          {t("doc.obt.h2")}
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="border border-rule rounded-sm bg-background p-6 flex flex-col gap-4"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-surface border border-rule">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </span>
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ExpandableVideo
            src={recorridoSeccionesEncuesta360Asset.url}
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule"
          />
        </div>
      </div>
    </section>
  );
}

function MejoraContinua() {
  const t = useT();
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("doc.mej.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-foreground/85">
          <p>
            {t("doc.mej.p1")}
          </p>
          <p>
            {t("doc.mej.p2")}
          </p>
          <p>
            {t("doc.mej.p3")}
          </p>
        </div>
      </div>
      <div className="container-academic pb-20 lg:pb-24">
        <ExpandableVideo
          src={recorridoSeguimientoResultadosEncuesta360Asset.url}
          className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule"
        />
      </div>
    </section>
  );
}

function FinalCTA() {
  const lang = useLang();
  const t = useT();
  return (
    <section id="demo" className="border-b border-rule">
      <div className="container-academic py-20 lg:py-28 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance max-w-2xl mx-auto">
          {t("doc.final.h2")}
        </h2>
        <p className="mt-6 text-base lg:text-lg leading-relaxed text-foreground/85 max-w-xl mx-auto">
          {t("doc.final.p")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={localPath("precios", lang)}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
          >
            {t("cta.precios")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
