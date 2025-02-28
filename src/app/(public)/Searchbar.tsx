"use client";

import { cn } from "@/utils/tailwind/cn";
import { useEffect, useRef } from "react";

interface SearchBarInterface extends React.HTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarInterface> = ({
  onChange,
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
      className={cn("flex rounded-xl bg-gray-200 dark:bg-gray-800", className)}
    >
      <input
        ref={searchBar}
        onChange={onChange}
        className="bg-transparent placeholder:text-gray-500 w-full p-3 px-6 rounded-xl"
        placeholder="Seach by name or id"
        {...props}
      />
    </div>
  );
};
