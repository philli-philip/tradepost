import { compactNumber } from "@/utils/formater/formater";
import { DetailedPriceItem } from "@/utils/types/idleClanApiTypes";

export default function MarketFacts({
  marketData,
}: {
  marketData: DetailedPriceItem;
}) {
  return (
    <div className="md:border border-gray-200 dark:border-gray-800 rounded-2xl md:p-6 grid grid-cols-2 gap-4">
      <span>Average price today</span>
      <span>{compactNumber(marketData.averagePrice1Day)}</span>
      <span>Average price 7 days</span>
      <span>{compactNumber(marketData.averagePrice7Days)}</span>
      <span>Average price 30 days</span>
      <span>{compactNumber(marketData.averagePrice30Days)}</span>
      <span>Trade volume past 24 hours</span>
      <span>{compactNumber(marketData.tradeVolume1Day)}</span>
    </div>
  );
}
