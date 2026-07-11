const SearchBar = () => {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none transition focus:border-blue-500"
            />
        </div>
    );
};

export default SearchBar;