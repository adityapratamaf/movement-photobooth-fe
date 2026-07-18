import Image from "next/image";
import { RiDoubleQuotesL } from "@remixicon/react";

import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/modules/landing-page/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <figure className="flex h-full flex-col gap-5">
        <RiDoubleQuotesL className="h-10 w-10 text-brand-400" aria-hidden />
        <blockquote className="text-sm leading-relaxed text-ink-muted">
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-auto flex items-center gap-3 border-t border-brand-100 pt-4">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.avatar}
              alt={`Foto ${testimonial.name}`}
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold text-ink">{testimonial.name}</span>
            <span className="text-xs text-ink-muted">{testimonial.location}</span>
          </span>
        </figcaption>
      </figure>
    </Card>
  );
}
