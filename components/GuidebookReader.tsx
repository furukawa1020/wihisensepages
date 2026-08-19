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
const HD_PAGE_IMAGES = Array.from(
  { length: PAGE_COUNT },
  (_, index) =>
    "/assets/guidebook/pages-hd/page-" +
    String(index + 1).padStart(2, "0") +
    ".webp",
);
const ULTRA_PAGE_IMAGES = Array.from(
  { length: PAGE_COUNT },
  (_, index) =>
    "/assets/guidebook/pages-ultra/page-" +
    String(index + 1).padStart(2, "0") +
    ".webp",
);

function createInteractivePage(index: number) {
  const page = document.createElement("div");
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  const image = document.createElement("img");

  page.className = "book-page";
  if (index === 0 || index === PAGE_COUNT - 1) {
    page.dataset.density = "hard";
  }

  source.type = "image/webp";
  source.srcset =
    `${HD_PAGE_IMAGES[index]} 1820w, ` +
    `${ULTRA_PAGE_IMAGES[index]} 2730w`;
  source.sizes = "(max-width: 700px) calc(100vw - 20px), 600px";

  image.src = PAGE_IMAGES[index];
  image.alt = "";
  image.width = 2730;
  image.height = 3859;
  image.decoding = "async";
  image.loading = index < 4 ? "eager" : "lazy";
  image.fetchPriority = index < 2 ? "high" : "auto";

  picture.append(source, image);
  page.append(picture);
  return page;
}

function warmPageWindow(pages: HTMLElement[], center: number) {
  const first = Math.max(0, center - 1);
  const last = Math.min(PAGE_COUNT - 1, center + 4);

  for (let index = first; index <= last; index += 1) {
    const image = pages[index]?.querySelector("img");
    if (image) {
      image.loading = "eager";
      void image.decode().catch(() => undefined);
    }
  }
}

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
  const bookPagesRef = useRef<HTMLElement[]>([]);
  const currentPageRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookReady, setIsBookReady] = useState(false);
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
    const pages = Array.from({ length: PAGE_COUNT }, (_, index) =>
      createInteractivePage(index),
    );
    bookPagesRef.current = pages;
    mount.append(...pages);
    host.appendChild(mount);
    warmPageWindow(pages, currentPageRef.current);
    let cancelled = false;
    let instance: PageFlip | null = null;

    void import("page-flip").then(({ PageFlip: PageFlipConstructor }) => {
      if (cancelled) {
        mount.remove();
        return;
      }

      instance = new PageFlipConstructor(mount, {
        width: 600,
        height: 848,
        size: "stretch",
        minWidth: 270,
        maxWidth: 600,
        minHeight: 382,
        maxHeight: 848,
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
        warmPageWindow(pages, page);
      });
      instance.loadFromHTML(pages);
      pageFlipRef.current = instance;

      const firstImage = pages[0].querySelector("img");
      if (firstImage) {
        void firstImage
          .decode()
          .catch(() => undefined)
          .then(() => {
            if (!cancelled) {
              setIsBookReady(true);
            }
          });
      }
    });

    return () => {
      cancelled = true;
      pageFlipRef.current = null;
      bookPagesRef.current = [];
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
        warmPageWindow(bookPagesRef.current, target);
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
                src={ULTRA_PAGE_IMAGES[currentPage]}
                alt={
                  title +
                  " " +
                  copy.page +
                  " " +
                  String(currentPage + 1)
                }
                width={2730}
                height={3859}
                sizes="(max-width: 720px) 92vw, 640px"
                unoptimized
              />
            </div>
          ) : (
            <>
              <div
                ref={hostRef}
                className="page-flip-host"
                aria-hidden="true"
              />
              {!isBookReady ? (
                <div className="book-loading-preview" aria-hidden="true">
                  <Image
                    src={HD_PAGE_IMAGES[0]}
                    alt=""
                    width={1820}
                    height={2572}
                    sizes="(max-width: 720px) 92vw, 455px"
                    priority
                    unoptimized
                  />
                </div>
              ) : null}
            </>
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
