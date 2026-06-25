import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EtherSol Advisory — Modern Payments. Intelligent Transformation.",
  description:
    "EtherSol Advisory helps businesses navigate the evolving world of payments, digital assets, and emerging technologies through practical advisory and implementation guidance.",
  keywords: [
    "payment modernization",
    "digital assets advisory",
    "fintech consulting",
    "technology transformation",
    "emerging technology advisory",
  ],
  openGraph: {
    title: "EtherSol Advisory — Modern Payments. Intelligent Transformation.",
    description:
      "Independent advisory and consulting firm helping businesses modernize payment systems and adopt emerging technologies across Australasia, Asia-Pacific and Europe.",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a1f29",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
