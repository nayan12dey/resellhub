"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../shared/Container";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    "https://images.unsplash.com/photo-1675546529290-a2147e6e5cd5?q=80&w=1000",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
   
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-slate-100/50 mt-[-20px] md:mt-[-10px] py-4 md:py-8">
      {/* Decorative Background Blur Circles */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none"></div>

      <Container>
        
        <div className="grid min-h-[70vh] grid-cols-1 items-center gap-12 py-6 lg:grid-cols-2">
          
          {/* Left Content Column */}
          <div className="flex flex-col justify-center text-center lg:text-left z-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm animate-pulse">
                ✨ #1 Trusted Marketplace
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl xl:text-6xl tracking-tight">
              Buy & Sell <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Pre-Owned
              </span>{" "}
              Items With Confidence
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-gray-600 mx-auto lg:mx-0">
              Discover quality second-hand products near you or sell your unused
              items in just a few clicks. Safe, fast and completely hassle-free.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/explore"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-700/30 active:scale-98"
              >
                Explore Items
              </Link>

              <Link
                href="/items/add"
                className="rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-98 shadow-sm"
              >
                Sell an Item
              </Link>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">10K+</h3>
                <p className="text-xs md:text-sm font-medium text-gray-500 mt-0.5">Active Listings</p>
              </div>

              <div className="border-x border-gray-100 px-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">5K+</h3>
                <p className="text-xs md:text-sm font-medium text-gray-500 mt-0.5">Happy Users</p>
              </div>

              <div className="pl-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">100+</h3>
                <p className="text-xs md:text-sm font-medium text-gray-500 mt-0.5">Categories</p>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="relative flex justify-center lg:justify-end w-full h-[350px] sm:h-[450px] lg:h-[500px]">
            <div className="relative w-full max-w-xl h-full flex items-center justify-center group">
              
              {/* Main Banner Graphic Container */}
              <div className="relative w-5/6 h-5/6 rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-600 to-sky-400 shadow-2xl border border-white">
                {slides.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                      index === currentSlide
                        ? "opacity-90 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Marketplace Slide ${index + 1}`}
                      fill
                      priority={index === 0}
                      sizes="(max-w-7xl) 50vw, 100vw"
                      className="object-cover mix-blend-overlay transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 outline-none active:scale-90"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 outline-none active:scale-90"
                >
                  <FiChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "w-5 bg-white" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Live Badge Card */}
              <div className="absolute top-4 left-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl flex items-center gap-3 border border-gray-100 animate-bounce [animation-duration:3s] pointer-events-none">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600 text-xl">
                  🛒
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Recently Sold</p>
                  <p className="text-sm font-bold text-gray-800">iPhone 15 Pro</p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 right-0 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col gap-1 min-w-[150px] animate-pulse [animation-duration:4s] pointer-events-none">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <span className="text-sm">⭐</span>
                  <span className="text-sm font-bold text-gray-800">4.9/5 Rating</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">From over 2k buyers</p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Banner;