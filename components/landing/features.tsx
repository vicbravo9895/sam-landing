"use client"

import { Sparkles, Smartphone, LayoutDashboard, MessageSquare, Eye, Clock, Phone, Camera } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
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

  const features = [
    {
      icon: Sparkles,
      title: "Analisis automatico de alertas",
      description: "Cada alerta es investigada al instante: ubicacion, conductor, historial y camaras a bordo.",
      accent: "from-primary to-secondary"
    },
    {
      icon: Phone,
      title: "Te avisa por el canal correcto",
      description: "Llamada para emergencias, WhatsApp para alertas importantes, SMS como respaldo.",
      accent: "from-secondary to-accent"
    },
    {
      icon: LayoutDashboard,
      title: "Panel de control claro",
      description: "Todas las alertas organizadas por estado y prioridad. De un vistazo sabes que necesita tu atencion.",
      accent: "from-primary to-secondary"
    },
    {
      icon: MessageSquare,
      title: "Preguntale sobre tu flota",
      description: "Consulta la ubicacion de un vehiculo o el historial de un conductor con preguntas simples.",
      accent: "from-secondary to-accent"
    },
    {
      icon: Eye,
      title: "Monitoreo continuo",
      description: "Si una situacion no esta clara, SAM la sigue observando hasta confirmar que todo esta resuelto.",
      accent: "from-primary to-secondary"
    },
    {
      icon: Camera,
      title: "Analisis visual de camaras",
      description: "Analiza las imagenes de las dashcams para detectar el estado del conductor y senales de riesgo.",
      accent: "from-secondary to-accent"
    },
    {
      icon: Clock,
      title: "Respuesta en segundos",
      description: "Desde que llega la alerta hasta la notificacion, todo pasa en segundos. Sin demoras.",
      accent: "from-primary to-secondary"
    },
    {
      icon: Smartphone,
      title: "Funciona desde tu celular",
      description: "Accede desde cualquier dispositivo. Se instala directo en tu pantalla como una app.",
      accent: "from-secondary to-accent"
    }
  ]

  return (
    <section ref={sectionRef} id="features" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Funcionalidades</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Todo lo que necesitas para proteger tu flota
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            Desde que llega la alerta hasta que la persona correcta tiene la informacion para actuar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl p-6 border border-border/40 bg-card hover:bg-card/80 transition-all duration-500 hover:shadow-lg hover:shadow-primary/[0.04] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
