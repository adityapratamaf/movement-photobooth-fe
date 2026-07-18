import type {
  FeatureHighlight,
  Feature,
  FooterLinkGroup,
  GalleryImage,
  NavItem,
  PackageItem,
  SocialLink,
  Testimonial,
} from "@/modules/landing-page/types";

export const brand = {
  name: "Movement",
  suffix: "Photobooth",
  whatsappUrl: "https://wa.me/6281234567890",
} as const;

export const navItems: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#paket" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export const heroHighlights: FeatureHighlight[] = [
  { icon: "camera", label: "Kualitas Foto HD" },
  { icon: "printer", label: "Cetak Instan Unlimited" },
  { icon: "gift", label: "Properti Seru & Lengkap" },
  { icon: "tools", label: "Setup Cepat & Praktis" },
];

export const heroSlides: GalleryImage[] = [
  {
    id: "hero-1",
    src: "/images/hero/heros-1.png",
    alt: "Booth foto Movement Photobooth mencetak strip foto instan",
  },
  // {
  //   id: "hero-2",
  //   src: "/images/hero/heros-2.png",
  //   alt: "Movement Photobooth dengan hasil cetak foto di sebuah acara",
  // },
  // {
  //   id: "hero-3",
  //   src: "/images/hero/heros-3.png",
  //   alt: "Booth foto Movement Photobooth siap dipakai di acara",
  // },
];

export const features: Feature[] = [
  {
    icon: "camera",
    title: "Hasil Foto Premium",
    description: "Kamera profesional dengan pencahayaan studio untuk hasil tajam di setiap jepretan.",
  },
  {
    icon: "printer",
    title: "Cetak Instan",
    description: "Tamu langsung membawa pulang foto cetak berkualitas dalam hitungan detik.",
  },
  {
    icon: "team",
    title: "Tim Profesional",
    description: "Operator ramah dan berpengalaman siap memandu keseruan sepanjang acara.",
  },
  {
    icon: "customer-service",
    title: "Dukungan Penuh",
    description: "Kami dampingi dari perencanaan hingga acara selesai tanpa repot.",
  },
];

export const packages: PackageItem[] = [
  {
    id: "basic",
    name: "Basic Booth",
    price: "Rp 2.500.000",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    features: [
      "Durasi 3 Jam",
      "Cetak Unlimited",
      "Properti Standar",
      "1 Operator",
    ],
    isPopular: false,
  },
  {
    id: "premium",
    name: "Premium Booth",
    price: "Rp 4.500.000",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    features: [
      "Durasi 5 Jam",
      "Cetak Unlimited",
      "Properti Lengkap",
      "2 Operator",
      "Soft File Digital",
    ],
    isPopular: true,
  },
  {
    id: "luxury",
    name: "Luxury Booth",
    price: "Rp 7.500.000",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Durasi 8 Jam",
      "Cetak Unlimited",
      "Properti Eksklusif",
      "3 Operator",
      "Soft File Digital",
      "Custom Backdrop",
    ],
    isPopular: false,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Tamu berpose ceria di photobooth pernikahan",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    alt: "Momen tawa bersama teman di acara",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    alt: "Kelompok teman menikmati properti photobooth",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    alt: "Suasana pesta dengan photobooth",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    alt: "Pasangan berfoto di backdrop bunga",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    alt: "Dekorasi meja acara yang elegan",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Photobooth-nya jadi pusat keramaian di pernikahan kami. Hasil foto rapi dan tamu senang sekali!",
    name: "Aulia & Dimas",
    location: "Jakarta",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t2",
    quote:
      "Timnya profesional, propertinya lengkap, dan cetak instannya cepat. Sangat direkomendasikan!",
    name: "Sabrina & Andi",
    location: "Bandung",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t3",
    quote:
      "Backdrop custom-nya mewah dan sesuai tema acara kantor kami. Semua tamu antusias berfoto.",
    name: "Rina & Kevin",
    location: "Surabaya",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t4",
    quote:
      "Antriannya cepat walau tamu ratusan. Operatornya sabar dan ramah membantu semua orang berpose.",
    name: "Nadia & Reza",
    location: "Depok",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t5",
    quote:
      "Kualitas cetaknya bagus banget, warnanya tajam dan nggak luntur. Jadi kenang-kenangan yang berkesan.",
    name: "Farhan Maulana",
    location: "Tangerang",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t6",
    quote:
      "Booth-nya estetik dan instagramable. Acara ulang tahun anak kami jadi makin meriah dan seru.",
    name: "Clara Wijaya",
    location: "Bekasi",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t7",
    quote:
      "Booking sampai hari-H sangat gampang. Setup rapi, tepat waktu, dan hasilnya melebihi ekspektasi.",
    name: "Bagus Pratama",
    location: "Bogor",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t8",
    quote:
      "Properti dan filternya banyak pilihan. Tamu dari yang muda sampai orang tua semua ikut berfoto.",
    name: "Melati & Yoga",
    location: "Bandung",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
];

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Layanan",
    links: [
      { label: "Photobooth Wedding", href: "#layanan" },
      { label: "Photobooth Event", href: "#layanan" },
      { label: "Custom Backdrop", href: "#layanan" },
      { label: "Cetak Instan", href: "#layanan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Galeri", href: "#galeri" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
];

export const contactInfo: FeatureHighlight[] = [
  { icon: "phone", label: "+62 812 3456 7890" },
  { icon: "mail", label: "hello@movementphotobooth.id" },
  { icon: "map-pin", label: "Jl. Kebahagiaan No. 10, Jakarta Selatan" },
];

export const socialLinks: SocialLink[] = [
  { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
  { icon: "facebook", label: "Facebook", href: "https://facebook.com" },
  { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
  { icon: "tiktok", label: "TikTok", href: "https://tiktok.com" },
];
