import Categories from "@/components/home/Categories"
import CoinOverview from "@/components/home/CoinOverview"
import {
  CategoriesFallback,
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/fallback"
import TrendingCoins from "@/components/home/TrendingCoins"
import { SearchModal } from "@/components/home/SearchModal"
import { getTrendingCoins } from "@/lib/utils"
import { Suspense } from "react"

const Page = async () => {
  const trendingCoins = await getTrendingCoins()

  return (
    <main className="main-container">
      <SearchModal trendingCoins={trendingCoins} />

      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins trendingCoins={trendingCoins} />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <Suspense fallback={<CategoriesFallback />}>
          <Categories />
        </Suspense>
      </section>
    </main>
  )
}

export default Page
