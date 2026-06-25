import { CreditCard, Coins, Cpu, Route, type LucideIcon } from "lucide-react"

export type Service = {
  id: string
  title: string
  summary: string
  description: string
  icon: LucideIcon
  capabilities: string[]
}

export const services: Service[] = [
  {
    id: "payment-modernization",
    title: "Payment Modernization",
    summary: "Re-architect legacy payment systems into resilient, real-time infrastructure.",
    description:
      "We help businesses move from legacy, batch-based payment systems toward modern, real-time rails. From ISO 20022 readiness to orchestration and acquiring strategy, we provide the roadmap and hands-on guidance to modernize with confidence.",
    icon: CreditCard,
    capabilities: [
      "Real-time payments & ISO 20022 readiness",
      "Payment orchestration & routing strategy",
      "Acquiring, gateway & PSP evaluation",
      "Cost, reconciliation & settlement optimization",
    ],
  },
  {
    id: "digital-assets",
    title: "Digital Asset & Payment Solutions",
    summary: "Practical guidance on stablecoins, tokenization, and digital asset rails.",
    description:
      "Cut through the noise around digital assets. We advise on where stablecoins, tokenization, and on-chain settlement create genuine business value — and how to adopt them responsibly within existing regulatory and operational frameworks.",
    icon: Coins,
    capabilities: [
      "Stablecoin & on-chain settlement strategy",
      "Tokenization & asset digitization use cases",
      "Custody, treasury & risk frameworks",
      "Regulatory and compliance alignment",
    ],
  },
  {
    id: "emerging-technology",
    title: "Emerging Technology Advisory",
    summary: "Translate AI, automation, and new tech into measurable outcomes.",
    description:
      "From applied AI to intelligent automation, we help leadership teams separate hype from opportunity. We assess emerging technologies against your strategy and design pragmatic adoption paths that deliver results.",
    icon: Cpu,
    capabilities: [
      "Applied AI & automation opportunity mapping",
      "Technology due diligence & evaluation",
      "Proof-of-concept design & validation",
      "Build-vs-buy & partner selection",
    ],
  },
  {
    id: "transformation-strategy",
    title: "Technology Transformation Strategy",
    summary: "Align technology investment with long-term business strategy.",
    description:
      "Transformation succeeds when technology, operations, and strategy move together. We work alongside your leadership to define target architectures, prioritize initiatives, and govern delivery so change actually lands.",
    icon: Route,
    capabilities: [
      "Target operating model & architecture",
      "Roadmap prioritization & business cases",
      "Delivery governance & vendor management",
      "Change enablement & capability building",
    ],
  },
]
