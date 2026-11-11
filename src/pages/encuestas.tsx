// Página compartida por la ruta en español y la de /pt/ (multicolegio.com, 10/11/2026).
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Building2,
  List,
  MessageSquare,
  Smile,
  GraduationCap,
  BookOpen,
  Users,
  ImageIcon,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HabilmindSubpageStrip } from "@/components/habilmind-subpage-strip";
import { ExpandableVideo } from "@/components/expandable-video";
import resultadosComparativosEncuestasAsset from "@/assets/resultados_comparativos_encuestas.mp4.asset.json";
import recorridoSeccionesEncuestasAsset from "@/assets/recorrido_secciones_encuestas.mp4.asset.json";
import filtrosEncuestasAsset from "@/assets/filtros_encuestas.mp4.asset.json";
import { useT, useLang, localPath } from "@/i18n";


export function EncuestasPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Breadcrumbs items={[{ label: t("enc.crumb") }]} />
      <main>
        <Hero />
        <HabilmindSubpageStrip />
        <ResultadosComparativos />
        <QuePuedesAnalizar />
        <ComprensionReal />
        <InformacionUtil />
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
        <span className="eyebrow text-muted-foreground">{t("enc.hero.eyebrow")}</span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
          {t("home.enc.h3")}
        </h1>
        <p className="mt-6 text-lg lg:text-xl leading-snug text-foreground/85">
          {t("enc.hero.sub")}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {t("enc.meta.description")}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t("enc.meta.og_description")}
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



function ResultadosComparativos() {
  const t = useT();
  return (
    <section className="border-b border-rule">
      <div className="container-academic py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl lg:text-3xl leading-tight text-balance">
              {t("enc.comp.h2")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                {t("enc.comp.p1")}
              </p>
              <p>
                {t("enc.comp.p2")}
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 flex items-center justify-center">
            <ExpandableVideo src={resultadosComparativosEncuestasAsset.url} className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule" />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuePuedesAnalizar() {
  const t = useT();
  const items = [
    {
      Icon: Heart,
      title: t("enc.que.1.t"),
      desc: t("enc.que.1.d"),
    },
    {
      Icon: Building2,
      title: t("res.que.1.t"),
      desc: t("enc.que.2.d"),
    },
    {
      Icon: List,
      title: t("enc.que.3.t"),
      desc: t("enc.que.3.d"),
    },
    {
      Icon: MessageSquare,
      title: t("enc.que.4.t"),
      desc: t("enc.que.4.d"),
    },
  ];

  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance max-w-3xl">
          {t("res.que.h2")}
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
          <ExpandableVideo src={recorridoSeccionesEncuestasAsset.url} className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule" />
        </div>
      </div>
    </section>
  );
}

function ComprensionReal() {
  const t = useT();
  return (
    <section className="border-b border-rule">
      <div className="container-academic py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("enc.comp2.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-foreground/85">
          <p>
            {t("enc.comp2.p1")}
          </p>
          <p>
            {t("enc.comp2.p2")}
          </p>
        </div>
      </div>
      <div className="container-academic pb-20 lg:pb-24">
        <ExpandableVideo src={filtrosEncuestasAsset.url} className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule" />
      </div>
    </section>
  );
}

function InformacionUtil() {
  const t = useT();
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("enc.util.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-foreground/85">
          <p>
            {t("enc.util.p1")}
          </p>
          <p>
            {t("enc.util.p2")}
          </p>
        </div>
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
          {t("enc.final.h2")}
        </h2>
        <p className="mt-6 text-base lg:text-lg leading-relaxed text-foreground/85 max-w-xl mx-auto">
          {t("enc.final.p")}
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
