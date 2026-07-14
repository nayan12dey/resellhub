interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
    page,
    totalPages,
    setPage,
}: PaginationProps) => {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-10 flex justify-center gap-2 flex-wrap">

            <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="rounded-lg border px-4 py-2 disabled:opacity-50 hover:bg-gray-100"
            >
                Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`rounded-lg px-4 py-2 transition ${page === i + 1
                            ? "bg-blue-600 text-white"
                            : "border hover:bg-gray-100"
                        }`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="rounded-lg border px-4 py-2 disabled:opacity-50 hover:bg-gray-100"
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;