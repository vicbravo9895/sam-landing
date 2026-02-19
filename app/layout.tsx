import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sammonitoreo.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SAM - Monitoreo Inteligente de Flotas | Reduce Falsas Alarmas en 80%",
    template: "%s | SAM - Monitoreo Inteligente de Flotas",
  },
  description:
    "SAM analiza automaticamente las alertas de tu flota con inteligencia artificial. Filtra el ruido, detecta emergencias reales y te notifica solo cuando importa. Compatible con Samsara.",
  keywords: [
    "monitoreo de flotas",
    "monitoreo inteligente",
    "alertas de flota",
    "seguridad vehicular",
    "gestion de flotas",
    "samsara",
    "alertas automaticas",
    "monitoreo 24/7",
    "falsas alarmas flotas",
    "dashcam inteligente",
    "notificaciones emergencia flota",
    "transporte de carga",
    "ultima milla",
    "central de monitoreo",
    "monitoreo automatizado",
    "seguridad conductores",
    "rastreo vehicular inteligente",
    "inteligencia artificial flotas",
  ],
  authors: [{ name: "SAM Global Technologies" }],
  creator: "SAM Global Technologies",
  publisher: "SAM Global Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-MX": siteUrl,
      "es-CO": siteUrl,
      "es-CL": siteUrl,
      "es-419": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "SAM - Monitoreo Inteligente de Flotas",
    title: "SAM - Monitoreo Inteligente de Flotas | Reduce Falsas Alarmas en 80%",
    description:
      "Nunca mas te pierdas una emergencia real. SAM analiza cada alerta de tu flota con IA y te notifica solo cuando realmente importa.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "SAM - Monitoreo Inteligente de Flotas",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAM - Monitoreo Inteligente de Flotas",
    description:
      "Analiza cada alerta automaticamente. Filtra el ruido. Te notifica solo cuando importa.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@sammonitoreo",
  },
  category: "technology",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
