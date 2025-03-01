import {
  DetailedPriceItem,
  Period,
  PriceHistory,
} from "@/utils/types/idleClanApiTypes";

export async function fetchItem(itemId: number): Promise<DetailedPriceItem> {
  try {
    const data = await fetch(
      `https://query.idleclans.com/api/PlayerMarket/items/prices/latest/comprehensive/${itemId}`,
      {
        next: { revalidate: 30 },
      }
    ).then((res) => res.json());
    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "Error while loading");
  }
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
