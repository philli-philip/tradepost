"use client";
import { useEffect, useState } from "react";
import DateSelector from "./DateSelector";
import { Period, PriceHistory } from "@/utils/types/idleClanApiTypes";
import { fetchPrice } from "./actions";

export default function Chart({ itemId }: { itemId: number }) {
  const [period, setPeriod] = useState<Period>("1d");
  const [prices, setPrices] = useState<PriceHistory>([]);

  useEffect(() => {
    setPrices([]);
    (async () => {
      const prices = await fetchPrice({ itemId, period });
      setPrices(prices);
    })();
  }, [period]);

  return (
    <div>
      <DateSelector action={setPeriod} active={period} />
      <p>{JSON.stringify(prices, null, 2)}</p>
    </div>
  );
}
