import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { ArrowUpRight, Bot, Code2, Plug, BarChart3, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cases e Projetos | Mavi Company",
  description: "Conheça os projetos e cases de sucesso da Mavi Company em automação, IA e desenvolvimento de sistemas.",
}

const cases = [
  {
    id: 1,
    icon: Bot,
    category: "Automação com IA",
    title: "Chatbot Inteligente para Atendimento",
    description: "Desenvolvimento de um chatbot com IA para atendimento automatizado, reduzindo o tempo de resposta em 80% e aumentando a satisfação do cliente.",
    results: [
      { label: "Redução no tempo de resposta", value: "80%" },
      { label: "Atendimentos automatizados", value: "3.500/mês" },
      { label: "Satisfação do cliente", value: "94%" },
    ],
    tags: ["IA", "Chatbot", "Automação", "WhatsApp"],
  },
  {
    id: 2,
    icon: Code2,
    category: "Desenvolvimento",
    title: "Plataforma SaaS para Gestão",
    description: "Sistema completo de gestão empresarial com dashboards em tempo real, controle financeiro e automação de processos internos.",
    results: [
      { label: "Horas economizadas/mês", value: "120h" },
      { label: "Processos automatizados", value: "15" },
      { label: "Aumento de produtividade", value: "45%" },
    ],
    tags: ["SaaS", "Dashboard", "Gestão", "React"],
  },
  {
    id: 3,
    icon: Code2,
    category: "Desenvolvimento",
    title: "Landing Page para Móveis Planejados Alto Padrão - Paulete Armários",
    description: "Landing page otimizada para um cliente de móveis planejados, com foco em conversões e experiência do usuário.",
    results: [
      { label: "Conversões aumentadas", value: "42%" },
      { label: "Tempo médio de permanência", value: "3m 45s" },
      { label: "Taxa de rejeição reduzida", value: "28%" },
    ],
    tags: ["LandingPage", "Móveis", "Planejados", "Alto Padrão", "React"],
    url: "https://paulete-armarios.vercel.app/",
  },
  {
    id: 4,
    icon: Code2,
    category: "Desenvolvimento",
    title: "Landing Page para Vidraria de Alto Padrão - Vitralle",
    description: "Landing page otimizada para um cliente de vidraria de alto padrão, com foco em conversões e experiência do usuário.",
    results: [
      { label: "Conversões aumentadas", value: "38%" },
      { label: "Tempo médio de permanência", value: "4m 12s" },
      { label: "Taxa de rejeição reduzida", value: "25%" },
    ],
    tags: ["LandingPage", "Vidraria", "Alto Padrão", "React"],
    url: "https://vitralle-design.vercel.app/",
  },
  {
    id: 5,
    icon: Code2,
    category: "Desenvolvimento",
    title: "Landing Page para Móveis Planejados Alto Padrão - Terra Ambientes",
    description: "Landing page otimizada para um cliente de móveis planejados de alto padrão, com foco em conversões e experiência do usuário.",
    results: [
      { label: "Conversões aumentadas", value: "33%" },
      { label: "Tempo médio de permanência", value: "3m 20s" },
      { label: "Taxa de rejeição reduzida", value: "16%" },
    ],
    tags: ["LandingPage", "Móveis", "Planejados", "Alto Padrão", "React"],
    url: "https://terra-ambientes.vercel.app/",
  },
  {
    id: 6,
    icon: Plug,
    category: "Integrações",
    title: "Integração Multi-plataforma",
    description: "Integração completa entre CRM, ERP, WhatsApp e plataformas de pagamento, centralizando dados e eliminando retrabalho.",
    results: [
      { label: "Sistemas integrados", value: "8" },
      { label: "Redução de erros manuais", value: "95%" },
      { label: "ROI em 6 meses", value: "280%" },
    ],
    tags: ["API", "CRM", "ERP", "Pagamentos"],
  },
  {
    id: 7,
    icon: BarChart3,
    category: "Analytics & IA",
    title: "Sistema de Classificação de Leads",
    description: "IA para classificação automática de leads, priorizando oportunidades com maior potencial de conversão.",
    results: [
      { label: "Aumento na conversão", value: "35%" },
      { label: "Leads qualificados/dia", value: "500+" },
      { label: "Precisão da classificação", value: "92%" },
    ],
    tags: ["IA", "Machine Learning", "Leads", "CRM"],
  },
  {
    id: 8,
    icon: Code2,
    category: "Desenvolvimento",
    title: "Gestão Financeira para Fotográfos - Gestor Fotográfo",
    description: "Sistema de gestão financeira especializado para fotógrafos, com controle de receitas, despesas e relatórios personalizados.",
    results: [
      { label: "Aumento na produtividade", value: "40%" },
      { label: "Melhoria na gestão financeira", value: "85%" },
      { label: "Redução de tempo de entrega de albuns", value: "35%" },
    ],
    tags: ["SaaS", "Dashboard", "Gestão", "Leads", "CRM", "B2C"],
    url: "https://gestor-fotografo.vercel.app/",
  },
  {
    id: 9,
    icon: Code2,
    category: "Desenvolvimento",
    title: "DocSafe - Sistema de Gestão de Documentos para Segurança do Trabalho",
    description: "Sistema de gestão de documentos para empresas de segurança do trabalho, com controle de acesso, auditoria e relatórios personalizados.",
    results: [
      { label: "Aumento na produtividade", value: "40%" },
      { label: "Melhoria na gestão de documentos", value: "85%" },
      { label: "Redução de tempo de entrega de documentos", value: "35%" },
    ],
    tags: ["SaaS", "Dashboard", "Gestão", "SST", "B2B"],
    url: "https://docsafe.app.br/",
  },
  {
    id: 10,
    icon: Code2,
    category: "Desenvolvimento",
    title: "CondoApp - Sistema de Gestão para Síndicos, Condomínios e Apartamentos",
    description: "Sistema de gestão para síndicos, condomínios e apartamentos, com controle de acesso, auditoria e relatórios personalizados.",
    results: [
      { label: "Melhoria no controle de alertas e avisos", value: "65%" },
      { label: "Melhoria na gestão de condomínios", value: "55%" },
      { label: "Melhoria na gestão de visitantes e encomendas", value: "45%" },
    ],
    tags: ["SaaS", "Dashboard", "Gestão", "Síndicos", "Condomínios", "B2B"],
    url: "https://condo-app-alpha.vercel.app/",
  },
]

export default function CasesPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Cases e Projetos"
          description="Conheça alguns dos projetos que desenvolvemos e os resultados alcançados pelos nossos clientes."
          breadcrumb="Portfólio"
        />

        {/* Cases Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <caseItem.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">
                          {caseItem.category}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{caseItem.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {caseItem.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-secondary/30 border border-border/30">
                    {caseItem.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <p className="text-xl md:text-2xl font-bold text-primary">{result.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-border/50 bg-secondary/30 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link to visit site */}
                  {caseItem.url && (
                    <a
                      href={caseItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Visitar site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quer ser o próximo case de sucesso?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Conte-nos sobre o seu projeto e descubra como podemos transformar seus processos em sistemas inteligentes.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Fale com a gente
                  <ArrowUpRight className="ml-2 h-5 w-5" />
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
