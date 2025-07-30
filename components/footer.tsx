import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 relative">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/dr-zeus-logo-horizontal.png" alt="Dr. Zeus Capital" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluções financeiras inteligentes para realizar seus sonhos através de consórcios e home equity.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quem-somos" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Seja Parceiro
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">(41) 99934-4641</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">contato@drzeuscapital.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">
                  Rua Visconde de Nácar, 1440
                  <br />
                  Curitiba - PR
                </span>
              </div>
            </div>
          </div>

          {/* Certificações e Selos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Certificações</h3>
            <div className="space-y-4">
              {/* ReclameAQUI Badge */}
              <div className="flex flex-col items-start space-y-2">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  ReclameAQUI
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-xs">Avaliação 0-10</div>
                  <div className="text-white font-bold text-xl">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dr. Zeus Capital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
