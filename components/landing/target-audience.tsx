import { Check, X } from "lucide-react"

const forWho = [
  "Negocios digitais",
  "Empresas em crescimento",
  "Times que precisam automatizar",
  "Operacoes que exigem tecnologia",
]

const notForWho = ["Nao e para quem busca solucoes genericas."]

export function TargetAudience() {
  return (
    <section id="para-quem" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trabalhamos com empresas que querem escalar de verdade
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="space-y-4 mb-8">
              {forWho.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-border/50">
              {notForWho.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
