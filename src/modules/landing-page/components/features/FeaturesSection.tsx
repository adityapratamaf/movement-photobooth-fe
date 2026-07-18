import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { FeatureCard } from "@/modules/landing-page/components/features/FeatureCard";
import { features, brand } from "@/modules/landing-page/data/dummy";

export function FeaturesSection() {
  return (
    <section id="layanan" className="bg-surface">
      <Container className="grid gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <Reveal className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="Mengapa Memilih Kami"
            titleBefore="Kami Buat Momen Berharga Menjadi "
            highlight="Tak Terlupakan"
          />
          <p className="max-w-md text-base text-ink-muted">
            Dengan pengalaman bertahun-tahun, kami siap menghadirkan keseruan photobooth
            yang profesional dan penuh kenangan di setiap acara.
          </p>
          <Button href={brand.whatsappUrl}>Selengkapnya</Button>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
