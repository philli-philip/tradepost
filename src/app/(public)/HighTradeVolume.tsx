"use client";
import { h3Style } from "@/components/ui/typography/typography";
import { allowedItems } from "@/content/items";
import { compactNumber } from "@/utils/formater/formater";
import { cn } from "@/utils/tailwind/cn";
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
      <section className="pb-2 px-4 md:px-0">
        <h2 className={cn(h3Style, "pb-1")}>Hottest trading items</h2>
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
    className="border border-[gold]/40 [border-style:ridge] rounded px-2 py-1 focus:outline-[gold] outline-none -outline-offset-1 flex flex-row gap-3 relative isolate before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden before:bg-[url('./../../public/slate-dark.jpg')] hover:before:opacity-100 before:opacity-30 before:-z-10 before:[background-size:100%]"
  >
    <span>{allowedItems[item.itemId].name}</span>
    <span>{compactNumber(item.volume)}</span>
  </Link>
);
