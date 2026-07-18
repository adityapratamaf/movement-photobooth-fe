import { RiArrowRightUpLine } from "@remixicon/react";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Input } from "@/components/ui/Input";
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
      <Container className="py-12">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-11">
          <div className="sm:col-span-2 lg:col-span-3">
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
            <nav key={group.title} aria-label={group.title} className="lg:col-span-2">
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

          <div className="lg:col-span-2">
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

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-sm font-semibold text-ink">Newsletter</h2>
            <p className="mt-4 text-sm text-ink-muted">
              Dapatkan info promo dan tips acara menarik dari kami.
            </p>
            <form
              className="relative mt-4"
              action="#"
              aria-label="Berlangganan newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Alamat email
              </label>
              <Input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Masukkan email Anda"
                required
                className="pr-14"
              />
              <button
                type="submit"
                aria-label="Berlangganan"
                className="absolute right-1.5 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                <RiArrowRightUpLine className="h-4 w-4" aria-hidden />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-100 pt-6">
          <p className="text-center text-xs text-ink-muted">
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
