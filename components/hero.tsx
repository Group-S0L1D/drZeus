"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { SimulationModal } from "./simulation-modal"

export function Hero() {
  const [creditValue, setCreditValue] = useState(250000)
  const maxCredit = 1000000
  const minCredit = 50000

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditValue(Number.parseInt(e.target.value))
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getSliderPercentage = () => {
    return ((creditValue - minCredit) / (maxCredit - minCredit)) * 100
  }

  return (
    <section className="bg-black text-white py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300">Maximize suas oportunidades financeiras com até 100% de aprovação</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empréstimo com garantia de imóvel é aqui!
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold">
                <span className="text-blue-400 glow-text">Aqui, seu dinheiro trabalha para você</span>
                <br />
                <span className="text-blue-400 glow-text">e seus sonhos se tornam realidade.</span>
              </h2>
            </div>

            {/* Description */}
            {	/* <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              A Dr. Zeus Capital é a forma mais fácil e segura para realizar seus sonhos através de consórcios e home
              equity com as melhores condições do mercado.
            </p>*/}

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 glow-blue">
                <Link href="/simuladores">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Simulador Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Simulador com Slider */}
          <div className="relative animate-float">
            <div className="gradient-border animate-pulse-glow">
              <div className="gradient-border-content p-8 rounded-xl">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-blue-400">Simulador Rápido</h3>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse glow-blue"></div>
                    </div>
                  </div>

                  {/* Pergunta Principal */}
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-white">De quanto crédito você precisa?</h4>
                    <div className="text-4xl font-bold text-blue-400 glow-text">{formatCurrency(creditValue)}</div>
                  </div>

                  {/* Slider com Efeito de Raio Intenso */}
                  <div className="space-y-6">
                    <div className="relative">
                      {/* Trilha do slider */}
                      <div className="w-full h-4 bg-gray-800 rounded-full relative overflow-hidden shadow-inner">
                        {/* Efeito de raio animado */}
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-600 rounded-full transition-all duration-300 ease-out shadow-lg"
                          style={{ width: `${getSliderPercentage()}%` }}
                        >
                          {/* Múltiplos efeitos de brilho */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/50 via-cyan-200/50 to-blue-300/50 animate-ping opacity-75"></div>

                          {/* Efeito de raio no final */}
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full shadow-2xl glow-blue animate-pulse">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-200 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute inset-1 bg-white rounded-full opacity-60 animate-pulse"></div>

                            {/* Raios saindo do ponto */}
                            <div className="absolute -top-2 -right-2 w-12 h-12 border-2 border-blue-300/30 rounded-full animate-spin"></div>
                            <div className="absolute -top-4 -right-4 w-16 h-16 border border-cyan-300/20 rounded-full animate-ping"></div>
                          </div>

                          {/* Efeito de faísca */}
                          <div
                            className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping opacity-90"
                            style={{ right: "20%" }}
                          ></div>
                          <div
                            className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
                            style={{ right: "40%" }}
                          ></div>
                          <div
                            className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-blue-300 rounded-full animate-ping"
                            style={{ right: "60%" }}
                          ></div>
                        </div>
                      </div>

                      {/* Input range invisível */}
                      <input
                        type="range"
                        min={minCredit}
                        max={maxCredit}
                        step={10000}
                        value={creditValue}
                        onChange={handleSliderChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>

                    {/* Labels min/max */}
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{formatCurrency(minCredit)}</span>
                      <span>{formatCurrency(maxCredit)}</span>
                    </div>
                  </div>

                  {/* Resultados Estimados */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm relative overflow-hidden">
                      <div className="text-sm text-gray-400 mb-2">Parcela Estimada</div>
                      <div className="text-xl font-bold text-green-400 glow-text blur-sm">
                        {formatCurrency(creditValue * 0.0109)}
                      </div>
                      <div className="text-xs text-gray-500">por mês</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-sm text-gray-400 mb-2">Taxa Estimada</div>
                      <div className="text-xl font-bold text-blue-400 glow-text">1,09%</div>
                      <div className="text-xs text-gray-500">ao mês</div>
                    </div>
                  </div>

                  {/* CTA do Simulador */}
                  <SimulationModal>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4 glow-blue">
                      <Zap className="w-5 h-5 mr-2" />
                      Ver Simulação Completa
                    </Button>
                  </SimulationModal>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">15 anos</div>
                      <div className="text-xs text-gray-500">de mercado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">R$ 2,5B</div>
                      <div className="text-xs text-gray-500">transacionados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">50k+</div>
                      <div className="text-xs text-gray-500">clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
