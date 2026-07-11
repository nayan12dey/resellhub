const FilterBar = () => {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">

      <select className="rounded-xl border border-gray-300 p-3">
        <option>All Categories</option>
        <option>Electronics</option>
        <option>Furniture</option>
        <option>Fashion</option>
        <option>Books</option>
      </select>

      <select className="rounded-xl border border-gray-300 p-3">
        <option>All Conditions</option>
        <option>New</option>
        <option>Like New</option>
        <option>Good</option>
        <option>Fair</option>
      </select>

      <select className="rounded-xl border border-gray-300 p-3">
        <option>Newest</option>
        <option>Oldest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>

    </div>
  );
};

export default FilterBar;