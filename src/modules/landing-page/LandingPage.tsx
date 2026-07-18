import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/modules/landing-page/components/hero/HeroSection";
import { FeaturesSection } from "@/modules/landing-page/components/features/FeaturesSection";
import { PackagesSection } from "@/modules/landing-page/components/packages/PackagesSection";
import { GallerySection } from "@/modules/landing-page/components/gallery/GallerySection";
import { TestimonialSection } from "@/modules/landing-page/components/testimonial/TestimonialSection";
import { CtaSection } from "@/modules/landing-page/components/cta/CtaSection";

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PackagesSection />
        <GallerySection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
