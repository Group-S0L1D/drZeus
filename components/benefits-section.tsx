"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DollarSign, 
  Calendar, 
  Clock, 
  Zap, 
  Home, 
  Building2, 
  FileText, 
  CheckCircle, 
  Shield,
  TrendingUp,
  CreditCard,
  Award
} from "lucide-react"
import Link from "next/link"

export function BenefitsSection() {
  const mainBenefits = [
    {
      icon: DollarSign,
      title: "CRÉDITO A PARTIR DE R$100.000,00",
      description: "Conquiste recursos a partir de R$100.000,00 com garantia imobiliária e total liberdade para aplicar o valor onde fizer mais sentido para você ou sua empresa.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: Calendar,
      title: "ATÉ 240 MESES PARA PAGAR",
      description: "Prazos flexíveis entre 36 e 240 meses. Analisamos seu fluxo de receita para ajustar a proposta ideal e liberar o crédito com o plano mais confortável para sua realidade",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Clock,
      title: "ATÉ 180 DIAS PARA COMEÇAR A PAGAR",
      description: "Respire antes de pagar: oferecemos até 180 dias de carência para você utilizar o valor recebido, gerar retorno e só então começar a quitar as parcelas.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Zap,
      title: "USE O DINHEIRO COMO QUISER",
      description: "Seja para capital de giro, marketing, expansão do time, estoque, reforma, construção ou até investir em outro imóvel — com a garantia aprovada, o uso é livre. O limite é sua estratégia.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    }
  ]

  const additionalBenefits = [
    {
      icon: Home,
      title: "Aceitamos diversos tipos de imóvel como garantia",
      description: "Apartamentos, casas (em rua ou condomínio), salas comerciais, galpões, ginásios, terrenos urbanos ou rurais. Avaliamos com flexibilidade.",
      color: "text-blue-400"
    },
    {
      icon: Building2,
      title: "Imóveis quitados ou financiados",
      description: "Seu imóvel está financiado? Sem problema. Quitamos o saldo devedor e liberamos a diferença direto na sua conta.",
      color: "text-green-400"
    },
    {
      icon: FileText,
      title: "Averbado, semi ou não averbado? Tudo certo.",
      description: "A situação registral do imóvel não impede a análise. Trabalhamos com imóveis averbados, semi ou até não averbados.",
      color: "text-purple-400"
    },
    {
      icon: CheckCircle,
      title: "Assine seu contrato entre 4 a 10 dias",
      description: "Após a análise e aprovação da documentação, o contrato pode ser assinado entre 4 a 10 dias úteis. Agilidade do jeito que você precisa.",
      color: "text-orange-400"
    },
    {
      icon: Shield,
      title: "Mesmo negativado, analisamos seu caso",
      description: "Está com restrição ou processos em aberto? Com uma boa garantia, há grandes chances de aprovação. Analisamos com critério a qualidade do seu imóvel.",
      color: "text-red-400"
    }
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`🚀 *INTERESSE EM BENEFÍCIOS - DR ZEUS CAPITAL*

Olá! Vi os benefícios da Dr. Zeus Capital e gostaria de saber mais sobre:

• Crédito a partir de R$100.000,00
• Até 240 meses para pagar
• Até 180 dias de carência
• Uso livre do dinheiro

Gostaria de falar com um especialista para entender melhor como posso aproveitar esses benefícios.

---
*Mensagem enviada através do site*`)

    const whatsappUrl = `https://wa.me/554197344909?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300">Por que escolher a Dr. Zeus Capital?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Principais <span className="text-blue-400 glow-text">Benefícios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça os diferenciais que fazem da Dr. Zeus Capital a escolha certa para suas necessidades financeiras
            </p>
          </div>

          {/* Principais Benefícios */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {mainBenefits.map((benefit, index) => (
              <div key={index} className="group">
                <Card className="gradient-border hover:scale-105 transition-all duration-300">
                  <Card className="gradient-border-content border-0 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${benefit.bgColor} border ${benefit.borderColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                            {benefit.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Card>
              </div>
            ))}
          </div>

          {/* Benefícios Adicionais */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Mais <span className="text-green-400 glow-text">Flexibilidade</span>
              </h3>
              <p className="text-gray-300">Condições especiais para diferentes perfis e situações</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="group">
                  <Card className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para aproveitar esses benefícios?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução para suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 glow-blue">
                  <Link href="/simuladores">Fazer Simulação</Link>
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 