"use client"

import { AlertOctagon, Eye, Camera, Car } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function UseCases() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCase, setActiveCase] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const cases = [
    {
      icon: AlertOctagon,
      badge: "Emergencia",
      color: "text-red-500",
      bg: "bg-red-500/10",
      borderActive: "border-red-500/30",
      title: "Boton de emergencia presionado",
      scenario: "Un conductor presiona el boton de emergencia en su vehiculo.",
      whatSamDoes: "Verifica si el vehiculo se esta moviendo, confirma quien esta manejando y revisa las camaras para entender que esta pasando.",
      outcomes: [
        { label: "Emergencia real", action: "Te llama y envia WhatsApp inmediatamente con toda la informacion." },
        { label: "Fue accidental", action: "Lo registra sin interrumpirte. Queda disponible si necesitas revisarlo." }
      ]
    },
    {
      icon: Eye,
      badge: "Seguridad",
      color: "text-primary",
      bg: "bg-primary/10",
      borderActive: "border-primary/30",
      title: "Conductor distraido detectado",
      scenario: "El sistema detecta que el conductor no esta prestando atencion al camino.",
      whatSamDoes: "Analiza las imagenes, revisa si es un patron de este conductor y evalua el riesgo segun velocidad y contexto.",
      outcomes: [
        { label: "Lo que recibes", action: "Un mensaje claro: quien es, que vehiculo, cuantas veces ha pasado y que se recomienda." },
        { label: "Seguimiento", action: "Si tiene incidentes recurrentes, lo marca como conductor de riesgo." }
      ]
    },
    {
      icon: Car,
      badge: "Accidente",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      borderActive: "border-orange-500/30",
      title: "Colision o frenado brusco",
      scenario: "Se detecta un impacto o una frenada extrema en uno de tus vehiculos.",
      whatSamDoes: "Verifica la velocidad, ubicacion, estado del conductor y las imagenes de las camaras.",
      outcomes: [
        { label: "Indicios de accidente", action: "Llamada + WhatsApp + SMS al equipo de emergencia con ubicacion exacta." },
        { label: "Frenado por trafico", action: "Se registra como evento de seguridad en el reporte del conductor." }
      ]
    },
    {
      icon: Camera,
      badge: "Prevencion",
      color: "text-secondary",
      bg: "bg-secondary/10",
      borderActive: "border-secondary/30",
      title: "Camara bloqueada u obstruida",
      scenario: "SAM detecta que una camara fue tapada o no funciona correctamente.",
      whatSamDoes: "Revisa ubicacion, quien esta manejando y si esto ha ocurrido antes en circunstancias similares.",
      outcomes: [
        { label: "Parece intencional", action: "Alerta al equipo de seguridad con la evidencia para actuar." },
        { label: "Condiciones de la zona", action: "Te avisa de forma informativa, sin urgencia." }
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="use-cases" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-[opacity,transform] duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Ejemplos reales</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Asi responde SAM en cada situacion
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Casos que pasan todos los dias en una flota.
          </p>
        </div>

        {/* Tab navigation */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-[opacity,transform] duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {cases.map((c, index) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setActiveCase(index)}
              aria-pressed={activeCase === index}
              aria-label={`Ver caso: ${c.badge}`}
              className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeCase === index
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <c.icon className="w-4 h-4" aria-hidden />
              {c.badge}
            </button>
          ))}
        </div>

        {/* Active case detail */}
        {cases.map((useCase, index) => (
          <div
            key={useCase.title}
            className={`transition-[opacity,transform] duration-500 ${
              activeCase === index
                ? "opacity-100 translate-y-0 block"
                : "opacity-0 translate-y-4 hidden"
            }`}
          >
            <div className={`rounded-3xl border bg-card overflow-hidden ${useCase.borderActive}`}>
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${useCase.bg} flex items-center justify-center shrink-0`}>
                    <useCase.icon className={`w-7 h-7 ${useCase.color}`} />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold ${useCase.color} tracking-widest uppercase`}>{useCase.badge}</span>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-1 tracking-tight">{useCase.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{useCase.scenario}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* What SAM does */}
                  <div className="rounded-2xl bg-muted/30 border border-border/30 p-6">
                    <h4 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Que hace SAM</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.whatSamDoes}</p>
                  </div>

                  {/* Outcomes */}
                  <div className="rounded-2xl bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] border border-primary/10 p-6">
                    <h4 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Resultado</h4>
                    <div className="space-y-4">
                      {useCase.outcomes.map((outcome) => (
                        <div key={outcome.label}>
                          <span className="text-xs font-semibold text-foreground">{outcome.label}</span>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{outcome.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
