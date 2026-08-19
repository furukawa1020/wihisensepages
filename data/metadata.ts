import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/data/site";

const seoCopy = {
  ja: {
    title: "With Sense｜感覚にやさしい大学・社会をつくる",
    description:
      "With Senseは、感覚の多様性をキーワードに、啓発・発信、感覚にやさしい空間・式典づくり、コミュニティづくりに取り組む団体です。",
    locale: "ja_JP",
    keywords: [
      "With Sense",
      "感覚の多様性",
      "感覚過敏",
      "センサリールーム",
      "Sensory Book Lounge",
      "金沢大学",
      "金沢",
    ],
  },
  en: {
    title: "With Sense | Sensory-friendly spaces and communities",
    description:
      "With Sense is a Kanazawa-based initiative raising awareness of sensory diversity and creating sensory-friendly spaces, ceremonies, and communities.",
    locale: "en_US",
    keywords: [
      "With Sense",
      "sensory diversity",
      "sensory accessibility",
      "sensory room",
      "Sensory Book Lounge",
      "Kanazawa University",
      "Kanazawa",
    ],
  },
} as const;

export function createSiteMetadata(locale: Locale): Metadata {
  const copy = seoCopy[locale];
  const canonical = locale === "ja" ? "/" : "/en";
  const ogImage = new URL("/og-image.png", SITE_URL);

  return {
    metadataBase: new URL(SITE_URL),
    title: copy.title,
    description: copy.description,
    applicationName: "With Sense",
    creator: "With Sense",
    publisher: "With Sense",
    category: "community",
    keywords: [...copy.keywords],
    alternates: {
      canonical,
      languages: {
        ja: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    icons: {
      icon: "/icon.png",
      apple: "/icon.png",
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: "website",
      url: canonical,
      siteName: "With Sense",
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 1024,
          alt: "With Sense logo",
        },
      ],
      locale: copy.locale,
      alternateLocale: locale === "ja" ? ["en_US"] : ["ja_JP"],
    },
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
