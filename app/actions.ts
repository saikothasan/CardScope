"use server"

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

export async function lookupBin(bin: string): Promise<BinResponse> {
  try {
    const response = await fetch(`https://binlist.io/lookup/${bin}/`)
    if (!response.ok) throw new Error("Failed to fetch")

    const data = await response.json()
    return data
  } catch (error) {
    console.error("BIN lookup error:", error)
    throw new Error("Failed to lookup BIN")
  }
}

