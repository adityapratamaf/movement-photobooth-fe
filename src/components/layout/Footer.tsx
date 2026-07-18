import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import {
  brand,
  contactInfo,
  footerGroups,
  socialLinks,
} from "@/modules/landing-page/data/dummy";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-surface-soft">
      <Container className="py-5 lg:py-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              Photobooth profesional yang siap membuat setiap momen di acara Anda menjadi
              tak terlupakan.
            </p>
            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 text-brand-500 transition-colors hover:bg-brand-50"
                  >
                    <Icon name={social.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-ink">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-semibold text-ink">Kontak Kami</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-ink-muted">
                  <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 pt-5">
          <p className="text-center text-xs text-ink-muted">
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
