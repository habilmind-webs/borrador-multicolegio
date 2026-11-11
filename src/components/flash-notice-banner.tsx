import { useEffect, useRef } from "react";
import { useLang, DATOS } from "@/i18n";

const WIDGET_BASE =
  "https://oddamxbficfqouiojzst.supabase.co/functions/v1/serve-widget?lang=";

export function FlashNoticeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lang = useLang();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject the widget script only once
    if (!container.querySelector("script[data-flash-widget]")) {
      const script = document.createElement("script");
      script.src = WIDGET_BASE + DATOS[lang].flashLang;
      script.async = true;
      script.setAttribute("data-flash-widget", "true");
      container.appendChild(script);
    }

    const root = document.documentElement;

    const updateHeight = () => {
      // Measure the container plus any fixed/absolute banner the widget
      // may have appended to <body>. We take the max visible height.
      let height = container.getBoundingClientRect().height;

      const injected = document.querySelectorAll<HTMLElement>(
        "[data-flash-notice], .flash-notice-widget, #flash-notice-widget",
      );
      injected.forEach((el) => {
        const h = el.getBoundingClientRect().height;
        if (h > height) height = h;
      });

      root.style.setProperty("--flash-banner-height", `${Math.ceil(height)}px`);
    };

    updateHeight();

    const ro = new ResizeObserver(updateHeight);
    ro.observe(container);
    ro.observe(document.body);

    const mo = new MutationObserver(updateHeight);
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("resize", updateHeight);

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", updateHeight);
      root.style.setProperty("--flash-banner-height", "0px");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="flash-notice-slot"
      className="w-full"
      aria-live="polite"
    />
  );
}
