import ProductCard from "../shared/ProductCard";


const products = [
  {
    id: "1",
    title: "iPhone 14 Pro",
    description: "Excellent condition with original box and charger included.",
    price: 65000,
    location: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: "2",
    title: "Gaming Laptop",
    description: "High-performance laptop, perfect for gaming and editing.",
    price: 58000,
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: "3",
    title: "Mountain Bike",
    description: "Well-maintained mountain bike for adventure rides.",
    price: 12000,
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
  },
  {
    id: "4",
    title: "Wooden Table",
    description: "Premium solid wood table with modern design.",
    price: 3500,
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          location={item.location}
          image={item.image}
          condition="Like New"
          postedDate="2 days ago"
        />
      ))}
    </div>
  );
};

export default ProductGrid;