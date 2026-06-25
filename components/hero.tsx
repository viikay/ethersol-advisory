import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HorizonBackdrop } from "@/components/horizon-backdrop"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HorizonBackdrop />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-36 text-center sm:px-6 sm:pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Independent fintech & technology advisory
        </div>

        <h1
          className="animate-fade-up mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          Modern Payments. <span className="text-primary">Intelligent Transformation.</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Helping businesses navigate the evolving world of payments, digital assets, and emerging technologies
          through practical advisory and implementation guidance.
        </p>

        <div
          className="animate-fade-up mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "0.15s" }}
        >
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 w-full items-center justify-center rounded-md border border-border bg-card/50 px-7 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary sm:w-auto"
          >
            Explore Services
          </Link>
        </div>

        <dl
          className="animate-fade-up mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
          style={{ animationDelay: "0.2s" }}
        >
          {[
            { value: "15+", label: "Years consulting" },
            { value: "10+", label: "Years in digital assets" },
            { value: "3", label: "Continents served" },
            { value: "100%", label: "Independent advice" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-6">
              <dt className="text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
