import { MarketCoin, SearchItemProps, TrendingCoin } from "@/type"
import { CommandItem } from "./ui/command"
import { cn, formatPercentage } from "@/lib/utils"
import Image from "next/image"
import { TrendingDown, TrendingUp } from "lucide-react"

const SearchItem = ({ coin, onSelect, isActiveName }: SearchItemProps) => {
  const isMarketCoin =
    typeof coin.data?.price_change_percentage_24h === "number"

  const change = isMarketCoin
    ? (coin as MarketCoin).data.price_change_percentage_24h ?? 0
    : (coin as TrendingCoin["item"]).data.price_change_percentage_24h?.usd ?? 0

  return (
    <CommandItem
      value={coin.id}
      onSelect={() => onSelect(coin.id)}
      className="search-item"
    >
      <div className="coin-info">
        <Image src={coin.thumb} alt={coin.name} width={40} height={40} />

        <div>
          <p className={cn("font-bold", isActiveName && "text-white")}>
            {coin.name}
          </p>
          <p className="coin-symbol">{coin.symbol}</p>
        </div>
      </div>

      <div
        className={cn("coin-change", {
          "text-green-500": change > 0,
          "text-red-500": change < 0,
        })}
      >
        {change > 0 ? (
          <TrendingUp size={14} className="text-green-500" />
        ) : (
          <TrendingDown size={14} className="text-red-500" />
        )}
        <span>{formatPercentage(Math.abs(change))}</span>
      </div>
    </CommandItem>
  )
}

export default SearchItem
