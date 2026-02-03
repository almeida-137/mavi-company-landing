"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code2, Rocket, Users, Heart, Send, CheckCircle, Sparkles, Clock, MapPin } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Crescimento Acelerado",
    description: "Projetos desafiadores que impulsionam seu desenvolvimento profissional.",
  },
  {
    icon: Users,
    title: "Time Colaborativo",
    description: "Ambiente de trabalho com profissionais talentosos e colaborativos.",
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Trabalho remoto e horários flexíveis para equilibrar vida pessoal e profissional.",
  },
  {
    icon: Heart,
    title: "Cultura Saudável",
    description: "Valorizamos a saúde mental e o bem-estar de toda a equipe.",
  },
]

const positions = [
  {
    title: "Desenvolvedor(a) Full Stack",
    type: "Remoto",
    level: "Pleno/Sênior",
    description: "Buscamos desenvolvedores com experiência em React, Node.js e bancos de dados para atuar em projetos de automação e sistemas web.",
  },
  {
    title: "Especialista em IA/ML",
    type: "Remoto",
    level: "Pleno/Sênior",
    description: "Procuramos profissionais com experiência em machine learning, NLP e desenvolvimento de agentes inteligentes.",
  },
  {
    title: "DevOps Engineer",
    type: "Remoto",
    level: "Pleno",
    description: "Responsável por CI/CD, infraestrutura cloud e automação de deploys em projetos diversos.",
  },
]

export default function TrabalheConoscoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    portfolio: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Trabalhe Conosco"
          description="Faça parte de um time que está transformando empresas através da tecnologia."
          breadcrumb="Carreiras"
        />

        {/* Why Join Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Por que fazer parte da Mavi?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos um ambiente onde você pode crescer, inovar e fazer a diferença.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vagas Abertas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Confira as oportunidades disponíveis e encontre a que mais combina com você.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Code2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{position.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{position.type}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{position.level}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{position.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Não encontrou a vaga ideal? Envie seu currículo mesmo assim!
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Banco de talentos sempre aberto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Candidate-se
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Candidatura Enviada!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Recebemos seus dados e analisaremos seu perfil com carinho. Entraremos em contato caso haja fit com alguma posição.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ name: "", email: "", phone: "", position: "", linkedin: "", portfolio: "", message: "" })
                      }}
                    >
                      Enviar nova candidatura
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome"
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu@email.com"
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(00) 00000-0000"
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Área de interesse *</Label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) => setFormData({ ...formData, position: value })}
                          required
                        >
                          <SelectTrigger className="bg-secondary/30 border-border/50">
                            <SelectValue placeholder="Selecione uma área" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullstack">Desenvolvimento Full Stack</SelectItem>
                            <SelectItem value="frontend">Desenvolvimento Frontend</SelectItem>
                            <SelectItem value="backend">Desenvolvimento Backend</SelectItem>
                            <SelectItem value="ia">IA / Machine Learning</SelectItem>
                            <SelectItem value="devops">DevOps</SelectItem>
                            <SelectItem value="design">Design UI/UX</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          placeholder="linkedin.com/in/seuperfil"
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio / GitHub</Label>
                        <Input
                          id="portfolio"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                          placeholder="github.com/seuperfil"
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Conte um pouco sobre você</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Fale sobre sua experiência, projetos e o que te motiva..."
                        className="bg-secondary/30 border-border/50 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar candidatura
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ModalProvider>
  )
}
