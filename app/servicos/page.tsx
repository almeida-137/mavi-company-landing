import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Bot, 
  Plug, 
  BarChart3, 
  ShoppingCart, 
  Lightbulb,
  ArrowRight,
  Layers
} from "lucide-react"

export const metadata: Metadata = {
  title: "Serviços | Mavi Company",
  description: "Conheça os serviços da Mavi Company: Desenvolvimento Web, Automação de Processos, Agentes de IA, Integrações, Plataformas SaaS e Consultoria Técnica.",
}

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web & Sistemas",
    description: "Plataformas web robustas, dashboards interativos, sistemas internos e backends escaláveis desenvolvidos com as melhores tecnologias do mercado.",
    href: "/servicos/desenvolvimento",
    features: ["Aplicações Web", "APIs RESTful", "Dashboards", "Sistemas Internos"],
  },
  {
    icon: Bot,
    title: "Agentes de IA & Chatbots",
    description: "Chatbots inteligentes, assistentes virtuais e agentes de IA que automatizam atendimento, qualificam leads e processam informações 24/7.",
    href: "/servicos/agentes-ia",
    features: ["Chatbots WhatsApp", "Assistentes Virtuais", "IA Conversacional", "Automação de Atendimento"],
  },
  {
    icon: Layers,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas, workflows e processos internos para aumentar a produtividade e reduzir erros humanos.",
    href: "/servicos/automacao",
    features: ["Workflows Automatizados", "RPA", "Triggers Inteligentes", "Notificações"],
  },
  {
    icon: Plug,
    title: "Integrações & APIs",
    description: "Conecte sistemas, elimine retrabalho e centralize dados integrando ERPs, CRMs, gateways de pagamento e plataformas digitais.",
    href: "/servicos/integracoes",
    features: ["APIs Personalizadas", "Webhooks", "CRM/ERP", "Pagamentos"],
  },
  {
    icon: BarChart3,
    title: "Plataformas SaaS & Dashboards",
    description: "Desenvolvimento de plataformas SaaS completas com dashboards analíticos, gestão de usuários e infraestrutura escalável.",
    href: "/servicos/saas",
    features: ["SaaS Multi-tenant", "Analytics", "Gestão de Usuários", "Billing"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Funis Inteligentes",
    description: "Lojas virtuais, funis de vendas otimizados e integrações com meios de pagamento para maximizar suas conversões.",
    href: "/servicos/ecommerce",
    features: ["Lojas Virtuais", "Checkout Otimizado", "Funis de Vendas", "Recuperação de Carrinho"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica & Arquitetura",
    description: "Assessoria especializada em arquitetura de sistemas, escolha de tecnologias e planejamento técnico para seu projeto.",
    href: "/servicos/consultoria",
    features: ["Arquitetura de Software", "Code Review", "Mentoria Técnica", "Planejamento"],
  },
]

export default function ServicosPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Nossos Serviços"
          description="Soluções completas em desenvolvimento, automação e inteligência artificial para transformar e escalar seu negócio."
          breadcrumb="Serviços"
        />

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link 
                  key={service.title}
                  href={service.href}
                  className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs rounded-full border border-border/50 bg-secondary/30 text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MaviControl CTA */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                    <span className="text-primary text-xs md:text-sm font-medium tracking-wider">
                      PLATAFORMA INTERNA
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    MaviControl
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    Nossa plataforma proprietária para gestão de automações, monitoramento de agentes de IA e 
                    acompanhamento de métricas em tempo real. Todos os nossos clientes têm acesso ao MaviControl 
                    para acompanhar o desempenho de suas soluções.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contato">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Conhecer o MaviControl
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button size="lg" variant="outline" className="bg-transparent">
                        Acessar Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Não sabe por onde começar?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Solicite um diagnóstico gratuito e nossa equipe vai analisar suas necessidades 
                para recomendar a melhor solução.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Solicitar Diagnóstico
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ModalProvider>
  )
}
