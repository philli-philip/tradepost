import { allowedItems } from "@/content/items";
import { fetchItem, fetchPrice } from "./actions";
import StaticFacts from "./StaticFacts";
import MarketFacts from "./marketFacts";
import { Period } from "@/utils/types/idleClanApiTypes";
import DateSelector from "./DateSelector";
import { Chart } from "./Chart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

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
      <div className="flex flex-row-reverse justify-end gap-2">
        <h1 className="font-bold text-2xl tracking-tight">
          {allowedItems[itemId].name ?? itemId}
        </h1>
        <Link
          href="/"
          className="size-8 rounded-lg p-[2px]"
          aria-label="Back to homepage"
        >
          <ArrowLeft
            size={28}
            className="text-gray-500 hover:text-foreground hover:dark:text-foreground"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StaticFacts item={itemId} />
        <MarketFacts marketData={item} />
      </div>
      <DateSelector period={period ?? "7d"} />
      <Chart
        data={prices}
        vendorSellPrice={allowedItems[itemId].vendorSellPrice}
        period={period}
      />
    </div>
  );
}
