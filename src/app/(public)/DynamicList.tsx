"use client";
import { AllItems, tradeItem } from "@/utils/types/idleClanApiTypes";
import { useState } from "react";
import { allowedItems } from "@/content/items";
import Link from "next/link";
import { SearchBar } from "./Searchbar";
import { compactNumber } from "@/utils/formater/formater";

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update the state with the input value
  };

  const filtered = items.filter(filterFunction);
  return (
    <>
      <SearchBar onChange={handleSearchChange} className="mb-4" />
      {filtered.length === 0 ? (
        <div> No results</div>
      ) : (
        <ul className="border border-gray-200 overflow-hidden dark:border-gray-800 rounded-xl">
          {filtered.map((item) => (
            <li
              key={item.itemId}
              className="block"
              aria-label={item.itemId.toString()}
            >
              <Link
                href={{ pathname: `/${item.itemId}` }}
                className="py-1 flex flex-1 gap-2 flex-row px-2 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 hover:dark:bg-gray-900 duration-75"
              >
                <span className="text-gray-500 hidden md:flex text-right pr-2 w-9 font-mono">
                  {item.itemId}
                </span>
                <span className="flex flex-1 truncate text-ellipsis">
                  {allowedItems[item.itemId].name}
                </span>
                <span className="flex flex-1">
                  Buy: {compactNumber(item.highestBuyPrice)}
                </span>
                <span className="flex flex-1 justify-end">
                  Sell: {compactNumber(item.lowestSellPrice)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
