import { allowedItems } from "@/content/items";
import { fetchItem, getGeminiOpinion } from "./actions";

export default async function AISummary({ itemId }: { itemId: number }) {
  const itemDetails = await fetchItem(itemId);
  const item = allowedItems[itemId];

  const text = await getGeminiOpinion({
    itemName: item.name,
    vendorBuyPrice: item.vendorSellPrice,
    volume: itemDetails.tradeVolume1Day,
    highestBuyPricesWithVolume: itemDetails.highestBuyPricesWithVolume,
    lowestSellPricesWithVolume: itemDetails.lowestSellPricesWithVolume,
    averagePrice1Day: itemDetails.averagePrice1Day,
    averagePrice7Days: itemDetails.averagePrice7Days,
    averagePrice30Days: itemDetails.averagePrice7Days,
  });
  return (
    <div className="md:border overflow-hidden relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] before:opacity-30 before:z-10 before:[background-size:100%] border-[gold]/40 [border-style:ridge] rounded-2xl before:[backgroundPositionY:50px] grid-cols-2 md:p-6 flex flex-col gap-4">
      <h3 className="font-bold tracking-tighter text-lg">
        {"Merchant's opinion"}
      </h3>
      <p className="">{text}</p>
    </div>
  );
}

export function AISummaryLoading() {
  return (
    <div className="md:border border-gray-200 dark:border-gray-800 rounded-2xl md:p-6 flex flex-col gap-4">
      <h3 className="font-bold tracking-tighter text-lg">
        {"Merchant's opinion"}
      </h3>
    </div>
  );
}
