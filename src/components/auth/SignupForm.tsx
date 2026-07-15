"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Button,
    Form,
    Input,
    Surface,
    TextField,
    Label,
    FieldError,
} from "@heroui/react";

import { Eye, EyeOff, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

export default function SignupForm() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    const [errors, setErrors] = useState<{
        name?: string;
        image?: string;
        email?: string;
        password?: string;
    }>({});

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString().trim() || "";
        const email = formData.get("email")?.toString().trim() || "";
        const password = formData.get("password")?.toString() || "";
        const image = formData.get("image") as File;

        const validationErrors: typeof errors = {};

        if (!name) {
            validationErrors.name = "Name is required.";
        }

        if (!email) {
            validationErrors.email = "Email is required.";
        }

        if (!image || image.size === 0) {
            validationErrors.image = "Profile image is required.";
        }

        if (!password) {
            validationErrors.password = "Password is required.";
        } else {
            if (password.length < 8) {
                validationErrors.password = "Password must be at least 8 characters.";
            } else if (!/[A-Z]/.test(password)) {
                validationErrors.password = "Password must contain at least one uppercase letter.";
            } else if (!/[a-z]/.test(password)) {
                validationErrors.password = "Password must contain at least one lowercase letter.";
            } else if (!/[0-9]/.test(password)) {
                validationErrors.password = "Password must contain at least one number.";
            }
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            // Upload image to imgbb
            const imageFormData = new FormData();
            imageFormData.append("image", image);

            const imageUploadResponse = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                {
                    method: "POST",
                    body: imageFormData,
                }
            );

            const imageResult = await imageUploadResponse.json();

            if (!imageResult.success) {
                toast.error("Image upload failed");
                setLoading(false);
                return;
            }

            const imageUrl = imageResult.data.url;

            // Better Auth Signup
            const { error } = await authClient.signUp.email({
                name,
                email,
                password,
                image: imageUrl,
            });

            if (error) {
                toast.error(error.message ?? "Failed to create account.");
                setLoading(false);
                return;
            }

            toast.success("Account created successfully!");
            router.push("/login");
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            {/* Heading */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                    Create Account
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                    Join ResellHub and start buying & selling quality products.
                </p>
            </div>

            <Surface className="bg-transparent shadow-none border-none p-0">
                <Form onSubmit={handleSubmit} className="space-y-5">

                    {/* Profile Image Preview using next/image */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-slate-200 bg-slate-100 flex items-center justify-center">
                            {previewImage ? (
                                <Image
                                    src={previewImage}
                                    alt="Profile Preview"
                                    fill
                                    sizes="112px"
                                    className="object-cover"
                                    unoptimized // Object URL local previews bypass direct optimization
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-slate-400">
                                    <User size={36} className="stroke-[1.5]" />
                                    <span className="text-xs mt-1 font-medium">No Image</span>
                                </div>
                            )}
                        </div>

                        {/* File Upload Input styling wrapper */}
                        <div className="w-full max-w-[240px]">
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block w-full text-xs text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-xs file:font-semibold
                                    file:bg-slate-50 file:text-slate-700
                                    hover:file:bg-slate-100 cursor-pointer"
                            />
                        </div>

                        {errors.image && (
                            <p className="text-sm text-red-500 font-medium">
                                {errors.image}
                            </p>
                        )}
                    </div>

                    {/* Name */}
                    <TextField
                        name="name"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-slate-700">Full Name</Label>
                        <Input
                            placeholder="Enter your full name"
                            // variant="bordered"
                            // radius="md"
                            // size="lg"
                            className="w-full"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.name}
                            </p>
                        )}
                    </TextField>

                    {/* Email */}
                    <TextField
                        name="email"
                        type="email"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-slate-700">Email Address</Label>
                        <Input
                            placeholder="Enter your email"
                            // variant="bordered"
                            // radius="md"
                            // size="lg"
                            className="w-full"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email}
                            </p>
                        )}
                    </TextField>

                    {/* Password */}
                    {/* <TextField
                        name="password"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-slate-700">Password</Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            variant="bordered"
                            radius="md"
                            size="lg"
                            className="w-full"
                            endContent={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} className="text-red-500" /> : <Eye size={18} className="text-red-500" />}
                                </button>
                            }
                        />

                            
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.password}
                            </p>
                        )}
                    </TextField> */}

                    {/* Password */}
                    <TextField
                        name="password"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-slate-700">Password</Label>

                        {/* relative wrapper  */}
                        <div className="relative w-full flex items-center">
                            <Input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                // variant="bordered"
                                // radius="md"
                                // size="lg"
                                className="w-full"
                            />

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword((prev) => !prev);
                                }}
                                className="absolute right-4 focus:outline-none z-50 cursor-pointer p-1 text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} className="text-gray-500 pointer-events-none" />
                                ) : (
                                    <Eye size={18} className="text-gray-500 pointer-events-none" />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.password}
                            </p>
                        )}
                    </TextField>



                    {/* <TextField
                        name="password"
                        isRequired
                        className="flex flex-col gap-1.5"
                    >
                    <Label className="text-sm font-medium text-slate-700">Password</Label>

                    <div className="relative w-full flex items-center">
                        <Input
                            name="password" // এটি অত্যন্ত জরুরি, তা না হলে FormData এরর ধরবে
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            variant="bordered"
                            radius="md"
                            size="lg"
                            className="w-full font-sans"
                        />

                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault(); // ফর্ম সাবমিট হওয়া প্রতিরোধ করবে
                                setShowPassword((prev) => !prev);
                            }}
                            className="absolute right-4 focus:outline-none z-50 cursor-pointer p-1"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-500 pointer-events-none" />
                            ) : (
                                <Eye className="h-5 w-5 text-gray-500 pointer-events-none" />
                            )}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.password}
                        </p>
                    )}
                </TextField> */}



                    {/* Register Button (Rectangle Type - radius="none" or "md") */}
                    <Button
                        type="submit"
                        // color="primary"
                        // radius="md"
                        className="w-full h-12 text-base font-semibold shadow-sm tracking-wide"
                    // isLoading={loading}
                    >
                        {loading && (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        )}
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>

                    {/* Divider */}
                    <div className="relative w-full py-2">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xs uppercase tracking-wider text-slate-400 font-medium">
                                OR
                            </span>
                        </div>
                    </div>

                    {/* Google Signup (Rectangle Type - radius="md") */}
                    <Button
                        type="button"
                        // variant="bordered"
                        // radius="md"
                        className="w-full h-12 font-medium bg-blue-50 text-slate-700 hover:bg-blue-100 transition-colors"
                        onPress={handleGoogleSignup}
                    >
                        <FcGoogle className="mr-2 text-xl" />
                        Continue with Google
                    </Button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-slate-600 mt-2">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-all"
                        >
                            Sign In
                        </Link>
                    </p>

                </Form>
            </Surface>
        </div >
    );
}