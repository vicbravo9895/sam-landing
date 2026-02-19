"use client"

import { AlertTriangle, Clock, Brain, BellOff, DollarSign, CheckCircle2, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProblemSolution() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const problems = [
    { icon: BellOff, title: "Fatiga de alertas", description: "Tu equipo recibe cientos de notificaciones al dia y ya no distingue cuales son importantes." },
    { icon: Clock, title: "Respuestas lentas", description: "Revisar cada alerta manualmente consume minutos valiosos que podrian salvar una situacion." },
    { icon: AlertTriangle, title: "Emergencias ignoradas", description: "Entre tanto ruido, las alertas criticas pueden pasar desapercibidas." },
    { icon: Brain, title: "Depende de quien este de turno", description: "La evaluacion cambia segun el operador y el momento. No hay consistencia." },
    { icon: DollarSign, title: "Costos que no escalan", description: "Mantener un equipo de monitoreo 24/7 es caro y dificil de escalar con mas vehiculos." }
  ]

  const solutions = [
    "Filtra automaticamente lo importante del ruido",
    "Revisa ubicacion, conductor y camaras en segundos",
    "Te explica que esta pasando en un resumen claro",
    "Te notifica solo cuando la situacion lo amerita",
    "Si algo no esta claro, lo sigue observando"
  ]

  return (
    <section ref={sectionRef} id="problem" aria-label="El problema y la solucion" className="py-24 lg:py-40 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase">El problema</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Tu equipo no puede revisar todo con la misma atencion
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Problems */}
          <div>
            <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
              Las flotas generan cientos de alertas diarias. Un equipo humano no puede evaluarlas todas con la velocidad y consistencia necesarias.
            </p>

            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`group flex items-start gap-4 rounded-2xl p-5 border border-transparent hover:border-destructive/15 hover:bg-destructive/[0.03] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/8 flex items-center justify-center group-hover:bg-destructive/15 transition-colors duration-300">
                    <problem.icon className="w-5 h-5 text-destructive/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{problem.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-widest uppercase mb-6">
                <ArrowRight className="w-4 h-4" />
                La solucion
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight text-balance">
                SAM analiza cada alerta por ti, en segundos.
              </h3>
              <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
                SAM recibe cada alerta de tus dispositivos Samsara, la investiga automaticamente y decide si necesitas saberlo o no.
              </p>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div
                    key={solution}
                    className={`flex items-center gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="font-medium text-foreground">{solution}</p>
                  </div>
                ))}
              </div>

              <div className={`mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/[0.06] to-secondary/[0.06] border border-primary/10 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: "900ms" }}>
                <p className="text-lg font-medium text-foreground text-pretty leading-relaxed">
                  {"\"Convierte cientos de alertas diarias en decisiones inteligentes, para que tu equipo solo se enfoque en lo que realmente importa.\""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
