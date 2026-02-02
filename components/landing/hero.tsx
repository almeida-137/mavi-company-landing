"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useModal } from "./modal-provider"

export function Hero() {
  const { openModal } = useModal()

  function handleScrollTo(targetId: string) {
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
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="text-primary text-xs md:text-sm font-medium tracking-wider">
              AUTOMACAO  •  IA  •  DESENVOLVIMENTO
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">DESENVOLVIMENTO E </span>
            <span className="text-primary">AUTOMACOES COM IA</span>
            <span className="text-foreground"> QUE ESCALAM NEGOCIOS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Desenvolvemos sistemas, integracoes e automacoes inteligentes para empresas que querem crescer com tecnologia, previsibilidade e escala.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold group"
              onClick={() => openModal("diagnostic")}
            >
              Solicitar diagnostico tecnico
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-foreground px-8 py-6 text-base font-semibold bg-transparent"
              onClick={() => handleScrollTo("como-funciona")}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver como funciona
            </Button>
          </div>
        </div>

        {/* Dashboard Illustration */}
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/10">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-muted-foreground">dashboard.mavicompany.com</span>
              </div>
              {/* Dashboard Content */}
              <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Automacoes Ativas", value: "127", change: "+23%" },
                  { label: "Leads Processados", value: "3.4k", change: "+45%" },
                  { label: "Tempo Economizado", value: "892h", change: "+67%" },
                  { label: "ROI", value: "340%", change: "+12%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg bg-secondary/50 border border-border/30"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-green-400 mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>
              {/* Animated Flow Lines */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="h-32 md:h-48 rounded-lg bg-gradient-to-br from-primary/10 via-secondary to-accent/10 border border-border/30 flex items-center justify-center">
                  <div className="flex items-center gap-4 md:gap-8">
                    {["Input", "IA", "Automacao", "Output"].map((step, index) => (
                      <div key={step} className="flex items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                          <span className="text-xs md:text-sm font-medium text-primary">{step}</span>
                        </div>
                        {index < 3 && (
                          <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
