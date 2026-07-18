import Image from "next/image";
import { RiCalendarLine, RiPlayFill } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";
import { HeroHighlight } from "@/modules/landing-page/components/hero/HeroHighlight";
import { heroHighlights, brand } from "@/modules/landing-page/data/dummy";

const heroImage =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80";

function PlayButton() {
  return (
    <a
      href={brand.whatsappUrl}
      className="flex flex-col items-center gap-3"
      aria-label="Tonton video kami"
    >
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-500 shadow-lg transition-transform hover:scale-105">
        <RiPlayFill className="h-7 w-7" aria-hidden />
      </span>
      <span className="text-sm font-medium text-white drop-shadow">Tonton Video Kami</span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-surface-soft">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src={heroImage}
          alt="Pasangan bahagia berfoto di Movement Photobooth"
          fill
          priority
          sizes="60vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-soft via-surface-soft/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlayButton />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full border-2 border-brand-200"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-brand-200/40 blur-2xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 py-5 lg:min-h-[34rem] lg:grid-cols-2 lg:py-5">
          <Reveal className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              Movement Photobooth
            </span>

            <h1 className="text-4xl font-bold leading-[1.15] text-ink sm:text-5xl">
              Abadikan Setiap Momen{" "}
              <span className="text-brand-500">Bersama Kami</span>
            </h1>

            <p className="max-w-md text-base text-ink-muted">
              Kami hadir untuk membuat setiap acara Anda semakin berkesan dengan cetak
              instan, properti seru, dan tim profesional.
            </p>

            <form
              className="flex w-full max-w-md items-center gap-2 rounded-full border border-brand-100 bg-surface p-2 shadow-lg"
              action="#paket"
              aria-label="Cek ketersediaan tanggal"
            >
              <label htmlFor="event-date" className="sr-only">
                Tanggal acara Anda
              </label>
              <input
                id="event-date"
                type="text"
                name="date"
                placeholder="Cek ketersediaan tanggal Anda"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink-muted"
              />
              <RiCalendarLine className="h-5 w-5 shrink-0 text-brand-400" aria-hidden />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                Cek Tanggal
              </button>
            </form>

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
                alt="Pasangan bahagia berfoto di Movement Photobooth"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <PlayButton />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
