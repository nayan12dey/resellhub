import Image from "next/image";
import Banner from "../components/home/Banner";
import LatestListings from "../components/home/LatestListings";


export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <LatestListings></LatestListings>
    </div>
  );
}
