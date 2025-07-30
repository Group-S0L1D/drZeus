"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  CreditCard,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award,
  Sparkles,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
  HeadphonesIcon,
} from "lucide-react"
import Link from "next/link"
import { BenefitsSection } from "@/components/benefits-section"

export default function ServicosPage() {
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
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300">Soluções financeiras de elite</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Soluções Financeiras <span className="text-blue-400 glow-text">de Elite</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cada solução é meticulosamente desenvolvida para atender às necessidades dos clientes mais exigentes do
              mercado financeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-transparent border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-4 glow-blue"
                onClick={() => {
                  document.getElementById('home-equity-premium')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                Conhecer Serviços
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 glow-blue"
                onClick={() => {
                  const message = encodeURIComponent(`🚀 *NOVA CONSULTA - DR ZEUS CAPITAL*

👤 *DADOS DO CLIENTE:*
• Interesse: Falar com Especialista
• Origem: Página de Serviços

💬 *MENSAGEM:*
Cliente interessado em conhecer mais sobre os serviços da Dr. Zeus Capital.

---
*Consulta gerada automaticamente pelo site*`)
                  const whatsappUrl = `https://wa.me/554197344909?text=${message}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços - Overview */}
      {/* TODO: Seção "Nosso Serviço" comentada temporariamente */}

      {/* Principais Benefícios */}
      <BenefitsSection />

      {/* Home Equity Premium */}
      <section id="home-equity-premium" className="py-20 bg-black relative">
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
                  {[
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
                      description: "Libere até 70% do valor do seu imóvel como crédito.",
                      color: "text-blue-400",
                      bgColor: "bg-blue-500/10",
                      borderColor: "border-blue-500/20",
                    },
                    {
                      icon: Zap,
                      title: "Aprovação Rápida",
                      description: "Processo 100% digital com aprovação em até 48h.",
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
                  ].map((feature, index) => (
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

      {/* Libere o Potencial - NOVO LAYOUT BONITO */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Libere o Potencial do Seu <span className="text-blue-400 glow-text">Imóvel</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa equipe de especialistas está preparada para analisar seu caso e apresentar a melhor proposta do
                mercado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  letter: "A",
                  title: "Análise Personalizada",
                  subtitle: "CRÉDITO FLEXÍVEL E SEM CUSTO",
                  description:
                    "Análise de crédito personalizada considerando seu perfil patrimonial único, sem taxas de avaliação.",
                  color: "blue",
                  icon: Target,
                },
                {
                  letter: "E",
                  title: "Processo Ágil",
                  subtitle: "ASSINATURA EM 4 A 10 DIAS",
                  description:
                    "Processo 100% digital com assinatura eletrônica segura, garantindo agilidade sem comprometer a segurança.",
                  color: "green",
                  icon: Zap,
                },
                {
                  letter: "Z",
                  title: "Crédito Elevado",
                  subtitle: "ACIMA DE R$ 100 MIL",
                  description:
                    "Possibilidade de crédito flexível para valores elevados, adequado às necessidades de clientes sofisticados.",
                  color: "purple",
                  icon: TrendingUp,
                },
              ].map((item, index) => {
                const colorClasses = {
                  blue: {
                    bg: "from-blue-500/20 to-blue-600/10",
                    border: "border-blue-500/30",
                    text: "text-blue-400",
                    glow: "shadow-blue-500/50",
                    letter: "text-blue-500/20",
                  },
                  green: {
                    bg: "from-green-500/20 to-green-600/10",
                    border: "border-green-500/30",
                    text: "text-green-400",
                    glow: "shadow-green-500/50",
                    letter: "text-green-500/20",
                  },
                  purple: {
                    bg: "from-purple-500/20 to-purple-600/10",
                    border: "border-purple-500/30",
                    text: "text-purple-400",
                    glow: "shadow-purple-500/50",
                    letter: "text-purple-500/20",
                  },
                }
                const colors = colorClasses[item.color as keyof typeof colorClasses]

                return (
                  <div key={index} className="group">
                    <div
                      className={`relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8 h-full backdrop-blur-sm group-hover:scale-105 group-hover:shadow-2xl group-hover:${colors.glow} transition-all duration-500`}
                    >
                      {/* Letra grande de fundo */}
                      <div
                        className={`absolute top-4 right-4 text-6xl font-bold ${colors.letter} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                      >
                        {item.letter}
                      </div>

                      {/* Ícone animado */}
                      <div
                        className={`w-16 h-16 bg-gray-900/50 border ${colors.border} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow-blue`}
                      >
                        <item.icon className={`w-8 h-8 ${colors.text}`} />
                      </div>

                      {/* Conteúdo */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h3>
                        <div className={`${colors.text} font-semibold text-xs uppercase tracking-wide mb-4 opacity-80`}>
                          {item.subtitle}
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                          {item.description}
                        </p>
                      </div>

                      {/* Efeito de brilho no hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Processo - NOVO LAYOUT BONITO */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Nosso <span className="text-blue-400 glow-text">Processo</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada etapa é meticulosamente planejada para garantir a excelência em todos os aspectos do atendimento.
              </p>
            </div>

            <div className="relative">
              {/* Linha conectora */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-green-500/50 to-purple-500/50 transform -translate-y-1/2 hidden lg:block"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    number: "01",
                    title: "Consulta Inicial",
                    subtitle: "ANÁLISE DE PERFIL",
                    description: "Reunião exclusiva para entender suas necessidades, objetivos e perfil patrimonial.",
                    color: "blue",
                    icon: Users,
                  },
                  {
                    number: "02",
                    title: "Proposta Personalizada",
                    subtitle: "ESTRATÉGIA SOB MEDIDA",
                    description: "Desenvolvimento de proposta única, adequada ao seu perfil e objetivos específicos.",
                    color: "green",
                    icon: Target,
                  },
                  {
                    number: "03",
                    title: "Aprovação e Documentação",
                    subtitle: "PROCESSO ÁGIL",
                    description: "Análise de crédito premium e preparação de toda documentação necessária.",
                    color: "purple",
                    icon: CheckCircle,
                  },
                  {
                    number: "04",
                    title: "Execução e Acompanhamento",
                    subtitle: "SUPORTE CONTÍNUO",
                    description: "Implementação da estratégia com acompanhamento dedicado até a conclusão.",
                    color: "blue",
                    icon: Award,
                  },
                ].map((step, index) => {
                  const colorClasses = {
                    blue: {
                      bg: "from-blue-500/20 to-blue-600/5",
                      border: "border-blue-500/30",
                      text: "text-blue-400",
                      number: "text-blue-500",
                    },
                    green: {
                      bg: "from-green-500/20 to-green-600/5",
                      border: "border-green-500/30",
                      text: "text-green-400",
                      number: "text-green-500",
                    },
                    purple: {
                      bg: "from-purple-500/20 to-purple-600/5",
                      border: "border-purple-500/30",
                      text: "text-purple-400",
                      number: "text-purple-500",
                    },
                  }
                  const colors = colorClasses[step.color as keyof typeof colorClasses]

                  return (
                    <div key={index} className="relative group">
                      {/* Círculo do número */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-300 glow-blue relative z-10`}
                      >
                        <span className={`text-xl font-bold ${colors.number}`}>{step.number}</span>
                      </div>

                      {/* Card do processo */}
                      <div
                        className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-6 backdrop-blur-sm group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 h-full`}
                      >
                        {/* Ícone */}
                        <div
                          className={`w-12 h-12 bg-gray-900/50 border ${colors.border} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}
                        >
                          <step.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>

                        {/* Conteúdo */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {step.title}
                          </h3>
                          <div
                            className={`${colors.text} font-semibold text-xs uppercase tracking-wide mb-4 opacity-80`}
                          >
                            {step.subtitle}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                            {step.description}
                          </p>
                        </div>

                        {/* Efeito de brilho */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Equity Premium - Detalhado */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Home Equity <span className="text-green-400 glow-text">Premium</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforme seu patrimônio imobiliário em liquidez imediata com condições exclusivas e processo
                personalizado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  letter: "A",
                  title: "Flexibilidade Total",
                  subtitle: "ATÉ 6 MESES PARA COMEÇAR A PAGAR",
                  description:
                    "Oferecemos carência de até 180 dias para que você possa organizar suas finanças e utilizar o recurso da melhor forma.",
                  color: "green",
                },
                {
                  letter: "B",
                  title: "Prazos Estendidos",
                  subtitle: "36 A 240 MESES PARA PAGAMENTO",
                  description:
                    "Prazos flexíveis que se adaptam ao seu fluxo de caixa, permitindo parcelas confortáveis e planejamento de longo prazo.",
                  color: "blue",
                },
                {
                  letter: "F",
                  title: "Taxas Preferenciais",
                  subtitle: "A PARTIR DE 1,09% A.M. + IPCA",
                  description:
                    "As melhores taxas do mercado, exclusivas para nossos clientes premium, com indexação transparente e justa.",
                  color: "purple",
                },
              ].map((item, index) => {
                const colorClasses = {
                  green: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-400 text-green-500/20",
                  blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400 text-blue-500/20",
                  purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400 text-purple-500/20",
                }
                const [bgGradient, border, textColor, letterColor] =
                  colorClasses[item.color as keyof typeof colorClasses].split(" ")

                return (
                  <div key={index} className="group">
                    <div
                      className={`relative bg-gradient-to-br ${bgGradient} border ${border} rounded-2xl p-8 h-full backdrop-blur-sm group-hover:scale-105 transition-all duration-500`}
                    >
                      <div
                        className={`absolute top-4 right-4 text-6xl font-bold ${letterColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                      >
                        {item.letter}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                          {item.title}
                        </h3>
                        <div className={`${textColor} font-semibold text-xs uppercase tracking-wide mb-4 opacity-80`}>
                          {item.subtitle}
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria Patrimonial vs Home Equity */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Consultoria Patrimonial */}
              <div className="relative group">
                <div className="absolute top-4 left-4 text-8xl font-bold text-blue-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                  01
                </div>
                <div className="gradient-border group-hover:scale-105 transition-all duration-300">
                  <Card className="gradient-border-content border-0 h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader className="p-8 relative z-10">
                      <CardTitle className="text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                        Consultoria Patrimonial Premium
                      </CardTitle>
                      <CardDescription className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                        Análise Completa de Patrimônio
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 relative z-10">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Avaliação detalhada de todo seu portfólio financeiro e imobiliário, com estratégias
                        personalizadas para otimização e crescimento patrimonial.
                      </p>
                      <div className="space-y-3 mb-8">
                        {[
                          "Análise de portfólio completa",
                          "Estratégias de diversificação",
                          "Planejamento sucessório",
                          "Otimização tributária",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                            <span className="text-gray-300 group-hover/item:text-blue-300 transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-700 pt-6 mb-6">
                        <div className="text-sm text-gray-400 mb-2">VALOR</div>
                        <div className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          Consulta inicial gratuita
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 glow-blue"
                        onClick={() => {
                          const message = encodeURIComponent(`🚀 *NOVA PROPOSTA - DR ZEUS CAPITAL*

👤 *DADOS DO CLIENTE:*
• Interesse: Consultoria Patrimonial Premium
• Origem: Página de Serviços - Seção Adicional
• Valor: Consulta inicial gratuita

💬 *MENSAGEM:*
Cliente interessado em solicitar proposta para Consultoria Patrimonial Premium.

---
*Proposta gerada automaticamente pelo site*`)
                          const whatsappUrl = `https://wa.me/554197344909?text=${message}`
                          window.open(whatsappUrl, '_blank')
                        }}
                      >
                        Solicitar Proposta
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Home Equity Premium */}
              <div className="relative group">
                <div className="absolute top-4 left-4 text-8xl font-bold text-green-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                  02
                </div>
                <div className="gradient-border group-hover:scale-105 transition-all duration-300">
                  <Card className="gradient-border-content border-0 h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader className="p-8 relative z-10">
                      <CardTitle className="text-2xl text-white mb-2 group-hover:text-green-300 transition-colors">
                        Home Equity Premium
                      </CardTitle>
                      <CardDescription className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                        Crédito com Garantia Imobiliária
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 relative z-10">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Libere até 70% do valor do seu imóvel com as melhores condições do mercado. Processo 100%
                        digital e aprovação em até 48h.
                      </p>
                      <div className="space-y-3 mb-8">
                        {[
                          "Taxas a partir de 1,09% a.m.",
                          "Prazo de até 240 meses",
                          "Carência de até 6 meses",
                          "Aprovação em 48h",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200"
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full group-hover/item:scale-150 transition-transform duration-200"></div>
                            <span className="text-gray-300 group-hover/item:text-green-300 transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-700 pt-6 mb-6">
                        <div className="text-sm text-gray-400 mb-2">VALOR</div>
                        <div className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                          A partir de R$ 100.000
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 glow-blue"
                        onClick={() => {
                          const message = encodeURIComponent(`🚀 *NOVA PROPOSTA - DR ZEUS CAPITAL*

👤 *DADOS DO CLIENTE:*
• Interesse: Home Equity Premium
• Origem: Página de Serviços - Seção Adicional
• Valor: A partir de R$ 100.000

💬 *MENSAGEM:*
Cliente interessado em solicitar proposta para Home Equity Premium.

---
*Proposta gerada automaticamente pelo site*`)
                          const whatsappUrl = `https://wa.me/554197344909?text=${message}`
                          window.open(whatsappUrl, '_blank')
                        }}
                      >
                        Solicitar Proposta
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para <span className="text-blue-400 glow-text">começar</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Faça uma simulação gratuita e descubra qual é a melhor opção para você.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 glow-blue animate-pulse-glow"
          >
            <Link href="/simuladores">
              Fazer Simulação Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
