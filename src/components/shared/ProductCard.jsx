import Image from 'next/image';
import React from 'react';
import { IoIosStarHalf } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';
import { MdOutlineStarRate } from 'react-icons/md';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="card bg-[#F8F3E7] h-full flex flex-col shadow-sm">
                <figure className='shadow bg-white rounded-2xl w-[90%] sm:w-[80%]  mx-auto mt-5'>
                    <Image src={product.image} width={300} height={250} className=''  alt={product.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg sm:text-2xl text-[#00ACC1]">{product.name}</h2>
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
                        <button className="btn bg-[#F09633] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;