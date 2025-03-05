"use client";
import { allowedItems } from "@/content/items";
import { compactNumber } from "@/utils/formater/formater";
import { HotItem, HotItemAPI } from "@/utils/types/idleClanApiTypes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HighTradeVolume({ items }: { items: HotItemAPI }) {
  const [searchValue, setSearchValue] = useState("");

  const filterFunction = (item: HotItem) => {
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

  if (filtered.length > 0)
    return (
      <section className="pb-2">
        <h2 className=" tracking-tighter font-bold pb-2">
          Hottest trading items
        </h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {filtered.map(
            (item) =>
              allowedItems[item.itemId].name && (
                <HotChip item={item} key={item.itemId} />
              )
          )}
        </div>
      </section>
    );
}

const HotChip = ({ item }: { item: HotItem }) => (
  <Link
    href={`/${item.itemId}`}
    className="border border-gray-200 dark:border-gray-800 dark:hover:bg-gray-900 rounded-full px-2 py-1 flex flex-row gap-3 hover:bg-gray-100"
  >
    <span>{allowedItems[item.itemId].name}</span>
    <span>{compactNumber(item.volume)}</span>
  </Link>
);
