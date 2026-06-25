import { Compass, ShieldCheck, Workflow } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const pillars = [
  {
    icon: Compass,
    title: "Independent by design",
    body: "We are not an exchange or a software vendor. Our only product is impartial advice, so our recommendations always serve your interests first.",
  },
  {
    icon: ShieldCheck,
    title: "Practical and proven",
    body: "Over 15 years of consulting and a decade in digital assets means guidance grounded in real implementation — not theory or hype.",
  },
  {
    icon: Workflow,
    title: "Strategy to delivery",
    body: "From roadmap to rollout, we stay engaged through delivery so transformation actually lands inside your organization.",
  },
]

export function Approach() {
  return (
    <section className="relative border-t border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our approach"
          title="The clarity of a partner who has done this before"
          description="We combine deep technical understanding with commercial pragmatism to help you make confident decisions in a fast-moving landscape."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
