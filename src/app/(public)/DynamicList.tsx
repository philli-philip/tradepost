"use client";
import { AllItems, tradeItem } from "@/utils/types/idleClanApiTypes";
import { useState } from "react";
import { allowedItems } from "@/content/items";
import Link from "next/link";
import { SearchBar } from "./Searchbar";
import { compactGold } from "@/utils/formater/formater";

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
        <ul className="border-t-2 md:border border-[gold]/40 [border-style:ridge] overflow-hidden md:rounded">
          {filtered.map((item, index) => (
            <li
              key={item.itemId}
              className="block relative box-border hover:bg-[gold]/10  hover:dark:bg-gray-900 duration-75 z-20 border-b-2 overflow-hidden border-b-black border-t border-t-white/10 
              
              before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] hover:after:opacity-100 before:opacity-30 before:-z-10 before:[background-size:100%]"
              aria-label={item.itemId.toString()}
              style={{ backgroundPositionY: index * 80 }}
            >
              <style>
                {`li:nth-child(${index + 1})::before {
                  background-position-y: ${index * 80}px;
                  }
                `}
              </style>
              <Link
                href={{ pathname: `/${item.itemId}` }}
                className="py-3 md:py-2 flex flex-1 gap-2 flex-row px-4 "
              >
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
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
