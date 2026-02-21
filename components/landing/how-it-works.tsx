"use client"

import { Bell, Search, FileText, Send, Eye } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)
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

  useEffect(() => {
    if (!isVisible) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1))
    }, 2000)
    return () => clearInterval(timer)
  }, [isVisible])

  const steps = [
    { icon: Bell, title: "Llega una alerta", description: "Cuando algo pasa en tu flota, SAM lo recibe al instante desde tus dispositivos." },
    { icon: Search, title: "SAM investiga", description: "Revisa ubicacion, conductor, historial y las imagenes de las camaras a bordo." },
    { icon: FileText, title: "Te lo explica claro", description: "Genera un resumen: que paso, que tan grave es y que deberias hacer." },
    { icon: Send, title: "Notifica a quien corresponda", description: "Llamada para emergencias, WhatsApp para alertas, o solo un registro." },
    { icon: Eye, title: "Sigue observando", description: "Si no esta claro, lo mantiene en observacion hasta confirmar que todo esta bien." }
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-[opacity,transform] duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Como funciona</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Simple. Automatico. Efectivo.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
            SAM trabaja en segundo plano para que tu no tengas que hacerlo.
          </p>
        </div>

        {/* Horizontal steps for desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative text-center transition-[opacity,transform,background-color,border-color,box-shadow] duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] right-[-40%] h-px">
                    <div className={`h-full bg-gradient-to-r from-primary/30 to-primary/10 transition-opacity duration-500 ${activeStep >= index ? "opacity-100" : "opacity-20"}`} />
                  </div>
                )}

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-[opacity,transform,background-color,border-color,box-shadow] duration-500 ${
                  activeStep === index
                    ? "bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20 scale-110"
                    : activeStep > index
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-muted/60 border border-border/50"
                }`}>
                  <step.icon className={`w-6 h-6 transition-colors duration-500 ${
                    activeStep === index ? "text-primary-foreground" : activeStep > index ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>

                {/* Step number */}
                <div className={`mt-4 inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-[opacity,transform,background-color,border-color,box-shadow] duration-500 ${
                  activeStep >= index ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {index + 1}
                </div>

                <h3 className="mt-3 text-sm font-semibold text-foreground tracking-tight">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden max-w-lg mx-auto space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex items-start gap-5 transition-[opacity,transform,background-color,border-color,box-shadow] duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && <div className="w-px h-8 bg-border/50 mt-2" />}
              </div>
              <div className="pb-6">
                <span className="text-xs font-medium text-primary">Paso {index + 1}</span>
                <h3 className="text-base font-semibold text-foreground mt-0.5">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
