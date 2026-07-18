import Image from "next/image";
import { RiArrowRightLine, RiPlayFill } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Reveal } from "@/components/shared/Reveal";
import { HeroHighlight } from "@/modules/landing-page/components/hero/HeroHighlight";
import { heroHighlights, brand } from "@/modules/landing-page/data/dummy";

export function HeroSection() {
  return (
    <section id="beranda" className="bg-surface-soft">
      <Container className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <Reveal className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Movement Photobooth
          </span>

          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Abadikan Setiap Momen{" "}
            <span className="text-brand-500">Bersama Kami</span>
          </h1>

          <p className="max-w-lg text-base text-ink-muted sm:text-lg">
            Photobooth premium dengan cetak instan, properti seru, dan tim profesional
            untuk membuat acara Anda semakin berkesan.
          </p>

          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            action="#paket"
            aria-label="Cek ketersediaan tanggal"
          >
            <label htmlFor="event-date" className="sr-only">
              Tanggal acara Anda
            </label>
            <Input
              id="event-date"
              type="date"
              name="date"
              aria-label="Tanggal acara Anda"
            />
            <Button type="submit" className="shrink-0">
              Cek Tanggal
            </Button>
          </form>

          <ul className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
            {heroHighlights.map((highlight) => (
              <li key={highlight.label}>
                <HeroHighlight highlight={highlight} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
              alt="Pasangan berfoto ceria di Movement Photobooth"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <a
              href={brand.whatsappUrl}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Tonton video kami"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-500 shadow-lg transition-transform hover:scale-105">
                <RiPlayFill className="h-7 w-7" aria-hidden />
              </span>
            </a>
          </div>

          <div className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full bg-surface px-4 py-2 shadow-md">
            <span className="text-sm font-semibold text-ink">500+ Acara Sukses</span>
            <RiArrowRightLine className="h-4 w-4 text-brand-500" aria-hidden />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
