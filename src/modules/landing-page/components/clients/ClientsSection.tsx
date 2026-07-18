import { Container } from "@/components/ui/Container";
import { ClientMarquee } from "@/modules/landing-page/components/clients/ClientMarquee";
import { clientLogos } from "@/modules/landing-page/data/dummy";

export function ClientsSection() {
  return (
    <section aria-label="Klien dan partner Movement Photobooth" className="bg-background">
      {/* <Container className="pt-5 lg:pt-5">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-ink-muted">
          Dipercaya oleh berbagai brand &amp; acara
        </p>
      </Container> */}
      <div className="py-5 lg:py-5">
        <ClientMarquee logos={clientLogos} />
      </div>
    </section>
  );
}
