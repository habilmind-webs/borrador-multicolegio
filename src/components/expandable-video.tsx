"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";

interface ExpandableVideoProps {
  src: string;
  className?: string;
}

export function ExpandableVideo({ src, className }: ExpandableVideoProps) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Only start downloading the video when it gets close to the screen,
  // so off-screen videos don't compete with the first paint.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  useEffect(() => {
    if (inView) videoRef.current?.play().catch(() => {});
  }, [inView]);

  const handleOpen = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setOpen(true);
  };

  return (
    <>
      <div className={cn("relative group", className)}>
        <video
          ref={videoRef}
          src={inView ? src : undefined}
          preload={inView ? "auto" : "none"}
          controls
          muted
          loop
          playsInline
          autoPlay
          className="w-full"
        />
        <button
          onClick={handleOpen}
          className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-md bg-background text-foreground shadow-md opacity-90 hover:opacity-100 transition-opacity cursor-pointer border border-rule"
          aria-label={t("video.ampliar")}
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 gap-0 border-0 bg-transparent shadow-none">
          <DialogTitle className="sr-only">{t("video.titulo")}</DialogTitle>
          <video
            src={src}
            controls
            autoPlay
            className="w-full rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
