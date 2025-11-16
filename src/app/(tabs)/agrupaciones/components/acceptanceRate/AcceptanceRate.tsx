"use client"

import { TrendingUp } from "lucide-react"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { AcceptanceRateProps } from "./AcceptanceRate.types"

export const description = "A radial chart with text"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

export function AcceptanceRate({ voteCount, totalVotes }: AcceptanceRateProps) {
    // Calcular porcentaje real basado en el total de votos
    const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
    
    const chartData = [
        { browser: "safari", visitors: percentage, fill: "#a92c2c" },
    ]

    return (
        <div className="flex-1">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[180px]"
            >
                <RadialBarChart
                    data={chartData}
                    startAngle={0}
                    endAngle={250}
                    innerRadius={80}
                    outerRadius={110}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-slate-900 last:fill-slate-900"
                        polarRadius={[86, 74]}
                    />
                    <RadialBar dataKey="visitors" cornerRadius={10} />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="text-4xl font-bold fill-white"
                                            >
                                                {percentage}%
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-gray-400 font-medium"
                                            >
                                                {voteCount} votos
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                </RadialBarChart>
            </ChartContainer>
        </div>
    )
}