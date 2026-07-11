"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/explore")}
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95 cursor-pointer"
        >
            <FiArrowLeft size={18} />
            Back to Explore
        </button>
    );
};

export default BackButton;