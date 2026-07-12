"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
    Button,
    Form,
    Input,
    Surface,
    TextField,
    Label,
} from "@heroui/react";

import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginForm() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({});

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);

        const email =
            formData.get("email")?.toString().trim().toLowerCase() || "";

        const password =
            formData.get("password")?.toString() || "";

        const validationErrors: typeof errors = {};

        // Email Validation
        if (!email) {
            validationErrors.email = "Email is required.";
        } else {
            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                validationErrors.email =
                    "Please enter a valid email address.";
            }
        }

        // Password Validation
        if (!password) {
            validationErrors.password =
                "Password is required.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            const { error } =
                await authClient.signIn.email({
                    email,
                    password,
                });

            if (error) {
                toast.error(
                    error.message ??
                    "Invalid email or password."
                );
                return;
            }

            toast.success("Login successful!");

            router.replace("/");
        } catch (err) {
            console.error(err);

            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            {/* Heading */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                    Welcome Back
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Sign in to your ResellHub account.
                </p>
            </div>

            <Surface className="border-none bg-transparent p-0 shadow-none">
                <Form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email */}
                    <TextField
                        name="email"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-slate-700">
                            Email Address
                        </Label>

                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            variant="bordered"
                            radius="md"
                            size="lg"
                            autoComplete="email"
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </TextField>

                    {/* Password */}
                    <TextField
                        name="password"
                        isRequired
                        validationBehavior="aria"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-slate-700">
                            Password
                        </Label>

                        <div className="relative flex w-full items-center">
                            <Input
                                name="password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter your password"
                                variant="bordered"
                                radius="md"
                                size="lg"
                                autoComplete="current-password"
                                className="w-full"
                            />

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword((prev) => !prev);
                                }}
                                className="absolute right-4 z-50 cursor-pointer p-1 text-slate-400 transition-colors hover:text-slate-600"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password}
                            </p>
                        )}
                    </TextField>

                    {/* Login Button */}
                    <Button
                        type="submit"
                        color="primary"
                        radius="md"
                        className="h-12 w-full text-base font-semibold tracking-wide shadow-sm"
                        isLoading={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>

                    {/* Divider */}
                    <div className="relative w-full py-2">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>

                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                                OR
                            </span>
                        </div>
                    </div>

                    {/* Google Login */}
                    <Button
                        type="button"
                        variant="bordered"
                        radius="md"
                        className="h-12 w-full bg-blue-50 font-medium text-slate-700 transition-colors hover:bg-blue-100"
                        onPress={handleGoogleLogin}
                    >
                        <FcGoogle className="mr-2 text-xl" />
                        Continue with Google
                    </Button>

                    {/* Signup Link */}
                    <p className="mt-2 text-center text-sm text-slate-600">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-blue-600 transition-all hover:text-blue-700 hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </Form>
            </Surface>
        </div>
    );
}