import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Family-owned and operated business",
  "Fully licensed, bonded, and insured",
  "Background-checked employees",
  "Eco-friendly cleaning options available",
  "Satisfaction guaranteed on every job",
  "Flexible scheduling to fit your needs",
]

export function AboutPreviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              We Understand Your Busy Life
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Everclean Multi-services, we know that your time is precious. Between work, 
              family, and personal goals, cleaning often becomes a source of stress rather 
              than satisfaction. That&apos;s where we come in.
            </p>
            <p className="mt-4 text-muted-foreground">
              As a dedicated cleaning service in Maryland and Northern Virginia, we understand the 
              importance of trust, quality, and personal attention. Our mission is simple: to 
              give you back your time while ensuring your space is immaculate.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you&apos;re a busy professional, a parent juggling multiple responsibilities, 
              or someone who simply values a pristine environment, we&apos;re here to transform 
              your space and elevate your quality of life.
            </p>

            <div className="mt-8">
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Why Choose Everclean?
            </h3>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
