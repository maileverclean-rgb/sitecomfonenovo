import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServicePageTemplateProps {
  title: string
  description: string
  icon: LucideIcon
  benefits: string[]
  includes: string[]
  idealFor: string[]
  relatedServices: {
    title: string
    href: string
  }[]
}

export function ServicePageTemplate({
  title,
  description,
  icon: Icon,
  benefits,
  includes,
  idealFor,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
                  {title}
                </h1>
                <p className="mt-6 text-xl text-muted-foreground">
                  {description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+12403752009" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call (240) 375-2009
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/#contact">Request Free Quote</a>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Why Choose Our {title}?
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  What&apos;s Included
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our {title.toLowerCase()} service covers all the essential tasks to ensure your 
                  space is thoroughly cleaned and maintained to the highest standards.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ideal For
                </h2>
                <p className="text-muted-foreground mb-8">
                  This service is perfect for various situations and clients who need 
                  professional cleaning assistance.
                </p>
                <ul className="space-y-3">
                  {idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Contact us today for a free, no-obligation quote. Experience the Everclean 
              difference and enjoy a cleaner, healthier space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+12403752009" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (240) 375-2009
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="/#contact">Request Quote Online</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link 
                  key={service.title}
                  href={service.href}
                  className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
