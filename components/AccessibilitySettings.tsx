"use client";

import {
  Contrast,
  Eye,
  ImageOff,
  Link as LinkIcon,
  PersonStanding,
  RotateCcw,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/data/site";

export const ACCESSIBILITY_STORAGE_KEY =
  "with-sense-accessibility-preferences-v2";

type ColorTheme = "standard" | "contrast" | "dark";
type FontMode = "standard" | "readable";
type PhotoMode = "standard" | "calm" | "hidden";

type AccessibilityPreferences = {
  colorTheme: ColorTheme;
  emphasizeLinks: boolean;
  fontMode: FontMode;
  fontScale: number;
  letterSpacing: number;
  lineHeight: number;
  photoMode: PhotoMode;
  reduceMotion: boolean;
};

const defaultPreferences: AccessibilityPreferences = {
  colorTheme: "standard",
  emphasizeLinks: false,
  fontMode: "standard",
  fontScale: 100,
  letterSpacing: 0,
  lineHeight: 175,
  photoMode: "standard",
  reduceMotion: false,
};

const colorThemeValues: ColorTheme[] = ["standard", "contrast", "dark"];
const fontModeValues: FontMode[] = ["standard", "readable"];
const photoModeValues: PhotoMode[] = ["standard", "calm", "hidden"];

const accessibilityCopy = {
  ja: {
    open: "表示を調整する",
    title: "表示の調整",
    close: "表示設定を閉じる",
    closeTitle: "閉じる",
    text: "文字",
    fontSize: "文字サイズ",
    lineHeight: "行間",
    letterSpacing: "文字間隔",
    standard: "標準",
    wide: "広い",
    typeface: "字体",
    fonts: [
      { label: "BIZ UDPゴシック", value: "standard" as const },
      { label: "Noto Sans", value: "readable" as const },
    ],
    color: "配色",
    colorMode: "カラーモード",
    colors: [
      { label: "標準", value: "standard" as const },
      { label: "高コントラスト", value: "contrast" as const },
      { label: "ダーク", value: "dark" as const },
    ],
    underline: "リンクに下線を表示",
    stimulus: "刺激",
    photosLabel: "写真",
    photos: [
      { label: "標準", value: "standard" as const },
      { label: "低刺激", value: "calm" as const },
      { label: "非表示", value: "hidden" as const },
    ],
    motion: "動きを減らす",
    saved: "設定はこの端末に保存されます",
    reset: "標準に戻す",
  },
  en: {
    open: "Adjust display",
    title: "Display settings",
    close: "Close display settings",
    closeTitle: "Close",
    text: "Text",
    fontSize: "Text size",
    lineHeight: "Line spacing",
    letterSpacing: "Letter spacing",
    standard: "Standard",
    wide: "Wide",
    typeface: "Typeface",
    fonts: [
      { label: "BIZ UDP Gothic", value: "standard" as const },
      { label: "Noto Sans", value: "readable" as const },
    ],
    color: "Colour",
    colorMode: "Colour mode",
    colors: [
      { label: "Standard", value: "standard" as const },
      { label: "High contrast", value: "contrast" as const },
      { label: "Dark", value: "dark" as const },
    ],
    underline: "Underline links",
    stimulus: "Sensory load",
    photosLabel: "Photos",
    photos: [
      { label: "Standard", value: "standard" as const },
      { label: "Low stimulus", value: "calm" as const },
      { label: "Hidden", value: "hidden" as const },
    ],
    motion: "Reduce motion",
    saved: "Settings are saved on this device",
    reset: "Reset",
  },
} as const;

function numberInRange(value: unknown, min: number, max: number, fallback: number) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.min(max, Math.max(min, value))
    : fallback;
}

function normalizePreferences(value: unknown): AccessibilityPreferences {
  if (!value || typeof value !== "object") {
    return defaultPreferences;
  }

  const candidate = value as Partial<AccessibilityPreferences>;
  const colorTheme = colorThemeValues.includes(candidate.colorTheme as ColorTheme)
    ? (candidate.colorTheme as ColorTheme)
    : defaultPreferences.colorTheme;
  const fontMode = fontModeValues.includes(candidate.fontMode as FontMode)
    ? (candidate.fontMode as FontMode)
    : defaultPreferences.fontMode;
  const photoMode = photoModeValues.includes(candidate.photoMode as PhotoMode)
    ? (candidate.photoMode as PhotoMode)
    : defaultPreferences.photoMode;

  return {
    colorTheme,
    emphasizeLinks: candidate.emphasizeLinks === true,
    fontMode,
    fontScale: numberInRange(candidate.fontScale, 100, 200, 100),
    letterSpacing: numberInRange(candidate.letterSpacing, 0, 12, 0),
    lineHeight: numberInRange(candidate.lineHeight, 150, 220, 175),
    photoMode,
    reduceMotion: candidate.reduceMotion === true,
  };
}

function applyPreferences(preferences: AccessibilityPreferences) {
  const root = document.documentElement;

  root.style.setProperty("--font-scale", `${preferences.fontScale}%`);
  root.style.setProperty(
    "--content-line-height",
    String(preferences.lineHeight / 100),
  );
  root.style.setProperty(
    "--content-letter-spacing",
    `${preferences.letterSpacing / 100}em`,
  );
  root.dataset.colorTheme = preferences.colorTheme;
  root.dataset.fontMode = preferences.fontMode;
  root.dataset.photoMode = preferences.photoMode;
  root.dataset.emphasizeLinks = String(preferences.emphasizeLinks);
  root.dataset.reduceMotion = String(preferences.reduceMotion);
  root.dataset.largeText = String(preferences.fontScale >= 125);
}

export function AccessibilitySettings({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const copy = accessibilityCopy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [preferences, setPreferences] =
    useState<AccessibilityPreferences>(defaultPreferences);

  useEffect(() => {
    let storedPreferences = defaultPreferences;

    try {
      const storedValue = localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);
      if (storedValue) {
        storedPreferences = normalizePreferences(JSON.parse(storedValue));
      }
    } catch {
      storedPreferences = defaultPreferences;
    }

    const timer = window.setTimeout(() => {
      setPreferences(storedPreferences);
      applyPreferences(storedPreferences);
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    applyPreferences(preferences);
    try {
      localStorage.setItem(
        ACCESSIBILITY_STORAGE_KEY,
        JSON.stringify(preferences),
      );
    } catch {
      // The display controls still work when browser storage is unavailable.
    }
  }, [isReady, preferences]);

  const updatePreference = <Key extends keyof AccessibilityPreferences>(
    key: Key,
    value: AccessibilityPreferences[Key],
  ) => {
    setPreferences((current) => ({ ...current, [key]: value }));
  };

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <>
      <button
        className="accessibility-trigger"
        type="button"
        aria-label={copy.open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="accessibility-dialog"
        title={copy.open}
        onClick={openDialog}
      >
        <PersonStanding aria-hidden="true" size={29} strokeWidth={1.8} />
      </button>

      <dialog
        ref={dialogRef}
        id="accessibility-dialog"
        className="accessibility-dialog"
        aria-labelledby="accessibility-title"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
      >
        <div className="accessibility-panel">
          <header className="accessibility-panel-header">
            <div>
              <PersonStanding aria-hidden="true" size={28} />
              <h2 id="accessibility-title">{copy.title}</h2>
            </div>
            <button
              className="icon-button"
              type="button"
              aria-label={copy.close}
              title={copy.closeTitle}
              onClick={closeDialog}
            >
              <X aria-hidden="true" size={22} />
            </button>
          </header>

          <div className="accessibility-panel-body">
            <section className="setting-group" aria-labelledby="text-settings">
              <div className="setting-group-heading">
                <Eye aria-hidden="true" size={20} />
                <h3 id="text-settings">{copy.text}</h3>
              </div>

              <div className="range-setting">
                <div className="setting-label">
                  <label htmlFor="font-scale">{copy.fontSize}</label>
                  <output htmlFor="font-scale">{preferences.fontScale}%</output>
                </div>
                <input
                  id="font-scale"
                  type="range"
                  min="100"
                  max="200"
                  step="10"
                  value={preferences.fontScale}
                  onChange={(event) =>
                    updatePreference("fontScale", Number(event.target.value))
                  }
                />
                <div className="range-ends" aria-hidden="true">
                  <span>100%</span>
                  <span>200%</span>
                </div>
              </div>

              <div className="range-setting">
                <div className="setting-label">
                  <label htmlFor="line-height">{copy.lineHeight}</label>
                  <output htmlFor="line-height">{preferences.lineHeight}%</output>
                </div>
                <input
                  id="line-height"
                  type="range"
                  min="150"
                  max="220"
                  step="5"
                  value={preferences.lineHeight}
                  onChange={(event) =>
                    updatePreference("lineHeight", Number(event.target.value))
                  }
                />
                <div className="range-ends" aria-hidden="true">
                  <span>150%</span>
                  <span>220%</span>
                </div>
              </div>

              <div className="range-setting">
                <div className="setting-label">
                  <label htmlFor="letter-spacing">{copy.letterSpacing}</label>
                  <output htmlFor="letter-spacing">
                    {preferences.letterSpacing === 0
                      ? copy.standard
                      : `+${preferences.letterSpacing}%`}
                  </output>
                </div>
                <input
                  id="letter-spacing"
                  type="range"
                  min="0"
                  max="12"
                  step="2"
                  value={preferences.letterSpacing}
                  onChange={(event) =>
                    updatePreference("letterSpacing", Number(event.target.value))
                  }
                />
                <div className="range-ends" aria-hidden="true">
                  <span>{copy.standard}</span>
                  <span>{copy.wide}</span>
                </div>
              </div>

              <fieldset className="choice-setting">
                <legend>{copy.typeface}</legend>
                <div className="segmented-control two-options">
                  {copy.fonts.map((font) => (
                    <label key={font.value}>
                      <input
                        type="radio"
                        name="font-mode"
                        value={font.value}
                        checked={preferences.fontMode === font.value}
                        onChange={() => updatePreference("fontMode", font.value)}
                      />
                      <span>{font.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </section>

            <section className="setting-group" aria-labelledby="color-settings">
              <div className="setting-group-heading">
                <Contrast aria-hidden="true" size={20} />
                <h3 id="color-settings">{copy.color}</h3>
              </div>

              <fieldset className="choice-setting">
                <legend>{copy.colorMode}</legend>
                <div className="segmented-control three-options">
                  {copy.colors.map((theme) => (
                    <label key={theme.value}>
                      <input
                        type="radio"
                        name="color-theme"
                        value={theme.value}
                        checked={preferences.colorTheme === theme.value}
                        onChange={() =>
                          updatePreference("colorTheme", theme.value)
                        }
                      />
                      <span>{theme.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="toggle-setting">
                <span>
                  <LinkIcon aria-hidden="true" size={19} />
                  {copy.underline}
                </span>
                <input
                  type="checkbox"
                  checked={preferences.emphasizeLinks}
                  onChange={(event) =>
                    updatePreference("emphasizeLinks", event.target.checked)
                  }
                />
              </label>
            </section>

            <section className="setting-group" aria-labelledby="sensory-settings">
              <div className="setting-group-heading">
                <ImageOff aria-hidden="true" size={20} />
                <h3 id="sensory-settings">{copy.stimulus}</h3>
              </div>

              <fieldset className="choice-setting">
                <legend>{copy.photosLabel}</legend>
                <div className="segmented-control three-options">
                  {copy.photos.map((mode) => (
                    <label key={mode.value}>
                      <input
                        type="radio"
                        name="photo-mode"
                        value={mode.value}
                        checked={preferences.photoMode === mode.value}
                        onChange={() => updatePreference("photoMode", mode.value)}
                      />
                      <span>{mode.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="toggle-setting">
                <span>{copy.motion}</span>
                <input
                  type="checkbox"
                  checked={preferences.reduceMotion}
                  onChange={(event) =>
                    updatePreference("reduceMotion", event.target.checked)
                  }
                />
              </label>
            </section>
          </div>

          <footer className="accessibility-panel-footer">
            <p>{copy.saved}</p>
            <button
              className="reset-button"
              type="button"
              onClick={resetPreferences}
            >
              <RotateCcw aria-hidden="true" size={17} />
              {copy.reset}
            </button>
          </footer>
        </div>
      </dialog>
    </>
  );
}
