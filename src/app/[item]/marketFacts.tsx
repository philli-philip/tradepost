import { DetailedPriceItem } from "@/utils/types/idleClanApiTypes";

export default function MarketFacts({
  marketData,
}: {
  marketData: DetailedPriceItem;
}) {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 grid grid-cols-2 gap-4">
      <span>Average price today</span>
      <span>{marketData.averagePrice1Day}</span>
      <span>Average price 7 days</span>
      <span>{marketData.averagePrice7Days}</span>
      <span>Average price 30 days</span>
      <span>{marketData.averagePrice30Days}</span>
      <span>Trade volume past 24 hours</span>
      <span>{marketData.tradeVolume1Day}</span>
    </div>
  );
}
