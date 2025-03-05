import { allowedItems, isWhiteListed } from "@/content/items";
import { AllItems } from "@/utils/types/idleClanApiTypes";
import DynamicList from "./DynamicList";
import { HighTradeVolume } from "./HighTradeVolume";
import { SearchBar } from "./Searchbar";
import { fetchHotItems } from "../[item]/actions";

export const revalidate = 60;

export default async function Home() {
  const data: AllItems = await fetch(
    "https://query.idleclans.com/api/PlayerMarket/items/prices/latest",
    {
      next: { revalidate: 30 },
    }
  ).then((res) => res.json());

  const rest = data
    .filter((item) => !isWhiteListed(item.itemId))
    .sort((a, b) => a.itemId - b.itemId);

  const filteredData = data
    .filter((item) => isWhiteListed(item.itemId))
    .sort((a, b) => a.itemId - b.itemId);

  const hotItems = await fetchHotItems("1d");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium uppercase text-xl font-serif bg-gradient-to-b text-transparent from-yellow-200 to-yellow-700 bg-clip-text">
        Tradepost
      </h1>
      <SearchBar />
      <HighTradeVolume items={hotItems} />
      <DynamicList items={filteredData} />
      <div>
        <h2>All items</h2>
        {rest?.map((item) => (
          <a href={`/${item.itemId}`} key={item.itemId} className="block">
            {allowedItems[item.itemId]?.name ?? item.itemId} — Lowest Sell
            price: {item.lowestSellPrice} — highest buy price:{" "}
            {item.highestBuyPrice}
          </a>
        ))}
      </div>
    </div>
  );
}
