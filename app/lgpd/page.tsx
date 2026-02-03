import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Shield, Lock, Eye, FileCheck, Database, UserCheck, AlertTriangle, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "LGPD e Segurança da Informação | Mavi Company",
  description: "Saiba como a Mavi Company está em conformidade com a LGPD e nossas práticas de segurança da informação.",
}

const commitments = [
  {
    icon: Lock,
    title: "Criptografia de Dados",
    description: "Todos os dados sensíveis são criptografados em trânsito (TLS 1.3) e em repouso (AES-256).",
  },
  {
    icon: Eye,
    title: "Controle de Acesso",
    description: "Acesso aos dados é restrito e controlado pelo princípio do menor privilégio (least privilege).",
  },
  {
    icon: Database,
    title: "Backup Seguro",
    description: "Backups regulares com retenção adequada e testes periódicos de restauração.",
  },
  {
    icon: Shield,
    title: "Monitoramento 24/7",
    description: "Monitoramento contínuo de segurança com alertas em tempo real para eventos suspeitos.",
  },
  {
    icon: FileCheck,
    title: "Auditoria e Logs",
    description: "Registro completo de atividades para fins de auditoria e conformidade.",
  },
  {
    icon: UserCheck,
    title: "Treinamento",
    description: "Equipe treinada em práticas de segurança e proteção de dados pessoais.",
  },
]

const rights = [
  {
    title: "Confirmação e Acesso",
    description: "Confirmar a existência de tratamento e acessar seus dados pessoais.",
  },
  {
    title: "Correção",
    description: "Corrigir dados incompletos, inexatos ou desatualizados.",
  },
  {
    title: "Anonimização ou Bloqueio",
    description: "Anonimizar, bloquear ou eliminar dados desnecessários ou excessivos.",
  },
  {
    title: "Portabilidade",
    description: "Solicitar a portabilidade dos dados a outro fornecedor de serviço.",
  },
  {
    title: "Eliminação",
    description: "Eliminar dados pessoais tratados com base no consentimento.",
  },
  {
    title: "Informação",
    description: "Ser informado sobre entidades com as quais seus dados foram compartilhados.",
  },
  {
    title: "Revogação",
    description: "Revogar o consentimento a qualquer momento, de forma fácil e gratuita.",
  },
  {
    title: "Oposição",
    description: "Opor-se ao tratamento realizado em desacordo com a LGPD.",
  },
]

export default function LGPDPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="LGPD e Segurança da Informação"
          description="Nosso compromisso com a proteção de dados pessoais e segurança da informação."
          breadcrumb="Segurança"
        />

        {/* Intro */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Nosso Compromisso</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A Mavi Company está comprometida com a conformidade à Lei Geral de Proteção de Dados (Lei nº 13.709/2018). 
                      Adotamos as melhores práticas de segurança da informação para proteger os dados pessoais de nossos clientes, 
                      parceiros e colaboradores.
                    </p>
                  </div>
                </div>
              </div>

              {/* O que é a LGPD */}
              <div className="p-6 rounded-2xl border border-border/50 bg-card/30 mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">O que é a LGPD?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Lei Geral de Proteção de Dados Pessoais (LGPD) é a legislação brasileira que regula o tratamento 
                  de dados pessoais por pessoas físicas e jurídicas, com o objetivo de proteger os direitos fundamentais 
                  de liberdade e privacidade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A lei estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais, 
                  impondo mais proteção e penalidades para o não cumprimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Medidas de Segurança
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Implementamos controles técnicos e organizacionais robustos para proteger seus dados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {commitments.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Seus Direitos como Titular de Dados
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A LGPD garante diversos direitos aos titulares de dados pessoais. Conheça-os:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right) => (
                  <div
                    key={right.title}
                    className="p-4 rounded-xl border border-border/50 bg-card/30 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">{right.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Exercise Rights */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl border border-border/50 bg-card/30 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Como Exercer seus Direitos?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Para exercer qualquer um dos seus direitos previstos na LGPD, entre em contato com nosso 
                  Encarregado de Proteção de Dados (DPO) através do e-mail abaixo. 
                  Responderemos sua solicitação no prazo legal de 15 dias.
                </p>
                <a 
                  href="mailto:dpo@mavicompany.com.br"
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  dpo@mavicompany.com.br
                </a>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <p>
                      Podemos solicitar documentos para confirmar sua identidade antes de processar sua solicitação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/privacidade">
                  <Button variant="outline">
                    Política de Privacidade
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Fale Conosco
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
