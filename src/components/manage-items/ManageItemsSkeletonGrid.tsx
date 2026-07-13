"use client";

import ManageItemsSkeleton from "./ManageItemsSkeleton";


interface Props {
    count?: number;
}

export default function ManageItemSkeletonGrid({
    count = 6,
}: Props) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: count }).map((_, index) => (
                <ManageItemsSkeleton key={index} />
            ))}
        </div>
    );
}