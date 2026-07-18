"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/modules/landing-page/components/testimonial/TestimonialCard";
import { testimonials } from "@/modules/landing-page/data/dummy";

const AUTOPLAY_DELAY = 3500;

export function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isPausedRef = useRef(false);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!isPausedRef.current) emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimoni">
      {/* Background pink dinonaktifkan (sebelumnya className="bg-surface-soft") */}
      <Container className="py-5 lg:py-5">
        <SectionHeading
          className="mx-auto"
          eyebrow="Testimoni"
          titleBefore="Kata Mereka Tentang "
          highlight="Kami"
        />

        <div
          className="mt-10 overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          <ul className="flex -ml-6">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ke testimoni ${index + 1}`}
              aria-current={selectedIndex === index}
              className={cn(
                "h-2 rounded-full transition-all",
                selectedIndex === index ? "w-6 bg-brand-500" : "w-2 bg-brand-200",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
