import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LuxurySection() {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo à esquerda */}
            <div className="space-y-8">
              {/* Branding */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-blue-500/60"></div>
                <span className="text-gray-300 font-semibold text-sm tracking-wider">DR. ZEUS CAPITAL</span>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-white">Transformamos</span>{" "}
                  <span className="text-blue-400 glow-text">patrimônio em</span>{" "}
                  <span className="text-white">oportunidade</span>
                </h2>
              </div>

              {/* Descrição */}
              <div>
                <p className="text-lg text-gray-300 leading-relaxed">
                O seu imóvel tem mais liquidez do que imagina, utilize ele como garantia e use o recurso como quiser
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <Button 
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg transition-all duration-300 glow-blue"
                >
                  <Link href="/servicos">
                    Descobrir Soluções
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="relative group flex justify-center w-4/5 mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img
                  src="/imagemLuxo.jpg"
                  alt="Luxo e Sofisticação - Dr. Zeus Capital"
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 