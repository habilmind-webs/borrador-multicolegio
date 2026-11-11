import { useEffect, useRef, useState } from "react";
import { Users, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import albertoCoto from "@/assets/experts/alberto-coto.jpg.asset.json";
import alejandroPrieto from "@/assets/experts/alejandro-prieto.jpg.asset.json";
import aliciaMoron from "@/assets/experts/alicia-moron.jpg.asset.json";
import antonioOrtuno from "@/assets/experts/antonio-ortuno.jpg.asset.json";
import aranchaRioja from "@/assets/experts/arancha-rioja.jpg.asset.json";
import carlosYuste from "@/assets/experts/carlos-yuste.jpg.asset.json";
import chantalBiencinto from "@/assets/experts/chantal-biencinto.jpg.asset.json";
import davidYuste from "@/assets/experts/david-yuste.jpg.asset.json";
import deborahMartin from "@/assets/experts/deborah-martin.jpg.asset.json";
import elviraCarpintero from "@/assets/experts/elvira-carpintero.jpg.asset.json";
import gemmaFilella from "@/assets/experts/gemma-filella.jpg.asset.json";
import isauroBlanco from "@/assets/experts/isauro-blanco.jpg.asset.json";
import javierTouron from "@/assets/experts/javier-touron.jpg.asset.json";
import juanCarlosPastor from "@/assets/experts/juan-carlos-pastor.jpg.asset.json";

import mariaJoseGallego from "@/assets/experts/maria-jose-gallego.jpg.asset.json";
import mateuServera from "@/assets/experts/mateu-servera.jpg.asset.json";
import mercedesGarcia from "@/assets/experts/mercedes-garcia.jpg.asset.json";
import patriciaVillamor from "@/assets/experts/patricia-villamor.jpg.asset.json";
import rafaelBisquerra from "@/assets/experts/rafael-bisquerra.jpg.asset.json";
import rosarioRuizOlivares from "@/assets/experts/rosario-ruiz-olivares.jpg.asset.json";
import { useT, useLang, DATOS } from "@/i18n";

type Expert = { name: string; desc: string; photo: string; slug: string };

const experts: Expert[] = [
  { name: "expertos.gemma_filella.nombre", desc: "expertos.gemma_filella.desc", photo: gemmaFilella.url, slug: `/gemma-filella` },
  { name: "expertos.isauro_blanco.nombre", desc: "expertos.isauro_blanco.desc", photo: isauroBlanco.url, slug: `/isauro-blanco` },
  { name: "expertos.alicia_morón.nombre", desc: "expertos.alicia_morón.desc", photo: aliciaMoron.url, slug: `/alicia-moron` },
  { name: "expertos.rafael_bisquerra.nombre", desc: "expertos.rafael_bisquerra.desc", photo: rafaelBisquerra.url, slug: `/rafael-bisquerra` },
  { name: "expertos.javier_tourón.nombre", desc: "expertos.javier_tourón.desc", photo: javierTouron.url, slug: `/javier-touron` },
  { name: "expertos.carlos_yuste.nombre", desc: "expertos.carlos_yuste.desc", photo: carlosYuste.url, slug: `/carlos-yuste` },
  { name: "expertos.david_yuste.nombre", desc: "expertos.david_yuste.desc", photo: davidYuste.url, slug: `/david-yuste` },
  { name: "expertos.déborah_martín.nombre", desc: "expertos.déborah_martín.desc", photo: deborahMartin.url, slug: `/deborah-martin` },
  { name: "expertos.rosario_ruiz_olivares.nombre", desc: "expertos.rosario_ruiz_olivares.desc", photo: rosarioRuizOlivares.url, slug: `/rosario-ruiz` },
  { name: "expertos.alberto_coto.nombre", desc: "expertos.alberto_coto.desc", photo: albertoCoto.url, slug: `/alberto-coto` },
  { name: "expertos.antonio_ortuño.nombre", desc: "expertos.antonio_ortuño.desc", photo: antonioOrtuno.url, slug: `/antonio-ortuno` },
  { name: "expertos.arancha_rioja.nombre", desc: "expertos.arancha_rioja.desc", photo: aranchaRioja.url, slug: `/arancha-rioja` },
  { name: "expertos.maría_josé_gallego.nombre", desc: "expertos.maría_josé_gallego.desc", photo: mariaJoseGallego.url, slug: `/maria-jose-gallego` },
  { name: "expertos.chantal_biencinto.nombre", desc: "expertos.chantal_biencinto.desc", photo: chantalBiencinto.url, slug: `/chantal-biencinto` },
  { name: "expertos.mercedes_garcía.nombre", desc: "expertos.mercedes_garcía.desc", photo: mercedesGarcia.url, slug: `/mercedes-garcia` },
  { name: "expertos.elvira_carpintero.nombre", desc: "expertos.elvira_carpintero.desc", photo: elviraCarpintero.url, slug: `/elvira-carpintero` },
  { name: "expertos.patricia_villamor.nombre", desc: "expertos.patricia_villamor.desc", photo: patriciaVillamor.url, slug: `/patricia-villamor` },
  
  { name: "expertos.juan_carlos_pastor.nombre", desc: "expertos.juan_carlos_pastor.desc", photo: juanCarlosPastor.url, slug: `/juan-carlos-pastor` },
  { name: "expertos.alejandro_prieto.nombre", desc: "expertos.alejandro_prieto.desc", photo: alejandroPrieto.url, slug: `/alejandro-prieto` },
  { name: "expertos.mateu_servera.nombre", desc: "expertos.mateu_servera.desc", photo: mateuServera.url, slug: `/mateu-servera` },
];

export function ExpertsCarousel() {
  const lang = useLang();
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);
  const [autoplay, setAutoplay] = useState(true);

  const getCopyWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    if (cards.length < experts.length) return 0;
    return cards[experts.length].offsetLeft - cards[0].offsetLeft;
  };

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    if (cards.length < 2) return el.clientWidth;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  };

  const normalize = () => {
    const el = trackRef.current;
    if (!el) return;
    const copy = getCopyWidth();
    if (!copy) return;
    if (el.scrollLeft >= copy) el.scrollLeft = el.scrollLeft - copy;
    else if (el.scrollLeft < 0) el.scrollLeft = el.scrollLeft + copy;
  };

  const scrollByStep = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el || animatingRef.current) return;
    const step = getStep();
    const copy = getCopyWidth();
    if (!step || !copy) return;
    if (dir === -1 && el.scrollLeft < step) el.scrollLeft = el.scrollLeft + copy;
    animatingRef.current = true;
    el.scrollTo({ left: el.scrollLeft + dir * step, behavior: "smooth" });
    window.setTimeout(() => {
      normalize();
      animatingRef.current = false;
    }, 500);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let t: number | undefined;
    const onScroll = () => {
      if (animatingRef.current) return;
      window.clearTimeout(t);
      t = window.setTimeout(normalize, 120);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  // Autoplay: advance every 3s. Pause on hover / focus / touch / manual nav.
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => scrollByStep(1), 3000);
    return () => window.clearInterval(id);
  }, [autoplay]);

  // Pause autoplay temporarily after a manual interaction, then resume.
  const resumeRef = useRef<number | undefined>(undefined);
  const stop = () => {
    setAutoplay(false);
    window.clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => () => window.clearTimeout(resumeRef.current), []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden bg-background border-b border-rule"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      onFocusCapture={stop}
      onTouchStart={stop}
    >
      <div className="container-academic relative z-10">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary border border-primary/35 backdrop-blur"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-primary) 20%, transparent)",
            }}
          >
            <Users className="w-4 h-4" strokeWidth={1.75} />
            {t("expertos.badge")}
          </span>
          <h2 className="mt-6 font-sans font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-balance max-w-3xl mx-auto">
            {t("expertos.titulo")}
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            {t("expertos.subtitulo")}
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => { stop(); scrollByStep(-1); }}
            aria-label={t("expertos.anterior")}
            className="shrink-0 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white shadow-md border border-[rgba(0,149,169,0.25)] flex items-center justify-center text-[#0095a9] hover:bg-[#0095a9] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            className="flex-1 min-w-0 overflow-x-auto py-4 no-scrollbar-experts snap-x snap-mandatory"
          >
            <div className="flex items-stretch gap-3 md:gap-4 w-max">
              {[...experts, ...experts].map((expert, i) => (
                <div
                  key={i}
                  data-card
                  className="flex-shrink-0 w-[calc(100vw-6.5rem)] max-w-[260px] sm:w-[240px] flex justify-center snap-start"
                >

                  <div className="w-full h-full flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(0,149,169,0.4)]">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-md mb-3">
                      <img
                        src={expert.photo}
                        alt={t(expert.name)}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-sans font-extrabold text-lg md:text-xl text-[#193547] leading-tight mb-2">
                      {t(expert.name)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(expert.desc)}
                    </p>
                    <a
                      href={DATOS[lang].expertosBase + expert.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0095a9] hover:text-[#193547] transition-colors"
                    >
                      {t("expertos.saber_mas")}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => { stop(); scrollByStep(1); }}
            aria-label={t("expertos.siguiente")}
            className="shrink-0 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white shadow-md border border-[rgba(0,149,169,0.25)] flex items-center justify-center text-[#0095a9] hover:bg-[#0095a9] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      <style>{`
        .no-scrollbar-experts::-webkit-scrollbar { display: none; }
        .no-scrollbar-experts { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default ExpertsCarousel;
