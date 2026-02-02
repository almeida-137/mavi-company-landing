import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { Solutions } from "@/components/landing/solutions"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Benefits } from "@/components/landing/benefits"
import { Technologies } from "@/components/landing/technologies"
import { TargetAudience } from "@/components/landing/target-audience"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <Technologies />
      <TargetAudience />
      <CTA />
      <Footer />
    </main>
  )
}
