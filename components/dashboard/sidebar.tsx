"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Bot,
  Workflow,
  Plug,
  ScrollText,
  BarChart3,
  Settings,
  ChevronLeft,
  LogOut,
  Building2,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Agentes de IA", href: "/dashboard/agents", icon: Bot },
  { name: "Automacoes", href: "/dashboard/automations", icon: Workflow },
  { name: "Integracoes", href: "/dashboard/integrations", icon: Plug },
  { name: "Logs", href: "/dashboard/logs", icon: ScrollText },
  { name: "Metricas", href: "/dashboard/metrics", icon: BarChart3 },
  { name: "Configuracoes", href: "/dashboard/settings", icon: Settings },
]

const workspaces = [
  { id: "1", name: "MaviCompany", plan: "Pro" },
  { id: "2", name: "Cliente A", plan: "Business" },
  { id: "3", name: "Cliente B", plan: "Starter" },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces[0])

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/images/mavi-logo.jpeg"
              alt="MaviControl"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("h-8 w-8", isCollapsed && "mx-auto")}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
        </Button>
      </div>

      {/* Workspace Selector */}
      <div className="p-4 border-b border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start gap-2 bg-secondary/50 border-border hover:bg-secondary",
                isCollapsed && "justify-center px-2"
              )}
            >
              <Building2 className="h-4 w-4 shrink-0 text-primary" />
              {!isCollapsed && (
                <>
                  <div className="flex-1 text-left truncate">
                    <div className="font-medium text-sm">{currentWorkspace.name}</div>
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {workspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace.id}
                onClick={() => setCurrentWorkspace(workspace)}
                className={cn(
                  "flex items-center justify-between",
                  currentWorkspace.id === workspace.id && "bg-secondary"
                )}
              >
                <span>{workspace.name}</span>
                <span className="text-xs text-muted-foreground">{workspace.plan}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="text-primary">+ Novo workspace</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                isCollapsed && "justify-center px-2"
              )}
            >
              <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* User Menu */}
      <div className="p-4 border-t border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 hover:bg-secondary/50",
                isCollapsed && "justify-center px-2"
              )}
            >
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-sm font-medium text-primary">JD</span>
              </div>
              {!isCollapsed && (
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">Admin</div>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Meu perfil</DropdownMenuItem>
            <DropdownMenuItem>Configuracoes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  )
}
