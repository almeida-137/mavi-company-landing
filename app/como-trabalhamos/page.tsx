import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Search, FileCode, Cog, Rocket, Headphones, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Como Trabalhamos | Mavi Company",
  description: "Conheça nossa metodologia de trabalho: do diagnóstico à entrega, passando por desenvolvimento ágil e suporte contínuo.",
}

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Analisamos profundamente seu negócio, identificando gargalos, oportunidades de automação e pontos de melhoria.",
    items: ["Entendimento do negócio", "Mapeamento de processos", "Identificação de dores", "Análise de viabilidade técnica"],
  },
  {
    number: "02",
    icon: FileCode,
    title: "Planejamento",
    description: "Desenhamos a arquitetura da solução, definimos tecnologias e criamos um roadmap claro de entregas.",
    items: ["Definição de escopo", "Arquitetura técnica", "Cronograma de entregas", "Estimativa de investimento"],
  },
  {
    number: "03",
    icon: Cog,
    title: "Desenvolvimento",
    description: "Construímos a solução usando metodologias ágeis, com entregas incrementais e validações constantes.",
    items: ["Sprints semanais", "Entregas incrementais", "Code review", "Testes automatizados"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implantação",
    description: "Realizamos o deploy em ambiente de produção, com migração de dados e treinamento da equipe.",
    items: ["Deploy seguro", "Migração de dados", "Treinamento", "Documentação"],
  },
  {
    number: "05",
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Acompanhamos a operação, realizamos ajustes e evoluímos a solução conforme as necessidades.",
    items: ["Monitoramento 24/7", "Correção de bugs", "Melhorias contínuas", "Suporte técnico"],
  },
]

const methodologies = [
  {
    title: "Metodologia Ágil",
    description: "Utilizamos Scrum e Kanban para garantir entregas rápidas e alinhadas com as expectativas do cliente.",
  },
  {
    title: "DevOps & CI/CD",
    description: "Pipelines automatizados de integração e deploy garantem qualidade e velocidade nas entregas.",
  },
  {
    title: "Clean Architecture",
    description: "Código limpo, bem documentado e fácil de manter, seguindo as melhores práticas do mercado.",
  },
  {
    title: "Testes Automatizados",
    description: "Cobertura de testes unitários, integração e e2e para garantir a estabilidade do sistema.",
  },
]

export default function ComoTrabalhamosPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Como Trabalhamos"
          description="Nossa metodologia combina as melhores práticas do mercado com uma abordagem consultiva focada em resultados."
          breadcrumb="Metodologia"
        />

        {/* Processo */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nosso Processo
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Do primeiro contato à entrega final, cada etapa é pensada para garantir o sucesso do seu projeto.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  {/* Number */}
                  <div className="lg:col-span-2 flex items-start">
                    <span className="text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Items */}
                  <div className="lg:col-span-4">
                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-4 left-[8%] w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologias */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Metodologias e Práticas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Utilizamos as melhores práticas e tecnologias do mercado para garantir qualidade e eficiência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methodologies.map((method) => (
                <div
                  key={method.title}
                  className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ModalProvider>
  )
}
