import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Services — EtherSol Advisory",
  description:
    "Payment Modernization, Digital Asset & Payment Solutions, Emerging Technology Advisory, and Technology Transformation Strategy.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advisory across the modern payments and technology stack"
        description="Independent, practical guidance that takes you from strategy through to implementation — without the bias of a vendor or an exchange."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 grid items-start gap-10 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-primary">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="font-mono text-sm text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-border bg-card/40 p-8">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        How we help
                      </h3>
                      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-sm leading-relaxed text-foreground/90">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
