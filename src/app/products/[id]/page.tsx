import React from 'react';
import Container from '@/components/shared/Container';
import ProductDescription from '@/components/details/ProductDescription';
import ProductGallery from '@/components/details/ProductGallery';
import ProductInfo from '@/components/details/ProductInfo';
import ProductSpecifications from '@/components/details/ProductSpecifications';
import RelatedProducts from '@/components/details/RelatedProducts';
import BackButton from '@/components/details/BackButton';

// Dummy data gulo page level e thakle handle kora shohoj hoy
const images = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200",
    "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1200",
];

const specificationsData = [
    { title: "Category", value: "Electronics" },
    { title: "Brand", value: "Apple" },
    { title: "Model", value: "iPhone 14 Pro Max" },
    { title: "Condition", value: "Like New" },
    { title: "Location", value: "Kolkata" },
    { title: "Posted", value: "2 Days Ago" },
];




const ProductDetailsPage = () => {
    return (
        <div className="min-h-screen bg-slate-50/50 py-10 md:py-10">
            <Container>
                   <BackButton />
                {/* TOP SECTION: Gallery & Info Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 sticky top-6">
                        <ProductGallery images={images} />
                    </div>
                    <div className="lg:col-span-7">
                        <ProductInfo
                            title="iPhone 14 Pro Max"
                            category="Electronics"
                            price={65000}
                            // originalPrice={139900}
                            description="This iPhone 14 Pro Max is in excellent condition with no scratches. Battery health is 96%. Original box and charger included."
                            condition="Like New"
                            location="Kolkata, WB"
                            postedDate="2 Days Ago"
                            seller="Nayan Dey"
                        />
                    </div>
                </div>

                {/* MIDDLE SECTION: Description & Specifications Side-by-Side */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                        <ProductDescription
                            description="This iPhone 14 Pro Max has been carefully maintained and is in excellent condition. It comes with the original box, charging cable, and all accessories. The battery health is 96%, ensuring long-lasting performance. The device has no major scratches or dents and works perfectly. It is ideal for anyone looking for a premium smartphone at a lower price. Face ID, camera, display, and all hardware components are fully functional."
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