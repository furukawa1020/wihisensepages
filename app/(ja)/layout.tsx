import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteDocument } from "@/components/SiteDocument";
import { createSiteMetadata } from "@/data/metadata";

export const metadata: Metadata = createSiteMetadata("ja");

export default function JapaneseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteDocument locale="ja">{children}</SiteDocument>;
}
