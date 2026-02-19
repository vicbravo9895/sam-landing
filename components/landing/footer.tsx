"use client"

import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const links = {
    producto: [
      { label: "Caracteristicas", href: "#features" },
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "Beneficios", href: "#benefits" },
      { label: "Ejemplos", href: "#use-cases" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    legal: [
      { label: "Terminos de Servicio", href: "#terms" },
      { label: "Politica de Privacidad", href: "#privacy" },
    ],
  }

  return (
    <footer className="border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/image.jpeg"
                alt="SAM Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div>
                <span className="font-semibold text-foreground">SAM</span>
                <p className="text-xs text-muted-foreground">Sistema Automatizado de Monitoreo</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Monitoreo inteligente para tu flota. SAM analiza cada alerta automaticamente para que solo actues cuando realmente importa.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:contacto@samglobaltechnologies.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                contacto@samglobaltechnologies.com
              </a>
              <a href="tel:+521234567890" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +52 (123) 456-7890
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Nuevo Leon, Mexico
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Producto</h3>
            <ul className="space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SAM - Sistema Automatizado de Monitoreo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
