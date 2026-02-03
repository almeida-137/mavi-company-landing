import { Code2, Bot, Plug } from "lucide-react"

const solutions = [
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas Sob Medida",
    items: ["Plataformas web", "Dashboards", "SaaS", "Backends escaláveis"],
  },
  {
    icon: Bot,
    title: "Automações com Inteligência Artificial",
    items: [
      "Chatbots inteligentes",
      "Classificação de leads",
      "Atendimento automatizado",
      "Processos internos com IA",
    ],
  },
  {
    icon: Plug,
    title: "Integrações e APIs",
    items: ["WhatsApp", "CRMs", "ERPs", "Pagamentos", "Plataformas digitais"],
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A MaviCompany constrói a infraestrutura que faz seu negócio escalar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Não entregamos promessas.{" "}
            <span className="text-primary font-semibold">Entregamos sistemas funcionando.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{solution.title}</h3>
                
                <ul className="space-y-3">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
