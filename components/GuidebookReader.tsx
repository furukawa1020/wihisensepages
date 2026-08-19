"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Maximize2,
  Minimize2,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PageFlip } from "page-flip";
import type { Locale } from "@/data/site";

const PAGE_COUNT = 28;
const PDF_PATH =
  "/assets/guidebook/sensory-book-lounge-guideline-2026.pdf";
const PAGE_IMAGES = Array.from(
  { length: PAGE_COUNT },
  (_, index) =>
    "/assets/guidebook/pages/page-" +
    String(index + 1).padStart(2, "0") +
    ".jpg",
);

const readerCopy = {
  ja: {
    readerLabel: "Sensory Book Lounge ガイドライン電子版",
    previous: "前のページ",
    next: "次のページ",
    page: "ページ",
    fullscreen: "全画面で読む",
    exitFullscreen: "全画面を閉じる",
    openPdf: "PDFを開く",
    download: "PDFを保存",
    reducedMotion: "動きを減らす設定のため、ページ切替で表示しています。",
  },
  en: {
    readerLabel: "Sensory Book Lounge digital guide",
    previous: "Previous page",
    next: "Next page",
    page: "Page",
    fullscreen: "Read full screen",
    exitFullscreen: "Exit full screen",
    openPdf: "Open PDF",
    download: "Download PDF",
    reducedMotion:
      "Pages are shown without animation because reduced motion is enabled.",
  },
} as const;

export function GuidebookReader({
  body,
  locale,
  status,
  title,
}: {
  body: string;
  locale: Locale;
  status: string;
  title: string;
}) {
  const copy = readerCopy[locale];
  const hostRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);
  const currentPageRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const update = () => {
      setReduceMotion(
        media.matches || root.dataset.reduceMotion === "true",
      );
    };
    const observer = new MutationObserver(update);

    update();
    media.addEventListener("change", update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-reduce-motion"],
    });

    return () => {
      media.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === stageRef.current);
      window.setTimeout(() => pageFlipRef.current?.update(), 50);
    };

    document.addEventListener("fullscreenchange", updateFullscreen);
    return () =>
      document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  useEffect(() => {
    if (reduceMotion || !hostRef.current) {
      return;
    }

    const host = hostRef.current;
    const mount = document.createElement("div");
    mount.className = "page-flip-mount";
    host.appendChild(mount);
    let cancelled = false;
    let instance: PageFlip | null = null;

    void import("page-flip").then(({ PageFlip: PageFlipConstructor }) => {
      if (cancelled) {
        mount.remove();
        return;
      }

      instance = new PageFlipConstructor(mount, {
        width: 455,
        height: 643,
        size: "stretch",
        minWidth: 270,
        maxWidth: 455,
        minHeight: 382,
        maxHeight: 643,
        drawShadow: true,
        flippingTime: 850,
        usePortrait: true,
        autoSize: true,
        maxShadowOpacity: 0.42,
        showCover: true,
        mobileScrollSupport: true,
        swipeDistance: 20,
        showPageCorners: true,
        disableFlipByClick: false,
        startPage: currentPageRef.current,
      });
      instance.on("flip", (event) => {
        const page = Number(event.data);
        currentPageRef.current = page;
        setCurrentPage(page);
      });
      instance.loadFromImages(PAGE_IMAGES);
      pageFlipRef.current = instance;
    });

    return () => {
      cancelled = true;
      pageFlipRef.current = null;
      if (instance) {
        instance.destroy();
      } else {
        mount.remove();
      }
    };
  }, [reduceMotion]);

  const goToPage = useCallback(
    (page: number) => {
      const target = Math.max(0, Math.min(PAGE_COUNT - 1, page));
      currentPageRef.current = target;
      if (reduceMotion) {
        setCurrentPage(target);
      } else {
        pageFlipRef.current?.turnToPage(target);
        setCurrentPage(target);
      }
    },
    [reduceMotion],
  );

  const goPrevious = () => {
    if (reduceMotion) {
      goToPage(currentPage - 1);
    } else {
      pageFlipRef.current?.flipPrev();
    }
  };

  const goNext = () => {
    if (reduceMotion) {
      goToPage(currentPage + 1);
    } else {
      pageFlipRef.current?.flipNext();
    }
  };

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await stageRef.current?.requestFullscreen();
    }
  };

  return (
    <section className="guidebook-reader" aria-labelledby="guidebook-title">
      <div className="guidebook-intro">
        <div>
          <h3 id="guidebook-title">{title}</h3>
          <p className="guide-status">{status}</p>
        </div>
        <p>{body}</p>
      </div>

      <div
        ref={stageRef}
        className="book-stage"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goPrevious();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goNext();
          }
        }}
      >
        <div className="book-stage-actions">
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noreferrer"
            title={copy.openPdf}
          >
            <ExternalLink aria-hidden="true" size={18} />
            <span>{copy.openPdf}</span>
          </a>
          <a href={PDF_PATH} download title={copy.download}>
            <Download aria-hidden="true" size={18} />
            <span>{copy.download}</span>
          </a>
          <button
            type="button"
            aria-label={
              isFullscreen ? copy.exitFullscreen : copy.fullscreen
            }
            title={isFullscreen ? copy.exitFullscreen : copy.fullscreen}
            onClick={() => void toggleFullscreen()}
          >
            {isFullscreen ? (
              <Minimize2 aria-hidden="true" size={20} />
            ) : (
              <Maximize2 aria-hidden="true" size={20} />
            )}
          </button>
        </div>

        <div
          className="book-viewport"
          role="group"
          aria-label={copy.readerLabel}
          tabIndex={0}
        >
          {reduceMotion ? (
            <div className="static-book-page">
              <Image
                src={PAGE_IMAGES[currentPage]}
                alt={
                  title +
                  " " +
                  copy.page +
                  " " +
                  String(currentPage + 1)
                }
                width={909}
                height={1285}
                sizes="(max-width: 720px) 92vw, 640px"
              />
            </div>
          ) : (
            <div ref={hostRef} className="page-flip-host" aria-hidden="true" />
          )}
        </div>

        <div className="book-controls">
          <button
            type="button"
            aria-label={copy.previous}
            title={copy.previous}
            disabled={currentPage === 0}
            onClick={goPrevious}
          >
            <ChevronLeft aria-hidden="true" size={23} />
          </button>
          <label>
            <span className="sr-only">{copy.page}</span>
            <input
              type="range"
              min="1"
              max={PAGE_COUNT}
              value={currentPage + 1}
              onChange={(event) => goToPage(Number(event.target.value) - 1)}
            />
          </label>
          <output aria-live="polite">
            {currentPage + 1} / {PAGE_COUNT}
          </output>
          <button
            type="button"
            aria-label={copy.next}
            title={copy.next}
            disabled={currentPage === PAGE_COUNT - 1}
            onClick={goNext}
          >
            <ChevronRight aria-hidden="true" size={23} />
          </button>
        </div>
        {reduceMotion ? (
          <p className="reduced-motion-note">{copy.reducedMotion}</p>
        ) : null}
      </div>
    </section>
  );
}
