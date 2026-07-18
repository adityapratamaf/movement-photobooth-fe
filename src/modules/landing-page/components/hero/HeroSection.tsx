import { RiCalendarLine, RiGiftLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { HeroHighlight } from "@/modules/landing-page/components/hero/HeroHighlight";
import { HeroCarousel } from "@/modules/landing-page/components/hero/HeroCarousel";
import { heroHighlights, heroSlides, brand } from "@/modules/landing-page/data/dummy";

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-surface">
      <Container className="relative">
        <div className="grid items-center gap-10 py-5 lg:min-h-[34rem] lg:grid-cols-2 lg:py-5">
          <Reveal className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              Movement Photobooth
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Abadikan Setiap Momen{" "}
              <span className="text-brand-500">Bersama Kami</span>
            </h1>

            <p className="max-w-md text-base text-ink-muted">
              Kami hadir untuk membuat setiap acara Anda semakin berkesan dengan cetak
              instan, properti seru, dan tim profesional.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={brand.whatsappUrl}>
                <RiCalendarLine className="h-5 w-5" aria-hidden />
                Cek Tanggal
              </Button>
              <Button href="#paket" variant="outline">
                <RiGiftLine className="h-5 w-5" aria-hidden />
                Lihat Paket
              </Button>
            </div>

            <ul className="grid grid-cols-2 gap-6 pt-2 sm:grid-cols-4">
              {heroHighlights.map((highlight) => (
                <li key={highlight.label} className="flex justify-center">
                  <HeroHighlight highlight={highlight} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>

      <div className="relative mt-6 h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[52%]">
        <HeroCarousel slides={heroSlides} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-surface to-transparent lg:block"
        />
      </div>
    </section>
  );
}
