import { allowedItems, isWhiteListed } from "@/content/items";
import { AllItems } from "@/utils/types/idleClanApiTypes";
import DynamicList from "./DynamicList";

export const revalidate = 60;

export default async function Home() {
  const data: AllItems = await fetch(
    "https://query.idleclans.com/api/PlayerMarket/items/prices/latest"
  ).then((res) => res.json());

  const rest = data
    .filter((item) => !isWhiteListed(item.itemId))
    .sort((a, b) => a.itemId - b.itemId);

  const filteredData = data
    .filter((item) => isWhiteListed(item.itemId))
    .sort((a, b) => a.itemId - b.itemId);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold tracking-tight">Tradepost</h1>
      <div>
        <DynamicList items={filteredData} />
      </div>
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
