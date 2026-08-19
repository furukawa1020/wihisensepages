import type { ReactNode } from "react";
import type { Locale } from "@/data/site";

const accessibilityBootstrap = `
(function () {
  try {
    var raw = localStorage.getItem("with-sense-accessibility-preferences-v2");
    if (!raw) return;
    var value = JSON.parse(raw);
    var root = document.documentElement;
    var clamp = function (number, min, max, fallback) {
      return typeof number === "number" && isFinite(number)
        ? Math.min(max, Math.max(min, number))
        : fallback;
    };
    var fontScale = clamp(value.fontScale, 100, 200, 100);
    var lineHeight = clamp(value.lineHeight, 150, 220, 175);
    var letterSpacing = clamp(value.letterSpacing, 0, 12, 0);
    var colorTheme = ["standard", "contrast", "dark"].indexOf(value.colorTheme) >= 0
      ? value.colorTheme
      : "standard";
    var fontMode = ["standard", "readable"].indexOf(value.fontMode) >= 0
      ? value.fontMode
      : "standard";
    var photoMode = ["standard", "calm", "hidden"].indexOf(value.photoMode) >= 0
      ? value.photoMode
      : "standard";

    root.style.setProperty("--font-scale", fontScale + "%");
    root.style.setProperty("--content-line-height", String(lineHeight / 100));
    root.style.setProperty("--content-letter-spacing", letterSpacing / 100 + "em");
    root.dataset.colorTheme = colorTheme;
    root.dataset.fontMode = fontMode;
    root.dataset.photoMode = photoMode;
    root.dataset.emphasizeLinks = String(value.emphasizeLinks === true);
    root.dataset.reduceMotion = String(value.reduceMotion === true);
    root.dataset.largeText = String(fontScale >= 125);
  } catch (error) {}
})();
`;

export function SiteDocument({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <script
          id="accessibility-bootstrap"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: accessibilityBootstrap }}
        />
        {children}
      </body>
    </html>
  );
}
