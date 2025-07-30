"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, Sparkles, Send, ArrowRight } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    aceito: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    const assuntoMap: { [key: string]: string } = {
      'consorcio': 'Consórcio',
      'home-equity': 'Home Equity',
      'simulacao': 'Simulação',
      'duvidas': 'Dúvidas Gerais',
      'suporte': 'Suporte',
      'outros': 'Outros'
    }

    const message = encodeURIComponent(`📞 *NOVA MENSAGEM - DR ZEUS CAPITAL*

👤 *DADOS DO CLIENTE:*
• Nome: ${formData.nome}
• E-mail: ${formData.email}
• Telefone: ${formData.telefone}
• Assunto: ${assuntoMap[formData.assunto as keyof typeof assuntoMap] || formData.assunto}

💬 *MENSAGEM:*
${formData.mensagem}

✅ *ACEITOU COMUNICAÇÕES:* ${formData.aceito ? 'Sim' : 'Não'}

---
*Mensagem gerada automaticamente pelo site*`)

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
          <div className="max-w-4xl mx-auto text-center">
            {/*<div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8 glow-blue">
              <MessageCircle className="w-10 h-10 text-blue-400" />
            </div>*/}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
              <span className="text-blue-300">Estamos aqui para ajudar você</span>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8 glow-blue">
                <MessageCircle className="w-10 h-10 text-blue-400" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Entre em <span className="text-blue-400 glow-text">Contato</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nossa equipe de especialistas está pronta para esclarecer suas dúvidas e ajudar você a realizar seus
                sonhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato e Formulário */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Fale <span className="text-blue-400 glow-text">Conosco</span>
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Escolha a forma mais conveniente para entrar em contato. Nossa equipe está disponível para atendê-lo
                    com a atenção e cuidado que você merece.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Telefone */}
                  <div className="gradient-border">
                    <div className="gradient-border-content p-6 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center glow-blue">
                          <Phone className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Telefone</h3>
                          <p className="text-gray-300">(41) 99934-4641</p>
                          <p className="text-sm text-gray-400">Segunda a Sexta, 8h às 18h</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="gradient-border">
                    <div className="gradient-border-content p-6 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center glow-blue">
                          <MessageCircle className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                          <p className="text-gray-300">(41) 99934-4641</p>
                          <p className="text-sm text-gray-400">Atendimento rápido e personalizado</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="gradient-border">
                    <div className="gradient-border-content p-6 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center glow-blue">
                          <Mail className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">E-mail</h3>
                          <p className="text-gray-300">contato@drzeuscapital.com.br</p>
                          <p className="text-sm text-gray-400">Resposta em até 24 horas</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div className="gradient-border">
                    <div className="gradient-border-content p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center glow-blue">
                          <MapPin className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Endereço</h3>
                          <p className="text-gray-300">
                            Rua Visconde de Nácar, 1440, 20º andar
                            <br />
                            Curitiba, Paraná - PR
                            <br />
                            CEP: 80410-201
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="gradient-border">
                    <div className="gradient-border-content p-6 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center glow-blue">
                          <Clock className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Horário de Funcionamento</h3>
                          <p className="text-gray-300">Segunda a Sexta: 8h às 20h</p>
                          <p className="text-gray-300"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <div className="gradient-border">
                <Card className="gradient-border-content border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <CardTitle className="text-2xl text-white">Envie sua Mensagem</CardTitle>
                    <CardDescription className="text-gray-200 text-lg">
                      Preencha o formulário e entraremos em contato com você
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
                        <Label htmlFor="assunto" className="text-gray-300">
                          Assunto *
                        </Label>
                        <Select
                          onValueChange={(value) => handleInputChange("assunto", value)}
                          defaultValue={formData.assunto}
                        >
                          <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700">
                            <SelectItem value="consorcio">Consórcio</SelectItem>
                            <SelectItem value="home-equity">Home Equity</SelectItem>
                            <SelectItem value="simulacao">Simulação</SelectItem>
                            <SelectItem value="duvidas">Dúvidas Gerais</SelectItem>
                            <SelectItem value="suporte">Suporte</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-gray-300">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Digite sua mensagem aqui..."
                        className="bg-gray-900/50 border-gray-700 text-white min-h-[150px]"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="aceito"
                        className="mt-1 w-4 h-4 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
                        checked={formData.aceito}
                        onChange={(e) => handleInputChange("aceito", e.target.checked)}
                      />
                      <label htmlFor="aceito" className="text-sm text-gray-300">
                        Aceito receber comunicações da Dr. Zeus Capital e concordo com a{" "}
                        <a href="#" className="text-blue-400 hover:underline">
                          Política de Privacidade
                        </a>
                      </label>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4 glow-blue"
                      onClick={handleSubmit}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Perguntas <span className="text-blue-400 glow-text">Frequentes</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  pergunta: "Como funciona o processo de simulação?",
                  resposta:
                    "Nossa simulação é 100% gratuita e sem compromisso. Você preenche os dados, recebe o resultado na hora e nossa equipe entra em contato para esclarecer dúvidas.",
                },
                {
                  pergunta: "O que é analisado para que eu consiga crédito com garantia de imóvel?",
                  resposta:
                    "O principal é o imóvel, que será a base garantidora do crédito. Você pode estar com restrições no nome, mas ainda assim conseguirá o empréstimo se o imóvel estiver em condições para isso.",
                },
                {
                  pergunta: "Qual tipo de imóvel é aceito?",
                  resposta:
                    "Aceitamos apartamentos, casas, casas em condomínio, imóveis comerciais e terrenos em condomínio como garantia para o empréstimo.",
                },
                {
                  pergunta: "Quais os benefícios do empréstimo com imóvel em garantia?",
                  resposta:
                    "O empréstimo com imóvel em garantia oferece vantagens como taxas de juros mais baixas e prazos de pagamento longos, de até 20 anos. Você pode obter valores elevados de crédito utilizando seu imóvel como garantia, sem necessidade de vendê-lo. O processo é totalmente digital, proporcionando conveniência e rapidez. É ideal para investir em negócios, realizar reformas ou quitar dívidas, com segurança e confiança.",
                },
              ].map((faq, index) => (
                <div key={index} className="gradient-border">
                  <div className="gradient-border-content p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">{faq.pergunta}</h3>
                    <p className="text-gray-300">{faq.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
