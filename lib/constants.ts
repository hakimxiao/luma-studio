import type { LucideIcon } from "lucide-react";
import {
  CameraIcon,
  ImagePlusIcon,
  PaletteIcon,
  SparklesIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";

/** MIME types accepted for user source images (upload + generation API). */
export const ACCEPTED_SOURCE_IMAGE_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

export const HIGHLIGHTS: { label: string; icon: LucideIcon }[] = [
  { label: "AI Magic", icon: Wand2Icon },
  { label: "Art Styles", icon: SparklesIcon },
  { label: "Instant", icon: ZapIcon },
  { label: "Creative", icon: CameraIcon },
];

export const GALLERY_STATS = [
  { value: "5K+", label: "Gambar dibuat" },
  { value: "1K+", label: "Pengguna aktif" },
  { value: "4.8/5", label: "Rating pengguna" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/gallery-1.png", alt: "Stylized rainy character portrait" },
  { src: "/gallery-2.png", alt: "Stylized family gardening scene" },
  { src: "/gallery-3.png", alt: "Stylized fantasy mushroom scene" },
  { src: "/gallery-4.png", alt: "Stylized coffee making scene" },
] as const;

export const HERO_VIDEO_SRC =
  "https://ik.imagekit.io/hl8s1iz2c/hero.mp4?updatedAt=1782495614322";

export const SHOWCASE_BG_VIDEO_SRC =
  "https://ik.imagekit.io/hl8s1iz2c/showcase.mp4";

export const CENTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles", chevron: true },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "/privacy" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Studio", href: "/studio" },
] as const;

export const FEATURED_STYLES = [
  "Dongeng 3D",
  "Anime",
  "Render Tanah Liat",
  "Seni Pixel",
] as const;

export const WORKFLOW_STYLE_PREVIEW = [
  FEATURED_STYLES[0],
  FEATURED_STYLES[1],
  FEATURED_STYLES[2],
] as const;

export type MarketingTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: MarketingTestimonial[] = [
  {
    text: "Saya suka karena penggunaannya sangat mudah. Dalam beberapa menit foto biasa bisa terlihat jauh lebih menarik.",
    image:
      "https://plus.unsplash.com/premium_photo-1664475546048-b1e3768d2b14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb25lc2lhbiUyMHdvbWFufGVufDB8fDB8fHww",
    name: "Siti Rahma",
    role: "Mahasiswa",
  },
  {
    text: "Hasil gambarnya cukup konsisten dan membantu saya membuat konten media sosial lebih cepat.",
    image:
      "https://images.unsplash.com/photo-1630758664435-72a78888fb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kb25lc2lhbiUyMHdvbWFufGVufDB8fDB8fHww",
    name: "Ayu Lestari",
    role: "Content Creator",
  },
  {
    text: "Saya tidak perlu belajar desain yang rumit. Tinggal unggah foto dan pilih gaya yang disukai.",
    image:
      "https://images.unsplash.com/photo-1652440842229-a46c51ef7609?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Dewi Anggraini",
    role: "Freelancer",
  },
  {
    text: "Fitur yang tersedia mudah dipahami bahkan untuk pengguna yang baru pertama kali mencoba AI.",
    image:
      "https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Nabila Putri",
    role: "Guru",
  },
  {
    text: "Sangat membantu untuk mempercantik foto produk sebelum saya unggah ke toko online.",
    image:
      "https://plus.unsplash.com/premium_photo-1661538907686-861790e69014?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Rina Maharani",
    role: "Penjual Online",
  },
  {
    text: "Pilihan gayanya cukup beragam dan hasil akhirnya tetap mempertahankan ciri khas foto asli.",
    image:
      "https://images.unsplash.com/photo-1672061659100-0668669ef019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Lina Oktaviani",
    role: "Fotografer Hobi",
  },
  {
    text: "Prosesnya cepat dan hasilnya cukup memuaskan untuk berbagai kebutuhan konten digital.",
    image:
      "https://plus.unsplash.com/premium_photo-1661592908061-93c25cf248ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Fitri Handayani",
    role: "Pegawai Kantor",
  },
  {
    text: "Tampilannya sederhana sehingga mudah digunakan tanpa harus membaca banyak panduan.",
    image:
      "https://plus.unsplash.com/premium_photo-1661596962956-7037d3cc8d7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Indah Permata",
    role: "Admin Toko Online",
  },
  {
    text: "Saya sering menggunakannya untuk membuat gambar yang lebih menarik untuk dibagikan ke teman-teman.",
    image:
      "https://images.unsplash.com/photo-1693305991125-1b87c60e5578?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGluZG9uZXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Putri Amelia",
    role: "Mahasiswa",
  },
];

export const TESTIMONIAL_COLUMNS = [
  TESTIMONIALS.slice(0, 3),
  TESTIMONIALS.slice(3, 6),
  TESTIMONIALS.slice(6, 9),
];

export type HowItWorksStep = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "Langkah 1",
    title: "Unggah gambar",
    body: "Mulai dengan foto diri, hewan peliharaan, atau pemandangan favoritmu. Hasil terbaik biasanya berasal dari gambar yang jelas dan pencahayaan yang baik.",
    icon: ImagePlusIcon,
  },
  {
    step: "Langkah 2",
    title: "Pilih gaya",
    body: "Pilih gaya seperti Dongeng 3D, Anime, atau Render Tanah Liat tanpa perlu menulis prompt atau mengatur pengaturan yang rumit.",
    icon: PaletteIcon,
  },
  {
    step: "Langkah 3",
    title: "Buat transformasi",
    body: "AI akan mengubah gambar sesuai gaya pilihan sambil mempertahankan komposisi dan detail penting dari foto aslinya.",
    icon: SparklesIcon,
    featured: true,
  },
];
