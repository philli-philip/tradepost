import { allowedItems } from "@/content/items";

export default function StaticFacts({ item }: { item: number }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 grid grid-cols-2 gap-4">
      <span>Name</span>
      <span>{allowedItems[item].name ?? "--"}</span>
      <span>Vendor sell price</span>
      <span>{allowedItems[item].vendorSellPrice ?? "--"}</span>
    </div>
  );
}
