import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://samglobaltechnologies.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SAM - Monitoreo Inteligente de Flotas | Reduce Falsas Alarmas en 80%",
    template: "%s | SAM - Monitoreo Inteligente de Flotas",
  },
  description:
    "SAM analiza las alertas de tu flota con IA. Reduce falsas alarmas hasta 80%, detecta emergencias reales y te notifica solo cuando importa. Compatible con Samsara.",
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
      "x-default": siteUrl,
      "es": siteUrl,
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
      { url: `${siteUrl}/favicon.ico`, sizes: "any" },
      { url: `${siteUrl}/favicon.ico`, sizes: "48x48", type: "image/x-icon" },
      {
        url: `${siteUrl}/icon-light-32x32.png`,
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${siteUrl}/icon-dark-32x32.png`,
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${siteUrl}/icon.svg`,
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: `${siteUrl}/favicon.ico`,
    apple: [
      { url: `${siteUrl}/apple-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${siteUrl}/manifest.json`,
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
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${siteUrl}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${siteUrl}/icon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${siteUrl}/apple-icon.png`} sizes="180x180" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
