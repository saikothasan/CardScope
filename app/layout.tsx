import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import React from 'react'; // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CardScope - Professional Bank Identification Number (BIN) Lookup",
  description: "Access CardScope's comprehensive database of 343,063 BIN numbers and 13,348 banks. Get detailed information about issuing banks, card schemes, types, and more for any credit or debit card.",
  keywords: "BIN, IIN, bank identification number, issuer identification number, credit card, debit card, payment processing, financial services",
  authors: [{ name: "CardScope Team" }],
  openGraph: {
    title: "CardScope - Professional BIN Lookup Service",
    description: "Get detailed information about any credit or debit card's issuing bank, scheme, and more with CardScope's comprehensive BIN database.",
    url: "https://www.cardscope.io",
    siteName: "CardScope",
    images: [
      {
        url: "https://www.cardscope.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CardScope - BIN Lookup Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CardScope - Professional BIN Lookup Service",
    description: "Get detailed information about any credit or debit card's issuing bank, scheme, and more with CardScope's comprehensive BIN database.",
    images: ["https://www.cardscope.io/twitter-image.jpg"],
    creator: "@cardscopeio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: "https://www.cardscope.io/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
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
