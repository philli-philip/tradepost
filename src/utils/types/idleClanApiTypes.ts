export type DetailedPriceItem = {
  averagePrice1Day: number;
  averagePrice7Days: number;
  averagePrice30Days: number;
  highestBuyPricesWithVolume: { key: number; value: number }[];
  lowestSellPricesWithVolume: { key: number; value: number }[];
  itemId: string;
  tradeVolume1Day: number;
};

export type tradeItem = {
  itemId: number;
  lowestSellPrice: number;
  lowestPriceVolume: number;
  highestBuyPrice: number;
  highestPriceVolume: number;
};

export type AllItems = tradeItem[];

export type PriceHistory = {
  itemID: number;
  timestamp: Date;
  lowesSellPrice: number;
  highestSellPrice: number;
  averagePrice: number;
  tradeVolume: number;
}[];

export type Period = "1d" | "7d" | "30d" | "1y";
