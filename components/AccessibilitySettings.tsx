"use client";

import {
  Accessibility,
  Contrast,
  Eye,
  ImageOff,
  Link as LinkIcon,
  RotateCcw,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ACCESSIBILITY_STORAGE_KEY =
  "with-sense-accessibility-preferences-v1";

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
  lineHeight: 185,
  photoMode: "standard",
  reduceMotion: false,
};

const colorThemes: Array<{ label: string; value: ColorTheme }> = [
  { label: "標準", value: "standard" },
  { label: "高コントラスト", value: "contrast" },
  { label: "ダーク", value: "dark" },
];

const fontModes: Array<{ label: string; value: FontMode }> = [
  { label: "標準", value: "standard" },
  { label: "UDゴシック", value: "readable" },
];

const photoModes: Array<{ label: string; value: PhotoMode }> = [
  { label: "標準", value: "standard" },
  { label: "低刺激", value: "calm" },
  { label: "非表示", value: "hidden" },
];

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
  const colorTheme = colorThemes.some(
    (theme) => theme.value === candidate.colorTheme,
  )
    ? (candidate.colorTheme as ColorTheme)
    : defaultPreferences.colorTheme;
  const fontMode = fontModes.some((font) => font.value === candidate.fontMode)
    ? (candidate.fontMode as FontMode)
    : defaultPreferences.fontMode;
  const photoMode = photoModes.some((mode) => mode.value === candidate.photoMode)
    ? (candidate.photoMode as PhotoMode)
    : defaultPreferences.photoMode;

  return {
    colorTheme,
    emphasizeLinks: candidate.emphasizeLinks === true,
    fontMode,
    fontScale: numberInRange(candidate.fontScale, 100, 200, 100),
    letterSpacing: numberInRange(candidate.letterSpacing, 0, 12, 0),
    lineHeight: numberInRange(candidate.lineHeight, 150, 220, 185),
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

export function AccessibilitySettings() {
  const dialogRef = useRef<HTMLDialogElement>(null);
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

    setPreferences(storedPreferences);
    applyPreferences(storedPreferences);
    setIsReady(true);
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
        aria-label="表示を調整する"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="accessibility-dialog"
        title="表示を調整する"
        onClick={openDialog}
      >
        <Accessibility aria-hidden="true" size={25} strokeWidth={1.8} />
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
              <Accessibility aria-hidden="true" size={28} />
              <h2 id="accessibility-title">表示の調整</h2>
            </div>
            <button
              className="icon-button"
              type="button"
              aria-label="表示設定を閉じる"
              title="閉じる"
              onClick={closeDialog}
            >
              <X aria-hidden="true" size={22} />
            </button>
          </header>

          <div className="accessibility-panel-body">
            <section className="setting-group" aria-labelledby="text-settings">
              <div className="setting-group-heading">
                <Eye aria-hidden="true" size={20} />
                <h3 id="text-settings">文字</h3>
              </div>

              <div className="range-setting">
                <div className="setting-label">
                  <label htmlFor="font-scale">文字サイズ</label>
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
                  <label htmlFor="line-height">行間</label>
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
                  <label htmlFor="letter-spacing">文字間隔</label>
                  <output htmlFor="letter-spacing">
                    {preferences.letterSpacing === 0
                      ? "標準"
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
                  <span>標準</span>
                  <span>広い</span>
                </div>
              </div>

              <fieldset className="choice-setting">
                <legend>字体</legend>
                <div className="segmented-control two-options">
                  {fontModes.map((font) => (
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
                <h3 id="color-settings">配色</h3>
              </div>

              <fieldset className="choice-setting">
                <legend>カラーモード</legend>
                <div className="segmented-control three-options">
                  {colorThemes.map((theme) => (
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
                  リンクに下線を表示
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
                <h3 id="sensory-settings">刺激</h3>
              </div>

              <fieldset className="choice-setting">
                <legend>写真</legend>
                <div className="segmented-control three-options">
                  {photoModes.map((mode) => (
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
                <span>動きを減らす</span>
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
            <p>設定はこの端末に保存されます</p>
            <button
              className="reset-button"
              type="button"
              onClick={resetPreferences}
            >
              <RotateCcw aria-hidden="true" size={17} />
              標準に戻す
            </button>
          </footer>
        </div>
      </dialog>
    </>
  );
}
