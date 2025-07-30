import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300">Mais de 50.000 clientes já realizaram seus sonhos</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Pronto para realizar seus <span className="text-blue-400 glow-text">sonhos</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Faça uma simulação gratuita e descubra como podemos ajudar você a conquistar seus objetivos financeiros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 glow-blue animate-pulse-glow"
            >
              <Link href="/simuladores">
                <Calculator className="w-5 h-5 mr-2" />
                Fazer Simulação Gratuita
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 text-lg px-8 py-4 bg-transparent backdrop-blur-sm"
            >
              <Link href="/contato">
                Falar com Consultor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
