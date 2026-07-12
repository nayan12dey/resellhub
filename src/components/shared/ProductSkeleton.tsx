"use client";

import { Skeleton } from "@heroui/react";

export default function ProductSkeleton() {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Skeleton className="h-52 w-full rounded-xl" />

            <div className="mt-4 space-y-3">
                <Skeleton className="h-5 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />

                <div className="flex justify-between">
                    <Skeleton className="h-4 w-20 rounded-md" />
                    <Skeleton className="h-4 w-16 rounded-md" />
                </div>

                <div className="flex justify-between">
                    <Skeleton className="h-4 w-24 rounded-md" />
                    <Skeleton className="h-4 w-20 rounded-md" />
                </div>

                <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        </div>
    );
}