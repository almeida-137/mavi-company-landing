"use client"

import React from "react"

import { useState } from "react"
import { Plug, MessageCircle, CreditCard, ShoppingCart, Webhook, Settings, ExternalLink, CheckCircle, XCircle, RefreshCw, Loader2 } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface Integration {
  id: string
  name: string
  description: string
  icon: React.ElementType
  category: string
  status: "connected" | "disconnected"
  lastSync?: string
  color: string
}

const integrations: Integration[] = [
  {
    id: "whatsapp",
    name: "WhatsApp API",
    description: "Envie e receba mensagens via WhatsApp Business",
    icon: MessageCircle,
    category: "Comunicacao",
    status: "connected",
    lastSync: "5 min atras",
    color: "bg-green-500",
  },
  {
    id: "hotmart",
    name: "Hotmart",
    description: "Sincronize vendas e clientes da Hotmart",
    icon: ShoppingCart,
    category: "Pagamentos",
    status: "connected",
    lastSync: "2 horas atras",
    color: "bg-orange-500",
  },
  {
    id: "kiwify",
    name: "Kiwify",
    description: "Integre vendas e assinaturas da Kiwify",
    icon: ShoppingCart,
    category: "Pagamentos",
    status: "disconnected",
    color: "bg-purple-500",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Processe pagamentos e assinaturas",
    icon: CreditCard,
    category: "Pagamentos",
    status: "disconnected",
    color: "bg-blue-500",
  },
  {
    id: "mercadopago",
    name: "Mercado Pago",
    description: "Receba pagamentos via Mercado Pago",
    icon: CreditCard,
    category: "Pagamentos",
    status: "disconnected",
    color: "bg-cyan-500",
  },
  {
    id: "webhook",
    name: "Webhooks Genericos",
    description: "Receba dados de qualquer plataforma",
    icon: Webhook,
    category: "Avancado",
    status: "connected",
    lastSync: "Tempo real",
    color: "bg-gray-500",
  },
]

const categories = ["Todos", "Comunicacao", "Pagamentos", "Avancado"]

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [connectingId, setConnectingId] = useState<string | null>(null)
  const [testingId, setTestingId] = useState<string | null>(null)
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)
  const [configOpen, setConfigOpen] = useState(false)

  const filteredIntegrations = integrations.filter((integration) => {
    return selectedCategory === "Todos" || integration.category === selectedCategory
  })

  const handleConnect = async (id: string) => {
    setConnectingId(id)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setConnectingId(null)
  }

  const handleTest = async (id: string) => {
    setTestingId(id)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setTestingId(null)
  }

  const connectedCount = integrations.filter(i => i.status === "connected").length

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Integracoes"
        description="Conecte plataformas externas ao MaviControl"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Plug className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total de Integracoes</p>
                  <p className="text-2xl font-bold">{integrations.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conectadas</p>
                  <p className="text-2xl font-bold">{connectedCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-muted border border-border">
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Disponiveis</p>
                  <p className="text-2xl font-bold">{integrations.length - connectedCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                selectedCategory === category 
                  ? "bg-primary hover:bg-primary/90" 
                  : "bg-transparent"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIntegrations.map((integration) => (
            <Card key={integration.id} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-3 rounded-lg", integration.color + "/10", "border", integration.color.replace("bg-", "border-") + "/20")}>
                      <integration.icon className={cn("h-5 w-5", integration.color.replace("bg-", "text-"))} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{integration.name}</h3>
                      <p className="text-xs text-muted-foreground">{integration.category}</p>
                    </div>
                  </div>
                  <StatusBadge status={integration.status} />
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>

                {integration.status === "connected" && integration.lastSync && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Ultima sincronizacao: {integration.lastSync}
                  </p>
                )}

                <div className="flex gap-2">
                  {integration.status === "connected" ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => handleTest(integration.id)}
                        disabled={testingId === integration.id}
                      >
                        {testingId === integration.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Testar
                          </>
                        )}
                      </Button>
                      <Dialog open={configOpen && selectedIntegration?.id === integration.id} onOpenChange={setConfigOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedIntegration(integration)}
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Configurar {integration.name}</DialogTitle>
                            <DialogDescription>
                              Gerencie as configuracoes desta integracao
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="api_key">API Key</Label>
                              <Input
                                id="api_key"
                                type="password"
                                value="••••••••••••••••"
                                className="bg-secondary/50 border-border"
                                readOnly
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="webhook_url">Webhook URL</Label>
                              <Input
                                id="webhook_url"
                                value="https://api.mavicontrol.com/webhook/abc123"
                                className="bg-secondary/50 border-border"
                                readOnly
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="destructive">Desconectar</Button>
                            <Button onClick={() => setConfigOpen(false)}>Fechar</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90"
                      size="sm"
                      onClick={() => handleConnect(integration.id)}
                      disabled={connectingId === integration.id}
                    >
                      {connectingId === integration.id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Conectando...
                        </>
                      ) : (
                        "Conectar"
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Webhook Documentation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Webhook className="h-5 w-5 text-primary" />
              Documentacao de Webhooks
            </CardTitle>
            <CardDescription>
              Aprenda a integrar qualquer plataforma via webhooks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-secondary/30 border border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Use nossa URL de webhook para receber dados de qualquer plataforma externa:
              </p>
              <code className="block p-3 rounded bg-background border border-border text-sm font-mono">
                POST https://api.mavicontrol.com/webhook/seu-workspace-id
              </code>
              <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                Ver documentacao completa
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
