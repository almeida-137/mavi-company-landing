"use client"

import { useState } from "react"
import Link from "next/link"
import { Bot, Plus, Search, MoreVertical, Play, Pause, Trash2, Edit, Eye, MessageSquare } from "lucide-react"
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

const agents = [
  {
    id: "1",
    name: "Atendente Virtual",
    objective: "Atender clientes e responder duvidas frequentes",
    model: "GPT-4",
    status: "active" as const,
    messages: 1234,
    tokensUsed: 45000,
    createdAt: "15/01/2024",
  },
  {
    id: "2",
    name: "Qualificador de Leads",
    objective: "Qualificar leads e identificar oportunidades de venda",
    model: "GPT-4",
    status: "active" as const,
    messages: 567,
    tokensUsed: 23000,
    createdAt: "10/01/2024",
  },
  {
    id: "3",
    name: "Suporte Tecnico",
    objective: "Ajudar usuarios com problemas tecnicos e troubleshooting",
    model: "GPT-3.5",
    status: "paused" as const,
    messages: 89,
    tokensUsed: 5600,
    createdAt: "05/01/2024",
  },
  {
    id: "4",
    name: "Agendador de Reunioes",
    objective: "Agendar reunioes e gerenciar calendario de vendas",
    model: "GPT-4",
    status: "active" as const,
    messages: 234,
    tokensUsed: 12000,
    createdAt: "01/01/2024",
  },
  {
    id: "5",
    name: "Analista de Feedback",
    objective: "Coletar e analisar feedback de clientes",
    model: "GPT-3.5",
    status: "error" as const,
    messages: 12,
    tokensUsed: 800,
    createdAt: "28/12/2023",
  },
]

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || agent.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Agentes de IA"
        description="Gerencie seus agentes de inteligencia artificial"
      />

      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-1 gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar agentes..."
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
          <Link href="/dashboard/agents/new">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Novo Agente
            </Button>
          </Link>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{agent.name}</h3>
                      <p className="text-sm text-muted-foreground">{agent.model}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Visualizar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Testar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {agent.status === "active" ? (
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

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {agent.objective}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{agent.messages.toLocaleString()} msgs</span>
                    <span>{(agent.tokensUsed / 1000).toFixed(1)}k tokens</span>
                  </div>
                  <StatusBadge status={agent.status} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum agente encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar os filtros ou crie um novo agente
            </p>
            <Link href="/dashboard/agents/new">
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Criar primeiro agente
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
