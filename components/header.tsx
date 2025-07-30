"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/images/dr-zeus-logo-horizontal.png" alt="Dr. Zeus Capital" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/servicos" className="hover:text-blue-400 transition-colors">
                Serviços
              </Link>
              <Link href="/simuladores" className="hover:text-blue-400 transition-colors">
                Simuladores
              </Link>
              <Link href="/parceiros" className="hover:text-blue-400 transition-colors">
                Parceiros
              </Link>
              <Link href="/contato" className="hover:text-blue-400 transition-colors">
                Contato
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/parceiros">Área do Parceiro</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-700">
              <div className="space-y-4">
                <Link href="/servicos" className="block hover:text-blue-400">
                  Serviços
                </Link>
                <Link href="/simuladores" className="block hover:text-blue-400">
                  Simuladores
                </Link>
                <Link href="/parceiros" className="block hover:text-blue-400">
                  Parceiros
                </Link>
                <Link href="/contato" className="block hover:text-blue-400">
                  Contato
                </Link>
                <div className="pt-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/parceiros">Área do Parceiro</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
