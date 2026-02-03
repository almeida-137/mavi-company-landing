import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    label: string
  }
  icon: LucideIcon
  variant?: "default" | "success" | "warning" | "error"
}

export function StatsCard({ title, value, change, icon: Icon, variant = "default" }: StatsCardProps) {
  const variantStyles = {
    default: "bg-primary/10 text-primary border-primary/20",
    success: "bg-green-500/10 text-green-500 border-green-500/20",
    warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    error: "bg-red-500/10 text-red-500 border-red-500/20",
  }

  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {change && (
            <p className={cn(
              "text-sm font-medium",
              change.value >= 0 ? "text-green-500" : "text-red-500"
            )}>
              {change.value >= 0 ? "+" : ""}{change.value}% {change.label}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-lg border", variantStyles[variant])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
