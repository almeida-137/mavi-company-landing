"use client"

import { useState } from "react"
import { BarChart3, TrendingUp, TrendingDown, Zap, MessageSquare, Users, Bot, Calendar } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

// Mock data for charts
const executionData = [
  { day: "Seg", executions: 234, success: 220, error: 14 },
  { day: "Ter", executions: 312, success: 298, error: 14 },
  { day: "Qua", executions: 287, success: 275, error: 12 },
  { day: "Qui", executions: 356, success: 340, error: 16 },
  { day: "Sex", executions: 423, success: 410, error: 13 },
  { day: "Sab", executions: 189, success: 182, error: 7 },
  { day: "Dom", executions: 145, success: 140, error: 5 },
]

const automationStats = [
  { name: "Lead Capture WhatsApp", executions: 1234, successRate: 98, trend: 12 },
  { name: "Onboarding Sequence", executions: 567, successRate: 95, trend: 8 },
  { name: "Payment Follow-up", executions: 345, successRate: 87, trend: -3 },
  { name: "Support Ticket Router", executions: 234, successRate: 92, trend: 5 },
  { name: "Feedback Collector", executions: 189, successRate: 99, trend: 15 },
]

const agentStats = [
  { name: "Atendente Virtual", messages: 4523, tokens: 125000, avgResponse: "1.2s" },
  { name: "Qualificador de Leads", messages: 2341, tokens: 89000, avgResponse: "0.9s" },
  { name: "Suporte Tecnico", messages: 1234, tokens: 45000, avgResponse: "1.5s" },
  { name: "Cobrador Amigavel", messages: 567, tokens: 23000, avgResponse: "1.1s" },
]

const periods = [
  { value: "7d", label: "Ultimos 7 dias" },
  { value: "30d", label: "Ultimos 30 dias" },
  { value: "90d", label: "Ultimos 90 dias" },
]

export default function MetricsPage() {
  const [period, setPeriod] = useState("7d")
  const maxExecutions = Math.max(...executionData.map(d => d.executions))

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Metricas & Analytics"
        description="Acompanhe o desempenho do seu workspace"
      />

      <div className="p-6 space-y-6">
        {/* Period Selector */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Visao Geral</h2>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-48 bg-card border-border">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {periods.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total de Execucoes"
            value="12.4k"
            change={{ value: 23, label: "vs periodo anterior" }}
            icon={Zap}
            variant="success"
          />
          <StatsCard
            title="Mensagens de IA"
            value="8.6k"
            change={{ value: 15, label: "vs periodo anterior" }}
            icon={MessageSquare}
            variant="default"
          />
          <StatsCard
            title="Leads Gerados"
            value="1.2k"
            change={{ value: 32, label: "vs periodo anterior" }}
            icon={Users}
            variant="success"
          />
          <StatsCard
            title="Tokens Consumidos"
            value="282k"
            change={{ value: -5, label: "vs periodo anterior" }}
            icon={Bot}
            variant="warning"
          />
        </div>

        {/* Executions Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Execucoes por Dia</CardTitle>
            <CardDescription>Visao geral das execucoes nos ultimos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {executionData.map((data, index) => (
                <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col gap-1" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-red-500/20 rounded-t"
                      style={{ height: `${(data.error / maxExecutions) * 100}%` }}
                    />
                    <div 
                      className="w-full bg-primary rounded-b"
                      style={{ height: `${(data.success / maxExecutions) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.day}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-primary" />
                <span className="text-sm text-muted-foreground">Sucesso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500/20" />
                <span className="text-sm text-muted-foreground">Erro</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Automations Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance por Automacao</CardTitle>
              <CardDescription>Execucoes e taxa de sucesso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automationStats.map((automation) => (
                  <div key={automation.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{automation.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {automation.executions.toLocaleString()} execucoes
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={cn(
                          "text-sm font-medium",
                          automation.successRate >= 95 ? "text-green-500" : 
                          automation.successRate >= 85 ? "text-yellow-500" : "text-red-500"
                        )}>
                          {automation.successRate}%
                        </p>
                        <p className="text-xs text-muted-foreground">sucesso</p>
                      </div>
                      <div className={cn(
                        "flex items-center gap-1 text-xs",
                        automation.trend >= 0 ? "text-green-500" : "text-red-500"
                      )}>
                        {automation.trend >= 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {Math.abs(automation.trend)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Agents Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance por Agente de IA</CardTitle>
              <CardDescription>Uso de mensagens e tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agentStats.map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {agent.messages.toLocaleString()} mensagens
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {(agent.tokens / 1000).toFixed(0)}k
                        </p>
                        <p className="text-xs text-muted-foreground">tokens</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">
                          {agent.avgResponse}
                        </p>
                        <p className="text-xs text-muted-foreground">resp. media</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Resumo de Consumo</CardTitle>
            <CardDescription>Uso de recursos do seu plano</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Execucoes</span>
                  <span className="text-sm font-medium">12.4k / 50k</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '24.8%' }} />
                </div>
                <p className="text-xs text-muted-foreground">24.8% do limite</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tokens de IA</span>
                  <span className="text-sm font-medium">282k / 500k</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '56.4%' }} />
                </div>
                <p className="text-xs text-muted-foreground">56.4% do limite</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Armazenamento</span>
                  <span className="text-sm font-medium">2.3GB / 10GB</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '23%' }} />
                </div>
                <p className="text-xs text-muted-foreground">23% do limite</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
