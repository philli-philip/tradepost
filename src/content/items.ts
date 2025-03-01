export type ItemType = {
  itemId: number;
  name?: string;
  vendorSellPrice?: number;
};

export type ItemTypeList = Record<number, ItemType>;

export const allowedItems: ItemTypeList = {
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
  20: { name: "Sprouce plank", itemId: 20, vendorSellPrice: 35 },
  21: { name: "Pine plank", itemId: 21, vendorSellPrice: 45 },
  22: { name: "Chestnut plank", itemId: 22, vendorSellPrice: 85 },
  23: { name: "Oak plank", itemId: 23, vendorSellPrice: 55 },
  24: { name: "Maple plank", itemId: 24, vendorSellPrice: 65 },
  25: { name: "Teak plank", itemId: 25, vendorSellPrice: 75 },
  26: { name: "Mahogany plank", itemId: 26, vendorSellPrice: 95 },
  27: { name: "Yew plank", itemId: 27, vendorSellPrice: 110 },
  28: { name: "Tin ore", itemId: 28, vendorSellPrice: 5 },
  29: { name: "Copper ore", itemId: 29, vendorSellPrice: 5 },
  30: { name: "Iron ore", itemId: 30, vendorSellPrice: 8 },
  31: { name: "Coal", itemId: 31, vendorSellPrice: 11 },
  32: { name: "Silver ore", itemId: 32, vendorSellPrice: 15 },
  33: { name: "Gold ore", itemId: 33, vendorSellPrice: 52 },
  39: { name: "Platinum ore", itemId: 39, vendorSellPrice: 62 },
  41: { name: "Meteroit ore", itemId: 41, vendorSellPrice: 105 },
  42: { name: "Titanium ore", itemId: 42, vendorSellPrice: 155 },
  43: { name: "Platinum bar", itemId: 43, vendorSellPrice: 195 },
  45: { name: "Meteroit bar", itemId: 45, vendorSellPrice: 345 },
  46: { name: "Titanium bar", itemId: 46, vendorSellPrice: 650 },
  47: { name: "Astronomical ore", itemId: 47, vendorSellPrice: 25_000 },
  48: { name: "Bronze platelegs", itemId: 48, vendorSellPrice: 64 },
  49: { name: "Bronze bodyplate", itemId: 49, vendorSellPrice: 96 },
  51: { name: "Bronze helmet", itemId: 51, vendorSellPrice: 32 },
  53: { name: "Normal pickaxe", itemId: 53, vendorSellPrice: 32 },
  54: { name: "Normal hatchet", itemId: 54, vendorSellPrice: 32 },
  55: { name: "Iron platebody", itemId: 55, vendorSellPrice: 96 },
  56: { name: "Iron platelegt", itemId: 56, vendorSellPrice: 64 },
  57: { name: "Iron helmet", itemId: 57, vendorSellPrice: 32 },
  58: { name: "Iron shield", itemId: 58, vendorSellPrice: 64 },
  61: { name: "Steel platebody", itemId: 61, vendorSellPrice: 216 },
  62: { name: "Steel platelegs", itemId: 62, vendorSellPrice: 144 },
  63: { name: "Steel helmet", itemId: 63, vendorSellPrice: 72 },
  64: { name: "Steel shield", itemId: 64, vendorSellPrice: 144 },
  75: { name: "Platinum bodyplate", itemId: 75, vendorSellPrice: 2_300 },
  76: { name: "Platinum platelegs", itemId: 76, vendorSellPrice: 1_500 },
  77: { name: "Platinum helmet", itemId: 77, vendorSellPrice: 780 },
  78: { name: "Platinum shield", itemId: 78, vendorSellPrice: 1_500 },
  81: { name: "Meteroit bodyplate", itemId: 81, vendorSellPrice: 6_200 },
  82: { name: "Meteroit platelegs", itemId: 82, vendorSellPrice: 4_100 },
  83: { name: "Meteroit helmet", itemId: 83, vendorSellPrice: 2_050 },
  84: { name: "Meteroit shield", itemId: 84, vendorSellPrice: 4_100 },
  87: { name: "Titanium bodyplate", itemId: 87, vendorSellPrice: 15_600 },
  88: { name: "Titanium platelegs", itemId: 88, vendorSellPrice: 10_400 },
  89: { name: "Titanium helmet", itemId: 89, vendorSellPrice: 5_200 },
  90: { name: "Titanium shield", itemId: 90, vendorSellPrice: 10_400 },
  93: { name: "Astronomical platebody", itemId: 93, vendorSellPrice: 450_000 },
  94: { name: "Astronomical platelegs", itemId: 94, vendorSellPrice: 300_000 },
  95: { name: "Astronomical helmet", itemId: 95, vendorSellPrice: 150_000 },
  96: { name: "Astronomical shield", itemId: 96, vendorSellPrice: 300_000 },
  100: { name: "Cooked mackerel", itemId: 100, vendorSellPrice: 12 },
  102: { name: "Cooked perch", itemId: 102, vendorSellPrice: 10 },
  104: { name: "Cooked trout", itemId: 104, vendorSellPrice: 18 },
  105: { name: "Cooked salmon", itemId: 105, vendorSellPrice: 18 },
  106: { name: "Cooked carp", itemId: 106, vendorSellPrice: 20 },
  110: { name: "Raw meet", itemId: 110, vendorSellPrice: 20 },
  111: { name: "Raw giant meat", itemId: 111, vendorSellPrice: 60 },
  112: { name: "Raw quality meat", itemId: 112, vendorSellPrice: 90 },
  113: { name: "Raw superior meat", itemId: 113, vendorSellPrice: 150 },
  114: { name: "Cooked meat", itemId: 114, vendorSellPrice: 20 },
  115: { name: "Cooked giant meat", itemId: 115, vendorSellPrice: 60 },
  116: { name: "Cooked quality meat", itemId: 116, vendorSellPrice: 90 },
  117: { name: "Cooked superior meat", itemId: 117, vendorSellPrice: 150 },
  126: { name: "Potato seeds", itemId: 126, vendorSellPrice: 7 },
  127: { name: "Carrot seeds", itemId: 127, vendorSellPrice: 10 },
  128: { name: "Tomato seeds", itemId: 128, vendorSellPrice: 15 },
  129: { name: "Cabbage seeds", itemId: 129, vendorSellPrice: 15 },
  130: { name: "Strawberry seeds", itemId: 130, vendorSellPrice: 30 },
  131: { name: "Watermelon seeds", itemId: 131, vendorSellPrice: 60 },
  132: { name: "Potato", itemId: 132, vendorSellPrice: 50 },
  141: { name: "Meat burger", itemId: 141, vendorSellPrice: 40 },
  143: { name: "Cod soup", itemId: 143, vendorSellPrice: 55 },
  149: { name: "Normal longsword", itemId: 149, vendorSellPrice: 80 },
  150: { name: "Normal scimitar", itemId: 150, vendorSellPrice: 80 },
  151: { name: "Normal heavy hammer", itemId: 151, vendorSellPrice: 80 },
  152: { name: "Normal club", itemId: 152, vendorSellPrice: 80 },
  153: { name: "Normal battleaxe", itemId: 153, vendorSellPrice: 80 },
  154: { name: "Normal spear", itemId: 154, vendorSellPrice: 80 },
  155: { name: "Raw anglerfish", itemId: 155, vendorSellPrice: 50 },
  156: { name: "Cooked anglerfish", itemId: 156, vendorSellPrice: 55 },
  157: { name: "Raw zander", itemId: 157, vendorSellPrice: 23 },
  158: { name: "Cooked zander", itemId: 158, vendorSellPrice: 25 },
  159: { name: "Raw piranha", itemId: 159, vendorSellPrice: 5 },
  160: { name: "Cooked piranha", itemId: 160, vendorSellPrice: 6 },
  161: { name: "Raw pufferfish", itemId: 161, vendorSellPrice: 30 },
  162: { name: "Cooked pufferfish", itemId: 162, vendorSellPrice: 34 },
  163: { name: "Raw cod", itemId: 163, vendorSellPrice: 14 },
  164: { name: "Cooked cod", itemId: 164, vendorSellPrice: 15 },
  168: { name: "Normal bow", itemId: 168, vendorSellPrice: 80 },
  170: { name: "Refined longsword", itemId: 170, vendorSellPrice: 400 },
  171: { name: "Refined scimitar", itemId: 171, vendorSellPrice: 400 },
  174: { name: "Refined battleaxe", itemId: 174, vendorSellPrice: 400 },
  177: { name: "Great scimitar", itemId: 177, vendorSellPrice: 1_800 },
  180: { name: "Great battleaxe", itemId: 180, vendorSellPrice: 1_800 },
  183: { name: "Elite scimitar", itemId: 183, vendorSellPrice: 8_000 },
  186: { name: "Elite battleaxe", itemId: 186, vendorSellPrice: 8_000 },
  188: { name: "Superior longsword", itemId: 188, vendorSellPrice: 24_000 },
  189: { name: "Superior scimitar", itemId: 189, vendorSellPrice: 24_000 },
  191: { name: "Superior club", itemId: 191, vendorSellPrice: 24_000 },
  192: { name: "Superior battleaxe", itemId: 192, vendorSellPrice: 24_000 },
  194: { name: "Outstanding longsword", itemId: 194, vendorSellPrice: 99_000 },
  195: { name: "Outstanding scimitar", itemId: 195, vendorSellPrice: 99_000 },
  197: { name: "Outstanding club", itemId: 197, vendorSellPrice: 99_000 },
  198: { name: "Outstanding battleaxe", itemId: 198, vendorSellPrice: 99_000 },
  200: { name: "Godlike longsword", itemId: 200, vendorSellPrice: 333_000 },
  201: { name: "Godlike scimitar", itemId: 201, vendorSellPrice: 333_000 },
  203: { name: "Godlike club", itemId: 203, vendorSellPrice: 333_000 },
  204: { name: "Godlike battleaxe", itemId: 204, vendorSellPrice: 333_000 },
  213: { name: "Superior crossbow", itemId: 213, vendorSellPrice: 24_000 },
  215: { name: "Outstanding crossbow", itemId: 215, vendorSellPrice: 99_000 },
  218: { name: "Normal staff", itemId: 218, vendorSellPrice: 80 },
  219: { name: "Refined staff", itemId: 219, vendorSellPrice: 400 },
  220: { name: "Great staff", itemId: 220, vendorSellPrice: 1_800 },
  221: { name: "Elite staff", itemId: 221, vendorSellPrice: 8_000 },
  222: { name: "Superior staff", itemId: 222, vendorSellPrice: 24_000 },
  223: { name: "Outstanding staff", itemId: 223, vendorSellPrice: 99_000 },
  224: { name: "Godlike staff", itemId: 224, vendorSellPrice: 333_000 },
  237: { name: "Astronomical boots", itemId: 237, vendorSellPrice: 72_000 },
  244: { name: "Astronomical gloves", itemId: 244, vendorSellPrice: 55_000 },
  271: { name: "Godlike crossbow", itemId: 271, vendorSellPrice: 333_000 },
  245: { name: "Leather", itemId: 245, vendorSellPrice: 50 },
  246: { name: "Orange leather", itemId: 246, vendorSellPrice: 100 },
  247: { name: "Green leather", itemId: 247, vendorSellPrice: 250 },
  248: { name: "Red leather", itemId: 248, vendorSellPrice: 400 },
  249: { name: "Black leather", itemId: 249, vendorSellPrice: 750 },
  250: { name: "Leather trousers", itemId: 250, vendorSellPrice: 150 },
  251: { name: "Leather coat", itemId: 251, vendorSellPrice: 175 },
  252: { name: "Green trousers", itemId: 252, vendorSellPrice: 250 },
  253: { name: "Green coat", itemId: 253, vendorSellPrice: 275 },
  254: { name: "Red trousers", itemId: 254, vendorSellPrice: 350 },
  255: { name: "Red coat", itemId: 255, vendorSellPrice: 375 },
  256: { name: "Black trousers", itemId: 256, vendorSellPrice: 500 },
  257: { name: "Black coat", itemId: 257, vendorSellPrice: 600 },
  260: { name: "Bronze arrow", itemId: 260, vendorSellPrice: 6 },
  261: { name: "Iron arrow", itemId: 261, vendorSellPrice: 10 },
  262: { name: "Steel arrow", itemId: 262, vendorSellPrice: 15 },
  263: { name: "Platinum arrow", itemId: 263, vendorSellPrice: 25 },
  264: { name: "Meteorite arrow", itemId: 264, vendorSellPrice: 35 },
  265: { name: "Titanium arrow", itemId: 265, vendorSellPrice: 50 },
  266: { name: "Astronomical arrow", itemId: 266, vendorSellPrice: 80 },
  275: { name: "Cursed flax", itemId: 275, vendorSellPrice: 34 },
  276: { name: "Magical robe", itemId: 276, vendorSellPrice: 40 },
  277: { name: "Magical trousers", itemId: 277, vendorSellPrice: 30 },
  278: { name: "Enchanted robe", itemId: 278, vendorSellPrice: 95 },
  279: { name: "Enchanted trousers", itemId: 279, vendorSellPrice: 80 },
  284: { name: "Normal fishing rod", itemId: 284, vendorSellPrice: 32 },
  285: { name: "Normal rake", itemId: 285, vendorSellPrice: 32 },
  286: { name: "Normal secatuers", itemId: 286, vendorSellPrice: 32 },
  287: { name: "Normal hammer", itemId: 287, vendorSellPrice: 32 },
  288: { name: "Normal saw", itemId: 288, vendorSellPrice: 32 },
  289: { name: "Normal cooking pan", itemId: 289, vendorSellPrice: 32 },
  290: { name: "Normal crafting needle", itemId: 290, vendorSellPrice: 32 },
  347: {
    name: "Common enchantment scroll (woodcutting)",
    itemId: 347,
    vendorSellPrice: 500,
  },
  348: {
    name: "Common enchantment scroll (plundering)",
    itemId: 348,
    vendorSellPrice: 500,
  },
  349: {
    name: "Common enchantment scroll (fishing)",
    itemId: 349,
    vendorSellPrice: 500,
  },
  350: {
    name: "Common enchantment scroll (mining)",
    itemId: 350,
    vendorSellPrice: 500,
  },
  351: {
    name: "Common enchantment scroll (smithing)",
    itemId: 351,
    vendorSellPrice: 500,
  },
  352: {
    name: "Common enchantment scroll (foraging)",
    itemId: 352,
    vendorSellPrice: 500,
  },
  353: {
    name: "Common enchantment scroll (farming)",
    itemId: 353,
    vendorSellPrice: 500,
  },
  354: {
    name: "Common enchantment scroll (agility)",
    itemId: 354,
    vendorSellPrice: 500,
  },
  355: {
    name: "Common enchantment scroll (crafting)",
    itemId: 355,
    vendorSellPrice: 500,
  },
  356: {
    name: "Rare enchantment scroll (woodcutting)",
    itemId: 356,
    vendorSellPrice: 500,
  },
  357: {
    name: "Rare enchantment scroll (plundering)",
    itemId: 357,
    vendorSellPrice: 500,
  },
  358: {
    name: "Rare enchantment scroll (fishing)",
    itemId: 349,
    vendorSellPrice: 500,
  },
  359: {
    name: "Rare enchantment scroll (mining)",
    itemId: 359,
    vendorSellPrice: 500,
  },
  360: {
    name: "Rare enchantment scroll (smithing)",
    itemId: 360,
    vendorSellPrice: 500,
  },
  361: {
    name: "Rare enchantment scroll (foraging)",
    itemId: 361,
    vendorSellPrice: 500,
  },
  362: {
    name: "Rare enchantment scroll (farming)",
    itemId: 362,
    vendorSellPrice: 500,
  },
  363: {
    name: "Rare enchantment scroll (agility)",
    itemId: 363,
    vendorSellPrice: 500,
  },
  378: {
    name: "Diamond ore",
    itemId: 378,
    vendorSellPrice: 125,
  },
  379: {
    name: "Diamond bar",
    itemId: 379,
    vendorSellPrice: 115,
  },
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
  533: { name: "Normal lockpicks", itemId: 533, vendorSellPrice: 32 },
  540: { name: "Normal philosopher's stone", itemId: 540, vendorSellPrice: 32 },
  562: { name: "Cooked tuna", itemId: 562, vendorSellPrice: 75 },
  566: {
    name: "Dragon slayer's crossbow",
    itemId: 566,
    vendorSellPrice: 50_000,
  },
  567: { name: "Astharoth's scimitar", itemId: 567, vendorSellPrice: 50_000 },
  580: { name: "Sorcerer's staff", itemId: 580, vendorSellPrice: 50_000 },
  587: { name: "Magical plank", itemId: 587, vendorSellPrice: 210 },
  673: { name: "Warrior's platebody", itemId: 673, vendorSellPrice: 12_000 },
  689: { name: "Book of potions", itemId: 689, vendorSellPrice: 5_000 },
  790: { name: "Otherwordly longsword", itemId: 790, vendorSellPrice: 990_000 },
  791: { name: "Otherwordly scimitar", itemId: 791, vendorSellPrice: 990_000 },
  792: { name: "Otherwordly battleaxe", itemId: 792, vendorSellPrice: 990_000 },
  795: { name: "Otherwordly crossbow", itemId: 795, vendorSellPrice: 990_000 },
  799: { name: "Otherwordly staff", itemId: 799, vendorSellPrice: 990_000 },
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
