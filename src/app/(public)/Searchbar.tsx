"use client";

import { cn } from "@/utils/tailwind/cn";
import { InputHTMLAttributes, useEffect, useRef } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  ...props
}) => {
  const searchBar = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "f") {
        event.preventDefault(); // Prevent the default browser behavior (e.g., opening the browser's find dialog)
        handleSearchShortCut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSearchShortCut() {
    searchBar.current?.focus();
    searchBar.current?.scroll();
  }

  return (
    <div
      className={cn(
        "flex rounded mx-4 md:mx-0 bg-slate-900 shadow-[inset_0px_4px_8px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_1px_2px_rgba(0,0,0,0.5)] duration-75 hover border border-[gold]/40 [border-style:ridge]",
        className
      )}
    >
      <input
        ref={searchBar}
        id="searchbar"
        className="bg-transparent w-full p-3 px-6 rounded-sm placeholder:text-[silver]/50 outline-1 -outline-offset-1 focus:outline-[gold]/100 outline-none"
        placeholder="Seach by name or id"
        {...props}
      />
    </div>
  );
};
