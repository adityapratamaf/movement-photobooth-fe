"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Modal } from "@/components/ui/Modal";
import { galleryImages } from "@/modules/landing-page/data/dummy";
import type { GalleryImage } from "@/modules/landing-page/types";

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="galeri" className="bg-surface">
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col items-center gap-4">
          <SectionHeading
            eyebrow="Galeri"
            titleBefore="Momen Seru Yang Telah Kami "
            highlight="Abadikan"
          />
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <ul className="flex -ml-4">
              {galleryImages.map((image) => (
                <li
                  key={image.id}
                  className="min-w-0 flex-[0_0_80%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Foto sebelumnya"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 text-brand-500 transition-colors hover:bg-brand-50"
            >
              <RiArrowLeftSLine className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Foto berikutnya"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 text-brand-500 transition-colors hover:bg-brand-50"
            >
              <RiArrowRightSLine className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </Container>

      <Modal
        open={activeImage !== null}
        onOpenChange={(open) => {
          if (!open) setActiveImage(null);
        }}
        title={activeImage?.alt ?? "Galeri Movement Photobooth"}
      >
        {activeImage ? (
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={1200}
            height={900}
            sizes="92vw"
            className="h-auto max-h-[85vh] w-full rounded-2xl object-contain"
          />
        ) : null}
      </Modal>
    </section>
  );
}
