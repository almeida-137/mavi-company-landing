"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  variant?: "specialist" | "diagnostic"
}

export function ContactModal({ open, onOpenChange, variant = "specialist" }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const title = variant === "specialist" 
    ? "Fale com um especialista" 
    : "Solicitar diagnóstico técnico"
  
  const description = variant === "specialist"
    ? "Preencha o formulário abaixo e entraremos em contato em ate 24 horas."
    : "Solicite uma análise completa da sua operação e descubra oportunidades de automação."

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      variant: variant,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar formulário')
      }

      setIsSuccess(true)
      
      // Reset form and close modal after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        onOpenChange(false)
        // Reset form
        e.currentTarget.reset()
      }, 3000)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário. Tente novamente.')
      console.error('Erro ao enviar formulário:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleOpenChange(newOpen: boolean) {
    if (!newOpen) {
      setIsSuccess(false)
      setError(null)
    }
    onOpenChange(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border/50 backdrop-blur-xl">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Mensagem enviada!</h3>
            <p className="text-muted-foreground">
              Entraremos em contato em breve.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">{title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>
            
            {error && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">WhatsApp</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nome da empresa"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  {variant === "diagnostic" ? "Descreva sua operacao" : "Mensagem (opcional)"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={variant === "diagnostic" 
                    ? "Conte um pouco sobre sua empresa e os desafios que enfrenta..."
                    : "Como podemos ajudar?"
                  }
                  rows={3}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    {variant === "specialist" ? "Enviar mensagem" : "Solicitar diagnostico"}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}