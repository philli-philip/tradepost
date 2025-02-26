export const allowedItems: Record<
  number,
  { itemId: number; name?: string; vendorSellPrice?: number }
> = {
  30: { name: "Oak log", itemId: 30, vendorSellPrice: 13 },
  31: { name: "Coal", itemId: 31, vendorSellPrice: 11 },
  42: { name: "Titanium ore", itemId: 42, vendorSellPrice: 155 },
  46: { name: "Titanium bar", itemId: 46, vendorSellPrice: 650 },
  110: { name: "Raw meet", itemId: 110, vendorSellPrice: 20 },
  126: { name: "Potato seeds", itemId: 126, vendorSellPrice: 7 },
  127: { name: "Carrot seeds", itemId: 127, vendorSellPrice: 10 },
  129: { name: "Cabbage seeds", itemId: 129, vendorSellPrice: 15 },
  130: { name: "Strawberry seeds", itemId: 130, vendorSellPrice: 30 },
  162: { name: "Cooked pufferfish", itemId: 162, vendorSellPrice: 34 },
  275: { name: "Cursed flax", itemId: 275, vendorSellPrice: 34 },
  407: { name: "Magical log", itemId: 407, vendorSellPrice: 110 },
  587: { name: "Magical plank", itemId: 587, vendorSellPrice: 210 },
};

export const isWhiteListed = (itemId: number): boolean => {
  return allowedItems[itemId] !== undefined;
};
