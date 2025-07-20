import Categories from "./components/Categories";
import FeaturedProducts from "./components/Ecom";
import HeroSection from "./components/Hero";
import IpadPro from "./components/IpadPro";
import LatestNews from "./components/LatestNews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <IpadPro />
      <LatestNews />
    </>
  );
}
