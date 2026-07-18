"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import type { GalleryImage } from "@/modules/landing-page/types";

interface HeroCarouselProps {
  slides: GalleryImage[];
  interval?: number;
}

export function HeroCarousel({ slides, interval = 10000 }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!isPausedRef.current) emblaApi.scrollNext();
    }, interval);
    return () => clearInterval(id);
  }, [emblaApi, interval]);

  return (
    <div
      className="h-full w-full"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-right"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
