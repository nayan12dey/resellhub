import Image from "next/image";
import Banner from "../components/home/Banner";
import LatestListings from "../components/home/LatestListings";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import MarketplaceStatistics from "../components/home/MarketplaceStatistics";
import { Suspense } from "react";
import SkeletonGrid from "@/components/shared/SkeletonGrid";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<SkeletonGrid count={8} />}>
        <LatestListings></LatestListings>
      </Suspense>
      <WhyChooseUs></WhyChooseUs>
      <MarketplaceStatistics></MarketplaceStatistics>
      <Testimonials></Testimonials>
    </div>
  );
}
