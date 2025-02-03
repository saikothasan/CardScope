import "@/app/globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BINList.io - Professional Bank Identification Number Lookup",
  description:
    "Access our comprehensive database of BIN/IIN numbers. Get detailed information about issuing banks, card schemes, types, and more for any credit or debit card.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'