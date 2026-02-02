import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="/images/mavi-logo.jpeg"
              alt="MaviCompany"
              className="h-8 w-auto"
            />
            <p className="text-xs text-muted-foreground">
              Automacao • IA • Desenvolvimento
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="#contato"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
            <Link
              href="#privacidade"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="#termos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; 2026 MaviCompany. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
