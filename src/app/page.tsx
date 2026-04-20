import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import AboutSection from "@/components/sections/AboutSection";
import Reviews from "@/components/sections/Reviews";
import ContactSection from "@/components/sections/ContactSection";
import LocationSection from "@/components/sections/LocationSection";
import GallerySection from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <Reviews />
       </main>
      <Footer />
    </>
  );
}
