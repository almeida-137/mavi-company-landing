import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: string
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Voltar ao início</span>
        </Link>
        
        {breadcrumb && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-primary text-xs md:text-sm font-medium tracking-wider uppercase">
              {breadcrumb}
            </span>
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
