"use client";
import { cn } from "@/utils/tailwind/cn";
import { Period } from "@/utils/types/idleClanApiTypes";
import Link from "next/link";

export default function DateSelector({ period }: { period: Period }) {
  return (
    <div className="flex">
      <div className="flex flex-row overflow-hidden flex-grow-0 gap-1 p-[2px] rounded-lg shrink bg-gray-200 dark:bg-gray-800">
        <Tab active={period} target="1d">
          1 day
        </Tab>
        <Tab active={period} target="7d">
          7 days
        </Tab>
        <Tab active={period} target="30d">
          30 days
        </Tab>
        <Tab active={period} target="1y">
          1 year
        </Tab>
      </div>
    </div>
  );
}

const Tab = ({
  target,
  children,
  active,
}: {
  target: Period;
  children: React.ReactNode;
  active: string | null;
}) => {
  const isActive = active === target;
  return (
    <Link
      href={`?period=${target}`}
      scroll={false}
      className={cn(
        "px-2 py-1 rounded-md",
        isActive && "bg-white dark:text-black hover:bg-gray-50 dark:bg-gray-100"
      )}
    >
      {children}
    </Link>
  );
};
