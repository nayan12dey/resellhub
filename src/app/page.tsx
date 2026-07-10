import Image from "next/image";
import Banner from "../components/home/Banner";
import LatestListings from "../components/home/LatestListings";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import MarketplaceStatistics from "../components/home/MarketplaceStatistics";


export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <LatestListings></LatestListings>
       <WhyChooseUs></WhyChooseUs>
       <MarketplaceStatistics></MarketplaceStatistics>
       <Testimonials></Testimonials>
    </div>
  );
}
