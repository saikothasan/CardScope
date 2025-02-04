export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CardScope",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description:
      "CardScope is a comprehensive BIN/IIN lookup service providing detailed information about credit and debit cards, including issuing banks, card schemes, and types.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "CardScope",
      url: "https://card-scope.vercel.app",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1024",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

