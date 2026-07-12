import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    condition: string;
    image: string;
    postedDate: string;
}

const ProductCard = ({
    id,
    title,
    description,
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
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">

            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Condition Badge */}
                <span
                    className={`absolute left-3 top-3 rounded-xl border px-2.5 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${getConditionColor(
                        condition
                    )}`}
                >
                    {condition}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-5">

                <div>

                    {/* Price */}
                    <p className="text-2xl font-extrabold tracking-tight text-blue-600">
                        ₹ {price.toLocaleString("en-IN")}
                    </p>

                    {/* Title */}
                    <h3 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                        {description}
                    </p>

                    {/* Meta Info */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">

                        <div className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span>{location}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FiClock className="text-gray-400" />
                            <span>{postedDate}</span>
                        </div>

                    </div>
                </div>

                {/* Button */}
                <Link
                    href={`/products/${id}`}
                    className="mt-6 rounded-xl border border-gray-200 bg-gray-50 py-3 text-center text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
};

export default ProductCard;