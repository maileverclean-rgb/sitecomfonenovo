import Link from "next/link"
import { 
  Home, 
  Sparkles, 
  Truck, 
  HardHat, 
  Sofa,
  Building2,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "General Cleaning",
    description: "Regular maintenance cleaning to keep your home fresh and tidy. Perfect for busy households that need consistent upkeep.",
    href: "/services/general-cleaning",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning that reaches every corner. Ideal for seasonal cleaning or when your space needs extra attention.",
    href: "/services/deep-cleaning",
  },
  {
    icon: Truck,
    title: "Move In/Out Cleaning",
    description: "Comprehensive cleaning for property transitions. Leave your old place spotless or start fresh in your new home.",
    href: "/services/move-in-out",
  },
  {
    icon: HardHat,
    title: "Post Construction",
    description: "Specialized cleaning to remove construction dust, debris, and residue. Get your newly built or renovated space move-in ready.",
    href: "/services/post-construction",
  },
  {
    icon: Sofa,
    title: "Carpet & Upholstery",
    description: "Professional carpet and furniture cleaning using industry-leading equipment. Restore the beauty of your soft furnishings.",
    href: "/services/carpet-cleaning",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices, retail spaces, and commercial properties. Create a productive, healthy environment.",
    href: "/services/commercial-cleaning",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Our Professional Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential to commercial spaces, we offer comprehensive cleaning solutions 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 h-auto font-medium">
                  <Link href={service.href} className="flex items-center gap-1 text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="#contact">Get Your Free Quote Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
