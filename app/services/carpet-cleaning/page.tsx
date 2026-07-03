import { Metadata } from "next"
import { Sofa } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Carpet & Upholstery Cleaning Services | Everclean Multi-services",
  description: "Professional carpet and upholstery cleaning services in Maryland and Northern Virginia. Restore the beauty of your soft furnishings with our expert cleaning.",
}

const benefits = [
  "Professional-grade steam cleaning equipment",
  "Effective stain and odor removal",
  "Extends the life of your carpets and furniture",
  "Improves indoor air quality",
  "Safe for children and pets after drying",
  "Quick drying times with proper ventilation",
]

const includes = [
  "Pre-inspection and spot treatment",
  "Hot water extraction cleaning",
  "Deep soil extraction",
  "Stain treatment",
  "Odor neutralization",
  "Carpet grooming",
  "Upholstery fabric cleaning",
  "Sofa and chair cleaning",
  "Mattress cleaning",
  "Area rug cleaning",
  "Pet stain treatment",
  "Deodorizing treatment",
]

const idealFor = [
  "Homes with carpeting that needs refreshing",
  "Households with pets or children",
  "Allergy sufferers needing deep allergen removal",
  "Preparing homes for sale or special events",
  "Regular carpet maintenance to extend carpet life",
  "Removing stubborn stains and odors",
]

const relatedServices = [
  { title: "Deep Cleaning", href: "/services/deep-cleaning" },
  { title: "General Cleaning", href: "/services/general-cleaning" },
  { title: "Move In/Out Cleaning", href: "/services/move-in-out" },
]

export default function CarpetCleaningPage() {
  return (
    <ServicePageTemplate
      title="Carpet & Upholstery Cleaning"
      description="Revitalize your carpets and furniture with our professional cleaning services. We use advanced techniques to remove deep-seated dirt, stains, and allergens."
      icon={Sofa}
      benefits={benefits}
      includes={includes}
      idealFor={idealFor}
      relatedServices={relatedServices}
    />
  )
}
