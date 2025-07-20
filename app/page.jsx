import Categories from "./components/Categories";
import FeaturedProducts from "./components/Ecom";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
    </>
  );
}
