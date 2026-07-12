import React from 'react';
import Container from '@/components/shared/Container';
import ProductDescription from '@/components/details/ProductDescription';
import ProductGallery from '@/components/details/ProductGallery';
import ProductInfo from '@/components/details/ProductInfo';
import ProductSpecifications from '@/components/details/ProductSpecifications';
import RelatedProducts from '@/components/details/RelatedProducts';
import BackButton from '@/components/details/BackButton';

// Dummy data 
// const images = [
//     "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
//     "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200",
//     "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200",
//     "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1200",
// ];

// const specificationsData = [
//     { title: "Category", value: "Electronics" },
//     { title: "Brand", value: "Apple" },
//     { title: "Model", value: "iPhone 14 Pro Max" },
//     { title: "Condition", value: "Like New" },
//     { title: "Location", value: "Kolkata" },
//     { title: "Posted", value: "2 Days Ago" },
// ];

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}





const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {

    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    const product = await res.json();



    const specificationsData = [
        {
            title: "Category",
            value: product.category,
        },
        {
            title: "Condition",
            value: product.condition,
        },
        {
            title: "Location",
            value: product.location,
        },
        {
            title: "Seller",
            value: product.seller.name,
        },
        {
            title: "Price",
            value: `₹${product.price.toLocaleString("en-IN")}`,
        },
        {
            title: "Posted",
            value: product.postedDate,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 py-10 md:py-10">
            <Container>
                <BackButton />
                {/* TOP SECTION: Gallery & Info Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 sticky top-6">
                        <ProductGallery images={product.images ?? []} />
                    </div>
                    <div className="lg:col-span-7">
                        <ProductInfo
                            title={product?.title}
                            category={product?.category}
                            price={product?.price}
                            // originalPrice={139900}
                            description={product?.description}
                            condition={product?.condition}
                            location={product?.location}
                            postedDate={product?.postedDate}
                            seller={product?.seller?.name}
                        />
                    </div>
                </div>

                {/* MIDDLE SECTION: Description & Specifications Side-by-Side */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                        <ProductDescription
                            description={product.description}
                        />
                    </div>
                    <div className="lg:col-span-5">
                        <ProductSpecifications specifications={specificationsData} />
                    </div>
                </div>

                {/* BOTTOM SECTION: Related Items */}
                {/* <RelatedProducts products={relatedProducts} />; */}
            </Container>
        </div>
    );
};

export default ProductDetailsPage;
