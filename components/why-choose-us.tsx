import { Shield, Clock, Award, HeadphonesIcon } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Empresa regulamentada pelo Banco Central com todas as certificações necessárias.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Clock,
      title: "Aprovação Rápida",
      description: "Processo 100% digital com aprovação rápida.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Award,
      title: "Melhores Condições",
      description: "Taxas competitivas e condições especiais para nossos clientes.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Equipe de consultores especializados para te ajudar em cada etapa.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ]

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Por que escolher a Dr. Zeus Capital?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecendo as melhores soluções financeiras para nossos clientes com excelência e transparência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 ${reason.bgColor} border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-gray-600 transition-all duration-300 glow-blue`}
              >
                <reason.icon className={`w-10 h-10 ${reason.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
