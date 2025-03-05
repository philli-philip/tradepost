"use client";
import { cn } from "@/utils/tailwind/cn";
import { Period } from "@/utils/types/idleClanApiTypes";
import Link from "next/link";

export default function DateSelector({ period }: { period: Period }) {
  return (
    <div className="flex">
      <div
        className="flex flex-row overflow-hidden shadow-[inset_0px_2px_12px_#000] flex-grow-0 gap-1 p-[2px] border border-[gold]/40 [border-style:ridge] rounded-sm
      relative isolate before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] before:opacity-30 before:-z-10 before:[background-size:100%]"
      >
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
        "px-2 py-1 rounded-sm overflow-hidden border border-transparent",
        isActive &&
          "border-[gold]/40 [border-style:ridge] shadow-lg shadow-black relative isolate before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('./../../public/slate-dark.jpg')] before:opacity-100 before:-z-10 before:[background-size:100%] "
      )}
    >
      {children}
    </Link>
  );
};
