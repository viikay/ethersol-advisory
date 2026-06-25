import type { Metadata } from "next"
import { Globe2, LineChart, Layers } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "About — EtherSol Advisory",
  description:
    "Founded by an experienced technology and financial markets professional with over 15 years of consulting experience and more than a decade in digital assets and emerging technologies.",
}

const regions = ["Australasia", "Asia-Pacific", "Europe"]

const values = [
  {
    icon: LineChart,
    title: "Financial markets fluency",
    body: "A career spanning financial markets and technology means advice that respects both commercial reality and regulatory nuance.",
  },
  {
    icon: Layers,
    title: "Depth in digital assets",
    body: "More than a decade of hands-on involvement in digital assets and emerging technologies, from early experimentation to enterprise adoption.",
  },
  {
    icon: Globe2,
    title: "Global perspective",
    body: "Supporting clients across Australasia, the Asia-Pacific, and Europe with an understanding of regional markets and priorities.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An independent advisor for the next era of finance and technology"
        description="EtherSol Advisory exists to help businesses make confident, well-informed decisions about modern payments, digital assets, and emerging technologies."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Our story" title="Built on experience, not hype" />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  EtherSol Advisory was founded by an experienced technology and financial markets professional with
                  over 15 years of consulting experience and more than a decade of involvement in digital assets and
                  emerging technologies.
                </p>
                <p>
                  That dual background — deep in both financial markets and applied technology — shapes everything we
                  do. We have seen which ideas create durable value and which fade, and we bring that judgement to
                  every engagement.
                </p>
                <p>
                  We are an independent advisory and consulting firm. We are not a cryptocurrency exchange and not a
                  software vendor. That independence means our guidance is shaped only by what is right for your
                  business.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card/40 p-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Where we work
                </h3>
                <ul className="mt-6 space-y-4">
                  {regions.map((region) => (
                    <li
                      key={region}
                      className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-base font-medium text-foreground">{region}</span>
                      <Globe2 className="h-5 w-5 text-primary" />
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Supporting businesses across three regions with advisory tailored to local markets and global
                  technology trends.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-2xl border border-border bg-card/40 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
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
