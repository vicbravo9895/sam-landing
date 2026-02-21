"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark")
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Características" },
    { href: "#how-it-works", label: "Cómo Funciona" },
    { href: "#benefits", label: "Beneficios" },
    { href: "#use-cases", label: "Casos de Uso" },
  ]

  return (
    <nav 
      role="navigation"
      aria-label="Navegación principal"
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl rounded-2xl transition-[background-color,box-shadow,border-color] duration-200 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border border-border/50 shadow-black/5" 
          : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo con más presencia */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative">
              <Image
                src="/images/image.jpeg"
                alt="SAM - Sistema Automatizado de Monitoreo"
                width={52}
                height={52}
                className="rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </div>
          </Link>

          {/* Desktop Navigation - Centrado */}
          <div className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-full transition-colors duration-200 px-4 py-2 rounded-full min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle + CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors duration-200 cursor-pointer"
              aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              title={isDark ? "Tema claro" : "Tema oscuro"}
            >
              {mounted ? (
                isDark ? (
                  <Sun className="h-5 w-5" aria-hidden />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden />
                )
              ) : (
                <span className="h-5 w-5 rounded-full bg-muted" aria-hidden />
              )}
            </button>
            <Link href="https://cloud.samglobaltechnologies.com">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-colors duration-200 hover:shadow-lg hover:shadow-primary/25 px-5">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/demo">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-colors duration-200 hover:shadow-lg hover:shadow-primary/25 px-5"
              >
                Solicitar Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - 44px touch target */}
          <button
            type="button"
            className="md:hidden p-3 min-h-[44px] min-w-[44px] text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl transition-colors duration-200 cursor-pointer inline-flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-background rounded-b-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer block text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset transition-colors duration-200 px-4 py-3 rounded-xl min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-border/50">
              <button
                type="button"
                onClick={() => {
                  toggleTheme()
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-3 px-4 py-3 min-h-[44px] rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              >
                {mounted ? (isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <span className="h-5 w-5 rounded-full bg-muted" />}
                <span>{isDark ? "Tema claro" : "Tema oscuro"}</span>
              </button>
              <Link href="https://cloud.samglobaltechnologies.com" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start h-11 min-h-[44px] cursor-pointer">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/demo" onClick={() => setIsOpen(false)}>
                <Button 
                  size="sm" 
                  className="w-full h-11 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                >
                  Solicitar Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
