import { allowedItems } from "@/content/items";

export default function StaticFacts({ item }: { item: number }) {
  return (
    <div className="md:border border-gray-300 rounded-2xl md:p-6 grid grid-cols-2 gap-4">
      <span className="hidden md:block">Name</span>
      <span className="hidden md:block">{allowedItems[item].name ?? "--"}</span>
      <span>Vendor sell price</span>
      <span>{allowedItems[item].vendorSellPrice ?? "--"}</span>
    </div>
  );
}
