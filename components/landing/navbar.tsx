"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all px-4 py-2 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
            >
              Iniciar Sesión
            </Button>
            <Link href="/demo">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25 px-5"
              >
                Solicitar Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-background">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all px-4 py-3 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-border/50">
              <Button variant="ghost" size="sm" className="justify-start h-11">
                Iniciar Sesión
              </Button>
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
