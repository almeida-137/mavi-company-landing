"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Bot, Sparkles } from "lucide-react"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

const aiModels = [
  { value: "gpt-4", label: "GPT-4", description: "Mais inteligente, ideal para tarefas complexas" },
  { value: "gpt-4-turbo", label: "GPT-4 Turbo", description: "Rapido e capaz, otimo custo-beneficio" },
  { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo", description: "Economico, bom para tarefas simples" },
]

const toneOptions = [
  { value: "professional", label: "Profissional" },
  { value: "friendly", label: "Amigavel" },
  { value: "formal", label: "Formal" },
  { value: "casual", label: "Casual" },
  { value: "technical", label: "Tecnico" },
]

export default function NewAgentPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    objective: "",
    prompt: "",
    model: "gpt-4",
    tone: "professional",
    temperature: [0.7],
    maxTokens: 1000,
    isActive: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    router.push("/dashboard/agents")
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Novo Agente de IA"
        description="Configure um novo agente para sua operacao"
      />

      <div className="p-6 max-w-4xl">
        <Link
          href="/dashboard/agents"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para agentes
        </Link>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Informacoes Basicas
              </CardTitle>
              <CardDescription>
                Defina o nome e objetivo do seu agente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Agente</Label>
                <Input
                  id="name"
                  placeholder="Ex: Atendente Virtual"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objective">Objetivo</Label>
                <Input
                  id="objective"
                  placeholder="Ex: Atender clientes e responder duvidas frequentes"
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  required
                  className="bg-secondary/50 border-border"
                />
                <p className="text-xs text-muted-foreground">
                  Descreva em uma frase o que este agente deve fazer
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Prompt Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Configuracao do Prompt
              </CardTitle>
              <CardDescription>
                Defina as instrucoes e comportamento do agente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt Base</Label>
                <Textarea
                  id="prompt"
                  placeholder="Voce e um assistente virtual da empresa X. Seu objetivo e..."
                  value={formData.prompt}
                  onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                  required
                  rows={8}
                  className="bg-secondary/50 border-border resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Instrucoes detalhadas para o comportamento do agente
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="model">Modelo de IA</Label>
                  <Select
                    value={formData.model}
                    onValueChange={(value) => setFormData({ ...formData, model: value })}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {aiModels.map((model) => (
                        <SelectItem key={model.value} value={model.value}>
                          <div>
                            <div className="font-medium">{model.label}</div>
                            <div className="text-xs text-muted-foreground">{model.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tom de Voz</Label>
                  <Select
                    value={formData.tone}
                    onValueChange={(value) => setFormData({ ...formData, tone: value })}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {toneOptions.map((tone) => (
                        <SelectItem key={tone.value} value={tone.value}>
                          {tone.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Configuracoes Avancadas</CardTitle>
              <CardDescription>
                Ajuste fino do comportamento do modelo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Temperatura: {formData.temperature[0]}</Label>
                  <span className="text-sm text-muted-foreground">
                    {formData.temperature[0] < 0.3 ? "Mais focado" : formData.temperature[0] > 0.7 ? "Mais criativo" : "Balanceado"}
                  </span>
                </div>
                <Slider
                  value={formData.temperature}
                  onValueChange={(value) => setFormData({ ...formData, temperature: value })}
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Controla a aleatoriedade das respostas. Valores baixos = mais preciso, valores altos = mais criativo
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxTokens">Limite de Tokens por Resposta</Label>
                <Input
                  id="maxTokens"
                  type="number"
                  value={formData.maxTokens}
                  onChange={(e) => setFormData({ ...formData, maxTokens: Number(e.target.value) })}
                  min={100}
                  max={4000}
                  className="bg-secondary/50 border-border w-40"
                />
                <p className="text-xs text-muted-foreground">
                  Maximo de tokens que o agente pode usar em cada resposta
                </p>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                <div>
                  <Label htmlFor="isActive">Ativar agente apos criar</Label>
                  <p className="text-sm text-muted-foreground">
                    O agente comecara a receber mensagens imediatamente
                  </p>
                </div>
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <Link href="/dashboard/agents">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Criando...
                </>
              ) : (
                "Criar Agente"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
