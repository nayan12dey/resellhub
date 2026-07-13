"use client";

export default function ManageItemsSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm animate-pulse">

            {/* Image */}
            <div className="h-52 w-full bg-slate-200" />

            <div className="space-y-4 p-5">

                {/* Title */}
                <div className="h-6 w-3/4 rounded bg-slate-200" />

                {/* Price */}
                <div className="h-5 w-28 rounded bg-slate-200" />

                {/* Condition + Location */}
                <div className="flex justify-between">
                    <div className="h-4 w-20 rounded bg-slate-200" />
                    <div className="h-4 w-24 rounded bg-slate-200" />
                </div>

                {/* Posted Date */}
                <div className="h-4 w-32 rounded bg-slate-200" />

                {/* Buttons */}
                <div className="flex gap-3 pt-3">

                    <div className="h-10 flex-1 rounded-lg bg-slate-200" />

                    <div className="h-10 flex-1 rounded-lg bg-slate-200" />

                </div>

            </div>

        </div>
    );
}