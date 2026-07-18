import Image from "next/image";
import { RiCalendarLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { HeroHighlight } from "@/modules/landing-page/components/hero/HeroHighlight";
import { heroHighlights, brand } from "@/modules/landing-page/data/dummy";

const heroImage =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80";

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-surface-soft">
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Image
          src={heroImage}
          alt="Movement Photobooth di sebuah acara"
          fill
          priority
          sizes="55vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-soft via-surface-soft/20 to-transparent" />
      </div>

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
                <RiCalendarLine className="h-5 w-5" aria-hidden />
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

          <div className="lg:hidden">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={heroImage}
                alt="Movement Photobooth di sebuah acara"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
