"use client";

import Container from "../shared/Container";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Nayan Dey",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I found a premium laptop at an amazing price. The entire buying experience was smooth, secure, and hassle-free.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Seller",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Selling my old smartphone was incredibly easy. Within two days I found a genuine buyer through ResellHub.",
  },
  {
    id: 3,
    name: "Priya Das",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The platform looks modern, trustworthy, and easy to use. I highly recommend ResellHub for buying second-hand products.",
  },
  {
    id: 4,
    name: "Arjun Roy",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "Everything from searching products to contacting sellers feels simple and professional. Great marketplace experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Blur Effect */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-3xl pointer-events-none z-0"></div> */}

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm mb-3">
            💬 Testimonials
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Discover why thousands of buyers and sellers trust ResellHub every day.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="testimonial-swiper-container pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}  
            loop={true}
            speed={1000}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true, 
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="!overflow-visible" 
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto py-4">
                <div className="group h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-blue-950/[0.04] flex flex-col justify-between">
                  
                  <div>
                    {/* Top Layer: Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <Quote
                        size={32}
                        className="text-blue-600/10 group-hover:text-blue-600/20 transition-colors duration-300 transform rotate-180"
                      />
                    </div>

                    {/* Review Text */}
                    <p className="text-sm md:text-base leading-relaxed text-gray-600 font-medium italic">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* User Profile Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-5">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-blue-100 transition-colors duration-300">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base transition-colors group-hover:text-blue-600">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs font-semibold text-gray-400 mt-0.5">
                          Verified User
                        </p>
                      </div>
                    </div>

                    {/* Dynamic Role Badge */}
                    <span className={`rounded-xl px-2.5 py-1 text-xs font-bold tracking-wide border ${
                      testimonial.role === "Buyer" 
                        ? "bg-blue-50 text-blue-600 border-blue-100" 
                        : "bg-emerald-50 text-emerald-600 border-emerald-100"
                    }`}>
                      {testimonial.role}
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

    
      <style jsx global>{`
        .testimonial-swiper-container .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 18px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        .testimonial-swiper-container .swiper-pagination-bullet {
          margin: 0 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;