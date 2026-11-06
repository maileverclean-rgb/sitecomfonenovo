import { ArrowUpRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { clientReviews, thumbtackProfileUrl, thumbtackRating } from "@/lib/client-reviews"

export function ReviewsSection() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-60 bg-primary/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Client experiences
            </p>
            <h2 id="reviews-heading" className="text-3xl font-serif font-bold text-foreground sm:text-4xl">
              What our clients say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A few words from clients who trusted Everclean with their homes and workspaces.
            </p>
          </div>
          <a
            href={thumbtackProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${thumbtackRating.value} out of 5, ${thumbtackRating.count} reviews on Thumbtack. Open the full profile.`}
            className="inline-flex w-fit shrink-0 items-center gap-4 rounded-2xl bg-card px-6 py-4 text-card-foreground shadow-sm ring-1 ring-primary/10 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Star aria-hidden="true" className="h-7 w-7 fill-secondary text-secondary" />
            <span>
              <span className="block text-2xl font-semibold text-foreground">
                {thumbtackRating.value}<span className="ml-1 text-sm font-normal text-muted-foreground">/ 5</span>
              </span>
              <span className="block text-sm text-muted-foreground">{thumbtackRating.count} reviews on Thumbtack</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4 text-primary" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {clientReviews.map((review) => (
            <figure key={review.name} data-testid="client-review" className="flex min-w-0 flex-col rounded-2xl bg-card p-6 text-card-foreground shadow-sm ring-1 ring-primary/10 sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-3">
                <Quote aria-hidden="true" className="h-8 w-8 shrink-0 text-primary/25" />
                <span className="rounded-full bg-primary/5 px-3 py-1 text-right text-xs font-medium text-primary">
                  {review.service}
                </span>
              </div>
              <blockquote className="flex-1 text-lg leading-relaxed text-foreground">
                <p>&ldquo;{review.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {review.initials}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <a href={thumbtackProfileUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
                    Review on Thumbtack
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Selected review excerpts from Thumbtack. Overall profile rating checked {thumbtackRating.checkedOn}; ratings and review counts may change.
          </p>
          <Button asChild variant="outline" className="shrink-0 border-primary/25 text-primary hover:bg-primary/10">
            <a href={thumbtackProfileUrl} target="_blank" rel="noopener noreferrer">
              Read all reviews on Thumbtack
              <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
