import Image from "next/image";
import Link from "next/link";
import { IoIosStarHalf } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const getProductsDataId = async (id) => {
  const res = await fetch(`https://sun-cart-server.onrender.com/products`);
  const data = await res.json();
  const product = data.find(p => p.id == id);
  return product;
}
export const metadata = {
  title: "Sun-Cart - Products Details",
};


const ProductDetailsPage =async ({params}) => {
    const {id} =await params;
    const product = await getProductsDataId(id)
    console.log(product)
    return (
        <div className="max-w-3xl mx-auto my-10">
            <div className="card bg-[#F8F3E7] h-full flex flex-col shadow-sm">
                <figure className='shadow bg-white rounded-2xl w-[90%] sm:w-[80%]  mx-auto mt-5'>
                    <Image src={product.image} width={300} height={250} className=''  alt={product.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg sm:text-2xl text-[#00ACC1]">{product.name}</h2>
                    <h3 className='text-[#00ACC1] text-lg sm:text-2xl font-semibold'>{product.brand}</h3>
                    <p className='text-[#00ACC1] text-sm sm:text-base'>{product.description}</p>
                    <ul className='flex justify-between items-center font-bold text-[#00ACC1] text-lg sm:text-2xl'>
                        <li>${product.price}</li>
                        <li className='flex items-center gap-1 leading-none'>
                            <IoStar  className="text-amber-500 text-base sm:text-xl" />
                            <IoStar  className="text-amber-500 text-base sm:text-xl" />
                            <IoIosStarHalf className="text-amber-500 text-base sm:text-xl" />
                            <span className='relative top-0.5'>{product.rating}</span></li>
                    </ul>
                    <div className="card-actions justify-end">
                        <Link href={'/products'} className="btn bg-[#F09633] text-white">More Product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;