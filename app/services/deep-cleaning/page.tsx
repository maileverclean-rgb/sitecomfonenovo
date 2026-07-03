import { Metadata } from "next"
import { Sparkles } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Deep Cleaning Services | Everclean Multi-services",
  description: "Professional deep cleaning services in Maryland and Northern Virginia. Thorough top-to-bottom cleaning for a refreshed, sanitized home.",
}

const benefits = [
  "Thorough cleaning of every room from top to bottom",
  "Reaches areas often missed in regular cleaning",
  "Removes built-up grime, dust, and allergens",
  "Professional-grade equipment and products",
  "Ideal for seasonal or one-time intensive cleaning",
  "Leaves your home feeling fresh and renewed",
]

const includes = [
  "All general cleaning tasks",
  "Deep cleaning inside appliances",
  "Cleaning inside cabinets",
  "Detailed baseboard cleaning",
  "Door and frame cleaning",
  "Vent and fan cleaning",
  "Window sill cleaning",
  "Light fixture dusting",
  "Behind furniture cleaning",
  "Grout scrubbing",
  "Detailed bathroom sanitization",
  "Kitchen degreasing",
]

const idealFor = [
  "Spring or fall deep cleaning to refresh your home",
  "Before or after hosting special events or holidays",
  "When your home needs extra attention beyond regular maintenance",
  "As a starting point before beginning regular cleaning services",
  "Allergy sufferers who need thorough dust and allergen removal",
]

const relatedServices = [
  { title: "General Cleaning", href: "/services/general-cleaning" },
  { title: "Post Construction Cleaning", href: "/services/post-construction" },
  { title: "Carpet & Upholstery Cleaning", href: "/services/carpet-cleaning" },
]

export default function DeepCleaningPage() {
  return (
    <ServicePageTemplate
      title="Deep Cleaning"
      description="Transform your space with our comprehensive deep cleaning service. We go beyond surface cleaning to reach every corner, eliminating built-up dirt, grime, and allergens."
      icon={Sparkles}
      benefits={benefits}
      includes={includes}
      idealFor={idealFor}
      relatedServices={relatedServices}
    />
  )
}
