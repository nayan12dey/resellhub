import { FaMapMarkerAlt, FaRegCalendarAlt, FaTag, FaUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

interface ProductInfoProps {
    title: string;
    category: string;
    price: number;
    description: string;
    condition: string;
    location: string;
    postedDate: string;
    seller: string;
}

export default function ProductInfo({
    title,
    category,
    price,
    description,
    condition,
    location,
    postedDate,
    seller,
}: ProductInfoProps) {
    return (
        <div className="flex flex-col justify-between h-full space-y-6">
            <div>
                {/* Category Badge */}
                <div>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 uppercase tracking-wide">
                     {category}
                    </span>
                </div>

                {/* Title Header */}
                <h1 className="mt-3 text-3xl font-extrabold text-slate-900 lg:text-4xl tracking-tight">
                  {title}
                </h1>

                {/* Resell Market Clean Pricing Structure */}
                <div className="mt-4 flex items-baseline gap-3">
                    {/* Main Selling Price */}
                    <span className="text-4xl font-black text-slate-900 tracking-tight">₹{price.toLocaleString("en-IN")}</span>
                    {/* Original Market MRP for reference value */}
                    {/* <span className="text-sm text-slate-400 font-medium">Original Price: ₹1,39,900</span> */}
                </div>

                {/* Quick Item Note Strip */}
                <p className="mt-5 text-base leading-relaxed text-slate-600 border-l-2 border-slate-200 pl-4">
                     {description}
                </p>

                {/* Metadata Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="p-2 rounded-lg bg-slate-50 text-slate-600"><FaTag size={16} /></div>
                        <div>
                            <p className="text-xs text-slate-400 font-medium">Condition</p>
                            <p className="text-sm font-semibold text-slate-800">{condition}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="p-2 rounded-lg bg-slate-50 text-slate-600"><FaMapMarkerAlt size={16} /></div>
                        <div>
                            <p className="text-xs text-slate-400 font-medium">Location</p>
                            <p className="text-sm font-semibold text-slate-800"> {location}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="p-2 rounded-lg bg-slate-50 text-slate-600"><FaRegCalendarAlt size={16} /></div>
                        <div>
                            <p className="text-xs text-slate-400 font-medium">Listed Date</p>
                            <p className="text-sm font-semibold text-slate-800">{postedDate}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="p-2 rounded-lg bg-slate-50 text-slate-600"><FaUser size={16} /></div>
                        <div>
                            <p className="text-xs text-slate-400 font-medium">Verified Seller</p>
                            <p className="text-sm font-semibold text-slate-800">{seller}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action CTA Buttons */}
            {/* TIP: "bg-slate-900" er jaiga-e tumi tomari main brand color config code use korte paro e.g. "bg-indigo-600" ba "bg-blue-600" */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full">
                <button className="flex-1 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 hover:bg-blue-700 transition-all active:scale-[0.99]">
                    Instant Purchase
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all active:scale-[0.99]">
                    <FiMessageCircle size={18} className="text-slate-500" />
                    Make an Offer / Chat
                </button>
            </div>
        </div>
    );
}