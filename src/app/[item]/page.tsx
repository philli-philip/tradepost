import { allowedItems } from "@/content/items";
import { fetchItem, fetchPrice } from "./actions";
import StaticFacts from "./StaticFacts";
import MarketFacts from "./marketFacts";
import { Period } from "@/utils/types/idleClanApiTypes";
import DateSelector from "./DateSelector";
import { Chart } from "./Chart";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ item: number }>;
  searchParams: Promise<{ period: Period }>;
}) {
  const itemId = (await params).item;
  const item = await fetchItem(itemId);
  const period = (await searchParams).period;
  const prices = await fetchPrice({ itemId, period });

  const isValidItem = allowedItems[itemId] !== undefined;
  if (!isValidItem) {
    return <div>Item not yet supported by the Trade post</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-3xl tracking-tight">
        {allowedItems[itemId].name ?? itemId}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <StaticFacts item={itemId} />
        <MarketFacts marketData={item} />
      </div>
      <DateSelector period={period ?? "7d"} />
      <Chart data={prices} period={period} />
    </div>
  );
}
