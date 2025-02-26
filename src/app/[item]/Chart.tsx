"use client";
import { PriceHistory } from "@/utils/types/idleClanApiTypes";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
export function Chart({ data }: { data: PriceHistory }) {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart accessibilityLayer data={data} margin={{ right: -20 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="timestamp"
          tickLine={true}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value}
        />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
        <Line
          dataKey="lowesSellPrice"
          type="monotoneX"
          stroke="var(--color-desktop)"
          label="Test"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="highestSellPrice"
          type="monotoneX"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
