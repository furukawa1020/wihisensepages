"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AccessibilitySettings } from "@/components/AccessibilitySettings";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="With Sense トップへ">
          <Image
            src="/assets/logo-circle.png"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span>With Sense</span>
        </a>

        <nav className="desktop-nav" aria-label="サイト内ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-controls">
          <AccessibilitySettings />
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
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
        aria-label="モバイルナビゲーション"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
