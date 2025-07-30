import { CreditCard, Zap, TrendingUp, HeadphonesIcon } from "lucide-react"

export function HomeEquitySection() {
  const features = [
    {
      icon: CreditCard,
      title: "Taxas Baixas",
      description: "As melhores taxas do mercado a partir de 1,09% a.m.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: TrendingUp,
      title: "Alto Valor",
      description: "Libere até 60% do valor do seu imóvel como crédito.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Zap,
      title: "Aprovação Rápida",
      description: "Processo 100% digital, aprovação rapida, assinatura do contrato entre 4 a 10 dias",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Consultores especializados em crédito imobiliário.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem à esquerda */}
            <div className="relative group order-2 lg:order-1">
              <div className="gradient-border group-hover:scale-105 transition-all duration-500">
                <div className="gradient-border-content rounded-2xl overflow-hidden">
                  <img
                    src="/images/modern-buildings.png"
                    alt="Home Equity Premium - Crédito Imobiliário"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Conteúdo à direita */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Home Equity <span className="text-green-400 glow-text">Premium</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Use o valor do seu imóvel como garantia e obtenha crédito com as menores taxas do mercado. Processo
                  100% digital com aprovação rápida e condições exclusivas.
                </p>
              </div>

              {/* Grid de features 2x2 */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`${feature.bgColor} ${feature.borderColor} border rounded-xl p-6 group hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
                  >
                    <div
                      className={`w-12 h-12 ${feature.bgColor} ${feature.borderColor} border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-blue`}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
