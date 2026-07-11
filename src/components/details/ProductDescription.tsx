interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <section className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="relative pb-3 text-lg font-bold tracking-tight text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-slate-900">
        Product Description
      </h2>

      <div className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        <p>{description}</p>
      </div>
    </section>
  );
}