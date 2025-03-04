import { compactGold, compactNumber } from "@/utils/formater/formater";
import { cn } from "@/utils/tailwind/cn";
import { DetailedPriceItem } from "@/utils/types/idleClanApiTypes";

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
        "h-12 relative flex items-center border-b border-[gold]/40 [border-style:ridge] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] hover:after:opacity-100 before:opacity-30 before:-z-10 before:[background-size:100%]",
        buyOrSell === "buy" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "h-full absolute top-0",
          buyOrSell === "buy"
            ? "right-0 bg-red-200 dark:bg-red-950 border-l border-red-600 dark:border-red-600"
            : "left-0 bg-green-200 dark:bg-green-950 border-r border-green-600 dark:border-green-600"
        )}
        style={{ width: fill + "%" }}
      ></div>
      <span className="hidden justify-center z-10 text-center md:flex flex-1">
        {compactGold(accumulatedAmount)}
      </span>
      <span className="justify-center z-10 text-center md:flex flex-1">
        {compactNumber(data.value)}
      </span>
      <span className="justify-center z-10 text-center md:flex flex-1">
        {compactGold(data.key)}
      </span>
    </div>
  );
};

export const MarketDepth = ({ item }: { item: DetailedPriceItem }) => {
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
