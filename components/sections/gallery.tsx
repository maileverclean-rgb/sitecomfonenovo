"use client"

import Image from "next/image"

// Real work photos from Everclean Multi-services
const galleryImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2019.05.19%20%282%29-lhbD97ll6KssrsU8Lm4UeUrW2uBj7f.jpeg",
    alt: "Elegant bathroom with decorative tile flooring and clawfoot tub",
    category: "Deep Cleaning",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2019.06.57-uv5b7xdSAJfnz82hmGgSVpyHDgIFmn.jpeg",
    alt: "Polished hardwood floors in empty living room",
    category: "Move In/Out",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2019.05.19%20%283%29-1oaCGi9JbIvzP8HkpVP5SWXcMZU5NF.jpeg",
    alt: "Spotless refrigerator interior after deep cleaning",
    category: "Deep Cleaning",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2019.06.57%20%283%29-wcFXBLZ09KV4MuPxK2Wy7MdzveOrRt.jpeg",
    alt: "Freshly cleaned carpet with visible vacuum lines",
    category: "Carpet Cleaning",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2019.06.57%20%284%29-EzOLb9Y1q4JtBsxziOUp4kskDdBd7n.jpeg",
    alt: "Beautifully made bed with decorative towel swans",
    category: "Residential",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2019.05.19%20%284%29-aXnLzX8TOft2HyeORULQ3vs9hZURwA.jpeg",
    alt: "Kitchen cabinet cleaning in progress",
    category: "General Cleaning",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See the Everclean difference. We take pride in every job we complete, 
            delivering spotless results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          Serving Frederick, Hagerstown, Columbia and surrounding areas in Maryland, plus Northern Virginia.
        </p>
      </div>
    </section>
  )
}
