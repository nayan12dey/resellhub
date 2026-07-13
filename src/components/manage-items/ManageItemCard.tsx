import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiClock, FiTrash2 } from "react-icons/fi";

interface ManageItemCardProps {
    product: {
        _id: string;
        title: string;
        price: number;
        category: string;
        condition: string;
        location: string;
        postedDate: string;
        images: string[];
    };
    onDelete: (id: string) => void;
}

export default function ManageItemCard({
    product,
    onDelete,
}: ManageItemCardProps) {

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
        <div className="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">

            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Condition Badge */}
                <span
                    className={`absolute left-3 top-3 rounded-xl border px-2.5 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${getConditionColor(
                        product.condition
                    )}`}
                >
                    {product.condition}
                </span>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-between p-5">

                <div>
                    {/* Price */}
                    <p className="text-2xl font-extrabold tracking-tight text-blue-600">
                        ₹ {product.price.toLocaleString("en-IN")}
                    </p>

                    {/* Title */}
                    <h3 className="mt-1.5 line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {product.title}
                    </h3>

                    {/* Category */}
                    <p className="mt-0.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {product.category}
                    </p>

                    {/* Meta Info */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span className="line-clamp-1">{product.location}</span>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0">
                            <FiClock className="text-gray-400" />
                            <span>{product.postedDate}</span>
                        </div>
                    </div>
                </div>

                {/* Vertical Stack Buttons */}
                <div className="mt-5 flex flex-col gap-2">
                    {/* View Details Button (ProductCard Primary Style) */}
                    <Link
                        href={`/products/${product._id}`}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 text-center text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                        View Details
                    </Link>

                    {/* Delete Button (Placed Nicely Below) */}
                    <button
                        onClick={() => onDelete(product._id)}
                        className="w-full rounded-xl border border-red-100 bg-red-50/50 py-2.5 text-sm font-medium text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center gap-2"
                    >
                        <FiTrash2 size={15} />
                        <span>Delete Product</span>
                    </button>
                </div>

            </div>
        </div>
    );
}