"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/#gallery" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-sm gap-2">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="tel:+12403752009" className="flex items-center gap-1 hover:underline">
                <Phone className="h-3.5 w-3.5" />
                <span>(240) 375-2009</span>
              </a>
              <a href="mailto:contact@evercleanmultiservices.com" className="flex items-center gap-1 hover:underline">
                <Mail className="h-3.5 w-3.5" />
                <span>contact@evercleanmultiservices.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <MapPin className="h-3.5 w-3.5" />
              <span>Serving MD & Northern VA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-28 items-center justify-between gap-6 py-3 sm:min-h-36">
          <div className="flex shrink-0 items-center">
            <Link href="/" aria-label="Everclean Multi-services — Home" className="inline-flex items-center rounded-2xl bg-white p-1.5 shadow-[0_6px_24px_-10px_rgba(25,113,68,0.28)] ring-1 ring-primary/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217769121/OIOFeVOqWXMGcLdT.png"
                alt="Everclean Multi-services"
                width={1248}
                height={1248}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4 xl:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <a href="tel:+12403752009">Get Free Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden border-t border-border">
            <div className="space-y-1 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <a href="tel:+12403752009">Get Free Quote</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
