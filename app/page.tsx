import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Footer } from "@/components/landing/footer"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Benefits } from "@/components/landing/benefits"
import { UseCases } from "@/components/landing/use-cases"
import { ForWho } from "@/components/landing/for-who"
import { CTA } from "@/components/landing/cta"

function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://samglobaltechnologies.com"

  const websiteSchema = {
    "@type": "WebSite",
    name: "SAM - Monitoreo Inteligente de Flotas",
    url: siteUrl,
    inLanguage: "es",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const organizationSchema = {
    "@type": "Organization",
    name: "SAM - Sistema Automatizado de Monitoreo",
    alternateName: "SAM Global Technologies",
    url: siteUrl,
    logo: `${siteUrl}/images/image.jpeg`,
    image: `${siteUrl}/og-image.jpg`,
    description:
      "SAM analiza automáticamente las alertas de tu flota con inteligencia artificial. Filtra el ruido, detecta emergencias reales y te notifica solo cuando importa.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contacto@samglobaltechnologies.com",
      contactType: "sales",
      availableLanguage: ["Spanish"],
      areaServed: ["MX", "CO", "CL"],
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
    },
  }

  const softwareSchema = {
    "@type": "SoftwareApplication",
    name: "SAM - Monitoreo Inteligente de Flotas",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Fleet Management",
    operatingSystem: "Web",
    inLanguage: "es",
    description:
      "Sistema automatizado de monitoreo de flotas que analiza alertas con inteligencia artificial, filtra falsas alarmas y notifica emergencias reales en segundos.",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/OnlineOnly",
      priceCurrency: "USD",
    },
    featureList: [
      "Análisis automático de alertas",
      "Detección de emergencias reales",
      "Notificaciones por llamada, WhatsApp y SMS",
      "Análisis de imágenes de dashcam",
      "Monitoreo continuo 24/7",
      "Compatible con Samsara",
      "Panel de control en tiempo real",
      "Copiloto conversacional de flota",
    ],
    screenshot: `${siteUrl}/og-image.jpg`,
  }

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es SAM y cómo funciona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM es un sistema automatizado de monitoreo que se conecta a tus dispositivos Samsara y analiza cada alerta con inteligencia artificial. Revisa ubicación, conductor y cámaras, filtra las falsas alarmas y te notifica solo cuando hay una emergencia real.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto reduce SAM las falsas alarmas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM reduce las alertas irrelevantes en un 80%, permitiendo que tu equipo se enfoque únicamente en las situaciones que realmente requieren atención.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipo de alertas puede analizar SAM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM analiza botones de emergencia, conductores distraídos, colisiones y frenados bruscos, cámaras bloqueadas, exceso de velocidad y más. Cubre los eventos de seguridad más críticos para una flota.",
        },
      },
      {
        "@type": "Question",
        name: "¿SAM funciona con Samsara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, SAM está diseñado para integrarse directamente con dispositivos y alertas de Samsara. La conexión es rápida y no requiere instalaciones complicadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo me notifica SAM cuando hay una emergencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAM te notifica por tres canales según la urgencia: llamada telefónica para emergencias críticas, WhatsApp para alertas importantes y SMS como respaldo.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema,
      organizationSchema,
      softwareSchema,
      faqSchema,
      breadcrumbSchema,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#main-content"
        className="absolute -left-[9999px] focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-0"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
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
