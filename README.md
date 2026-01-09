# 🪙 CoinStream

> Cryptocurrency market tracking in real-time. Built with Next.js 16 and powered by CoinGecko API.

Experience live crypto prices, interactive candlestick charts, and real-time WebSocket updates for thousands of cryptocurrencies. Track market trends, analyze historical data, and convert between any crypto pairs—all in one sleek, responsive interface.

## ✨ Features

- **Real-time Price Updates** — WebSocket integration for live market data
- **Interactive Charts** — Lightweight candlestick charts with multiple timeframes (daily, weekly, monthly, yearly)
- **Advanced Search** — Quick search with autocomplete across all cryptocurrencies
- **Market Overview** — Trending coins, top gainers/losers, and category rankings
- **Currency Converter** — Instant conversion between any cryptocurrency pairs
- **Detailed Coin Info** — Market data, price history, trading pairs, and more

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Charts:** [Lightweight Charts](https://github.com/tradingview/lightweight-charts)
- **Data Fetching:** SWR
- **UI Components:** Radix UI + shadcn/ui
- **API:** CoinGecko Pro API + WebSocket

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- CoinGecko API key ([get one here](https://www.coingecko.com/en/api/pricing))

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd coinstream
```

2. Install dependencies

```bash
npm install
# or
pnpm install
# or
bun install
```

3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your CoinGecko API credentials:

```env
COINGECKO_BASE_URL=https://pro-api.coingecko.com/api/v3
COINGECKO_API_KEY=your_api_key_here
NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://stream.coingecko.com/v1
```

4. Run the development server

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## 📝 License

MIT

---

Built with ❤️ using Next.js and CoinGecko API
