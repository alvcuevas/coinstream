"use client"

import { SearchIcon } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "../ui/command"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import useSWR from "swr"
import { searchCoins } from "@/lib/utils"
import { useDebounce } from "@/hooks/useDebounce"
import { useRouter } from "next/navigation"
import { TrendingCoin } from "@/type"
import SearchItem from "../SearchItem"

interface SearchModalProps {
  trendingCoins: TrendingCoin[]
}

const TRENDING_COINS_LIMIT = 10
const RESULTS_LIMIT = 10

export const SearchModal = ({ trendingCoins }: SearchModalProps) => {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  const debouncedSearch = useDebounce(search, 300)
  const router = useRouter()

  const { data: searchResults = [], isValidating: isSearching } = useSWR(
    debouncedSearch ? ["searchCoins", debouncedSearch] : null,
    () => searchCoins(debouncedSearch)
  )

  const isTrendingCoinsVisible = !debouncedSearch && trendingCoins.length > 0
  const isNoResults =
    !!debouncedSearch && !isSearching && searchResults.length === 0
  const isResultsVisible =
    !!debouncedSearch && !isSearching && searchResults.length > 0

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [])

  const handleSelect = (coinId: string) => {
    setOpen(false)
    setSearch("")
    router.push(`/coins/${coinId}`)
  }

  return (
    <div id="search-modal">
      <Button variant="ghost" onClick={() => setOpen(true)} className="trigger">
        <SearchIcon size={18} />
        Search
        <kbd className="kbd">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        shouldFilter={false}
        className="dialog"
      >
        <CommandInput
          placeholder="Search for a coin by name or symbol..."
          value={search}
          onValueChange={setSearch}
          className="cmd-input"
        />
        <CommandList className="list custom-scrollbar">
          {isSearching && <CommandEmpty>Searching...</CommandEmpty>}
          {isNoResults && <CommandEmpty>No coins found.</CommandEmpty>}
          {isTrendingCoinsVisible && (
            <CommandGroup className="group">
              {trendingCoins.slice(0, TRENDING_COINS_LIMIT).map(({ item }) => (
                <SearchItem
                  key={item.id}
                  coin={item}
                  onSelect={handleSelect}
                  isActiveName={false}
                />
              ))}
            </CommandGroup>
          )}
          {isResultsVisible && (
            <CommandGroup
              heading={<p className="heading">Search Results</p>}
              className="group"
            >
              {searchResults.slice(0, RESULTS_LIMIT).map((coin) => (
                <SearchItem
                  key={coin.id}
                  coin={coin}
                  onSelect={handleSelect}
                  isActiveName
                />
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  )
}
