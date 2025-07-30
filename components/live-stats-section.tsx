"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"

export function LiveStatsSection() {
  const [currentValue, setCurrentValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Calcular dias desde 1º de janeiro
  const getCurrentDay = () => {
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const diffTime = now.getTime() - startOfYear.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // Gerar valor quebrado consistente baseado no dia atual
  const getDailyValue = () => {
    const day = getCurrentDay()
    // Usar o dia como seed para gerar um valor quebrado consistente
    const seed = day % 100
    const baseValue = 400000
    const variation = seed * 1000 + seed * 100 // Cria variações como 369.000, 411.000, etc
    return baseValue + variation - 50000 // Ajusta para ficar em torno de 400k
  }

  const currentDay = getCurrentDay()
  const totalDays = 365
  const dailyIncrease = getDailyValue()

  // Valor base que cresce com o valor quebrado por dia
  const baseValue = 85000000 // R$ 85 milhões como base

  useEffect(() => {
    setIsVisible(true)

    // Animar o valor total
    const targetValue = baseValue + dailyIncrease * currentDay
    const duration = 2000 // 2 segundos
    const steps = 50
    const increment = targetValue / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCurrentValue(Math.floor(increment * step))

      if (step >= steps) {
        setCurrentValue(targetValue)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título Principal */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Enquanto você está <span className="text-blue-400 glow-text">aqui</span>!
            </h2>
            <p className="text-xl text-gray-300">Liberamos recursos para mais um cliente:</p>
          </div>

          {/* Contador de Dias */}
          <div className="mb-12">
            <div className="text-2xl lg:text-3xl text-gray-300 mb-2">
              Em <span className="text-blue-400 font-bold">{currentDay}</span> /{" "}
              <span className="text-gray-400">{totalDays}</span> dias liberamos
            </div>
          </div>

          {/* Valor Principal */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/50 border border-gray-700 rounded-2xl p-12 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-400 text-sm font-medium">VALOR ATUALIZADO EM TEMPO REAL</span>
              </div>

              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"}`}
              >
                <div className="text-6xl lg:text-7xl font-bold text-white mb-4 glow-text">
                  {formatCurrency(currentValue)}
                </div>

                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg font-semibold">{formatCurrency(dailyIncrease)} liberados hoje</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem Final 
          <div className="mt-8">
            <p className="text-gray-400 text-lg">
              Mais um sonho sendo realizado a cada <span className="text-blue-400 font-semibold">6 minutos</span>
            </p>
          </div>*/}
        </div>
      </div>
    </section>
  )
}
