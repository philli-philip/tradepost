"use client";
import { cn } from "@/utils/supabase/cn";
import { Period } from "@/utils/types/idleClanApiTypes";

export default function DateSelector({
  action,
  active,
}: {
  action: (period: Period) => void;
  active: Period;
}) {
  return (
    <div className="flex">
      <div className="flex flex-row overflow-hidden flex-grow-0 gap-1 p-[2px] rounded-lg shrink bg-gray-200">
        <button
          onClick={() => action("1d")}
          className={cn(
            "px-2 py-0 rounded-md",
            active === "1d" && "bg-white shadow-md"
          )}
        >
          1 day
        </button>
        <button
          onClick={() => action("7d")}
          className={cn(
            "px-2 py-0 rounded-md",
            active === "7d" && "bg-white shadow-md"
          )}
        >
          7 days
        </button>
        <button
          onClick={() => action("30d")}
          className={cn(
            "px-2 py-0 rounded-md",
            active === "30d" && "bg-white shadow-md"
          )}
        >
          30 days
        </button>
        <button
          onClick={() => action("1y")}
          className={cn(
            "px-2 py-0 rounded-md",
            active === "1y" && "bg-white shadow-md"
          )}
        >
          1 year
        </button>
      </div>
    </div>
  );
}
