import Image from 'next/image';
import React from 'react';

const ProductCard = ({ productData = [] }) => {
  console.log(productData);
  if (!Array.isArray(productData) || productData.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10 px-10'>
        {productData.map(product => (
          <div key={product.id} className='bg-white shadow-lg rounded-lg'>
            <div>
              <Image 
                src={product.imageUrl} 
                alt='product' 
                width={500} 
                height={700} 
                className='rounded-lg w-full' 
                layout='responsive'
              />
              <div className='p-4'>
                <p>{product.description}</p>
                <h3>{product.price}</h3> 
                <button className='bg-black text-white flex w-full h-12 items-center justify-center rounded-full border border-slate-800 hover:bg-gray-800'>
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
