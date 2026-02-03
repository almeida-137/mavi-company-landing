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
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@mavicompany.com.br",
    href: "mailto:contato@mavicompany.com.br",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (99) 99150-6190",
    href: "https://wa.me/5599991506190",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mavicompanybr",
    href: "https://instagram.com/mavicompanybr",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Brasil",
    href: null,
  },
]

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      }
    } catch {
      console.error("Error submitting form")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
        
        <PageHeader 
          title="Entre em Contato"
          description="Vamos conversar sobre como podemos ajudar a transformar seu negócio com tecnologia."
          breadcrumb="Contato"
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Escolha o canal de sua preferência ou preencha o formulário ao lado. 
                  Responderemos o mais breve possível.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick CTA */}
                <div className="mt-12 p-6 rounded-2xl border border-primary/30 bg-primary/5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Prefere uma conversa rápida?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fale direto com nosso time pelo WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/5599991506190"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                      Abrir WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Recebemos sua mensagem e entraremos em contato em breve.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Enviar nova mensagem
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
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nome da empresa"
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Conte-nos sobre seu projeto ou necessidade..."
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
                          Enviar mensagem
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você concorda com nossa{" "}
                      <a href="/privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>.
                    </p>
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
