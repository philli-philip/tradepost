"use client";
import { Period, PriceHistory } from "@/utils/types/idleClanApiTypes";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  compactDate,
  hourDateFormat,
  shortDateFormat,
  tinyDateFormat,
} from "@/utils/formater/formater";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart({
  data,
  period,
  vendorSellPrice,
}: {
  data: PriceHistory;
  vendorSellPrice?: number;
  period: Period;
}) {
  const tickFormatter = (value: string) => {
    const date = new Date(value);
    const format =
      period === "1y"
        ? tinyDateFormat
        : period === "1d"
        ? hourDateFormat
        : shortDateFormat;
    return compactDate({ date, format });
  };
  return (
    <ChartContainer config={chartConfig}>
      <LineChart accessibilityLayer data={data} margin={{ right: -20 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="timestamp"
          tickLine={true}
          axisLine={false}
          tickMargin={8}
          tickCount={0}
          minTickGap={96}
          tickFormatter={tickFormatter}
        />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent label="label" />}
        />
        <Line
          dataKey="averagePrice"
          label="Average price"
          type="monotoneX"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          dot={false}
        />
        <ReferenceLine
          y={vendorSellPrice}
          label="Vendor price"
          stroke="gray"
        />
        <Line
          dataKey="lowesSellPrice"
          type="monotoneX"
          stroke="var(--color-desktop)"
          label="Test"
          strokeWidth={2}
          opacity="0.6"
          dot={false}
        />
        <Line
          dataKey="highestSellPrice"
          type="monotoneX"
          stroke="hsl(var(--chart-2))"
          opacity="0.6"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
