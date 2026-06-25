import Link from "next/link"
import { Logo } from "@/components/logo"

const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Payment Modernization", href: "/services#payment-modernization" },
      { label: "Digital Asset Solutions", href: "/services#digital-assets" },
      { label: "Emerging Technology", href: "/services#emerging-technology" },
      { label: "Transformation Strategy", href: "/services#transformation-strategy" },
    ],
  },
  {
    heading: "Regions",
    links: [
      { label: "Australasia", href: "/contact" },
      { label: "Asia-Pacific", href: "/contact" },
      { label: "Europe", href: "/contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2" aria-label="EtherSol Advisory home">
              <Logo className="h-7 w-7 text-primary" />
              <span className="text-base font-semibold tracking-tight text-foreground">EtherSol Advisory</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Independent advisory and consulting for modern payments, digital assets, and emerging technologies.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              Australasia · Asia-Pacific · Europe
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EtherSol Advisory. All rights reserved.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            EtherSol Advisory is an independent advisory firm. It is not a cryptocurrency exchange or a software
            vendor, and does not provide financial, investment, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
