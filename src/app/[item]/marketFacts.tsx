import { compactGold, compactNumber } from "@/utils/formater/formater";
import { DetailedPriceItem } from "@/utils/types/idleClanApiTypes";

export default function MarketFacts({
  marketData,
}: {
  marketData: DetailedPriceItem;
}) {
  return (
    <div className="md:border border-gray-200 dark:border-gray-800 rounded-2xl md:p-6 grid grid-cols-2 gap-4">
      <span>Current highest buy</span>
      <span>{compactGold(marketData.highestBuyPricesWithVolume[0].key)}</span>
      <span>Current lowest offer</span>
      <span>{compactGold(marketData.lowestSellPricesWithVolume[0].key)}</span>
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
