export type IconName =
  | "camera"
  | "heart"
  | "team"
  | "star"
  | "shield"
  | "gift"
  | "time"
  | "printer"
  | "sparkling"
  | "tools"
  | "customer-service"
  | "instagram"
  | "facebook"
  | "youtube"
  | "tiktok"
  | "phone"
  | "mail"
  | "map-pin";

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureHighlight {
  icon: IconName;
  label: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  image: string;
  features: string[];
  isPopular: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface ClientLogo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

export interface SocialLink {
  icon: IconName;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}
