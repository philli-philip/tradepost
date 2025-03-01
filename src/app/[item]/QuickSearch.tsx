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
  console.log("items", filterItems);

  useEffect(() => {}, []);
  return (
    <div className="flex flex-row-reverse bg-gray-100 dark:bg-gray-900 rounded-full relative">
      <button
        onClick={() => {
          console.log(state);
          setState(state === "open" ? "closed" : "open");
        }}
        className="size-8 flex rounded-full items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {state === "closed" ? <SearchIcon size={20} /> : <X size={20} />}
      </button>
      <input
        ref={searchInput}
        onChange={(e) => setSearchTerm(e.currentTarget?.value)}
        className={cn(
          state === "open" ? "w-48 opacity-100 pl-3" : "w-0 opacity-0 pl-0",
          "duration-100 placeholder:text-gray-500 outline-none bg-transparent rounded-full focus:w-48 focus:opacity-100 focus:pl-3"
        )}
        placeholder="Search for name or id..."
      ></input>
      <ul
        className={cn(
          "absolute top-8 flex flex-col items-stretch max-h-72 overflow-y-auto bg-white shadow-lg rounded-xl py-2 w-56 left-0",
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
          <span className="px-2 py-2  text-gray-700 dark:text-gray-400">
            No results
          </span>
        )}
        {filteredItems?.map((item) => (
          <Link
            className="flex pl-4 py-1 focus:bg-gray-100 dark:focus:bg-gray-700 hover:bg-gray-200 duration-75 outline-none"
            key={item.itemId}
            href={`/${item.itemId}`}
          >
            {item.name}
          </Link>
        ))}
      </>
    );
  }
}
