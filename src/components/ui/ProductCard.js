import Image from 'next/image';
import React from 'react';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  if (!product) {
    return <p className='text-center text-gray-500'>No product available.</p>;
  }

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden  '>
      <div className='relative'>
        <Image src={product.imageUrl} alt={product.title || 'Product image'} width={300} height={300}
          className='rounded-lg  w-full transition-transform duration-300 ease-in-out 
          group-hover:scale-110 ' layout='responsive' />
           {/* <span className="absolute top-2 left-2 bg-[#BDDD01] text-white text-xs font-bold px-2 py-1 ">
            #NEW
          </span>      */}
          <span className="absolute top-2 right-2 bg-[#CC0C39] text-white text-center text-xs font-bold p-1 ">  
            {product.discount}% <br></br>OFF
          </span>
      </div>  
      <div className='p-2 relative '>
        <div className="my-5 text-center font-semibold ">
            <p className='text-sm font-bold text-black text-center'>{product.title}</p>
            <div className="flex justify-center items-center mt-2">
              <Rating rating={product.rating} />
              <span className="text-md ml-2">({product.reviews})</span>
            </div>
             <span className="line-through text-gray-500">₹{product.oldPrice}</span>
             <span className="ml-2 text-xl font-bold">₹{product.newPrice}</span>
        </div>
        <button className='bg-black text-white flex w-full h-10 items-center justify-center 
        rounded-md border  hover:bg-[#BDDD01] transition duration-200'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
