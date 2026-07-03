import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Award, 
  Users, 
  Leaf, 
  Clock, 
  Heart,
  CheckCircle2,
  Phone
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Everclean Multi-services",
  description: "Learn about Everclean Multi-services, your trusted professional cleaning company serving Maryland and Northern Virginia since 2019.",
}

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "We are fully licensed, bonded, and insured. All team members undergo thorough background checks for your peace of mind.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never cut corners. Every job receives our full attention and dedication to deliver exceptional results.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our trained and experienced cleaning professionals are committed to exceeding your expectations.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "We offer green cleaning solutions that are safe for your family, pets, and the environment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your busy schedule with convenient appointment times that fit your lifestyle.",
  },
  {
    icon: Heart,
    title: "Customer-Focused",
    description: "Your satisfaction is our priority. We listen to your needs and tailor our services accordingly.",
  },
]

const certifications = [
  "Fully Licensed & Insured",
  "Background-Checked Employees",
  "Satisfaction Guaranteed",
  "Eco-Friendly Products Available",
  "Flexible Payment Options",
  "Same-Day Service Available",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
                About Everclean Multi-services
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Your trusted partner for professional cleaning services in Maryland and Northern Virginia.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a simple mission—to provide exceptional cleaning services that give people back 
                    their most valuable asset: time. Everclean Multi-services has grown from a small local operation 
                    to a trusted name in professional cleaning throughout Maryland and Northern Virginia.
                  </p>
                  <p>
                    We understand that a clean environment is more than just aesthetically pleasing—it&apos;s essential 
                    for health, productivity, and peace of mind. That&apos;s why we approach every job with the same 
                    dedication and attention to detail, whether it&apos;s a small apartment or a large commercial facility.
                  </p>
                  <p>
                    We serve clients across Frederick, Hagerstown, Columbia, and 
                    the greater Northern Virginia area. Our team of trained professionals is committed to delivering 
                    results that exceed expectations, every single time.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">E</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Everclean Multi-services</h3>
                  <p className="text-muted-foreground">Professional Cleaning Excellence</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Service Types</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Everclean Multi-services.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-muted-foreground mb-8">
                  When you choose Everclean Multi-services, you&apos;re choosing a company that puts your needs first. 
                  We&apos;ve built our reputation on reliability, quality, and exceptional customer service.
                </p>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-semibold mb-4">
                  Ready to Experience the Everclean Difference?
                </h3>
                <p className="opacity-90 mb-6">
                  Contact us today for a free, no-obligation quote. Discover why hundreds of 
                  clients trust us with their cleaning needs.
                </p>
                <div className="space-y-4">
                  <Button variant="secondary" size="lg" asChild className="w-full">
                    <a href="tel:+12403752009" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call (240) 375-2009
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                    <a href="/#contact">Request a Quote Online</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 sm:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Service Areas
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Proudly serving Maryland and Northern Virginia.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Everclean Multi-services</h3>
                <div className="text-muted-foreground space-y-2 mb-6">
                  <p>Frederick Region, MD</p>
                  <p>Hagerstown Region, MD</p>
                  <p>Columbia Region, MD</p>
                  <p>Northern Virginia</p>
                </div>
                <div className="pt-6 border-t border-border space-y-2">
                  <p>
                    <a href="tel:+12403752009" className="text-primary hover:underline">(240) 375-2009</a>
                  </p>
                  <p>
                    <a href="mailto:contact@evercleanmultiservices.com" className="text-primary hover:underline">
                      contact@evercleanmultiservices.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
