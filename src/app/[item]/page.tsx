import { allowedItems } from "@/content/items";
import { fetchItem, fetchPrice } from "./actions";
import StaticFacts from "./StaticFacts";
import MarketFacts from "./marketFacts";
import { Period } from "@/utils/types/idleClanApiTypes";
import DateSelector from "./DateSelector";
import { Chart } from "./Chart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QuickSearch } from "./QuickSearch";
import { MarketDepth } from "./MarketDepth";
import { Suspense } from "react";

export const revalidate = 60;

export async function generateStaticParams() {
  const items = Object.keys(allowedItems);
  console.log(items);

  return [{ param: { item: 1 } }, { param: { item: 2 } }];
}

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

  if (allowedItems[itemId] === undefined) {
    return <div>Item not yet supported by the Trade post</div>;
  }

  return (
    <div className="flex flex-col gap-6 px-4">
      <div className="flex flex-row-reverse justify-end gap-2">
        <Suspense>
          <QuickSearch />
        </Suspense>
        <h1 className="font-bold text-xl flex-1 tracking-tight">
          {allowedItems[itemId].name ?? itemId}
        </h1>
        <Link
          href="/"
          className="size-7 rounded-lg p-[2px]"
          aria-label="Back to homepage"
        >
          <ArrowLeft
            size={24}
            className="text-gray-500 hover:text-foreground hover:dark:text-foreground"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StaticFacts item={itemId} />
        <MarketFacts marketData={item} />
      </div>
      <section>
        <h3 className="font-bold tracking-tighter text-lg pb-4">
          Demand & supply
        </h3>
        <MarketDepth item={item} />
      </section>
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-bold tracking-tighter text-lg">History</h3>
        <DateSelector period={period ?? "7d"} />
      </div>
      <Chart
        data={prices}
        vendorSellPrice={allowedItems[itemId].vendorSellPrice}
        period={period}
      />
    </div>
  );
}
