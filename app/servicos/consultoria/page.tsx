import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Lightbulb, FileSearch, Code, GraduationCap, Target, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Consultoria Técnica & Arquitetura | Mavi Company",
  description: "Assessoria especializada em arquitetura de sistemas, escolha de tecnologias e planejamento técnico.",
}

const features = [
  {
    icon: FileSearch,
    title: "Arquitetura de Software",
    description: "Desenho de arquitetura escalável, definição de tecnologias e padrões de desenvolvimento.",
  },
  {
    icon: Code,
    title: "Code Review",
    description: "Análise detalhada do código existente com recomendações de melhorias e correções.",
  },
  {
    icon: GraduationCap,
    title: "Mentoria Técnica",
    description: "Acompanhamento e orientação para times de desenvolvimento internos.",
  },
  {
    icon: Target,
    title: "Planejamento de Projeto",
    description: "Definição de escopo, cronograma, milestones e estratégia de desenvolvimento.",
  },
]

const services = [
  {
    title: "Diagnóstico Técnico",
    description: "Análise completa da infraestrutura, código e processos de desenvolvimento atuais.",
  },
  {
    title: "Definição de Stack",
    description: "Escolha das melhores tecnologias considerando o contexto e objetivos do projeto.",
  },
  {
    title: "Documentação Técnica",
    description: "Criação de documentação de arquitetura, APIs e processos de desenvolvimento.",
  },
  {
    title: "Treinamento de Equipe",
    description: "Capacitação em novas tecnologias, metodologias e boas práticas de desenvolvimento.",
  },
  {
    title: "Auditoria de Segurança",
    description: "Identificação de vulnerabilidades e implementação de melhorias de segurança.",
  },
  {
    title: "Otimização de Performance",
    description: "Análise e melhorias de performance em aplicações existentes.",
  },
]

const benefits = [
  "Decisões técnicas mais assertivas",
  "Redução de retrabalho futuro",
  "Time mais produtivo e alinhado",
  "Arquitetura preparada para escalar",
  "Menor custo de manutenção",
  "Visão externa especializada",
]

export default function ConsultoriaPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Consultoria Técnica & Arquitetura"
          description="Orientação especializada para tomar as melhores decisões técnicas no seu projeto."
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

        {/* Services */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nossos Serviços de Consultoria
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos diferentes modalidades de consultoria para atender às suas necessidades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
                  Benefícios da Consultoria
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Uma boa consultoria técnica evita erros caros e acelera o desenvolvimento 
                  do seu projeto com decisões mais assertivas.
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
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Expertise Comprovada</h3>
                    <p className="text-sm text-muted-foreground">Anos de experiência</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossa equipe já passou por dezenas de projetos de diferentes tamanhos e 
                  complexidades. Essa experiência está disponível para ajudar seu time.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Agendar Consultoria
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
