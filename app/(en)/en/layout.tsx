import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteDocument } from "@/components/SiteDocument";
import { createSiteMetadata } from "@/data/metadata";

export const metadata: Metadata = createSiteMetadata("en");

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
