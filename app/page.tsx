import { Footer } from "@/components/Footer";
import GalleryShowcaseSection from "@/components/GalleryShowcaseSection";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HomeHeroSection />

      <GalleryShowcaseSection />

      <HowItWorksSection />

      <Footer />
    </main>
  );
}
