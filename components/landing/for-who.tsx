"use client"

import { Truck, Package, Wrench, Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ForWho() {
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

  const audiences = [
    {
      icon: Truck,
      title: "Transporte de carga",
      description: "Protege tus unidades y conductores en carretera con monitoreo que responde en segundos.",
      accent: "from-primary to-secondary"
    },
    {
      icon: Package,
      title: "Ultima milla y delivery",
      description: "Visibilidad de toda tu operacion sin necesidad de un equipo grande de monitoreo.",
      accent: "from-secondary to-accent"
    },
    {
      icon: Wrench,
      title: "Vehiculos de campo",
      description: "Construccion, servicios tecnicos o ventas con flotillas que necesitan estar protegidas.",
      accent: "from-primary to-secondary"
    },
    {
      icon: Building2,
      title: "Centrales de monitoreo",
      description: "Gestiona multiples flotas con un solo sistema que escala sin agregar personal.",
      accent: "from-secondary to-accent"
    }
  ]

  return (
    <section ref={sectionRef} id="for-who" aria-label="Para quién es SAM" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-sm font-medium text-primary tracking-widest uppercase">Para quien es SAM</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Si tienes una flota y usas Samsara, SAM es para ti.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Cualquier empresa que quiera automatizar el monitoreo de sus alertas de seguridad vehicular. Sin instalaciones complicadas.
            </p>
          </div>

          {/* Right cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`group relative rounded-2xl p-6 border border-border/40 bg-card hover:bg-card/80 hover:shadow-lg hover:shadow-primary/[0.04] hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${audience.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground tracking-tight">{audience.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
