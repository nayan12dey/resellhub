import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    location: string;
    condition: string;
    image: string;
    postedDate: string;
}

const ProductCard = ({
    id,
    title,
    price,
    location,
    condition,
    image,
    postedDate,
}: ProductCardProps) => {

   
    const getConditionColor = (cond: string) => {
        switch (cond.toLowerCase()) {
            case "like new":
                return "bg-emerald-50 text-emerald-700 border-emerald-200";
            case "excellent":
                return "bg-blue-50 text-blue-700 border-blue-200";
            default:
                return "bg-amber-50 text-amber-700 border-amber-200";
        }
    };

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">

            {/* Image Section */}
            <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-w-7xl) 25vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Modern Bordered Condition Badge */}
                <span className={`absolute left-3 top-3 rounded-xl border px-2.5 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${getConditionColor(condition)}`}>
                    {condition}
                </span>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-5 justify-between">
                <div className="space-y-2.5">
                    {/* Price */}
                    <p className="text-2xl font-extrabold text-blue-600 tracking-tight">
                        ₹ {price.toLocaleString("en-IN")}
                    </p>

                    {/* Title */}
                    <h3 className="line-clamp-1 text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                        {title}
                    </h3>

                    {/* Meta Info (Location & Date) */}
                    <div className="flex items-center justify-between border-t border-gray-50 pt-3 text-xs font-medium text-gray-500">
                        <div className="flex items-center gap-1.5 max-w-[60%]">
                            <FaMapMarkerAlt className="text-gray-400 shrink-0" />
                            <span className="truncate">{location}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FiClock className="text-gray-400 shrink-0" />
                            <span>{postedDate}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="mt-5">
                    <Link
                        href={`/items/${id}`}
                        className="block w-full rounded-xl bg-gray-50 border border-gray-200/80 py-3 text-center text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 active:scale-98"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;