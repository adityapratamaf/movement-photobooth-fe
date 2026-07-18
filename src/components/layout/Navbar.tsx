"use client";

import { useEffect, useRef, useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navItems, brand } from "@/modules/landing-page/data/dummy";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("beranda");
  const atBottomRef = useRef(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (atBottomRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const lastId = navItems[navItems.length - 1].href.replace("#", "");
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      atBottomRef.current = nearBottom;
      if (nearBottom) setActiveId(lastId);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-surface/90 backdrop-blur">
      <Container>
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Navigasi utama"
        >
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative text-base font-medium transition-colors",
                      isActive ? "text-brand-500" : "text-ink hover:text-brand-500",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-500 transition-opacity",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
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
              {navItems.map((item) => {
                const isActive = activeId === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-50 text-brand-500"
                          : "text-ink hover:bg-brand-50 hover:text-brand-500",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
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
