"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/modules/landing-page/data/dummy";

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

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
            <ul className="flex gap-4">
              {galleryImages.map((image) => (
                <li
                  key={image.id}
                  className="min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
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
    </section>
  );
}
