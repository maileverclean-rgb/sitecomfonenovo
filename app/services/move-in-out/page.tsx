import { Metadata } from "next"
import { Truck } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Move In/Out Cleaning Services | Everclean Multi-services",
  description: "Professional move in and move out cleaning services in Maryland and Northern Virginia. Leave your old place spotless or start fresh in your new home.",
}

const benefits = [
  "Helps secure your security deposit return",
  "Ensures a fresh start in your new home",
  "Comprehensive cleaning of empty spaces",
  "Flexible scheduling around your move dates",
  "Same-day service available when needed",
  "Detailed attention to landlord/property manager requirements",
]

const includes = [
  "Complete deep cleaning of all rooms",
  "Inside all cabinets and drawers",
  "Inside refrigerator and oven",
  "Detailed bathroom cleaning",
  "Closet cleaning",
  "Window and sill cleaning",
  "Light fixture cleaning",
  "Wall spot cleaning",
  "Baseboard detailing",
  "Switch plate cleaning",
  "Floor cleaning and mopping",
  "Garage sweeping (if applicable)",
]

const idealFor = [
  "Tenants moving out who want to maximize security deposit return",
  "New homeowners wanting a fresh start before moving in",
  "Landlords preparing properties for new tenants",
  "Property managers needing turnover cleaning services",
  "Real estate agents preparing homes for showings or closing",
]

const relatedServices = [
  { title: "Deep Cleaning", href: "/services/deep-cleaning" },
  { title: "Post Construction Cleaning", href: "/services/post-construction" },
  { title: "General Cleaning", href: "/services/general-cleaning" },
]

export default function MoveInOutPage() {
  return (
    <ServicePageTemplate
      title="Move In/Out Cleaning"
      description="Make your move stress-free with our comprehensive move-in and move-out cleaning services. We ensure every property is spotless for the next chapter."
      icon={Truck}
      benefits={benefits}
      includes={includes}
      idealFor={idealFor}
      relatedServices={relatedServices}
    />
  )
}
