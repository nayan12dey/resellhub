"use client";

import { useSession } from "@/app/lib/auth-client";
import { useEffect, useState } from "react";
import ManageItemCard from "./ManageItemCard";
import toast from "react-hot-toast";
import { AlertDialog, Button } from "@heroui/react";
import ManageItemSkeletonGrid from "./ManageItemsSkeletonGrid";


interface Product {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    condition: string;
    location: string;
    images: string[];
    postedDate: string;
}

export default function ManageItems() {

    const { data: session } = useSession();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {

        const fetchProducts = async () => {

            if (!session?.user?.email) return;

            try {

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/products/user/${session?.user?.email}`
                );

                const data = await res.json();

                setProducts(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchProducts();

    }, [session]);

    console.log(products);

    const confirmDelete = async () => {

        if (!deleteId) return;

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${deleteId}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (!data.success) {
                throw new Error();
            }

            setProducts((prev) =>
                prev.filter((item) => item._id !== deleteId)
            );

            toast.success("Product Deleted");

        } catch {

            toast.error("Delete Failed");

        } finally {

            setDialogOpen(false);

            setDeleteId(null);

        }

    };


    return (
        <section className="py-12">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Manage Items
                    </h1>

                    <p className="mt-2 text-slate-500">
                        View and manage all your listed products.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <ManageItemSkeletonGrid count={products.length || 8} />
                )}

                {/* Empty State */}
                {!loading && products.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
                        <h2 className="text-xl font-semibold text-slate-800">
                            No Products Found
                        </h2>

                        <p className="mt-2 text-slate-500">
                            You haven't added any products yet.
                        </p>
                    </div>
                )}

                {/* Product Grid */}
                {!loading && products.length > 0 && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <ManageItemCard
                                key={product._id}
                                product={product}
                                onDelete={(id) => {
                                    setDeleteId(id);
                                    setDialogOpen(true);
                                }}
                            />
                        ))}
                    </div>
                )}

            </div>

            <AlertDialog
                isOpen={dialogOpen}
                onOpenChange={setDialogOpen}
            >
                <AlertDialog.Backdrop>

                    <AlertDialog.Container>

                        <AlertDialog.Dialog>

                            <AlertDialog.Header>

                                <AlertDialog.Icon status="danger" />

                                <AlertDialog.Heading>
                                    Delete Product?
                                </AlertDialog.Heading>

                            </AlertDialog.Header>

                            <AlertDialog.Body>

                                This product will be permanently deleted.

                            </AlertDialog.Body>

                            <AlertDialog.Footer>

                                <Button
                                    variant="tertiary"
                                    onPress={() => setDialogOpen(false)}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="danger"
                                    onPress={confirmDelete}
                                >
                                    Delete
                                </Button>

                            </AlertDialog.Footer>

                        </AlertDialog.Dialog>

                    </AlertDialog.Container>

                </AlertDialog.Backdrop>
            </AlertDialog>


            

        </section>

    );
}