import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Página em Desenvolvimento</h1>
        <p className="text-gray-300 mb-8">Esta página será implementada em breve.</p>
        <Button asChild>
          <Link href="/">Voltar ao Início</Link>
            </Button>
          </div>
    </div>
  )
}
