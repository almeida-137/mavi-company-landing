"use client"

import { useState } from "react"
import { Settings, Building2, Users, CreditCard, Shield, Bell, Loader2, Plus, Trash2, Edit } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
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

const teamMembers = [
  { id: "1", name: "Joao Silva", email: "joao@mavicompany.com", role: "Admin", status: "active" },
  { id: "2", name: "Maria Santos", email: "maria@mavicompany.com", role: "Gestor", status: "active" },
  { id: "3", name: "Carlos Lima", email: "carlos@mavicompany.com", role: "Operador", status: "active" },
  { id: "4", name: "Ana Costa", email: "ana@mavicompany.com", role: "Operador", status: "pending" },
]

const plans = [
  { name: "Starter", price: "R$ 197", features: ["5 Agentes", "10k Execucoes", "100k Tokens", "2 Usuarios"] },
  { name: "Pro", price: "R$ 497", features: ["15 Agentes", "50k Execucoes", "500k Tokens", "10 Usuarios"], current: true },
  { name: "Business", price: "R$ 997", features: ["Ilimitado", "Ilimitado", "1M Tokens", "Ilimitado"] },
]

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [workspaceData, setWorkspaceData] = useState({
    name: "MaviCompany",
    slug: "mavicompany",
    email: "contato@mavicompany.com",
    phone: "+55 11 99999-9999",
  })
  const [notifications, setNotifications] = useState({
    emailErrors: true,
    emailWeekly: true,
    webhookAlerts: false,
    limitWarnings: true,
  })

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Configuracoes"
        description="Gerencie seu workspace e preferencias"
      />

      <div className="p-6">
        <Tabs defaultValue="workspace" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="workspace" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Building2 className="mr-2 h-4 w-4" />
              Workspace
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="mr-2 h-4 w-4" />
              Equipe
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <CreditCard className="mr-2 h-4 w-4" />
              Faturamento
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Bell className="mr-2 h-4 w-4" />
              Notificacoes
            </TabsTrigger>
          </TabsList>

          {/* Workspace Tab */}
          <TabsContent value="workspace" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dados do Workspace</CardTitle>
                <CardDescription>Informacoes basicas da sua empresa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome da Empresa</Label>
                    <Input
                      id="name"
                      value={workspaceData.name}
                      onChange={(e) => setWorkspaceData({ ...workspaceData, name: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={workspaceData.slug}
                      onChange={(e) => setWorkspaceData({ ...workspaceData, slug: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email de Contato</Label>
                    <Input
                      id="email"
                      type="email"
                      value={workspaceData.email}
                      onChange={(e) => setWorkspaceData({ ...workspaceData, email: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={workspaceData.phone}
                      onChange={(e) => setWorkspaceData({ ...workspaceData, phone: e.target.value })}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleSave} disabled={isSaving} className="bg-primary hover:bg-primary/90">
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Salvando...
                      </>
                    ) : (
                      "Salvar alteracoes"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limites de Uso</CardTitle>
                <CardDescription>Limites do seu plano atual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <p className="text-sm text-muted-foreground">Agentes</p>
                    <p className="text-2xl font-bold">5 / 15</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <p className="text-sm text-muted-foreground">Execucoes/mes</p>
                    <p className="text-2xl font-bold">12.4k / 50k</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <p className="text-sm text-muted-foreground">Tokens/mes</p>
                    <p className="text-2xl font-bold">282k / 500k</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <p className="text-sm text-muted-foreground">Usuarios</p>
                    <p className="text-2xl font-bold">4 / 10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400">Zona de Perigo</CardTitle>
                <CardDescription>Acoes irreversiveis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                  <div>
                    <p className="font-medium">Excluir Workspace</p>
                    <p className="text-sm text-muted-foreground">
                      Todos os dados, agentes e automacoes serao permanentemente excluidos.
                    </p>
                  </div>
                  <Button variant="destructive">Excluir</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Membros da Equipe</CardTitle>
                  <CardDescription>Gerencie quem tem acesso ao workspace</CardDescription>
                </div>
                <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="mr-2 h-4 w-4" />
                      Convidar
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Convidar Membro</DialogTitle>
                      <DialogDescription>
                        Envie um convite por email para adicionar um novo membro
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="invite_email">Email</Label>
                        <Input
                          id="invite_email"
                          type="email"
                          placeholder="email@exemplo.com"
                          className="bg-secondary/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invite_role">Papel</Label>
                        <Select defaultValue="operador">
                          <SelectTrigger className="bg-secondary/50 border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="gestor">Gestor</SelectItem>
                            <SelectItem value="operador">Operador</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setInviteOpen(false)}>Cancelar</Button>
                      <Button className="bg-primary hover:bg-primary/90">Enviar Convite</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Membro</TableHead>
                      <TableHead>Papel</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Acoes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-sm font-medium text-primary">
                                {member.name.split(" ").map(n => n[0]).join("")}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={member.role === "Admin" ? "default" : "secondary"}>
                            {member.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={member.status === "active" ? "default" : "outline"} className={cn(
                            member.status === "active" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          )}>
                            {member.status === "active" ? "Ativo" : "Pendente"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Permissoes por Papel</CardTitle>
                <CardDescription>Entenda o que cada papel pode fazer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <h4 className="font-semibold mb-2">Admin</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Acesso total ao workspace</li>
                      <li>Gerenciar equipe e permissoes</li>
                      <li>Configurar faturamento</li>
                      <li>Excluir workspace</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <h4 className="font-semibold mb-2">Gestor</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Criar e editar agentes</li>
                      <li>Gerenciar automacoes</li>
                      <li>Configurar integracoes</li>
                      <li>Visualizar metricas</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <h4 className="font-semibold mb-2">Operador</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Visualizar agentes e automacoes</li>
                      <li>Monitorar execucoes</li>
                      <li>Acessar logs</li>
                      <li>Testar automacoes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano Atual</CardTitle>
                <CardDescription>Gerencie sua assinatura</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={cn(
                        "p-6 rounded-lg border transition-all",
                        plan.current
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {plan.current && (
                        <Badge className="mb-4 bg-primary">Plano Atual</Badge>
                      )}
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-3xl font-bold mt-2">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mes</span></p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {!plan.current && (
                        <Button className="w-full mt-4 bg-transparent" variant="outline">
                          {plan.name === "Starter" ? "Fazer downgrade" : "Fazer upgrade"}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metodo de Pagamento</CardTitle>
                <CardDescription>Cartao cadastrado para cobrancas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visa terminando em 4242</p>
                      <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline">Alterar</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historico de Faturas</CardTitle>
                <CardDescription>Ultimas cobrancas realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Descricao</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>20/01/2024</TableCell>
                      <TableCell>Plano Pro - Janeiro 2024</TableCell>
                      <TableCell>R$ 497,00</TableCell>
                      <TableCell><Badge className="bg-green-500/10 text-green-500 border-green-500/20">Pago</Badge></TableCell>
                      <TableCell><Button variant="ghost" size="sm">Download</Button></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>20/12/2023</TableCell>
                      <TableCell>Plano Pro - Dezembro 2023</TableCell>
                      <TableCell>R$ 497,00</TableCell>
                      <TableCell><Badge className="bg-green-500/10 text-green-500 border-green-500/20">Pago</Badge></TableCell>
                      <TableCell><Button variant="ghost" size="sm">Download</Button></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>20/11/2023</TableCell>
                      <TableCell>Plano Pro - Novembro 2023</TableCell>
                      <TableCell>R$ 497,00</TableCell>
                      <TableCell><Badge className="bg-green-500/10 text-green-500 border-green-500/20">Pago</Badge></TableCell>
                      <TableCell><Button variant="ghost" size="sm">Download</Button></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de Notificacao</CardTitle>
                <CardDescription>Escolha como deseja receber alertas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                  <div>
                    <p className="font-medium">Alertas de Erro</p>
                    <p className="text-sm text-muted-foreground">
                      Receba um email quando uma automacao falhar
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailErrors}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailErrors: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                  <div>
                    <p className="font-medium">Relatorio Semanal</p>
                    <p className="text-sm text-muted-foreground">
                      Receba um resumo semanal de metricas por email
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailWeekly}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailWeekly: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                  <div>
                    <p className="font-medium">Alertas via Webhook</p>
                    <p className="text-sm text-muted-foreground">
                      Envie alertas para um webhook externo (Slack, Discord, etc)
                    </p>
                  </div>
                  <Switch
                    checked={notifications.webhookAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, webhookAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                  <div>
                    <p className="font-medium">Avisos de Limite</p>
                    <p className="text-sm text-muted-foreground">
                      Receba alertas quando estiver proximo do limite do plano
                    </p>
                  </div>
                  <Switch
                    checked={notifications.limitWarnings}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, limitWarnings: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {notifications.webhookAlerts && (
              <Card>
                <CardHeader>
                  <CardTitle>Configuracao de Webhook</CardTitle>
                  <CardDescription>Configure a URL para receber alertas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="webhook_url">URL do Webhook</Label>
                    <Input
                      id="webhook_url"
                      placeholder="https://hooks.slack.com/services/..."
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Testar Webhook</Button>
                    <Button className="bg-primary hover:bg-primary/90">Salvar</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
