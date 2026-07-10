import Image from "next/image";
import Banner from "../components/home/Banner";
import LatestListings from "../components/home/LatestListings";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";


export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <LatestListings></LatestListings>
       <WhyChooseUs></WhyChooseUs>
       <Testimonials></Testimonials>
    </div>
  );
}
