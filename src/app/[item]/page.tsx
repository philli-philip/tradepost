import { allowedItems } from "@/content/items";
import { fetchItem, fetchPrice } from "./actions";
import StaticFacts from "./StaticFacts";
import MarketFacts from "./marketFacts";
import { DetailedPriceItem, Period } from "@/utils/types/idleClanApiTypes";
import DateSelector from "./DateSelector";
import { Chart } from "./Chart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/utils/tailwind/cn";
import { compactGold, compactNumber } from "@/utils/formater/formater";
import { QuickSearch } from "./QuickSearch";

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
    <div className="flex flex-col gap-6 px-4">
      <div className="flex flex-row-reverse justify-end gap-2">
        <QuickSearch />
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
        <AmountChart item={item} />
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

const AmountSlice = ({
  data,
  maxValue = 100,
  buyOrSell = "buy",
}: {
  data: { key: number; value: number };
  maxValue?: number;
  buyOrSell?: "buy" | "sell";
}) => {
  const fillTarget = (data.value / maxValue) * 100;
  const fill = fillTarget;
  const accumulatedAmount = data.value * data.key;
  return (
    <div
      className={cn(
        "h-12 relative flex items-center border-b border-gray-200 dark:border-gray-800",
        buyOrSell === "buy" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "h-full absolute top-0 -z-10 ",
          buyOrSell === "buy"
            ? "right-0 bg-red-500/40"
            : "left-0 bg-green-500/40 "
        )}
        style={{ width: fill + "%" }}
      ></div>
      <span className="hidden justify-center text-center md:flex flex-1">
        {compactGold(accumulatedAmount)}
      </span>
      <span className="justify-center text-center md:flex flex-1">
        {compactNumber(data.value)}
      </span>
      <span className="justify-center text-center md:flex flex-1">
        {compactGold(data.key)}
      </span>
    </div>
  );
};

const AmountChart = ({ item }: { item: DetailedPriceItem }) => {
  const reduceSum = (input: { key: number; value: number }[]) => {
    return input.reduce(
      (accum, current) => (current.value > accum ? current.value : accum),
      0
    );
  };

  const maxCountSell = reduceSum(item.highestBuyPricesWithVolume);
  const maxCountBuy = reduceSum(item.lowestSellPricesWithVolume);
  const maxCount = Math.max(maxCountBuy, maxCountSell, 0);

  return (
    <div className="flex flex-row items-stretch divide-x divide-gray-200 dark:divide-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="block w-full ">
        {item.highestBuyPricesWithVolume.map((item) => (
          <AmountSlice
            key={item.key}
            data={item}
            buyOrSell="buy"
            maxValue={maxCount}
          />
        ))}
      </div>
      <div className="block w-full">
        {item.lowestSellPricesWithVolume.map((item) => (
          <AmountSlice
            key={item.key}
            data={item}
            buyOrSell="sell"
            maxValue={maxCount}
          />
        ))}
      </div>
    </div>
  );
};
