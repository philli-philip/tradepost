import { allowedItems } from "@/content/items";
import { compactGold, compactNumber } from "@/utils/formater/formater";
import { DetailedPriceItem } from "@/utils/types/idleClanApiTypes";

export default function MarketFacts({
  marketData,
}: {
  marketData: DetailedPriceItem;
}) {
  return (
    <div className="md:border border-gray-200 dark:border-gray-800 rounded-2xl md:p-6 grid grid-cols-2 gap-4">
      <span>Vendor offer</span>
      <span>
        {compactGold(allowedItems[marketData.itemId].vendorSellPrice) ?? "--"}
      </span>
      <span>Current highest buy</span>
      <span>
        {marketData.highestBuyPricesWithVolume[0]
          ? compactGold(marketData.highestBuyPricesWithVolume[0].key)
          : "No buyer"}
      </span>
      <span>Current lowest offer</span>
      <span>
        {marketData.lowestSellPricesWithVolume[0]
          ? compactGold(marketData.lowestSellPricesWithVolume[0].key)
          : "no seller"}
      </span>
      <span>Today average</span>
      <span>{compactGold(marketData.averagePrice1Day)}</span>
      <span>7 day average</span>
      <span>{compactGold(marketData.averagePrice7Days)}</span>
      <span>30 day average</span>
      <span>{compactGold(marketData.averagePrice30Days)}</span>
      <span>Trade volume past 24 hours</span>
      <span>{compactNumber(marketData.tradeVolume1Day)}</span>
    </div>
  );
}
