interface SpecItem {
    title: string;
    value: string;
}

interface ProductSpecificationsProps {
    specifications: SpecItem[];
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
    return (
        <section className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-slate-900">
                Specifications
            </h2>

            <div className="mt-6 border-t border-slate-100 divide-y divide-slate-100">
                {specifications.map((item) => (
                    <div key={item.title} className="py-3.5 flex justify-between items-center text-sm">
                        <span className="font-medium text-slate-400">{item.title}</span>
                        <span className="font-semibold text-slate-800 text-right">{item.value}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}