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

export async function getGeminiOpinion({
  itemName,
  vendorBuyPrice,
  volume,
  highestBuyPricesWithVolume,
  lowestSellPricesWithVolume,
  averagePrice1Day,
  averagePrice7Days,
  averagePrice30Days,
}: {
  itemName: string;
  vendorBuyPrice: number;
  volume: number;
  highestBuyPricesWithVolume: DetailedPriceItem["highestBuyPricesWithVolume"];
  lowestSellPricesWithVolume: DetailedPriceItem["lowestSellPricesWithVolume"];
  averagePrice1Day: number;
  averagePrice7Days: number;
  averagePrice30Days: number;
}) {
  const geminiKey = process.env.GEMINI_KEY;

  if (!geminiKey) {
    throw new Error("No Gemini key available");
  }

  function bidItem({
    item,
    index,
  }: {
    item: { key: number; value: number };
    index: number;
  }) {
    return `  ${index + 1}.  ${item.value} items @ ${item.key} gold \n`;
  }

  console.log(highestBuyPricesWithVolume);
  const inputMessage = `
  Task: please provide a description of the market situation for potential buyer and seller of the item with 180 or less characters for the traded item players in a video game that involves around harvesting resources, refining them and the build up a larger empire. The users that will see the text know the role of the item in the game. You can suggest different buy or sell prices, if you think they materialise soon. Do not repeat facts in the response. The tone of voice should sound like a medival merchant. Do not use any brackets. Format numbers above 1000 to a shorter version with k and M (example 12039 will become 12 k).
  
  item information: item name: ${itemName}. One NPC buy infinite amounts at ${vendorBuyPrice} gold
  Market history
  current sell offers (you buy from the lowest bidder first)
  ${lowestSellPricesWithVolume.map((item, index) => bidItem({ item, index }))}
  
  current buy offers (you must sell to the highest bidder first)
${highestBuyPricesWithVolume.map((item, index) => bidItem({ item, index }))}

  trading volume last 24 hours: ${volume}
  24 hour pricing average: ${averagePrice1Day} gold
  7 day pricing average: ${averagePrice7Days} gold
  30 day pricing average:${averagePrice30Days} gold`;

  console.log(inputMessage);
  const apiUrl =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"; // Replace with the actual API endpoint if different

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": geminiKey,
      },
      next: {
        revalidate: 300,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: inputMessage }] }],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Extract the generated text from the response
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}
