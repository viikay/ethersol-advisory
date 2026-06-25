import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { Approach } from "@/components/approach"
import { CtaBand } from "@/components/cta-band"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Approach />
      <CtaBand />
    </>
  )
}
