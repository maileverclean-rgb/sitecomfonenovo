import { Metadata } from "next"
import { HardHat } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Post Construction Cleaning Services | Everclean Multi-services",
  description: "Professional post construction cleaning services in Maryland and Northern Virginia. Remove construction dust and debris to make your space move-in ready.",
}

const benefits = [
  "Specialized equipment for construction debris removal",
  "Experience with new construction and renovation projects",
  "Thorough removal of fine dust particles",
  "Safe disposal of construction waste",
  "Multiple cleaning phases available",
  "Coordination with contractors and project managers",
]

const includes = [
  "Removal of construction dust",
  "Cleaning of all surfaces",
  "Window and glass cleaning",
  "Fixture and hardware cleaning",
  "Cabinet interior cleaning",
  "Floor cleaning and debris removal",
  "Vent and duct exterior cleaning",
  "Paint splatter removal",
  "Sticker and label removal",
  "Final detail cleaning",
  "HVAC vent cleaning",
  "Light fixture cleaning",
]

const idealFor = [
  "New home construction ready for final inspection",
  "Home renovation and remodeling projects",
  "Commercial build-outs and office renovations",
  "Contractors needing professional cleaning support",
  "Property developers preparing units for sale or rent",
  "Homeowners completing DIY renovation projects",
]

const relatedServices = [
  { title: "Deep Cleaning", href: "/services/deep-cleaning" },
  { title: "Move In/Out Cleaning", href: "/services/move-in-out" },
  { title: "Commercial Cleaning", href: "/services/commercial-cleaning" },
]

export default function PostConstructionPage() {
  return (
    <ServicePageTemplate
      title="Post Construction Cleaning"
      description="Transform your newly built or renovated space from construction site to move-in ready. Our specialized cleaning removes all traces of construction work."
      icon={HardHat}
      benefits={benefits}
      includes={includes}
      idealFor={idealFor}
      relatedServices={relatedServices}
    />
  )
}
