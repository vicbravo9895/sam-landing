import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Benefits } from "@/components/landing/benefits"
import { UseCases } from "@/components/landing/use-cases"
import { ForWho } from "@/components/landing/for-who"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sammonitoreo.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SAM - Sistema Automatizado de Monitoreo",
    url: siteUrl,
    logo: `${siteUrl}/images/image.jpeg`,
    description:
      "SAM analiza automaticamente las alertas de tu flota con inteligencia artificial. Filtra el ruido, detecta emergencias reales y te notifica solo cuando importa.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contacto@samglobaltechnologies.com",
      contactType: "sales",
      availableLanguage: ["Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Nuevo Leon",
      addressCountry: "MX",
    },
    sameAs: [],
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SAM - Monitoreo Inteligente de Flotas",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Sistema automatizado de monitoreo de flotas que analiza alertas con inteligencia artificial, filtra falsas alarmas y notifica emergencias reales en segundos.",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/OnlineOnly",
    },
    featureList: [
      "Analisis automatico de alertas",
      "Deteccion de emergencias reales",
      "Notificaciones por llamada, WhatsApp y SMS",
      "Analisis de imagenes de dashcam",
      "Monitoreo continuo 24/7",
      "Compatible con Samsara",
      "Panel de control en tiempo real",
      "Copiloto conversacional de flota",
    ],
    screenshot: `${siteUrl}/og-image.jpg`,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Que es SAM y como funciona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM es un sistema automatizado de monitoreo que se conecta a tus dispositivos Samsara y analiza cada alerta con inteligencia artificial. Revisa ubicacion, conductor y camaras, filtra las falsas alarmas y te notifica solo cuando hay una emergencia real.",
        },
      },
      {
        "@type": "Question",
        name: "Cuanto reduce SAM las falsas alarmas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM reduce las alertas irrelevantes en un 80%, permitiendo que tu equipo se enfoque unicamente en las situaciones que realmente requieren atencion.",
        },
      },
      {
        "@type": "Question",
        name: "Que tipo de alertas puede analizar SAM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM analiza botones de emergencia, conductores distraidos, colisiones y frenados bruscos, camaras bloqueadas, exceso de velocidad y mas. Cubre los eventos de seguridad mas criticos para una flota.",
        },
      },
      {
        "@type": "Question",
        name: "SAM funciona con Samsara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, SAM esta disenado para integrarse directamente con dispositivos y alertas de Samsara. La conexion es rapida y no requiere instalaciones complicadas.",
        },
      },
      {
        "@type": "Question",
        name: "Como me notifica SAM cuando hay una emergencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM te notifica por tres canales segun la urgencia: llamada telefonica para emergencias criticas, WhatsApp para alertas importantes y SMS como respaldo.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <ForWho />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
