"use client"

import { useState } from "react"
import { CreditCard, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { lookupBin } from "./actions"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface BinResponse {
  success: boolean
  number: {
    iin: string
    length: number
    luhn: boolean
  }
  scheme: string
  type: string
  category: string
  country: {
    alpha2: string
    alpha3: string
    name: string
    emoji: string
  }
  bank: {
    name: string
    phone: string
    url: string
  }
}

export default function BinLookup() {
  const [binNumber, setBinNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<BinResponse | null>(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!binNumber || binNumber.length < 6) {
      setError("Please enter at least 6 digits")
      return
    }

    setLoading(true)
    setError("")
    setData(null)

    try {
      const result = await lookupBin(binNumber)
      if (!result.success) {
        throw new Error("BIN not found")
      }
      setData(result)
    } catch (err) {
      setError("Failed to lookup BIN number")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>BIN Lookup</CardTitle>
          <CardDescription>Enter the first 6-8 digits of a card number to get detailed information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter BIN/IIN (e.g., 601120)"
                value={binNumber}
                onChange={(e) => setBinNumber(e.target.value.replace(/\D/g, "").slice(0, 8))}
                className="pl-10 pr-12 py-6 text-2xl tracking-wider"
              />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Button type="submit" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2" disabled={loading}>
                {loading ? "Searching..." : "Search"}
              </Button>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>

      {data && data.success && (
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>BIN Information</CardTitle>
            <CardDescription>Details for BIN/IIN: {data.number.iin}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Details</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      IIN/BIN: <span className="text-gray-900 font-medium">{data.number.iin}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Length: <span className="text-gray-900 font-medium">{data.number.length} digits</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Luhn: <span className="text-gray-900 font-medium">{data.number.luhn ? "Valid" : "Invalid"}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Scheme: <span className="text-gray-900 font-medium">{data.scheme}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Type: <span className="text-gray-900 font-medium">{data.type}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Category: <span className="text-gray-900 font-medium">{data.category}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Country</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="mr-2 text-2xl">{data.country.emoji}</span>
                      <span className="text-gray-900 font-medium">{data.country.name}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Code:{" "}
                      <span className="text-gray-900 font-medium">
                        {data.country.alpha2} / {data.country.alpha3}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Name: <span className="text-gray-900 font-medium">{data.bank.name}</span>
                    </p>
                    {data.bank.phone && (
                      <p className="text-sm text-gray-600">
                        Phone:{" "}
                        <a href={`tel:${data.bank.phone}`} className="text-blue-600 hover:underline font-medium">
                          {data.bank.phone}
                        </a>
                      </p>
                    )}
                    {data.bank.url && (
                      <p className="text-sm text-gray-600">
                        Website:{" "}
                        <a
                          href={`https://${data.bank.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          {data.bank.url}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

