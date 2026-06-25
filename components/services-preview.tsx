import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/services"
import { SectionHeading } from "@/components/section-heading"

export function ServicesPreview() {
  return (
    <section className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Advisory built for modern financial infrastructure"
            description="Four practice areas that help you modernize payments, adopt digital assets, and transform with emerging technology — pragmatically and independently."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
