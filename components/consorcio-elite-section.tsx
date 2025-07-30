import { Shield, Clock, Award, Users } from "lucide-react"

export function ConsorcioEliteSection() {
  const features = [
    {
      icon: Award,
      title: "Exclusividade",
      description: "Acesso a consórcios de alto padrão com condições especiais.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Processos regulamentados e 100% seguros.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Aprovação e liberação em tempo recorde.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Users,
      title: "Suporte Premium",
      description: "Atendimento personalizado durante todo o processo.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
  ]

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo à esquerda */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Consórcios <span className="text-blue-400 glow-text">de Elite</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Acesso exclusivo aos melhores consórcios do mercado, com condições diferenciadas para clientes de alto
                  padrão. Transforme seu patrimônio em oportunidades extraordinárias.
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
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="relative group">
              <div className="gradient-border group-hover:scale-105 transition-all duration-500">
                <div className="gradient-border-content rounded-2xl overflow-hidden">
                  <img
                    src="/images/modern-buildings.png"
                    alt="Consórcios de Elite - Empreendimentos Modernos"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
