"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Zap, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { submitDeal } from "@/app/actions/deals"

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [fleetSize, setFleetSize] = useState("")
  const [country, setCountry] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set("fleet_size", fleetSize)
    formData.set("country", country)

    try {
      const result = await submitDeal(formData)

      if (!result.success) {
        setErrorMsg(result.error)
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch {
      setErrorMsg("Ocurrió un error inesperado. Intenta de nuevo.")
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: Clock,
      title: "Demo personalizada",
      description: "Te mostramos SAM funcionando con casos reales de tu industria"
    },
    {
      icon: Shield,
      title: "Sin compromiso",
      description: "Conoce la plataforma sin presiones ni obligaciones"
    },
    {
      icon: Zap,
      title: "Respuesta rápida",
      description: "Nos pondremos en contacto contigo en menos de 24 horas"
    }
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-muted/30 to-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-[bounce_1s_ease-in-out]">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Solicitud enviada
          </h1>
          <p className="text-muted-foreground mb-8">
            Gracias por tu interés en SAM. Nuestro equipo revisará tu información 
            y te contactará en menos de 24 horas para agendar tu demo personalizada.
          </p>
          <Link href="/">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/image.jpeg"
              alt="SAM Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-semibold text-foreground">SAM</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Info */}
          <div className="lg:sticky lg:top-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Agenda tu demo{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                personalizada
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Descubre cómo SAM puede ayudarte a proteger tu flota y reducir 
              las falsas alarmas. Te mostraremos la plataforma en acción.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start gap-4 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "backwards" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicator */}
            <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border/50">
              <p className="text-sm text-muted-foreground">
                "SAM nos ayudó a reducir las falsas alarmas en un 80%. 
                Ahora solo nos enteramos de lo que realmente importa."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                  JM
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Juan Martínez</p>
                  <p className="text-xs text-muted-foreground">Gerente de Operaciones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Completa tus datos
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input 
                    id="nombre"
                    name="first_name"
                    placeholder="Tu nombre" 
                    required 
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellido">Apellido *</Label>
                  <Input 
                    id="apellido"
                    name="last_name"
                    placeholder="Tu apellido" 
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="tu@empresa.com" 
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input 
                  id="telefono"
                  name="phone"
                  type="tel" 
                  placeholder="+52 8117658890" 
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa *</Label>
                <Input 
                  id="empresa"
                  name="company_name"
                  placeholder="Nombre de tu empresa" 
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cargo">Cargo</Label>
                <Input 
                  id="cargo"
                  name="position"
                  placeholder="Tu cargo en la empresa"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="flota">Tamaño de la flota *</Label>
                <Select required value={fleetSize} onValueChange={setFleetSize}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1 - 10 vehículos</SelectItem>
                    <SelectItem value="11-50">11 - 50 vehículos</SelectItem>
                    <SelectItem value="51-100">51 - 100 vehículos</SelectItem>
                    <SelectItem value="101-500">101 - 500 vehículos</SelectItem>
                    <SelectItem value="500+">Más de 500 vehículos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pais">País *</Label>
                <Select required value={country} onValueChange={setCountry}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="México">México</SelectItem>
                    <SelectItem value="Colombia">Colombia</SelectItem>
                    <SelectItem value="Chile">Chile</SelectItem>
                    <SelectItem value="Argentina">Argentina</SelectItem>
                    <SelectItem value="Perú">Perú</SelectItem>
                    <SelectItem value="Ecuador">Ecuador</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">¿Qué desafíos enfrentas actualmente?</Label>
                <Textarea 
                  id="mensaje"
                  name="challenges"
                  placeholder="Cuéntanos brevemente sobre tus principales retos con el monitoreo de tu flota..."
                  className="bg-background min-h-[100px] resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-sm text-destructive text-center">{errorMsg}</p>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-colors duration-200 gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Solicitar Demo
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo. 
                Tus datos están seguros y no serán compartidos con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
