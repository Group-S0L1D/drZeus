"use client"

import { Star, Shield, Award } from "lucide-react"

export function RatingsSection() {
  const ratings = [
    {
      platform: "Google Reviews",
      icon: "⭐",
      rating: "4.8",
      maxRating: "5.0",
      description: "Avaliação 0-5",
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "shadow-blue-500/50",
    },
    {
      platform: "Reclame AQUI",
      icon: "🏆",
      rating: "9.2",
      maxRating: "10",
      description: "Avaliação 0-10",
      gradient: "from-orange-500 to-yellow-400",
      glowColor: "shadow-orange-500/50",
    },
    {
      platform: "Banco Central",
      icon: "🛡️",
      rating: "A+",
      maxRating: "",
      description: "Certificação",
      gradient: "from-green-500 to-emerald-400",
      glowColor: "shadow-green-500/50",
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A melhor avaliação da <span className="text-blue-400 glow-text">categoria</span>.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reconhecimento e confiança de milhares de clientes e órgãos reguladores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ratings.map((rating, index) => (
            <div key={index} className="text-center group">
              <div
                className={`relative bg-gray-900/50 border border-gray-700 rounded-2xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-transparent group-hover:shadow-2xl group-hover:${rating.glowColor}`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${rating.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                ></div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${rating.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${rating.gradient} mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold">{rating.icon}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {rating.platform}
                  </h3>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-1 group-hover:glow-text transition-all">
                      {rating.rating}
                      {rating.maxRating && <span className="text-2xl text-gray-400">/{rating.maxRating}</span>}
                    </div>
                    <div className="text-sm text-gray-400">{rating.description}</div>
                  </div>

                  {/* Stars for Google Reviews */}
                  {rating.platform === "Google Reviews" && (
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Badge for Reclame AQUI */}
                  {rating.platform === "Reclame AQUI" && (
                    <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2">
                      <Award className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-300 text-sm font-medium">Excelente</span>
                    </div>
                  )}

                  {/* Badge for Banco Central */}
                  {rating.platform === "Banco Central" && (
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm font-medium">Regulamentado</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
