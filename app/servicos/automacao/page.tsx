import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Layers, Workflow, Bell, RefreshCw, FileSpreadsheet, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Automação de Processos | Mavi Company",
  description: "Automatize tarefas repetitivas, workflows e processos internos para aumentar produtividade e reduzir erros.",
}

const features = [
  {
    icon: Workflow,
    title: "Workflows Automatizados",
    description: "Crie fluxos de trabalho que executam tarefas automaticamente baseados em gatilhos e condições.",
  },
  {
    icon: RefreshCw,
    title: "RPA (Automação Robótica)",
    description: "Robôs que executam tarefas repetitivas em sistemas legados e planilhas sem necessidade de APIs.",
  },
  {
    icon: Bell,
    title: "Triggers Inteligentes",
    description: "Gatilhos baseados em eventos, horários ou condições específicas para iniciar automações.",
  },
  {
    icon: FileSpreadsheet,
    title: "Processamento de Dados",
    description: "Extração, transformação e carregamento de dados entre sistemas de forma automática.",
  },
]

const automations = [
  {
    title: "Onboarding de Clientes",
    description: "Automatize todo o processo de boas-vindas, envio de documentos e configuração inicial.",
  },
  {
    title: "Geração de Relatórios",
    description: "Relatórios automáticos gerados e enviados por e-mail em periodicidade definida.",
  },
  {
    title: "Sincronização de Dados",
    description: "Mantenha dados atualizados entre múltiplos sistemas automaticamente.",
  },
  {
    title: "Notificações Inteligentes",
    description: "Alertas automáticos para equipes baseados em eventos ou métricas críticas.",
  },
  {
    title: "Processos de Aprovação",
    description: "Fluxos de aprovação com notificações, lembretes e escalação automática.",
  },
  {
    title: "Backup e Arquivamento",
    description: "Rotinas automáticas de backup e organização de arquivos e documentos.",
  },
]

const benefits = [
  "Redução de até 80% em tarefas manuais",
  "Eliminação de erros humanos",
  "Processos executados 24/7",
  "Escalabilidade sem aumentar equipe",
  "Rastreabilidade completa de ações",
  "ROI mensurável e rápido",
]

export default function AutomacaoPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Automação de Processos"
          description="Elimine tarefas repetitivas e libere sua equipe para focar no que realmente importa."
          breadcrumb="Serviços"
        />

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                O que Automatizamos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Praticamente qualquer processo repetitivo pode ser automatizado. Veja alguns exemplos:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {automations.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Benefícios da Automação
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A automação de processos não é sobre substituir pessoas, é sobre liberar 
                  potencial humano para atividades estratégicas e criativas.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Automação Inteligente</h3>
                    <p className="text-sm text-muted-foreground">Processos que evoluem</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossas automações combinam regras de negócio com inteligência artificial 
                  para tomar decisões e se adaptar a diferentes cenários automaticamente.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Mapear meus processos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ModalProvider>
  )
}
