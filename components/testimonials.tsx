import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content:
        "Consegui realizar o sonho da casa própria através do consórcio da Dr. Zeus. Processo rápido e sem complicações!",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "João Santos",
      role: "Engenheiro",
      content: "O home equity me ajudou a expandir meu negócio. Taxas justas e atendimento excepcional.",
      rating: 5,
      avatar: "JS",
    },
    {
      name: "Ana Costa",
      role: "Médica",
      content: "Equipe muito profissional e transparente. Recomendo a Dr. Zeus Capital para todos.",
      rating: 5,
      avatar: "AC",
    },
  ]

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-400">Histórias reais de pessoas que realizaram seus sonhos conosco</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="gradient-border group hover:scale-105 transition-all duration-300">
              <Card className="gradient-border-content border-0 h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
