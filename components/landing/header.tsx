"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "./modal-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openModal } = useModal()

  function handleScrollTo(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

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
            <a
              href="#solucoes"
              onClick={(e) => handleScrollTo(e, "solucoes")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Soluções
            </a>
            <a
              href="#como-funciona"
              onClick={(e) => handleScrollTo(e, "como-funciona")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Como Funciona
            </a>
            <a
              href="#tecnologias"
              onClick={(e) => handleScrollTo(e, "tecnologias")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Tecnologias
            </a>
            <a
              href="#para-quem"
              onClick={(e) => handleScrollTo(e, "para-quem")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Para Quem
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => openModal("specialist")}
            >
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
              <a
                href="#solucoes"
                onClick={(e) => handleScrollTo(e, "solucoes")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
              >
                Solucoes
              </a>
              <a
                href="#como-funciona"
                onClick={(e) => handleScrollTo(e, "como-funciona")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
              >
                Como Funciona
              </a>
              <a
                href="#tecnologias"
                onClick={(e) => handleScrollTo(e, "tecnologias")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
              >
                Tecnologias
              </a>
              <a
                href="#para-quem"
                onClick={(e) => handleScrollTo(e, "para-quem")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
              >
                Para Quem
              </a>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
                onClick={() => {
                  openModal("specialist")
                  setIsMenuOpen(false)
                }}
              >
                Falar com especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
