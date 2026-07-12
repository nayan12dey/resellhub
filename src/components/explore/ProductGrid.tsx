"use client";

import { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";
import ProductSkeleton from "../shared/ProductSkeleton";
import SkeletonGrid from "../shared/SkeletonGrid";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  condition: string;
  postedDate: string;
  images: string[];
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <SkeletonGrid count={12} />;
  }

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold text-slate-800">
          No Products Found
        </h2>
        <p className="mt-2 text-slate-500">
          There are no products available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((item) => (
        <ProductCard
          key={item._id}
          id={item._id}
          title={item.title}
          description={item.description}
          price={item.price}
          location={item.location}
          image={item.images?.[0]}
          condition={item.condition}
          postedDate={item.postedDate}
        />
      ))}
    </div>
  );
};

export default ProductGrid;