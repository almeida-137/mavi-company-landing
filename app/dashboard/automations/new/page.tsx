"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Workflow, Zap, Check, ChevronRight } from "lucide-react"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const triggers = [
  { value: "webhook", label: "Webhook", description: "Receba dados de qualquer fonte externa" },
  { value: "new_sale", label: "Nova Venda", description: "Quando uma venda for confirmada" },
  { value: "new_message", label: "Nova Mensagem", description: "Quando receber uma mensagem" },
  { value: "payment_pending", label: "Pagamento Pendente", description: "Quando um pagamento estiver pendente" },
  { value: "schedule", label: "Agendamento", description: "Executar em horarios especificos" },
]

const agents = [
  { value: "atendente", label: "Atendente Virtual", model: "GPT-4" },
  { value: "qualificador", label: "Qualificador de Leads", model: "GPT-4" },
  { value: "suporte", label: "Suporte Tecnico", model: "GPT-3.5" },
  { value: "cobrador", label: "Cobrador Amigavel", model: "GPT-4" },
]

const actions = [
  { value: "send_whatsapp", label: "Enviar WhatsApp", description: "Enviar mensagem via WhatsApp" },
  { value: "send_crm", label: "Enviar para CRM", description: "Criar ou atualizar registro no CRM" },
  { value: "create_ticket", label: "Criar Ticket", description: "Abrir ticket de suporte" },
  { value: "send_email", label: "Enviar Email", description: "Enviar email automatico" },
  { value: "webhook_out", label: "Chamar Webhook", description: "Enviar dados para URL externa" },
]

const steps = [
  { id: 1, title: "Informacoes", description: "Nome e descricao" },
  { id: 2, title: "Trigger", description: "O que inicia" },
  { id: 3, title: "Agente IA", description: "Quem processa" },
  { id: 4, title: "Acao Final", description: "O que acontece" },
  { id: 5, title: "Revisar", description: "Confirmar" },
]

export default function NewAutomationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    trigger: "",
    agent: "",
    action: "",
    webhookUrl: "",
    isActive: true,
  })

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    router.push("/dashboard/automations")
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.name.length > 0
      case 2: return formData.trigger.length > 0
      case 3: return formData.agent.length > 0
      case 4: return formData.action.length > 0
      default: return true
    }
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Nova Automacao"
        description="Configure uma nova automacao passo a passo"
      />

      <div className="p-6 max-w-4xl">
        <Link
          href="/dashboard/automations"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para automacoes
        </Link>

        {/* Steps Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                      currentStep > step.id
                        ? "bg-primary border-primary text-primary-foreground"
                        : currentStep === step.id
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    )}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="mt-2 text-center hidden sm:block">
                    <p className={cn(
                      "text-sm font-medium",
                      currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-12 sm:w-24 h-0.5 mx-2",
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="mb-6">
          <CardContent className="p-6">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Informacoes Basicas</h3>
                  <p className="text-muted-foreground">
                    Defina um nome e descricao para sua automacao
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome da Automacao</Label>
                    <Input
                      id="name"
                      placeholder="Ex: Lead Capture WhatsApp"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descricao (opcional)</Label>
                    <Input
                      id="description"
                      placeholder="Ex: Captura leads do WhatsApp e envia para o CRM"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Trigger */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Selecione o Trigger</h3>
                  <p className="text-muted-foreground">
                    O que vai iniciar esta automacao?
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {triggers.map((trigger) => (
                    <div
                      key={trigger.value}
                      onClick={() => setFormData({ ...formData, trigger: trigger.value })}
                      className={cn(
                        "p-4 rounded-lg border cursor-pointer transition-all",
                        formData.trigger === trigger.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{trigger.label}</p>
                          <p className="text-sm text-muted-foreground">{trigger.description}</p>
                        </div>
                        {formData.trigger === trigger.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Agent */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Selecione o Agente de IA</h3>
                  <p className="text-muted-foreground">
                    Qual agente vai processar os dados?
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agents.map((agent) => (
                    <div
                      key={agent.value}
                      onClick={() => setFormData({ ...formData, agent: agent.value })}
                      className={cn(
                        "p-4 rounded-lg border cursor-pointer transition-all",
                        formData.agent === agent.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{agent.label}</p>
                          <p className="text-sm text-muted-foreground">{agent.model}</p>
                        </div>
                        {formData.agent === agent.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Action */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Selecione a Acao Final</h3>
                  <p className="text-muted-foreground">
                    O que acontece apos o processamento?
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {actions.map((action) => (
                    <div
                      key={action.value}
                      onClick={() => setFormData({ ...formData, action: action.value })}
                      className={cn(
                        "p-4 rounded-lg border cursor-pointer transition-all",
                        formData.action === action.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{action.label}</p>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                        {formData.action === action.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Revisar Automacao</h3>
                  <p className="text-muted-foreground">
                    Confira os detalhes antes de criar
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                  <h4 className="font-semibold mb-4">{formData.name || "Sem nome"}</h4>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm">
                      {triggers.find(t => t.value === formData.trigger)?.label || "Trigger"}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm">
                      {agents.find(a => a.value === formData.agent)?.label || "Agente"}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 text-sm">
                      {actions.find(a => a.value === formData.action)?.label || "Acao"}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    A automacao sera criada e ativada automaticamente. Voce pode pausar ou editar a qualquer momento.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Voltar
          </Button>
          
          {currentStep < 5 ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-primary hover:bg-primary/90"
            >
              Proximo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Criando...
                </>
              ) : (
                "Criar Automacao"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
