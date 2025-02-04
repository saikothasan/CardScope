import Link from "next/link"
import { TextIcon as Telegram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CardScope</h3>
            <p className="text-gray-400">
              Providing comprehensive BIN/IIN lookup services for businesses and developers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@cardscope.io</p>
            <p className="text-gray-400">Twitter: @cardscopeio</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-400">&copy; 2025 CardScope. All rights reserved.</p>
          <a
            href="https://t.me/drkingbd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            <Telegram className="mr-2 h-5 w-5" />
            Join our Telegram
          </a>
        </div>
      </div>
    </footer>
  )
}

