import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Target, RefreshCw, CreditCard, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "E-commerce & Funis Inteligentes | Mavi Company",
  description: "Lojas virtuais, funis de vendas otimizados e integrações com meios de pagamento para maximizar conversões.",
}

const features = [
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "E-commerces completos com catálogo de produtos, carrinho, checkout e painel administrativo.",
  },
  {
    icon: Target,
    title: "Funis de Vendas",
    description: "Funis otimizados para captura de leads, upsell, downsell e maximização do ticket médio.",
  },
  {
    icon: RefreshCw,
    title: "Recuperação de Carrinho",
    description: "Automações para recuperar vendas abandonadas via e-mail, WhatsApp e retargeting.",
  },
  {
    icon: CreditCard,
    title: "Checkout Otimizado",
    description: "Checkout rápido, seguro e com múltiplas opções de pagamento para maximizar conversões.",
  },
]

const integrations = [
  "Stripe",
  "Mercado Pago",
  "PagSeguro",
  "Pix",
  "Boleto",
  "Cartões de Crédito",
  "Correios",
  "Melhor Envio",
  "Frenet",
  "RD Station",
  "Mailchimp",
  "WhatsApp",
]

const benefits = [
  "Aumento de até 40% na conversão",
  "Recuperação de carrinhos abandonados",
  "Checkout em menos de 1 minuto",
  "Relatórios de vendas em tempo real",
  "Integração com marketplaces",
  "SEO otimizado para e-commerce",
]

export default function EcommercePage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="E-commerce & Funis Inteligentes"
          description="Venda mais com lojas virtuais e funis de vendas desenvolvidos para converter."
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
                Integrações para E-commerce
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pagamentos, frete, marketing e tudo mais que seu e-commerce precisa.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {integrations.map((integration) => (
                <span
                  key={integration}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-foreground font-medium"
                >
                  {integration}
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
                  Resultados que Entregamos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nossos e-commerces e funis são desenvolvidos com foco em performance 
                  e conversão, não apenas em aparência.
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
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Foco em Conversão</h3>
                    <p className="text-sm text-muted-foreground">Cada clique conta</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Utilizamos as melhores práticas de UX, copywriting e otimização 
                  para garantir que cada visitante tenha a melhor experiência de compra.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Criar meu E-commerce
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
