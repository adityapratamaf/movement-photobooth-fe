import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { brand } from "@/modules/landing-page/data/dummy";

export function CtaSection() {
  return (
    <section id="tentang" className="bg-surface">
      <Container className="py-8 lg:py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-500 px-6 py-12 sm:px-12">
            <Image
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="flex flex-col gap-2">
                <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
                  Siap Membuat Acara Anda Semakin Berkesan?
                </h2>
                <p className="max-w-lg text-sm text-white/80 sm:text-base">
                  Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik.
                </p>
              </div>
              <Button
                href={brand.whatsappUrl}
                variant="outline"
                className="shrink-0 border-white bg-white text-brand-600 hover:bg-white/90"
              >
                Hubungi Kami
                <RiArrowRightLine className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
