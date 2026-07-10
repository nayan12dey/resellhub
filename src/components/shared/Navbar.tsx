"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {

     const isLoggedIn = false;

    const navLinks = isLoggedIn
        ? [
            { label: "Home", href: "/" },
            { label: "Explore", href: "/explore" },
            { label: "Add Item", href: "/items/add" },
            { label: "My Listings", href: "/items/manage" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ]
        : [
            { label: "Home", href: "/" },
            { label: "Explore", href: "/explore" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ];

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


   

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <Container>
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Logo />

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-base font-semibold transition-colors duration-200 ${pathname === link.href
                                        ? "text-blue-600"
                                        : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Action (Desktop & Mobile Unified) */}
                    <div className="flex items-center gap-4">

                        {/* Desktop Auth / Profile Conditional Rendering */}
                        <div className="hidden lg:flex items-center gap-4">
                            {isLoggedIn ? (
                                <ProfileDropdown />
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 transition-colors hover:bg-gray-50 active:scale-95"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 shadow-sm active:scale-95"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile-only Profile Dropdown (Hamburger-er bame thakbe look valo hobar jonno) */}
                        {isLoggedIn && (
                            <div className="lg:hidden flex items-center">
                                <ProfileDropdown />
                            </div>
                        )}

                        {/* Mobile Menu Hamburger Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-3xl text-gray-700 transition-colors hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                        </button>
                    </div>

                </div>
            </Container>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white shadow-md animate-in fade-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col space-y-4 px-4 py-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-base font-medium transition-colors ${pathname === link.href
                                        ? "text-blue-600"
                                        : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile View-te user logged in na thakle login/register batan dekhabe */}
                        {!isLoggedIn && (
                            <>
                                <div className="border-t border-gray-100 pt-2"></div>
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;