"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Main Preview with Swiper Functionality */}
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl border border-slate-200 bg-white p-4 flex items-center justify-center shadow-sm group">

                {/* Main Viewport Container */}
                <div className="relative w-full h-full">
                    <Image
                        src={images[currentIndex]}
                        alt={`Product Preview ${currentIndex + 1}`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-contain"
                    />
                </div>

                {/* Left Controller Arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 p-2 rounded-full border border-slate-200 bg-white text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm hover:bg-slate-50 active:scale-95 z-10 cursor-pointer"
                    aria-label="Previous image"
                >
                    <FiChevronLeft size={20} />
                </button>

                {/* Right Controller Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 p-2 rounded-full border border-slate-200 bg-white text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm hover:bg-slate-50 active:scale-95 z-10 cursor-pointer"
                    aria-label="Next image"
                >
                    <FiChevronRight size={20} />
                </button>

                {/* Dynamic Dot Indicators Overlay */}
                <div className="absolute bottom-4 flex gap-1.5 justify-center w-full">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-5 bg-slate-800" : "w-1.5 bg-slate-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnail Deck */}
            <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => {
                    const isSelected = currentIndex === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`group relative aspect-square w-full overflow-hidden rounded-xl bg-white p-1 border transition-all duration-200 focus:outline-none ${isSelected
                                    ? "border-slate-900 ring-2 ring-slate-900/10"
                                    : "border-slate-200 hover:border-slate-400"
                                }`}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={`Thumbnail view ${index + 1}`}
                                    fill
                                    sizes="100px"
                                    className={`object-contain transition-opacity duration-200 ${isSelected ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                                        }`}
                                />
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}