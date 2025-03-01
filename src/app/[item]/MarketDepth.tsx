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
