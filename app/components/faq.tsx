import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a BIN/IIN number?",
    answer:
      "A Bank Identification Number (BIN), also known as an Issuer Identification Number (IIN), is the first 6 to 8 digits of a payment card number. It identifies the institution that issued the card to the cardholder and provides information about the card type, brand, and issuing country.",
  },
  {
    question: "How accurate is CardScope's BIN data?",
    answer:
      "We strive to maintain the highest level of accuracy in our database. Our data is regularly updated and verified against multiple sources. However, as the financial landscape is constantly changing, we recommend using the data as a guide and not for critical decision-making without additional verification.",
  },
  {
    question: "Can I use CardScope for free?",
    answer:
      "Yes, we offer a free tier that allows a limited number of BIN lookups per month. For higher volume needs or commercial use, we offer paid plans with additional features and higher rate limits.",
  },
  {
    question: "How often is the CardScope BIN database updated?",
    answer:
      "We update our BIN database on a weekly basis to ensure the most current information. Critical updates may be applied more frequently as needed.",
  },
  {
    question: "Is it legal to look up BIN numbers?",
    answer:
      "Yes, BIN lookup is legal and is commonly used in the payments industry for various purposes such as fraud detection and transaction routing. However, it's important to use this information responsibly and in compliance with all applicable laws and regulations.",
  },
  {
    question: "How can I integrate CardScope's BIN lookup into my application?",
    answer:
      "CardScope provides a RESTful API that you can easily integrate into your application. We offer SDKs for popular programming languages and comprehensive documentation to help you get started quickly. Check our API documentation for detailed integration instructions.",
  },
  {
    question: "What information does CardScope provide for each BIN?",
    answer:
      "For each BIN lookup, CardScope provides detailed information including the card scheme (e.g., Visa, Mastercard), card type (credit, debit, prepaid), issuing bank name, card level (e.g., classic, gold), and the country of issuance.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

