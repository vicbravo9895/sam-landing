"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  Sparkles,
  Radio,
  Bell,
  Eye,
  Phone,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  User,
  Camera,
  Clock,
  TrendingDown,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }
const transition = { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }

export function Hero() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const yBlur1 = useTransform(scrollYProgress, [0, 0.4], [0, 80])
  const yBlur2 = useTransform(scrollYProgress, [0, 0.4], [0, -50])
  const opacityGrid = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.08])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 0 : prev + 1))
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Presentación de SAM"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl motion-reduce:animate-none"
          style={reduced ? undefined : { y: yBlur1 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl motion-reduce:animate-none [animation-delay:1s]"
          style={reduced ? undefined : { y: yBlur2 }}
        />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          style={reduced ? { opacity: 0.4 } : { opacity: opacityGrid }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - motion entrance */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduced ? 0 : 0.1,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            <motion.div variants={fadeUp} transition={transition}>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors duration-200">
                <Sparkles className="w-4 h-4 mr-2" aria-hidden />
                Monitoreo Inteligente para Flotas
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} transition={transition} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Cientos de alertas.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solo las que importan llegan a ti.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} transition={transition} className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
              SAM se conecta a tus dispositivos Samsara y analiza cada alerta automáticamente.
              Distingue emergencias reales de falsas alarmas y te notifica solo cuando necesitas actuar.
            </motion.p>

            <motion.div variants={fadeUp} transition={transition} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/demo" className="w-full sm:w-auto cursor-pointer">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-colors duration-200 hover:scale-[1.02] gap-2 px-8 h-12 min-h-[48px] cursor-pointer">
                  Solicitar Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 bg-transparent hover:bg-muted/50 transition-colors duration-200 px-8 h-12 min-h-[48px] cursor-pointer"
                onClick={() => {
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Play className="w-4 h-4" aria-hidden />
                Ver cómo funciona
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} transition={transition} className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" aria-hidden />
                <span>Monitoreo 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-5 h-5 text-secondary" aria-hidden />
                <span>Respuesta en segundos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Radio className="w-5 h-5 text-primary" aria-hidden />
                <span>Compatible con Samsara</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - motion entrance + float */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduced ? 0 : 0.25 }}
          >
            {/* Main Dashboard Card */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-border/50 bg-card">
              {/* Dashboard Header Bar */}
              <div className="bg-gradient-to-r from-[hsl(210,30%,15%)] to-[hsl(200,25%,20%)] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden>
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-xs text-white/60 font-medium tracking-wide">SAM Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-[#28C840]/20 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
                    <span className="text-[10px] text-[#28C840] font-medium">En linea</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-5">
                {/* Top Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-muted/40 rounded-xl p-3 text-center border border-border/30">
                    <p className="text-lg font-bold text-foreground">147</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Alertas hoy</p>
                  </div>
                  <div className="bg-muted/40 rounded-xl p-3 text-center border border-border/30">
                    <p className="text-lg font-bold text-primary">12</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Reales</p>
                  </div>
                  <div className="bg-muted/40 rounded-xl p-3 text-center border border-border/30">
                    <p className="text-lg font-bold text-secondary">135</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Filtradas</p>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="space-y-3">
                  {/* Step 1 - Alert Received */}
                  <div className={`relative rounded-xl p-3.5 transition-[transform,opacity,background-color,border-color] duration-500 ${
                    activeStep >= 0
                      ? "bg-destructive/8 border border-destructive/20 opacity-100 translate-y-0"
                      : "opacity-40 translate-y-2"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 ${
                        activeStep >= 0 ? "bg-destructive/15" : "bg-muted"
                      }`}>
                        <AlertTriangle className={`w-4 h-4 transition-colors duration-500 ${activeStep >= 0 ? "text-destructive" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground truncate">Boton de emergencia</p>
                          <span className="text-[10px] text-muted-foreground shrink-0">Hace 2s</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <MapPin className="w-3 h-3" /> Ruta MX-45
                          </span>
                          <span className="text-border">|</span>
                          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <User className="w-3 h-3" /> J. Martinez
                          </span>
                        </div>
                      </div>
                    </div>
                    {activeStep === 0 && (
                      <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-destructive animate-ping" />
                    )}
                  </div>

                  {/* Step 2 - SAM Analyzing */}
                  <div className={`rounded-xl p-3.5 transition-[transform,opacity,background-color,border-color] duration-500 ${
                    activeStep >= 1
                      ? "bg-primary/8 border border-primary/20 opacity-100 translate-y-0"
                      : "opacity-30 translate-y-2 border border-transparent"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 ${
                        activeStep >= 1 ? "bg-primary/15" : "bg-muted"
                      }`}>
                        <Eye className={`w-4 h-4 transition-colors duration-500 ${activeStep >= 1 ? "text-primary" : "text-muted-foreground"} ${activeStep === 1 ? "animate-pulse" : ""}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {activeStep === 1 ? "Analizando…" : activeStep > 1 ? "Análisis completado" : "Esperando análisis"}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5">
                          {[
                            { icon: MapPin, label: "Ubicacion" },
                            { icon: Camera, label: "Camaras" },
                            { icon: User, label: "Conductor" },
                          ].map((item, i) => (
                            <span key={item.label} className={`flex items-center gap-1 text-[11px] transition-[color,opacity] duration-300 ${
                              activeStep > 1
                                ? "text-primary"
                                : activeStep === 1 && i <= 1
                                  ? "text-primary"
                                  : "text-muted-foreground/50"
                            }`}>
                              {activeStep > 1 || (activeStep === 1 && i <= 1) ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <item.icon className="w-3 h-3" />
                              )}
                              {item.label}
                            </span>
                          ))}
                        </div>
                        {activeStep === 1 && (
                          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-2/3 animate-[loading-shine_2s_ease-in-out_infinite]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 3 - Result + Notification */}
                  <div className={`rounded-xl p-3.5 transition-[transform,opacity,background-color,border-color] duration-500 ${
                    activeStep >= 2
                      ? "bg-[hsl(160,40%,95%)] dark:bg-[hsl(160,30%,12%)] border border-[hsl(160,40%,80%)] dark:border-[hsl(160,40%,25%)] opacity-100 translate-y-0"
                      : "opacity-30 translate-y-2 border border-transparent"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 ${
                        activeStep >= 2 ? "bg-[hsl(160,40%,85%)]" : "bg-muted"
                      }`}>
                        <Phone className={`w-4 h-4 transition-colors duration-500 ${activeStep >= 2 ? "text-[hsl(160,40%,30%)]" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">
                            {activeStep >= 3 ? "Supervisor notificado" : activeStep >= 2 ? "Notificando..." : "Pendiente"}
                          </p>
                          {activeStep >= 3 && (
                            <CheckCircle2 className="w-4 h-4 text-[hsl(160,40%,35%)]" />
                          )}
                        </div>
                        {activeStep >= 2 && (
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium transition-[color,opacity] duration-300 ${
                              activeStep >= 3 ? "bg-[hsl(160,40%,85%)] text-[hsl(160,40%,25%)]" : "bg-muted text-muted-foreground"
                            }`}>
                              <Phone className="w-2.5 h-2.5" /> Llamada
                            </span>
                            <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium transition-[color,opacity] duration-300 delay-150 ${
                              activeStep >= 3 ? "bg-[hsl(160,40%,85%)] text-[hsl(160,40%,25%)]" : "bg-muted text-muted-foreground"
                            }`}>
                              <Bell className="w-2.5 h-2.5" /> WhatsApp
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Timestamp Bar */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Tiempo total: 8 segundos</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-primary font-medium">
                    <TrendingDown className="w-3 h-3" />
                    <span>92% alertas filtradas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat Card - Top Right */}
            <motion.div
              className="absolute -top-3 -right-3 bg-card rounded-xl shadow-lg border border-border/50 px-4 py-3 z-20"
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-base font-bold text-foreground">80%</p>
                  <p className="text-[11px] text-muted-foreground">Menos ruido</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Bottom Left */}
            <motion.div
              className="absolute -bottom-3 -left-3 bg-card rounded-xl shadow-lg border border-border/50 px-4 py-3 z-20"
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-base font-bold text-foreground">{'<'}10s</p>
                  <p className="text-[11px] text-muted-foreground">De alerta a acción</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
