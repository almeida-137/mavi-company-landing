"use client"

import { useState } from "react"
import Link from "next/link"
import { Workflow, Plus, Search, MoreVertical, Play, Pause, Trash2, Edit, TestTube, Zap } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const automations = [
  {
    id: "1",
    name: "Lead Capture WhatsApp",
    trigger: "Webhook",
    agent: "Qualificador de Leads",
    action: "Enviar para CRM",
    status: "active" as const,
    executions: 234,
    lastRun: "2 min atras",
    successRate: 98,
  },
  {
    id: "2",
    name: "Onboarding Sequence",
    trigger: "Nova venda",
    agent: "Atendente Virtual",
    action: "Enviar WhatsApp",
    status: "active" as const,
    executions: 89,
    lastRun: "15 min atras",
    successRate: 95,
  },
  {
    id: "3",
    name: "Payment Follow-up",
    trigger: "Pagamento pendente",
    agent: "Cobrador Amigavel",
    action: "Enviar lembrete",
    status: "paused" as const,
    executions: 45,
    lastRun: "1 hora atras",
    successRate: 87,
  },
  {
    id: "4",
    name: "Support Ticket Router",
    trigger: "Nova mensagem",
    agent: "Suporte Tecnico",
    action: "Criar ticket",
    status: "error" as const,
    executions: 12,
    lastRun: "3 horas atras",
    successRate: 45,
  },
  {
    id: "5",
    name: "Feedback Collector",
    trigger: "Pos-venda (7 dias)",
    agent: "Analista de Feedback",
    action: "Enviar pesquisa",
    status: "active" as const,
    executions: 156,
    lastRun: "30 min atras",
    successRate: 92,
  },
]

export default function AutomationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards")

  const filteredAutomations = automations.filter((automation) => {
    const matchesSearch = automation.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || automation.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Automacoes"
        description="Gerencie suas automacoes e fluxos de trabalho"
      />

      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-1 gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar automacoes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 bg-card border-border">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Ativos</SelectItem>
                <SelectItem value="paused">Pausados</SelectItem>
                <SelectItem value="error">Com erro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link href="/dashboard/automations/new">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Nova Automacao
            </Button>
          </Link>
        </div>

        {/* Automations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredAutomations.map((automation) => (
            <Card key={automation.id} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Workflow className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{automation.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Ultima execucao: {automation.lastRun}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={automation.status} />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TestTube className="mr-2 h-4 w-4" />
                          Testar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {automation.status === "active" ? (
                          <DropdownMenuItem>
                            <Pause className="mr-2 h-4 w-4" />
                            Pausar
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <Play className="mr-2 h-4 w-4" />
                            Ativar
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Flow Steps */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-secondary/30 text-sm">
                  <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {automation.trigger}
                  </span>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                    {automation.agent}
                  </span>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                  <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                    {automation.action}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Execucoes:</span>{" "}
                      <span className="font-medium">{automation.executions}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Taxa de sucesso:</span>{" "}
                      <span className={`font-medium ${automation.successRate >= 90 ? "text-green-500" : automation.successRate >= 70 ? "text-yellow-500" : "text-red-500"}`}>
                        {automation.successRate}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAutomations.length === 0 && (
          <div className="text-center py-12">
            <Workflow className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhuma automacao encontrada</h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar os filtros ou crie uma nova automacao
            </p>
            <Link href="/dashboard/automations/new">
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Criar primeira automacao
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
