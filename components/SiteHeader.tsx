"use client";

import Image from "next/image";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { getSiteContent, type Locale } from "@/data/site";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const content = getSiteContent(locale);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="With Sense">
          <Image
            src="/assets/logo-circle.png"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span>With Sense</span>
        </a>

        <nav className="desktop-nav" aria-label={content.navLabel}>
          {content.nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-controls">
          <div className="language-switch" aria-label={content.language.label}>
            <Languages aria-hidden="true" size={18} />
            <span aria-current="page">{content.language.current}</span>
            <span aria-hidden="true">/</span>
            <a href={content.language.otherHref}>{content.language.other}</a>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? content.menuClose : content.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={"mobile-nav" + (open ? " is-open" : "")}
        aria-label={content.navLabel}
      >
        {content.nav.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
