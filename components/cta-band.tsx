import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HorizonBackdrop } from "@/components/horizon-backdrop"

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-background">
      <HorizonBackdrop className="opacity-70" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Ready to modernize with confidence?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Book a consultation to discuss your payment, digital asset, or technology transformation goals — across
          Australasia, the Asia-Pacific, and Europe.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
