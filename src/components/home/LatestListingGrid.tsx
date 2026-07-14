import ProductCard from "../shared/ProductCard";

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

export default async function LatestListingGrid() {

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?limit=8`,
        {
            cache: "no-store",
        }
    );

    // const products: Product[] = await res.json();
    // const data = await res.json();

    const { products }: { products: Product[] } = await res.json();


    return (
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
    )
}