const Pagination = () => {
    return (
        <div className="mt-10 flex justify-center gap-2">

            <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
                Prev
            </button>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                1
            </button>

            <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
                2
            </button>

            <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
                3
            </button>

            <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
                Next
            </button>

        </div>
    );
};

export default Pagination;