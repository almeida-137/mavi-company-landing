"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface DashboardHeaderProps {
  title: string
  description?: string
  onMenuClick?: () => void
}

export function DashboardHeader({ title, description, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
      <div className="h-full flex items-center justify-between px-6 gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar..."
              className="w-64 pl-10 bg-secondary/50 border-border"
            />
          </div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold">Notificacoes</h3>
              </div>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Automacao pausada</p>
                  <p className="text-xs text-muted-foreground">
                    Lead Capture parou devido a erro de conexao
                  </p>
                  <p className="text-xs text-muted-foreground">2 min atras</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Nova integracao disponivel</p>
                  <p className="text-xs text-muted-foreground">
                    Conecte sua conta do Stripe
                  </p>
                  <p className="text-xs text-muted-foreground">1 hora atras</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Limite de uso proximo</p>
                  <p className="text-xs text-muted-foreground">
                    Voce usou 80% do seu limite de IA
                  </p>
                  <p className="text-xs text-muted-foreground">3 horas atras</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
