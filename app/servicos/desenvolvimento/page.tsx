import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Code2, Database, Server, Globe, Smartphone, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Desenvolvimento Web & Sistemas | Mavi Company",
  description: "Desenvolvimento de plataformas web, dashboards, sistemas internos e backends escaláveis com as melhores tecnologias.",
}

const features = [
  {
    icon: Globe,
    title: "Aplicações Web",
    description: "Plataformas completas com interfaces modernas, responsivas e focadas na experiência do usuário.",
  },
  {
    icon: Server,
    title: "APIs & Backends",
    description: "APIs RESTful e GraphQL robustas, escaláveis e bem documentadas para suas aplicações.",
  },
  {
    icon: Database,
    title: "Bancos de Dados",
    description: "Modelagem e implementação de bancos relacionais e NoSQL otimizados para performance.",
  },
  {
    icon: Smartphone,
    title: "Apps Responsivos",
    description: "Aplicações que funcionam perfeitamente em qualquer dispositivo, do desktop ao mobile.",
  },
]

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", 
  "MongoDB", "Redis", "AWS", "Vercel", "Docker", "GraphQL"
]

const benefits = [
  "Código limpo e bem documentado",
  "Arquitetura escalável e modular",
  "Testes automatizados",
  "CI/CD configurado",
  "Monitoramento de performance",
  "Suporte técnico contínuo",
]

export default function DesenvolvimentoPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Desenvolvimento Web & Sistemas"
          description="Transformamos suas ideias em plataformas digitais robustas, escaláveis e com excelente experiência de uso."
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

        {/* Technologies */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Tecnologias que Utilizamos
                </h2>
                <p className="text-muted-foreground">
                  Trabalhamos com as tecnologias mais modernas e consolidadas do mercado.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Por que escolher a Mavi?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nosso time entrega muito mais do que código. Entregamos soluções completas com qualidade 
                  de software enterprise e suporte contínuo para garantir o sucesso do seu projeto.
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
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Desenvolvimento Sob Medida</h3>
                    <p className="text-sm text-muted-foreground">Cada projeto é único</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Não usamos templates genéricos. Cada sistema é desenvolvido especificamente para 
                  atender às necessidades do seu negócio, garantindo performance e escalabilidade.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Solicitar Orçamento
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
