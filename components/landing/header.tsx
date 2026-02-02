"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/mavi-logo.jpeg"
              alt="MaviCompany"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#solucoes"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Soluções
            </Link>
            <Link
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Como Funciona
            </Link>
            <Link
              href="#tecnologias"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Tecnologias
            </Link>
            <Link
              href="#para-quem"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Para Quem
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Falar com especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <Link
                href="#solucoes"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link
                href="#como-funciona"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link
                href="#tecnologias"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologias
              </Link>
              <Link
                href="#para-quem"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Quem
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                Falar com especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
