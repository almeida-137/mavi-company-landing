import { TrendingDown, Scale, ShieldCheck, Target, Database, Clock } from "lucide-react"

const benefits = [
  {
    icon: TrendingDown,
    title: "Redução de custos operacionais",
    description: "Automatize tarefas repetitivas e reduza gastos com operacoes manuais.",
  },
  {
    icon: Scale,
    title: "Escala sem aumentar equipe",
    description: "Cresca sua operação sem precisar contratar proporcionalmente.",
  },
  {
    icon: ShieldCheck,
    title: "Menos erros humanos",
    description: "Sistemas automatizados garantem consistência e precisão.",
  },
  {
    icon: Target,
    title: "Processos previsíveis",
    description: "Tenha controle total sobre o fluxo de trabalho da sua empresa.",
  },
  {
    icon: Database,
    title: "Mais controle e dados",
    description: "Dashboards em tempo real para decisões baseadas em dados.",
  },
  {
    icon: Clock,
    title: "Automação 24/7",
    description: "Sistemas e fluxos automatizados operando continuamente, sem pausas, gargalos ou dependencia humana.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Por que automatizar com a MaviCompany?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
