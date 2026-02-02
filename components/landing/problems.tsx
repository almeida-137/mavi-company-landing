import { AlertCircle, Unplug, MessageSquareOff, BarChart3, Users } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    text: "Processos operacionais manuais",
  },
  {
    icon: Unplug,
    text: "Sistemas que nao se integram",
  },
  {
    icon: MessageSquareOff,
    text: "Atendimento e vendas nao automatizados",
  },
  {
    icon: BarChart3,
    text: "Falta de dados em tempo real",
  },
  {
    icon: Users,
    text: "Escalar exige mais pessoas e mais custo",
  },
]

export function Problems() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Seu negocio esta travado por processos manuais?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {problems.map((problem) => (
            <div
              key={problem.text}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="h-5 w-5 text-red-400" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 md:p-8 rounded-xl border border-primary/30 bg-primary/5">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enquanto isso, empresas orientadas por tecnologia{" "}
              <span className="text-primary font-semibold">escalam com automacao e IA.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
