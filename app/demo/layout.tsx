import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sammonitoreo.com"

export const metadata: Metadata = {
  title: "Solicitar Demo",
  description:
    "Agenda una demo personalizada de SAM. Descubre cómo el monitoreo inteligente puede reducir las falsas alarmas de tu flota en un 80% y proteger a tus conductores.",
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
  twitter: {
    card: "summary_large_image",
    title: "Solicitar Demo | SAM - Monitoreo Inteligente de Flotas",
    description:
      "Agenda una demo personalizada. Te mostramos SAM funcionando con casos reales de tu industria.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@sammonitoreo",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Solicitar Demo", item: `${siteUrl}/demo` },
  ],
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
