import { allowedItems } from "@/content/items";
import { compactGold } from "@/utils/formater/formater";

export default function StaticFacts({ item }: { item: number }) {
  return (
    <div className="md:border border-gray-200 dark:border-gray-800 rounded-2xl md:p-6 grid grid-cols-2 gap-4">
      <span className="hidden md:block">Name</span>
      <span className="hidden md:block">{allowedItems[item].name ?? "--"}</span>
      <span>Vendor offer</span>
      <span>{compactGold(allowedItems[item].vendorSellPrice) ?? "--"}</span>
    </div>
  );
}
