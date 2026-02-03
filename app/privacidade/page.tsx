import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Política de Privacidade | Mavi Company",
  description: "Conheça a Política de Privacidade da Mavi Company e saiba como tratamos seus dados pessoais.",
}

export default function PrivacidadePage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Política de Privacidade"
          description="Última atualização: Janeiro de 2025"
          breadcrumb="Legal"
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="space-y-8 text-muted-foreground">
                
                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">1. Introdução</h2>
                  <p className="leading-relaxed">
                    A <strong className="text-primary">Mavi Company</strong> tem o compromisso de proteger a privacidade e os dados pessoais de seus clientes, parceiros e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">2. Dados que Coletamos</h2>
                  <p className="mb-4 leading-relaxed">Podemos coletar os seguintes tipos de dados:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="text-foreground">Dados de identificação:</strong> nome, e-mail, telefone, empresa.</li>
                    <li><strong className="text-foreground">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas.</li>
                    <li><strong className="text-foreground">Dados de comunicação:</strong> mensagens enviadas através de formulários de contato.</li>
                    <li><strong className="text-foreground">Dados profissionais:</strong> currículo, portfólio e LinkedIn (para candidatos).</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">3. Como Usamos seus Dados</h2>
                  <p className="mb-4 leading-relaxed">Utilizamos seus dados para:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Responder solicitações de contato e propostas comerciais.</li>
                    <li>Processar candidaturas a vagas de emprego.</li>
                    <li>Melhorar nossos serviços e experiência do usuário.</li>
                    <li>Enviar comunicações relevantes (mediante consentimento).</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
                  <p className="leading-relaxed">
                    A Mavi Company não vende ou aluga seus dados pessoais. Podemos compartilhar dados apenas com:
                  </p>
                  <ul className="space-y-2 list-disc list-inside mt-4">
                    <li>Prestadores de serviços essenciais para nossa operação.</li>
                    <li>Autoridades legais, quando exigido por lei.</li>
                    <li>Parceiros de negócio, mediante seu consentimento expresso.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
                  <p className="leading-relaxed">
                    Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição, incluindo criptografia, controles de acesso e monitoramento contínuo.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">6. Seus Direitos</h2>
                  <p className="mb-4 leading-relaxed">De acordo com a LGPD, você tem direito a:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Acessar seus dados pessoais.</li>
                    <li>Corrigir dados incompletos ou desatualizados.</li>
                    <li>Solicitar a exclusão de seus dados.</li>
                    <li>Revogar consentimentos previamente concedidos.</li>
                    <li>Solicitar a portabilidade dos dados.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">7. Cookies</h2>
                  <p className="leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">8. Contato</h2>
                  <p className="leading-relaxed">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail:{" "}
                    <a href="mailto:privacidade@mavicompany.com.br" className="text-primary hover:underline">
                      privacidade@mavicompany.com.br
                    </a>
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
                  <h2 className="text-xl font-bold text-foreground mb-4">9. Alterações nesta Política</h2>
                  <p className="leading-relaxed">
                    Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. Alterações significativas serão comunicadas através de nossos canais oficiais.
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
