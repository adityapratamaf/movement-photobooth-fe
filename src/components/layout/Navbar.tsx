"use client";

import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navItems, brand } from "@/modules/landing-page/data/dummy";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-surface/90 backdrop-blur">
      <Container>
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Navigasi utama"
        >
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ink transition-colors hover:text-brand-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={brand.whatsappUrl} size="sm">
              Hubungi Kami
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? (
              <RiCloseLine className="h-6 w-6" aria-hidden />
            ) : (
              <RiMenuLine className="h-6 w-6" aria-hidden />
            )}
          </button>
        </nav>

        {isOpen ? (
          <div id="mobile-menu" className="pb-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href={brand.whatsappUrl}
              size="sm"
              className="mt-3 w-full"
              onClick={closeMenu}
            >
              Hubungi Kami
            </Button>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
