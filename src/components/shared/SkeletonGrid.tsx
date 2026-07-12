import ProductSkeleton from "./ProductSkeleton";


interface SkeletonGridProps {
    count?: number;
    className?: string;
}

const SkeletonGrid = ({
    count = 8,
    className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
}: SkeletonGridProps) => {
    return (
        <div className={className}>
            {Array.from({ length: count }).map((_, index) => (
                <ProductSkeleton key={index} />
            ))}
        </div>
    );
};

export default SkeletonGrid;