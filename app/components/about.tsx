export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About BINList.io</h2>
        <div className="prose prose-lg prose-gray max-w-none">
          <p>
            Cardscop is the leading open-source database for Bank Identification Numbers (BIN) and Issuer
            Identification Numbers (IIN). Our mission is to provide accurate, up-to-date information about payment card
            metadata to businesses, developers, and financial institutions worldwide.
          </p>
          <p>
            With a vast database covering over 340,000 BIN/IIN numbers and 13,000+ banks, we offer comprehensive details
            about card issuers, including:
          </p>
          <ul>
            <li>Card scheme (Visa, Mastercard, Amex, etc.)</li>
            <li>Card type (Credit, Debit, Prepaid)</li>
            <li>Issuing bank information</li>
            <li>Country of issuance</li>
            <li>Card level (Classic, Gold, Platinum, etc.)</li>
          </ul>
          <p>
            Whether you're a developer integrating payment systems, a business optimizing your payment processes, or a
            financial institution managing risk, BINList.io provides the data you need to make informed decisions and
            enhance your operations.
          </p>
        </div>
      </div>
    </section>
  )
}

