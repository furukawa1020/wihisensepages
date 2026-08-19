import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

const languages = {
  ja: SITE_URL + "/",
  en: SITE_URL + "/en",
  "x-default": SITE_URL + "/",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL + "/",
      lastModified: new Date("2026-08-19"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: SITE_URL + "/en",
      lastModified: new Date("2026-08-19"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
  ];
}
