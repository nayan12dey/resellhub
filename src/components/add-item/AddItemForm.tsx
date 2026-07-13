"use client";

import { authClient } from "@/app/lib/auth-client";
import {
    FieldError,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
    Select,
    ListBox,
    Button
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddItemForm() {
    const { data: session } = authClient.useSession();

    const [loading, setLoading] = useState(false);


    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const [errors, setErrors] = useState<{
        title?: string;
        description?: string;
        price?: string;
        location?: string;
        category?: string;
        condition?: string;
        images?: string;
    }>({});

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = Array.from(e.target.files || []);

        if (files.length === 0) return;

        if (files.length > 4) {
            toast.error("Maximum 4 images allowed.");
            return;
        }

        const previews = files.map((file) =>
            URL.createObjectURL(file)
        );

        setPreviewImages(previews);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        setErrors({});

        const formData = new FormData(e.currentTarget);

        const title = formData.get("title")?.toString().trim() || "";
        const description =
            formData.get("description")?.toString().trim() || "";
        const price = formData.get("price")?.toString() || "";
        const location = formData.get("location")?.toString().trim() || "";
        const category = formData.get("category")?.toString() || "";
        const condition = formData.get("condition")?.toString() || "";

        const images = formData.getAll("images") as File[];

        const validationErrors: typeof errors = {};

        if (!title) {
            validationErrors.title = "Title is required.";
        }

        if (!description) {
            validationErrors.description = "Description is required.";
        }

        if (!price) {
            validationErrors.price = "Price is required.";
        }

        if (!location) {
            validationErrors.location = "Location is required.";
        }

        if (!category) {
            validationErrors.category = "Category is required.";
        }

        if (!condition) {
            validationErrors.condition = "Condition is required.";
        }

        if (
            images.length === 0 ||
            (images.length === 1 && images[0].size === 0)
        ) {
            validationErrors.images = "Please upload at least one image.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        try {
            const imageUrls: string[] = [];

            for (const image of images) {

                const imageFormData = new FormData();

                imageFormData.append("image", image);

                const response = await fetch(
                    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                    {
                        method: "POST",
                        body: imageFormData,
                    }
                );

                const result = await response.json();

                if (!result.success) {
                    throw new Error("Image upload failed.");
                }

                imageUrls.push(result.data.url);
            }
            const productData = {
                title,
                description,
                category,
                price: Number(price),
                condition,
                location,
                images: imageUrls,

                seller: {
                    name: session?.user?.name,
                    email: session?.user?.email,
                },

                postedDate: new Date().toISOString().split("T")[0],

                status: "available",

                createdAt: new Date(),

                rating: 0,

                reviews: 0,
            };

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productData),
                }
            );

            const result = await response.json();

            if (!result.success) {
                throw new Error("Failed to add product");
            }

            toast.success("Product Added Successfully");

            form.reset();
            setPreviewImages([]);

        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                console.log(error.message);
            }
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }

    };



    return (
        <Surface className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-semibold">
                Product Information
            </h2>

            <p className="mt-2 text-slate-500">
                Complete all required fields below.
            </p>

            <Form className="mt-8 space-y-6" onSubmit={handleSubmit}>

                {/* Product Title */}
                <TextField
                    name="title"
                    isRequired
                    validationBehavior="aria"
                    className="flex flex-col gap-2"
                >
                    <Label>Product Title</Label>

                    <Input
                        placeholder="Enter product title"
                        variant="bordered"
                        radius="md"
                        size="lg"
                    />

                    {errors.title && (
                        <p className="text-sm text-red-500">
                            {errors.title}
                        </p>
                    )}
                </TextField>

                {/* Description */}
                <div className="flex flex-col gap-2">

                    <Label>Description</Label>

                    <TextArea
                        name="description"
                        placeholder="Write a detailed description..."
                        minRows={5}
                        variant="bordered"
                    />

                    {errors.description && (
                        <p className="text-sm text-red-500">
                            {errors.description}
                        </p>
                    )}

                </div>

                {/* Price */}

                <div className="">

                    <TextField
                        name="price"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-2"
                    >
                        <Label>Resale Price</Label>

                        <Input
                            type="number"
                            placeholder="Enter resale price"
                            variant="bordered"
                        />

                        {errors.price && (
                            <p className="text-sm text-red-500">
                                {errors.price}
                            </p>
                        )}
                    </TextField>

                </div>

                {/* Location */}

                <TextField
                    name="location"
                    isRequired
                    validationBehavior="aria"
                    className="flex flex-col gap-2"
                >
                    <Label>Location</Label>

                    <Input
                        placeholder="Enter location"
                        variant="bordered"
                    />

                    {errors.location && (
                        <p className="text-sm text-red-500">
                            {errors.location}
                        </p>
                    )}
                </TextField>

                <Select
                    name="category"
                    isRequired
                    className="w-full"
                    placeholder="Select Category"
                >
                    <Label>Category</Label>

                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>

                            <ListBox.Item id="Electronics" textValue="Electronics">
                                Electronics
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Fashion" textValue="Fashion">
                                Fashion
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Books" textValue="Books">
                                Books
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Sports" textValue="Sports">
                                Sports
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Home Appliances" textValue="Home Appliances">
                                Home Appliances
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Furniture" textValue="Furniture">
                                Furniture
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                        </ListBox>
                    </Select.Popover>

                    {errors.category && (
                        <p className="text-sm text-red-500">
                            {errors.category}
                        </p>
                    )}
                </Select>

                <Select
                    name="condition"
                    isRequired
                    className="w-full"
                    placeholder="Select Condition"
                >
                    <Label>Condition</Label>

                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>

                            <ListBox.Item id="New" textValue="New">
                                New
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Like New" textValue="Like New">
                                Like New
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Good" textValue="Good">
                                Good
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Used" textValue="Used">
                                Used
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                        </ListBox>
                    </Select.Popover>

                    {errors.condition && (
                        <p className="text-sm text-red-500">
                            {errors.condition}
                        </p>
                    )}
                </Select>

                <div className="space-y-3">

                    <Label>Product Images</Label>

                    <input
                        type="file"
                        name="images"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-slate-500
        file:mr-4
        file:rounded-md
        file:border-0
        file:bg-slate-100
        file:px-4
        file:py-2
        file:text-sm
        file:font-semibold
        file:text-slate-700
        hover:file:bg-slate-200"
                    />

                    <p className="text-xs text-slate-500">
                        Upload up to 4 images.
                    </p>

                    {
                        previewImages.length > 0 && (

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                                {previewImages.map((image, index) => (

                                    <div
                                        key={index}
                                        className="relative h-36 overflow-hidden rounded-xl border border-slate-200"
                                    >

                                        <Image
                                            src={image}
                                            alt={`Preview ${index + 1}`}
                                            fill
                                            sizes="(max-width:768px) 50vw, 25vw"
                                            className="object-cover"
                                            unoptimized
                                        />

                                    </div>

                                ))}

                            </div>

                        )
                    }

                    {errors.images && (
                        <p className="text-sm text-red-500">
                            {errors.images}
                        </p>
                    )}

                </div>

                <Button
                    type="submit"
                    color="primary"
                    radius="md"
                    className="w-full h-12 text-base font-semibold"
                    isLoading={loading}
                >
                    {loading ? "Adding Product..." : "Add Product"}
                </Button>

            </Form>

        </Surface>
    );
}