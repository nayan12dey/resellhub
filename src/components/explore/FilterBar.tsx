"use client";

interface FilterBarProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;

  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;

  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterBar({
  category,
  setCategory,
  condition,
  setCondition,
  sort,
  setSort,
}: FilterBarProps) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Fashion">Fashion</option>
        <option value="Books">Books</option>
        <option value="Sports">Sports</option>
        <option value="Home Appliances">Home Appliances</option>
      </select>

      {/* Condition */}
      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Conditions</option>
        <option value="New">New</option>
        <option value="Like New">Like New</option>
        <option value="Good">Good</option>
        <option value="Used">Used</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

    </div>
  );
}