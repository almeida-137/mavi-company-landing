"use client"

import { Bot, Workflow, Zap, Users, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { StatsCard } from "@/components/dashboard/stats-card"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const recentAutomations = [
  { id: 1, name: "Lead Capture WhatsApp", status: "active" as const, executions: 234, lastRun: "2 min atras" },
  { id: 2, name: "Onboarding Sequence", status: "active" as const, executions: 89, lastRun: "15 min atras" },
  { id: 3, name: "Payment Follow-up", status: "paused" as const, executions: 45, lastRun: "1 hora atras" },
  { id: 4, name: "Support Ticket Router", status: "error" as const, executions: 12, lastRun: "3 horas atras" },
]

const recentAgents = [
  { id: 1, name: "Atendente Virtual", model: "GPT-4", status: "active" as const, messages: 1234 },
  { id: 2, name: "Qualificador de Leads", model: "GPT-4", status: "active" as const, messages: 567 },
  { id: 3, name: "Suporte Tecnico", model: "GPT-3.5", status: "paused" as const, messages: 89 },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Dashboard"
        description="Visao geral do seu workspace"
      />

      <div className="p-6 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Automacoes Ativas"
            value={12}
            change={{ value: 8, label: "este mes" }}
            icon={Workflow}
            variant="success"
          />
          <StatsCard
            title="Agentes de IA"
            value={5}
            change={{ value: 2, label: "novos" }}
            icon={Bot}
            variant="default"
          />
          <StatsCard
            title="Execucoes Hoje"
            value="1.2k"
            change={{ value: 15, label: "vs ontem" }}
            icon={Zap}
            variant="success"
          />
          <StatsCard
            title="Leads Capturados"
            value={347}
            change={{ value: 23, label: "esta semana" }}
            icon={Users}
            variant="success"
          />
        </div>

        {/* Alerts */}
        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium">1 automacao com erro</p>
                <p className="text-sm text-muted-foreground">
                  Support Ticket Router parou de funcionar. Verifique a conexao com o webhook.
                </p>
              </div>
              <Button variant="outline" size="sm" className="shrink-0 bg-transparent">
                Ver detalhes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Automations */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Automacoes Recentes</CardTitle>
              <Link href="/dashboard/automations">
                <Button variant="ghost" size="sm" className="text-primary">
                  Ver todas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAutomations.map((automation) => (
                <div
                  key={automation.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Workflow className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{automation.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {automation.executions} execucoes | {automation.lastRun}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={automation.status} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Agents */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Agentes de IA</CardTitle>
              <Link href="/dashboard/agents">
                <Button variant="ghost" size="sm" className="text-primary">
                  Ver todos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                      <Bot className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {agent.model} | {agent.messages} mensagens
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={agent.status} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Acoes Rapidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dashboard/agents/new">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-primary/5 bg-transparent">
                  <Bot className="h-6 w-6 text-primary" />
                  <span>Criar Agente de IA</span>
                </Button>
              </Link>
              <Link href="/dashboard/automations/new">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-primary/5 bg-transparent">
                  <Workflow className="h-6 w-6 text-primary" />
                  <span>Nova Automacao</span>
                </Button>
              </Link>
              <Link href="/dashboard/integrations">
                <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-primary/5 bg-transparent">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span>Conectar Integracao</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
