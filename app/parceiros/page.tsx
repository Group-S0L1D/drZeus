"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  TrendingUp,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Shield,
  Rocket,
  Crown,
  Star,
  Lightbulb,
  RefreshCw,
  Banknote,
  Heart,
} from "lucide-react"

export default function ParceirosPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    experiencia: "",
    motivacao: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    const message = encodeURIComponent(`🚀 *NOVA CANDIDATURA - DR ZEUS CAPITAL*

👤 *DADOS DO CANDIDATO:*
• Nome: ${formData.nome}
• E-mail: ${formData.email}
• Telefone: ${formData.telefone}
• Cidade: ${formData.cidade}

💼 *EXPERIÊNCIA PROFISSIONAL:*
${formData.experiencia || "Não informado"}

🎯 *MOTIVAÇÃO:*
${formData.motivacao || "Não informado"}

---
*Candidatura gerada automaticamente pelo site*`)

    const whatsappUrl = `https://wa.me/554197344909?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

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
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
              <Crown className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300">Seja parte do nosso time de elite</span>
            </div>

            <div className="mb-8">
              <span className="text-6xl mb-4 block">🏛️</span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                O que a <span className="text-blue-400 glow-text">Dr. Zeus Capital</span> entrega para você
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-4">
                <span className="text-blue-400 font-semibold">Consultor</span>,{" "}
                <span className="text-green-400 font-semibold">Corretor</span>,{" "}
                <span className="text-purple-400 font-semibold">Contador</span> ou{" "}
                <span className="text-blue-400 font-semibold">Profissional do mercado financeiro</span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-4xl">🔥</span>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">Você entra com sua vontade de crescer.</p>
                  <p className="text-xl text-blue-300">Nós entregamos toda a estrutura.</p>
                </div>
                <span className="text-4xl">⚙️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura Principal */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* CRM Gratuito */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                      1
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        CRM <span className="text-blue-400 glow-text">GRATUITO</span>
                      </h2>
                      <p className="text-blue-300 font-semibold">com IA e integração via API</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Ferramenta profissional, com automações, simulações, propostas, gestão de clientes e pipelines já
                      estruturados.
                    </p>

                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
                      <p className="text-lg text-green-300 font-semibold mb-2">
                        ✨ Totalmente gratuito, basta se dedicar.
                      </p>
                      <p className="text-gray-300">A estrutura está pronta — você só precisa executar.</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/10 border border-purple-500/30 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Brain className="w-6 h-6 text-purple-400" />
                        <p className="text-lg text-purple-300 font-semibold">IA Integrada</p>
                      </div>
                      <p className="text-gray-300">
                        Para prever comportamento de leads e melhorar sua taxa de fechamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="gradient-border group-hover:scale-105 transition-all duration-500">
                    <div className="gradient-border-content rounded-2xl p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/5">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                          { icon: Target, label: "Automações", color: "text-blue-400" },
                          { icon: TrendingUp, label: "Simulações", color: "text-green-400" },
                          { icon: Users, label: "Gestão de Clientes", color: "text-purple-400" },
                          { icon: Zap, label: "Pipelines", color: "text-blue-400" },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center group-hover:scale-110 transition-transform duration-300"
                          >
                            <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                            <p className="text-sm text-gray-300">{item.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-blue-300 font-semibold">Powered by AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inteligência de Prospecção */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group order-2 lg:order-1">
                  <div className="gradient-border group-hover:scale-105 transition-all duration-500">
                    <div className="gradient-border-content rounded-2xl p-8 bg-gradient-to-br from-green-500/10 to-blue-500/5">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Leads Ultra Segmentados</h3>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Empresários com imóveis",
                          "Médicos e advogados",
                          "Moradores de condomínios",
                          "Anunciantes de imóveis",
                          "E muito mais...",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 bg-gray-900/30 rounded-lg p-3 group-hover:bg-gray-800/50 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                      2
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        <span className="text-green-400 glow-text">Melhor Inteligência</span> de Prospecção
                      </h2>
                      <p className="text-green-300 font-semibold">do Brasil 🧲</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    Você poderá coletar leads ultra segmentados, com acesso aos seguintes públicos:
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        icon: "🏢",
                        text: "Empresários que possuem imóveis (perfil ideal para Home Equity)",
                        color: "border-blue-500/30 bg-blue-500/10",
                      },
                      {
                        icon: "👨‍⚕️",
                        text: "Médicos, advogados e outros profissionais de alta renda",
                        color: "border-green-500/30 bg-green-500/10",
                      },
                      {
                        icon: "🏠",
                        text: "Todos os moradores de condomínios — nome completo + telefone (com compliance à LGPD)",
                        color: "border-purple-500/30 bg-purple-500/10",
                      },
                      {
                        icon: "📱",
                        text: "Pessoas que estão anunciando imóveis à venda em tempo real",
                        color: "border-blue-500/30 bg-blue-500/10",
                      },
                    ].map((item, index) => (
                      <div key={index} className={`border ${item.color} rounded-xl p-4 backdrop-blur-sm`}>
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl">{item.icon}</span>
                          <p className="text-gray-300">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6">
                    <p className="text-lg text-green-300 font-semibold mb-2">🎯 Somos o ápice da prospecção moderna</p>
                    <p className="text-gray-300">
                      Tudo integrado com seu CRM, permitindo campanhas inteligentes e personalizadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Landing Page + Consultoria 360° */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {/* Landing Page */}
              <div className="gradient-border group hover:scale-105 transition-all duration-300">
                <Card className="gradient-border-content border-0 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="p-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                        3
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors">
                          Landing Page Profissional
                        </CardTitle>
                        <CardDescription className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                          Personalizada 🌐
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 relative z-10">
                    <div className="space-y-4 mb-6">
                      {[
                        "Sua própria página com seu nome e foto",
                        "Especialidade destacada",
                        "Simulador integrado",
                        "Melhora sua imagem profissional",
                        "Facilita captação de leads qualificados",
                        "Desenvolvida para gerar autoridade",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-200"
                        >
                          <Globe className="w-4 h-4 text-blue-400 group-hover/item:scale-125 transition-transform duration-200" />
                          <span className="text-gray-300 group-hover/item:text-blue-300 transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Consultoria 360° */}
              <div className="gradient-border group hover:scale-105 transition-all duration-300">
                <Card className="gradient-border-content border-0 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="p-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                        4
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white group-hover:text-green-300 transition-colors">
                          Consultoria 360°
                        </CardTitle>
                        <CardDescription className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                          Para sua carteira 🧠
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 relative z-10">
                    <p className="text-gray-300 mb-6">
                      Serviço completo e consultivo, resolvendo as maiores dores dos seus clientes:
                    </p>
                    <div className="space-y-4 mb-6">
                      {[
                        { icon: "📉", text: "Empresários endividados ou que precisam de capital de giro" },
                        { icon: "🏗️", text: "Clientes que precisam levantar recursos com urgência" },
                        { icon: "🏡", text: "Proprietários que podem trocar dívida cara por dívida inteligente" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 bg-green-500/10 border border-green-500/20 rounded-lg p-4"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-gray-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                      <p className="text-green-300 font-semibold">⚡ De 4 a 10 dias úteis para assinar o contrato</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Estratégia Inteligente + Comissionamento */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {/* Estratégia Inteligente */}
              <div className="gradient-border group hover:scale-105 transition-all duration-300">
                <Card className="gradient-border-content border-0 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="p-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-400 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                        5
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                          Estratégia Inteligente
                        </CardTitle>
                        <CardDescription className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                          Substituição 💡
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 relative z-10">
                    <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Lightbulb className="w-6 h-6 text-purple-400" />
                        <p className="text-lg font-semibold text-purple-300">Como funciona:</p>
                      </div>
                      <p className="text-gray-300 mb-4">
                        O cliente quer consórcio, mas precisa do dinheiro agora? Use o Home Equity para liberar rápido!
                      </p>
                      <div className="flex items-center space-x-2">
                        <RefreshCw className="w-5 h-5 text-blue-400" />
                        <p className="text-blue-300">
                          Quando a carta for contemplada, ele substitui a dívida por algo mais barato.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <p className="text-green-400 font-semibold text-sm">Não perde a venda</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                        <p className="text-blue-400 font-semibold text-sm">Não perde o cliente</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                        <p className="text-purple-400 font-semibold text-sm">Ganha duas vezes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Comissionamento */}
              <div className="gradient-border group hover:scale-105 transition-all duration-300">
                <Card className="gradient-border-content border-0 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="p-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-400 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                        6
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white group-hover:text-green-300 transition-colors">
                          Comissionamento à Vista
                        </CardTitle>
                        <CardDescription className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                          + Bonificações 💸
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 relative z-10">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-2xl p-6">
                        <Banknote className="w-12 h-12 text-green-400 mx-auto mb-3" />
                        <p className="text-3xl font-bold text-green-300 mb-2">R$ 20.000+</p>
                        <p className="text-gray-300">por operação sem dificuldades</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: Zap, text: "Pagamentos à vista, direto na sua conta", color: "text-blue-400" },
                        { icon: Award, text: "Campanhas mensais com premiações", color: "text-purple-400" },
                        { icon: TrendingUp, text: "Bônus por volume e incentivos exclusivos", color: "text-green-400" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 bg-gray-900/30 rounded-lg p-3 group-hover:bg-gray-800/50 transition-colors"
                        >
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                          <span className="text-gray-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Por que isso importa */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    Por que isso <span className="text-blue-400 glow-text">importa</span> pra você?
                  </h2>
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
                    <p className="text-2xl text-white font-bold mb-4">
                      Porque você já tem a carteira. Já tem o conhecimento.
                    </p>
                    <p className="text-xl text-gray-300">
                      Falta só uma <span className="text-blue-400 font-semibold">estrutura real</span> para transformar
                      esforço em faturamento.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                    <p className="text-xl text-green-300 font-bold mb-3">E agora você tem:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "CRM de elite (gratuito)",
                        "Leads hiperqualificados",
                        "LP profissional",
                        "Produtos financeiros de verdade",
                        "Suporte estratégico e mentorias",
                        "Comissionamento justo e imediato",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="gradient-border group-hover:scale-105 transition-all duration-500">
                    <div className="gradient-border-content rounded-2xl p-8 bg-gradient-to-br from-blue-500/10 to-green-500/5 text-center">
                      <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:animate-bounce" />
                      <h3 className="text-2xl font-bold text-white mb-4">Transforme Esforço em Faturamento</h3>
                      <div className="space-y-4">
                        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-blue-300 font-semibold">Estrutura Completa</p>
                          <p className="text-gray-300 text-sm">Tudo que você precisa para crescer</p>
                        </div>
                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                          <p className="text-green-300 font-semibold">Suporte Total</p>
                          <p className="text-gray-300 text-sm">Mentoria e acompanhamento</p>
                        </div>
                        <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                          <p className="text-purple-300 font-semibold">Resultados Reais</p>
                          <p className="text-gray-300 text-sm">Comissões que fazem a diferença</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frase Final Impactante */}
            <div className="text-center mb-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-900/80 border border-gray-700 rounded-3xl p-12 backdrop-blur-sm">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <Heart className="w-8 h-8 text-red-400" />
                    <span className="text-6xl">🧠</span>
                    <Heart className="w-8 h-8 text-red-400" />
                  </div>
                  <blockquote className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    "Nos convém que vocês{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 glow-text">
                      cresçam
                    </span>
                    "
                  </blockquote>
                  <p className="text-xl text-gray-300">— Dr. Zeus Capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Candidatura */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Pronto para <span className="text-blue-400 glow-text">Crescer</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Preencha o formulário e nossa equipe entrará em contato com você em até 24 horas.
              </p>
            </div>

            <div className="gradient-border">
              <Card className="gradient-border-content border-0">
                <CardHeader className="bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  <CardTitle className="text-2xl text-white text-center">Formulário de Candidatura</CardTitle>
                  <CardDescription className="text-gray-200 text-center text-lg">
                    Comece sua jornada de sucesso conosco
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-gray-300">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        placeholder="Seu nome completo"
                        className="bg-gray-900/50 border-gray-700 text-white"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-gray-900/50 border-gray-700 text-white"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-gray-300">
                        Telefone *
                      </Label>
                      <Input
                        id="telefone"
                        placeholder="(41) 99934-4641"
                        className="bg-gray-900/50 border-gray-700 text-white"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade" className="text-gray-300">
                        Cidade *
                      </Label>
                      <Input
                        id="cidade"
                        placeholder="Sua cidade"
                        className="bg-gray-900/50 border-gray-700 text-white"
                        value={formData.cidade}
                        onChange={(e) => handleInputChange("cidade", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experiencia" className="text-gray-300">
                      Experiência Profissional
                    </Label>
                    <Textarea
                      id="experiencia"
                      placeholder="Conte-nos sobre sua experiência profissional..."
                      className="bg-gray-900/50 border-gray-700 text-white min-h-[120px]"
                      value={formData.experiencia}
                      onChange={(e) => handleInputChange("experiencia", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivacao" className="text-gray-300">
                      Por que quer ser nosso parceiro?
                    </Label>
                    <Textarea
                      id="motivacao"
                      placeholder="Conte-nos sua motivação..."
                      className="bg-gray-900/50 border-gray-700 text-white min-h-[120px]"
                      value={formData.motivacao}
                      onChange={(e) => handleInputChange("motivacao", e.target.value)}
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4 glow-blue" onClick={handleSubmit}>
                    <Rocket className="w-5 h-5 mr-2" />
                    Quero Fazer Parte do Time
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
