import { useEffect, useState, useCallback } from "react";
import { Cookie } from "lucide-react";
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  OPEN_PREFERENCES_EVENT,
  readConsent,
  saveConsent,
  type ConsentCategory,
} from "@/lib/consent-scripts";
import { useT, rich } from "@/i18n";

type OptionalCategory = Exclude<ConsentCategory, "necessary">;

const CATEGORIES: { key: OptionalCategory; label: string; description: string }[] = [
  {
    key: "analytics",
    label: "cookies.analisis",
    description:
      "cookies.analisis.desc",
  },
  {
    key: "personalization",
    label: "cookies.personalizacion",
    description:
      "cookies.personalizacion.desc",
  },
  {
    key: "advertising",
    label: "cookies.publicidad",
    description:
      "cookies.publicidad.desc",
  },
  {
    key: "third_party",
    label: "cookies.terceros",
    description:
      "cookies.terceros.desc",
  },
];

const btnBase =
  "inline-flex items-center justify-center w-full h-11 sm:h-10 px-4 rounded-md border border-neutral-400 bg-white text-sm text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-colors";

export default function CookieConsent() {
  const t = useT();
  const [visible, setVisible] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [prefs, setPrefs] = useState<Record<OptionalCategory, boolean>>({
    analytics: false,
    personalization: false,
    advertising: false,
    third_party: false,
  });

  // First-load: show banner if no consent yet.
  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setPrefs({
        analytics: existing.accepted.includes("analytics"),
        personalization: existing.accepted.includes("personalization"),
        advertising: existing.accepted.includes("advertising"),
        third_party: existing.accepted.includes("third_party"),
      });
    }
  }, []);

  // Listen for external "open preferences" requests (from footer link).
  useEffect(() => {
    const openHandler = () => {
      const existing = readConsent();
      if (existing) {
        setPrefs({
          analytics: existing.accepted.includes("analytics"),
          personalization: existing.accepted.includes("personalization"),
          advertising: existing.accepted.includes("advertising"),
          third_party: existing.accepted.includes("third_party"),
        });
      }
      setVisible(true);
      setConfigOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openHandler);

    // Sync between tabs.
    const storageHandler = (e: StorageEvent) => {
      if (e.key === CONSENT_STORAGE_KEY) {
        window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
      }
    };
    window.addEventListener("storage", storageHandler);

    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openHandler);
      window.removeEventListener("storage", storageHandler);
    };
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent(["analytics", "personalization", "advertising", "third_party"]);
    setVisible(false);
    setConfigOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    saveConsent([]);
    setVisible(false);
    setConfigOpen(false);
  }, []);

  const saveSelection = useCallback(() => {
    const accepted: OptionalCategory[] = (Object.keys(prefs) as OptionalCategory[]).filter(
      (k) => prefs[k],
    );
    saveConsent(accepted);
    setVisible(false);
    setConfigOpen(false);
  }, [prefs]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.aria")}
      className="fixed inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-[100] mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-white text-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      {!configOpen ? (
        <div className="p-5">
          <h2 className="flex items-center gap-3 text-base font-semibold text-neutral-900">
            <Cookie className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden="true" />
            {t("cookies.titulo")}
          </h2>
          <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-neutral-600">
            {rich(t("cookies.texto"), {
              a: (c, k) => (
                <a
                  key={k}
                  href="https://trust.habilmind.dev/politica-cookies-ecosistema-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-neutral-900"
                >
                  {c}
                </a>
              ),
            })}
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button type="button" className={btnBase} onClick={acceptAll}>
              {t("cookies.aceptar")}
            </button>
            <button type="button" className={btnBase} onClick={rejectAll}>
              {t("cookies.rechazar")}
            </button>
            <button type="button" className={btnBase} onClick={() => setConfigOpen(true)}>
              {t("cookies.configurar")}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-5 max-h-[80vh] overflow-y-auto">
          <h2 className="text-sm sm:text-base font-semibold text-neutral-900">
            {t("cookies.pref.titulo")}
          </h2>
          <p className="mt-1 text-[12px] text-neutral-600">
            {t("cookies.pref.texto")}
          </p>

          <div className="mt-4 space-y-3">
            {/* Necesarias: siempre activas */}
            <div className="flex items-start justify-between gap-3 rounded-md border border-neutral-200 p-3">
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-neutral-900">
                  {t("cookies.necesarias")}
                </p>
                <p className="mt-0.5 text-[12px] text-neutral-600">
                  {t("cookies.necesarias.desc")}
                </p>
              </div>
              <Toggle checked disabled onChange={() => {}} label={t("cookies.necesarias")} />
            </div>

            {CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                className="flex items-start justify-between gap-3 rounded-md border border-neutral-200 p-3"
              >
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-neutral-900">{t(cat.label)}</p>
                  <p className="mt-0.5 text-[12px] text-neutral-600">{t(cat.description)}</p>
                </div>
                <Toggle
                  checked={prefs[cat.key]}
                  onChange={(v) => setPrefs((p) => ({ ...p, [cat.key]: v }))}
                  label={t(cat.label)}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button type="button" className={btnBase} onClick={acceptAll}>
              {t("cookies.aceptar_todas")}
            </button>
            <button type="button" className={btnBase} onClick={rejectAll}>
              {t("cookies.rechazar_todo")}
            </button>
            <button type="button" className={btnBase} onClick={saveSelection}>
              {t("cookies.guardar")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 ${
        checked ? "bg-neutral-800" : "bg-neutral-300"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
