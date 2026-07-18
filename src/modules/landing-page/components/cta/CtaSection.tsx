import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { brand } from "@/modules/landing-page/data/dummy";

export function CtaSection() {
  return (
    <section id="tentang" className="bg-surface">
      <Container className="py-16 lg:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-500 px-8 py-14 sm:px-14 sm:py-16">
            <Image
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="flex flex-col gap-2">
                <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
                  Biar Acara Makin Berkesan,
                  <br />
                  Semua Tamu Pulang Bawa Kenangan.
                </h2>
                <p className="max-w-lg text-base text-white/80 sm:text-lg">
                  Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik.
                </p>
              </div>
              <Button
                href={brand.whatsappUrl}
                variant="outline"
                className="shrink-0 border-white bg-white text-brand-600 hover:bg-white/90"
              >
                Hubungi Kami
                <RiArrowRightLine className="h-5 w-5" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
