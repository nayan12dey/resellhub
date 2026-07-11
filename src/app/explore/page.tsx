import SearchBar from "@/components/explore/SearchBar";
import FilterBar from "@/components/explore/FilterBar";
import ProductGrid from "@/components/explore/ProductGrid";
import Pagination from "@/components/explore/Pagination";
import Container from "@/components/shared/Container";

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
      {/* Premium background with subtle top radial gradient */}
      <Container>
        <section className="py-12 md:py-16">
          
          {/* Header Section */}
          <div className="mb-10 space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Explore Products
            </h1>
            <p className="text-sm text-slate-500 max-w-md">
              Discover our curated collection of premium high-quality items tailored just for you.
            </p>
          </div>

          {/* Search & Filter Controls Panel */}
          <div className="mb-12 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="w-full md:max-w-xl">
                <SearchBar />
              </div>
              <div className="w-full md:w-auto flex justify-end">
                <FilterBar />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mb-12">
            <ProductGrid />
          </div>

          {/* Pagination Section */}
          <div className="pt-8 border-t border-slate-100 flex justify-center">
            <Pagination />
          </div>
          
        </section>
      </Container>
    </div>
  );
};

export default ExplorePage;