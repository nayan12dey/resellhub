import Container from "@/components/shared/Container";
import AddItemForm from "@/components/add-item/AddItemForm";

export default function AddItemPage() {
    return (
        <section className="py-12 bg-slate-50 min-h-screen">
            <Container>
                <div className="mx-auto max-w-4xl">

                    <div className="mb-10">
                        <h1 className="text-4xl font-bold text-slate-900">
                            Add New Product
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Fill in the product information to publish your listing.
                        </p>
                    </div>

                    <AddItemForm />

                </div>
            </Container>
        </section>
    );
}