import { Check, X, Zap } from "lucide-react"

const forWho = [
  "Negocios digitais com operacao complexa",
  "Empresas em fase de crescimento ou estruturacao",
  "Times que precisam automatizar processos criticos",
  "Operacoes que exigem tecnologia para escalar",
]

const notForWho = [
  "Nao e para quem busca solucoes prontas ou genericas",
  "Nao e para quem nao esta disposto a estruturar processos",
  "Nao e para quem ve tecnologia como custo",
]

export function TargetAudience() {
  return (
    <section id="para-quem" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trabalhamos com empresas que entendem que escala exige tecnologia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nao entregamos solucoes genericas. Construimos sistemas para operacoes que precisam de eficiencia, controle e crescimento previsivel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lista positiva */}
            <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-foreground mb-6">Para quem e:</h3>
              <div className="space-y-4">
                {forWho.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lista negativa */}
            <div className="p-8 rounded-2xl border border-red-500/30 bg-red-500/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-foreground mb-6">Para quem nao e:</h3>
              <div className="space-y-4">
                {notForWho.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                      <X className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card de autoridade */}
          <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Tecnologia nao e diferencial. E pre-requisito.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empresas que crescem de forma sustentavel constroem sistemas antes de escalar pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
