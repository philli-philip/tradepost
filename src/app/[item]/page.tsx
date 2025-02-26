import { allowedItems } from "@/content/items";
import { fetchItem } from "./actions";
import Chart from "./Chart";
import StaticFacts from "./StaticFacts";
import MarketFacts from "./marketFacts";

export default async function Page({
  params,
}: {
  params: Promise<{ item: number }>;
}) {
  const itemId = (await params).item;
  const item = await fetchItem(itemId);

  return (
    <div>
      <h1>{allowedItems[itemId].name ?? itemId}</h1>
      <div className="grid grid-cols-2 gap-4">
        <StaticFacts item={itemId} />
        <MarketFacts marketData={item} />
      </div>
      <Chart itemId={itemId} />
    </div>
  );
}
