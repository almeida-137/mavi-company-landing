import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Target, Eye, Lightbulb, Users, Rocket, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre a Mavi Company | Automação, IA e Desenvolvimento",
  description: "Conheça a Mavi Company: especialistas em automação, inteligência artificial e desenvolvimento de sistemas que escalam negócios.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e metodologias para entregar as melhores soluções.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e objetivos.",
  },
  {
    icon: Rocket,
    title: "Excelência",
    description: "Comprometimento com a qualidade em cada linha de código e cada entrega.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e segurança em todos os processos e relacionamentos.",
  },
]

export default function SobrePage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Sobre a Mavi Company"
          description="Somos uma empresa de tecnologia especializada em transformar processos complexos em sistemas inteligentes e automatizados."
          breadcrumb="Institucional"
        />

        {/* Quem Somos */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Quem Somos
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A <span className="text-primary font-semibold">Mavi Company</span> nasceu da necessidade de empresas que buscam mais do que soluções genéricas. Somos especialistas em criar sistemas sob medida que realmente funcionam e escalam junto com o seu negócio.
                  </p>
                  <p>
                    Nossa equipe é formada por desenvolvedores, arquitetos de sistemas e especialistas em IA que compartilham a mesma visão: tecnologia deve simplificar, não complicar.
                  </p>
                  <p>
                    Combinamos expertise técnica com uma abordagem consultiva, garantindo que cada projeto entregue não apenas atenda, mas supere as expectativas dos nossos clientes.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "50+", label: "Projetos Entregues" },
                      { number: "30+", label: "Clientes Ativos" },
                      { number: "99%", label: "Satisfação" },
                      { number: "24/7", label: "Suporte" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar a forma como empresas operam, entregando soluções tecnológicas que automatizam processos, reduzem custos e impulsionam o crescimento sustentável.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em automação e desenvolvimento inteligente no Brasil, reconhecida pela excelência técnica e pelo impacto real nos resultados dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam cada decisão e cada linha de código que escrevemos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
