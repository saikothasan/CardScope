import { CheckCircle, Database, Globe, Lock, Zap, Code } from "lucide-react"

const features = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Extensive Database",
    description: "Access information on over 340,000 BIN/IIN numbers and 13,000+ banks worldwide.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Lookups",
    description: "Get instant results with our high-performance API, perfect for real-time applications.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Coverage",
    description: "Comprehensive data for card issuers from countries all around the world.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure & Reliable",
    description: "Bank-grade security measures to protect your data and ensure 99.9% uptime.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer Friendly",
    description: "Easy-to-use API with clear documentation and SDKs for popular programming languages.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Always Up-to-date",
    description: "Regular updates ensure you always have access to the most current BIN/IIN information.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

