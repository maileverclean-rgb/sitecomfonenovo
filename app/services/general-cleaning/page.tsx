import { Metadata } from "next"
import { Home } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "General Cleaning Services | Everclean Multi-services",
  description: "Professional general house cleaning services in Maryland and Northern Virginia. Regular maintenance cleaning to keep your home fresh and tidy.",
}

const benefits = [
  "Consistent, reliable cleaning on your schedule",
  "Trained and background-checked professionals",
  "Eco-friendly cleaning products available",
  "Customized cleaning plans for your needs",
  "Satisfaction guaranteed on every visit",
  "Flexible weekly, bi-weekly, or monthly scheduling",
]

const includes = [
  "Dusting all surfaces",
  "Vacuuming carpets and rugs",
  "Mopping hard floors",
  "Cleaning kitchen counters",
  "Sanitizing bathrooms",
  "Making beds",
  "Emptying trash",
  "Wiping mirrors and glass",
  "Spot cleaning walls",
  "Cleaning light switches",
  "Wiping appliance exteriors",
  "General tidying",
]

const idealFor = [
  "Busy professionals who want to maintain a clean home without the hassle",
  "Families looking for regular cleaning support to keep up with daily life",
  "Homeowners who want to maintain their property in excellent condition",
  "Anyone who values their time and prefers to spend it on what matters most",
]

const relatedServices = [
  { title: "Deep Cleaning", href: "/services/deep-cleaning" },
  { title: "Move In/Out Cleaning", href: "/services/move-in-out" },
  { title: "Commercial Cleaning", href: "/services/commercial-cleaning" },
]

export default function GeneralCleaningPage() {
  return (
    <ServicePageTemplate
      title="General Cleaning"
      description="Keep your home consistently clean and comfortable with our professional general cleaning services. We handle the routine tasks so you can focus on living your life."
      icon={Home}
      benefits={benefits}
      includes={includes}
      idealFor={idealFor}
      relatedServices={relatedServices}
    />
  )
}
