import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          CardScope
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </li>
            <li>
              <Button variant="outline">API Access</Button>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
                  API Access
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

