"use client";

import Link from "next/link";
import { ArrowLeft, Search, ShoppingBag, Home } from "lucide-react";

export default function NotFound() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-50 px-4 py-12">
            
            <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />
            <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-lg text-center">
                
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 border border-blue-100 shadow-sm animate-bounce [animation-duration:3s]">
                    <ShoppingBag size={42} className="text-blue-600 stroke-[1.5]" />
                    <Search size={20} className="absolute -bottom-1 -right-1 rounded-xl bg-amber-400 p-1 text-white shadow-md" />
                </div>

               
                <h1 className="bg-gradient-to-b from-blue-600 to-indigo-600 bg-clip-text text-9xl font-black tracking-tighter text-transparent select-none">
                    404
                </h1>

                
                <h2 className="mt-4 text-2xl font-extrabold text-gray-900 md:text-3xl tracking-tight">
                    Oops! This Deal is Gone
                </h2>

                <p className="mt-4 text-base md:text-lg text-gray-500 max-w-md mx-auto leading-relaxed font-medium">
                    The listing you are looking for might be <span className="text-emerald-600 font-bold">Sold Out</span>, removed by the seller, or shifted to a new category.
                </p>

                
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    
                    <Link
                        href="/"
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                    >
                        <Home size={18} />
                        Explore ResellHub
                    </Link>

                    
                    <button
                        onClick={() => window.history.back()}
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:border-gray-300"
                    >
                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                        Go Back
                    </button>
                </div>

                
                <p className="mt-12 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    ResellHub Marketplace • Security Secured
                </p>
            </div>
        </section>
    );
}