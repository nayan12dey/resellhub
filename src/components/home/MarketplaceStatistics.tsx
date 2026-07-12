"use client";

import Container from "../shared/Container";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { ShoppingBag, Users, CheckCircle, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

// const chartData = [
//     { category: "Electronics", listings: 120 },
//     { category: "Fashion", listings: 95 },
//     { category: "Furniture", listings: 80 },
//     { category: "Vehicles", listings: 110 },
//     { category: "Books", listings: 60 },
// ];

const stats = [
    {
        number: "3,200+",
        label: "Active Listings",
        icon: ShoppingBag,
        color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
        number: "1,500+",
        label: "Happy Users",
        icon: Users,
        color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
        number: "780+",
        label: "Products Sold",
        icon: CheckCircle,
        color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
        number: "85+",
        label: "Cities Covered",
        icon: MapPin,
        color: "text-rose-600 bg-rose-50 border-rose-100",
    },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Category
                </p>
                <p className="text-base font-extrabold text-gray-900">
                    {payload[0].payload.name}
                </p>
                <div className="mt-2 flex items-center gap-2 border-t border-gray-50 pt-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <p className="text-sm font-semibold text-gray-600">
                        Listings: <span className="font-bold text-blue-600">{payload[0].value}</span>
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

const MarketplaceStatistics = () => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchChart = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/statistics/chart`
            );

            const data = await res.json();

            setChartData(data);
        };

        fetchChart();
    }, []);



    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">

            <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none z-0"></div>
            <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-100/30 blur-3xl pointer-events-none z-0"></div>


            <Container>
                <div className="relative z-10">
                    {/* Section Heading */}
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm mb-3">
                            📊 Live Insights
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                            Marketplace Statistics
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                            Trusted by thousands of buyers and sellers across the country.
                        </p>
                    </div>

                    {/* Statistics Cards */}
                    <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/[0.03] flex items-center justify-between"
                                >
                                    <div>
                                        <h3 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
                                            {item.number}
                                        </h3>
                                        <p className="mt-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                            {item.label}
                                        </p>
                                    </div>

                                    <div className={`rounded-2xl p-4 border transition-transform duration-500 group-hover:scale-110 ${item.color}`}>
                                        <Icon size={24} className="stroke-[2.5]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Chart Wrapper */}
                    <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                                    Listings by Category
                                </h3>
                                <p className="text-sm font-medium text-gray-400 mt-0.5">
                                    Real-time item distribution across popular categories
                                </p>
                            </div>

                            <div className="flex items-center gap-2 self-start sm:self-auto rounded-xl bg-slate-50 border border-slate-100 px-3 py-1.5 text-xs font-bold text-gray-600">
                                <div className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
                                Total Items Listed
                            </div>
                        </div>

                        {/* Recharts Chart */}

                        <div className="h-[400px] w-full mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 20, right: 10, left: -15, bottom: 10 }}
                                    barGap={0}
                                >

                                    <defs>

                                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#2563eb" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        </linearGradient>


                                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#2563eb" floodOpacity="0.15" />
                                        </filter>
                                    </defs>


                                    <CartesianGrid strokeDasharray="6 6" stroke="#f1f5f9" vertical={false} />

                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 13, fontWeight: 600 }}
                                        dy={12}
                                    />

                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                                        dx={-5}
                                    />


                                    <Tooltip
                                        cursor={{ fill: '#f1f5f9', opacity: 0.5, radius: 16 }}
                                        content={<CustomTooltip />}
                                        animationDuration={300}
                                    />


                                    <Bar
                                        dataKey="value"
                                        radius={[16, 16, 4, 4]}
                                        fill="url(#barGradient)"
                                        maxBarSize={45}
                                        animationDuration={1500}
                                        animationEasing="ease-out"

                                        activeBar={{
                                            filter: "url(#glow)",
                                            stroke: "#2563eb",
                                            strokeWidth: 1,
                                            fill: "#2563eb"
                                        }}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MarketplaceStatistics;