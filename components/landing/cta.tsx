"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const benefits = [
    "Implementacion rapida y sin complicaciones",
    "Te acompanamos en todo el proceso",
    "Prueba gratuita para que lo veas funcionar",
    "Cancela cuando quieras, sin compromiso"
  ]

  return (
    <section ref={sectionRef} className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-[2rem] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,30%,12%)] via-[hsl(200,25%,15%)] to-[hsl(190,20%,18%)]" />
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          <div className="relative z-10 px-8 py-20 lg:px-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Image
                    src="/images/image.jpeg"
                    alt="SAM Logo"
                    width={44}
                    height={44}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance leading-tight">
                  Listo para proteger tu flota de verdad?
                </h2>

                <p className="mt-6 text-lg text-white/60 text-pretty leading-relaxed">
                  Unete a las empresas que ya confian en SAM para cuidar sus vehiculos y equipos.
                </p>

                <ul className="mt-10 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li
                      key={benefit}
                      className={`flex items-center gap-3 text-white/70 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                      style={{ transitionDelay: `${300 + index * 80}ms` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link href="/demo">
                    <Button size="lg" className="bg-white text-foreground hover:bg-white/90 gap-2 px-8 hover:scale-[1.02] transition-all font-semibold">
                      Solicitar Demo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      Hablar con Ventas
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side stats */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "80%", label: "Menos interrupciones" },
                    { value: "<10s", label: "Tiempo de respuesta" },
                    { value: "24/7", label: "Monitoreo continuo" },
                    { value: "100%", label: "Consistencia" }
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`rounded-2xl p-8 border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                      <p className="text-white/40 mt-2 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
