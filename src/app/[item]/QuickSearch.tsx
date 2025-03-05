"use client";

import { allowedItems, ItemTypeList } from "@/content/items";
import { cn } from "@/utils/tailwind/cn";
import { SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function QuickSearch() {
  const [state, setState] = useState<"closed" | "open">("closed");
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "f") {
        event.preventDefault();
        searchInput.current?.focus();
        searchInput.current?.scroll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function filterItems(items: ItemTypeList, searchTerm: string) {
    if (searchTerm.length < 2) {
      return null;
    }
    return Object.values(items).filter((item) =>
      item.name?.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
    );
  }

  const filteredItems = filterItems(allowedItems, searchTerm);

  useEffect(() => {}, []);
  return (
    <div
      className={cn(
        "flex flex-row-reverse rounded-sm relative border border-transparent duration-150",
        state === "open" &&
          "bg-gray-100 dark:bg-gray-900 border border-[gold]/40 [border-style:ridge]"
      )}
    >
      <button
        onClick={() => {
          if (state === "closed") {
            setState("open");
            searchInput?.current?.focus();
          } else {
            setState("closed");
            setSearchTerm("");
            searchInput.current?.blur();
          }
        }}
        className="size-8 flex rounded-full items-center justify-center"
      >
        {state === "closed" ? (
          <SearchIcon
            size={24}
            className="text-[gold] opacity-40 duration-75 hover:opacity-100"
          />
        ) : (
          <X
            size={20}
            className="text-[gold] opacity-40 duration-75 hover:opacity-100"
          />
        )}
      </button>
      <input
        ref={searchInput}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget?.value)}
        className={cn(
          state === "open" || searchTerm.length > 0
            ? "w-48 opacity-100 pl-3"
            : "w-0 opacity-0 pl-0",
          "duration-100 placeholder:text-gray-500 box-border outline-none bg-transparent rounded-full focus:opacity-100 focus:pl-3"
        )}
        placeholder="Search for name or id..."
      ></input>
      <ul
        className={cn(
          "absolute top-8 flex z-20 flex-col border border-[gold]/40 [border-style:ridge] items-stretch max-h-72 overflow-y-auto bg-slate-950 shadow-2xl shadow-black rounded-sm -left-[1px] -right-[1px]",
          searchTerm.length > 1 ? "block" : "hidden"
        )}
      >
        <ResultList />
      </ul>
    </div>
  );

  function ResultList() {
    return (
      <>
        {filteredItems?.length === 0 && (
          <span className="px-2 py-2 text-gray-700 dark:text-gray-400">
            No results
          </span>
        )}
        {filteredItems?.map((item, index) => (
          <Link
            className="flex pl-4 py-1 relative isolate  duration-75 outline-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] focus:outline-[gold] focus:before:opacity-80 -outline-offset-1 hover:before:opacity-60 before:opacity-30 before:-z-10 before:[background-size:100%] border-b-2 border-b-black/40 border-t border-t-white/10 "
            key={item.itemId}
            href={`/${item.itemId}`}
          >
            <style>
              {`a:nth-child(${index + 1})::before {
                  background-position-y: ${index * 80}px;
                  }
                `}
            </style>
            {item.name}
          </Link>
        ))}
      </>
    );
  }
}
