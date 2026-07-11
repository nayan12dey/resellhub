import ProductCard from "../shared/ProductCard";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    condition: string;
    image: string;
    postedDate: string;
}

interface RelatedProductsProps {
    products: Product[];
}

export default function RelatedProducts({
    products,
}: RelatedProductsProps) {
    return (
        <section className="mt-20 border-t border-slate-100 pt-16">
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                    Related Products
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    More exciting offers you might be interested in.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        location={item.location}
                        condition={item.condition}
                        image={item.image}
                        postedDate={item.postedDate}
                    />
                ))}
            </div>
        </section>
    );
}