import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sammonitoreo.com"

export const metadata: Metadata = {
  title: "Solicitar Demo",
  description:
    "Agenda una demo personalizada de SAM. Descubre como el monitoreo inteligente puede reducir las falsas alarmas de tu flota en un 80% y proteger a tus conductores.",
  alternates: {
    canonical: `${siteUrl}/demo`,
  },
  openGraph: {
    title: "Solicitar Demo | SAM - Monitoreo Inteligente de Flotas",
    description:
      "Agenda una demo personalizada. Te mostramos SAM funcionando con casos reales de tu industria.",
    url: `${siteUrl}/demo`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Solicitar Demo de SAM",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
