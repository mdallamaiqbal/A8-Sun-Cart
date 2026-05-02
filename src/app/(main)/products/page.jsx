import ProductCard from "@/components/shared/ProductCard";

const getProductsData = async () => {
  const res = await fetch('https://sun-cart-server.onrender.com/products');
  const data = await res.json();
  return data;
}


const ProductsPage =async() => {
     const productsData = await getProductsData();
    return (
        <div className="my-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {
            productsData.map((product, ind) => <ProductCard key={ind} product={product} />)
          }
        </div>
        </div>
    );
};

export default ProductsPage;