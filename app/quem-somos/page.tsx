import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Shield, Target, Heart, TrendingUp, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/*<div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8 glow-blue">
              <Building2 className="w-10 h-10 text-blue-400" />
            </div>*/}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
              <span className="text-blue-300">15 anos transformando sonhos em realidade</span>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8 glow-blue">
                <Building2 className="w-10 h-10 text-blue-400" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-blue-400 glow-text">Quem Somos</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Conheça a história da Dr. Zeus Capital e nossa missão de transformar vidas através de soluções financeiras
                inteligentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História com Imagem */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white">
                  Nossa <span className="text-blue-400 glow-text">História</span>
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Fundada em 2009, a Dr. Zeus Capital nasceu com o propósito de democratizar o acesso a soluções
                    financeiras de qualidade no Brasil. Começamos como uma pequena empresa focada em consórcios
                    imobiliários e, ao longo dos anos, expandimos nossos serviços para atender às diversas necessidades
                    de nossos clientes.
                  </p>
                  <p>
                    Hoje, somos uma das principais referências no mercado de consórcios e home equity, com mais de
                    50.000 clientes atendidos e R$ 2,5 bilhões em negócios realizados. Nossa trajetória é marcada pela
                    inovação, transparência e, principalmente, pelo compromisso em realizar sonhos.
                  </p>
                  <p>
                    Acreditamos que cada pessoa merece ter acesso a oportunidades financeiras justas e transparentes.
                    Por isso, trabalhamos incansavelmente para oferecer as melhores condições do mercado, sempre com
                    foco na satisfação e sucesso de nossos clientes.
                  </p>
                </div>
              </div>

              {/* Imagem da História */}
              <div className="relative">
                <div className="gradient-border">
                  <div className="gradient-border-content rounded-xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="História da Dr. Zeus Capital"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">15+</div>
                      <div className="text-xs text-gray-300">Anos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">50k+</div>
                      <div className="text-xs text-gray-300">Clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Nossos <span className="text-blue-400 glow-text">Pilares</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  description:
                    "Democratizar o acesso a soluções financeiras inteligentes, oferecendo consórcios e home equity com transparência, agilidade e as melhores condições do mercado.",
                  color: "text-blue-400",
                  bgColor: "bg-blue-500/10",
                },
                {
                  icon: TrendingUp,
                  title: "Visão",
                  description:
                    "Ser a principal referência em soluções financeiras no Brasil, reconhecida pela excelência no atendimento e pela capacidade de transformar sonhos em realidade.",
                  color: "text-green-400",
                  bgColor: "bg-green-500/10",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  description:
                    "Transparência, ética, inovação, compromisso com o cliente, excelência no atendimento e responsabilidade social em todas as nossas ações.",
                  color: "text-purple-400",
                  bgColor: "bg-purple-500/10",
                },
              ].map((pilar, index) => (
                <div key={index} className="gradient-border group hover:scale-105 transition-all duration-300">
                  <Card className="gradient-border-content border-0 h-full">
                    <CardContent className="p-8 text-center space-y-6">
                      <div
                        className={`w-16 h-16 ${pilar.bgColor} border border-gray-700 rounded-xl flex items-center justify-center mx-auto glow-blue`}
                      >
                        <pilar.icon className={`w-8 h-8 ${pilar.color}`} />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{pilar.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{pilar.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Nossos <span className="text-blue-400 glow-text">Diferenciais</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Segurança Total",
                  description: "Empresa regulamentada e certificada pelos órgãos competentes",
                },
                {
                  icon: Users,
                  title: "Atendimento Humanizado",
                  description: "Equipe especializada e dedicada ao seu sucesso",
                },
                {
                  icon: Award,
                  title: "Excelência Reconhecida",
                  description: "Premiações e reconhecimentos do mercado financeiro",
                },
                {
                  icon: TrendingUp,
                  title: "Inovação Constante",
                  description: "Tecnologia de ponta e processos sempre atualizados",
                },
              ].map((diferencial, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gray-900/50 border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 glow-blue">
                    <diferencial.icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{diferencial.title}</h3>
                  <p className="text-gray-400">{diferencial.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Nossos <span className="text-blue-400 glow-text">Compromissos</span>
            </h2>

            <div className="gradient-border">
              <div className="gradient-border-content p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-blue-400">Com Nossos Clientes:</h3>
                    <div className="space-y-4">
                      {[
                        "Transparência total em todos os processos",
                        "Atendimento personalizado e humanizado",
                        "Melhores condições do mercado",
                        "Suporte completo durante toda a jornada",
                        "Educação financeira e orientação especializada",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-green-400">Com a Sociedade:</h3>
                    <div className="space-y-4">
                      {[
                        "Práticas sustentáveis e responsáveis",
                        "Contribuição para o desenvolvimento econômico",
                        "Geração de empregos e oportunidades",
                        "Apoio a projetos sociais e comunitários",
                        "Educação financeira para a população",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para fazer parte da nossa <span className="text-blue-400 glow-text">história</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de clientes que já realizaram seus sonhos conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 glow-blue animate-pulse-glow"
            >
              <Link href="/simuladores">Fazer Simulação</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 text-lg px-8 py-4 bg-transparent backdrop-blur-sm"
            >
              <Link href="/contato">Falar Conosco</Link>
            </Button>
          </div>
        </div>
      </section>*/}
    </div>
  )
}
