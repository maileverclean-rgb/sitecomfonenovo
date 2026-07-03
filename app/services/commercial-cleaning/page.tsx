import { Metadata } from "next"
import { Building2 } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Everclean Multi-services",
  description: "Professional commercial cleaning services in Maryland and Northern Virginia. Keep your office and business spaces spotless and productive.",
}

const benefits = [
  "Customized cleaning plans for your business",
  "Flexible scheduling including after-hours service",
  "Trained commercial cleaning professionals",
  "Consistent, reliable service you can count on",
  "Full liability insurance and bonding",
  "Green cleaning options for eco-conscious businesses",
]

const includes = [
  "Office and workspace cleaning",
  "Restroom sanitization",
  "Break room and kitchen cleaning",
  "Trash removal and recycling",
  "Floor care and vacuuming",
  "Desk and surface sanitization",
  "Window and glass cleaning",
  "Conference room cleaning",
  "Reception area maintenance",
  "High-touch surface disinfection",
  "Supply restocking",
  "Common area cleaning",
]

const idealFor = [
  "Office buildings and corporate spaces",
  "Medical and dental offices",
  "Retail stores and showrooms",
  "Educational facilities",
  "Religious institutions",
  "Property management companies",
  "Small businesses and startups",
]

const relatedServices = [
  { title: "General Cleaning", href: "/services/general-cleaning" },
  { title: "Post Construction Cleaning", href: "/services/post-construction" },
  { title: "Carpet & Upholstery Cleaning", href: "/services/carpet-cleaning" },
]

export default function CommercialCleaningPage() {
  return (
    <ServicePageTemplate
      title="Commercial Cleaning"
      description="Create a clean, healthy, and productive work environment for your employees and clients. Our commercial cleaning services are tailored to meet your business needs."
      icon={Building2}
      benefits={benefits}
      includes={includes}
      idealFor={idealFor}
      relatedServices={relatedServices}
    />
  )
}
