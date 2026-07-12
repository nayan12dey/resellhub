import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import Container from "../shared/Container";
import { FiArrowRight } from "react-icons/fi";


interface Product {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    originalPrice: number;
    condition: string;
    location: string;
    images: string[];
    seller: {
        name: string;
        email: string;
    };
    postedDate: string;
}

const LatestListings = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
   
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?limit=8`,
        {
            cache: "no-store",
        }
    );

    const products: Product[] = await res.json();



    return (
        <section className="py-16 md:py-24 bg-gray-50/50">
            <Container>
                {/* Header Section with Title & "Explore All" Button */}
                <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="text-left">
                        <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm mb-3">
                            🔥 New Arrivals
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                            Latest Listings
                        </h2>
                        <p className="mt-2 text-base text-gray-500 max-w-xl">
                            Discover the newest items added by trusted sellers. Find great deals near you today.
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/explore"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                        >
                            Explore All Items
                            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Product Cards Grid with smooth zoom/hover transitions */}

                <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {products.map((item) => (
                        <div
                            key={item._id}
                            className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-blue-900/5 rounded-2xl"
                        >
                            <ProductCard
                                id={item._id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                location={item.location}
                                condition={item.condition}
                                image={item.images?.[0]}
                                postedDate={item.postedDate}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default LatestListings;