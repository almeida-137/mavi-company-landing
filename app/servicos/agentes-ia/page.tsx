import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Brain, Zap, Users, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Agentes de IA & Chatbots | Mavi Company",
  description: "Chatbots inteligentes, assistentes virtuais e agentes de IA para automatizar atendimento e processos 24/7.",
}

const features = [
  {
    icon: MessageSquare,
    title: "Chatbots WhatsApp",
    description: "Atendimento automatizado no WhatsApp com IA conversacional que entende contexto e intenções.",
  },
  {
    icon: Brain,
    title: "IA Conversacional",
    description: "Agentes que aprendem e evoluem, oferecendo respostas cada vez mais precisas e personalizadas.",
  },
  {
    icon: Users,
    title: "Qualificação de Leads",
    description: "Capture e qualifique leads automaticamente, priorizando oportunidades com maior potencial.",
  },
  {
    icon: Zap,
    title: "Automação de Atendimento",
    description: "Reduza filas e tempo de espera com atendimento inteligente disponível 24 horas por dia.",
  },
]

const useCases = [
  {
    title: "Atendimento ao Cliente",
    description: "Resolução de dúvidas, suporte técnico e direcionamento inteligente para atendentes humanos.",
  },
  {
    title: "Vendas e Pré-vendas",
    description: "Qualificação de leads, agendamento de reuniões e envio de propostas automatizadas.",
  },
  {
    title: "Cobrança e Financeiro",
    description: "Lembretes de pagamento, negociação de dívidas e segunda via de boletos.",
  },
  {
    title: "RH e Recrutamento",
    description: "Triagem de currículos, agendamento de entrevistas e onboarding de novos colaboradores.",
  },
]

const benefits = [
  "Disponibilidade 24/7 sem custo adicional",
  "Redução de até 70% nos custos de atendimento",
  "Tempo de resposta instantâneo",
  "Escalabilidade ilimitada",
  "Integração com seus sistemas",
  "Relatórios e métricas em tempo real",
]

export default function AgentesIAPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Agentes de IA & Chatbots"
          description="Automatize seu atendimento com inteligência artificial que entende, aprende e resolve."
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

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Casos de Uso
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossos agentes de IA podem ser aplicados em diversos cenários do seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
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
                  Benefícios dos Agentes de IA
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nossos chatbots e agentes de IA são projetados para escalar seu atendimento 
                  mantendo a qualidade e a personalização que seus clientes esperam.
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
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">IA Personalizada</h3>
                    <p className="text-sm text-muted-foreground">Treinada para seu negócio</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Desenvolvemos agentes de IA treinados especificamente com dados do seu negócio, 
                  garantindo respostas precisas e alinhadas com sua marca.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Solicitar Demonstração
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
