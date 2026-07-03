import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the Everclean difference? Contact us today for a 
            free, no-obligation quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Phone */}
          <div className="bg-card rounded-2xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <a 
              href="tel:+12403752009" 
              className="text-lg text-primary hover:underline font-medium"
            >
              (240) 375-2009
            </a>
          </div>

          {/* Email */}
          <div className="bg-card rounded-2xl p-6 shadow-sm text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <a 
              href="mailto:contact@evercleanmultiservices.com" 
              className="text-primary hover:underline break-all"
            >
              contact@evercleanmultiservices.com
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready for a Cleaner Space?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Call us now for a free estimate. We serve Frederick, Hagerstown, 
            Columbia and surrounding areas in Maryland, plus Northern Virginia.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:+12403752009" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Call (240) 375-2009
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
