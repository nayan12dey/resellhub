"use client";

import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t bg-slate-900 text-gray-300">
            <Container>
                <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    <div>
                        <Logo className="text-white" />

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            ResellHub is a trusted marketplace where people can buy
                            and sell quality pre-owned products safely and easily.
                        </p>

                        <div className="mt-6 flex gap-4 text-2xl">
                            <Link
                                href="https://github.com/"
                                target="_blank"
                                className="transition hover:text-white"
                            >
                                <FaGithub />
                            </Link>

                            <Link
                                href="https://linkedin.com/"
                                target="_blank"
                                className="transition hover:text-blue-400"
                            >
                                <FaLinkedin />
                            </Link>

                            <Link
                                href="https://facebook.com/"
                                target="_blank"
                                className="transition hover:text-blue-500"
                            >
                                <FaFacebook />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/explore" className="hover:text-white">
                                    Explore
                                </Link>
                            </li>

                            <li>
                                <Link href="/items/add" className="hover:text-white">
                                    Add Item
                                </Link>
                            </li>

                            <li>
                                <Link href="/items/manage" className="hover:text-white">
                                    My Listings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Company
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="hover:text-white">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link href="/privacy" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/terms" className="hover:text-white">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>📧 support@resellhub.com</li>
                            <li>📞 +91 98765 43210</li>
                            <li>📍 Kolkata, India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} ResellHub. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;