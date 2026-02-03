import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Plug, Link2, Database, CreditCard, MessageSquare, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Integrações & APIs | Mavi Company",
  description: "Conecte sistemas, elimine retrabalho e centralize dados integrando ERPs, CRMs, gateways de pagamento e mais.",
}

const features = [
  {
    icon: Link2,
    title: "APIs Personalizadas",
    description: "Desenvolvimento de APIs sob medida para conectar seus sistemas internos e externos.",
  },
  {
    icon: Database,
    title: "Sincronização de Dados",
    description: "Mantenha dados consistentes entre múltiplos sistemas em tempo real ou em lotes.",
  },
  {
    icon: CreditCard,
    title: "Gateways de Pagamento",
    description: "Integração com Stripe, PagSeguro, Mercado Pago, PicPay e outros meios de pagamento.",
  },
  {
    icon: MessageSquare,
    title: "Plataformas de Comunicação",
    description: "Conecte WhatsApp, Telegram, e-mail, SMS e outras plataformas aos seus sistemas.",
  },
]

const integrations = [
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "SAP", category: "ERP" },
  { name: "TOTVS", category: "ERP" },
  { name: "Omie", category: "ERP" },
  { name: "Stripe", category: "Pagamento" },
  { name: "PagSeguro", category: "Pagamento" },
  { name: "Mercado Pago", category: "Pagamento" },
  { name: "WhatsApp", category: "Comunicação" },
  { name: "Slack", category: "Comunicação" },
  { name: "Discord", category: "Comunicação" },
  { name: "Shopify", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Google Sheets", category: "Produtividade" },
  { name: "Notion", category: "Produtividade" },
]

const benefits = [
  "Eliminação de entrada manual de dados",
  "Dados sempre atualizados e consistentes",
  "Visão unificada do negócio",
  "Redução de erros e retrabalho",
  "Agilidade nas operações",
  "Melhor experiência do cliente",
]

export default function IntegracoesPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Integrações & APIs"
          description="Conecte todos os seus sistemas em um ecossistema unificado e eficiente."
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

        {/* Integrations */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Integramos com as Principais Plataformas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Já temos experiência com centenas de integrações. Se não estiver na lista, provavelmente também conseguimos.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {integrations.map((integration) => (
                <span
                  key={integration.name}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-foreground"
                >
                  <span className="font-medium">{integration.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">({integration.category})</span>
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
                  Benefícios das Integrações
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sistemas isolados geram retrabalho, erros e perda de tempo. 
                  Integrações bem feitas transformam sua operação.
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
                    <Plug className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Integração Segura</h3>
                    <p className="text-sm text-muted-foreground">Dados protegidos</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Todas as integrações são desenvolvidas seguindo as melhores práticas de 
                  segurança, com criptografia, autenticação robusta e logs completos.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Mapear Integrações
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
