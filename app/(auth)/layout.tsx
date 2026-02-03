"use client"

import React from "react"

import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
      
      {/* Right side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-background to-accent/10 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 text-center space-y-8">
          <Image
            src="/images/mavi-logo.jpeg"
            alt="MaviControl"
            width={200}
            height={80}
            className="mx-auto"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Central de Controle
            </h2>
            <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Gerencie agentes de IA, automacoes e integracoes em uma unica plataforma.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto pt-8">
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold text-primary">IA</div>
              <div className="text-xs text-muted-foreground">Agentes</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Automacao</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold text-primary">API</div>
              <div className="text-xs text-muted-foreground">Integracoes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
