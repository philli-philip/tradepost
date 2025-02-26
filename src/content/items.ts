export const allowedItems: Record<
  number,
  { itemId: number; name?: string; vendorSellPrice?: number }
> = {
  0: { name: "Spruce log", itemId: 0, vendorSellPrice: 6 },
  1: { name: "Pine log", itemId: 1, vendorSellPrice: 10 },
  2: { name: "Chestnut log", itemId: 2, vendorSellPrice: 30 },
  4: { name: "Raw perch", itemId: 4, vendorSellPrice: 8 },
  6: { name: "Oak log", itemId: 6, vendorSellPrice: 13 },
  7: { name: "Maple log", itemId: 7, vendorSellPrice: 16 },
  8: { name: "Teak log", itemId: 8, vendorSellPrice: 20 },
  9: { name: "Mahagony log", itemId: 9, vendorSellPrice: 40 },
  10: { name: "Yew log", itemId: 10, vendorSellPrice: 55 },
  11: { name: "Raw mackerel", itemId: 11, vendorSellPrice: 10 },
  14: { name: "Raw salmon", itemId: 14, vendorSellPrice: 17 },
  15: { name: "Raw carp", itemId: 15, vendorSellPrice: 18 },
  28: { name: "Tin ore", itemId: 28, vendorSellPrice: 5 },
  29: { name: "Copper ore", itemId: 29, vendorSellPrice: 5 },
  30: { name: "Iron ore", itemId: 30, vendorSellPrice: 8 },
  31: { name: "Coal", itemId: 31, vendorSellPrice: 11 },
  32: { name: "Silver ore", itemId: 32, vendorSellPrice: 15 },
  33: { name: "Gold ore", itemId: 33, vendorSellPrice: 52 },
  39: { name: "Platinum ore", itemId: 39, vendorSellPrice: 62 },
  41: { name: "Meteroit ore", itemId: 41, vendorSellPrice: 105 },
  42: { name: "Titanium ore", itemId: 42, vendorSellPrice: 155 },
  45: { name: "Meteroit bar", itemId: 45, vendorSellPrice: 345 },
  46: { name: "Titanium bar", itemId: 46, vendorSellPrice: 650 },
  47: { name: "Bronze bodyplate", itemId: 47, vendorSellPrice: 96 },
  48: { name: "Bronze platelegs", itemId: 48, vendorSellPrice: 64 },
  51: { name: "Bronze helmet", itemId: 51, vendorSellPrice: 32 },
  53: { name: "Normal pickaxe", itemId: 53, vendorSellPrice: 32 },
  54: { name: "Normal hatchet", itemId: 54, vendorSellPrice: 32 },
  57: { name: "Iron helmet", itemId: 57, vendorSellPrice: 32 },
  60: { name: "Steel platelegs", itemId: 60, vendorSellPrice: 144 },
  61: { name: "Steel platebody", itemId: 61, vendorSellPrice: 216 },
  63: { name: "Steel helmet", itemId: 63, vendorSellPrice: 72 },
  75: { name: "Platinum bodyplate", itemId: 75, vendorSellPrice: 2_300 },
  76: { name: "Platinum platelegs", itemId: 76, vendorSellPrice: 1_500 },
  77: { name: "Platinum helmet", itemId: 77, vendorSellPrice: 780 },
  81: { name: "Meteroit bodyplate", itemId: 81, vendorSellPrice: 6_200 },
  82: { name: "Meteroit platelegs", itemId: 82, vendorSellPrice: 4_100 },
  87: { name: "Titanium bodyplate", itemId: 87, vendorSellPrice: 15_600 },
  88: { name: "Titanium platelegs", itemId: 88, vendorSellPrice: 10_400 },
  93: { name: "Astronomical platebody", itemId: 93, vendorSellPrice: 450_000 },
  94: { name: "Astronomical platelegs", itemId: 94, vendorSellPrice: 300_000 },
  100: { name: "Cooked mackerel", itemId: 100, vendorSellPrice: 12 },
  102: { name: "Cooked perch", itemId: 102, vendorSellPrice: 10 },
  104: { name: "Cooked trout", itemId: 104, vendorSellPrice: 18 },
  105: { name: "Cooked salmon", itemId: 105, vendorSellPrice: 18 },
  106: { name: "Cooked carp", itemId: 106, vendorSellPrice: 20 },
  110: { name: "Raw meet", itemId: 110, vendorSellPrice: 20 },
  114: { name: "Cooked meat", itemId: 114, vendorSellPrice: 20 },
  115: { name: "Cooked giant meat", itemId: 115, vendorSellPrice: 60 },
  116: { name: "Cooked quality meat", itemId: 116, vendorSellPrice: 90 },
  117: { name: "Cooked superior meat", itemId: 117, vendorSellPrice: 150 },
  126: { name: "Potato seeds", itemId: 126, vendorSellPrice: 7 },
  127: { name: "Carrot seeds", itemId: 127, vendorSellPrice: 10 },
  128: { name: "Tomato seeds", itemId: 128, vendorSellPrice: 15 },
  129: { name: "Cabbage seeds", itemId: 129, vendorSellPrice: 15 },
  130: { name: "Strawberry seeds", itemId: 130, vendorSellPrice: 30 },
  132: { name: "Potato", itemId: 132, vendorSellPrice: 50 },
  143: { name: "Cod soup", itemId: 143, vendorSellPrice: 55 },
  149: { name: "Normal crossbow", itemId: 149, vendorSellPrice: 80 },
  152: { name: "Normal club", itemId: 152, vendorSellPrice: 80 },
  153: { name: "Normal battleaxe", itemId: 153, vendorSellPrice: 80 },
  154: { name: "Normal spear", itemId: 154, vendorSellPrice: 80 },
  156: { name: "Cooked anglerfish", itemId: 156, vendorSellPrice: 55 },
  158: { name: "Cooked zander", itemId: 158, vendorSellPrice: 25 },
  160: { name: "Cooked piranha", itemId: 160, vendorSellPrice: 6 },
  168: { name: "Normal bow", itemId: 168, vendorSellPrice: 80 },
  174: { name: "Refined battleaxe", itemId: 174, vendorSellPrice: 400 },
  180: { name: "Great battleaxe", itemId: 180, vendorSellPrice: 1_800 },
  186: { name: "Elite battleaxe", itemId: 186, vendorSellPrice: 8_000 },
  131: { name: "Watermelon seeds", itemId: 131, vendorSellPrice: 60 },
  162: { name: "Cooked pufferfish", itemId: 162, vendorSellPrice: 34 },
  163: { name: "Raw cod", itemId: 163, vendorSellPrice: 14 },
  164: { name: "Cooked cod", itemId: 164, vendorSellPrice: 15 },
  245: { name: "Leather", itemId: 245, vendorSellPrice: 50 },
  246: { name: "Orange leather", itemId: 246, vendorSellPrice: 100 },
  247: { name: "Green leather", itemId: 247, vendorSellPrice: 250 },
  248: { name: "Red leather", itemId: 248, vendorSellPrice: 400 },
  249: { name: "Black leather", itemId: 249, vendorSellPrice: 750 },
  275: { name: "Cursed flax", itemId: 275, vendorSellPrice: 34 },
  400: { name: "Grape seeds", itemId: 400, vendorSellPrice: 80 },
  402: { name: "Papaya seeds", itemId: 402, vendorSellPrice: 100 },
  404: { name: "Dragon fruit seeds", itemId: 404, vendorSellPrice: 125 },
  406: { name: "Redwood log", itemId: 406, vendorSellPrice: 75 },
  407: { name: "Magical log", itemId: 407, vendorSellPrice: 110 },
  408: { name: "Potion of swiftness", itemId: 408, vendorSellPrice: 250 },
  409: { name: "Potion of negotiation", itemId: 409, vendorSellPrice: 350 },
  410: { name: "Potion of resurrection", itemId: 410, vendorSellPrice: 425 },
  411: { name: "Potion of forgery", itemId: 411, vendorSellPrice: 575 },
  412: { name: "Potion of great sight", itemId: 412, vendorSellPrice: 650 },
  413: { name: "Potion of trickery", itemId: 413, vendorSellPrice: 725 },
  414: { name: "Potion of dark magic", itemId: 414, vendorSellPrice: 800 },
  415: { name: "Potion of pure power", itemId: 415, vendorSellPrice: 900 },
  416: {
    name: "Potion of ancient knowledge",
    itemId: 416,
    vendorSellPrice: 1_000,
  },
  562: { name: "Cooked tuna", itemId: 562, vendorSellPrice: 75 },
  587: { name: "Magical plank", itemId: 587, vendorSellPrice: 210 },
  673: { name: "Warrior's platebody", itemId: 673, vendorSellPrice: 12_000 },
  689: { name: "Book of potions", itemId: 689, vendorSellPrice: 5_000 },
  812: { name: "Warrior's platelegs", itemId: 812, vendorSellPrice: 12_000 },
  832: { name: "Basilisk scale", itemId: 832, vendorSellPrice: 160 },
  833: {
    name: "Basilisk scale trousers",
    itemId: 833,
    vendorSellPrice: 25_000,
  },
  834: { name: "Basilisk scale coat", itemId: 834, vendorSellPrice: 25_000 },
};

export const isWhiteListed = (itemId: number): boolean => {
  return allowedItems[itemId] !== undefined;
};
