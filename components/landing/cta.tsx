import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Pronto para transformar sua operacao com IA?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Fale com a MaviCompany e descubra como a tecnologia pode trabalhar por voce.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold group"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Solicitar diagnostico tecnico
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
