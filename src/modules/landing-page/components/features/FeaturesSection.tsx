import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { FeatureCard } from "@/modules/landing-page/components/features/FeatureCard";
import { features, brand } from "@/modules/landing-page/data/dummy";

export function FeaturesSection() {
  return (
    <section id="layanan" className="bg-surface">
      <Container className="py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="flex flex-col items-start gap-6 lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow="Mengapa Memilih Kami"
              titleBefore="Kami Membuat Momen Berharga Menjadi "
              highlight="Tak Terlupakan"
            />
            <p className="text-base text-ink-muted lg:text-lg">
              Dengan pengalaman bertahun-tahun, kami siap menghadirkan keseruan photobooth
              yang profesional dan penuh kenangan di setiap acara.
            </p>
            <Button href={brand.whatsappUrl}>Selengkapnya</Button>
          </Reveal>

          <div className="lg:col-span-9">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.1} className="h-full">
                  <FeatureCard feature={feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
