"use client"

import { useState } from "react"
import { ScrollText, Search, Filter, Eye, RefreshCw, ChevronDown, ChevronRight, CheckCircle, XCircle, Clock, Loader2 } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface LogEntry {
  id: string
  automationName: string
  status: "success" | "error" | "pending"
  timestamp: string
  duration: string
  input: Record<string, unknown>
  output: Record<string, unknown>
  error?: string
}

const logs: LogEntry[] = [
  {
    id: "log-001",
    automationName: "Lead Capture WhatsApp",
    status: "success",
    timestamp: "2024-01-20 14:32:15",
    duration: "1.2s",
    input: { phone: "+5511999999999", name: "João Silva", message: "Oi, quero saber mais" },
    output: { leadId: "lead-123", qualificationScore: 85, nextAction: "send_welcome" },
  },
  {
    id: "log-002",
    automationName: "Onboarding Sequence",
    status: "success",
    timestamp: "2024-01-20 14:30:45",
    duration: "0.8s",
    input: { userId: "user-456", email: "maria@email.com" },
    output: { emailSent: true, templateUsed: "welcome_v2" },
  },
  {
    id: "log-003",
    automationName: "Support Ticket Router",
    status: "error",
    timestamp: "2024-01-20 14:28:30",
    duration: "5.2s",
    input: { ticketId: "ticket-789", message: "Não consigo acessar minha conta" },
    output: {},
    error: "Connection timeout: Unable to reach CRM API after 5000ms",
  },
  {
    id: "log-004",
    automationName: "Payment Follow-up",
    status: "success",
    timestamp: "2024-01-20 14:25:00",
    duration: "2.1s",
    input: { paymentId: "pay-321", amount: 297, daysOverdue: 3 },
    output: { messageSent: true, channel: "whatsapp", reminderCount: 2 },
  },
  {
    id: "log-005",
    automationName: "Lead Capture WhatsApp",
    status: "pending",
    timestamp: "2024-01-20 14:23:10",
    duration: "-",
    input: { phone: "+5511888888888", name: "Carlos", message: "Preço?" },
    output: {},
  },
  {
    id: "log-006",
    automationName: "Feedback Collector",
    status: "success",
    timestamp: "2024-01-20 14:20:00",
    duration: "0.9s",
    input: { customerId: "cust-654", purchaseDate: "2024-01-13" },
    output: { surveyLink: "https://...", validUntil: "2024-01-27" },
  },
]

const automations = ["Todas", "Lead Capture WhatsApp", "Onboarding Sequence", "Support Ticket Router", "Payment Follow-up", "Feedback Collector"]

export default function LogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [automationFilter, setAutomationFilter] = useState<string>("Todas")
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [replayingId, setReplayingId] = useState<string | null>(null)

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.automationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || log.status === statusFilter
    const matchesAutomation = automationFilter === "Todas" || log.automationName === automationFilter
    return matchesSearch && matchesStatus && matchesAutomation
  })

  const handleReplay = async (id: string) => {
    setReplayingId(id)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setReplayingId(null)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500/10 border-green-500/20"
      case "error":
        return "bg-red-500/10 border-red-500/20"
      case "pending":
        return "bg-yellow-500/10 border-yellow-500/20"
      default:
        return "bg-muted border-border"
    }
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Logs & Execucoes"
        description="Historico detalhado de todas as execucoes"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <ScrollText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Hoje</p>
                  <p className="text-2xl font-bold">1,247</p>
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
                  <p className="text-sm text-muted-foreground">Sucesso</p>
                  <p className="text-2xl font-bold">1,189</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <XCircle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Erros</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <Clock className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pendentes</p>
                  <p className="text-2xl font-bold">35</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por ID ou automacao..."
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
              <SelectItem value="success">Sucesso</SelectItem>
              <SelectItem value="error">Erro</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
            </SelectContent>
          </Select>
          <Select value={automationFilter} onValueChange={setAutomationFilter}>
            <SelectTrigger className="w-56 bg-card border-border">
              <SelectValue placeholder="Automacao" />
            </SelectTrigger>
            <SelectContent>
              {automations.map((automation) => (
                <SelectItem key={automation} value={automation}>
                  {automation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Logs List */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-4 hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn("p-2 rounded-lg border", getStatusBg(log.status))}>
                        {getStatusIcon(log.status)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{log.automationName}</p>
                          <span className="text-xs text-muted-foreground font-mono">{log.id}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{log.timestamp}</span>
                          <span>Duracao: {log.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedLog(log)
                          setDetailsOpen(true)
                        }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Detalhes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReplay(log.id)}
                        disabled={replayingId === log.id || log.status === "pending"}
                      >
                        {replayingId === log.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Replay
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Details Dialog */}
        <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Detalhes da Execucao</DialogTitle>
              <DialogDescription>
                {selectedLog?.id} - {selectedLog?.automationName}
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="input" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="input">Input</TabsTrigger>
                <TabsTrigger value="output">Output</TabsTrigger>
                <TabsTrigger value="error">Erro</TabsTrigger>
              </TabsList>
              <TabsContent value="input" className="mt-4">
                <pre className="p-4 rounded-lg bg-secondary/50 border border-border overflow-auto text-sm font-mono">
                  {JSON.stringify(selectedLog?.input, null, 2)}
                </pre>
              </TabsContent>
              <TabsContent value="output" className="mt-4">
                <pre className="p-4 rounded-lg bg-secondary/50 border border-border overflow-auto text-sm font-mono">
                  {selectedLog?.output && Object.keys(selectedLog.output).length > 0
                    ? JSON.stringify(selectedLog.output, null, 2)
                    : "Nenhum output disponivel"}
                </pre>
              </TabsContent>
              <TabsContent value="error" className="mt-4">
                {selectedLog?.error ? (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 font-mono text-sm">{selectedLog.error}</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">Nenhum erro registrado</p>
                )}
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
