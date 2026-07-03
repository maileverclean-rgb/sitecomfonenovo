import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { GiftCardSection } from "@/components/sections/gift-card"
import { GallerySection } from "@/components/sections/gallery"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutPreviewSection />
        <GiftCardSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
