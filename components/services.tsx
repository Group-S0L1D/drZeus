import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, CreditCard, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Consórcio Imobiliário",
      description: "Realize o sonho da casa própria com parcelas que cabem no seu bolso. Sem juros, sem entrada.",
      features: ["Sem juros", "Sem entrada", "Parcelas fixas", "Contemplação garantida"],
      href: "/servicos/consorcio",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: CreditCard,
      title: "Home Equity",
      description: "Use o valor do seu imóvel como garantia e obtenha crédito com as menores taxas do mercado.",
      features: ["Taxas baixas", "Alto valor", "Prazo longo", "Aprovação rápida"],
      href: "/servicos/home-equity",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      buttonColor: "bg-green-600 hover:bg-green-700",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nossos Serviços</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções financeiras inteligentes para realizar seus sonhos e fazer seu dinheiro trabalhar para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="gradient-border group hover:scale-105 transition-all duration-300">
              <Card className="gradient-border-content border-0 h-full overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center border border-gray-700`}
                    >
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className={`w-full ${service.buttonColor} glow-blue`}>
                    <Link href={service.href}>
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
