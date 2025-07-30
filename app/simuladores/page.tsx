"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Home, CreditCard, TrendingUp, Sparkles, Zap, CheckCircle, X, ArrowRight } from "lucide-react"
import { SimulationModal } from "@/components/simulation-modal"

export default function SimuladoresPage() {
  // Estados para Consórcio
  const [consorcioData, setConsorcioData] = useState({
    valor: 300000,
    prazo: 180,
    renda: 5000,
  })

  // Estados para Home Equity
  const [homeEquityData, setHomeEquityData] = useState({
    valorImovel: 500000,
    valorDesejado: 200000,
    prazo: 180,
  })

  const [consorcioResult, setConsorcioResult] = useState<any>(null)
  const [homeEquityResult, setHomeEquityResult] = useState<any>(null)

  // Limites para os sliders
  const consorcioLimits = {
    valor: { min: 100000, max: 10000000, step: 10000 },
    prazo: { min: 120, max: 240, step: 12 },
    renda: { min: 2000, max: 50000, step: 500 },
  }

  const homeEquityLimits = {
    valorImovel: { min: 200000, max: 10000000, step: 50000 },
    valorDesejado: { min: 50000, max: 10000000, step: 10000 },
    prazo: { min: 120, max: 360, step: 12 },
  }

  // Cálculo automático do Consórcio
  useEffect(() => {
    const taxa = 0.003
    const parcela = (consorcioData.valor * (1 + taxa)) / consorcioData.prazo

    setConsorcioResult({
      valorTotal: consorcioData.valor,
      parcela: parcela,
      prazo: consorcioData.prazo,
      taxaAdmin: taxa * 100,
      rendaCompativel: parcela <= consorcioData.renda * 0.3,
    })
  }, [consorcioData])

  // Cálculo automático do Home Equity
  useEffect(() => {
    const maxCredito = homeEquityData.valorImovel * 0.6
    const taxa = 0.0115
    const parcela = homeEquityData.valorDesejado * taxa

    setHomeEquityResult({
      valorImovel: homeEquityData.valorImovel,
      maxCredito,
      valorSolicitado: homeEquityData.valorDesejado,
      parcela,
      taxa: taxa * 100,
      aprovado: homeEquityData.valorDesejado <= maxCredito,
    })
  }, [homeEquityData])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getSliderPercentage = (value: number, min: number, max: number) => {
    return ((value - min) / (max - min)) * 100
  }

  const SliderWithLightning = ({
    value,
    onChange,
    min,
    max,
    step,
    label,
    color = "blue",
  }: {
    value: number
    onChange: (value: number) => void
    min: number
    max: number
    step: number
    label: string
    color?: string
  }) => {
    const percentage = getSliderPercentage(value, min, max)
    const colorClasses = {
      blue: "from-blue-500 via-cyan-300 to-blue-600",
      green: "from-green-500 via-emerald-300 to-green-600",
      purple: "from-purple-500 via-violet-300 to-purple-600",
    }

    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{label}</span>
          <span className="text-lg font-bold text-white">
            {typeof value === "number" && value >= 1000 ? formatCurrency(value) : `${value} meses`}
          </span>
        </div>
        <div className="relative">
          <div className="w-full h-3 bg-gray-800 rounded-full relative overflow-hidden shadow-inner">
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} rounded-full transition-all duration-300 ease-out shadow-lg`}
              style={{ width: `${percentage}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg glow-blue animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-200 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 border border-blue-300/30 rounded-full animate-spin"></div>
              </div>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full animate-ping opacity-90"
                style={{ right: "30%" }}
              ></div>
            </div>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{typeof min === "number" && min >= 1000 ? formatCurrency(min) : `${min} meses`}</span>
          <span>{typeof max === "number" && max >= 1000 ? formatCurrency(max) : `${max} meses`}</span>
        </div>
      </div>
    )
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
              <span className="text-blue-300">Simulações gratuitas e sem compromisso</span>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8 glow-blue">
                <Calculator className="w-10 h-10 text-blue-400" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-blue-400 glow-text">Simuladores</span> Financeiros
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Faça simulações gratuitas e descubra as melhores condições para realizar seus sonhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador de Consórcio */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6 glow-blue">
                <Home className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Simulador de <span className="text-blue-400 glow-text">Consórcio</span>
              </h2>
              <p className="text-xl text-gray-300">Realize o sonho da casa própria sem juros</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="gradient-border">
                <Card className="gradient-border-content border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <CardTitle className="text-2xl text-white">Configure sua Simulação</CardTitle>
                    <CardDescription className="text-blue-200 text-lg">
                      Ajuste os valores usando as barras - Cálculo automático
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8 p-8">
                    <SliderWithLightning
                      value={consorcioData.valor}
                      onChange={(value) => setConsorcioData({ ...consorcioData, valor: value })}
                      min={consorcioLimits.valor.min}
                      max={consorcioLimits.valor.max}
                      step={consorcioLimits.valor.step}
                      label="Valor do Imóvel"
                      color="blue"
                    />

                    <SliderWithLightning
                      value={consorcioData.prazo}
                      onChange={(value) => setConsorcioData({ ...consorcioData, prazo: value })}
                      min={consorcioLimits.prazo.min}
                      max={consorcioLimits.prazo.max}
                      step={consorcioLimits.prazo.step}
                      label="Prazo"
                      color="purple"
                    />

                    <SliderWithLightning
                      value={consorcioData.renda}
                      onChange={(value) => setConsorcioData({ ...consorcioData, renda: value })}
                      min={consorcioLimits.renda.min}
                      max={consorcioLimits.renda.max}
                      step={consorcioLimits.renda.step}
                      label="Sua Renda Mensal"
                      color="green"
                    />


                  </CardContent>
                </Card>
              </div>

              {/* Resultado Consórcio */}
              <div className="gradient-border">
                <Card className="gradient-border-content border-0">
                  <CardHeader className="bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                    <CardTitle className="text-green-400 text-2xl">Resultado da Simulação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 p-8">
                    {consorcioResult && (
                      <>
                        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl backdrop-blur-sm">
                          <div className="text-sm text-blue-400 mb-2">Valor do Imóvel</div>
                          <div className="text-3xl font-bold text-blue-300 glow-text">
                            {formatCurrency(consorcioResult.valorTotal)}
                          </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl backdrop-blur-sm relative overflow-hidden">
                          <div className="text-sm text-green-400 mb-2">Parcela Mensal</div>
                          <div className="text-3xl font-bold text-green-300 glow-text blur-md">
                            {formatCurrency(consorcioResult.parcela)}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                            <div className="text-sm text-gray-400">Prazo</div>
                            <div className="text-xl font-semibold text-white">{consorcioResult.prazo} meses</div>
                          </div>
                          <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                            <div className="text-sm text-gray-400">Taxa Admin.</div>
                            <div className="text-xl font-semibold text-white">{consorcioResult.taxaAdmin}%</div>
                          </div>
                        </div>



                        <SimulationModal>
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-4 glow-blue">
                            Ver Simulação Completa
                          </Button>
                        </SimulationModal>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador de Home Equity */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full mb-6 glow-blue">
                <CreditCard className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Simulador de <span className="text-green-400 glow-text">Home Equity</span>
              </h2>
              <p className="text-xl text-gray-300">Use seu imóvel como garantia e obtenha crédito</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="gradient-border">
                <Card className="gradient-border-content border-0">
                  <CardHeader className="bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                    <CardTitle className="text-2xl text-white">Configure sua Simulação</CardTitle>
                    <CardDescription className="text-green-200 text-lg">
                      Ajuste os valores usando as barras - Cálculo automático
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8 p-8">
                    <SliderWithLightning
                      value={homeEquityData.valorImovel}
                      onChange={(value) => setHomeEquityData({ ...homeEquityData, valorImovel: value })}
                      min={homeEquityLimits.valorImovel.min}
                      max={homeEquityLimits.valorImovel.max}
                      step={homeEquityLimits.valorImovel.step}
                      label="Valor do Imóvel"
                      color="green"
                    />

                    <SliderWithLightning
                      value={homeEquityData.valorDesejado}
                      onChange={(value) => setHomeEquityData({ ...homeEquityData, valorDesejado: value })}
                      min={homeEquityLimits.valorDesejado.min}
                      max={homeEquityLimits.valorDesejado.max}
                      step={homeEquityLimits.valorDesejado.step}
                      label="Valor Desejado"
                      color="blue"
                    />

                    <SliderWithLightning
                      value={homeEquityData.prazo}
                      onChange={(value) => setHomeEquityData({ ...homeEquityData, prazo: value })}
                      min={homeEquityLimits.prazo.min}
                      max={homeEquityLimits.prazo.max}
                      step={homeEquityLimits.prazo.step}
                      label="Prazo Desejado"
                      color="purple"
                    />


                  </CardContent>
                </Card>
              </div>

              {/* Resultado Home Equity */}
              <div className="gradient-border">
                <Card className="gradient-border-content border-0">
                  <CardHeader
                    className={`${homeEquityResult?.aprovado ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20" : "bg-gradient-to-r from-red-500/20 to-red-600/20"}`}
                  >
                    <CardTitle
                      className={homeEquityResult?.aprovado ? "text-green-400 text-2xl" : "text-red-400 text-2xl"}
                    >
                      {homeEquityResult?.aprovado
                        ? "Pré-aprovado!"
                        : homeEquityResult
                          ? "Valor acima do limite"
                          : "Resultado da Simulação"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 p-8">
                    {homeEquityResult && (
                      <>
                        <div className="bg-gray-500/10 border border-gray-500/20 p-6 rounded-xl backdrop-blur-sm">
                          <div className="text-sm text-gray-400 mb-2">Valor do Imóvel</div>
                          <div className="text-2xl font-bold text-gray-300">
                            {formatCurrency(homeEquityResult.valorImovel)}
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl backdrop-blur-sm">
                          <div className="text-sm text-blue-400 mb-2">Crédito Máximo (60%)</div>
                          <div className="text-3xl font-bold text-blue-300 glow-text">
                            {formatCurrency(homeEquityResult.maxCredito)}
                          </div>
                        </div>

                        {homeEquityResult.aprovado ? (
                          <>
                            <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl backdrop-blur-sm relative overflow-hidden">
                              <div className="text-sm text-green-400 mb-2">Parcela Mensal (juros)</div>
                              <div className="text-3xl font-bold text-green-300 glow-text blur-md">
                                {formatCurrency(homeEquityResult.parcela)}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70"></div>
                            </div>

                            <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                              <div className="text-sm text-gray-400">Taxa de Juros</div>
                              <div className="text-xl font-semibold text-white">{homeEquityResult.taxa}% ao mês</div>
                            </div>

                            <SimulationModal>
                              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-4 glow-blue">
                                Ver Simulação Completa
                              </Button>
                            </SimulationModal>
                          </>
                        ) : (
                          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl backdrop-blur-sm text-center">
                            <p className="text-red-300 mb-4">
                              O valor solicitado excede 60% do valor do imóvel. Tente um valor menor ou entre em contato
                              conosco.
                            </p>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                              Falar com Consultor
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare as Modalidades */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Compare as <span className="text-blue-400 glow-text">Modalidades</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entenda as principais diferenças entre Consórcio e Home Equity para escolher a melhor opção.
              </p>
            </div>

            <div className="gradient-border">
              <div className="gradient-border-content rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 p-1">
                  <div className="bg-gray-900/90 rounded-xl backdrop-blur-sm">
                    {/* Header da tabela */}
                    <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-700">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-300">Características</h3>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <Home className="w-6 h-6 text-blue-400" />
                          <h3 className="text-xl font-bold text-blue-400">Consórcio</h3>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <CreditCard className="w-6 h-6 text-green-400" />
                          <h3 className="text-xl font-bold text-green-400">Home Equity</h3>
                        </div>
                      </div>
                    </div>

                    {/* Linhas da tabela */}
                    {[
                      {
                        caracteristica: "Valor Mínimo",
                        consorcio: "R$ 50.000",
                        homeEquity: "R$ 100.000",
                      },
                      {
                        caracteristica: "Valor Máximo",
                        consorcio: "R$ 10.000.000",
                        homeEquity: "60% do imóvel",
                      },
                      {
                        caracteristica: "Prazo",
                        consorcio: "60 a 180 meses",
                        homeEquity: "36 a 240 meses",
                      },
                      {
                        caracteristica: "Taxa de Juros",
                        consorcio: "Sem juros",
                        homeEquity: "A partir de 1,15% a.m.",
                        consorcioIcon: CheckCircle,
                        homeEquityIcon: TrendingUp,
                      },
                      {
                        caracteristica: "Garantia",
                        consorcio: "Não necessária",
                        homeEquity: "Imóvel como garantia",
                        consorcioIcon: CheckCircle,
                        homeEquityIcon: Home,
                      },
                      {
                        caracteristica: "Liberação",
                        consorcio: "Por sorteio/lance",
                        homeEquity: "Imediata após aprovação",
                        consorcioIcon: TrendingUp,
                        homeEquityIcon: Zap,
                      },
                      {
                        caracteristica: "Carência",
                        consorcio: "Não há",
                        homeEquity: "Até 6 meses",
                        consorcioIcon: X,
                        homeEquityIcon: CheckCircle,
                      },
                    ].map((row, index) => (
                      <div
                        key={index}
                        className={`grid grid-cols-3 gap-4 p-6 ${index !== 6 ? "border-b border-gray-800" : ""} hover:bg-gray-800/30 transition-colors group`}
                      >
                        <div className="flex items-center">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                            {row.caracteristica}
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            {row.consorcioIcon && <row.consorcioIcon className="w-4 h-4 text-blue-400 opacity-70" />}
                            <span className="text-blue-300 group-hover:text-blue-200 transition-colors">
                              {row.consorcio}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            {row.homeEquityIcon && <row.homeEquityIcon className="w-4 h-4 text-green-400 opacity-70" />}
                            <span className="text-green-300 group-hover:text-green-200 transition-colors">
                              {row.homeEquity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}
