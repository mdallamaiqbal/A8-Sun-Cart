import HomeDesign from "@/components/HomeDesign";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";

const getProductsData = async () => {
  const res = await fetch('https://sun-cart-server.onrender.com/products');
  const data = await res.json();
  return data;
}

const Home = async () => {
  const productsData = await getProductsData();
  return (
    <div className="container mx-auto">
      <HomeDesign />
      <div className="my-10 md:my-20">
        <h2 className="text-center mb-5 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-[#F09633] md:text-[#00ACC1]">Popular Products</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {
            productsData.slice(0, 3).map((product, ind) => <ProductCard key={ind} product={product} />)
          }
        </div>
        <div className="flex justify-center mt-10"><Link href={"/products"} className="btn bg-[#F09633] text-white">More Products</Link></div>
      </div>

    </div>
  );
};

export default Home;
