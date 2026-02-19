"use client"

import { TrendingDown, Zap, Users, Bell, TrendingUp, Shield, X, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Benefits() {
  const [isVisible, setIsVisible] = useState(false)
  const [countStarted, setCountStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCountStarted(true), 300)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: TrendingDown, value: "80%", label: "Menos interrupciones", description: "La mayoria de las alertas son ruido. SAM las filtra." },
    { icon: Zap, value: "<10s", label: "Tiempo de respuesta", description: "De la alerta a la notificacion, todo en tiempo real." },
    { icon: Users, value: "0", label: "Personal adicional", description: "Crece tu flota sin contratar mas operadores." },
    { icon: Bell, value: "3", label: "Canales de aviso", description: "Llamada, WhatsApp y SMS segun la urgencia." },
    { icon: TrendingUp, value: "100%", label: "Consistencia", description: "Mismos criterios de evaluacion, siempre." },
    { icon: Shield, value: "24/7", label: "Siempre activo", description: "De dia, de noche, fines de semana y feriados." }
  ]

  const withoutSam = [
    "Revisar cada alerta manualmente toma demasiado tiempo",
    "Tu equipo se cansa de tantas notificaciones sin importancia",
    "Las emergencias reales pueden pasar desapercibidas",
    "La evaluacion depende de quien este de turno",
    "Necesitas mas personal para cubrir mas vehiculos"
  ]

  const withSam = [
    "Analisis automatico en segundos, sin intervencion humana",
    "Solo las alertas relevantes llegan a tu equipo",
    "Las emergencias siempre tienen prioridad y nunca se pierden",
    "Mismos criterios de evaluacion las 24 horas, los 7 dias",
    "Escala tu flota sin necesidad de contratar mas personas"
  ]

  return (
    <section ref={sectionRef} id="benefits" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Resultados</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Lo vas a notar desde el primer dia
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-24">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative text-center rounded-2xl p-8 border border-border/40 bg-card hover:bg-card/80 hover:shadow-lg hover:shadow-primary/[0.04] hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center mx-auto mb-5 group-hover:from-primary/15 group-hover:to-secondary/15 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>

              <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 transition-all duration-700 ${countStarted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {stat.value}
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-tight">{stat.label}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">El antes y despues</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border/40 p-8 lg:p-10 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive/70" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Sin SAM</h4>
              </div>
              <ul className="space-y-5">
                {withoutSam.map((item, i) => (
                  <li key={item} className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} style={{ transitionDelay: `${600 + i * 80}ms` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive/40 mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/15 p-8 lg:p-10 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Con SAM</h4>
              </div>
              <ul className="space-y-5">
                {withSam.map((item, i) => (
                  <li key={item} className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`} style={{ transitionDelay: `${600 + i * 80}ms` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
