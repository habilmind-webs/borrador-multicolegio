import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

import deustoAsset from "@/assets/universities/deusto.png.asset.json";
import unedAsset from "@/assets/universities/uned.png.asset.json";
import unirAsset from "@/assets/universities/unir.png.asset.json";
import uamAsset from "@/assets/universities/universidad_aut__noma_de_madrid.png.asset.json";
import complutenseAsset from "@/assets/universities/universidad_complutense_madrid.png.asset.json";
import uclmAsset from "@/assets/universities/universidad_de_castilla_la_mancha.png.asset.json";
import cordobaAsset from "@/assets/universities/universidad_de_cordoba.png.asset.json";
import granadaAsset from "@/assets/universities/universidad_de_granada.png.asset.json";
import lagunaAsset from "@/assets/universities/universidad_de_la_laguna.png.asset.json";
import riojaAsset from "@/assets/universities/universidad_de_la_rioja.png.asset.json";
import { useT } from "@/i18n";

type University = { name: string; logo: string; url: string };

const UNIVERSITIES: University[] = [
  { name: "uni.nombre.universidad_de_deusto", logo: deustoAsset.url, url: "https://www.deusto.es" },
  { name: "uni.nombre.uned", logo: unedAsset.url, url: "https://www.uned.es" },
  { name: "uni.nombre.unir_la_universidad_en_internet", logo: unirAsset.url, url: "https://www.unir.net" },
  { name: "uni.nombre.universidad_autónoma_de_madrid", logo: uamAsset.url, url: "https://www.uam.es" },
  { name: "uni.nombre.universidad_complutense_de_madrid", logo: complutenseAsset.url, url: "https://www.ucm.es" },
  { name: "uni.nombre.universidad_de_castilla-la_mancha", logo: uclmAsset.url, url: "https://www.uclm.es" },
  { name: "uni.nombre.universidad_de_córdoba", logo: cordobaAsset.url, url: "https://www.uco.es" },
  { name: "uni.nombre.universidad_de_granada", logo: granadaAsset.url, url: "https://www.ugr.es" },
  { name: "uni.nombre.universidad_de_la_laguna", logo: lagunaAsset.url, url: "https://www.ull.es" },
  { name: "uni.nombre.universidad_de_la_rioja", logo: riojaAsset.url, url: "https://www.unirioja.es" },
];

const half = Math.ceil(UNIVERSITIES.length / 2);
const row1 = UNIVERSITIES.slice(0, half);
const row2 = UNIVERSITIES.slice(half);

function LogoItem({ u }: { u: University }) {
  const t = useT();
  return (
    <a
      href={u.url}
      target="_blank"
      rel="noopener noreferrer"
      title={t(u.name)}
      aria-label={t(u.name)}
      className="shrink-0 inline-flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
    >
      <img
        src={u.logo}
        alt={t(u.name)}
        loading="lazy"
        className="w-[140px] h-[60px] md:w-[160px] md:h-[70px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
      />
    </a>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: University[];
  direction: "left" | "right";
  duration: number;
}) {
  const animation = direction === "left" ? "uniMarqueeLeft" : "uniMarqueeRight";
  return (
    <div className="group/marquee relative overflow-hidden">
      <div
        className="flex w-max gap-14 md:gap-20 group-hover/marquee:[animation-play-state:paused]"
        style={{ animation: `${animation} ${duration}s linear infinite` }}
      >
        {[...items, ...items].map((u, i) => (
          <LogoItem key={`${u.name}-${i}`} u={u} />
        ))}
      </div>
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--color-background), transparent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--color-background), transparent)",
        }}
        aria-hidden
      />
    </div>
  );
}

export function UniversityCollaborations() {
  const t = useT();
  const headerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-background border-b border-rule">


      <div className="container-academic relative">
        <div
          ref={headerRef}
          className={`flex flex-col items-center text-center transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary border border-primary/35 backdrop-blur"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-primary) 20%, transparent)",
            }}
          >
            <GraduationCap className="w-4 h-4" strokeWidth={1.75} />
            {t("uni.badge")}
          </span>
          <h2 className="mt-6 font-sans font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-balance max-w-3xl">
            {t("uni.titulo")}
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            {t("uni.texto")}
          </p>
        </div>

        <div className="mt-12 md:mt-16 space-y-8 md:space-y-10">
          <MarqueeRow items={row1} direction="left" duration={50} />
          <MarqueeRow items={row2} direction="right" duration={45} />
        </div>
      </div>
    </section>
  );
}
