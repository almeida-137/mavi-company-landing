"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate password reset - replace with actual logic
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSuccess(true)
    setIsLoading(false)
  }

  if (isSuccess) {
    return (
      <div className="space-y-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Email enviado!</h1>
          <p className="text-muted-foreground">
            Enviamos um link de recuperacao para <strong className="text-foreground">{email}</strong>
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Nao recebeu o email? Verifique sua caixa de spam ou tente novamente.
          </p>
          
          <Button
            variant="outline"
            onClick={() => setIsSuccess(false)}
            className="w-full h-12"
          >
            Tentar novamente
          </Button>
        </div>

        <Link
          href="/login"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o login
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Link
        href="/login"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para o login
      </Link>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Recuperar senha</h1>
        <p className="text-muted-foreground">
          Insira seu email e enviaremos um link para redefinir sua senha
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-card border-border pl-12"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar link de recuperacao"
          )}
        </Button>
      </form>
    </div>
  )
}
