"use client";
import { AllItems, tradeItem } from "@/utils/types/idleClanApiTypes";
import { useEffect, useState } from "react";
import { allowedItems } from "@/content/items";
import Link from "next/link";
import { compactGold } from "@/utils/formater/formater";
import { h3Style } from "@/components/ui/typography/typography";
import { cn } from "@/utils/tailwind/cn";

export default function DynamicList({ items }: { items: AllItems }) {
  const [searchValue, setSearchValue] = useState("");

  const filterFunction = (item: tradeItem) => {
    const itemId = item.itemId.toString();
    if (
      itemId.includes(searchValue) ||
      allowedItems[item.itemId].name
        ?.toLocaleLowerCase()
        .includes(searchValue.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const filterValue = (e: Event) => {
      if ((e.target as HTMLInputElement).getAttribute("id") === "searchbar") {
        setSearchValue((e.target as HTMLInputElement).value);
      }
    };

    window.addEventListener("input", (e) => filterValue(e));

    return () => window.removeEventListener("input", filterValue);
  }, []);

  const filtered = items.filter(filterFunction);
  return (
    <div>
      <h2 className={cn(h3Style, "pb-1")}>All items</h2>

      {filtered.length === 0 ? (
        <div> No results</div>
      ) : (
        <ul className="border-t-2 md:border border-[gold]/40 [border-style:ridge] overflow-hidden md:rounded">
          {filtered.map((item, index) => (
            <Link
              key={item.itemId}
              className="block relative box-border hover:bg-[gold]/10  hover:dark:bg-gray-900 duration-75 z-20 border-b-2 overflow-hidden border-b-black border-t border-t-white/10 
              
              before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] focus:outline-[gold] outline-none rounded-sm focus:before:opacity-80 -outline-offset-1 hover:before:opacity-60 before:opacity-30 before:-z-10 before:[background-size:100%]"
              aria-label={item.itemId.toString()}
              href={{ pathname: `/${item.itemId}` }}
            >
              <style>
                {`a:nth-child(${index + 1})::before {
                  background-position-y: ${index * 80}px;
                  }
                `}
              </style>
              <div className="py-3 md:py-2 flex flex-1 gap-2 flex-row px-4 ">
                <span className="text-gray-500 hidden md:flex text-right pr-2 w-9 font-mono">
                  {item.itemId}
                </span>
                <span className="flex flex-1 truncate text-ellipsis">
                  {allowedItems[item.itemId].name}
                </span>
                <span className="flex flex-1">
                  Buy: {compactGold(item.highestBuyPrice)}
                </span>
                <span className="flex flex-1 justify-end">
                  Sell: {compactGold(item.lowestSellPrice)}
                </span>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
