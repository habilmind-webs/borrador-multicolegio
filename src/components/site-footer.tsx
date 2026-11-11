import { openCookiePreferences } from "@/lib/consent-scripts";
import logoAsset from "@/assets/logo-360.webp.asset.json";
import habilmindFavicon from "@/assets/favicon_habilmind.png.asset.json";
import { Briefcase, Linkedin, Mail, Phone } from "lucide-react";
import { useT, useLang, DATOS } from "@/i18n";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const CONTACTS = [
  { label: "+34 644 700 900", Icon: WhatsAppIcon, external: true, href: "https://api.whatsapp.com/send/?phone=34644700900&text=Iniciar+conversaci%C3%B3n&type=phone_number&app_absent=0" },
  { label: "tel", Icon: Phone, external: false, href: "tel" },
  { label: "footer.contacto.linkedin", Icon: Linkedin, external: true, href: "https://www.linkedin.com/company/habilmind/mycompany/" },
  { label: "info@habilmind.com", Icon: Mail, external: false, href: "mailto:info@habilmind.com" },
  { label: "footer.contacto.empleo", Icon: Briefcase, external: true, href: "empleo" },
];

type EcoItem = { name: string; desc: string; url: string };

const ECOSYSTEM: EcoItem[] = [
  { name: "footer.eco.habilmind.nombre", desc: "footer.eco.habilmind.desc", url: "habilmind" },
  { name: "footer.eco.emotionalmind.nombre", desc: "footer.eco.emotionalmind.desc", url: "https://www.emotionalmind.es" },
  { name: "footer.eco.datametra.nombre", desc: "footer.eco.datametra.desc", url: "https://www.datametra.com" },
  { name: "footer.eco.superadmisiones.nombre", desc: "footer.eco.superadmisiones.desc", url: "https://www.superadmisiones.com" },
  { name: "footer.eco.superemocional.nombre", desc: "footer.eco.superemocional.desc", url: "https://www.superemocional.com" },
  { name: "footer.eco.psicometra.nombre", desc: "footer.eco.psicometra.desc", url: "https://www.psicometra.com" },
  { name: "footer.eco.superevolucion.nombre", desc: "footer.eco.superevolucion.desc", url: "https://www.superevolucion.com" },
  { name: "footer.eco.universidatos.nombre", desc: "footer.eco.universidatos.desc", url: "https://www.universidatos.com" },
  { name: "footer.eco.equipos.nombre", desc: "footer.eco.equipos.desc", url: "https://www.equiposdeorientacion.com" },
  { name: "footer.eco.colegiospublicos.nombre", desc: "footer.eco.colegiospublicos.desc", url: "https://www.colegiospublicos.com" },
  { name: "footer.eco.institutos.nombre", desc: "footer.eco.institutos.desc", url: "https://www.institutos.net" },
  { name: "footer.eco.osh.nombre", desc: "footer.eco.osh.desc", url: "https://www.osh.org.es" },
  { name: "footer.eco.safe.nombre", desc: "footer.eco.safe.desc", url: "https://safeacademysystem.com" },
  { name: "footer.eco.cpdm.nombre", desc: "footer.eco.cpdm.desc", url: "https://www.cpdm.org.es" },
  { name: "footer.eco.edugrupos.nombre", desc: "footer.eco.edugrupos.desc", url: "https://edugrupos.com" },
  { name: "footer.eco.multicolegios.nombre", desc: "footer.eco.multicolegios.desc", url: "https://multicolegio.com" },
  { name: "footer.eco.parvularia.nombre", desc: "footer.eco.parvularia.desc", url: "https://parvularia.com/" },
];

const PHONES: { country: string; flag: string; phone: string }[] = [
  { country: "footer.pais.andorra", flag: "🇦🇩", phone: "+34 911 676 361" },
  { country: "footer.pais.argentina", flag: "🇦🇷", phone: "+56 2 2914 6515" },
  { country: "footer.pais.bolivia", flag: "🇧🇴", phone: "+56 2 2914 6515" },
  { country: "footer.pais.brasil", flag: "🇧🇷", phone: "+55 11 5241 0660" },
  { country: "footer.pais.chile", flag: "🇨🇱", phone: "+56 2 2914 6515" },
  { country: "footer.pais.colombia", flag: "🇨🇴", phone: "+57 601 357 1300" },
  { country: "footer.pais.costa_rica", flag: "🇨🇷", phone: "+507 8388 228" },
  { country: "footer.pais.ecuador", flag: "🇪🇨", phone: "+56 2 2914 6515" },
  { country: "footer.pais.el_salvador", flag: "🇸🇻", phone: "+503 2113 0306" },
  { country: "footer.pais.españa", flag: "🇪🇸", phone: "+34 911 676 361" },
  { country: "footer.pais.estados_unidos", flag: "🇺🇸", phone: "+1 786 567 4423" },
  { country: "footer.pais.guatemala", flag: "🇬🇹", phone: "+502 2315 4252" },
  { country: "footer.pais.honduras", flag: "🇭🇳", phone: "+502 2315 4252" },
  { country: "footer.pais.méxico", flag: "🇲🇽", phone: "+52 477 582 0234" },
  { country: "footer.pais.nicaragua", flag: "🇳🇮", phone: "+502 2315 4252" },
  { country: "footer.pais.panamá", flag: "🇵🇦", phone: "+507 8388 228" },
  { country: "footer.pais.paraguay", flag: "🇵🇾", phone: "+56 2 2914 6515" },
  { country: "footer.pais.perú", flag: "🇵🇪", phone: "+56 2 2914 6515" },
  { country: "footer.pais.portugal", flag: "🇵🇹", phone: "+351 911 818 097" },
  { country: "footer.pais.puerto_rico", flag: "🇵🇷", phone: "+1 787 689 9424" },
  { country: "footer.pais.república_dominicana", flag: "🇩🇴", phone: "+1 848 331 2696" },
  { country: "footer.pais.uruguay", flag: "🇺🇾", phone: "+56 2 2914 6515" },
];

function telHref(p: string) {
  return `tel:${p.replace(/\s+/g, "")}`;
}

export function SiteFooter() {
  const lang = useLang();
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1d24] text-neutral-300">
      <div className="container-academic py-16 lg:py-20 text-center">
        {/* Brand */}
        <div className="max-w-2xl mx-auto mb-14 pb-10 border-b border-white/10 flex flex-col items-center">
          <img
            src={logoAsset.url}
            width={360}
            height={132}
            loading="lazy"
            alt={t("header.logo.alt")}
            className="h-14 w-auto mb-5 brightness-0 invert"
            style={{ maxWidth: "320px" }}
          />
          <h2 className="text-2xl font-medium text-white tracking-tight">{t("header.logo.alt")}</h2>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Ecosystem */}
        <div className="mb-14">
          <p className="label-eyebrow text-neutral-500 mb-6">{t("footer.ecosistema")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-5xl mx-auto">
            {ECOSYSTEM.map((item) => (
              <a
                key={t(item.name)}
                href={item.url === "habilmind" ? DATOS[lang].habilmind : item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors text-left"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center overflow-hidden">
                  <img
                    src={habilmindFavicon.url}
                    alt=""
                    className="w-5 h-5 object-contain"
                    loading="lazy"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold text-white leading-tight break-words">
                    {t(item.name)}
                  </span>
                  <span className="block text-[11px] text-neutral-500 leading-snug mt-0.5 break-words">
                    {t(item.desc)}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Phones */}
        <div className="mb-12 pt-10 border-t border-white/10">
          <p className="label-eyebrow text-neutral-500 mb-5">{t("footer.telefonos")}</p>
          {/* Mobile: 2-column centered layout */}
          <div className="sm:hidden grid grid-cols-2 gap-x-4 gap-y-5 max-w-md mx-auto text-center">
            {PHONES.map((p) => (
              <div key={t(p.country)} className="flex flex-col items-center">
                <div className="text-sm font-medium text-white leading-tight">
                  <span aria-hidden className="mr-1 align-middle">
                    {p.flag}
                  </span>
                  {t(p.country)}
                </div>
                <a
                  href={telHref(p.phone)}
                  className="mt-1 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {p.phone}
                </a>
              </div>
            ))}
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium text-white leading-tight">
                <span aria-hidden className="mr-1 align-middle">
                  ⚠️
                </span>
                {t("footer.emergencia")}
              </div>
              <a
                href="https://hbmn.es/emergencias"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-neutral-400 hover:text-white transition-colors underline"
              >
                {t("footer.emergencia.cta")}
              </a>
            </div>
          </div>
          {/* Desktop/tablet: inline list */}
          <p className="hidden sm:flex text-xs md:text-sm leading-relaxed flex-wrap items-center justify-center gap-x-0.5 gap-y-1.5 max-w-5xl mx-auto">
            {PHONES.map((p, idx) => (
              <span key={t(p.country)} className="inline-flex items-center">
                <span aria-hidden className="mr-1">
                  {p.flag}
                </span>
                <span className="mr-1.5 text-white/85">{t(p.country)}</span>
                <a
                  href={telHref(p.phone)}
                  className="text-neutral-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  {p.phone}
                </a>
                {idx < PHONES.length - 1 && <span className="mx-1.5 text-white/25">|</span>}
              </span>
            ))}
          </p>
          <p className="hidden sm:block mt-4 text-center text-xs md:text-sm text-neutral-400">
            <span aria-hidden>⚠️</span> {t("footer.emergencia")}:{" "}
            <a
              href="https://hbmn.es/emergencias"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              {t("footer.emergencia.cta")}
            </a>
          </p>
        </div>

        {/* Contact */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href === "tel" ? DATOS[lang].telHref : c.href === "empleo" ? DATOS[lang].empleo : c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-[#22d3ee] transition-colors duration-200"
            >
              <c.Icon className="w-4 h-4" aria-hidden="true" />
              <span>{c.label === "tel" ? DATOS[lang].telLabel : c.label.startsWith("footer.") ? t(c.label) : c.label}</span>
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-[12px] text-neutral-500">
          <p>© {year} HABILMIND S.L.</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <li>
              <a href="https://trust.habilmind.dev/politica-cookies-ecosistema-web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {t("footer.politica_cookies")}
              </a>
            </li>
            <li>
              <a href="https://trust.habilmind.dev/aviso-legal-ecosistema-web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {t("footer.aviso_legal")}
              </a>
            </li>
            <li>
              <a href="https://trust.habilmind.dev/politica-privacidad-ecosistema-web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {t("footer.privacidad")}
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => openCookiePreferences()}
                className="hover:text-white transition-colors"
              >
                {t("footer.gestion_cookies")}
              </button>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-[11px] text-neutral-600 leading-relaxed max-w-4xl mx-auto">
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
