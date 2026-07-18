import { RiArrowRightSLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PackageCard } from "@/modules/landing-page/components/packages/PackageCard";
import { packages, brand } from "@/modules/landing-page/data/dummy";

export function PackagesSection() {
  return (
    <section id="paket" className="bg-surface-soft">
      <Container className="py-5 lg:py-5">
        <SectionHeading
          className="mx-auto"
          eyebrow="Layanan Kami"
          titleBefore="Paket Photobooth "
          highlight="Terbaik"
          titleAfter=" Untuk Anda"
          subtitle="Pilih paket yang sesuai dengan kebutuhan dan budget acara Anda."
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {packages.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1} className="h-full">
              <PackageCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:justify-end">
          <a
            href={brand.whatsappUrl}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            Lihat Semua Paket
            <RiArrowRightSLine className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
