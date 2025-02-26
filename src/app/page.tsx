import { allowedItems, isWhiteListed } from "@/content/items";
import { AllItems } from "@/utils/types/idleClanApiTypes";

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
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Tradepost</h1>
      <div>
        <h2>Filtered items</h2>
        {filteredData?.map((item) => (
          <a href={`/${item.itemId}`} key={item.itemId} className="block">
            {allowedItems[item.itemId]?.name ?? item.itemId} — Lowest Sell
            price: {item.lowestSellPrice} — highest buy price:{" "}
            {item.highestBuyPrice} — Vendor:
            {allowedItems[item.itemId].vendorSellPrice}
            {allowedItems[item.itemId].vendorSellPrice! >
              item.highestBuyPrice && "RED"}
          </a>
        ))}
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
