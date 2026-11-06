"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Shield, Award, Clock } from "lucide-react"
import Image from "next/image"

const heroImages = [
  {
    src: "/images/hero-option-1.jpg",
    alt: "Professional cleaners working in a bright, sunny living room",
  },
  {
    src: "/images/hero-option-2.jpg",
    alt: "Clean living room with green garden view through large windows",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663217769121/OIOFeVOqWXMGcLdT.png",
    alt: "Everclean Multi-services logo",
  },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/12 via-background to-secondary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              Licensed & Insured
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground text-balance">
              A Cleaner Home,{" "}
              <span className="text-primary">A Better Life</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              We take care of the cleaning so you can focus on what matters most. 
              Reclaim your time with our trusted residential and commercial cleaning services.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="tel:+12403752009" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (240) 375-2009
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Request Free Quote</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-secondary" />
                <span>Highly Rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-secondary" />
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={index === 2 ? "object-contain bg-white p-6" : "object-cover"}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage 
                      ? "bg-white w-6" 
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
