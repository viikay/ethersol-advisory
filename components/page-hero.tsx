import { HorizonBackdrop } from "@/components/horizon-backdrop"

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <HorizonBackdrop className="opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <p className="animate-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-6 bg-primary" />
          {eyebrow}
        </p>
        <h1
          className="animate-fade-up mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.05s" }}
        >
          {title}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
