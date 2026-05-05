import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://with-sense.pages.dev"),
  title: "学生団体 With Sense",
  description:
    "「感覚の多様性」をキーワードに活動する金沢大学の学生団体 With Sense の公式ホームページです。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "学生団体 With Sense",
    description:
      "感覚にやさしい大学・社会の実現を目指して活動する金沢大学の学生団体です。",
    type: "website",
    url: "/",
    siteName: "学生団体 With Sense",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "学生団体 With Senseのロゴ",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "学生団体 With Sense",
    description:
      "「感覚の多様性」をキーワードに活動する金沢大学の学生団体です。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
