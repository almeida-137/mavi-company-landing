import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, CreditCard, Shield, Gauge, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Plataformas SaaS & Dashboards | Mavi Company",
  description: "Desenvolvimento de plataformas SaaS completas com dashboards analíticos, gestão de usuários e infraestrutura escalável.",
}

const features = [
  {
    icon: Users,
    title: "Multi-tenancy",
    description: "Arquitetura que suporta múltiplos clientes isolados em uma única instância da aplicação.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Analíticos",
    description: "Visualizações de dados em tempo real com gráficos interativos e relatórios customizáveis.",
  },
  {
    icon: CreditCard,
    title: "Sistema de Billing",
    description: "Gestão de assinaturas, cobrança recorrente e integração com gateways de pagamento.",
  },
  {
    icon: Shield,
    title: "Segurança Enterprise",
    description: "Autenticação robusta, controle de acesso granular e conformidade com LGPD.",
  },
]

const components = [
  "Autenticação e SSO",
  "Gestão de Usuários e Roles",
  "Dashboard Administrativo",
  "Sistema de Notificações",
  "Billing e Assinaturas",
  "API para Integrações",
  "Webhooks",
  "Logs e Auditoria",
  "White-label Support",
  "Documentação Automática",
]

const benefits = [
  "Time-to-market reduzido",
  "Arquitetura pronta para escalar",
  "Custos operacionais otimizados",
  "Fácil manutenção e evolução",
  "Métricas de negócio em tempo real",
  "Suporte técnico especializado",
]

export default function SaaSPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Plataformas SaaS & Dashboards"
          description="Transforme sua ideia em uma plataforma SaaS completa, escalável e pronta para crescer."
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

        {/* Components */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Componentes Inclusos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossas plataformas SaaS já vêm com os principais componentes que você precisa.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {components.map((component) => (
                <span
                  key={component}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-foreground font-medium"
                >
                  {component}
                </span>
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
                  Benefícios de uma Plataforma SaaS
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Uma plataforma SaaS bem construída permite que você foque no crescimento 
                  do negócio enquanto a tecnologia escala automaticamente.
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
                    <Gauge className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Performance Garantida</h3>
                    <p className="text-sm text-muted-foreground">Escalabilidade automática</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Arquitetura cloud-native com auto-scaling, CDN global e monitoramento 
                  24/7 para garantir que sua plataforma esteja sempre disponível.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Iniciar meu SaaS
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
