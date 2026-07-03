import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  { name: "General Cleaning", href: "/services/general-cleaning" },
  { name: "Deep Cleaning", href: "/services/deep-cleaning" },
  { name: "Move In/Out Cleaning", href: "/services/move-in-out" },
  { name: "Post Construction", href: "/services/post-construction" },
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Commercial Cleaning", href: "/services/commercial-cleaning" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/#gallery" },
  { name: "Contact Us", href: "/#contact" },
  { name: "Get a Quote", href: "/#contact" },
]

const legal = [
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Insurance", href: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663217769121/NIjRUxDkmvXJuHXU.pdf", external: true },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217769121/OIOFeVOqWXMGcLdT.png"
                alt="Everclean Multi-services"
                className="h-16 w-auto rounded-lg"
              />
            </div>
            <p className="text-sm opacity-80 mb-4">
              Professional cleaning services for residential and commercial properties in Maryland and Northern Virginia.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>12804 Ledo Creek Terrace<br />Beltsville, MD 20705</span>
              </div>
              <a href="tel:+12403752009" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(240) 375-2009</span>
              </a>
              <a href="mailto:contact@evercleanmultiservices.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>contact@evercleanmultiservices.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Frederick Region, MD</li>
              <li>Hagerstown Region, MD</li>
              <li>Columbia Region, MD</li>
              <li>Northern Virginia</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="opacity-70">
              © {currentYear} Everclean Multi-services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {legal.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
