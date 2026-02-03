import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Termos de Uso | Mavi Company",
  description: "Leia os Termos de Uso da Mavi Company e entenda as condições para utilização de nossos serviços.",
}

export default function TermosPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Termos de Uso"
          description="Última atualização: Janeiro de 2025"
          breadcrumb="Legal"
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-muted-foreground">

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                  <p className="leading-relaxed">
                    Ao acessar e utilizar os serviços da <strong className="text-primary">Mavi Company</strong>, você declara que leu, entendeu e concorda com estes Termos de Uso. Caso não concorde com alguma disposição, solicitamos que não utilize nossos serviços.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">2. Descrição dos Serviços</h2>
                  <p className="mb-4 leading-relaxed">A Mavi Company oferece serviços de:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Desenvolvimento de sistemas e plataformas web.</li>
                    <li>Automação de processos com inteligência artificial.</li>
                    <li>Criação de chatbots e agentes inteligentes.</li>
                    <li>Integrações entre sistemas e APIs.</li>
                    <li>Consultoria técnica e arquitetura de software.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">3. Obrigações do Usuário</h2>
                  <p className="mb-4 leading-relaxed">Ao utilizar nossos serviços, você se compromete a:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Fornecer informações verdadeiras e atualizadas.</li>
                    <li>Não utilizar os serviços para fins ilegais ou não autorizados.</li>
                    <li>Respeitar os direitos de propriedade intelectual.</li>
                    <li>Manter a confidencialidade de informações sensíveis.</li>
                    <li>Não realizar engenharia reversa ou tentativas de acesso não autorizado.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">4. Propriedade Intelectual</h2>
                  <p className="leading-relaxed">
                    Todo o conteúdo, código-fonte, marcas, logotipos e materiais disponibilizados pela Mavi Company são de propriedade exclusiva da empresa ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">5. Projetos e Entregas</h2>
                  <p className="mb-4 leading-relaxed">Para projetos contratados:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Os direitos sobre o código desenvolvido serão definidos em contrato específico.</li>
                    <li>Prazos e entregas seguem o cronograma acordado entre as partes.</li>
                    <li>Alterações de escopo podem impactar prazos e valores.</li>
                    <li>O cliente é responsável por fornecer informações e acessos necessários.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">6. Pagamentos</h2>
                  <p className="leading-relaxed">
                    As condições de pagamento são definidas em proposta comercial ou contrato específico. O não pagamento nas datas acordadas pode resultar na suspensão dos serviços e aplicação de multa e juros previstos em contrato.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">7. Limitação de Responsabilidade</h2>
                  <p className="leading-relaxed">
                    A Mavi Company não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso ou impossibilidade de uso de nossos serviços. Nossa responsabilidade está limitada ao valor efetivamente pago pelo cliente nos últimos 12 meses.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">8. Confidencialidade</h2>
                  <p className="leading-relaxed">
                    Ambas as partes se comprometem a manter em sigilo todas as informações confidenciais compartilhadas durante a prestação de serviços, pelo período de vigência do contrato e por 5 anos após seu término.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">9. Rescisão</h2>
                  <p className="leading-relaxed">
                    Qualquer das partes pode rescindir a prestação de serviços mediante aviso prévio conforme definido em contrato. A rescisão não exime as partes de suas obrigações pendentes, incluindo pagamentos e entregas acordadas.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">10. Foro e Legislação</h2>
                  <p className="leading-relaxed">
                    Estes Termos de Uso são regidos pelas leis brasileiras. Eventuais disputas serão dirimidas no foro da comarca de São Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">11. Contato</h2>
                  <p className="leading-relaxed">
                    Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail:{" "}
                    <a href="mailto:contato@mavicompany.com.br" className="text-primary hover:underline">
                      contato@mavicompany.com.br
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ModalProvider>
  )
}
