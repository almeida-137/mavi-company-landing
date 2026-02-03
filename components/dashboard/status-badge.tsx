import { cn } from "@/lib/utils"

type Status = "active" | "paused" | "error" | "pending" | "connected" | "disconnected"

interface StatusBadgeProps {
  status: Status
  showDot?: boolean
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  active: {
    label: "Ativo",
    className: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  paused: {
    label: "Pausado",
    className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  },
  error: {
    label: "Erro",
    className: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  pending: {
    label: "Pendente",
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  connected: {
    label: "Conectado",
    className: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  disconnected: {
    label: "Desconectado",
    className: "bg-muted text-muted-foreground border-border",
  },
}

export function StatusBadge({ status, showDot = true }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
        config.className
      )}
    >
      {showDot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            status === "active" || status === "connected" ? "bg-green-500" : "",
            status === "paused" ? "bg-yellow-500" : "",
            status === "error" ? "bg-red-500" : "",
            status === "pending" ? "bg-blue-500" : "",
            status === "disconnected" ? "bg-muted-foreground" : ""
          )}
        />
      )}
      {config.label}
    </span>
  )
}
