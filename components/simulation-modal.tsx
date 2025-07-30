"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { User, Mail, Phone, Home, CreditCard, Calculator, Send, CheckCircle, TrendingUp, Calendar, DollarSign, Percent } from "lucide-react"

interface SimulationModalProps {
  children: React.ReactNode
}

export function SimulationModal({ children }: SimulationModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    maritalStatus: "",
    propertyValue: "",
    desiredCredit: "",
    propertyType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [selectedTerm, setSelectedTerm] = useState(120) // 10 anos em meses

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowResults(true)
  }

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (numericValue === "") return ""
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100)
  }

  const formatPhone = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (numericValue.length <= 2) {
      return `(${numericValue}`
    } else if (numericValue.length <= 6) {
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`
    } else if (numericValue.length <= 10) {
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 6)}-${numericValue.slice(6)}`
    } else {
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`
    }
  }

  const handleCurrencyChange = (field: string, value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (numericValue === "") {
      handleInputChange(field, "")
      return
    }
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100)
    handleInputChange(field, formattedValue)
  }

  const handlePhoneChange = (field: string, value: string) => {
    const formattedValue = formatPhone(value)
    handleInputChange(field, formattedValue)
  }

  const calculateResults = () => {
    const creditValue = parseFloat(formData.desiredCredit.replace(/[^\d,]/g, '').replace(',', '.')) || 0
    const propertyValue = parseFloat(formData.propertyValue.replace(/[^\d,]/g, '').replace(',', '.')) || 0
    const monthlyRate = 0.0115 // 1,15% ao mês
    const termMonths = selectedTerm
    
    // Cálculo da parcela usando fórmula de financiamento
    const monthlyPayment = creditValue * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
    
    return {
      monthlyPayment,
      creditValue,
      propertyValue
    }
  }

  const formatCurrencyResult = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const generateWhatsAppMessage = () => {
    const results = calculateResults()
    const termYears = selectedTerm / 12
    
    // Mapeamento para nomes legíveis
    const occupationMap: { [key: string]: string } = {
      'empregado-setor-publico': 'Empregado Setor Público',
      'empregado-setor-privado': 'Empregado Setor Privado',
      'profissional-liberal': 'Profissional Liberal',
      'autonomo': 'Autônomo',
      'empresario': 'Empresário',
      'estudante-bolsista': 'Estudante ou Bolsista',
      'em-recolocacao': 'Em Recolocação',
      'aposentado-pensionista': 'Aposentado ou Pensionista',
      'investidor': 'Investidor'
    }
    
    const maritalStatusMap: { [key: string]: string } = {
      'solteiro': 'Solteiro(a)',
      'casado': 'Casado(a)',
      'divorciado': 'Divorciado(a)',
      'uniao-estavel': 'União estável'
    }
    
    const propertyTypeMap: { [key: string]: string } = {
      'apartamento-residencial': 'Apartamento Residencial',
      'casa-residencial': 'Casa Residencial',
      'casa-comercial': 'Casa Comercial',
      'sala-comercial': 'Sala Comercial',
      'terreno': 'Terreno',
      'terreno-rural': 'Terreno Rural'
    }
    
    const message = `🚀 *NOVA SIMULAÇÃO - DR ZEUS CAPITAL*

👤 *DADOS DO CLIENTE:*
• Nome: ${formData.name}
• E-mail: ${formData.email}
• Telefone: ${formData.phone}
• Ocupação: ${occupationMap[formData.occupation] || formData.occupation}
• Estado Civil: ${maritalStatusMap[formData.maritalStatus] || formData.maritalStatus}

🏠 *DADOS DO IMÓVEL:*
• Tipo: ${propertyTypeMap[formData.propertyType] || formData.propertyType}
• Valor do Imóvel: ${formData.propertyValue}
• Crédito Desejado: ${formData.desiredCredit}

📊 *RESULTADO DA SIMULAÇÃO:*
• Valor do Crédito: ${formatCurrencyResult(results.creditValue)}
• Parcela Mensal: ${formatCurrencyResult(results.monthlyPayment)}
• Valor do Imóvel: ${formatCurrencyResult(results.propertyValue)}
• Prazo: ${selectedTerm} meses (${termYears} anos)
• Taxa: 1,15% ao mês

💬 *MENSAGEM:*
${formData.message || "Cliente interessado em simulação"}

---
*Simulação gerada automaticamente pelo site*`

    return encodeURIComponent(message)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-gray-700 text-white overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-400" />
            Simulação Completa
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm">
            Preencha os dados abaixo para receber uma simulação personalizada com as melhores condições do mercado.
          </DialogDescription>
        </DialogHeader>

        {!showResults ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Coluna Esquerda */}
              <div className="space-y-4">
                {/* Informações Pessoais */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      Informações Pessoais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 text-sm">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 h-10"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 text-sm">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 h-10"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 text-sm">Telefone *</Label>
                      <Input
                        id="phone"
                        placeholder="(41) 99934-4641"
                        className="bg-gray-900/50 border-gray-700 text-white"
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange("phone", e.target.value)}
                        maxLength={15}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation" className="text-gray-300 text-sm">Qual sua principal ocupação? *</Label>
                      <Select value={formData.occupation} onValueChange={(value) => handleInputChange("occupation", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-blue-500 h-10">
                          <SelectValue placeholder="Selecione sua ocupação" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="empregado-setor-publico">Empregado Setor Público</SelectItem>
                          <SelectItem value="empregado-setor-privado">Empregado Setor Privado</SelectItem>
                          <SelectItem value="profissional-liberal">Profissional Liberal</SelectItem>
                          <SelectItem value="autonomo">Autônomo</SelectItem>
                          <SelectItem value="empresario">Empresário</SelectItem>
                          <SelectItem value="estudante-bolsista">Estudante ou Bolsista</SelectItem>
                          <SelectItem value="em-recolocacao">Em Recolocação</SelectItem>
                          <SelectItem value="aposentado-pensionista">Aposentado ou Pensionista</SelectItem>
                          <SelectItem value="investidor">Investidor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus" className="text-gray-300 text-sm">Qual seu estado civil? *</Label>
                      <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-blue-500 h-10">
                          <SelectValue placeholder="Selecione seu estado civil" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                          <SelectItem value="casado">Casado(a)</SelectItem>
                          <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                          <SelectItem value="uniao-estavel">União estável</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Informações do Imóvel */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <Home className="w-4 h-4 text-green-400" />
                      Informações do Imóvel
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="propertyValue" className="text-gray-300 text-sm">Valor do Imóvel *</Label>
                      <Input
                        id="propertyValue"
                        value={formData.propertyValue}
                        onChange={(e) => handleCurrencyChange("propertyValue", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 h-10"
                        placeholder="R$ 500.000,00"
                        maxLength={20}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="desiredCredit" className="text-gray-300 text-sm">Crédito Desejado *</Label>
                      <Input
                        id="desiredCredit"
                        value={formData.desiredCredit}
                        onChange={(e) => handleCurrencyChange("desiredCredit", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 h-10"
                        placeholder="R$ 300.000,00"
                        maxLength={20}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType" className="text-gray-300 text-sm">Tipo de Imóvel *</Label>
                      <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-blue-500 h-10">
                          <SelectValue placeholder="Selecione o tipo de imóvel" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="apartamento-residencial">Apartamento Residencial</SelectItem>
                          <SelectItem value="casa-residencial">Casa Residencial</SelectItem>
                          <SelectItem value="casa-comercial">Casa Comercial</SelectItem>
                          <SelectItem value="sala-comercial">Sala Comercial</SelectItem>
                          <SelectItem value="terreno">Terreno</SelectItem>
                          <SelectItem value="terreno-rural">Terreno Rural</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Coluna Direita */}
              <div className="space-y-4">
                {/* Mensagem Adicional */}
                <Card className="bg-gray-800/50 border-gray-700 h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-purple-400" />
                      Informações Adicionais
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300 text-sm">Mensagem (Opcional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 min-h-[200px] resize-none"
                        placeholder="Conte-nos mais sobre sua necessidade ou objetivo com o crédito..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Botão de Envio */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3 glow-blue"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Simulação
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            {/* Header dos Resultados */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sua Simulação Personalizada</h3>
              <p className="text-gray-300 text-sm">
                Resultados baseados nos dados fornecidos com taxa de 1,15% ao mês
              </p>
            </div>

            {/* Slider de Prazo */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-gray-300 text-sm">Prazo de Pagamento</Label>
                <span className="text-blue-400 font-semibold">{selectedTerm} meses</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="12"
                  max="240"
                  step="12"
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1 ano</span>
                  <span>5 anos</span>
                  <span>10 anos</span>
                  <span>15 anos</span>
                  <span>20 anos</span>
                </div>
              </div>
            </div>

            {/* Resultados Calculados */}
            {(() => {
              const results = calculateResults()
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-gray-300">Valor do Crédito</span>
                      </div>
                      <div className="text-xl font-bold text-green-400">
                        {formatCurrencyResult(results.creditValue)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-gray-300">Parcela Mensal</span>
                      </div>
                      <div className="text-xl font-bold text-blue-400">
                        {formatCurrencyResult(results.monthlyPayment)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-gray-300">Valor do Imóvel</span>
                      </div>
                      <div className="text-xl font-bold text-purple-400">
                        {formatCurrencyResult(results.propertyValue)}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })()}

            {/* Escritas */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 border-gray-600">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  Informações Importantes
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Até 180 dias para começar a pagar</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">Taxa base utilizada 1.15%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => {
                  setShowResults(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    occupation: "",
                    maritalStatus: "",
                    propertyValue: "",
                    desiredCredit: "",
                    propertyType: "",
                    message: "",
                  })
                  setIsOpen(false)
                }}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white"
              >
                Nova Simulação
              </Button>
              <Button
                onClick={() => {
                  const message = generateWhatsAppMessage()
                  const whatsappUrl = `https://wa.me/554197344909?text=${message}`
                  window.open(whatsappUrl, '_blank')
                  setIsOpen(false)
                }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 glow-blue"
              >
                <Send className="w-4 h-4 mr-2" />
                Solicitar Proposta
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 