# CardScope 🔍

CardScope is a professional Bank Identification Number (BIN) lookup service that provides comprehensive information about credit and debit cards. Built with Next.js 14, TypeScript, and Tailwind CSS, CardScope offers a modern, responsive interface for accessing our extensive database of BIN/IIN numbers.

![CardScope Preview](https://www.cardscope.io/preview.jpg)

## Features ✨

- **Extensive BIN Database**: Access information on over 340,000 BIN/IIN numbers and 13,000+ banks worldwide
- **Real-time Lookups**: Get instant results with our high-performance API
- **Global Coverage**: Comprehensive data for card issuers from all countries
- **Developer Friendly**: Easy-to-use API with clear documentation
- **Secure & Reliable**: Bank-grade security with 99.9% uptime
- **Always Updated**: Regular database updates for accurate information

## Tech Stack 🛠️

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icons
- [Vercel](https://vercel.com/) - Deployment

## Getting Started 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/saikothasan/CardScope.git
```

2. Install dependencies:

```shellscript
cd CardScope
npm install
```


3. Create a `.env.local` file in the root directory and add your environment variables:

```plaintext
NEXT_PUBLIC_API_URL=your_api_url
```


4. Run the development server:

```shellscript
npm run dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Project Structure 📁

```plaintext
CardScope/
├── app/                # Next.js app directory
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── public/            # Static assets
└── ...config files
```

## API Usage 📡

```typescript
// Example API call
const response = await fetch('https://api.cardscope.io/lookup/601120');
const data = await response.json();
```

Response format:

```json
{
  "number": {
    "iin": "601120",
    "length": 16,
    "luhn": true
  },
  "scheme": "DISCOVER",
  "type": "CREDIT",
  "category": "CONSUMER CARD",
  "country": {
    "alpha2": "US",
    "alpha3": "USA",
    "name": "UNITED STATES",
    "emoji": "🇺🇸"
  },
  "bank": {
    "name": "DISCOVER",
    "phone": "1-800-347-2683",
    "url": "www.discover.com/"
  },
  "success": true
}
```

## Contributing 🤝

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request


## Community 👥

- Join our [Telegram Channel](https://t.me/cardscopechannel)
- Follow us on [Twitter](https://twitter.com/cardscopeio)
- Email us at [support@cardscope.io](mailto:support@cardscope.io)


## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Thanks to all contributors who have helped make CardScope better
- Special thanks to the Next.js and Vercel teams for their amazing tools


---

Made with ❤️ by the CardScope Team
