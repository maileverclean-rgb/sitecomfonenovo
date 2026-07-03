import { MapPin } from "lucide-react"

const areas = [
  {
    region: "Frederick County, MD",
    cities: ["Frederick", "Brunswick", "Middletown", "Thurmont", "Walkersville"],
  },
  {
    region: "Washington County, MD",
    cities: ["Hagerstown", "Williamsport", "Boonsboro", "Smithsburg", "Clear Spring"],
  },
  {
    region: "Howard County, MD",
    cities: ["Columbia", "Ellicott City", "Elkridge", "Laurel", "Savage"],
  },
  {
    region: "Prince George&apos;s County, MD",
    cities: ["Beltsville", "College Park", "Greenbelt", "Hyattsville", "Riverdale"],
  },
  {
    region: "Montgomery County, MD",
    cities: ["Silver Spring", "Rockville", "Bethesda", "Germantown", "Gaithersburg"],
  },
  {
    region: "Northern Virginia",
    cities: ["Arlington", "Alexandria", "Fairfax", "Falls Church", "McLean"],
  },
]

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Areas We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Proudly serving residential and commercial clients throughout Maryland 
            and Northern Virginia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div key={area.region} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{area.region.replace("&apos;", "'")}</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {area.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          Don&apos;t see your area listed? <a href="tel:+13017282056" className="text-primary hover:underline">Contact us</a> — 
          we may still be able to serve you!
        </p>
      </div>
    </section>
  )
}
