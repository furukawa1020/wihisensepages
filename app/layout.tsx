import type { Metadata } from "next";
import "./globals.css";

const accessibilityBootstrap = `
(function () {
  try {
    var raw = localStorage.getItem("with-sense-accessibility-preferences-v1");
    if (!raw) return;
    var value = JSON.parse(raw);
    var root = document.documentElement;
    var clamp = function (number, min, max, fallback) {
      return typeof number === "number" && isFinite(number)
        ? Math.min(max, Math.max(min, number))
        : fallback;
    };
    var fontScale = clamp(value.fontScale, 100, 200, 100);
    var lineHeight = clamp(value.lineHeight, 150, 220, 185);
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

export const metadata: Metadata = {
  metadataBase: new URL("https://with-sense.pages.dev"),
  title: {
    default: "With Sense",
    template: "%s | With Sense",
  },
  description:
    "「感覚の多様性」をキーワードに、感覚にやさしい大学・社会の実現を目指すWith Senseの公式ホームページです。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "With Sense",
    description:
      "「感覚の多様性」をキーワードに、感覚にやさしい大学・社会をつくる。",
    type: "website",
    url: "/",
    siteName: "With Sense",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "With Senseのロゴ",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "With Sense",
    description:
      "「感覚の多様性」をキーワードに、感覚にやさしい大学・社会をつくる。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: accessibilityBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
