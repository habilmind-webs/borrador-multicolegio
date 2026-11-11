// Página compartida por la ruta en español y la de /pt/ (multicolegio.com, 10/11/2026).
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  LayoutDashboard,
  BarChart3,
  ClipboardList,
  UserCheck,
  Building2,
  Filter,
  ThermometerSun,
  ArrowUpRight,
  Gauge,
  Target,
  Sparkles,
  Users,
  Landmark,
  Church,
  GraduationCap,
  ScanEye,
  GitCompare,
  Zap,
  Check,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";
import resultadosVideoAsset from "@/assets/resultados_pedagogicos.mp4.asset.json";
import encuestasVideoAsset from "@/assets/encuestas_comparativas.mp4.asset.json";
import accesoDirectoVideoAsset from "@/assets/acceso_directo_colegio.mp4.asset.json";
import evaluacionDocenteAsset from "@/assets/evaluacion_docente.mp4.asset.json";
import habilmindLogoAsset from "@/assets/habilmind-400.webp.asset.json";
import hero1014 from "@/assets/hero-1014.webp.asset.json";
import hero560 from "@/assets/hero-560.webp.asset.json";
import trust1344 from "@/assets/trust-1344.webp.asset.json";
import trust560 from "@/assets/trust-560.webp.asset.json";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ExpandableVideo } from "@/components/expandable-video";
import { UniversityCollaborations } from "@/components/university-collaborations";
import { ExpertsCarousel } from "@/components/experts-carousel";
import { useT, useLang, localPath, DATOS, rich, nbsp, type RouteKey } from "@/i18n";


const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#gestion", label: "Gestión global" },
  { href: "#resultados", label: "Resultados" },
  { href: "#encuestas", label: "Encuestas" },
  { href: "#evaluacion", label: "Evaluación docente" },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <HabilmindStrip />
        <Problem />
        <FeaturesIntro />
        <FeatureResultados />
        <FeatureEncuestas />
        <FeatureCentros />
        <FeatureEvaluacion />
        <Decisions />
        <AudienceStrip />
        <UniversityCollaborations />
        <ExpertsCarousel />
        <TrustCenter />
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
    <section id="inicio" className="relative border-b border-rule overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-rule) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="relative container-academic grid lg:grid-cols-12 gap-10 lg:gap-16 py-20 lg:py-28">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="eyebrow mb-6">{t("home.hero.eyebrow")}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
            {nbsp(t("home.hero.h1"))}
          </h1>
          <p className="mt-6 text-xl lg:text-2xl leading-snug text-foreground/85 max-w-xl">
            {t("home.hero.subtitulo")}
          </p>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
            {t("home.hero.texto")}
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="eyebrow text-muted-foreground text-sm">{t("home.hero.desarrollado")}</span>
            <a
              href={DATOS[lang].habilmind}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
              aria-label={t("home.hero.habilmind.aria")}
            >
              <img src={habilmindLogoAsset.url} alt={t("footer.eco.habilmind.nombre")} className="h-14 w-auto" width={400} height={225} />
              <span
                className="text-foreground/70 group-hover:text-foreground transition-colors text-lg"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to={localPath("precios", lang)}
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
            >
              {t("cta.precios")} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://go.habilmind.net/webchat/cta/multicolegio?boton=hero" target="_blank" rel="noopener noreferrer" data-ofelia-cta="multicolegio" data-ofelia-boton="hero"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              {t("cta.reunion")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
        <div className="lg:col-span-5 flex items-center justify-center">
          <img
            src={hero1014.url}
            srcSet={`${hero560.url} 560w, ${hero1014.url} 1014w`}
            sizes="(min-width: 1024px) 672px, (min-width: 768px) 384px, (min-width: 640px) 320px, 280px"
            width={1014}
            height={960}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            alt={t("home.hero.img.alt")}
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto lg:mx-0 rounded-md border border-rule"
          />
        </div>
      </div>
    </section>
  );
}

function HabilmindStrip() {
  const t = useT();
  return (
    <section className="border-b border-rule bg-background">
      <div className="container-academic py-8 lg:py-10">
        <div className="relative overflow-hidden rounded-xl border border-rule bg-card p-5 sm:p-7 lg:p-9">
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-rule) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="flex flex-col items-center lg:items-center gap-3 flex-1">
              <img
                src={habilmindLogoAsset.url}
                alt={t("strip.logo.alt")}
                className="h-auto w-full max-w-[160px] sm:max-w-[190px] lg:max-w-[220px]"
                loading="lazy"
                width={400}
                height={225}
              />
            </div>
            <div className="hidden lg:block w-px h-16 bg-rule shrink-0" aria-hidden />
            <div className="flex-1 text-center lg:text-left">
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90 max-w-md mx-auto lg:mx-0">
                {rich(t("strip.texto"), { strong: (c, k) => <strong key={k} className="text-foreground font-semibold">{c}</strong> })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const t = useT();
  return (
    <section className="border-b border-rule bg-background">
      <div className="container-academic py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("home.problema.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-foreground/85">
          <p>
            {rich(t("home.problema.p1"), { strong: (c, k) => <strong key={k} className="text-foreground font-semibold">{c}</strong> })}
          </p>
          <p>
            {rich(t("home.problema.p2"), { strong: (c, k) => <strong key={k} className="text-foreground font-semibold">{c}</strong>, em: (c, k) => <em key={k}>{c}</em> })}
          </p>

          <div className="grid sm:grid-cols-3 gap-3 pt-4">
            {[
              { Icon: ScanEye, t: t("home.problema.chip1") },
              { Icon: GitCompare, t: t("home.problema.chip2") },
              { Icon: Target, t: t("home.problema.chip3") },
            ].map(({ Icon, t }) => (
              <div
                key={t}
                className="border border-rule rounded-sm bg-background p-4 flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesIntro() {
  const t = useT();
  return (
    <section id="gestion" className="bg-surface">
      <div className="container-academic pt-20 lg:pt-24 pb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance max-w-5xl mx-auto text-center">
          {t("home.gestion.h2")}
        </h2>
      </div>
    </section>
  );
}



type FeatureProps = {
  id: string;
  eyebrow: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  paragraphs: string[];
  bullets: { Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; t: string }[];
  media: string;
  mediaVideo?: string;
  mediaVideos?: string[];
  flip?: boolean;
  surface?: boolean;
  ctaLink?: RouteKey;
};

function Feature({
  id,
  eyebrow,
  Icon,
  title,
  paragraphs,
  bullets,
  media,
  mediaVideo,
  mediaVideos,
  flip = false,
  surface = false,
  ctaLink,
}: FeatureProps) {
  const lang = useLang();
  const t = useT();
  return (
    <section id={id} className={`border-b border-rule ${surface ? "bg-surface" : ""}`}>
      <div className="container-academic py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-11 h-11 rounded-md bg-background border border-rule">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </span>
              <div>
                <div className="eyebrow">{eyebrow}</div>
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl leading-tight text-balance">{title}</h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-2">
              {bullets.map(({ Icon: BI, t }) => (
                <li
                  key={t}
                  className="flex items-start gap-3 border border-rule rounded-sm bg-card p-3"
                >
                  <BI className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={1.75} />
                  <span className="text-sm font-medium leading-snug">{t}</span>
                </li>
              ))}
            </ul>
            {ctaLink && (
              <div className="mt-6">
                <Link
                  to={localPath(ctaLink, lang)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  {t("home.ver_mas")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
          <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
            {mediaVideos && mediaVideos.length > 0 ? (
              <div className="space-y-4">
                {mediaVideos.map((v) => (
                  <ExpandableVideo
                    key={v}
                    src={v}
                    className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto lg:mx-0 rounded-md border border-rule"
                  />
                ))}
              </div>
            ) : mediaVideo ? (
              <ExpandableVideo
                src={mediaVideo}
                className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto lg:mx-0 rounded-md border border-rule"
              />
            ) : (
              <MediaPlaceholder label={media} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureResultados() {
  const t = useT();
  return (
    <Feature
      id="resultados"
      eyebrow={t("nav.resultados")}
      Icon={BarChart3}
      title={t("home.res.h3")}
      paragraphs={[
        t("home.res.p1"),
        t("home.res.p2"),
      ]}
      bullets={[
        { Icon: Filter, t: t("home.res.b1") },
        { Icon: GitCompare, t: t("home.res.b2") },
        { Icon: ScanEye, t: t("home.res.b3") },
        { Icon: ArrowUpRight, t: t("home.res.b4") },
      ]}
      media={t("placeholder.home.res")}
      mediaVideo={resultadosVideoAsset.url}
      surface
      ctaLink="resultados"
    />
  );
}

function FeatureEncuestas() {
  const t = useT();
  return (
    <Feature
      id="encuestas"
      
      eyebrow={t("home.enc.eyebrow")}
      Icon={ClipboardList}
      title={t("home.enc.h3")}
      paragraphs={[
        t("home.enc.p1"),
        t("home.enc.p2"),
      ]}
      bullets={[
        { Icon: Users, t: t("home.enc.b1") },
        { Icon: ThermometerSun, t: t("home.enc.b2") },
        { Icon: Sparkles, t: t("home.enc.b3") },
        { Icon: Target, t: t("home.enc.b4") },
      ]}
      media={t("placeholder.home.enc")}
      mediaVideo={encuestasVideoAsset.url}
      flip
      ctaLink="encuestas"
    />
  );
}

function FeatureCentros() {
  const t = useT();
  return (
    <Feature
      id="centros"
      
      eyebrow={t("home.cen.eyebrow")}
      Icon={Building2}
      title={t("home.cen.h3")}
      paragraphs={[
        t("home.cen.p1"),
        t("home.cen.p2"),
      ]}
      bullets={[
        { Icon: LayoutDashboard, t: t("home.cen.b1") },
        { Icon: ArrowUpRight, t: t("home.cen.b2") },
        { Icon: Zap, t: t("home.cen.b3") },
        { Icon: ScanEye, t: t("home.cen.b4") },
      ]}
      media={t("placeholder.home.cen")}
      mediaVideo={accesoDirectoVideoAsset.url}
      surface
      ctaLink="colegios"
    />
  );
}

function FeatureEvaluacion() {
  const t = useT();
  return (
    <Feature
      id="evaluacion"
      
      eyebrow={t("home.eva.eyebrow")}
      Icon={UserCheck}
      title={t("home.eva.h3")}
      paragraphs={[
        t("home.eva.p1"),
        t("home.eva.p2"),
      ]}
      bullets={[
        { Icon: Gauge, t: t("home.eva.b1") },
        { Icon: ClipboardList, t: t("home.eva.b2") },
        { Icon: GitCompare, t: t("home.eva.b3") },
        { Icon: Users, t: t("home.eva.b4") },
      ]}
      media={t("placeholder.home.eva")}
      mediaVideo={evaluacionDocenteAsset.url}
      flip
      ctaLink="desempeno"
    />
  );
}

function Decisions() {
  const t = useT();
  const items = [
    { Icon: GitCompare, t: t("home.problema.chip2") },
    { Icon: Target, t: t("home.problema.chip1") },
    { Icon: Sparkles, t: t("home.dec.i3") },
    { Icon: Users, t: t("home.dec.i4") },
  ];
  return (
    <section className="border-b border-rule">
      <div className="container-academic py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("home.dec.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-foreground/85">
          <p>
            {rich(t("home.dec.p1"), { strong: (c, k) => <strong key={k} className="text-foreground font-semibold">{c}</strong> })}
          </p>
          <p>
            {t("home.dec.p2")}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {items.map(({ Icon, t }) => (
              <li
                key={t}
                className="border border-rule rounded-sm bg-surface p-4 flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AudienceStrip() {
  const t = useT();
  const audiences = [
    { Icon: Landmark, t: t("aud.grupos") },
    { Icon: Building2, t: t("aud.redes") },
    { Icon: GraduationCap, t: t("aud.fundaciones") },
    { Icon: Church, t: t("aud.congregaciones") },
    { Icon: Users, t: t("aud.instituciones") },
  ];
  const highlights = [
    t("home.aud.d1"),
    t("home.aud.d2"),
    t("home.aud.d3"),
    t("home.aud.d4"),
  ];
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-20 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("home.aud.h2")}
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-foreground/85">
            {t("home.aud.p")}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-rule">
          {audiences.map(({ Icon, t }) => (
            <li
              key={t}
              className="border-r border-b border-rule p-6 bg-background flex flex-col gap-3"
            >
              <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <span className="text-sm font-medium">{t}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="border border-rule bg-background p-4 rounded-sm flex items-center gap-3"
            >
              <Check className="w-4 h-4 text-accent" strokeWidth={2.25} />
              <span className="text-sm font-medium">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TrustCenter() {
  const lang = useLang();
  const t = useT();
  return (
    <section className="border-b border-rule bg-surface">
      <div className="container-academic py-20 lg:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-11 h-11 rounded-md bg-background border border-rule">
              <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </span>
            <div>
              <div className="eyebrow">{t("home.trust.eyebrow")}</div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
            {t("home.trust.h2")}
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-foreground/85 max-w-xl">
            {t("home.trust.p")}
          </p>
          <div className="mt-8">
            <a
              href={DATOS[lang].trust}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
            >
              {t("home.ver_mas")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-8 lg:hidden">
            <img
              src={trust560.url}
              srcSet={`${trust560.url} 560w, ${trust1344.url} 1344w`}
              sizes="260px"
              width={1344}
              height={1008}
              alt={t("home.trust.img.alt")}
              loading="lazy"
              decoding="async"
              className="w-full max-w-[220px] sm:max-w-[260px] mx-auto rounded-md border border-rule"
            />
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-6">
          <img
            src={trust1344.url}
            srcSet={`${trust560.url} 560w, ${trust1344.url} 1344w`}
            sizes="(min-width: 1024px) 672px, 384px"
            width={1344}
            height={1008}
            alt={t("home.trust.img.alt")}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl mx-auto rounded-md border border-rule"
          />
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
      <div className="container-academic py-24 lg:py-32">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">
          {rich(t("home.final.h2"), { span: (c, k) => <span key={k} className="text-accent">{c}</span> })}
        </h2>
        <p className="mt-6 text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          {t("home.final.p")}
        </p>
        <Link
          to={localPath("precios", lang)}
          className="mt-10 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium rounded-sm hover:bg-foreground/85 transition-colors"
        >
          {t("cta.precios")} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
