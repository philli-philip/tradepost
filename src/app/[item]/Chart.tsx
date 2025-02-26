import { PriceHistory } from "@/utils/types/idleClanApiTypes";

export default function Chart({ prices }: { prices: PriceHistory }) {
  return (
    <div>
      <p>{JSON.stringify(prices, null, 2)}</p>
    </div>
  );
}
