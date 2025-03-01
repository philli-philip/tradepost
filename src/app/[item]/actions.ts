import {
  DetailedPriceItem,
  Period,
  PriceHistory,
} from "@/utils/types/idleClanApiTypes";

export async function fetchItem(itemId: number): Promise<DetailedPriceItem> {
  const data = await fetch(
    `https://query.idleclans.com/api/PlayerMarket/items/prices/latest/comprehensive/${itemId}`,
    {
      next: { revalidate: 30 },
    }
  ).then((res) => res.json());
  return data;
}

export async function fetchPrice({
  itemId,
  period = "1d",
}: {
  itemId: number;
  period?: Period;
}): Promise<PriceHistory> {
  return await fetch(
    `https://query.idleclans.com/api/PlayerMarket/items/prices/history/${itemId}?period=${period}`,
    {
      next: { revalidate: 30 },
    }
  ).then((res) => res.json());
}
